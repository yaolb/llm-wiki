---
type: entity
tags: [Agent框架, 状态机, Apache, Python, LangChain替代]
created: 2026-07-04
updated: 2026-07-04
---

# Apache Burr

## 概述

Apache Burr 是一个基于状态机（State Machine）驱动的 AI Agent 框架，定位为 LangChain 的替代方案。通过显式的状态转换图来管理 Agent 的执行流程，提供更高的可预测性和可调试性。

## 核心信息
- **全称**：Apache Burr
- **类型**：AI Agent 框架
- **许可**：Apache 2.0
- **技术栈**：Python
- **核心机制**：状态机驱动

## 设计理念

```
LangChain：链式调用 → 隐式状态 → 难以调试
Apache Burr：状态机图 → 显式状态转换 → 可追踪、可回放
```

## 核心特性

- **显式状态图**：Agent 行为定义为有限状态机
- **可回放**：每个状态转换被记录，可重放调试
- **类型安全**：通过状态定义确保类型正确性
- **可观测**：内建状态追踪和可视化

## 相关概念
- [[AI Agent（智能体）]]
