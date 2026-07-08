---
type: topic
tags: [StarRocks, 数据加速, Catalog, 物化视图, Colocate Join, Data Cache, 联邦查询]
created: 2026-07-08
updated: 2026-07-08
---

# StarRocks Catalog 数据加速策略深度分析：同构 vs 异构

## 场景定义

| 维度 | 同构场景（SR → SR） | 异构场景（MySQL → SR） |
|------|---------------------|----------------------|
| 源端 | StarRocks 集群 A | MySQL / PostgreSQL / Oracle |
| 目标端 | StarRocks 集群 B（查询端） | StarRocks（查询端） |
| 核心诉求 | 跨集群查询加速、数据分发 | 实时分析加速、替代 MySQL 分析负载 |
| 数据形态 | 已具备 SR 优势（列存/向量化） | 行存、无物化视图、索引模式不同 |

## 同构场景：SR Catalog → SR

### 方案一：Internal Table + 物化视图 + Colocate Join（推荐）

**技术栈：**
- 数据通过 SMT/Flink CDC 迁移至目标集群 Internal Table
- 使用 Aggregate / Primary Key 模型设计存储
- Colocate Join 加速多表关联
- 异步物化视图透明改写查询

**执行路径：**
```
源SR → SMT/CDC → 目标SR Internal Table
                    ↓
          Colocate Group (关联键同分桶)
                    ↓
           异步物化视图 (预聚合/预关联)
                    ↓
            查询透明改写 → 命中 MV
```

**优势：**
- 完全利用 SR 原生能力：向量化、CBO、列存压缩
- 物化视图自动改写，业务零侵入
- Colocate Join 避免 Shuffle，10亿级表 Join 无压力
- 增量刷新，实时性高

**劣势：**
- 需要同步全量数据，有存储开销
- 数据迁移有延迟（分钟级）

**最佳场景：** 核心业务宽表关联、实时报表、高并发查询

### 方案二：StarRocks External Table（跨集群联邦查询）

目标集群通过 `CREATE TABLE ... ENGINE=starrocks` 映射源集群表。

**优势：** 零数据迁移，即查即用；无存储冗余。
**劣势：** 无法使用 Colocate Join（跨集群）；无法创建物化视图；依赖源集群稳定性。

**最佳场景：** 低频临时查询、跨集群数据探查

### 方案三：异步物化视图 + 跨湖加速

源 SR 数据同步至 Iceberg/Paimon，目标 SR 通过 Iceberg Catalog 读取，在 External Catalog 表上创建异步物化视图。

**优势：** 数据湖统一存储、存算分离；物化视图支持 External Table 增量刷新。
**劣势：** 架构复杂；查询路径更长；运维成本高。

**最佳场景：** 数据湖仓一体架构、冷热分离需求

## 异构场景：MySQL → SR

### 方案一：Flink CDC 实时同步 + Internal Table（推荐）

**技术栈：**
- Flink CDC 实时捕获 MySQL Binlog
- 写入 SR Primary Key 模型（支持 Upsert）
- 配合异步物化视图做预聚合/预关联
- Data Cache 加速热数据访问

```
MySQL Binlog → Flink CDC → SR Primary Table
                              ↓
                       异步物化视图（小时级/天级聚合）
                              ↓
                        查询透明改写加速
```

**优势：**
- 实时性高（秒级延迟），Exactly-Once 语义
- 完全利用 SR 列存+向量化能力
- 物化视图透明改写，业务 SQL 无需改
- 支持复杂 ETL（Join + 聚合 + 过滤）

**劣势：**
- 需要维护 Flink 任务
- 全量同步初始开销较大

**最佳场景：** MySQL 实时报表、替代原 MySQL 分析查询

### 方案二：JDBC Catalog 直连查询

通过 `CREATE EXTERNAL CATALOG jdbc_mysql` 直连 MySQL，依赖 Data Cache 做本地缓存。

```sql
CREATE EXTERNAL CATALOG jdbc_mysql
PROPERTIES (
    "type"="jdbc",
    "user"="root",
    "password"="xxx",
    "jdbc_uri"="jdbc:mysql://127.0.0.1:3306",
    "driver_class"="com.mysql.cj.jdbc.Driver"
);
```

