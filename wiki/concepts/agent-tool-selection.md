---
type: concept
tags: [AI Agent, Tool选择, Agent MGMT, 编排器]
created: 2026-07-04
updated: 2026-07-04
---

# Agent工具选择问题

## 一句话定义

当 AI Agent 拥有过多 Tool（工具）时，会出现"选择困难"——Agent 不知道哪个工具最适合当前任务，导致效率下降甚至错误调用。这被称为 Agent MGMT（Agent 工具管理）问题。

## 核心问题

```
传统思路：给 Agent 加更多 Tool → 能力更强
实际效果：Tool 超过一定数量 → Agent 选不明白 → 效率反而下降
```

## 解决方向

- **工具分层**：将工具按领域和粒度分类，Agent 先选类别再选具体工具
- **编排器模式**：引入专门的 Orchestrator Agent 负责工具选择
- **工具收敛**：合并功能重叠的工具，降低选择空间
- **上下文提示**：在工具描述中明确"何时使用/何时不用"

## 相关概念
- [[AI Agent]]
- [[Loop Engineering]]
