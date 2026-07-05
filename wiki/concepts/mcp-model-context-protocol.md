---
type: concept
tags: [AI, 协议, Agent, 工具集成]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# MCP 模型上下文协议（Model Context Protocol）

## 一句话定义

MCP（Model Context Protocol）是由 Anthropic 提出的开放协议，定义了 AI 模型与外部工具、数据源之间的标准化通信接口，让 AI Agent 能够以统一方式调用各种外部能力。

## 核心原理

MCP 采用客户端-服务器架构：

```
AI 应用（Host）←→ MCP Client ←→ MCP Server ←→ 外部工具/数据源
```

- **MCP Server**：封装外部工具（如网页爬虫、数据库、API），暴露标准化的 Tool 列表
- **MCP Client**：运行在 AI 应用侧，负责与 Server 通信
- **协议**：基于 JSON-RPC，支持 STDIO 和 HTTP（Streamable）两种传输方式

## 核心价值

1. **标准化**：一个 MCP Server 可被任何支持 MCP 的 AI 应用使用
2. **解耦**：工具开发者只需实现 MCP Server，不再为每个 AI 平台写适配
3. **生态效应**：类似 LSP（Language Server Protocol）对 IDE 的影响

## 变体与演进

- **STDIO 模式**：MCP Server 作为子进程运行，通过标准输入输出通信
- **Streamable HTTP 模式**：MCP Server 作为 HTTP 服务运行，支持远程调用
- **Community Servers**：社区已涌现大量 MCP Server（Puppeteer、GitHub、Notion、Slack 等）

## 典型应用
- [[firecrawl-mcp-server]] — 网页爬取 MCP 服务
- Notion MCP Server — Notion 知识库接入 AI Agent

## 相关概念
- [[AI Agent]]
- [[LLM 网页数据采集]]
