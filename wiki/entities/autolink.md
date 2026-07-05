---
type: entity
tags: [Text-to-SQL, Schema Linking, 开源, AI, NL2SQL]
created: 2026-07-04
updated: 2026-07-04
source_url: https://github.com/wzy416/AutoLink
---

# AutoLink

## 概述

AutoLink 是一个面向大数据场景的语义 Schema Linking 开源工具，通过将原始数据库结构转换为结构化文档并进行向量嵌入，实现自然语言到数据库 Schema 的智能关联。论文发布于 arXiv（2511.17190）。

## 核心信息
- **全称**：AutoLink
- **类型**：Text-to-SQL / Schema Linking 工具
- **技术栈**：Python
- **论文**：[AutoLink: Schema Linking for Text-to-SQL](https://arxiv.org/abs/2511.17190)
- **博客**：[CSDN 介绍](https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/156956625)

## 核心流程

```
原始数据库结构 → generate_docs.py → 结构化文档 → embedding_docs.py → 向量嵌入 → retrieve_topk_schema.py → 语义检索
```

1. **generate_docs.py**：将数据库 DDL/元数据转换为结构化 Markdown 文档
2. **embedding_docs.py**：对结构化文档进行向量嵌入
3. **add_id.py**：召回结果增强，关联原始 Schema ID
4. **retrieve_topk_schema.py**：基于语义相似度检索 Top-K 相关 Schema

## 应用场景

- NL2SQL 的 Schema 关联
- 大规模数据库的智能查询
- 数据仓库元数据管理

## 相关概念
- [[RAG 检索增强生成]]
- [[AI Agent]]

## 延展阅读
- [AutoLink GitHub](https://github.com/wzy416/AutoLink)
- [AutoLink 论文](https://arxiv.org/abs/2511.17190)
