---
pageType: synthesis
id: synthesis.pandas-cli-实现方案与实现路径
title: Pandas CLI 实现方案与实现路径
sourceIds:
  - resource://meishi-pandas-implementation
claims: []
status: active
updatedAt: 2026-07-30T07:27:08.773Z
---

# Pandas CLI 实现方案与实现路径

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# Pandas CLI 实现方案与实现路径

> 本文档整理自 AI > Pandas/智小星 > 技术文档（1734484014800097280）下的 Pandas CLI 后端技术方案，涵盖 v1 现状链路诊断与 v2 改造实现路径。

## 一、模块定位

Pandas CLI 是大数据 AI 小助手（dp_ai_assistant）的命令行交互层，定义在 `dp_ai_assistant_skills/pandas-cli` 模块：

```
dp_ai_assistant/
├── skills/
│   └── pandas-cli/        # CLI 客户端
│       ├── bin/pandas-cli  # 可执行文件
│       └── SKILL.md        # 使用说明
└── union/                  # AI Union 服务端 (dp_ai_assistant_union)
```

## 二、v1 现状：调用链路

### 2.1 请求构造

CLI 使用 argparse 解析参数后，调用 `/api/panda/chatai/send`：

```json
{
  "analytics_mode": "BI_ANALYTICS",
  "agent_id": 235,
  "client_source": "pandas-cli",
  "cli_tool_name": "xinghe_get_status",
  "output_format": "cli",
  "message": "pandas-cli xinghe_get_status --executeIds 123456,123457"
}
```

### 2.2 后端处理流程

```
ChatAiController.send()
  → StreamingAiService.sendProcess()
    → 创建/恢复 Conversation（会话管理）
    → 获取会话锁
    → 创建 Context / XingheAiDetail
    → ReAct 循环
      → Round 1 LLM：将 CLI 文本恢复为 PandasCliForwardTool 参数
      → CliSubToolRegistry 查找子工具
      → 调用 OpenAPI / 业务服务
      → Round 2 LLM：将 ToolResult 转换为自然语言输出
    → CustomAgentPostProcessor 提取最终文本
```

### 2.3 关键代码文件

| 文件 | 作用 |
|------|------|
| `ChatAiController.send` | 后端入口 |
| `StreamingAiService.sendProcess/processReActLoop` | 主流程 |
| `PandasCliForwardTool` | CLI 转发工具 |
| `CliSubToolRegistry` | 子工具注册表 |
| `CliSubToolConfiguration` | 子工具配置 |
| `ReactContext` | ReAct 上下文 |
| `StreamingEmitter` | SSE 发射器 |
| `CustomAgentPostProcessor` | 输出后处理 |
| `CliToolNames` | 命令名常量 |

### 2.4 v1 的核心缺陷

| # | 问题 | 风险 |
|---|------|------|
| 1 | 结构化参数往返：Python类型 → 文本 → LLM → JSON → Java DTO | 参数失真 |
| 2 | raw_message 仅靠 prompt 保证，无字节级校验 | 无法证明一致 |
| 3 | Tool 成功后 LLM 二次模型输出 | 截断/改写/隐藏错误 |
| 4 | LLM 限流覆盖已成功工具调用 | 可用性降低 |
| 5 | 错误语义/退出码不可靠 | CI/CD 误判 |
| 6 | 简单状态查询也触发完整聊天 | 延迟/成本/副作用过重 |
| 7 | 命令契约分散在 CLI、Java、DB、prompt 中 | 协议漂移 |

## 三、v2 实现方案：DIRECT + AGENTIC 双通道

### 3.1 总体架构

新增一个 DIRECT JSON 接口；未带 `--jsonOutput` 保持原有 SSE 接口：

```
POST /api/panda/cli/v1/execute  # 显式 --jsonOutput → JSON
POST /api/panda/chatai/send     # 未带 --jsonOutput → SSE (原行为)
```

### 3.2 核心机制：命令清单契约

每个命令声明 5 个字段：

| 字段 | 含义 |
|------|------|
| command | 稳定唯一命令标识 |
| executionKind | DIRECT（零LLM）或 AGENTIC（需模型） |
| responseMode | JSON（一次性）或 SSE（事件流） |
| parameterSchemaVersion | 参数 DTO 版本 |
| capabilitiesVersion | 命令清单版本 |

### 3.3 通道选择规则

```
--jsonOutput + DIRECT  → JSON → /api/panda/cli/v1/execute
不带 --jsonOutput      → SSE  → /api/panda/chatai/send
--jsonOutput + AGENTIC → 409 COMMAND_CHANNEL_MISMATCH
```

**关键原则**：
- `--jsonOutput` 是唯一的客户端通道开关，CLI 不自动分流
- 服务端强校验契约，不静默切换协议

### 3.4 DIRECT 接口契约

**请求**：
```
POST /api/panda/cli/v1/execute
Content-Type: application/json
Idempotency-Key: <uuid>
X-CLI-Capabilities-Version: 2026-07-20.1
```

```json
{
  "schema_version": "1",
  "command": "xinghe_get_status",
  "arguments": {"executeIds": [123456, 123457]},
  "input": {"raw_message": null},
  "client": {"name": "pandas-cli", "version": "1.1.0", "os": "macos"}
}
```

