---
type: entity
tags: [工具, 股票分析, 金融, 投资, AI-Agent]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# UZI-Skill（游资技能库）

## 概述

UZI-Skill 是一个开源的 AI 股票深度分析插件（游资技能库），为个人投资者提供机构级的投研能力。覆盖 A 股、港股和美股，全免费数据源、零 API key。

## 核心信息

- **全称**：UZI-Skill / 游资技能库
- **类型**：工具（AI Agent 技能/插件）
- **作者**：FloatFu-true (wbh604)
- **版本**：v3.9.1
- **开源协议**：MIT
- **仓库**：[GitHub](https://github.com/wbh604/UZI-Skill)
- **数据源**：akshare、东方财富、雪球、巨潮资讯、港交所新闻等
- **支持平台**：Claude Code、Cursor、Gemini CLI、**OpenClaw**、Hermes Agent、OpenAI Codex、CLI 直用

## 核心能力

### 22 维数据分析
涵盖财务、估值、技术面、资金面、行业对比、机构持仓等多维度。

### 66 位 AI 评审团 × 9 大流派
模拟不同投资风格的大佬（巴菲特、索罗斯、赵老哥、a16z、马斯克、黄仁勋、高瓴张磊、Michael Burry、Chanos 等）独立打分辩论。最新版含 Serenity AI 卡位猎手组（8 罚分因子 + 3 级证据阶梯 + 供应链 8 层分层）。

### 22 种机构级估值方法
DCF、Comps、LBO、DDM、EVA、SOTP、Risk-Adjusted PE、Monte Carlo 等。

### 输出形式
- 自包含 HTML 报告（Bloomberg 风格，离线可用）
- 朋友圈竖图（1080×1920）
- 微信群战报（1920×1080）
- 一句话摘要

### 主要命令
| 命令 | 功能 | 耗时 |
|------|------|------|
| `analyze-stock <代码>` | 完整 22 维 × 66 评委分析 | 5-8 min |
| `quick-scan <代码>` | 30 秒速判 | ~30s |
| `scan-trap <代码>` | 杀猪盘排查 | ~1 min |
| `dcf <代码>` | DCF 估值专项 | ~2 min |

## 相关概念
- [[AI Agent（智能体）]]
- [AI 投资分析（AI Investment Analysis）](https://www.investopedia.com/articles/investing/ai-in-investing.asp)
- [[OpenClaw]]

## 延展阅读
- [GitHub 仓库](https://github.com/wbh604/UZI-Skill)
- README 中文版
