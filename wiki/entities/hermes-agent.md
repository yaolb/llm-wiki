---
type: entity
tags: [AI Agent, 自进化, 清华大学, Hermes, 记忆系统, Skills]
created: 2026-07-04
updated: 2026-07-04
---

# Hermes Agent

## 概述

Hermes Agent 是清华大学推出的自进化 AI Agent 框架。与 OpenClaw 不同，Hermes 的核心创新在于 Agent 能**自动分析失败原因并修正自身策略**，无需人工干预即可持续进化。

## 核心信息
- **全称**：Hermes Agent
- **类型**：自进化 AI Agent 框架
- **开发方**：清华大学
- **相关论文**：SkillEvolver、EmbodiSkill

## 自进化机制

传统 Agent vs Hermes Agent：

```
传统：用户反馈 → 人工修改 Prompt/Skill → Agent 更新
Hermes：用户反馈 → Agent 自动分析失败原因 → Agent 自动修正策略 → 下次不再犯同样错误
```

## 核心特性

- **自动错误分析**：Agent 自动诊断任务失败的根本原因
- **策略自修正**：根据诊断结果自动调整行为策略，无需人工修改 Prompt
- **Skill 自进化**：配合 SkillEvolver / EmbodiSkill 论文，实现技能的自动生成和优化
- **元技能**：学习"如何学习"的能力，跨任务泛化

## 与 OpenClaw 对比

| 维度 | Hermes Agent | OpenClaw |
|---|---|---|
| 自进化方式 | 自动分析失败→修正策略 | 4层记忆→经验检索 |
| 记忆架构 | 任务级策略修正 | L0-L3 分层记忆 |
| 学习粒度 | 策略/Skill 级 | 交互经验级 |
| 开发方 | 清华大学 | 社区开源 |

## 相关概念
- [[AI Agent]]
- [[自改进AI Agent]]

## 相关实体
- [[OpenClaw]]
