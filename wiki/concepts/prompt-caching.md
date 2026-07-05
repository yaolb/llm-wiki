---
type: concept
tags: [Prompt Caching, Claude Code, 性能优化, Agent工程, 成本控制]
created: 2026-07-04
updated: 2026-07-04
---

# Prompt Caching

## 一句话定义

Prompt Caching 是 AI Agent 工程中的关键性能优化技术：通过缓存系统提示词（System Prompt）和常用上下文来避免重复发送，大幅降低延迟和 Token 消耗。

## 核心原理

AI Agent 每次调用都需携带完整的系统提示词（可达数万 Token）。Claude Code 的系统提示词定义了 Agent 的行为模式、安全策略和工具使用规范。缓存这些重复内容可节省 50%-90% 的输入 Token。

## 重要性

来自 Claude Code 开发团队的经验总结："Prompt caching is everything"——提示词缓存决定了 Agent 的响应速度和经济可行性。

## 关键策略

- 系统提示词缓存（最稳定，命中率最高）
- 工具定义缓存
- 项目记忆文件（CLAUDE.md）缓存
- 长对话历史的增量缓存

## 相关概念
- [[AI编程]]
- [[AI Agent]]

## 相关实体
- [[Claude Code]]
