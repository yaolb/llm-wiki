---
type: concept
tags: [Loop Engineering, Prompt, Agent, 自动化, AI编程]
created: 2026-07-04
updated: 2026-09-08
---

# Loop Engineering

## 一句话定义

Loop Engineering 是指设计 AI Agent 的自主执行循环（Loop）而非手写单次 Prompt 的工程方法论。核心理念："别再手动写 Prompt 了，去写 Loop"。

## 核心原理

```
传统 Prompt 工程：用户输入 → 一次 Prompt → AI 输出（一次性的、线性的）
Loop Engineering：用户输入 → Agent Loop（思考→行动→观察→思考→...）→ 最终输出（多轮自纠正的）
```

## Agent Loop 要素

- **触发条件**：什么情况下启动循环
- **终止条件**：什么情况下结束循环（任务完成/超时/达到最大轮次）
- **工具选择**：每轮可用的工具集
- **验证步骤**：如何判断当前结果是否符合预期
- **错误恢复**：出错后的回退策略

## 相关概念
- [[AI Agent（智能体）]]
- [[AI 编程（AI Programming / AI Coding）]]

## 谁来做 Loop 里的调度？—— Controller 评测

Loop 中持续"看进展、派活、决定下一步"的模型角色被称为 **Controller**（执行者为 Worker）。2026-08 阿里 DreamX 团队开源的 [[LoopArena：把模型的 Loop 调度能力单独拎出来考]] 首次把该能力单独做成 Benchmark：固定 Worker 只换 Controller，分三档评测——Type I 单步指令选择（低成本，全套约 0.31 美元）、Type II 任务切片闭环（成本较全任务降约 64%）、Type III 完整任务带队（最强模型成功率仅约 25%，长程控制仍有大空间）。

- 相关：[[LLM-as-a-Verifier：验证作为新的 Scaling 轴]]（另一条给 Agent 结果把关的评测/验证路线）
