---
type: entity
tags: [AI编程, CLI, Agent, Anthropic, 工具]
created: 2026-07-04
updated: 2026-07-07
---

# Claude Code

## 概述

Claude Code 是 Anthropic 推出的命令行 AI 编程工具，采用多 Agent 分层架构，通过系统提示词定义行为模式，支持 subAgent 委派、并行工具调用和项目级记忆管理。

## 核心信息
- **全称**：Claude Code (CLI)
- **类型**：AI 编程 CLI 工具
- **开发方**：Anthropic
- **技术架构**：多 Agent 分层架构

## 技术架构

### 系统角色设置
- 在每次交互式会话初始化时构建系统提示词
- 确立身份为软件工程 CLI 工具
- 设定简洁、直接的交互风格
- 建立防御性安全策略边界

### 核心特性
- **SubAgent 机制**：支持将任务委派给子 Agent 并行执行
- **工具调用引擎**：文件读写、代码搜索、Bash 执行等
- **TodoWrite/Read**：任务分解与追踪
- **项目记忆**：CLAUDE.md 定义项目级规则和上下文

## 相关摘要
- [[AI编程Agent框架对比分析]]

## 相关概念
- [[AI编程]]
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 隐私与遥测配置

Claude Code 会后台上报遥测、错误和反馈调查数据。以下环境变量可关闭全部后台上报，
不影响正常功能：

```json
// ~/.claude/settings.json 或 ~/.config/claude-code/settings.json
{
  "env": {
    // 🚫 总开关：一条顶后面所有（更新检测、反馈、崩溃上报、遥测全关）
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",

    // 🔕 静默运行
    "DISABLE_INSTALLATION_CHECKS": "1",           // 启动不检查环境、不弹警告
    "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY": "1",   // 不弹满意度问卷

    // 📊 遥测彻底切断
    "CLAUDE_CODE_ENABLE_TELEMETRY": "0",          // 关闭基础遥测
    "CLAUDE_CODE_ENHANCED_TELEMETRY_BETA": "0",   // 关闭 Beta 增强遥测
    "CLAUDE_CODE_BYOC_ENABLE_DATADOG": "0",       // 关闭 Datadog 第三方日志
    "CLAUDE_CODE_PROPAGATE_TRACEPARENT": "0",     // 链路追踪不上传

    // 📡 远程配置
    "DISABLE_GROWTHBOOK": "1",                    // 不拉 A/B 测试开关
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",        // 关闭归因 Header

    // ❌ 旧版参数（仍兼容）
    "DISABLE_TELEMETRY": "1",
    "DISABLE_ERROR_REPORTING": "1"
  },
  "includeCoAuthoredBy": false  // Git 提交不添加 Co-Authored-By
}
```

**配置作用域（从高到低）：** Managed → 命令行参数 → Local → Project → User

**参考来源：**
- [Claude Code Settings 官方文档](https://code.claude.com/docs/en/settings)
- [Claude Code Data Usage 官方文档](https://code.claude.com/docs/en/data-usage)
- [微信文章：一分钟关掉 Claude Code 的所有后台上报](https://mp.weixin.qq.com/s/OJ1_vGQVwDZyd-7tu0fwqQ)

## 延展阅读
- [Claude Code 分层多Agent架构技术文档](https://github.com/shareAI-lab/analysis_claude_code)
