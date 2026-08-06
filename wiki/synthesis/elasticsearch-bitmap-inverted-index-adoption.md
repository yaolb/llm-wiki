---
type: synthesis
tags: [Elasticsearch, Lucene, 倒排索引, Bitmap, RoaringBitmap, 万象, 人群圈选, 方案]
created: 2026-08-06
updated: 2026-08-06
related_sources: 4
---

# Elasticsearch 倒排索引的 Bitmap 机制研究与万象借鉴方案

## 概述

本文基于 [[user-tag-bitmap-construction]]（用户-标签 Bitmap 位图构建）展开，系统研究 Elasticsearch/Lucene 倒排索引中的位图机制，与万象现有 CK+RoaringBitmap 方案对比，并给出三个场景（实时圈选 / 复杂嵌套标签圈选 / 画像分布分析）的借鉴落地设计，含 ES 能力不足时的定制实现分支。

**背景**：万象交接文档已存在「[ES 调研报告](/meishi_docs/万象/归档/_来源文档/ES调研报告.md)」（人群包提取场景的压测优化：`_source:false`、`_sort:_doc`、search_after/scroll/slice），说明团队正在评估 ES 用于标签/人群场景。

**结论先行**：
1. Lucene 存储层**刻意不用位图**存 postings（压缩整数序列更省空间），查询时才**物化为位图**加速交并差——"存时压、查时位图"是核心哲学
2. Lucene 的 `IndexedDISI`（65536 doc 分块 + 三态编码）与万象 `bucket=65536` 分桶**结构同构**，可互相印证
3. ES 的杀手锏是**实时写入 + 组合过滤**（filter context + bitset 缓存），正打中万象实时圈选痛点；但画像分析（聚合）仍是 CK/SR 主场

---

## 一、Lucene/ES 倒排索引中的 Bitmap 机制（源码级）

### 1.1 数据模型：倒排索引 → 位图的三层映射

```text
标签场景:  每个 tag_value = 一个 term
           term → postings list = 包含该标签值的 doc id 集合

ES 内部:   doc id 在 segment 内从 0 顺序分配（连续整数空间）
           postings = 排序后的 doc id 数组

万象映射:  postings ≈ 我们的 RoaringBitmap（user_code 集合）
           ES 不存显式位图，而是存压缩整数序列，查询时物化
```

### 1.2 存储层：postings 的压缩编码（位图之前的世界）

**为什么不用位图存 postings？** 稀疏场景下位图空间浪费严重（10 万 doc 中 3 个命中 → 位图 12.5KB vs 数组 12B）。Lucene 自 4.1 起用 **Frame of Reference (FOR)**：

