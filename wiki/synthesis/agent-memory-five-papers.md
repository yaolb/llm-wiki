---
type: synthesis
tags: [Agent Memory, MemGPT, A-MEM, MemoryBank, Generative Agents, LoCoMo, 论文综述, 长期记忆]
created: 2026-07-10
updated: 2026-07-10
---

# Agent Memory 五篇关键论文综述

## 概览

AI Agent 的记忆系统是 Agent 能否从经验中持续学习和进化的核心技术。从 2023 到 2025 年，五篇里程碑论文勾勒出了 Agent Memory 从**简单缓存 → 分层管理 → 类人遗忘 → 评估基准 → 自主组织**的完整演进路线。

## 论文详解

### 1. Generative Agents (UIST 2023, Stanford)

**核心贡献**：构建了一个"虚拟小镇"，25 个 AI Agent 在其中自主生活、社交、工作。

**记忆架构——三层记忆流**：
- **观察流（Observation）**：Agent 感知到的每件事 → 存为原始记忆
- **反思流（Reflection）**：LLM 定期对记忆做高层次总结和洞察
- **规划流（Planning）**：基于记忆+反思制定行动计划

**关键创新**：
- 记忆检索时同时考虑**时效性（recency）、重要性（importance）、相关性（relevance）**
- Agent 之间可以传播信息（一个人说了某件事，其他人可以通过社交知道）
- 为后续所有 Agent Memory 研究提供了范式参照

> Park et al. "Generative Agents: Interactive Simulacra of Human Behavior" UIST 2023

---

### 2. MemGPT (UC Berkeley, 2023)

**核心贡献**：将操作系统虚拟内存的分层管理思想引入 LLM，让 LLM "看起来"拥有远超上下文窗口的记忆。

**核心思路——分层内存管理**：
- **主上下文（Main Context）**：类比 RAM——当前正在处理的内容，受限于 LLM 的上下文窗口
- **外部上下文（External Context）**：类比磁盘——大量历史信息存储在外部
- **中断机制（Interrupts）**：当需要外部信息时，自动触发"缺页中断"从外部加载

**关键创新**：
- 提出 **Virtual Context Management**——LLM 无需自己管理上下文切分
- 双向应用：文档分析（远超窗口的大文档） + 多轮对话（长期记忆Agent）
- 后来发展为 [Letta](https://letta.com) 开源项目

> Packer et al. "MemGPT: Towards LLMs as Operating Systems" arXiv:2310.08560, 2023

---

### 3. MemoryBank (AAAI 2024, 中山大学)

**核心贡献**：引入**艾宾浩斯遗忘曲线**来模拟人类"有选择地记住和遗忘"，让 LLM 具备类人的长期记忆能力。

**记忆机制**：
- **记忆编码**：每次交互生成语义向量 + 提取关键实体
- **遗忘曲线调度**：根据时间衰减和新记忆的**重要性权重**，决定哪些记忆保留、哪些淡出
- **记忆强化**：回忆次数多的记忆被强化，延缓遗忘

**应用场景**：个人陪伴系统（如 AI 伴侣）、心理咨询场景的持续交互

> Zhong et al. "MemoryBank: Enhancing Large Language Models with Long-Term Memory" AAAI 2024

---

### 4. LoCoMo (UNC/Snap, ACL 2024)

**核心贡献**：提出第一个**超长对话记忆评估基准**，填补了"5个session以上对话"的研究空白。

**核心产出**：
- **LoCoMo 数据集**：通过 machine-human pipeline 生成超长对话，平均 300 轮/9K tokens，最长达 35 个 session
- **评估体系**：QA（问答）、Event Summarization（事件总结）、Multimodal（多模态对话生成）
- **基线对比**：长上下文 LLM vs. RAG vs. 原生 Agent 架构

**发现**：即使在长上下文（128K token）的 LLM 中，记忆检索精度随 session 数量增长仍然显著下降——单纯扩大窗口不是答案。

> Maharana et al. "Evaluating Very Long-Term Conversational Memory of LLM Agents" ACL 2024

---

### 5. A-MEM (NeurIPS 2025, Rutgers)

**核心贡献**：受 **Zettelkasten（卡片笔记法）** 启发，让 Agent 像人类学者一样**自主组织记忆网络**，实现记忆的动态演化和自适应。

**Agentic 记忆组织**：
- **动态索引**：每条新记忆不是简单向量化存储，而是生成包含上下文描述、关键词、标签的**结构化笔记**
- **智能链接**：分析历史记忆，自动在新旧记忆间建立语义连接
- **记忆进化**：新记忆加入时可能触发**对已有记忆的更新和重构**——记忆网络持续自我优化

**关键创新点**：
- 固定架构 → 动态组织：「记忆该怎样组织」由 Agent 自己决定而非硬编码
- 兼容 6 种基础 LLM，均显著超越 SOTA

> Xu et al. "A-MEM: Agentic Memory for LLM Agents" NeurIPS 2025

## 演进脉络

```
2023                    2024                    2025
Generative Agents ──→ MemoryBank ──→ LoCoMo ──→ A-MEM
(记忆流+反思)        (遗忘曲线)     (评估基准)  (自主组织)
       │
       └──→ MemGPT
            (虚拟内存管理)
```

- **Generative Agents**：奠基——定义了"记忆不能只是缓存"
- **MemGPT**：工程化——把 OS 的分层存储思想搬进 LLM
- **MemoryBank**：认知科学——引入类人遗忘机制
- **LoCoMo**：度量——没有基准就无法进步
- **A-MEM**：自主——记忆组织权从设计师交给 Agent 自己

## 相关概念
- [[Agent记忆系统]]
- [[Context Context Context]]
- [[AI Agent（智能体）]]
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]

## 扩展阅读
- [Generative Agents 项目页](https://reverie.herokuapp.com/arXiv_Demo/)
- [MemGPT / Letta](https://letta.com)
- [A-MEM GitHub](https://github.com/WujiangXu/AgenticMemory)
- [LoCoMo 项目页](https://snap-research.github.io/locomo/)
- [微信公众号原文](https://mp.weixin.qq.com/s/P5Jz5jEMUJs66Tb_-UMuFQ)
