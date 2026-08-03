---
type: concept
tags: [Bitmap, RoaringBitmap, 用户编码, 标签, ClickHouse, 位图, 万象]
created: 2026-08-03
updated: 2026-08-03
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

```
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

## Bitmap 构建流程

### 阶段一：编码生成

```
原始用户标识                  OneID                     user_code (bigint)
─────────────    ────────→    ─────    ─────────────→   ──────────────────
wuser_123        映射         oneid#abc    编码服务         1000001
imei_xxx          表          oneid#def       │             1000002
oaid_yyy                       oneid#ghi      │             1000003
                                              │
                              已有编码 → 复用（保证稳定性）
                              新用户   → 新分配（递增 or hash）
```

**编码稳定性**是关键设计决策：同一用户的 `user_code` 必须保持不变，否则跨表 Bitmap 交并差会错位。

### 阶段二：按标签值分组 → Bitmap 构建

对于每个 `(datasource_id, label_key, label_value)` 三元组：

```
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

```
单个数据源的位图 ──→ 预估位图合并 ──→ 最终位图入 CK
                        │
                        ▼
              等待所有数据源 ETL 完成后
              按 品牌_${brand}_${idtype} 聚合
```

## 两种编码宽度

### uint32 编码（基础标签）

用于**单值标签**：每个标签只有一个值。

```
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

```
uint64 bit_position = (hash(tag_sub_key) << 32) | hash(tag_sub_value)
                      ─────────────────────   ──────────────────────
                           高 32 位                  低 32 位
```

这允许在同一个 `label_key` 下区分不同的 KV 组合，每个组合映射到一个 uint64 bit 位。

## CK 中的存储结构

```sql
-- CK 表结构
CREATE TABLE hdp_lbg_zhaopin_clickhousedb.hdp_lbg_zhaopin_zp_bn_crowd (
    dt String,           -- 日期分区
    label_key String,    -- 标签键
    label_value String,  -- 标签值
    bitmap_ids AggregateFunction(groupBitmap, UInt32)  -- RoaringBitmap 聚合状态
) ENGINE = AggregatingMergeTree()
PARTITION BY dt
ORDER BY (label_key, label_value);
```

**关键设计**：
- 使用 ClickHouse 的 `AggregateFunction(groupBitmap, UInt32)` 类型
- `bitmap_union()` 聚合多个分区的位图
- `bitmap_and()` / `bitmap_or()` 实现交并集

## 查询模式

### 单标签人群获取
```sql
SELECT bitmap_union(bitmap_ids)
FROM crowd_table
WHERE label_key = 'city' AND label_value = '北京'
```

### 多标签交集（人群圈选）
```sql
SELECT bitmap_and(
    (SELECT bitmap_union(bitmap_ids) FROM crowd_table WHERE label_key = 'city' AND label_value = '北京'),
    (SELECT bitmap_union(bitmap_ids) FROM crowd_table WHERE label_key = 'is_vip' AND label_value = '1')
)
```

### 用户反查标签
```sql
SELECT uid FROM idmapping_table
WHERE bitmap_contains(
    (SELECT bitmap_union(bitmap_ids) FROM crowd_table WHERE ...),
    CAST(code AS INT)  -- user_code → bit 位置
)
```

## 大人群包的分桶 Bitmap

对于超大规模人群包（如全量用户），使用**分桶 Bitmap** 策略：

```
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

```
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

- [[roaringbitmap]] — RoaringBitmap 数据结构
- [[user-code-encoding]] — 用户编码机制（有待补充）

## 相关主题

- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线
- [[wanxiang]] — 万象数据资产管理平台

## 参考来源

- [画像&关系接入](https://docs.58corp.com/#/space/1519937138676789248) — 编码与位图组织核心设计
- [编码模块预估位图解决方案](https://docs.58corp.com/#/space/1843496489398108160) — 位图生成并发控制
- [马建彪工作交接](https://docs.58corp.com/#/space/2043955735540387841) — 万象系统全貌
