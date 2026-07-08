---
type: topic
tags: [StarRocks, 物化视图, 查询改写, 刷新策略, 查询加速, SPJG]
created: 2026-07-08
updated: 2026-07-08
---

# StarRocks 物化视图深度解析：原理、使用与场景

## 概述

StarRocks 的物化视图（Materialized View）是其查询加速体系最核心的能力之一。它将查询结果预计算并物理存储，在后续查询时通过透明改写让查询命中预计算结果，实现**毫秒级响应**。StarRocks 支持两种物化视图：

- **同步物化视图（Rollup）** — 又称 Rollup，本质是带聚合语义的索引
- **异步物化视图（Async MV）** — 强大的独立实体，支持多表 Join、复杂聚合、跨数据源

自 v2.4 起引入异步物化视图，v2.5 起支持查询改写，至今（v4.1）已形成完善的能力体系。

---

## 一、技术原理

### 1.1 两种物化视图对比

| 维度 | 同步物化视图（Rollup） | 异步物化视图（Async MV） |
|------|:--------------------:|:----------------------:|
| 基表 | 仅支持单表 | 支持多表（内表+外表） |
| Join | 不支持 | 全部 Join 类型 |
| 聚合 | 有限聚合函数 | SUM/COUNT/AVG/MIN/MAX/Bitmap/HLL 等全部 |
| 刷新方式 | 基表写入时同步更新 | 定期/手动/基表变更触发 |
| 查询改写 | 自动 | 自动（SPJG 算法） |
| 分区对齐 | 跟随基表分区 | 支持时间粒度上卷对齐 |
| 嵌套 | 不支持 | 支持 |
| 外表支持 | 不支持 | Hive/Iceberg/Hudi/Paimon (v2.5+) |
| 存储 | 跟随基表物理存储 | 独立物理表 |
| 创建代价 | 低（只增加索引） | 较高（独立 ETL 任务） |

### 1.2 异步物化视图的 SPJG 查询改写算法

StarRocks 的异步物化视图采用 **SPJG（Select-Project-Join-GroupBy）** 模式透明查询改写算法，这是目前业界主流的 MV 改写方案。

**核心思想：**

```
用户查询 (SQL AST)
       ↓
  优化器解析
       ↓
  与 MV 定义匹配 ──→ 匹配成功 ──→ 改写为 MV 查询
       ↓ 匹配失败
  回退到基表查询
```

**改写能力矩阵：**

- **单表改写**（v2.5+）：查询基表的列是 MV 的超集时改写
- **Inner Join 改写**（v2.5+）：Join 列和聚合列匹配
- **聚合改写**（v2.5+）：SUM/MIN/MAX/COUNT 等聚合到 MV 的预聚合
- **UNION 改写**（v2.5+）：谓词补偿 + 分区补偿
- **嵌套 MV 改写**（v2.5+）：MV 上建 MV
- **COUNT DISTINCT 改写**（v2.5.6+）：改写至 Bitmap/HLL 计算
- **View Delta Join**（v2.5.4+）：查询的表是 MV 的子集
- **Join 派生改写**（v2.5.8+）：不同 Join 类型之间的改写
- **Full Outer/Semi/Anti Join 改写**（v3.1+）
- **Avg → Sum/Count 改写**（v3.1+）
- **基于视图的 MV 改写**（v3.2.2+）
- **文本级 MV 改写**（v3.3+）：AST 匹配

### 1.3 查询改写流程

```
用户 SQL
   ↓
Parser → AST
   ↓
Analyzer → 绑定元数据
   ↓
Optimizer
   ├── 识别候选 MV（与查询相关的物化视图）
   ├── SPJG 模式匹配（列、Join、聚合、谓词）
   ├── 补偿计算（列缺失补偿、谓词补偿、聚合补偿）
   ├── 等价性验证（结果一致性保证）
   └── 选择最优 MV（CBO 代价评估）
   ↓
最终执行计划（命中 MV 或回退基表）
```

**关键参数：**
- `enable_materialized_view_rewrite`（默认 true）：开关 MV 改写
- `materialized_view_rewrite_mode`（v3.2+）：DEFAULT / LOSELESS / FORCE
- `optimizer_materialized_view_timelimit`（默认 1000ms）：改写超时
- `cbo_materialized_view_rewrite_related_mvs_limit`（默认 64）：候选 MV 数上限

---

## 二、刷新策略

### 2.1 刷新触发条件

| 触发方式 | 说明 | 场景 |
|---------|------|------|
| 自动刷新 | 基表数据变更时自动触发 | 实时性要求高 |
| 定时刷新 | `REFRESH ASYNC EVERY(INTERVAL 1 DAY)` | 固定报表 |
| 手动刷新 | `REFRESH MATERIALIZED VIEW mv_name` | 按需 |
| 分区级刷新 | 增量刷新指定分区 | 大表局部更新 |