**响应**（成功）：
```json
{
  "request_id": "req_xxx",
  "command": "xinghe_get_status",
  "success": true,
  "data": [{"executeId": 123456, "status": "FINISHED"}],
  "meta": {"execution_kind": "DIRECT", "llm_used": false, "duration_ms": 83}
}
```

**响应**（失败）：
```json
{
  "success": false,
  "error": {"code": "UPSTREAM_TIMEOUT", "message": "超时", "retryable": true}
}
```

### 3.5 退出码映射

| 场景 | HTTP | 退出码 |
|------|------|--------|
| 成功 | 200 | 0 |
| 参数校验失败 | 400 | 2 |
| token 无效 | 401 | 3 |
| 无权限 | 403 | 4 |
| 命令不存在 | 404 | 2 |
| 通道/幂等/版本冲突 | 409 | 5 |
| 限流 | 429 | 6 |
| 上游失败 | 502 | 7 |
| 上游超时 | 504 | 8 |
| 服务端异常 | 500 | 1 |

### 3.6 DIRECT vs AGENTIC 命令边界

| DIRECT（零 LLM） | AGENTIC（用模型） |
|------------------|------------------|
| SQL 提交、文档提交 | 自然语言生成 SQL/DSL |
| 状态查询、结果获取 | 图表召回、指标理解 |
| 元数据（库/表/字段/分区） | 文件分析 |
| 图表元数据 | 指定 agentId 的 ChatAgent |
| 显式 DSL 图表查询 | 意图→规划→工具编排 |

## 四、实现路径（后端改造）

### 4.1 Step 1：抽取 CliExecutionService

将 PandasCliForwardTool 的下沉职责：
- 根据 command 查找 CliSubTool
- arguments → DTO 转换
- Jakarta Validation 校验
- 执行子工具
- ToolResult → 统一响应
- 记录命令级指标

```
CliDirectController ─────┐
                         ├─> CliExecutionService -> CliSubToolRegistry
PandasCliForwardTool ────┘
```

### 4.2 Step 2：新建 CliExecution（无聊天上下文）

每次 CLI 请求只创建不可变的 execution_id：
```java
CliExecution execution = new CliExecution(
  requestId, executionId, actor, command, 
  arguments, idempotencyKey, deadline
);
```
不含：聊天历史、assistant 消息、Prompt、Agent 配置、会话表 ID。

### 4.3 Step 3：文件下载

每个 execution 分配独立产物目录：
```
<root>/<tenant>/<execution_id>/
```
通过签名 URL 下载：
```
GET /api/panda/cli/v1/executions/{id}/artifacts/{aid}/download
```

### 4.4 Step 4：幂等

写命令必须支持 Idempotency-Key。
服务端保存 `(oa, command, key) → 结果`。
相同 key 返回首次结果；不同请求返回 409 冲突。

### 4.5 Step 5：AGENTIC 执行器（复用 /send）

CLI 不带 `--jsonOutput` 的请求保持现有 SSE `/send`。
逐步收敛事件格式：

```
event: heartbeat → {request_id}
event: progress  → {request_id, stage, message}
event: result    → {request_id, success, data, meta}
event: done      → {request_id}
```

### 4.6 Step 6：迁移策略

- 阶段一：新增 `/execute` 接口，仅支持 DIRECT 命令
- 阶段二：CLI 接入 `--jsonOutput` 参数
- 阶段三：旧 `/send + pandasCliForward` 作为迁移期兼容层
- 阶段四：基于生产数据决定是否废弃旧路径

## 五、技术决策

| 决策项 | 选择 | 理由 |
|--------|------|------|
| 通道选择方式 | 显式 `--jsonOutput` 参数 | 协议建连前确定，CLI 可配正确解析器 |
| DIRECT LLM 调用次数 | 严格 0 次 | 确定性命令不需要 AI |
| CLI 自动分流 | 不启用 | 避免隐式协议切换 |
| 复用 /send 用于 AGENTIC | 是 | 已能满足 SSE/心跳/上下文需求 |
| 使用 `skip_ai` 参数 | 拒绝 | 隐式分流 + 易绕过大模型无日志 |
| CLI 直接持上游凭证 | 拒绝 | 安全风险 |
| 继续强化 Prompt | 拒绝 | 不能提供确定性保证 |

## 六、API 调用路径汇总

| 路径 | 说明 | 接口 |
|------|------|------|
| `POST /api/panda/cli/v1/execute` | DIRECT JSON 接口（新） | 显式带 --jsonOutput |
| `POST /api/panda/chatai/send` | AGENTIC/通用 SSE 接口（原） | 不带 --jsonOutput |
| `GET /.../executions/{id}/artifacts/{aid}/download` | 文件下载（新） | 签名 URL 访问 |
| `GET /.../cli/v1/contract` | 命令契约清单（可选） | CLI 升级检查 |
| `POST /.../self-update --apply` | CLI 自更新（预留） | 可选 |

## 相关文档

- [技术文档入口](https://docs.58corp.com/#/space/1734484014800097280) — AI > Pandas/智小星 > 技术文档
- [Pandas CLI 调用链路现状调研与改造方案](https://docs.58corp.com/#/space/2080134094074781696) — 完整 159KB 方案
- [大数据AI小助手后端技术演进与实践](/wiki/synthesis/bigdata-ai-assistant-backend-tech-evolution.md) — 上一步合并版本
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
