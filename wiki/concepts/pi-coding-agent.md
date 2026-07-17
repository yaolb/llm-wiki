---
type: concept
tags: [AI, Agent, 编码Agent, CLI, 开源, TypeScript, earendil-works]
created: 2026-07-17
updated: 2026-07-17
---

# Pi — 最小化终端编码 Agent

## 一句话定义

Pi 是一个轻量、可扩展的终端编码 AI Agent（CLI），由 [earendil-works](https://github.com/earendil-works/pi) 开发，MIT 开源。核心极小，通过 TypeScript Extension、Agent Skills、Prompt 模板、主题和 Package 系统无限扩展，类似**开源版的 Claude Code**。

> 官方定义：*A minimal terminal coding harness. Designed to stay small at the core while being extended through TypeScript extensions, skills, prompt templates, themes, and pi packages.*

项目网站：https://pi.dev

## 安装

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
# 或
curl -fsSL https://pi.dev/install.sh | sh

# 启动
cd /path/to/project
pi
```

## 项目架构（4 个独立包）

| 包 | 描述 |
|---|---|
| `@earendil-works/pi-ai` | 统一多供应商 LLM API（OpenAI、Anthropic、Google 等） |
| `@earendil-works/pi-agent-core` | Agent 运行时：ReAct 循环、工具调用、状态管理 |
| `@earendil-works/pi-coding-agent` | 终端 CLI：TUI、Session、Extension/Skill/Package 系统 |
| `@earendil-works/pi-tui` | 终端 UI 库（差分渲染） |

## 核心设计理念

### 最小核心 + 插件化

内置仅 4 个工具：`read`、`write`、`edit`、`bash` + 3 个只读工具 `grep`、`find`、`ls`。其余一切通过 Extension 叠加。

### Extension 系统（TypeScript）

直接写 TypeScript 模块来扩展，支持事件拦截、自定义 Tool、自定义 Command、自定义 TUI 组件：

```typescript
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

export default function (pi: ExtensionAPI) {
  // 拦截危险操作
  pi.on("tool_call", async (event, ctx) => {
    if (event.toolName === "bash" && event.input.command?.includes("rm -rf")) {
      const ok = await ctx.ui.confirm("危险操作!", "允许 rm -rf?");
      if (!ok) return { block: true };
    }
  });

  // 注册工具
  pi.registerTool({
    name: "greet",
    description: "Greet someone",
    parameters: Type.Object({ name: Type.String() }),
    async execute(toolCallId, params, signal, onUpdate, ctx) {
      return { content: [{ type: "text", text: `Hello ${params.name}!` }], details: {} };
    },
  });
}
```

### Agent Skills（按需加载）

类似 OpenClaw 的 Skills，通过 `SKILL.md` 文件定义，运行时通过 `/skill:name` 触发。

### Session 管理（树形分支）

Pi 的 Session 是树形结构，支持从历史任意节点 fork 分支：

- `/tree` — 查看所有分支
- `/fork` — 从历史消息创建新 session
- `/compact` — 压缩老消息控制 context 窗口
- `/clone` — 复制当前分支到新 session

### 三种集成模式

| 模式 | 命令 | 用途 |
|---|---|---|
| 交互式 TUI | `pi` | 日常编码 |
| 打印模式 | `pi -p "xxx"` | 一次性问答 |
| **RPC 模式** | `pi --mode rpc` | stdin/stdout JSONL 协议，嵌入其他应用 |
| **JSON 模式** | `pi --mode json` | 结构化事件输出 |

### RPC 模式（亮点）

通过 stdin/stdout 的 JSONL 协议将 Pi 嵌入任何应用。支持 20+ 种命令：`prompt`、`steer`、`follow_up`、`abort`、`new_session`、`set_model` 等，全部异步流式。

### SDK 嵌入

```typescript
import { createAgentSession, ModelRuntime, SessionManager } from "@earendil-works/pi-coding-agent";

const modelRuntime = await ModelRuntime.create();
const { session } = await createAgentSession({ sessionManager: SessionManager.inMemory(), modelRuntime });

session.subscribe((event) => {
  if (event.type === "message_update") process.stdout.write(event.assistantMessageEvent.delta);
});
await session.prompt("总结这个仓库");
```

可以直接在 Node.js 应用中嵌入 Agent 能力，无需子进程。

### 安全模型

Pi 没有内置沙箱（设计决定），默认完全信任当前用户：

- **Project Trust** — 首次进入有资源的项目弹信任确认
- **3 种隔离方案**：Gondolin（micro-VM 仅隔离工具）、Docker（全进程）、OpenShell（策略沙箱）
- 沙箱是外部责任，非内置

### Package 生态

```bash
pi install npm:@foo/bar@1.0.0     # npm 包
pi install git:github.com/user/repo  # Git 仓库
pi list                            # 列出已安装
pi update --all                    # 更新所有
```

Package 可包含 Extensions / Skills / Prompts / Themes。

## 关键链接

- 官网：https://pi.dev
- 文档：https://pi.dev/docs/latest
- GitHub：https://github.com/earendil-works/pi
- Package 画廊：https://pi.dev/packages

## 竞品对比

| 维度 | Pi | Claude Code | OpenClaw |
|---|---|---|---|
| 开源 | ✅ MIT | ❌ 闭源 | 部分开源 |
| 扩展方式 | TypeScript Extension + Skills | 无 | Skills（Markdown） |
| Session 模型 | 树形+分支 | 线性 | 线性 |
| RPC/SDK | ✅ RPC + SDK | ❌ | ✅ Sessions API |
| 供应商 | 多供应商 | 仅 Anthropic | 多供应商 |
| 定位 | 通用编码 Agent | 编程 Agent | 通用 AI 助手 |
