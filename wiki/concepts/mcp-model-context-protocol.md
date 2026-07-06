---
type: concept
tags: [AI, 协议, Agent, 工具集成, 标准化]
created: 2026-07-04
updated: 2026-07-06
related_sources: 2
---

# MCP 模型上下文协议（Model Context Protocol）

## 一句话定义

MCP（Model Context Protocol）是一个开源标准协议，用于连接 AI 应用与外部系统，被比作 **"AI 应用的 USB-C 接口"**——像 USB-C 标准化电子设备连接一样，MCP 标准化 AI 应用与工具/数据源之间的通信。

> 官方定义：*MCP is an open-source standard for connecting AI applications to external systems.*

## 核心架构

MCP 采用三层参与者架构：

```
MCP Host（AI 应用）
    ↓  创建多个 MCP Client
MCP Client 1 ←→ MCP Server A（本地，如文件系统）
MCP Client 2 ←→ MCP Server B（远程，如 Sentry）
```

### 三大参与者

1. **MCP Host** — AI 应用（Claude Desktop、VS Code Copilot、Cursor 等），协调和管理多个 MCP Client
2. **MCP Client** — Host 内部组件，每个 Server 对应一个 Client，维护专用连接
3. **MCP Server** — 提供上下文和工具的程序，可运行在本地（STDIO）或远程（Streamable HTTP）

### 传输模式

| 模式 | 说明 | 适用场景 |
|------|------|---------|
| STDIO | Server 作为子进程运行，通过标准输入输出通信 | 本地 MCP Server，一对一 |
| Streamable HTTP | Server 作为 HTTP 服务运行 | 远程 MCP Server，多对多 |

协议基于 **JSON-RPC**。

## 能做什么

官方文档列举的实际场景：

- Agent 访问 Google Calendar 和 Notion，成为个性化 AI 助手
- Claude Code 根据 Figma 设计稿生成完整 Web 应用
- 企业聊天机器人连接多个组织内数据库，用户用自然语言分析数据
- AI 模型控制 Blender 进行 3D 设计，并通过 3D 打印机输出

## 生态支持

MCP 已被广泛采用：

- **AI 助手**：Claude Desktop、ChatGPT
- **开发工具**：VS Code (GitHub Copilot)、Cursor、MCPJam
- **社区 Servers**：Puppeteer、GitHub、Notion、Slack、Filesystem、Sentry 等

## 核心价值

- **对开发者**：减少开发时间和复杂度，一次构建到处集成
- **对 AI 应用**：获得数据源和工具的生态，增强能力
- **对终端用户**：获得更强大的 AI 助手，能访问个人数据并代表用户行动

## 完整技术栈

MCP 包含以下项目：
1. **MCP Specification**：协议规范，定义客户端和服务器的实现要求
2. **MCP SDKs**：多种编程语言的 SDK
3. **MCP Inspector**：开发调试工具
4. **MCP Reference Servers**：官方参考实现

> MCP 仅关注上下文交换的协议层面，不规定 AI 应用如何使用 LLM 或管理上下文。

## 相关概念
- [[AI Agent]]
- [[AI 网关与模型路由]]（同为 Agent 基础设施层的标准化协议）

## 相关实体
- [[Firecrawl]]（提供 MCP Server）
