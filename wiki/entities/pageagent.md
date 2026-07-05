---
type: entity
tags: [AI Agent, Web自动化, JavaScript, 阿里开源, 浏览器操控]
created: 2026-07-04
updated: 2026-07-04
source_url: https://github.com/alibaba/page-agent
---

# PageAgent

## 概述

PageAgent 是阿里巴巴开源的轻量级 JavaScript 库，仅 32KB（gzip），让 AI Agent 直接在网页内部操控界面，无需浏览器扩展、Python 后端或无头浏览器。

## 核心信息
- **全称**：PageAgent
- **类型**：AI Web 操控框架
- **开发方**：阿里巴巴
- **技术栈**：JavaScript
- **大小**：32KB gzip

## 核心特性

- **极简集成**：仅需一个 `<script>` 标签或 npm 引入
- **DOM 脱水技术**：纯文本 DOM 操控，无需截图或多模态模型
- **模型无关**：支持 GPT-4、Claude、通义千问等主流模型
- **可选 Chrome 扩展**：支持跨标签页多页面任务
- **MCP Server (Beta)**：外部客户端可控制浏览器

## 与传统方案对比

| 方案 | 大小 | 依赖 |
|---|---|---|
| PageAgent | 32KB | 无 |
| Browser-use (Python) | ~200MB | Python + Playwright |
| Playwright/Puppeteer | 几十MB | Node/Python |

部署成本降低 100 倍以上，SaaS 产品可零成本嵌入 AI Copilot。

## 适用场景

- SaaS 产品 AI Copilot
- 复杂表单一键填写（ERP/CRM）
- 无障碍辅助（语音操控）
- 跨标签页网页自动化

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 延展阅读
- [PageAgent GitHub](https://github.com/alibaba/page-agent)
