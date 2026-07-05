---
type: topic
tags: [网页爬虫, AI, MCP, 开源, 知识库]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/Firecrawl-GitHub-14-3912a6ec1af88143a7bbece4ff065442
---

# Firecrawl — AI 原生的网页数据采集引擎

## 概述

Firecrawl 是一个面向 AI 的网页数据采集接口，将任意网站内容转换为 LLM 可直接消费的 **Markdown / JSON** 结构化数据。基于 TypeScript 构建，使用 Playwright 处理 JavaScript 渲染页面。提供托管云 API 和自托管开源两个版本。

截至 2026 年在 GitHub 上获得 **14.2 万 Star**，生态扩展包括 `firecrawl-mcp-server`（6.8k Star）和 Firesearch 深度研究工具。

## 核心能力

1. **AI 原生输出**：将网页内容转换为 Markdown/JSON，LLM 可直接消费
2. **JS 渲染支持**：基于 Playwright，能处理 SPA 和动态内容
3. **双模式部署**：托管云 API（免运维）+ 开源自托管
4. **MCP 集成**：提供 `firecrawl-mcp-server`，让 AI Agent 直接调用爬取能力
5. **深度研究**：Firesearch 工具支持多页聚合分析

## 关键数据

- GitHub Stars：**142,000+**
- MCP Server Stars：**6,800+**
- 技术栈：TypeScript + Playwright

## 当前状态

Firecrawl 已成为 AI 生态中**网页数据采集的事实标准**之一，MCP Server 的推出进一步巩固了其在 AI Agent 工作流中的位置。

## 相关实体
- [[Firecrawl]]
- [[firecrawl-mcp-server]]
- [[Playwright]]

## 相关概念
- [[MCP 模型上下文协议]]
- [[LLM 网页数据采集]]
- [[AI Agent]]
