---
type: synthesis
tags: [AI编程, Agent, Claude Code, Gemini, Cursor, 对比分析]
created: 2026-07-04
updated: 2026-07-04
---

# AI编程Agent框架对比分析

## 概述

从规划能力、记忆能力、技术架构、创新技术四个维度对主流 AI 编程 Agent 进行系统分析，包括 Claude Code、Gemini、Cursor 等。

## 分析框架

### 系统角色设置
- **运行时机**：会话初始化时设置
- **优先级**：最高，是所有后续交互的基础
- **持续性**：整个会话期间持续有效
- **作用**：身份定义、行为规范、安全约束、工具使用指导

### 规划能力
- 任务分解与编排
- 子任务并行执行
- 动态调整计划

### 记忆能力
- 项目级记忆（CLAUDE.md / Rules）
- 会话级记忆
- 跨会话经验积累

### 技术架构
- SubAgent 机制
- 工具调用引擎
- 文件编辑策略

## 代表框架

- **Claude Code**：多 Agent 分层架构，系统提示词驱动，支持 subAgent 委派任务
- **Cursor**：IDE 原生集成，实时代码补全 + 上下文感知
- **Gemini CLI**：Google 生态集成，多模态能力

## 相关概念
- [[AI 编程（AI Programming / AI Coding）]]
- [[AI Agent（智能体）]]
- [[MCP 模型上下文协议（Model Context Protocol）]]
