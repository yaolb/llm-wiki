---
type: entity
tags: [视频生成, AI编程, 开源工具, Open Design, html-to-video]
created: 2026-07-07
updated: 2026-07-07
---

# html-video

## 概述

html-video 是 nexu-io / Open Design 团队开源的项目，让你通过 AI Coding Agent 将 HTML + CSS + 数据直接渲染为真实 MP4 视频——全在本地运行，无按次渲染费，无厂商锁定。Apache-2.0 协议。

## 核心信息

- **全称**：html-video
- **类型**：HTML 转视频工具
- **相关方**：[nexu-io](https://github.com/nexu-io) / [Open Design](https://open-design.ai)
- **Star**：⭐ 3,855 (2026-07-07)
- **协议**：Apache-2.0
- **主语言**：HTML
- **创建时间**：2026-05-27

## 核心理念

**视频即代码（Video as Code）**——Agent 根据你的描述，自动选模板、填充内容、渲染为 MP4。支持直接丢一个文章链接或 GitHub 仓库链接，自动转成视频。

## 支持的 Agent

Open Design · Windsurf CLI · Trae CLI · Claude Code · Cursor · Codex · Gemini · Grok · Qwen · OpenCode · Copilot · Aider · Hermes · Anthropic API

## 渲染引擎架构

插件化设计，统一 `render(input, ctx)` 契约：

| 引擎 | 范式 | 状态 |
|------|------|------|
| **Hyperframes** | HTML + CSS + GSAP | ✅ 默认（无头 Chromium + ffmpeg） |
| Remotion | React 组件 | 🗺️ 计划中 |
| Motion Canvas / Revideo | TypeScript Canvas | 🗺️ 计划中 |
| Manim | 数学/3D | 🔬 调研中 |

## 模板系统

内置 21 个模板，涵盖：数据可视化（NYT 风格折线图等）、片头/片尾、电影级效果（胶片颗粒 + 漏光）、代码演示（打字机 + 终端光标 VFX）、产品宣传等。

## 参考

- [GitHub 项目](https://github.com/nexu-io/html-video)
- [Open Design 官网](https://open-design.ai)
