# MCP 模型上下文协议 — 官方文档解读

来源：https://modelcontextprotocol.io/docs/getting-started/intro + docs/learn/architecture
日期：2026-07-06

## 核心定义

MCP (Model Context Protocol) 是一个开源标准，用于连接 AI 应用到外部系统。被比作 "AI 应用的 USB-C 接口"。

## 关键要点

1. 由 Anthropic 提出，现为开放协议
2. 客户端-服务器架构：MCP Host → MCP Client ↔ MCP Server ↔ 外部工具/数据源
3. 三大参与者：
   - MCP Host：AI 应用（Claude Desktop、VS Code、Cursor 等）
   - MCP Client：Host 内部维护连接的组件，每个 Server 对应一个 Client
   - MCP Server：提供上下文和工具的程序（可本地或远程运行）
4. 支持本地（STDIO 传输）和远程（Streamable HTTP 传输）两种部署
5. 应用场景：Agent 访问 Google Calendar/Notion、Claude Code 根据 Figma 生成 Web 应用、企业聊天机器人连接多数据库、AI 模型控制 Blender 等
6. 生态支持：Claude、ChatGPT、VS Code、Cursor、MCPJam 等
7. 核心价值：
   - 开发者：减少开发时间和复杂度
   - AI 应用：获得数据源/工具生态
   - 终端用户：获得更强大的 AI 助手
8. 协议基于 JSON-RPC
9. SDK 支持多种编程语言
10. MCP Specification + SDKs + Inspector + Reference Servers 组成完整技术栈
