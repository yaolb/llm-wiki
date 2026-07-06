---
type: entity
tags: [工具, AI-Agent, 实时感知, 开源情报, 预测]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# PYTHIA（本地 AI Agent 实时感知工具）

## 概述

PYTHIA 是一个本地、无密钥的 AI Agent 工具，融合 Osiris（实时全球情报仪表盘）和 MiroFish（多智能体预测引擎），通过单次 API 调用向 Agent 提供整个实时世界的信息和未来预测。完全在本地硬件上通过 Ollama 运行。

## 核心信息

- **全称**：PYTHIA
- **类型**：工具（AI Agent 增强框架）
- **架构**：Osiris（情报采集）+ MiroFish（预测引擎）
- **运行方式**：本地 Ollama，零云端依赖
- **开源协议**：MIT
- **适用平台**：支持 Ollama 的任何本地 AI Agent

## 核心能力

### 实时感知：30+ 免费无密钥数据源

| 类别 | 数据源 |
|------|--------|
| 冲突与安全 | GDELT、DeepStateMap（乌克兰）、网络威胁、GPS 干扰、核基础设施 |
| 自然灾害 | USGS 地震、NWS 风暴/洪水、FIRMS 野火、EONET 灾害、辐射监测 |
| 市场 | 石油/指数/大宗商品/加密货币、Polymarket 赔率 |
| 人道主义 | UNHCR 流离失所、WHO 疾病、WFP 粮食安全、世界银行（通胀/失业/GDP/贫困） |
| 动向 | 航班（民用/私人/军用）、卫星追踪、海事情报、实时新闻/CCTV |

### 预测能力（MiroFish）

- 构建高保真数字平行世界
- 数千个 AI 智能体，各有不同性格、记忆和行为逻辑
- 模拟集体人类行为，预测事件走向
- 预测范围：24 小时 / 一周 / 一月 / 一年
- "委员会"评分机制（策略师、经济学家、自然主义者、怀疑论者）
- 支持完全本地运行（MiroFish-Offline，Neo4j + Ollama）

### Agent 集成

单次 API 调用即可让 AI Agent 获得完整实时世界信息，无需管理多个数据源 API key。

## 相关概念
- [[AI Agent]]
- [[多 Agent 协作]]

## 延展阅读
- Reddit r/SelfHostedAI — PYTHIA 讨论帖
- GitHub: MiroFish、Osiris