**优势：** 零迁移，秒级接入；Data Cache 块级缓存减少远程 IO。
**劣势：** MySQL 行存+行执行引擎，复杂分析慢；无法创建物化视图；并发高可能打爆 MySQL。

**最佳场景：** 临时探查、MySQL 小表联邦查询、迁移过渡方案

### 方案三：DataX/CloudCanal 定时批量同步 + Aggregate Table

DataX 定时 T+1/T+0 同步，SR 端使用 Aggregate 模型预聚合。

**优势：** 架构简单，查询极快。
**劣势：** 非实时；不支持复杂 Join 预聚合。

**最佳场景：** 运营报表、固定维度 KPI 看板、日汇总

## 核心加速机制对比

| 加速机制 | 同构(SR→SR) | 异构(MySQL→SR) |
|----------|:----------:|:-------------:|
| 列存+向量化引擎 | ✅ 原生 | ✅ 需导入 |
| 物化视图(透明改写) | ✅ 强 | ❌ JDBC不支持 |
| Colocate Join | ✅ 强 | ❌ 不适用 |
| Data Cache | ✅ 存算分离 | ✅ JDBC可用 |
| Primary Key Upsert | ✅ | ✅ Flink CDC后 |
| 聚合表(Aggregate Key) | ✅ | ✅ 批量导入后 |
| 分区裁剪 | ✅ | ✅ 部分下推 |
| 索引(前缀/Zonemap/Bitmap) | ✅ 全部 | ❌ 有限下推 |

## 推荐总结

> 同构选 **Internal Table + 物化视图 + Colocate Join**
> 异构选 **Flink CDC + Primary Key + 物化视图**
> 临时/轻量选 **JDBC Catalog + Data Cache**

---

## Data Cache 开启与配置详解

### 概述

StarRocks Data Cache 是面向**存算分离架构**和**外部数据源（数据湖/JDBC）** 的块级缓存机制。v3.3+ 默认开启，v4.0+ 统一配置接口。

核心作用是：**将远程存储的热数据块缓存到本地磁盘，避免重复拉取远程数据，大幅降低延迟和远程 IO 开销。**

### 架构

```
查询请求
    ↓
┌──────────────┐
│  Page Cache  │  ← 内存缓存（热数据）
│  (内存)      │     容量: datacache_mem_size
└──────┬───────┘
       │ 未命中
┌──────▼───────┐
│  Block Cache │  ← 磁盘缓存（块级）
│  (本地磁盘)  │     容量: datacache_disk_size
│              │     路径: storage_root_path/datacache/
└──────┬───────┘
       │ 未命中
┌──────▼───────┐
│ 远程存储     │
│(HDFS/S3/OSS/ │
│ MySQL ...)   │
└──────────────┘
```

### 版本差异

| 版本 | 状态 | 关键变化 |
|------|:----:|---------|
| v2.5~v3.2 | 可选 | `block_cache_enable=true` 手动开启 |
| v3.3+ | **默认开启** | `datacache_enable=true`，统一 Page Cache + Block Cache |
| v4.0+ | 默认开启 | 简化参数: `datacache_mem_size` + `datacache_disk_size`，废弃旧参数 |

---

### 配置步骤

#### 1. BE/CN 配置文件（be.conf / cn.conf）

```properties
# ===== v3.3+ / v4.0+ 统一配置（推荐） =====

# 全局开关（v3.3+ 默认 true，通常无需显式设置）
datacache_enable = true

# 内存缓存上限（Page Cache）
# 格式: 绝对值(1G/500M) 或 百分比(20% of BE内存)
datacache_mem_size = 20%

# 磁盘缓存上限（Block Cache）
# 格式: 绝对值(500G/2T) 或 百分比(80% of BE磁盘)
datacache_disk_size = 80%

# 缓存数据存放路径（默认在 storage_root_path 下）
storage_root_path = /data/starrocks/storage

# 开启自动调整（v3.3+ 默认 true）
datacache_auto_adjust_enable = true
```

#### 2. 旧版本兼容配置（v3.2 及以下）

