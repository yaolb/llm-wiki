---
type: entity
tags: [AI编程, Skills, Claude Code, TDD, 工作流, 开源]
created: 2026-07-04
updated: 2026-07-04
---

# Superpowers

## 概述

Superpowers 是 GitHub 上 116k+ Star 的 AI 编程 Skills 框架，为 Claude Code 等 AI 编程工具提供结构化的能力扩展体系。核心理念：将 AI 编程能力拆解为独立、可组合的 Skills，按需加载执行。

## 核心信息
- **全称**：Superpowers
- **类型**：AI 编程 Skills 框架
- **Star**：116k+
- **生态位置**：Claude Code 核心 Skills 基础设施

## 设计理念

```
传统方式：一个大 Prompt 搞定所有 → 提示词臃肿、效果不稳定
Superpowers：Skill A + Skill B + Skill C → 按需组合，精准执行
```

## 核心特性

- **模块化 Skill**：每个 Skill 专注一个能力（代码审查、测试生成、Java 转换等）
- **TDD 驱动**：内建测试驱动开发流程，红-绿-重构循环
- **纪律约束**：强制执行编码规范和行为边界
- **可组合**：多个 Skill 可嵌套、串联形成复杂工作流

## 代表 Skills

- code-review.skill — 代码审查
- test-writer.skill — 测试编写
- java-converter.skill — Java 代码转换
- 配合 OpenSpec 实现 Spec → Code → Test 完整闭环

## 生态组合

AI 增强开发三件套：**OpenSpec**（规范驱动）+ **Superpowers**（纪律驱动）+ **gstack**（角色化执行）

## 相关概念
- [[AI 编程（AI Programming / AI Coding）]]
- [[统一开发范式 (OpenSpec × Superpowers)]]
- [[测试驱动开发（Test-Driven Development, TDD）]]

## 相关实体
- [[Claude Code]]