### 2.2 自动刷新机制

```
基表数据变更 (INSERT/UPDATE/DELETE)
       ↓
  FE 检测到分区数据变化
       ↓
  计算需要刷新的分区
       ↓
  提交刷新 Task（每批次 partition_refresh_number 个分区）
       ↓
  BE 执行物化视图计算
       ↓
  更新 MV 数据
```

**v3.1.4+ 新增「自动激活」**：
- 对失效 MV 后台自动尝试激活
- 默认 30 秒检测间隔，指数退避至 60 分钟上限

### 2.3 分区对齐策略

| 策略 | 版本 | 说明 |
|------|------|------|
| 等比例对齐 | v2.5+ | MV 分区 = 基表分区，一一对应 |
| 时间上卷对齐 | v2.5+ | MV 分区粒度 > 基表（如天→月） |
| 自定义粒度 | v3.2+ | date_trunc + time_slice/date_slice |
| 多基表对齐 | v3.3+ | 多事实表分区对齐 |
| 多分区列对齐 | v3.5+ | 多维度分区映射 |

### 2.4 增量刷新 vs 全量刷新

```
CREATE MATERIALIZED VIEW daily_sales_mv
REFRESH ASYNC EVERY(INTERVAL 1 HOUR)
PARTITION BY date_trunc('day', sale_date)
AS
SELECT ...
```

- 基表新增一个分区 → MV 只刷新对应分区（增量）
- 基表历史分区修改 → MV 只刷新被修改的分区（增量）
- 首次创建 → 全量刷新

### 2.5 高级刷新参数

```sql
-- 排除非分区维度表，避免全量刷新
CREATE MATERIALIZED VIEW mv_test
PROPERTIES (
    "excluded_trigger_tables" = "dim_tbl",      -- 不触发刷新
    "excluded_refresh_tables" = "dim_tbl"       -- 不参与刷新计算
)
AS
SELECT ...
```

---

## 三、使用方式

### 3.1 创建物化视图

```sql
CREATE MATERIALIZED VIEW [IF NOT EXISTS] <mv_name>
[COMMENT ""]
[REFRERYED [ASYNC | ASYNC EVERY(INTERVAL <num> <unit>)]]
[PARTITION BY <expr>]
[ORDER BY <col>]
[DISTRIBUTED BY HASH(<col>) BUCKETS <n>]
[PROPERTIES ("key"="value", ...)]
AS <query>;
```

### 3.2 创建示例：指标预聚合

```sql
-- 基表：订单明细（百亿级）
CREATE TABLE orders (
    order_id BIGINT,
    user_id INT,
    product_id INT,
    amount DECIMAL(12,2),
    order_date DATE
) PRIMARY KEY (order_id)
PARTITION BY date_trunc('month', order_date);

-- 物化视图：天级聚合
CREATE MATERIALIZED VIEW daily_order_summary
REFRESH ASYNC
PARTITION BY dt
AS
SELECT 
    order_date AS dt,
    product_id,
    COUNT(DISTINCT user_id) AS uv,
    SUM(amount) AS revenue,
    COUNT(*) AS order_cnt
FROM orders
GROUP BY order_date, product_id;
```

### 3.3 创建示例：多表 Join 加速

```sql
-- SSB Schema 场景
CREATE MATERIALIZED VIEW ssb_join_mv
DISTRIBUTED BY HASH(lo_orderkey)
REFRESH ASYNC EVERY(INTERVAL 1 DAY)
AS
SELECT lo_orderkey, lo_revenue, lo_discount,
       c_name, c_city, c_nation,
       p_name, p_category,
       s_name, s_region,
       d_year, d_month
FROM lineorder
JOIN customer ON lo_custkey = c_custkey
JOIN part ON lo_partkey = p_partkey
JOIN supplier ON lo_suppkey = s_suppkey
JOIN dates ON lo_orderdate = d_datekey;
```

### 3.4 管理物化视图

```sql
-- 查看构建/刷新状态
SELECT * FROM information_schema.task_runs
ORDER BY create_time DESC;

-- 手动刷新（同步模式）
REFRESH MATERIALIZED VIEW mv_name WITH SYNC MODE;

-- 粒子替换（无锁）
ALTER MATERIALIZED VIEW mv_name SWAP WITH mv_new;

-- 激活失效 MV
ALTER MATERIALIZED VIEW mv_name ACTIVE;

-- 修改刷新间隔
ALTER MATERIALIZED VIEW mv_name
REFRESH ASYNC EVERY(INTERVAL 30 MINUTE);

-- 诊断改写失败
TRACE REWRITE <query>;
```

### 3.5 改写模式控制

