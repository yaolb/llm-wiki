---
type: concept
tags: [本体论, Ontology, 语义层, 知识建模, 语义网, OWL]
created: 2026-07-04
updated: 2026-07-04
---

# 本体论 (Ontology)

## 一句话定义

本体论（Ontology）是知识工程中用于形式化描述某一领域内概念及其关系的框架。与语义层（Semantic Layer）不同，本体论侧重概念的哲学定义和形式逻辑，语义层侧重业务指标的映射和查询。

## 核心原理

本体论在 AI 时代重新变得重要，因为它解决了"AI 如何理解世界"的基础问题：
- 定义领域内的实体（类）及其属性
- 定义实体间的关系（对象属性和数据属性）
- 定义推理规则（公理和约束）

## 本体论 vs 语义层

| 维度 | 本体论 (Ontology) | 语义层 (Semantic Layer) |
|---|---|---|
| 关注点 | 概念定义和逻辑关系 | 业务指标和数据映射 |
| 表示语言 | OWL, RDF | SQL, YAML, 元数据配置 |
| 代表工具 | Protégé | Palantir Foundry |
| 经典教材 | Pizza Ontology (斯坦福) | — |

## 在 AI Agent 中的应用

- **知识图谱构建**：本体论为 Agent 提供领域概念的结构化定义
- **Schema Linking**：AutoLink 等工具将数据库结构映射到本体概念
- **语义搜索**：基于本体的查询扩展和推理

## 相关概念
- [[AI Agent（智能体）]]
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]

## 相关实体
- [[AutoLink]]
