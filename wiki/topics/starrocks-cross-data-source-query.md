---
type: topic
tags: [StarRocks, 数据查询, 跨数据源, 联邦查询, 数据湖, 湖仓一体]
created: 2026-07-07
updated: 2026-07-07
related_sources: 11
---

# StarRocks 跨数据源查询方案（深度调研）

> 基于 StarRocks 官方文档（Latest v4.1）及社区实践整理
> 2026-07-07 更新

---

## 一、概述

StarRocks 自 v2.3 引入 Catalog 机制，到 v3.0+ 全面成熟的跨数据源联邦查询（Federated Query）能力，使 StarRocks 可以作为**统一 SQL 分析引擎**，直接查询 Hive / Iceberg / Hudi / Delta Lake / MySQL / PostgreSQL / ES 等外部数据源，无需数据迁移。

**核心能力矩阵：**

| 能力 | 说明 |
|------|------|
| 零数据迁移 | 直接查询外部数据，无需导入 StarRocks |
| 跨源 JOIN | 同一 SQL 中 JOIN 内部表 + N 个外部数据源 |
| CBO 优化 | 基于代价的优化器，自动选择最佳 Join 策略 |
| Runtime Filter | 运行时过滤下推，减少 Join 数据量 |
| Data Cache | 热数据本地缓存，加速重复查询 |
| 物化视图 | 预计算跨源 JOIN 结果，透明改写加速 |