1. **Delta 编码**：postings 有序 → 存第一个 doc id + 相邻差值。`[73, 300, 302, 332]` → `[73, 227, 2, 30]`
2. **分块 + bit-packing**：每 128 个 doc（经典 256）为一块，取块内**最大 delta 的位宽**写入块头，块内所有 delta 按该位宽紧凑打包
3. **PFOR (Patched FOR)**：允许每块最多 3 个异常值单独存储，主数据用更小位宽——用于 positions/frequencies/payloads；doc ids 的 PFOR 曾探索（[LUCENE-9850](https://github.com/apache/lucene/issues/10889)，约 8% 空间收益但 QPS 有 ±2~5% 波动），Lucene 9.9 后切回 FOR + 混合块
4. **现代格式（Lucene 9+ / ES812PostingsFormat）**：混合块结构——packed 块（128 整数定宽）+ VInt 块（尾部余数）；`.doc`/`.pos`/`.pay` 文件分离；skip data 跳表指向每个块实现 O(1) `advance()`
5. **Singleton 优化**：term 只出现在 1 个 doc 时，doc id 直接存进 term dictionary（`.tim`），完全跳过 `.doc` 文件——**长尾标签值的天然优势**

**对万象的启示**：标签值分布极不均匀（头部标签千万级用户、长尾标签几个用户），Lucene 的自适应位宽 + singleton 优化正好覆盖两端。

### 1.3 查询执行层：位图真正出现的地方

#### IndexedDISI — 磁盘 doc id 集合迭代器（与万象同构！）

`IndexedDISI` 是 Lucene 8+ 的核心，源码注释明确写着 **"inspired by RoaringDocIdSet roaring bitmaps"**，按 **65,536 doc 分块**，每块按密度三态编码：

| 状态 | 条件（块内 doc 数） | 编码方式 |
|------|---------------------|----------|
| ALL | = 65536（全满） | 算术定位，零存储 |
| DENSE | ≥ 4096 | 位图（1024 个 long），可选 rank 结构加速索引 |
| SPARSE | < 4096 | 低 16 位 doc id 的 short 数组 |

**与万象的对应**：万象 bitmap 构建 `bucket = floor(user_code / 65536)` 对齐 RoaringBitmap Container 边界——**Lucene 用同样的 2^16 分块 + 密度自适应**（ArrayContainer < 4096 / BitmapContainer ≥ 4096），两者是同一设计思想的两个实现。

#### 内存位图族

- **FixedBitSet**：`long[]` 位图，`IndexedDISI.writeBitSet()` 用它做 64K 块的缓冲
- **SparseFixedBitSet**：只存非零 long——按 4096 bit 分块，块内 `long index` 位图标记哪些 long 非零 + 偏移，`Long.numberOfTrailingZeros` 跳空；有专门的 `or`/`and`/`andNot` 批量实现（leap-frog 交集，稀疏集合更快）
- **BitSetIterator**：任意 BitSet 的 DocIdSetIterator 包装
- **RoaringDocIdSet**：ES filter cache 中的标准 doc id 集合（RoaringBitmap 的 Lucene 变体）

#### BooleanQuery 执行：位图交并差

- `must`/`filter` 子句的 doc id 集合 = 各 term 的 postings（可能已缓存为 bitset）
- 交并差执行顺序：**从最稀疏的 bitset 开始**迭代（先排除最多文档，后续交集工作量最小）——与万象 DSL 中 `bitmap_and` 嵌套执行策略同理
- MUST_NOT 用 `andNot` 位运算

#### Filter Cache — ES 的杀手锏

- **Query Context vs Filter Context**：`must`/`should` 算相关性分数（不缓存）；`filter`/`must_not` 只看命中与否（**自动缓存为 RoaringBitmap bitset**）
- 缓存策略（Lucene `UsageTrackingQueryCachingPolicy`）：
  - segment < 10,000 doc 不缓存（小段本来就快）
  - 昂贵查询（MultiTermQuery/TermInSetQuery/PointQuery）使用 >2 次后缓存；普通 filter >5 次；**TermQuery 永不缓存**
  - LRU 淘汰，默认 `indices.queries.cache.size` = 堆的 10%，`count` 上限 10,000
  - 增量更新：新 doc 写入后 bitset 增量维护，无需手动过期
- **每个 filter 独立缓存、跨查询复用**——同一个 `term{tag:xxx}` 出现在不同 bool 查询中共享同一 bitset

**对万象的启示**：热门标签（如 `age=25`、`gender=男`）会被多个圈选任务复用，ES 的 filter cache 让这些标签的 postings→bitset 只构建一次——对应万象 CK 中 `bitmap_union` 的重复计算。

### 1.4 应用层：ES 标签场景的工程实践

- **keyword 字段** = 标签字段的标准类型（term query 走倒排索引）
- **doc_values**：列存正排，供排序/聚合/脚本——**不用于过滤**（查询性能远低于倒排索引）；`index:false` 可省空间
- **positions 优化**：positions 占索引 30-40%，标签场景不需要短语查询 → `IndexOptions.DOCS_AND_FREQS`（或 DOCS）关闭 positions，省大量空间
- **已知失败模式**：高基数字段（如 `user_id` 出现在 1-3 个 doc）delta 压缩失效——tag 场景若把用户 id 当 term 索引会踩坑，正确做法是**标签值做 term、用户做 doc**（每 doc 是一个用户 + 其标签集合）

---

## 二、ES vs 万象 CK Bitmap 方案对比

| 维度 | ES (Lucene) | 万象 CK (RoaringBitmap) | 结论 |
|------|-------------|------------------------|------|
| 数据模型 | doc = 用户 + 标签字段（keyword 多值） | 行 = (tag_name, tag_value, bitmap) | 语义等价：term↔标签值，doc↔用户 |
| 用户集合表示 | postings（压缩 int 序列）→ 查询时物化 bitset | 持久化 RoaringBitmap（base64） | 都基于 RoaringBitmap 家族 |
| 写入 | 实时索引（近实时秒级可见） | 天级 Spark ETL 批量 | **ES 完胜（实时性）** |
| 组合过滤 | bool + filter context + bitset 缓存 | bitmap_and/bitmap_union SQL | ES 免重复计算；CK 灵活但每次全量算 |
| 复杂聚合分析 | 弱（聚合框架有限） | 强（groupBitmap/bitmap_count + 物化视图） | **CK 完胜（画像分析）** |
| 嵌套标签 (KV) | nested/flattened 类型，查询慢 | uint64 编码 + unnest_bitmap 解码 | 都有痛点，详见 4.2 |
| 数值范围 | range query（BKD 树） | tag_value 字符串比较（当前实现） | ES 原生数值类型更优 |
| 扩展性 | 集团级 ES 平台，水平扩展 | CK 集群分片 | 已有基建（用户确认） |
| 成本 | 索引空间 ≈ 原数据 1-3 倍 | 位图 + 字典表 | ES 需评估（可关 positions 优化） |

**核心结论**：ES 与 CK 不是替代关系而是**互补**——ES 负责"实时写入 + 即时组合过滤"（圈选入口），CK/SR 负责"批量历史 + 复杂聚合"（画像分析出口）。

---

## 三、万象借鉴方案

### 3.1 场景 B：实时标签 + 实时圈选（优先落地）

**痛点**：万象 4.0 实时人群服务目前受限于 CK 天级 ETL，标签入库到可圈选有数小时延迟。

**方案**：

```text
实时标签流（Kafka）→ ES 索引（秒级可见）→ bool+filter 圈选 → 结果同步 CK 人群包表
                    ↓
            用户 doc 结构: {"user_code": 12345, "tags": ["age:25", "gender:男", "city:北京"]}
            索引: tags 为 keyword 多值字段（IndexOptions.DOCS 关闭 positions）
```

- 圈选查询：`bool.filter` + 多个 `term/terms` 子句——全部走 filter context 自动缓存
- 标签值建议**直接带前缀存**（`age:25` 而非 `25`），避免同值跨标签误命中，并可复用 `terms` 批量查询
- 结果回流：圈选出的 user_code 集合写回 `rpt_wanxiang_user_package_{brand}`（复用现有人群包表 + ver 机制），保持与 CK 方案一致
- **性能基线**（据 ES 调研报告）：人群包提取场景已验证 `_source:false` + `_sort:_doc` 可大幅降低 IO；实时圈选无排序需求，全走 filter 即可

### 3.2 场景 C：复杂嵌套标签圈选

**痛点**：当前 DSL 的嵌套圈选 SQL 最重——跨 sub_tag AND + unnest_bitmap 解码 + 子标签值聚合（HAVING SUM），一条查询数百行。

**方案对比**：

| | 方案 A：原生 flattened | 方案 B：预计算标签 |
|---|---|---|
| 适用 | 单层 KV 过滤 | 聚合型条件（金额求和 > X 等） |
| 实现 | `flattened` 类型（`{"latest_days": 7, "mer_id": 8}`），多个 `term` 组合 | 聚合结果预计算成普通标签（如 `zp_consume_amount_sum_7d`）写入 ES，range 直接可查 |
| 优点 | 无额外 ETL | 复杂查询 → 简单 term/range；查询期计算前移为写入期计算，与现 Spark ETL 定位一致，改动最小 |
| 缺点 | 不支持跨 sub_tag 的"聚合值"条件 | 预计算标签量随组合数增长 |

**推荐：A+B 结合**——简单 KV 过滤走 flattened，聚合型条件走预计算标签。复杂的 unnest_bitmap 解码逻辑留在 CK 侧做历史数据回溯。

### 3.3 场景 D：画像分布分析（结论：不迁移）

**痛点**：无——当前 `bitmap_count(bitmap_and(...))` + 物化视图 + 字典表已秒级返回。

**方案**：画像分析**保留 CK/SR**。ES 的聚合（terms agg + cardinality）在亿级 doc 上的群体统计能力弱于 CK 的 groupBitmap 原生聚合，且 ES 的 doc 模型对"按标签值分组统计覆盖度"（万象标签市场）需要 script/嵌套聚合，性能和可维护性都不如 SQL。ES 圈选结果回流 CK 后，画像分析继续走现有链路。

### 3.4 定制实现分支（ES 能力不足时）

若 ES 平台能力不满足（写入吞吐、查询 QPS、成本），可基于**同一套机制**定制：

1. **方案 1：自研 Lucene 插件**——定制 postings codec（如自适应位宽选择、直接持久化 RoaringBitmap 块），Lucene 开放 codec SPI；`best_compression` 只影响 `_source` 不影响 postings，需自定义 plugin
2. **方案 2：借鉴 IndexedDISI 设计增强 CK**——万象现有 `bucket=65536` 已是同构设计，可进一步：为长尾标签值加 **singleton 优化**（单用户标签不再建位图，直接存 user_code）、为高频标签位图**加缓存层**（对标 filter cache，内存 LRU 缓存热门 tag_value 的 bitmap）
3. **方案 3：混合存储**——热门标签（重复圈选频繁）用位图缓存，长尾标签用压缩整数数组（FOR 思想），查询时按密度自适应物化

---

## 四、落地路线图

| 阶段 | 动作 | 周期 |
|------|------|------|
| 1 | ES 压测：实时标签索引 + 圈选查询（复用现有 ES 调研报告参数优化） | 1-2 周 |
| 2 | 场景 B 试点：一个品牌（如 150）的实时标签接入 + 圈选回流 CK | 2-4 周 |
| 3 | 场景 C 预计算标签建设（聚合型嵌套条件 → 普通标签） | 视标签量 |
| 4 | 评估定制分支（长尾 singleton / 热门位图缓存） | 试点后 |

## 相关页面

- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 位图构建（本方案的基础）
- [[bitmap-construction-engineering]] — Bitmap 构建工程实现详解（含查询 DSL）
- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线
- [[user-code-encoding]] — 用户编码机制
- [[roaringbitmap]] — RoaringBitmap 数据结构
- [[wanxiang]] — 万象平台

## 参考来源

- [Elastic 官方博客：Frame of Reference and Roaring Bitmaps](https://www.elastic.co/blog/frame-of-reference-and-roaring-bitmaps)
- [LUCENE-9850: Explore PFOR for Doc ID delta encoding](https://github.com/apache/lucene/issues/10889)
- [Elasticsearch: The Definitive Guide — All About Caching](https://www.elastic.co/guide/en/elasticsearch/guide/master/filter-caching.html)
- [Lucene 8.5 API: lucene84 codec](https://svn.apache.org/repos/infra/sites/lucene/core/8_5_2/core/org/apache/lucene/codecs/lucene84/package-summary.html)
- [Lucene IndexedDISI 源码](https://github.com/apache/lucene-solr/blob/releases/lucene-solr/8.8.2/lucene/core/src/java/org/apache/lucene/codecs/lucene80/IndexedDISI.java)
- [ES doc_values 官方文档](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/doc-values.md)
- [万象 ES 调研报告](/meishi_docs/万象/归档/_来源文档/ES调研报告.md)