```properties
# ===== v3.2 及以下（已废弃，仅兼容） =====

# Block Cache 开关
block_cache_enable = true

# Block Cache 磁盘大小
block_cache_disk_size = 500G

# Block Cache 内存大小
block_cache_mem_size = 50M

# 缓存路径
block_cache_disk_path = /data/starrocks/block_cache

# Page Cache 开关
disable_storage_page_cache = false
```

#### 3. 重启 BE/CN

```bash
# 逐台重启，不影响集群服务
./bin/stop_be.sh
./bin/start_be.sh
```

---

### 按表粒度控制

```sql
-- 建表时禁用 Data Cache（不缓存该表数据）
CREATE TABLE user_portrait (
    user_id BIGINT,
    tag_name VARCHAR,
    tag_value VARCHAR
) PRIMARY KEY (user_id)
PROPERTIES (
    "datacache.enable" = "false"      -- 关闭该表的 Data Cache
);

-- 设置只缓存最近 7 天分区
ALTER TABLE user_portrait
SET ("datacache.partition_duration" = "7");
```

---

### 验证 Data Cache 是否生效

```sql
-- 方法1: 查看 BE/CN 的 DataCacheMetrics
SHOW BACKENDS\G
-- 输出中包含 DataCacheMetrics 字段
-- disk quota / mem quota > 0 表示缓存已启用

-- 方法2: 查看 Compute Node 的指标
SHOW COMPUTE NODES\G

-- 方法3: 通过 BE Web 页面
-- 浏览器访问: http://${BE_HOST}:${BE_HTTP_PORT}/api/datacache/stat
-- 可查看: 缓存配额、命中率、读写量等

-- 方法4: 查询 Profile 中的缓存命中信息
-- 执行 SQL 后在 Profile 中搜索 DataCacheRead/Write 指标
```

**关键指标说明：**

| 指标 | 说明 | 健康值 |
|------|------|--------|
| `DataCacheHitRate` | 缓存命中率 | > 80% |
| `DataCacheReadBytes` | 从缓存读取的字节数 | - |
| `DataCacheWriteBytes` | 写入缓存的字节数 | - |
| `DataCacheReadTime` | 缓存读取耗时 | < 1ms |

---

### Data Cache 在 JDBC Catalog 中的行为

JDBC Catalog 查询 MySQL 时，Data Cache 以**块级别**缓存从 MySQL 拉取的数据：

```text
SELECT * FROM jdbc_mysql.orders WHERE order_date >= '2026-01-01'
                                        ↓
StarRocks BE 拉取 MySQL 数据
                                        ↓
数据以 Block 为单位写入本地 Data Cache
                                        ↓
下次相同查询 → 直接读取本地缓存 → 0 远程 IO
```

**需要注意：**
- Data Cache 缓存的是**块（Block）** 而非查询结果，粒度更细、利用率更高
- 缓存淘汰策略：LRU（最近最少使用）
- 集群重启后本地缓存保留，无需预热
- JDBC Catalog 查询不支持物化视图改写，**Data Cache 是唯一的加速手段**

---

### 常见问题

**Q: Data Cache 和物化视图有什么区别？**

| 特性 | Data Cache | 物化视图 |
|------|:----------:|:--------:|
| 存储 | 原始数据块（按 Block） | 预计算结果（按 SQL） |
| 适用场景 | 探查询、重复扫描 | 固定报表、聚合查询 |
| 维护成本 | 自动 LRU 淘汰 | 需管理刷新策略 |
| 空间占用 | 相对较大 | 相对较小（已聚合） |
| JDBC Catalog | ✅ 支持 | ❌ 不支持 |

**Q: 磁盘空间不够怎么办？**
- 调小 `datacache_disk_size` 比例（如 80% → 50%）
- 或在 `storage_root_path` 挂载更大磁盘
- Data Cache 会自动 LRU 淘汰，不会导致 BE 崩溃

**Q: 为什么 Data Cache 命中率低？**
- 查询模式分散，无热点数据 → 正常
- 缓存容量太小 → 增大 `datacache_disk_size`
- 刚启动/重启 → 等待预热（通常 10~30 分钟）
