---
type: entity
tags: [AI编程, SDD, 规范驱动, GitHub, 开源工具]
created: 2026-07-07
updated: 2026-07-07
---

# GitHub Spec Kit

## 概述

GitHub Spec Kit 是 GitHub 官方开源的规格驱动开发（Spec-Driven Development, SDD）工具包。让开发者先写规格说明书（Spec），再由 AI Agent 按图纸施工，终结纯靠感觉的 vibe coding。118k+ Star，MIT 协议。

## 核心信息

- **全称**：GitHub Spec Kit
- **类型**：规范驱动开发工具包
- **相关方**：[GitHub](https://github.com/github/spec-kit)
- **Star**：⭐ 118,424 (2026-07-07)
- **协议**：MIT License
- **主语言**：Python
- **创建时间**：2025-08-21

## 核心理念

SDD 颠覆了传统软件开发范式：

- **传统模式**：代码为王，规格说明只是临时脚手架
- **SDD 模式**：规格说明成为可执行的核心资产，直接从规格生成代码

## 工作流

```
Specify（规格） → Plan（规划） → Tasks（任务） → Implement（实现）
```

四个阶段均设门控验证（Gate Check），防止"需求漂移"。

## 关键特性

- **Agent 无关**：支持 30+ AI Coding Agent（Copilot / Claude Code / Gemini CLI / Cursor / Windsurf 等）
- **扩展与预设系统**（Extensions & Presets）：社区可贡献功能扩展
- **角色绑定 Bundle**：按角色（PM / Dev / QA）提供预设配置
- **Specify CLI**：命令行工具，`specify init / specifiy self upgrade`

## 快速开始

```bash
# 安装
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@vX.Y.Z

# 初始化
specify init my-project --integration copilot

# 在 Agent 中使用 slash 命令
/speckit.constitution  # 建立项目基本原则
/speckit.specify       # 描述要构建的内容
```

## 相关实体

- [[OpenSpec]] — 同领域 SDD 框架，不同流派
- [[BMAD]] — 重量级 SDD 平台
- [[Superpowers]] — TDD 驱动的 Skills 框架，可与 Spec Kit 互补
- [[统一开发范式]] — 融合 SDD + TDD 的开发方法论

## 参考

- [GitHub 项目页](https://github.com/github/spec-kit)
- [官方文档](https://github.github.io/spec-kit/)
- [GitHub Blog 介绍文章](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
