---
type: concept
tags: [Bitmap, bitmap, RoaringBitmap, 用户编码, 标签, 标签生成, ClickHouse, 位图, 万象]
created: 2026-08-03
updated: 2026-08-06
related_sources: 3
---

# 用户-标签 Bitmap 位图构建

## 一句话定义

用户-标签 Bitmap 是一种用 **RoaringBitmap** 压缩位图表示"哪些用户拥有某个标签值"的数据结构，其中每个 bit 位对应一个用户的 `user_code`（bigint 编码），是万象标签圈选系统的核心存储与查询引擎。

## 核心原理

### 为什么用 Bitmap？

在标签圈选场景中，核心操作是大量的集合交并差：

- "过去 7 天活跃 **且** 是 VIP **且** 在北上广深" → 3 个标签的 **交集**
- "关注房产 **或** 关注招聘" → 2 个标签的 **并集**

传统的 `SELECT user_id WHERE ... AND ...` 在大数据量下需要多次 JOIN，而 Bitmap 将集合运算转化为**位运算**（AND / OR / NOT），O(1) 级别完成。

### 数据结构映射

```text
用户集合 ──编码──→ user_code (bigint / uint32)
                      │
                      ▼
         RoaringBitmap bits[user_code] = 1
                      │
                      ▼
标签值 "北京" → label_key='city', label_value='北京'
                bitmap_ids = RoaringBitmap{user_1, user_5, user_99, ...}
```

**核心映射**：`user_code` 的值直接作为 Bitmap 中的 **bit 位置索引**。

## 完整数据流程总览

来源：[数据应用部分分享（离线）](/meishi_docs/万象/归档/_来源文档/数据应用部分分享（离线）.md)

```
业务方配置标签(数据源-标签两级)
        ↓
ETL 感知标签上线/下线 → 数据落位 (宽表 或 JSON 大字段)
        ↓
编码生成 (OneID → user_code, Redis 顺序编码)
        ↓
Spark 离线生成 RoaringBitmap (user_ids = base64)
        ↓
CK 倒排表入库 (物化视图列识别, 无需 merge)
        ↓
圈选查询 (bitmap_and/union, 正交计算避免跨节点拉取)
        ↓
fetch 反解 (bitmap → 实际用户 id)
```

**引擎选型背景**：万象画像服务早期采用 **Spark-Parquet 宽表**（>5w 人群）+ **Elasticsearch**（<5w 人群）双引擎：

| 引擎 | 问题 |
|------|------|
| Parquet 宽表 | 标签增减导致频繁 schema 更新；各业务方表完成时间不一致，局部故障影响整体画像 |
| Elasticsearch | 数据量大时导入性能急速下降；大包查询易造成 IO/CPU 瓶颈 |

最终选型 **ClickHouse**：标签名/标签值构建**倒排表 + 稀疏索引**，通过位图的与或非逻辑规避多表关联的 shuffle 开销；标签增删只需加行（倒排表模型），无需改 schema。

## Bitmap 构建流程

### 阶段一：编码生成

```text
原始用户标识                  OneID                     user_code (bigint)
─────────────    ────────→    ─────    ─────────────→   ──────────────────
wuser_123        映射         oneid#abc    编码服务         1000001
imei_xxx          表          oneid#def       │             1000002
oaid_yyy                       oneid#ghi      │             1000003
                                              │
                              已有编码 → 复用（保证稳定性）
                              新用户   → 新分配（Redis 顺序递增）
```

**顺序编码实现**（保证位图稠密性）：用户 id 范围在 int 内，借助 **Redis 16384 个分桶 + `INCR` 原子递增**分配编码——每次新增编码原子加一。顺序编码让相邻用户编码连续，位图高 16 位索引集中、低 16 位桶内稠密，避免高 16 位扩散导致计算量增加和存储膨胀。

**编码稳定性**是关键设计决策：同一用户的 `user_code` 必须保持不变，否则跨表 Bitmap 交并差会错位。

### 阶段二：按标签值分组 → Bitmap 构建

对于每个 `(datasource_id, label_key, label_value)` 三元组：

