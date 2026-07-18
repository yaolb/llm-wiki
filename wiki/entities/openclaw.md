---
type: entity
tags: [AI Agent, 自进化, 记忆系统, Skills, OpenClaw, NAS, 龙虾]
created: 2026-07-04
updated: 2026-07-04
---

# OpenClaw（🦞 龙虾）

## 概述

OpenClaw（社区昵称：**龙虾**，因 Claw 意为钳子）是一个支持自进化的单 Agent 框架，核心特色是 4 层记忆系统（L0-L3），让 Agent 能从每次交互中学习和改进。支持 Docker 部署（含 NAS），通过 Telegram 等渠道接入。

## 核心信息
- **全称**：OpenClaw
- **类型**：AI Agent 框架
- **架构**：单 Agent + 4 层记忆系统
- **部署**：Docker，支持 NAS（群晖）

## 4 层记忆系统

- **L0 — 短期记忆**：当前对话上下文
- **L1 — 工作记忆**：当前任务的中间状态和工具调用结果
- **L2 — 情节记忆**：历史交互的经验教训，自动检索相似场景
- **L3 — 语义记忆**：提升为项目级知识的事实、规则和约束

## 核心特性

- **Skills 体系**：能力拆解为独立 Skills，按需组合
- **自进化**：从 L2 记忆中学习，下次遇到类似场景自动应用经验
- **Gateway 模式**：统一接入层，对接 Telegram / 微信 / 飞书等渠道
- **本地部署**：NAS Docker 一键部署，数据本地可控

## 部署要点

- Docker 镜像：`1panel/openclaw`
- 端口：18789
- 启动命令：`openclaw gateway --allow-unconfigured`
- 需配置 gateway.token 确保安全

## 相关概念
- [[AI Agent（智能体）]]
- [[自改进AI Agent]]

## 对比
- [[Hermes Agent]] — 清华自进化单 Agent（爱马仕）
- [[OpenClaw vs Hermes Agent — 执行派 vs 进化派全面对比]] — 深度对比分析
