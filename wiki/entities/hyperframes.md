---
type: entity
tags: [视频生成, AI编程, 开源工具, html-to-video, Agent Skills, HeyGen, HyperFrames]
created: 2026-10-04
updated: 2026-10-04
related_sources: 1
source_url: https://mp.weixin.qq.com/s/j2QJcqXInN42REWFUptOcA
---

# HyperFrames

> 素材：微信公众号「青鱼学AI」《HyperFrames：用HTML就能快速做出视频》（2026-08-31），原文归档于 `raw/hyperframes-html-video-wechat.md`。
> **来源性质：短帖介绍稿**，非官方文档；功能描述转述自作者，**细节未见第三方验证**。

## 概述

HyperFrames 是 **HeyGen 开源的程序化视频渲染框架**（Apache 2.0，免费可商用）。核心思路是**把做视频变成写网页**：用 HTML 加 `data-*` 属性排时间线，框架用无头浏览器逐帧渲染、FFmpeg 编码成 MP4——无需剪辑软件、帧级精确、输出确定可复用。

## 核心信息

- **全称**：HyperFrames
- **类型**：程序化视频渲染框架（HTML → MP4）
- **出品方**：HeyGen
- **协议**：Apache 2.0（免费可商用）
- **GitHub**：https://github.com/heygen-com/hyperframes
- **官网**：https://hyperframes.heygen.com

## 关键特性

- **视频即代码**：HTML + `data-*` 属性描述时间线；无头浏览器逐帧渲染 → FFmpeg 编码，无需剪辑
- **帧级精确 + 输出确定**：同一份 HTML 渲染结果可复现、可版本管理
- **为 AI Agent 而生**：内置 20 个 Agent Skills，AI 编程助手能自主完成「规划 → 写 HTML → 配动画 → 渲染出片」全流程；一句话即可生成产品宣传片、无脸解说、PR 转视频等
- **工具链**：50+ 组件市场、Studio 可视化编辑器、Figma 导入、云端渲染

## 与 html-video 的关系

[[html-video]]（nexu-io / Open Design）把 HyperFrames 列为**默认渲染引擎**（HTML + CSS + GSAP，无头 Chromium + ffmpeg），二者同属「HTML 转视频」这条路线：html-video 提供多引擎插件框架与模板，HyperFrames 是其中之一（且由 HeyGen 独立开源维护）。

## 相关概念

- [[html-video]] — 多引擎 HTML 转视频框架，默认引擎即 HyperFrames
- [[AI Agent（智能体）]] — 「为 Agent 而生」的 Skill 化能力封装是本文卖点

## 延展阅读

- [HyperFrames GitHub](https://github.com/heygen-com/hyperframes)
- [HyperFrames 官网](https://hyperframes.heygen.com)