```text
输入: 格式化表（已关联 user_code 的标签数据）
      ds_wanxiang_ice_mountains_{type}_formatted

过程:
  1. GROUP BY label_key, label_value
  2. 收集该标签值下的所有 user_code
  3. 将每个 user_code 设为 RoaringBitmap 的 bit

输出: rbm_wanxiang_${datasource_id}_{type}
      位图表，每个 (label_key, label_value) 一行
```

### 阶段三：位图合并（按品牌/id类型维度）

```text
单个数据源的位图 ──→ 预估位图合并 ──→ 最终位图入 CK
                        │
                        ▼
              等待所有数据源 ETL 完成后
              按 品牌_${brand}_${idtype} 聚合
```

### 阶段四：CK 写入与存储优化

**1) datapart 优化**——Spark 离线生成位图字段，CK 通过**物化视图列识别**（`MATERIALIZED base64Decode(user_ids)`），查询时直接使用唯一的位图，无需显式/手动位图聚合。效果：300 亿用户 id + 标签值粒度数据导入从 2-3 小时优化到 **10 分钟**。

**2) datapart 过大问题**——CK 默认将分区内所有 datapart 合并为一个，合并后 datapart 过大，无法发挥多磁盘并行读取能力，查询性能波动甚至翻倍。解决：在 Spark 侧控制写入数据量，生成大小适中的 datapart，避免 merge 放大。

**3) 稀疏索引优化（读放大）**——CK 默认 `index_granularity = 8192` 行/索引粒度；user_id 是 bitmap 列（压缩块常超 1MB），一条索引标记可能对应 .bin 文件几十个数据块，查询时几十个块全读但只有几条是目标数据 → **读放大**。解决：`index_granularity = 128`，减小索引粒度，降低读放大。

**4) 位图格式差异**——CK 底层是 C++ RoaringBitmap 实现：低 16 位基数 < 32 时用 smallSet 存储，≥ 32 时与 Java RoaringBitmap 一致（ArrayContainer/BitmapContainer/RunContainer 三态）。Spark 生成的 Java 位图与 CK C++ 位图通过 base64 序列化兼容。

## 两种编码宽度

### uint32 编码（基础标签）

用于**单值标签**：每个标签只有一个值。

```text
label_key = 'city', label_value = '北京'
  → bitmap 中第 1000001 位 = 1（用户在北京）
  → bitmap 中第 1000002 位 = 0（用户不在北京）

label_key = 'age', label_value = '25'
  → bitmap 中第 1000001 位 = 1（用户 25 岁）
```

**容量**：uint32 最大支持 ~42 亿用户（`2^32 - 1`）。

### uint64 编码（KV 嵌套标签）

用于**键值对嵌套标签**：标签本身是 KV 结构，如 `preference:category=房产, preference:price=高`。

编码方式（推断）：

```text
uint64 bit_position = (hash(tag_sub_key) << 32) | hash(tag_sub_value)
                      ─────────────────────   ──────────────────────
                           高 32 位                  低 32 位
```

这允许在同一个 `label_key` 下区分不同的 KV 组合，每个组合映射到一个 uint64 bit 位。

## CK 中的存储结构

**实际生产表结构**（`hdp_teu_dpd_rpt_wanxiang_{brandId}_{tagtype}_v2_local`，以品牌 23 的 string 标签为例）：

```sql
CREATE TABLE hdp_teu_dpd_clickhousedb.hdp_teu_dpd_rpt_wanxiang_23_string_v2_local
(
    tag_value   String comment '标签值',
    shard       Int32 comment '分片ID',
    user_ids    String comment '用户标识ID的Bitmap并使用Base64加密成String',
    dt          Date comment 'yyyyMMdd',
    tag_name    String comment '标签名',
    user_code   AggregateFunction(groupBitmap, UInt32)
                MATERIALIZED base64Decode(user_ids) comment '用户标识ID的Bitmap',
    _batch_num  String comment '批次时间'
)
ENGINE = ReplicatedMergeTree(
    '/clickhouse/bingshan_cluster/hdp_teu_dpd_clickhousedb/'
    'hdp_teu_dpd_rpt_wanxiang_23_string_v2/shard8', 'replic1')
PARTITION BY (dt, tag_name)
PRIMARY KEY (_batch_num, tag_name, tag_value)
ORDER BY (_batch_num, tag_name, tag_value)
TTL dt + toIntervalDay(7)
SETTINGS max_bytes_to_merge_at_max_space_in_pool = 134217728,
         storage_policy = 'hdd_in_order', index_granularity = 128;
```

