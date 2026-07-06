---
type: concept
tags: [AI, Agent, 自动化]
created: 2026-07-04
updated: 2026-07-06
related_sources: 2
---

# AI Agent（智能体）

## 一句话定义

AI Agent 是具备自主感知、规划、决策和行动能力的人工智能系统，能够在给定目标后，自主选择和使用工具、执行多步操作来完成复杂任务。

## 核心原理

Agent 的核心循环：

```
感知（Perceive）→ 规划（Plan）→ 行动（Act）→ 观察结果（Observe）→ 循环
```

一个完整的 AI Agent 通常具备以下能力：

1. **推理与规划**：将复杂目标分解为可执行的子任务序列
2. **工具使用**：调用外部 API、数据库、代码执行器等
3. **记忆管理**：
   - 短时记忆：当前对话/任务的上下文
   - 长时记忆：跨会话持久化的知识和经验
4. **反思与纠错**：检查执行结果，发现错误后自行修正

## 关键架构

### 单 Agent 架构
一个 LLM 驱动的 Agent 独立完成任务规划和执行。例如 [[OpenClaw]]、[[Hermes Agent]]。

### 多 Agent 协作
多个专业化 Agent 分工合作，类似团队协作：
- **编排模式**：一个主 Agent 分配任务给子 Agent
- **对等模式**：多个 Agent 平等对话，协商决策
- **模拟模式**：如 PYTHIA 的 MiroFish 引擎，运行上千个 Agent 模拟群体行为用于预测

### Agent 平台
提供 Agent 开发、管理和运行的基础设施：
- [[Snail AI]] — Java 生态的企业级 Agent 平台
- LangChain、LlamaIndex — Python 生态的 Agent 框架

## 分类体系

根据智能程度和决策方式，AI Agent 可分为三类：

### 1. 反应式 Agent（Reactive）
- 无记忆、无内部世界模型，纯条件反射
- 响应快速、实现简单
- 例子：恒温器（温度>阈值→开关空调）、扫地机器人（撞墙→转向）
- 适用：可预测环境中的即时响应任务

### 2. 深思型 Agent（Deliberative）
- 构建并维护内部世界模型，通过逻辑推理规划行动路径
- 包含知识库、推理引擎、规划器
- 例子：自动驾驶（感知→建图→规划→执行）、UZI-Skill 的 66 位 AI 评委（不同投资哲学独立推理）
- 适用：需要战略思维和复杂决策的场景

### 3. 学习型 Agent（Learning Agent）
- 从交互反馈中持续改进性能
- 使用机器学习（监督/无监督/强化学习）更新决策
- 例子：推荐系统、自进化 Agent（[[Hermes Agent]]）
- 适用：动态环境中的多步问题求解

实际生产环境中的 AI Agent 通常是**混合型**，融合以上三类能力。

## Agent 的关键能力维度

### 工具使用（Tool Use）
Agent 通过调用外部工具扩展能力边界。工具可以是 API、代码执行器、数据库、浏览器等。过多的工具会引发"工具选择困难"（[[Agent工具选择问题]]）。

### Agent 技能体系（Skill System）
将能力拆解为独立 Skills，按需组合。代表：[[Superpowers]]、[[gstack]]。UZI-Skill 是垂直领域的深度技能实例。

### 实时感知（Real-time Awareness）
传统 Agent 对现实世界"盲目"，需借助工具获取实时信息。[[PYTHIA]] 通过聚合 30+ 免费数据源解决这一问题。

### 多模型路由
Agent 不硬编码单一模型提供商，通过 [[AI 网关与模型路由]] 弹性切换多个模型，平衡成本与能力。

## 2025-2026 趋势

- **从单一 Prompt 到 Skill 体系**：能力拆解为独立 Skills 按需组合
- **从大模型到小模型突围**：4B 参数模型在 SWE-bench 达 87%，成本断崖式下降
- **从单 Agent 到多 Agent 协作**：架构师 Agent → 编码 Agent → 测试 Agent 流水线
- **从工具到同事**：Agent 定位从被动工具向主动参与者转变
- **本地 Agent 兴起**：Ollama 驱动的完全本地 Agent（如 PYTHIA），零云端依赖

## 相关概念
- [[AI 网关与模型路由]]
- [[MCP 模型上下文协议]]
- [[RAG 检索增强生成]]
- [[Agent工具选择问题]]
- [[Agent记忆系统]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
- [[PYTHIA]]
- [[UZI-Skill]]
