---
type: concept
tags: [用户编码, user_code, Bitmap, 万象, OneID, 标签]
created: 2026-08-05
updated: 2026-08-05
related_sources: 3
---

# 用户编码机制（User Code Encoding）

## 一句话定义

用户编码（`user_code`，bigint）是万象系统为每个用户分配的**唯一紧凑整数标识**，其数值直接作为 RoaringBitmap 中的 bit 位置索引，是标签圈选、人群包运算、跨表交并差的统一编码基石。

## 核心原理

### 为什么需要编码

原始用户标识（wuser / wimei / imei / oaid / 58app_uid 等）是**字符串**且多态（一个用户有多个 id 类型），无法直接作为位图索引。编码将用户映射为**从 0 开始的稠密整数空间**，使：
- 位图大小可控（bit 位置 = user_code 值）
- 集合运算（交并差）退化为位运算
- 跨表/跨品牌数据可比对

### 编码空间映射

```
原始用户标识                  OneID                     user_code (bigint)
─────────────    ────────→    ─────    ─────────────→   ──────────────────
wuser_123        映射         oneid#abc    编码服务         1000001
imei_xxx         表           oneid#def       │             1000002
oaid_yyy                       oneid#ghi      │             1000003
                                              │
                              已有编码 → 复用（保证稳定性）
                              新用户   → 新分配（递增分配）
```

**核心映射**：`user_code` 值 = Bitmap 中的 bit 位置（`rbm.add((int) userCode)`）。

## 编码分配流程

### 1. 编码关联（入库时）

> "在进行数据组织入库 CK 时，进行用户编码关联。如关联上则直接获取（表示关系或者历史已经对该用户编码），未关联上则调用编码生成新编码。同时需要将新编码 ETL 后，存储编码对应服务。"（画像&关系接入）

| 情况 | 处理 |
|------|------|
| 用户已存在编码 | 直接复用（关系表或历史编码表命中） |
| 新用户 | 调用编码服务生成新编码，ETL 后持久化 |

### 2. 编码表

```
ds_wanxiang_ice_mountains_datasource_user_code          ← 已编码用户
ds_wanxiang_ice_mountains_no_relation_user_code_datasource  ← 无关系的新编码
```

### 3. 关系编码 vs 画像编码

- **关系编码**：用户在关系数据中已存在 → 直接复用关系表中的编码
- **画像编码**：画像数据在关系中不存在 → 额外分配新编码
- 两类编码最终在**同一编码空间**（均为 bigint），保证 Bitmap 可跨来源交并差

### 4. 编码稳定性（关键约束）

> "为保证数据之间可以跨表、人群包上传之间的相互交并差计算，尽可能保证编码值不变。"（画像&关系接入）

- `user_code` 一旦分配**永不改变**，即使 wuser↔wimei 映射、注册绑定关系、imei/oaid 对应关系发生变化
- 变的是 idtype 映射表，不变的是 user_code —— 这是跨表 Bitmap 可计算的前提

## 编码空间与位图

### uint32 / uint64 两种位宽

| 标签类型 | Bitmap 类型 | 编码容量 |
|----------|------------|----------|
| 基础字符串/数值标签 | RoaringBitmap (uint32) | ~42 亿 (2^32) |
| KV 嵌套标签 | Roaring64NavigableMap (uint64) | ~2^64 |

### 编码分桶

```sql
-- 位图构建时分桶，对齐 RoaringBitmap Container 边界（2^16）
CAST(user_code / 65536 AS INT) AS bucket
```

### 分片处理

```java
// UserCodeToRoaringBitmap.java — user_code 空间 4 片并行构建
USER_CODE_INTERVAL = ["0,62378484", "62378484,124756968",
                      "124756968,187135452", "187135452"]
```

## 编码反解（user_code → user_id）

用于人群包反查：给定编码找到真实用户标识。

```
rowkey = "品牌ID_" + "_" + abs(hashCode(idtype + "_" + 编码code)) % 300000000
subKey = idtype + "_" + 编码code
```

- 存储结构：Redis hashkey
- 支持多数据源并发写同一个 key
- 同一编码对应的 id 发生变化时直接覆盖

## 编码在查询侧的作用

```
rpt_wanxiang_user_code_{brandId}_{idtype}_view
```

圈选 SQL 最后一步通常 `bitmap_and` 该视图，确保结果只含指定 idtype 的合法编码空间（如 wb_uid / wb_imei / brokerid），防止无效编码混入人群包。

## 相关概念

- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 位图构建（编码作为 bit 索引）
- [[bitmap-construction-engineering]] — Bitmap 构建工程实现（编码分片/分桶）
- [[roaringbitmap]] — RoaringBitmap 数据结构

## 相关主题

- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线

## 参考来源

- [画像&关系接入](/meishi_docs/万象/归档/_来源文档/画像&关系接入.md) — 编码关联/分配/反解/稳定性设计
- [马建彪工作交接](/meishi_docs/万象/归档/_来源文档/马建彪工作交接.md) — 编码表清单
- [DSL](/meishi_docs/万象/归档/_来源文档/DSL.md) — 编码视图在圈选 SQL 中的应用