**关键设计**：

| 设计点 | 说明 |
|--------|------|
| `user_ids` String | **Base64 编码的 RoaringBitmap 字符串**（`RoaringBitMapBase64UDF` 输出），替代了简单聚合列 |
| `user_code` MATERIALIZED | `AggregateFunction(groupBitmap, UInt32) MATERIALIZED base64Decode(user_ids)` — 插入时**自动物化解码**为位图聚合状态，查询直接 `bitmap_union(user_code)` 无需手动解码 |
| `shard` Int32 | 分片 ID（对应构建侧 4 分片并行：`USER_CODE_INTERVAL` 4 段 user_code 区间） |
| `_batch_num` String | 批次时间，PRIMARY KEY 首字段（同一标签多批次共存，按批次精确命中） |
| 引擎 | `ReplicatedMergeTree`（bingshan_cluster 集群副本表，`_local` 为本地副本表，配合 Distributed 表对外查询） |
| 分区 | `(dt, tag_name)` 双字段分区（按天 + 按标签） |
| 排序 | `(_batch_num, tag_name, tag_value)` — 批次、标签名、标签值三级索引 |
| TTL | `dt + toIntervalDay(7)` — 数据 7 天自动过期清理 |
| 存储策略 | `hdd_in_order`（HDD 顺序写入）+ 128 索引粒度 |

**与旧版（v1 推测结构）的差异**：早期版本采用 `AggregatingMergeTree` + 直接聚合列，生产版改为 **String 列 + MATERIALIZED 物化解码列** 的 ReplicatedMergeTree 设计——写入时只需存 base64 字符串（无需在写入路径执行位图聚合），查询时物化列自动提供 `groupBitmap` 聚合状态，兼顾写入效率与查询性能。

## 查询模式

实际查询面向 `rpt_wanxiang_{brandId}_{tagtype}_view`（Distributed 视图，包装 `_local` 副本表），聚合物化列 `user_code`：

### 单标签人群获取

```sql
SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
FROM hdp_teu_dpd_clickhousedb.hdp_teu_dpd_rpt_wanxiang_10000_string_view
WHERE tag_name = 'city' AND tag_value = '北京'
```

### 多标签交集（人群圈选）

```sql
SELECT bitmap_and(
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10000_string_view WHERE tag_name='city' AND tag_value='北京'),
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10000_string_view WHERE tag_name='is_vip' AND tag_value='1')
)
```

### 用户反查标签

```sql
SELECT uid FROM idmapping_table
WHERE bitmap_contains(
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10000_string_view WHERE tag_name='city' AND tag_value='北京'),
    CAST(code AS INT)  -- user_code → bit 位置
)
```

> 注：`IFNULL(..., bitmap_empty())` 兜底空标签；嵌套标签（KV）查询用 `rpt_wanxiang_{brand}_nested_{type}_view` 的 `sub_tag_name` / `sub_tag_value` 字段，完整示例见 [[bitmap-construction-engineering]] 八·五节。

### 正交计算（shard 分配）——避免跨节点拉取位图

CK 分布式查询默认：各本地节点计算完，把**中间结果位图拉取到协调节点**再计算。位图过大时，拉取过程消耗大量 IO 且形成单点计算瓶颈。

**解决（正交计算）**：编码后的用户 id 在 int 范围内，若有 x 个节点，则 `id / x` 决定该 id 落在哪个 shard——**每个 shard 上包含了该用户的全部标签信息**。这样：

```
圈选条件 tag_name='city' AND tag_value='北京'
  → 每个 shard 本地完成 bitmap_and（只算本 shard 的用户）
  → 只把计算结果（而非中间位图）分发到协调节点汇总
  → 避免中间结果位图的全量拉取 IO
```

实现前提：编码时保证**同一用户的全部标签落在同一 shard**（`id/x` 分桶与顺序编码天然配合）。

### fetch 反解（bitmap → 实际用户 id）

圈选/提取的两阶段模型：

