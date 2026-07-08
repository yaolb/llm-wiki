---
type: entity
tags: [AI编程, CLI, Agent, GitHub, 开源, 工具]
created: 2026-07-07
updated: 2026-07-07
---

# Codex CLI

## 概述

Codex CLI 是 GitHub（OpenAI）推出的终端 AI 编程 CLI 工具。开源于 2026 年，支持 Agents / Skills 等模式，与 Claude Code 同为 AI 编程终端赛道的主流工具。

## 隐私与遥测配置

Codex CLI 默认会上报遥测数据。通过 `~/.codex/config.toml` 可关闭：

```toml
[analytics]
enabled = false

[otel]
exporter = "none"
trace_exporter = "none"
metrics_exporter = "none"
log_user_prompt = false      # 提示词内容不记录不上报

[feedback]
enabled = false

[features]
tool_suggest = false         # 关闭云端工具建议
remote_plugin = false        # 关闭远程插件加载（只跑本地，防供应链风险）
```

## 参考

- [微信文章：一分钟关掉 Claude Code 的所有后台上报](https://mp.weixin.qq.com/s/OJ1_vGQVwDZyd-7tu0fwqQ)（含 Codex 配置）
- [Codex CLI GitHub](https://github.com/github/codex-cli)
