---
type: topic
tags: [Milvus, 向量数据库, RAG, 检索增强, 上下文剪枝, Agent]
created: 2026-08-19
updated: 2026-08-19
related_sources: 1
source_url: https://mp.weixin.qq.com/s/LLOT7O4fbmGh2nmMA3s-Jg
---

# Milvus 3.0 Highlight：词法+语义高亮解决 Agent 搜索噪音

## 概述

Zilliz 官方「Milvus 3.0 开源解读」系列文章（作者岳志澄）介绍 Milvus 3.0 引入的 **Highlight 高亮能力**：对查询相关的文本进行词法（BM25 / TextMatch token 匹配）或语义层面的高亮——短文本直接展示匹配内容，长文本截取重点及附近上下文，解决 RAG/Agent 检索结果噪音大、上下文成本高的问题。

## 核心观点

1. **问题根源**：一次 query 召回三五段甚至十段文档，真正有用的可能只有几十句，其余全是噪音——浪费 token 且分散 LLM 注意力（"饱和检索"问题）。

2. **词法高亮（LexicalHighlighter）**：与 BM25 / Text Match 一脉相承，复用同一 analyzer 分词规则，按原文位置插入高亮标记。两种配置：`highlight_search_text=True`（直接跟随 BM25 关键词）或 `highlight_query` 显式指定 TextMatch 条件（可为向量检索结果补充关键词匹配证据，不扩大候选集、不重排）。

3. **Fragment 机制**：长文本以片段输出而非全文。默认 `fragment_size=100` 字符、`num_of_fragments=5`，可调 `fragment_offset` / `fragment_size` / `num_of_fragments`；片段按原文顺序返回，不按 BM25 分数重排；即使正文不是输出字段，Milvus 也能取文本生成片段。

4. **语义高亮（SemanticHighlighter）**：解决查询与文档词汇不重叠但语义相关的情况（如"账号登不上怎么恢复" vs "连续验证失败后可由管理员解除账户锁定"）。搜索结果返回后由独立语义模型二次解读，判断查询与各片段的语义关联度并标记。

5. **开源语义高亮模型**：市面模型各有短板（仅英文 / 512 token 窗口 / 协议不友好禁商用），Zilliz 自建开源 Semantic Highlight 模型——中英文双语、窗口大、泛化好、协议友好；**与 Context Pruning 上下文剪枝是同一技术的一体两面**，官方称可帮 RAG/Agent 剪枝 80% 上下文。

6. **边界声明**：词法/语义高亮均为搜索结果的后处理能力，不参与召回与排序，不影响结果顺序与分数；语义高亮依赖外部高亮服务或模型部署，非本地离线能力。

## 关键代码

```python
# 词法高亮（BM25）
from pymilvus import LexicalHighlighter
highlighter = LexicalHighlighter(
    pre_tags=["<mark>"], post_tags=["</mark>"],
    highlight_search_text=True,
)

# 语义高亮
from pymilvus import SemanticHighlighter
highlighter = SemanticHighlighter(
    queries=["怎样恢复无法登录的账号"],
    input_fields=["content"],
    pre_tags=["<mark>"], post_tags=["</mark>"],
    model_deployment_id="your-model-deployment",
)
```

## 相关实体
- [[Milvus]] — 向量数据库，3.0 引入 Highlight 能力

## 相关概念
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]
- [[上下文工程 (Context Engineering)]] — Context Pruning 上下文剪枝相关
- [[AI Agent（智能体）]] — Agent 检索噪音与上下文成本问题

## 延展阅读
- [原文（Zilliz 公众号）](https://mp.weixin.qq.com/s/LLOT7O4fbmGh2nmMA3s-Jg)
- [Milvus 3.0 官宣开源](https://milvus.io/)（系列首篇）