```text
第一阶段 query : 规则交并差运算 → 计算出位图（如上）
第二阶段 fetch: 位图反解 → 实际用户 id
                 通过位图的交运算，避免 join 重操作
```

反解链路：位图 → `bucket bitmap`（BucketRBMUserIds）→ user_code → 编码反解表（Redis hashkey：`品牌ID + abs(hashCode(idtype_code)) % 3亿`）→ 实际 id。

## 大人群包的分桶 Bitmap

对于超大规模人群包（如全量用户），使用**分桶 Bitmap** 策略：

```text
RowKey = bucket_id
Value  = {
    bucketbitmap: RoaringBitmap 的 base64 加密字符串,
    idlist:       bitmap 对应的具体标识值列表
}

分桶逻辑:
  - 将 user_code 按 hash 分到 N 个桶
  - 每个桶独立构建 RoaringBitmap
  - 不足分桶长度的位置补空字符串
  - 补零顺序与 bitmap 中用户 ID 顺序保持一致
```

分桶的好处：
- 减少单个 Bitmap 的大小（避免 OOM）
- 支持并行读取和计算
- 便于增量更新

## 关键技术细节

### 1. 编码稳定性

> "为保证数据之间可以跨表、人群包上传之间的相互交并差计算，尽可能保证编码值不变。"

`user_code` 一旦分配，不会因为用户属性变化而改变。即使 wuser ↔ wimei 的映射关系发生变化，编码也保持稳定。

### 2. 关系编码 vs 画像编码

- **关系编码**：用户在关系数据中已存在 → 直接复用编码
- **画像编码**：用户在关系中不存在 → 额外分配新编码
- 编码来源不同但最终都在同一个编码空间中（均为 bigint），保证 Bitmap 可以跨来源做交并差

### 3. 并发控制

```text
问题: 数据源 A（id类型 1,2,3,4）和数据源 B（id类型 1,2,3,4,5）
      A 先运行合并小文件，B 后运行但 B 先完成
      → B 执行位图合并时读取 A 的数据源 4 位图，但此时 A 的 4 还未生成
      → 读空数据，最终视图缺失

解决: 等待所有数据源 ETL 完成后，记录完成状态，再执行合并操作
     批次 ID 由上游任务直接传递，不再依赖 Redis 查询
```

### 4. 58 定制版 RoaringBitmap

58 使用自研的 RoaringBitmap 分支（`roaringbitmap.git`），支持：
- 特殊的人群包限制逻辑
- 与 Hive/StarRocks/ClickHouse 的互操作
- base64 序列化/反序列化

## 与 StarRocks 的兼容

CK → SR 迁移中，Bitmap 的兼容处理：

```xml
<dependency>
    <groupId>com.starrocks</groupId>
    <artifactId>starrocks-fe</artifactId>
    <version>1.0.0</version>
</dependency>
```

- CK 使用 `bitmap_and` / `bitmap_union` / `bitmap_contains`
- SR 对应使用 `hive_bitmap_udf` 系列函数或自研 `bitmapValue` 类型
- 采用 SR 自研的 Bitmap 变种构建方式

## 相关概念

- [[bitmap-construction-engineering]] — 工程实现详解（基于源码的完整流程）
- [[roaringbitmap]] — RoaringBitmap 数据结构
- [[user-code-encoding]] — 用户编码机制

## 相关主题

- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线
- [[wanxiang]] — 万象数据资产管理平台
- [[用户画像系列：从标签体系到 AI 检索]] — 画像九主题框架：标签存储（宽表/位图）、人群圈选、ID-Mapping、AI 检索全景

## 参考来源

- [数据应用部分分享（离线）](/meishi_docs/万象/归档/_来源文档/数据应用部分分享（离线）.md) — 端到端数据流程与全部优化细节（引擎选型/顺序编码/正交计算/datapart/稀疏索引）
- [画像&关系接入](/meishi_docs/万象/归档/_来源文档/画像&关系接入.md) — 编码与位图组织核心设计
- [编码模块预估位图解决方案](/meishi_docs/万象/归档/_来源文档/编码模块预估位图解决方案.md) — 位图生成并发控制
- [马建彪工作交接](/meishi_docs/万象/归档/_来源文档/马建彪工作交接.md) — 万象系统全貌
