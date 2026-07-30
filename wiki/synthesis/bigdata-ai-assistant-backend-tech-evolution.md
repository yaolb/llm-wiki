---
pageType: synthesis
id: synthesis.大数据ai小助手后端技术演进与实践-pandas-cli-调用链路改造
title: 大数据AI小助手后端技术演进与实践 —— Pandas CLI 调用链路改造
sourceIds:
  - resource://meishi-ai-assistant
claims: []
status: active
updatedAt: 2026-07-30T07:18:52.835Z
---

# 大数据AI小助手后端技术演进与实践 —— Pandas CLI 调用链路改造

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# 大数据 AI 小助手后端技术演进与实践 —— Pandas CLI 调用链路改造

## 概述

"大数据 AI 小助手"（dp_ai_assistant）是星河团队构建的智能数据分析助手，提供 CLI（Pandas CLI）和 Chat 两种交互方式。本文档汇总了 Pandas CLI 调用链路的**现状调研（v1）**与**改造方案（v2）**两个版本，包含架构分析、问题诊断、目标设计、接口契约、实现建议及技术决策。

## 一、背景

### 模块范围
- `dp_ai_assistant_skills/pandas-cli` — CLI 客户端
- `dp_ai_assistant_union` — AI Union 服务端

### 问题概述

pandas-cli 的多数子命令已有明确的命令名和结构化参数，但仍统一调用 `/api/panda/chatai/send` 聊天接口，导致两个非确定性点：

1. **调用前失真**：模型错误复述 `raw_message` 或恢复参数
2. **调用后失真**：OpenAPI 已返回结构化结果，但模型二次摘要/截断/改写

## 二、v1 现状调用链路

### 2.1 请求构造流程

CLI 已通过 argparse 获得明确参数，但 `build_send_message` 又把参数转成伪命令文本：

```
pandas-cli xinghe_get_status --executeIds 123456,123457
```

随后构造通用聊天请求：
```json
{
  "analytics_mode": "BI_ANALYTICS",
  "agent_id": 235,
  "client_source": "pandas-cli",
  "cli_tool_name": "xinghe_get_status",
  "output_format": "cli"
}
```

### 2.2 后端通用聊天流程

`/api/panda/chatai/send` → `sendProcess` → 创建/恢复 Conversation → 会话锁 → Context/Detail → ReAct 循环

### 2.3 第一次 LLM 转换
模型需：识别 CLI 请求 → 选择 `pandasCliForward` → 复述 raw_question → 恢复 business_params → 生成工具调用 JSON

### 2.4 子工具执行
`PandasCliForwardTool` → `CliSubToolRegistry` → 调用OpenAPI → 返回 ToolResult

### 2.5 第二次 LLM 输出
ToolResult 回写 ReAct → 再次调用模型 → `CustomAgentPostProcessor` 提取最后一条 assistant 消息

### 2.6 v1 核心问题

| 问题 | 说明 |
|------|------|
| 结构化参数往返转换 | Python 类型 → CLI 文本 → LLM 工具参数 JSON → Java DTO（理想应为：Python 类型 → HTTP JSON → Java DTO） |
| raw_message 无字节级保证 | 模型可能错误复述 SQL、DSL、URL、ID、日期等 |
| 输出结果被二次模型污染 | 已成功执行但第二次 LLM 改写字段、截断、摘要或隐藏错误 |
| LLM 限流覆盖成功结果 | 工具已返回 success，但第二次 LLM 429 导致整体异常 |
| 错误语义不可靠 | 退出码不反映真实业务结果 |
| 聊天副作用过重 | 即使状态查询也触发了完整 ReAct 上下文 |

## 三、v2 目标架构

### 3.1 核心设计原则

只新增一个显式 JSON 接口；未带 `--jsonOutput` 的请求继续复用现有流式入口：

```
POST /api/panda/cli/v1/execute    # 显式 --jsonOutput，新接口，application/json
POST /api/panda/chatai/send        # 未带 --jsonOutput，原有接口，text/event-stream
```

### 3.2 命令清单与契约

每个命令声明 5 个字段：

| 字段 | 含义 |
|------|------|
| command | 稳定唯一命令标识 |
| executionKind | DIRECT（参数完整，零 LLM）或 AGENTIC（需模型） |
| responseMode | JSON（一次性）或 SSE（事件流） |
| parameterSchemaVersion | 参数 DTO 版本 |
| capabilitiesVersion | 命令清单版本 |

### 3.3 通道选择规则

```
带 --jsonOutput + DIRECT   → JSON → /api/panda/cli/v1/execute
不带 --jsonOutput          → SSE  → /api/panda/chatai/send（保持原行为）
带 --jsonOutput + AGENTIC  → 409 COMMAND_CHANNEL_MISMATCH
```

