---
type: topic
tags: [万象, 标签, ClickHouse, Bitmap, 数据接入, 画像]
created: 2026-08-03
updated: 2026-08-03
related_sources: 3
source_urls:
  - https://docs.58corp.com/#/space/2043955735540387841
  - https://docs.58corp.com/#/space/1519937138676789248
  - https://docs.58corp.com/#/space/1843496489398108160
---

# 万象标签处理与 CK 入库流水线

## 概述

万象（Wanxiang）是 58 集团的数据资产管理平台，标签/画像数据接入是其核心功能之一。本文档基于马建彪工作交接文档及其引用的设计文档，梳理标签数据从数据源到 ClickHouse（CK）的完整处理流水线。

## 来源文档

- [马建彪工作交接](https://docs.58corp.com/#/space/2043955735540387841) — 万象系统全貌概览，含所有模块入口
- [画像&关系接入](https://docs.58corp.com/#/space/1519937138676789248) — 数据接入模块概设，标签处理核心设计
- [编码模块预估位图解决方案](https://docs.58corp.com/#/space/1843496489398108160) — 位图生成并发问题与解决方案

## 核心代码仓库

| 仓库 | 用途 |
|------|------|
| `wanxiang-data-jobs.git` | 数据接入主程序 |
| `data_engine_script.git` | 数据处理脚本 |
| `data-app-dp-utils.git` | DP 工具包 |
| `wanxiang-maintenance-program.git` | 运维程序 |
| `roaringbitmap.git` | 58 定制版 RoaringBitmap 库 |

## 标签 → CK 处理流水线（6 步）

### Step 1: 原始数据接入

业务方将标签数据提供到数仓。万象按**品牌（brand）**维度接入——冰山项目升级后，画像数据和关系数据均基于品牌独立支持，不再使用大而全的闭合 ID Mapping。

### Step 2: OneID 生成

```
表: ds_wanxiang_ice_mountains_datasource_oneid
```

将原始用户标识（wuser / wimei / imei / oaid 等）统一映射为 **OneID**。这是整个系统的统一用户标识层。

### Step 3: 用户编码（user_code）

```
表: ds_wanxiang_ice_mountains_datasource_user_code        ← OneID → 编码（已有用户）
表: ds_wanxiang_ice_mountains_no_relation_user_code_datasource ← 无关系的新编码
```

核心逻辑（引用原文）：

> "在进行数据组织入库 CK 时，进行用户编码关联。如关联上则直接获取（表示关系或者历史已经对该用户编码），未关联上则调用编码生成新编码。同时需要将新编码 ETL 后，存储编码对应服务。"

> "为保证数据之间可以跨表、人群包上传之间的相互交并差计算，尽可能保证编码值不变。"

即：
- **已编码用户**：复用已有 `user_code`（bigint），保证跨表 bitmap 交并差可计算
- **新用户**：调用编码服务生成新编码，ETL 后持久化

### Step 4: CK 格式化（写入 4 类中间表）

根据标签的值类型，分 4 路并行格式化：

| 格式化表 | 标签类型 | 位图位宽 | 说明 |
|----------|----------|----------|------|
| `ds_wanxiang_ice_mountains_string_formatted` | 基础字符串 | **uint32** | 单值字符串标签 |
| `ds_wanxiang_ice_mountains_numeric_formatted` | 基础数值 | **uint32** | 单值数值标签 |
| `ds_wanxiang_ice_mountains_nested_string_formatted` | KV 字符串 | **uint64** | 嵌套键值对字符串标签 |
| `ds_wanxiang_ice_mountains_nested_numeric_formatted` | KV 数值 | **uint64** | 嵌套键值对数值标签 |

### Step 5: Bitmap 位图构建

格式化数据按 `datasource_id` 维度生成 **RoaringBitmap**，写入 4 类 bitmap 表：

```
rbm_wanxiang_${datasource_id}_string
rbm_wanxiang_${datasource_id}_numeric
rbm_wanxiang_${datasource_id}_nested_string
rbm_wanxiang_${datasource_id}_nested_numeric
```

**位图生成并发控制**（来自编码模块文档）：

- 每个数据源**独立并行**生成预估位图
- 存在并发问题：数据源 A 的位图还未生成完成，合并任务已读取（读到空数据）
- 解决方案：等待所有数据源的 ETL 处理完成后记录状态，再执行合并操作
- 合并维度：`品牌_${brand}_${idtype}`

### Step 6: 写入 CK

最终数据写入 CK 表，典型表结构：

```sql
hdp_lbg_zhaopin_clickhousedb.hdp_lbg_zhaopin_zp_bn_crowd
  字段: dt (日期分区)
       label_key (标签名称)
       label_value (标签值)
       bitmap_ids (RoaringBitmap 序列化)
```

**入库分流规则**（按应用场景）：

| 场景 | 用途 | 存储位置 |
|------|------|----------|
| 场景 1、5 | 人群圈选 | CK |
| 场景 4 | 分布分析 | CK |
| 场景 6 | C 端个性化推荐 | Redis + Wtable |
| 所有场景 | 标签市场（覆盖率） | CK（必存） |

**标签市场特殊处理**：
- 非数值标签：`tag_value = '_label_all'`
- 数值标签：`tag_value = -999`

## 并行链路：Redis / Wtable（场景 6）

标签数据在编码关联后，场景 6 的标签额外写入：

- **Redis**（热数据，最近 15 天活跃用户）：`ds_wanxiang_ice_mountains_data_to_redis`
- **Wtable**（全量托底）：`ds_wanxiang_ice_mountains_data_to_wtable`
- RowKey = `tableID + "_" + oneID`
- 在线查询顺序：先查关系（Redis），确定查 Redis 还是 Wtable

## CK Bitmap 查询示例

```sql
WITH cte_tb AS (
    SELECT bitmap_and(
        (SELECT IFNULL(bitmap_union(bitmap_ids), bitmap_empty())
         FROM hdp_lbg_zhaopin_clickhousedb.hdp_lbg_zhaopin_zp_bn_crowd
         WHERE dt = '2026-04-09'
           AND label_key = 'first_active_date_all'
           AND label_value >= '1775318400'
           AND label_value < '1775836800'),
        (SELECT IFNULL(bitmap_union(bitmap_ids), bitmap_empty())
         FROM hdp_lbg_zhaopin_clickhousedb.hdp_lbg_zhaopin_zp_bn_crowd
         WHERE dt = '2026-04-09'
           AND label_key = 'is_zhaopinb_vip'
           AND label_value = '0')
    ) AS final_bitmap
)
SELECT uid FROM hdp_lbg_zhaopin_clickhousedb.hdp_lbg_zhaopin_dim_zp_bn_idmapping
WHERE dt = '2026-04-09'
  AND bitmap_contains((SELECT final_bitmap FROM cte_tb), CAST(code AS INT))
```

**优化要点**：
- 使用 CTE 写法（而非嵌套子查询），利用 CK 对标量子查询的缓存优化
- 添加物化视图减少查询时计算量
- 测试结果：秒级返回

## 相关概念

- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 位图构建原理
- [[roaringbitmap]] — RoaringBitmap 数据结构

## 相关实体

- [[wanxiang]] — 万象数据资产管理平台
