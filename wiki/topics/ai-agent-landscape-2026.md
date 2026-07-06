---
type: topic
tags: [AI Agent, Agent架构, 多Agent协作, Skill体系, Spec驱动, 技术全景, 2026]
created: 2026-07-04
updated: 2026-07-06
---

# AI Agent 技术全景报告 2026

## 概述

2025-2026 年，AI Agent 技术栈经历了从"概念验证"到"工程落地"的质变。本报告基于 50+ 篇技术资料，从架构范式、框架对比、记忆系统、浏览器操控、底层模型进展、落地误区六大维度进行全景梳理。

## 六大核心趋势

### 1. 从单一 Prompt 到 Skill 体系

- 过去：写一个复杂 Prompt，期望 LLM 一次搞定所有事
- 现在：把能力拆解为独立 Skills，按需组合
- 代表：[[Superpowers]]、[[gstack]]、[[ECC]]

### 2. 从外部调用到内嵌运行

- 过去：Agent 通过 Playwright/Selenium 从外部操控浏览器（~200MB 依赖）
- 现在：Agent 直接在网页内部运行（32KB）
- 代表：[[PageAgent]]

### 3. 从大模型依赖到小模型突围

- 传统认知：只有 GPT-4/Claude 级别才能做 Agent
- 现实突破：4B 参数模型在 SWE-bench 达到 87%，27B 模型单卡跑 SWE-bench 67%
- 成本从"每轮几毛钱"降到"一次部署终身使用"

### 4. 从手写代码到 Spec 驱动

- 传统：人写代码，AI 辅助
- 现在：人写 Spec，AI 写代码 + 测试 + 验证
- 得物实战：编码效率 10×，交付效率仅 13%（瓶颈在需求理解）

### 5. 从单 Agent 到多 Agent 协作

- 编排层调度多个专业 Agent：架构师 Agent → 编码 Agent → 测试 Agent → Review Agent
- 代表：architect-loop（Claude 5 做架构师 + Codex 做建造者）、[[Comet]]

### 6. 从工具到同事

- Agent 定位转变：被动工具 → 主动参与者 → 同事
- 自进化 Agent（[[Hermes Agent]]、[[OpenClaw]]）能自主学习和改进

### 7. 本地 Agent 与实时感知

- 本地 Agent 崛起：Ollama 驱动的完全本地 Agent，零云端依赖
- [[PYTHIA]] 融合 Osiris（实时情报）和 MiroFish（多智能体预测），解决 Agent 对现实世界

## Agent 架构范式

### ReAct 循环（基础模型）

```
[感知] → [思考] → [行动] → [观察] → [再思考] → ... → 任务完成
```

几乎所有 Agent 架构都建立在 ReAct（Reasoning + Acting）之上。

### 单 Agent 架构 vs 多 Agent 架构

- **单 Agent**（[[OpenClaw]]、[[Hermes Agent]]）：简洁、可调试、适合明确任务
- **多 Agent**（architect-loop、[[Comet]]）：各司其职、突破单模型天花板

## 关键挑战

- Agent 工具选择：Tool 太多时反而选不明白（Agent MGMT）
- 上下文腐烂（Context Rot）：大型项目中 Agent 理解逐渐退化
- Spec 写不清楚：SDD 的瓶颈不在 AI 而在人的需求表达
- Token 成本：提示词缓存（[[Prompt Caching]]）是工程化的关键

## 相关概念
- [[AI Agent]]
- [[Agent记忆系统]]
- [[Spec驱动开发]]
- [[Loop Engineering]]
- [[FDE]]

## 相关实体
- [[OpenClaw]]
- [[Hermes Agent]]
- [[Superpowers]]
- [[OpenSpec]]
- [[PageAgent]]
- [[PYTHIA]]
- [[UZI-Skill]]