```sql
-- 系统级关闭改写
SET enable_materialized_view_rewrite = false;

-- 容忍数据过期（允许使用旧 MV 数据）
SET materialized_view_rewrite_mode = 'LOSELESS';

-- MV 白名单
SET query_including_mv_names = 'mv1,mv2';

-- MV 黑名单
SET query_excluding_mv_names = 'mv_old';
```

---

## 四、使用场景

### 场景一：实时报表指标预聚合

**问题**：百亿级订单表，20 个实时看板，每个秒级刷新，直接查基表扛不住。

**方案**：

```
订单表 (10亿行/天)
       ↓ 一级聚合
天级销售汇总 MV (聚合产品+地区+渠道)
       ↓ 二级聚合
月级 KPI MV (SUM/COUNT/AVG)
       ↓ 透明改写
看板查询 → 自动命中 MV → 毫秒返回
```

**收益**：查询从 10s+ → 50ms，存储压缩比 10:1。

### 场景二：宽表 Join 加速

**问题**：SSB 测试中 5 张表 Join（lineorder + customer + part + supplier + dates），一次 Join 耗时 30s+。

**方案**：创建包含全部 Join 的 MV，配合 `unique_constraints` 启用 View Delta Join 改写。

**收益**：Join 查询耗时 30s → 100ms，与宽表查询同级别性能。

### 场景三：湖仓加速（数据湖）

**问题**：Hive/Iceberg 上的探查式查询，每次都要远程读取 Parquet 文件。

**方案**：

```sql
CREATE MATERIALIZED VIEW hive_sales_mv
REFRESH ASYNC EVERY(INTERVAL 6 HOUR)
AS
SELECT region, product, SUM(sales) AS total_sales
FROM hive_catalog.db.sales
GROUP BY region, product;
```

**收益**：省去远程 IO，物化后查询快 100x+。

### 场景四：冷热数据分层

**问题**：保留 3 年数据，但只高频查最近 3 个月。

**方案**：MV 配合 `partition_ttl_number=3`，只保留最近 3 个月预计算，历史查询回退到基表。

```sql
-- mv 只保留最近 3 个月分区
-- 3 个月前数据自动淘汰，查询走基表
CREATE MATERIALIZED VIEW hot_sales_mv
REFRESH ASYNC EVERY(INTERVAL 1 HOUR)
PARTITION BY dt
PROPERTIES (
    "partition_ttl_number" = "3"
)
AS SELECT order_date AS dt, ... FROM orders GROUP BY ...;
```

### 场景五：嵌套物化视图（分层建模）

```
ODS (明细层) → DWD (轻度汇总 MV) → DWS (重度汇总 MV) → ADS (应用层 MV)
```

每一层基于上一层 MV 构建，逐层缩减数据量，SQL 透明改写层层命中。

### 场景六：ETL 数据管道替代

用 MV 替代传统 ETL（离线 Spark/Flink 任务）：

- 省去调度系统依赖
- MV 自动感知数据变更
- 分区级增量刷新
- 内置数据一致性保证

---

## 五、最佳实践

### 5.1 设计原则

1. **从高频查询出发**：分析慢查询，识别模式重复的 SQL
2. **合理选择刷新频率**：实时场景用自动刷新，报表场景用定时刷新
3. **分区对齐**：MV 分区与基表对齐，支持增量刷新
4. **维度表排除**：小维度表用 `excluded_trigger_tables/excluded_refresh_tables` 避免全量刷新
5. **监控和诊断**：用 `TRACE REWRITE` 诊断改写失败原因

### 5.2 性能建议

- MV 创建后自动收集统计信息（v3.0+），但大数据量建议手动 `ANALYZE TABLE`
- MV 刷新任务建议分配独立 `resource_group`，避免与查询争资源
- `colocate_with` 属性可以让 MV 与基表实现 Colocate Join
- 使用 `partition_refresh_number` 控制每批次刷新分区数，避免 OOM

### 5.3 已知限制

- 不具备确定性函数（rand/uuid/sleep）不支持改写
- 窗口函数不支持改写
- 外部表 MV 不保证强一致
- JDBC Catalog 上的 MV 不支持查询改写
- 同步 MV（Rollup）不支持多表 Join

---

## 六、版本演进速览

| 版本 | 里程碑 |
|------|--------|
| v2.4 | 异步物化视图首次发布 |
| v2.5 | 查询改写功能上线（Inner Join + 单表聚合 + Union） |
| v2.5.4 | View Delta Join + External Catalog MV |
| v3.0 | JDBC Catalog MV、自动分析统计信息 |
| v3.1 | 排序键、随机分桶、Full Outer Join 改写、SWAP WITH、TTL |
| v3.2 | 自动激活、备份恢复、嵌套 MV |
| v3.3 | 文本级改写、多基表对齐、Auto MV 推荐 |
| v3.4 | 分区级刷新优化、session 属性支持 |
| v3.5 | 多分区列对齐 |
| v4.1 | 持续优化，稳定生产可用 |