**参考来源：**
- [StarRocks Catalog 概述](https://docs.starrocks.io/docs/data_source/catalog/catalog_overview/) — 官方核心文档
- [Federated Querying Blog](https://www.starrocks.io/blog/federated-querying-across-apache-iceberg-apache-hudi-apache-hive-delta-lake-apache-paimon-jdbc-based-database-and-others-with-starrocks/index.html) — 官方博客确认跨 Catalog 查询支持

---

## 二、方案一：Catalog（推荐，v3.0+）

### 2.1 架构原理

```
┌─────────────────────────────────────────────────────────────────┐
│                      StarRocks FE                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  SQL Parser → CBO Optimizer → 执行计划生成                 │  │
│  │     ↓ 读取元数据    ↓ 选择 Join 策略   ↓ Runtime Filter    │  │
│  └──────────┬────────────────────────────────────────────────┘  │
└─────────────┼───────────────────────────────────────────────────┘
              │ 调度执行计划
    ┌─────────┴─────────┐
    ▼                   ▼
┌─────────┐      ┌─────────┐
│  BE/CN  │ ...  │  BE/CN  │  ← MPP 并行执行
│  node 1 │      │  node n │
└────┬────┘      └────┬────┘
     │                │
     ├── HDFS/S3 ← 读取外部数据文件
     ├── JDBC   ← 下推谓词到 MySQL/PostgreSQL
     └── ES     ← 下推查询到 Elasticsearch
```

**关键流程：**
1. **元数据获取**：FE 连接外部 Metastore（Hive Metastore / AWS Glue 等），获取表 Schema、分区信息
2. **查询优化**：CBO 基于统计信息，选择 Broadcast Join / Shuffle Join / Colocate Join 等策略
3. **执行下推**：BE/CN 并行从外部存储读取数据，向量化执行引擎处理

**参考来源：**
- [StarRocks CBO 优化器](https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/)
- [StarRocks Inside Scoop: SQL 执行流程](https://medium.com/starrocks-engineering/starrocks-inside-scoop-the-magic-journey-of-an-sql-statement-in-starrocks-c0b713f49c35)

### 2.2 支持的 Catalog 类型（详细）

| Catalog 类型 | 数据源 | 元数据服务 | 最低版本 | 数据存储支持 |
|-------------|--------|-----------|---------|------------|
| **Hive Catalog** | Apache Hive | Hive Metastore / AWS Glue | v2.4 → v3.0 推荐 | HDFS / S3 / GCS / OSS |
| **Iceberg Catalog** | Apache Iceberg | Hive Metastore / AWS Glue / REST / Glue | v2.4 → v3.0 推荐 | HDFS / S3 / GCS / OSS |
| **Hudi Catalog** | Apache Hudi | Hive Metastore / AWS Glue | v3.0 | HDFS / S3 / GCS / OSS |
| **Delta Lake Catalog** | Delta Lake | Hive Metastore / AWS Glue | v3.0 | HDFS / S3 / GCS / OSS |
| **JDBC Catalog** | MySQL / PostgreSQL / Oracle / SQL Server / ClickHouse | 直连 JDBC | v3.0 (MySQL/PG) / v3.2.9 (Oracle/SQL Server) / v3.3.0 (ClickHouse 实验) | — |
| **Elasticsearch Catalog** | Elasticsearch | 直连 ES | v3.1 | — |
| **Paimon Catalog** | Apache Paimon | 文件系统/Hive Metastore | v3.1 | HDFS / S3 / OSS |
| **Unified Catalog** | Hive + Iceberg + Hudi + Delta Lake 统一接入 | Hive Metastore / AWS Glue | v3.2 | HDFS / S3 / GCS / OSS |

**参考来源：**
- [CREATE EXTERNAL CATALOG 语法](https://docs.starrocks.io/docs/sql-reference/sql-statements/Catalog/CREATE_EXTERNAL_CATALOG/) — 所有 Catalog 类型的完整创建语法和样例
- [Unified Catalog 文档](https://docs.starrocks.io/docs/data_source/catalog/unified_catalog/)
- [阿里云 EMR Serverless StarRocks Catalog 使用](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/data-catalog/) — 国内云环境实践

### 2.3 各 Catalog 创建与配置详解

#### 2.3.1 Hive Catalog

```sql
-- 基于 Hive Metastore（最常见）
CREATE EXTERNAL CATALOG hive_catalog
PROPERTIES (
    "type" = "hive",
    "hive.metastore.uris" = "thrift://<metastore_host>:9083"
);

-- 基于 AWS Glue
CREATE EXTERNAL CATALOG hive_glue
PROPERTIES (
    "type" = "hive",
    "hive.metastore.type" = "glue",
    "aws.hive.metastore.glue.aws-access-key" = "xxxxx",
    "aws.hive.metastore.glue.aws-secret-key" = "xxxxx",
    "aws.hive.metastore.glue.endpoint" = "https://glue.us-east-1.amazonaws.com"
);
```

#### 2.3.2 JDBC Catalog（常用于 MySQL/PostgreSQL）

```sql
-- MySQL 示例
CREATE EXTERNAL CATALOG mysql_catalog
PROPERTIES (
    "type" = "jdbc",
    "user" = "root",
    "password" = "xxxx",
    "jdbc_uri" = "jdbc:mysql://192.168.1.100:3306",
    "driver_url" = "https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/mysql-connector-java-8.0.30.jar",
    "driver_class" = "com.mysql.cj.jdbc.Driver"
);

-- PostgreSQL 示例
CREATE EXTERNAL CATALOG pg_catalog
PROPERTIES (
    "type" = "jdbc",
    "user" = "postgres",
    "password" = "changeme",
    "jdbc_uri" = "jdbc:postgresql://192.168.1.100:5432/mydb",
    "driver_url" = "https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar",
    "driver_class" = "org.postgresql.Driver"
);
```

**⚠️ 注意事项：**
- BE/CN 节点需要能访问 `driver_url` 下载驱动 JAR
- BE/CN 节点需要配置 `JAVA_HOME` 为 JDK 绝对路径（不是 JRE）
- 修改后需重启 BE/CN

#### 2.3.3 Iceberg Catalog

```sql
-- 基于 Hive Metastore
CREATE EXTERNAL CATALOG iceberg_catalog
PROPERTIES (
    "type" = "iceberg",
    "iceberg.catalog.type" = "hive",
    "iceberg.catalog.hive.metastore.uris" = "thrift://<host>:9083"
);

-- 基于 Iceberg REST Catalog
CREATE EXTERNAL CATALOG iceberg_rest
PROPERTIES (
    "type" = "iceberg",
    "iceberg.catalog.type" = "rest",
    "iceberg.catalog.uri" = "http://<rest_host>:8181/api/catalog"
);
```

#### 2.3.4 Unified Catalog（统一接入多种湖格式）

```sql
CREATE EXTERNAL CATALOG unified_catalog
PROPERTIES (
    "type" = "unified",
    "hive.metastore.uris" = "thrift://<metastore_host>:9083"
);
```

Unified Catalog 可以在同一个 Catalog 下访问 Hive / Iceberg / Hudi / Delta Lake 四种格式的表。

#### 2.3.5 Elasticsearch Catalog

```sql
CREATE EXTERNAL CATALOG es_catalog
PROPERTIES (
    "type" = "es",
    "elasticsearch.hosts" = "http://<es_host>:9200",
    "elasticsearch.user" = "username",
    "elasticsearch.password" = "password"
);
```

**参考来源：**
- [JDBC Catalog 完整配置](https://docs.starrocks.io/docs/data_source/catalog/jdbc_catalog/)
- [Hive Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/hive_catalog/)
- [Iceberg Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/iceberg/iceberg_catalog/)
- [Elasticsearch Catalog 配置](https://docs.starrocks.io/docs/data_source/catalog/elasticsearch_catalog/)

---

## 三、跨数据源查询 SQL 模式详解

### 3.1 基础查询

```sql
-- 查看所有 Catalog
SHOW CATALOGS;

-- 切换 Catalog
SET CATALOG hive_catalog;

-- 三段式直接查询
SELECT * FROM hive_catalog.hive_db.orders LIMIT 10;

-- 切换到默认 Catalog 后查询外部表
SET CATALOG default_catalog;
SELECT * FROM hive_catalog.hive_db.orders WHERE dt = '2026-07-07';
```

### 3.2 跨 Catalog JOIN（核心能力）

```sql
-- 场景1：Hive 订单表 × StarRocks 用户表 × MySQL 商品表
SELECT
    o.order_id,
    o.order_amount,
    u.user_name,
    u.user_level,
    p.product_name,
    p.category
FROM hive_catalog.hive_db.orders o                    -- Hive 外部表
JOIN default_catalog.olap_db.dim_users u              -- StarRocks 内部表
  ON o.user_id = u.user_id
JOIN mysql_catalog.mysql_db.dim_products p            -- MySQL 外部表
  ON o.product_id = p.product_id
WHERE o.order_date >= '2026-01-01'
  AND u.user_level = 'VIP'
  AND p.category = 'Electronics';
```

### 3.3 跨 Catalog 子查询

```sql
-- Hive 子查询 × StarRocks 主查询
SELECT *
FROM default_catalog.olap_db.sales s
WHERE s.product_id IN (
    SELECT product_id
    FROM hive_catalog.hive_db.products
    WHERE category = 'Hot'
);
```

### 3.4 跨 Catalog CTE（公共表表达式）

```sql
WITH vip_users AS (
    SELECT user_id, user_name
    FROM mysql_catalog.mysql_db.dim_users
    WHERE level = 'VIP'
),
recent_orders AS (
    SELECT *
    FROM hive_catalog.hive_db.orders
    WHERE order_date >= '2026-06-01'
)
SELECT
    v.user_name,
    COUNT(*) AS order_count,
    SUM(o.amount) AS total_amount
FROM vip_users v
JOIN recent_orders o ON v.user_id = o.user_id
GROUP BY v.user_name
ORDER BY total_amount DESC;
```

### 3.5 将外部表数据导入 StarRocks（物化）

```sql
-- INSERT INTO SELECT 实现批量导入
INSERT INTO default_catalog.olap_db.internal_orders
SELECT * FROM hive_catalog.hive_db.orders
WHERE dt = '2026-07-07';

-- CTAS（Create Table As Select）
CREATE TABLE default_catalog.olap_db.order_summary AS
SELECT
    o.order_date,
    p.category,
    SUM(o.amount) AS total_amount,
    COUNT(*) AS order_count
FROM hive_catalog.hive_db.orders o
JOIN mysql_catalog.mysql_db.dim_products p ON o.product_id = p.product_id
GROUP BY o.order_date, p.category;
```

**参考来源：**
- [查询外部数据](https://docs.starrocks.io/docs/data_source/catalog/query_external_data/) — 官方查询语法指南
- [SELECT JOIN](https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/SELECT/SELECT_JOIN/) — JOIN 语法官方文档

---

## 四、方案二：外部表（v2.3–v3.0 方案，已不推荐）

> ⚠️ **StarRocks 官方已明确不推荐使用外部表**，除 StarRocks 集群间写入外，所有场景都应迁移到 Catalog。

**详见官方说明：**
- [External Table 文档](https://docs.starrocks.io/docs/data_source/External_table/) — 明确标注"From v3.0 onwards, we recommend that you use catalogs"

### 唯一的保留场景：跨 StarRocks 集群写入

用于**读写分离**和**跨集群同步**：

```sql
-- 目标集群：创建目标表
CREATE TABLE t (k1 DATE, k2 INT, k3 VARCHAR(2048))
ENGINE=olap
DISTRIBUTED BY HASH(k1);

-- 源集群：创建外部表
CREATE EXTERNAL TABLE external_t
(k1 DATE, k2 INT, k3 VARCHAR(2048))
ENGINE=olap
DISTRIBUTED BY HASH(k1)
PROPERTIES (
    "host" = "127.0.0.1",  -- 目标集群 FE 地址
    "port" = "9020",        -- FE RPC 端口
    "user" = "user",
    "password" = "passwd",
    "database" = "db_test",
    "table" = "t"
);

-- 写入数据
INSERT INTO external_t SELECT * FROM source_table;
```

**限制：** 只能 INSERT INTO / SHOW CREATE TABLE，**不能查询/DDL**，元数据每 10 秒同步。

---

## 五、性能优化深度分析

### 5.1 Data Cache（数据缓存）

> **核心机制**：将远程存储的热数据缓存到 BE/CN 本地磁盘，避免重复的远程 I/O。

从 v3.3.0 起默认启用，由两个组件构成：

| 组件 | 存储介质 | 缓存策略 | 缓存内容 |
|------|---------|---------|---------|
| **Page Cache** | 内存 | LRU | 解压后的数据页、索引页、外部表 Footer |
| **Block Cache** | 本地磁盘（推荐 NVMe） | LRU / SLRU | 远程数据文件的分块（固定大小） |

**配置参数（BE 配置）：**

```properties
# Data Cache 总开关（v3.3+ 默认 true）
datacache_enable = true

# 内存上限
datacache_mem_size = 2GB

# 磁盘上限
datacache_disk_size = 100GB

# SLRU 策略更优（抵抗突发稀疏流量穿透热数据）
block_cache_eviction_strategy = slru
```

**SLRU vs LRU：** SLRU（Segmented LRU）将缓存分为驱逐段和保护段，第二次访问的数据提升到保护段，防止"一次性临时数据"把热数据挤出。

**参考来源：**
- [Data Cache 官方文档](https://docs.starrocks.io/docs/data_source/data_cache/) — 包含 Page Cache + Block Cache 完整原理

### 5.2 CBO 优化器与 Join 策略

StarRocks 基于 **Cascades 框架**的 CBO 优化器（自研），支持：

| Join 策略 | 适用场景 | 说明 |
|-----------|---------|------|
| **Broadcast Join** | 小表 JOIN 大表 | 小表广播到所有 BE 节点，避免 Shuffle |
| **Shuffle Join** | 大表 JOIN 大表 | 按 Join Key 重新分布数据 |
| **Colocate Join** | Co-located 表 JOIN | 数据已按 Key 分布在同一节点，零网络传输 |
| **Replicated Join** | 小表复制 | 小表全量复制到每个节点 |

**对于跨 Catalog 查询**，CBO 支持：

1. **统计信息收集**（v3.2.0+）：可从 Hive / Iceberg / Hudi 等外部表采集统计信息，辅助 CBO 决策
2. **Runtime Filter 下推**：Hash Join 构建右表 Hash Table 后，将过滤条件下推到左表 Scan 阶段，大幅减少扫描数据量
3. **Join 顺序优化**：自动选择最优的 Join 顺序

**参考来源：**
- [CBO 优化器文档](https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/)
- [Why Joins Are Faster in StarRocks](https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect/index.html)
- [CMU 对 StarRocks CBO 的技术分析](https://kangkaisen.com/post/cmu-starrocks-query-optimizer) — 详细技术博客

### 5.3 谓词下推（Predicate Pushdown）

| 数据源 | 下推能力 | 说明 |
|--------|---------|------|
| Hive（Parquet/ORC） | ✅ 分区裁剪 + 谓词下推 | 利用 Parquet/ORC 的 min/max 统计信息 |
| JDBC（MySQL/PostgreSQL） | ✅ 支持下推 | WHERE 条件下推到外部数据库执行 |
| Elasticsearch | ✅ 支持下推 | 查询条件推送到 ES |
| Iceberg | ✅ 分区裁剪 + 谓词下推 | 支持 Iceberg 的 manifest 过滤 |
| Hudi | ✅ 支持 | 利用 Hudi 的元数据索引 |

**JDBC JOIN 下推（v3.x 实验功能）：**

```sql
-- 开启 JDBC JOIN 下推
SET enable_jdbc_join_push_down = true;
```

允许某些 INNER JOIN / CROSS JOIN 下推到 JDBC 外部数据库执行，利用外部数据库的索引加速。

### 5.4 物化视图加速跨源查询

从 v3.1 起，StarRocks 支持在**外部表/多源 Join 之上**创建异步物化视图，实现透明查询改写加速：

```sql
-- 跨数据源物化视图
CREATE MATERIALIZED VIEW mv_order_analysis
DISTRIBUTED BY HASH(order_date)
REFRESH ASYNC EVERY 10 MINUTES
AS
SELECT
    o.order_date,
    p.category,
    u.city,
    SUM(o.amount) AS revenue,
    COUNT(DISTINCT o.user_id) AS user_count
FROM hive_catalog.hive_db.orders o
JOIN mysql_catalog.mysql_db.dim_products p ON o.product_id = p.product_id
JOIN default_catalog.olap_db.dim_users u ON o.user_id = u.user_id
GROUP BY o.order_date, p.category, u.city;
```

查询会自动改写：后续查询该 JOIN 结果的 SQL 会被路由到物化视图，无需重新执行 Join。

**参考来源：**
- [阿里云 EMR StarRocks 物化视图加速数据湖](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/use-materialized-views-to-accelerate-data-lake-queries)

### 5.5 查询调优实践

```sql
-- 查看执行计划
EXPLAIN SELECT * FROM hive_catalog.hive_db.orders WHERE dt = '2026-07-07';

-- 查看详细 Profile（执行后）
SHOW PROFILELAST;
-- 或通过 Query Profile 页面查看

-- 启用 Runtime Filter（默认开启）
SET enable_global_runtime_filter = true;

-- 调整广播阈值（用于 Broadcast Join 优化）
SET broadcast_row_limit = 15000000;
```

**调优要点：**
1. 避免 `SELECT *`，只查询需要的列
2. 尽量使用分区裁剪（Partition Pruning）
3. 对频繁查询的外部数据，使用 Data Cache 加速
4. 对跨源 JOIN 的场景，考虑建物化视图预计算

**参考来源：**
- [StarRocks 查询调优最佳实践](https://www.starrocks.io/blog/starrocks-best-practices-queries/index.html)
- [StarRocks 查询调优文档](https://docs.starrocks.io/docs/category/query-tuning/)

---

## 六、对比分析：Catalog vs 外部表 vs Trino Connector

| 维度 | **Catalog（推荐）** | **外部表（旧）** | **Trino Connector** |
|------|-------------------|----------------|-------------------|
| 引入版本 | v3.0+ | v2.3 | 任意 |
| 方向 | StarRocks 查外部数据 | StarRocks 查外部数据（旧） | Trino 查 StarRocks 数据 |
| 使用复杂度 | 低（创建一次 Catalog） | 中（每个表建一次） | 低（安装插件） |
| 性能 | 优（Data Cache / CBO） | 一般（无 Data Cache 优化） | 取决于 Trino |
| 跨源 JOIN | ✅ 原生支持 | ❌ 不推荐 | ✅ Trino 端支持 |
| 数据写入外部 | ❌ 不支持 | ✅ 仅限 StarRocks→StarRocks | ✅ Trino INSERT |
| 官方推荐度 | ✅ 强烈推荐 | ⚠️ 已不推荐 | 适用 Trino 生态 |

---

## 七、生产环境最佳实践

### 7.1 部署建议

| 组件 | 建议 |
|------|------|
| **StarRocks 版本** | ≥ v3.2（支持 Unified Catalog + 物化视图 + 外部表统计信息） |
| **BE 磁盘** | 启用 Data Cache 时，推荐 NVMe SSD 作为缓存盘 |
| **网络** | StarRocks BE ↔ 外部存储（HDFS/S3）之间的带宽要充足 |
| **元数据服务** | Hive Metastore 建议独立部署，避免查询压力影响源系统 |

### 7.2 选型决策树

```
需要查询的数据源是什么？
├── Hive / Iceberg / Hudi / Delta Lake
│   └── 使用对应的 Catalog（或 Unified Catalog）
├── MySQL / PostgreSQL / Oracle / SQL Server
│   └── 使用 JDBC Catalog
├── Elasticsearch
│   └── 使用 Elasticsearch Catalog
├── Apache Paimon
│   └── 使用 Paimon Catalog
├── 多种湖格式混用（Hive + Iceberg + Hudi + Delta Lake）
│   └── 使用 Unified Catalog（v3.2+）
└── 跨 StarRocks 集群写入
    └── 使用 StarRocks External Table（唯一保留场景）
```

### 7.3 性能优化检查清单

- [ ] Data Cache 是否已启用并分配足够磁盘空间？
- [ ] 外部表是否采集了统计信息？（`ANALYZE TABLE`）
- [ ] 查询是否利用了分区裁剪？（WHERE 条件包含分区字段）
- [ ] Runtime Filter 是否开启？
- [ ] 是否创建了合适的物化视图？
- [ ] 频繁读取的 JDBC 源是否开启了 JOIN 下推？
- [ ] BE 节点磁盘是否使用 NVMe？

### 7.4 已知限制

1. **JDBC Catalog 不支持 Data Cache**（数据不上缓存盘）
2. **外部表不支持创建索引**
3. **跨 Catalog 写入**：仅 StarRocks 外部表支持 INSERT INTO
4. **物化视图刷新**：异步物化视图有数据延迟（分钟级）
5. **JDBC 连接数**：每个 BE 节点会建立到 JDBC 源的连接，注意连接池限制

---

## 八、社区案例参考

| 公司 | 场景 | 方案 |
|------|------|------|
| **理想汽车** | 加速 Hive 数据查询 | StarRocks Catalog 直接查询 Hive 表 |
| **同程旅行** | 用户画像分析 | Unified Catalog 整合 Hive + MySQL |
| **七猫** | 用户行为分析 | StarRocks 跨数据源 JOIN 分析 |
| **多个云厂商** | 湖仓一体化 | EMR Serverless StarRocks + Catalog |

**参考来源：**
- [StarRocks 用户实践合集](https://forum.mirrorship.cn/t/topic/12153)
- [Apache Polaris + StarRocks 一体化湖仓](https://polaris.apache.org/blog/2025/10/21/starrocks-and-apache-polaris-integration-building-a-unified-high-performance-data-lakehouse/)

---

## 九、参考资料汇总

### 官方文档（StarRocks v4.1）

| 文档 | 链接 |
|------|------|
| Catalog 概述 | https://docs.starrocks.io/docs/data_source/catalog/catalog_overview/ |
| CREATE EXTERNAL CATALOG | https://docs.starrocks.io/docs/sql-reference/sql-statements/Catalog/CREATE_EXTERNAL_CATALOG/ |
| 查询外部数据 | https://docs.starrocks.io/docs/data_source/catalog/query_external_data/ |
| Data Cache | https://docs.starrocks.io/docs/data_source/data_cache/ |
| CBO 优化器 | https://docs.starrocks.io/docs/using_starrocks/Cost_based_optimizer/ |
| 查询调优 | https://docs.starrocks.io/docs/category/query-tuning/ |
| 外部表（旧） | https://docs.starrocks.io/docs/data_source/External_table/ |
| JDBC Catalog | https://docs.starrocks.io/docs/data_source/catalog/jdbc_catalog/ |
| Hive Catalog | https://docs.starrocks.io/docs/data_source/catalog/hive_catalog/ |
| Iceberg Catalog | https://docs.starrocks.io/docs/data_source/catalog/iceberg/iceberg_catalog/ |
| Hudi Catalog | https://docs.starrocks.io/docs/data_source/catalog/hudi_catalog/ |
| Delta Lake Catalog | https://docs.starrocks.io/docs/data_source/catalog/deltalake_catalog/ |
| Unified Catalog | https://docs.starrocks.io/docs/data_source/catalog/unified_catalog/ |
| ES Catalog | https://docs.starrocks.io/docs/data_source/catalog/elasticsearch_catalog/ |
| Paimon Catalog | https://docs.starrocks.io/docs/data_source/catalog/paimon_catalog/ |
| StarRocks SELECT JOIN | https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/SELECT/SELECT_JOIN/ |

### 官方博客

| 文章 | 链接 |
|------|------|
| Federated Querying（联邦查询） | https://www.starrocks.io/blog/federated-querying-across-apache-iceberg-apache-hudi-apache-hive-delta-lake-apache-paimon-jdbc-based-database-and-others-with-starrocks/index.html |
| Why Joins Are Faster | https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect/index.html |
| 查询最佳实践 | https://www.starrocks.io/blog/starrocks-best-practices-queries/index.html |
| StarRocks 整体介绍 | https://www.starrocks.io/blog/introduction_to_starrocks/index.html |
| SQL 在 StarRocks 的执行旅程 | https://medium.com/starrocks-engineering/starrocks-inside-scoop-the-magic-journey-of-an-sql-statement-in-starrocks-c0b713f49c35 |

### 第三方资料

| 来源 | 链接 |
|------|------|
| 阿里云 EMR StarRocks Catalog | https://help.aliyun.com/zh/emr/emr-serverless-starrocks/data-catalog/ |
| 阿里云 EMR 物化视图加速数据湖 | https://help.aliyun.com/zh/emr/emr-serverless-starrocks/use-materialized-views-to-accelerate-data-lake-queries |
| Apache Polaris + StarRocks 湖仓一体 | https://polaris.apache.org/blog/2025/10/21/starrocks-and-apache-polaris-integration-building-a-unified-high-performance-data-lakehouse/ |
| StarRocks vs Redshift 多源联邦查询对比 | https://medium.com/@indomitability/why-starrocks-is-better-than-redshift-for-multi-source-data-federation-968caadb31b9 |
| CMU 对 StarRocks CBO 的技术分析 | https://kangkaisen.com/post/cmu-starrocks-query-optimizer |
| StarRocks 社区论坛实践案例 | https://forum.mirrorship.cn/t/topic/12153 |
