---
type: entity
tags: [Bitmap, RoaringBitmap, 数据结构, 开源库, 万象]
created: 2026-08-05
updated: 2026-08-05
related_sources: 3
---

# RoaringBitmap

## 概述

RoaringBitmap 是一种高效的压缩位图（Bitmap）数据结构，通过将 32 位整数空间划分为 2^16 大小的容器（Container），并根据数据密度自适应选择存储方式，实现了极佳的压缩率与快速的集合运算（交、并、差）。它是大数据场景下用户标签、人群圈选、倒排索引等领域的标准位图库。

## 核心信息

- **全称**：RoaringBitmap（压缩位图）
- **类型**：开源库（Java 实现）
- **官方仓库**：[github.com/roaringbitmap/roaringbitmap](https://github.com/roaringbitmap/roaringbitmap)（Apache 2.0 协议）
- **核心作者**：Daniel Lemire 等（Université du Québec (TELUQ)）
- **数据结构**：High 16 bits → Container 索引；Low 16 bits → Container 内偏移
- **58 定制版**：[igit.58corp.com/teu_dm/roaringbitmap.git](https://igit.58corp.com/teu_dm/roaringbitmap.git)（支持人群包限制逻辑、多引擎互操作）

## 详细说明

### 核心数据结构

```
RoaringBitmap 内部:
┌─────────────────────────────────────────────┐
│ Container[0]   (high_bits=0)                │
│   → user_codes: 0 ~ 65535                  │
├─────────────────────────────────────────────┤
│ Container[952] (high_bits=952)              │
│   → user_codes: 62390272 ~ 62455807        │
└─────────────────────────────────────────────┘

三种 Container 自适应:
- ArrayContainer   (cardinality < 4096): 有序 int16 数组，省空间
- BitmapContainer  (cardinality ≥ 4096): 1024 个 long 位图，省时间
- RunContainer     (连续 run 场景): 记录 [start, length] 区间，极致压缩
```

### 为什么适合人群圈选

- 用户 `user_code` 直接作为 bit 位置，集合运算变为 O(1) 级位运算
- 相邻用户编码落入同一 Container，可用 runContainer 进一步压缩
- 支持 `add` / `or` / `and` / `andNot` / `contains` / `getCardinality` 等操作
- 序列化/反序列化效率高，可与 Hive、ClickHouse、StarRocks 互操作

### 通用应用领域（来源：[RoaringBitmap 应用科普](/meishi_docs/万象/归档/_来源文档/RoaringBitmap应用科普.md)）

| 领域 | 典型场景 |
|------|----------|
| 数据库系统 | Apache Spark、Druid、ClickHouse 的位图列/聚合 |
| 搜索引擎 | 倒排索引的 doc id 集合（Lucene/ES） |
| 大数据分析 | 海量整数集合的交并差运算 |
| 网络爬虫 | URL 去重 |
| 用户画像与精准推荐 | 标签集合的圈选/组合查询（本 Wiki 万象场景） |

**为什么高效**（科普视角）：
- 相比 `HashSet<Integer>`：每个 Integer 对象约 20-30 字节，RoaringBitmap 极低内存
- 相比传统 BitMap：稀疏数据（ID 1, 1000, 1000000）传统位图需开辟百万位空间，RoaringBitmap 分段存储避免浪费
- 分桶策略：高 16 位为键（Key），低 16 位为值；同桶内元素 < 4096 用 Array Container（short 数组），≥ 4096 用 Bitmap Container（8192 位/8KB），自适应平衡空间与时间

### 58 定制版特性

58 万象基于官方库二开（`roaringbitmap.git`），支持：
- 特殊的人群包限制逻辑
- base64 序列化/反序列化
- 与 Hive UDF/UDAF、ClickHouse `groupBitmap`、StarRocks `bitmapValue` 的互操作
- 分桶 Bitmap（`floor(user_code / 65536)` 对齐 Container 边界）

## 相关摘要

- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 位图构建原理
- [[bitmap-construction-engineering]] — Bitmap 构建工程实现详解（Spark UDAF/序列化/Bucket 分桶）
- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线
- [[用户画像系列：从标签体系到 AI 检索]] — 标签存储章节：宽表 vs 位图两种模型对比，位图适合“按标签找人群”

## 延展阅读

- [官方 GitHub 仓库](https://github.com/roaringbitmap/roaringbitmap)
- [RoaringBitmap 官网](https://roaringbitmap.org/)
- [58 定制版仓库](https://igit.58corp.com/teu_dm/roaringbitmap.git)