**核心约束**：
- `--jsonOutput` 是唯一客户端通道选择开关
- CLI 不根据命令清单自动分流
- 服务端强校验，不静默切换协议

### 3.4 DIRECT vs AGENTIC 边界

| 命令类型 | 执行语义 | JSON 通道行为 |
|---------|---------|--------------|
| SQL提交、状态、结果、终止 | DIRECT | 带 --jsonOutput 可走 /execute |
| 元数据查询（库/表/字段/分区） | DIRECT | 同上 |
| 图表元数据、DSL图表查询 | DIRECT | 同上 |
| ChatAgent (`agentId` 指定) | AGENTIC | 保持 /send；JSON 返回 409 |
| NL生成 SQL/DSL | AGENTIC | 保持 /send |
| 图表召回、指标理解、文件分析 | AGENTIC | 保持 /send |

### 3.5 DIRECT 接口契约

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
  "input": {"raw_message": null, "source_message_id": null},
  "client": {"name": "pandas-cli", "version": "1.1.0", "os": "macos"}
}
```

**成功响应**：
```json
{
  "request_id": "req_xxx",
  "command": "xinghe_get_status",
  "success": true,
  "data": [{"executeId": 123456, "status": "FINISHED"}],
  "error": null,
  "meta": {"schema_version": "1", "execution_kind": "DIRECT", "llm_used": false, "duration_ms": 83}
}
```

**错误码与退出码映射**：

| 场景 | HTTP | CLI 退出码 |
|------|------|-----------|
| 成功 | 200 | 0 |
| 参数校验失败 | 400 | 2 |
| token 无效 | 401 | 3 |
| 无权限 | 403 | 4 |
| 命令不存在 | 404 | 2 |
| 通道不匹配/幂等冲突 | 409 | 5 |
| 限流 | 429 | 6 |
| 上游失败 | 502 | 7 |
| 上游超时 | 504 | 8 |
| 服务端异常 | 500 | 1 |

### 3.6 AGENTIC 复用 /send

CLI 不带 `--jsonOutput` 的请求保持现有 `/chatai/send` SSE 接口。建议逐步把事件收敛为类型化格式：

```
event: heartbeat   → {"request_id":"req_xxx"}
event: progress    → {"request_id":"req_xxx","stage":"planning"}
event: result      → {"request_id":"req_xxx","success":true,"data":{...}}
event: done        → {"request_id":"req_xxx"}
```

## 四、后端实现建议

### 4.1 抽取 `CliExecutionService`

将 `PandasCliForwardTool` 的下沉职责到可复用 Service：
- 命令名查找 `CliSubTool`
- arguments → DTO 转换
- Jakarta Validation 校验
- 执行子工具
- ToolResult → 统一响应
- 命令级指标

### 4.2 新建独立 `CliExecution`（不含聊天上下文）

每次 CLI 请求创建不可变的 `execution_id`，领域服务只接收：
- requestId、executionId、actor、command、arguments、idempotencyKey、deadline

不包含聊天历史、assistant 消息、Prompt、Agent 配置或会话表 ID。

### 4.3 文件下载

每个 execution 分配独立目录：`<root>/<tenant>/<execution_id>/`
通过签名 URL 下载：`GET /api/panda/cli/v1/executions/{id}/artifacts/{aid}/download`

### 4.4 幂等

写命令必须支持 `Idempotency-Key`。服务端保存 `(oa, command, key) → 结果`。相同 key 返回首次结果；不同请求返回 409。

## 五、方案对比

| 方案 | 优点 | 问题 | 结论 |
|------|------|------|------|
| **新增 DIRECT JSON 接口** | 改造小；协议建连前确定；保留默认行为 | 需同步命令契约 | ✅ 推荐 |
| 新建 JSON/SSE 双接口 | 接口命名统一 | 重复建设 SSE 能力 | 非必要 |
| 单接口服务端分类 | 集中 | CLI 需动态猜协议 | 不推荐 |
| 继续强化 Prompt | 不改接口 | 不能提供确定性保证 | 只能缓解 |

## 六、技术决策

### 决策
新增 `/api/panda/cli/v1/execute` JSON 接口；未带 `--jsonOutput` 复用 `/send`。CLI 不自动分流；服务端强校验契约。

### 明确拒绝
- 不使用 `skip_ai` 自由参数
- 不在服务端静默切换协议
- 不继续依靠 Prompt 保证原文和 JSON
- CLI 不直接持有上游 OpenAPI 凭证

## 相关文档

- [AI 相关调研](https://docs.58corp.com/#/space/1760961972737724417)（目录页）
- [Pandas CLI 调用链路现状调研与改造方案](https://docs.58corp.com/#/space/2080134094074781696)（159KB，本文主要来源）
- 相关模块：`dp_ai_assistant_skills/pandas-cli`, `dp_ai_assistant_union`
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
