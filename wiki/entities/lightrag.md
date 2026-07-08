---
type: entity
tags: [RAG, 知识图谱, 检索增强生成, 港大, GraphRAG, 开源]
created: 2026-07-04
updated: 2026-07-04
---

# LightRAG

## 概述

LightRAG 是香港大学推出的基于知识图谱的检索增强生成（GraphRAG）框架，将知识图谱引入 RAG 流程，解决传统 chunk-based RAG 的上下文割裂问题。GitHub 36.7k Star，发表于 EMNLP 2025。

## 核心信息
- **全称**：LightRAG
- **类型**：RAG 框架 / 知识图谱检索
- **开发方**：香港大学
- **版本**：1.5
- **Star**：36.7k+

## 核心技术

LightRAG 用知识图谱替代传统的文本分块（chunking）方式：

```
传统 RAG：文档 → 切Chunk → 向量化 → 检索 → LLM生成
LightRAG：文档 → 实体/关系抽取 → 知识图谱 → 图检索 → LLM生成
```

优势：
- 保留文档间的语义关系，而非机械切分
- 支持多跳推理：从实体 A 到关系 R 到实体 B
- 检索结果更具上下文完整性

## 相关概念
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]
- [[AI Agent（智能体）]]

## 延展阅读
- [LightRAG GitHub](https://github.com/HKUDS/LightRAG)
