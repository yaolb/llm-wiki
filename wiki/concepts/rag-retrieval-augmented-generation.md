---
type: concept
tags: [AI, 检索, 知识库, LLM]
created: 2026-07-04
updated: 2026-07-05
related_sources: 2
---

# RAG 检索增强生成（Retrieval-Augmented Generation）

## 一句话定义

RAG（检索增强生成）是一种将信息检索系统与大型语言模型结合的技术架构——在 LLM 生成回答之前，先从外部知识库检索相关文档片段，将其作为上下文注入提示词，从而减少幻觉、提升事实准确性。

## 核心原理

```
用户提问 → Embedding 模型向量化 → 向量数据库检索 Top-K 相关片段
         → 将检索结果拼入 Prompt → LLM 生成答案
```

### 关键组件

1. **文档处理**：将知识库文档切分为语义块（Chunking）
2. **向量化（Embedding）**：将文本块转换为向量表示
3. **向量检索**：在向量空间中找到与查询最相似的文档块
4. **上下文增强**：将检索结果作为上下文注入 LLM 的 Prompt
5. **答案生成**：LLM 基于检索到的上下文生成回答

## 变体与演进

- **Naive RAG**：最基础的"检索 → 拼接 → 生成"
- **Advanced RAG**：引入查询重写、重排序（Re-ranking）、上下文压缩
- **Graph RAG**：结合知识图谱，增强实体关系推理
- **Agentic RAG**：由 AI Agent 自主决定检索策略和轮次

### Agentic RAG：最重要的范式转变

2025-2026 年间，RAG 经历了一次根本性的角色转变——从**独立系统**降级为 **Agent 架构下的一个组件**。这不是 RAG 的衰落，而是其成熟化的标志：

- **之前**：RAG 是整个 AI 应用的默认核心架构
- **现在**：RAG 是 Agent 工具箱中的一项能力，与代码解释器、API 调用、网页搜索并列
- **Agent 的角色**：作为"大脑"，自主决定何时检索、检索几次、融合哪些结果
- **为什么必须降级**：单一 RAG 无法应对需要多工具协同的复杂任务

详细内容见 [[Agentic RAG：RAG 从独立系统到 Agent 组件]]

## 关键工具
- [Milvus](https://milvus.io) — 高性能向量数据库
- Elasticsearch — 全文检索 + 向量混合搜索
- PgVector — PostgreSQL 向量扩展

## RAG 评估

RAG 系统需要从检索质量、生成质量、端到端系统三个维度进行评估。主流框架包括 [[RAG评估体系与方法论|RAGAS（RAG 专用）和 DeepEval（通用 LLM 评估）]]，核心方法是 LLM-as-a-Judge。

## 相关概念
- [[AI Agent（智能体）]]
- [向量数据库（Vector Database）](https://www.pinecone.io/learn/vector-database/)
- [[模型微调（Fine-tuning）]]
