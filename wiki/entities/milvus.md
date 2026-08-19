---
type: entity
tags: [向量数据库, 数据库, Zilliz, 开源, RAG]
created: 2026-08-19
updated: 2026-08-19
related_sources: 1
source_url: https://milvus.io/
---

# Milvus

## 概述

Milvus 是 Zilliz 开源的分布式向量数据库，面向 AI 应用的大规模向量检索与混合搜索（向量 + 稀疏/全文）。2026-08 发布 Milvus 3.0 大版本，主打 RAG/Agent 场景的检索效率与上下文成本优化，新增 Highlight 高亮、Context Pruning 上下文剪枝等能力。

## 核心信息
- **全称**：Milvus（向量数据库）
- **类型**：工具 / 数据库
- **相关方**：Zilliz（作者：岳志澄等）
- **时间线**：2026-08 发布 Milvus 3.0（开源）

## 详细说明

### Milvus 3.0 关键能力（开源解读系列）

1. **Highlight 高亮**：词法（BM25 / TextMatch token 匹配）+ 语义（独立语义模型二次解读）两层高亮，短文本直接展示匹配，长文本截取重点附近上下文
2. **语义高亮模型（Semantic Highlight）**：自研开源，中英文双语、大窗口、协议友好；与 Context Pruning 一体两面
3. **Context Pruning 上下文剪枝**：Agent 应用中精准裁剪上下文，官方称可剪 80% token
4. **backfill 特征回填**：亿级 AI 数据高效特征回填
5. **Woodpecker**：从 Kafka/Pulsar 到 Woodpecker，低延迟低成本写入
6. **Manifest**：AI 数据管理放弃文件中心架构
7. **聚合排序下推**：数据库原生聚合排序取代应用侧 Pandas 胶水代码
8. **Regex 正则过滤**：从 =~ 到 NGRAM 的最优性价比方案
9. **Snapshot**：无需复制 embedding 数据的 Collection 视图
10. **自定义词典**：优化 BM25 与 Text Match 的专业词理解
11. **TEXT 类型 + LOB**：原生管理原始文本

### 高亮使用要点

- `LexicalHighlighter`：`highlight_search_text=True` 跟随 BM25 关键词；`highlight_query` 显式 TextMatch
- Fragment：`fragment_size`（默认 100）/ `num_of_fragments`（默认 5）/ `fragment_offset`，按原文顺序返回
- `SemanticHighlighter`：`queries` + `input_fields` + `model_deployment_id`，返回片段与语义相关性分数
- 高亮为后处理能力：不参与召回与排序，不影响结果顺序与分数；语义高亮依赖外部模型部署

## 相关摘要
- [[Milvus 3.0 Highlight：词法+语义高亮解决 Agent 搜索噪音]]（topics/milvus-3-0-highlight.md）

## 相关概念
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]
- [[上下文工程 (Context Engineering)]]

## 延展阅读
- [Milvus 官网](https://milvus.io/)
- [Zilliz 公众号原文](https://mp.weixin.qq.com/s/LLOT7O4fbmGh2nmMA3s-Jg)
