---
type: concept
tags: [AI, Agent, 协议, 互操作, Google, A2A, 开源]
created: 2026-07-17
updated: 2026-07-17
---

# A2A Agent-to-Agent 协议

## 一句话定义

A2A（Agent2Agent Protocol）是 Google 于 2025 年 4 月发布的开放协议，用于**不同厂商、不同框架的 AI Agent 之间实现互操作通信**，被视为 AI Agent 界的"通用语言"。

> 官方定义：*An open protocol enabling communication and interoperability between opaque agentic applications.*

托管在 **Linux Foundation** 下，Apache 2.0 许可证，截至 2026 年已有 150+ 组织支持。

## A2A vs MCP 的定位

两者是**互补关系，而非竞争**：

```
MCP 层          Agent 如何获取外部资源（工具/数据/API）
                Agent → Database / Files / Tools
                "AI 应用的 USB-C 接口"

A2A 层          Agent 之间如何通信和协作
                Agent A ↔ Agent B
                "AI Agent 的通用语言"
```

**配合示例：**
1. 库存 Agent 用 **MCP** 查询数据库 → 发现低库存
2. 库存 Agent 用 **A2A** 通知采购 Agent
3. 采购 Agent 用 **A2A** 与供应商 Agent 下订单

## 核心概念

| 概念 | 说明 |
|---|---|
| **A2A Client** | 发起请求的 Agent / 应用 |
| **A2A Server** | 暴露 HTTP 端点、接收处理任务的远程 Agent |
| **Agent Card** | JSON 格式的"Agent 名片"，描述能力、端点、认证方式 |
| **Task** | 工作单元，有生命周期：submitted → working → input-required → completed → failed |
| **Message** | 通信的基本单位，包含一个或多个 Part |
| **Artifact** | 任务产出物（文档、图片、结构化数据等） |
| **Part** | 内容片段，支持 TextPart / FilePart / DataPart |
| **Streaming** | 通过 SSE 实时推送任务状态更新 |
| **Push Notification** | 长任务异步完成通知（Webhook） |

## 工作流程

```
1️⃣ 发现 (Discovery)
   客户端获取远程 Agent 的 Agent Card，了解其能力

2️⃣ 认证 (Authentication)
   根据 Agent Card 指定的认证方案（OAuth 2.0 / API Key / mTLS）

3️⃣ 通信 (Communication)
   通过 HTTPS + JSON-RPC 2.0 发送任务、接收结果
   支持同步 / 流式 SSE / 异步 Push 三种模式
```

## 协议分层

A2A 规范分为三层：

- **L1 数据模型（Canonical Data Model）** — Task、Message、Part、AgentCard 等核心数据结构
- **L2 抽象操作（Abstract Operations）** — SendMessage、GetTask、CancelTask 等基本操作
- **L3 协议绑定（Protocol Bindings）** — JSON-RPC、gRPC、HTTP/REST 三种具体绑定实现

## 技术栈

- 传输层：HTTPS（TLS 加密）
- 数据格式：JSON-RPC 2.0
- 流式：Server-Sent Events（SSE）
- 异步推送：HTTP POST Webhook
- 认证：OAuth 2.0 / API Key / mTLS / OpenID Connect

## 官方 SDK

| 语言 | 包名 |
|---|---|
| Python | `a2a-sdk` |
| JavaScript / TypeScript | `@a2a-js/sdk` |
| Java | `a2a-java-sdk-reference-jsonrpc`（Maven） |
| Go | `a2a-go` |
| Rust | `a2a-lf` |
| .NET | `A2A`（NuGet） |

## 关键链接

- 官方规范：https://a2a-protocol.org/latest/specification/
- GitHub 组织：https://github.com/a2aproject
- 核心仓库：https://github.com/a2aproject/A2A
- Java SDK：https://github.com/a2aproject/a2a-java

## 相关概念

- [[mcp-model-context-protocol]] — A2A 的互补协议，Agent-to-Tool
- [[oracle-agent-a2a-a2ui-integration]] — Oracle 指标平台 A2A + A2UI 集成设计方案
