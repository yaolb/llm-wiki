---
type: entity
tags: [万象, wanxiang, 数据资产, 增长平台, 标签, 人群圈选]
created: 2026-08-06
updated: 2026-08-06
related_sources: 823
source_url: https://docs.58corp.com/#/space/1552506105505054722
---

# 万象

## 概述

万象（Wanxiang）是 58 集团面向全集团的一站式增长服务平台，拉通 58 生态数据资产，打破部门间数据壁垒，精准识别目标用户，围绕用户全链路提供闭环增长解决方案，以数据 + AI 驱动全链路营销，赋能业务增长。

## 核心信息

- **全称**：万象增长服务平台
- **类型**：平台/系统（大数据部自研）
- **归属**：58 集团 TEG-大数据部
- **核心能力**：标签画像体系、人群圈选、关系管理、用户编码、实时人群服务、消息触达
- **技术栈**：Spark / Hive / ClickHouse / StarRocks / Redis / RoaringBitmap
- **文档空间**：[美事文档-万象](https://docs.58corp.com/#/space/1552506105505054722)
- **归档目录**：`meishi_docs/万象/归档/`（823 个文档、1824 张图片）

## 详细说明

### 文档目录

- [[wanxiang-docs-tree]] — **万象文档完整目录树**（823 个本地归档文档，可点击跳转）
- [[wanxiang-docs-archive]] — 万象文档归档索引（目录结构总览 + 链接索引）
- [本地归档根目录](/meishi_docs/万象/归档/_页面导航.md) — 页面导航

### 核心子系统

- **标签体系**：基础字符串/数值标签 + KV 嵌套标签，[[user-code-encoding]] 统一编码
- **人群圈选**：基于 [[roaringbitmap]] 位图，[[user-tag-bitmap-construction]] 构建原理
- **数据接入**：[[wanxiang-tag-ck-pipeline]] 标签 → ClickHouse 流水线
- **工程实现**：[[bitmap-construction-engineering]] 含查询侧 DSL 与圈选 SQL
- **实时服务**：万象 4.0 实时人群服务、在线召回、机制推

### 版本演进

- 万象 1.0 → 2.X（关系管理、标签自主录入）→ 3.X（标签清洗、任务调度）→ 4.X（IDMapping 升级、实时人群）→ 5.X（ClickHouse→StarRocks 迁移）→ 6.X（AI 智能化）

## 相关摘要

- [[wanxiang-docs-tree]] — 万象文档完整目录树（823 文档）
- [[wanxiang-docs-archive]] — 万象文档归档索引
- [[wanxiang-tag-ck-pipeline]] — 万象标签处理与 CK 入库流水线
- [[bitmap-construction-engineering]] — Bitmap 构建工程实现详解
- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 位图构建
- [[user-code-encoding]] — 用户编码机制
- [[roaringbitmap]] — RoaringBitmap 数据结构

## 延展阅读

- [美事文档-万象空间](https://docs.58corp.com/#/space/1552506105505054722)
- [wanxiang-data-jobs 代码仓库](https://igit.58corp.com/teu_dm/wanxiang-data-jobs.git)
- [数据地图](https://dp.58corp.com)
