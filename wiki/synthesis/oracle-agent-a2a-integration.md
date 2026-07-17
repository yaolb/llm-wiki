---
type: synthesis
tags: [Oracle, A2A, A2UI, Agent, 架构设计, SSE, 互操作, 58同城]
created: 2026-07-17
updated: 2026-07-17
related_sources: 4
---

# Oracle 指标平台 Agent A2A + A2UI 集成设计方案

## 概述

本文档定义 Oracle（58 同城统一指标平台）在已有的 A2UI 前端协议之上，引入 Google A2A 协议的完整设计方案，实现**三协议分层架构**：

- **A2UI**（已有）— Agent 与前端界面的结构化通信（SSE 事件）
- **A2A**（新增）— 本 Agent 与外部 Agent 之间的互操作（JSON-RPC）
- **MCP**（已有，透传 spring-ai）— Agent 与本地工具/数据的集成（@Tool）

三者各司其职，互不冲突，完整覆盖 "前端 ← 编排层 → 外部 Agent → 本地工具" 的整条链路。

## 相关文档

- [A2A 协议概念](../concepts/a2a-protocol.md)
- [ChatAgent 指标建模方案](/docs/technical/agent/index.md)（Oracle 源码内）
- [Agent 工具调用 + 流式交互框架设计](/docs/technical/agent/2026-07-17-tool-calling-streaming-design.md)
- [Spring-ai 2.0 迁移记录](/docs/technical/agent/spring-ai-2.0-migration.md)

## 1. 总体架构分层

### 1.1 三协议定位图

```
┌─ A2UI 协议 (前端交互层) ───────────────────────────┐
│  浏览器 ← SSE → AgentController                    │
│  事件：text / think / tool_call / tool_result /     │
│        a2ui_command / error / done                  │
│  职责：用户聊天界面 + 确认卡片 + ThoughtChain 渲染  │
└───────────────────────┬────────────────────────────┘
                        │
┌─ 编排层 ──────────────▼────────────────────────────┐
│  StreamGenerateReActService (ReAct 循环)            │
│  AgentToolRegistry (工具注册表)                      │
│  ChatHistoryStore / SessionStateMachine              │
│  ┌─────────────────────────────────────────────┐   │
│  │ A2A 集成层 ★ 新增                            │   │
│  │  ├─ A2AServerAdapter: 将 @Tool 暴露给外部    │   │
│  │  └─ A2AClientTool: 封装为 @Tool 供 LLM 调用  │   │
│  └─────────────────────────────────────────────┘   │
└──────┬──────────────────────┬──────────────────────┘
       │ MCP                  │ A2A (HTTPS+JSON-RPC)
┌──────▼──────┐       ┌──────▼──────────┐
│ 本地服务     │       │ 外部 Agent      │
│ (DB/API等)  │       │ (SAP/SF/其他)   │
└─────────────┘       └─────────────────┘
```

### 1.2 协议职责边界

| 协议 | 通信方向 | 传输 | 数据格式 | 解决什么问题 |
|---|---|---|---|---|
| **A2UI** | 前端 ↔ 后端 | SSE（单工） | 自定义事件 + JSON | "怎么在聊天界面里展示确认卡片和工具调用节点" |
| **A2A** | 后端 ↔ 外部服务器 | HTTPS + JSON-RPC 2.0 | Task / Message / AgentCard | "不同服务器上的 Agent 怎么发现和委派任务" |
| **MCP** | 后端 ↔ 本地工具/数据 | 进程内方法调用 / HTTP | ToolDefinition / ToolCallback | "Agent 怎么用数据库和 API" |

### 1.3 为什么需要 A2A

已有能力 | 缺什么 | A2A 补什么
---|---|---
LLM 可以调本地 @Tool 方法 | 调不了外部系统的 Agent | 外部 Agent 通过 A2A 暴露为"远程工具"
前端能通过 SSE 看流式输出 | 看不到外部 Agent 的进度 | A2A 的 Task 状态同步回 A2UI
本项目有完善的 @Tool 生态 | 外部系统无法利用这些能力 | A2A Server 把 @Tool 发布为 Agent Capability

## 2. A2A Server 方案：对外暴露 Oracle 能力

### 2.1 目标

让外部 Agent（SAP、Salesforce、其他企业系统）通过 A2A 协议调用 Oracle 平台的指标查询、实体字段查询、指标建模等能力。

### 2.2 架构

```
外部 Agent                      Oracle Agent (A2A Server)
  │                                     │
  │  GET /.well-known/agent-card        │
  │◄───────────────────────────────────│ 返回 Agent Card（能力清单）
  │                                     │
  │  POST /a2a/json-rpc                 │
  │  {"method":"tasks.send", ...}       │
  │────────────────────────────────────►│
  │                                     │──→ AgentToolRegistry 查找工具
  │                                     │──→ 执行对应 @Tool 方法
  │  {"result":{"id":"task-xxx",        │
  │   "status":"completed",             │
  │   "artifact":{...}}}                │
  │◄───────────────────────────────────│
```

### 2.3 组件设计

#### 2.3.1 A2AServerController

```java
@RestController
@RequestMapping("/a2a")
public class A2AServerController {

    private final AgentToolRegistry toolRegistry;
    private final AgentCard agentCard;           // 自动生成
    private final TaskRepository taskStore;      // 内存/DB 任务存储
    private final A2UIEventBridge a2uiBridge;    // 将外部任务状态同步到 A2UI

    /**
     * Agent Card 端点：供外部 Agent 发现能力
     * GET /.well-known/agent-card
     */
    @GetMapping("/.well-known/agent-card")
    public AgentCard getAgentCard() { ... }

    /**
     * JSON-RPC 端点：接收外部 Agent 的 RPC 调用
     * POST /a2a/json-rpc
     * Content-Type: application/json
     */
    @PostMapping(value = "/json-rpc", consumes = "application/json")
    public ResponseEntity<JsonRpcResponse> handleJsonRpc(
            @RequestBody JsonRpcRequest request) { ... }

    /**
     * 流式 JSON-RPC 端点：支持 SSE 推送的长任务
     * POST /a2a/json-rpc-stream
     */
    @PostMapping(value = "/json-rpc-stream", 
                 produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<String>> handleStreamingJsonRpc(
            @RequestBody JsonRpcRequest request) { ... }
}
```

#### 支持的 RPC 方法

| 方法 | 用途 |
|---|---|
| `tasks.send` | 创建并执行任务（同步/异步） |
| `tasks.sendStreaming` | 创建并流式执行任务（SSE） |
| `tasks.get` | 查询任务状态 |
| `tasks.cancel` | 取消进行中的任务 |
| `tasks.list` | 列出会话的任务列表 |
| `agent.getCard` | 获取 Agent Card |

#### 2.3.2 AgentCard 自动生成

基于 `AgentToolRegistry` 中已注册的所有 `@Tool` 方法，自动推导 A2A Capability：

```java
@Component
public class AgentCardGenerator {

    private final AgentToolRegistry toolRegistry;

    public AgentCard generate() {
        var toolMap = toolRegistry.buildToolMap();
        var skills = toolMap.values().stream()
            .map(tc -> {
                var def = tc.getToolDefinition();
                return Skill.builder()
                    .id(def.name())
                    .name(def.name())
                    .description(def.description())
                    .inputSchema(inferInputSchema(def))
                    .outputSchema(inferOutputSchema(def))
                    .build();
            })
            .collect(Collectors.toList());

        return AgentCard.builder()
            .name("Oracle Metric Platform Agent")
            .description("58 同城统一指标平台的 AI Agent")
            .url("https://oracle.example.com/a2a")
            .version("1.0.0")
            .capabilities(List.of(
                Capability.builder()
                    .id("tool_execution")
                    .skills(skills)
                    .build()
            ))
            .authentication(AuthenticationScheme.API_KEY)
            .build();
    }
}
```

**新增工具时无需额外配置：** 只要写一个 `@Component implements AgentToolProvider` 类，`@Tool` 标注方法后，AgentCard 自动包含新能力。

#### 2.3.3 Task 与 @Tool 的映射

A2A 的 Task 概念映射为本地 `@Tool` 调用：

```java
private Optional<Artifact> executeTool(Task task) {
    // 1. 从 task.message.parts 中提取工具名和参数
    var toolName = extractToolName(task);
    var toolArgs = extractToolArgs(task);

    // 2. 从注册表中查找对应的 ToolCallback
    var callback = toolRegistry.buildToolMap().get(toolName);
    if (callback == null) return Optional.empty();

    // 3. 执行工具
    var result = callback.call(toolArgs);

    // 4. 包装为 A2A Artifact
    return Optional.of(Artifact.builder()
        .parts(List.of(
            DataPart.builder().data(result).build()
        ))
        .build());
}
```

### 2.4 Task 生命周期映射

```
A2A Task 状态            Oracle 内部状态
──────────────────────────────────────────
SUBMITTED     ──→  taskStore.create()
WORKING       ──→  toolCallback.call() 执行中
INPUT_REQUIRED ──→  A2UI a2ui_command 卡片确认
COMPLETED     ──→  工具返回结果，构建 Artifact
FAILED        ──→  工具异常，构建 ErrorInfo
CANCELED      ──→  AbortController 中断
```

## 3. A2A Client 方案：调用外部 Agent

### 3.1 目标

在 ReAct 循环中，当 LLM 判断任务超出本地工具范围时，能通过 A2A 协议调用外部 Agent 完成子任务。

### 3.2 架构

```
ReAct 循环（StreamGenerateReActService）
  │
  │──→ LLM：需要查 SAP 供应商信息
  │──→ LLM 选择 call_external_agent 工具
  │         │
  │         ▼
  │   A2AClientTool (@Tool)
  │         │
  │         ├──→ 发现远程 Agent Card
  │         ├──→ tasks.send(agentUrl, message)
  │         ├──→ 轮询/流式等待结果
  │         └──→ 返回 Artifact
  │         │
  │         ▼
  │──→ LLM 结合结果，继续推理
  │──→ 最终回答通过 A2UI 推送前端
```

### 3.3 A2AClientTool

```java
@Component
public class A2AClientTool implements AgentToolProvider {

    private final A2AClient a2aClient;
    private final AgentCardCache agentCardCache;

    @Tool(name = "call_external_agent",
          description = """
          通过 A2A 协议调用外部企业 Agent 完成任务。
          支持查询外部系统数据、跨系统流程协同等场景。
          参数：
            agent_url: 外部 A2A Agent 的端点 URL
            message: 要发送给外部 Agent 的任务描述（自然语言）
          返回：外部 Agent 的处理结果文本。
          """)
    public String callExternalAgent(
            @ToolParam(description = "外部 A2A Agent 的端点 URL，例如 https://sap.example.com/a2a")
            String agentUrl,

            @ToolParam(description = "要发送给外部 Agent 的任务描述，用自然语言描述需求")
            String message) {

        // 1. 发现 Agent 能力（带缓存）
        var card = agentCardCache.discover(agentUrl);

        // 2. 发送任务
        var task = a2aClient.sendTask(agentUrl, message);

        // 3. 轮询直到完成（最长 wait 60s）
        var artifact = a2aClient.pollUntilDone(task.getId(), 60_000);

        // 4. 提取结果文本
        return formatArtifact(artifact);
    }
}
```

### 3.4 A2AClient 核心组件

```java
@Component
public class A2AClient {

    private final RestClient restClient;

    /**
     * 发现远程 Agent 的能力（缓存 AgentCard）
     */
    public AgentCard discoverAgent(String baseUrl) {
        return restClient.get()
            .uri(baseUrl + "/.well-known/agent-card")
            .retrieve()
            .body(AgentCard.class);
    }

    /**
     * 发送任务给远程 Agent
     */
    public A2ATask sendTask(String agentUrl, String message) {
        var request = JsonRpcRequest.builder()
            .method("tasks.send")
            .params(Map.of(
                "message", Map.of(
                    "role", "user",
                    "parts", List.of(Map.of(
                        "type", "text",
                        "text", message
                    ))
                )
            ))
            .build();

        var response = restClient.post()
            .uri(agentUrl + "/a2a/json-rpc")
            .body(request)
            .retrieve()
            .body(JsonRpcResponse.class);

        return response.getResultAs(A2ATask.class);
    }

    /**
     * 轮询任务直到完成
     */
    public A2AArtifact pollUntilDone(String taskId, long timeoutMs) {
        var deadline = System.currentTimeMillis() + timeoutMs;
        while (System.currentTimeMillis() < deadline) {
            var task = getTask(taskId);
            switch (task.getStatus()) {
                case COMPLETED -> { return task.getArtifact(); }
                case FAILED, CANCELED ->
                    throw new A2AException(task.getError().getMessage());
                case INPUT_REQUIRED ->
                    throw new A2AException("远程 Agent 需要更多信息，暂不支持多轮交互");
            }
            Thread.sleep(1000);
        }
        throw new TimeoutException("等待外部 Agent 超时");
    }
}
```

### 3.5 AgentCard 本地缓存

```java
@Component
public class AgentCardCache {

    private final Map<String, CachedCard> cache = new ConcurrentHashMap<>();
    private static final Duration TTL = Duration.ofHours(1);

    public AgentCard discover(String agentUrl) {
        var cached = cache.get(agentUrl);
        if (cached != null && !cached.isExpired()) {
            return cached.card;
        }
        var card = fetchAgentCard(agentUrl);
        cache.put(agentUrl, new CachedCard(card));
        return card;
    }

    // 可配置的外部 Agent
    public List<AgentCard> getAllConfiguredAgents() {
        // 从 application.yml 读取 known agents
        return knownAgents.stream()
            .map(agent -> discover(agent.getUrl()))
            .toList();
    }
}
```

## 4. A2UI 与 A2A 的交互桥接

### 4.1 全链路数据流

```
用户提问：查一下 SAP 订单 ORD-2024-001 的供应商信息
                      │
                      ▼
A2UI ← text "我来查一下外部系统..." → 前端显示中间状态
                      │
A2UI ← tool_call {callId:"ext-1", name:"call_external_agent"} → ThoughtChain pending
                      │
                 A2AClientTool 执行
                      │
A2UI ← text "正在连接 SAP 系统..." → 前端显示进度
                      │
                 A2A Client → tasks.send → SAP Agent
                      │                          │
                      │                     SAP Agent 处理中
                      │                          │
                 A2A Client ← Task:COMPLETED ← SAP Agent
                      │
tool_result {callId:"ext-1", success:true, result:{"supplier":"某某公司"}}
                      │
A2UI ← tool_result → ThoughtChain success 节点
                      │
                  LLM 继续推理
                      │
A2UI ← text "该订单的供应商为：某某公司..." → 最终回答
                      │
A2UI ← done → 本轮结束
```

### 4.2 A2UI 事件扩展

现有 A2UI 事件（来自 `2026-07-17-tool-calling-streaming-design.md`）已覆盖 A2A 场景，无需新增事件类型：

| A2UI 事件 | A2A 集成中的语义 | 前端展示 |
|---|---|---|
| `text` | LLM 推理中间状态 / 进度提示 | 气泡文本 |
| `think` | DeepSeek 推理过程 | ThoughtChain 推理节点 |
| `tool_call` | LLM 决定调用 `call_external_agent` | ThoughtChain pending 节点 |
| `tool_result` | 外部 Agent 返回结果 | ThoughtChain success/error 节点 |
| `done` | 本轮结束 | 停止 loading |

**注意：** 如果外部 Agent 本身支持 SSE 流式返回，可以在 `tool_call` 后追加多个 `text` 事件作为进度反馈，无需等待 `tool_result` 才更新 UI。

### 4.3 A2UI → A2A 回环场景

当 A2A Server 收到的 Task 需要用户确认时（`INPUT_REQUIRED`），通过 A2UI 的 `a2ui_command` 事件向用户推确认卡片：

```
外部 Agent → POST /a2a/json-rpc {"method":"tasks.send", ...}
                    │
              Tool 执行到关键步骤需要用户确认
                    │
A2UI ← a2ui_command {surfaceId: "...", command: {AtomicMetricConfirmCard}}
                    │
              用户在 Ant Design X 上点击"确认"
                    │
A2UI ← 前端 POST 确认结果给 AgentController
                    │
              A2A Task 继续 → COMPLETED
                    │
A2A Server → 返回 Artifact 给外部 Agent
```

## 5. 配置化外部 Agent 注册

### 5.1 application.yml 配置

```yaml
oracle:
  agent:
    a2a:
      server:
        enabled: true
        base-path: /a2a
        authentication:
          type: API_KEY
          api-key-header: X-API-Key
      client:
        enabled: true
        default-timeout: 60000  # 默认超时 60s
        known-agents:
          - name: SAP 供应商查询
            url: https://sap.corp.example.com/a2a
            description: 查询订单供应商信息
            auth:
              type: OAUTH2
              client-id: oracle
              scope: supplier:read
          - name: Salesforce CRM
            url: https://salesforce.corp.example.com/a2a
            description: 客户信息与合同查询
            auth:
              type: API_KEY
              api-key: ${SALESFORCE_API_KEY}
```

### 5.2 LLM 工具描述中的自动注入

```java
@Tool(name = "call_external_agent",
      description = "调用外部 Agent。支持的外部系统：\n" +
          knownAgents.stream()
              .map(a -> "- " + a.getName() + " (" + a.getUrl() + ")：" + a.getDescription())
              .collect(Collectors.joining("\n")) +
          "\n参数：agent_url: 外部 Agent URL, message: 任务描述")
```

这样 LLM 在工具选择时就知道有哪些外部 Agent 可用，以及各自的能力。

## 6. 安全性设计

### 6.1 A2A Server 端认证

```java
@Bean
public SecurityWebFilterChain a2aSecurityFilterChain(ServerHttpSecurity http) {
    return http
        .securityMatcher(new PathPatternParserServerWebExchangeMatcher("/a2a/**"))
        .authorizeExchange(ex -> ex
            .pathMatchers("/a2a/.well-known/agent-card").permitAll()
            .anyExchange().authenticated()
        )
        .oauth2ResourceServer(OAuth2ResourceServerSpec::opaqueToken)
        .build();
}
```

### 6.2 外部 Agent 调用限流

```java
// 对每个外部 Agent URL 做速率限制
@Bean
public Map<String, RateLimiter> agentRateLimiters() {
    return knownAgents.stream()
        .collect(Collectors.toMap(
            AgentConfig::getUrl,
            cfg -> RateLimiter.create(10)  // 每秒 10 次
        ));
}
```

### 6.3 数据隔离

- 外部 Agent 只能调用**白名单工具**（`@Tool` 上标记 `a2aExposed = true`）
- 非暴露工具（如 `submitForReview`）内部 LLM 可用，外部 Agent 不可见
- AgentCard 只列出标记了 `@A2AExposed` 的工具

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface A2AExposed {
    String description() default "";
}
```

## 7. 分层项目结构

```
infra/agentic/
├── StreamGenerateReActService.java         # ReAct 循环（不变）
├── ModeConstants.java
│
├── tool/                                    # 已有：工具注册体系
│   ├── AgentToolProvider.java              # 标记接口
│   ├── AgentToolRegistry.java              # 工具注册表
│   ├── MetricQueryTool.java               # 指标查询（已有设计）
│   └── EntityPropertyQueryTool.java        # 实体字段查询（已有设计）
│
├── a2a/                                     # ★ 新增：A2A 集成包
│   ├── server/
│   │   ├── A2AServerController.java        # A2A JSON-RPC 端点
│   │   ├── AgentCardGenerator.java         # AgentCard 自动生成
│   │   ├── TaskRepository.java             # 任务存储（内存/Redis）
│   │   └── A2AServerAuthFilter.java        # 认证过滤器
│   ├── client/
│   │   ├── A2AClient.java                  # A2A 客户端（发送 Task）
│   │   ├── A2AClientTool.java              # 封装为 @Tool 供 LLM 调用
│   │   └── AgentCardCache.java             # 远程 AgentCard 缓存
│   ├── bridge/
│   │   └── A2UIEventBridge.java            # A2A ↔ A2UI 状态桥接
│   ├── model/
│   │   ├── A2ATask.java                    # Task 数据模型
│   │   ├── AgentCard.java                  # AgentCard 数据模型
│   │   └── JsonRpcMessage.java             # JSON-RPC 消息模型
│   └── config/
│       └── A2AConfiguration.java           # 配置类 + 条件装配
│
├── channel/                                 # 已有：通信管道
│   ├── IMessageChannel.java
│   └── sse/SSEMarkdownMessageChannel.java  # SSE 实现（含 A2UI）
│
└── store/                                   # 已有：存储
    ├── ChatHistoryStore.java
    └── SteerSignalStore.java
```

## 8. 落地阶段与优先级

### Phase 1：A2A Server（推荐最先做）

**目标：** 把现有的 @Tool 方法通过 A2A 协议暴露给外部系统。

**工作量：** ~3-5 天（取决于 A2A Java SDK 的熟悉程度）

**步骤：**
1. 引入 `a2a-java-sdk-reference-jsonrpc` 依赖
2. 实现 `AgentCardGenerator` — 自动从 `AgentToolRegistry` 生成 Agent Card
3. 实现 `A2AServerController` — JSON-RPC 端点，将 `tasks.send` 映射为 `@Tool` 调用
4. 接入认证（API Key / OAuth 2.0）
5. 端到端验证：用 `curl` 或 A2A 官方客户端工具发送 Task

**验证方式：**
```bash
# 获取 Agent Card
curl http://localhost:8080/a2a/.well-known/agent-card | jq

# 调用指标查询工具
curl -X POST http://localhost:8080/a2a/json-rpc \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-key" \
  -d '{
    "method": "tasks.send",
    "params": {
      "message": {
        "role": "user",
        "parts": [{"type": "text", "text": "查询名称包含'订单金额'的指标"}]
      }
    }
  }'
```

### Phase 2：AgentCard 自动发现系统

**目标：** 让外部 Agent 能动态发现 Oracle 的能力更新。

**工作量：** ~1 天

**步骤：**
1. AgentCard 缓存 + TTL 机制
2. 工具注册后自动更新 AgentCard
3. 可选的 Agent 注册中心（Agent Directory）

### Phase 3：A2A Client

**目标：** 在 ReAct 循环中让 LLM 能调用外部 Agent。

**工作量：** ~3 天

**步骤：**
1. 实现 `A2AClient`（`discoverAgent` + `sendTask` + `pollUntilDone`）
2. 实现 `A2AClientTool`（`@Tool` 封装）
3. 配置已知外部 Agent
4. 端到端验证：发一个需要查外部系统的自然语言问题，观察 ReAct 循环自动调用

**验证方式：**
```text
用户：帮我查一下订单 ORD-2024-001 在 SAP 里的供应商信息
LLM：这需要查询 SAP 系统，我调 call_external_agent 工具...
```

### Phase 4：A2UI ↔ A2A 完整桥接

**目标：** 外部 Agent Task 的进度在 A2UI 可见，且 `INPUT_REQUIRED` 状态可通过前端确认卡片解决。

**工作量：** ~2 天

## 9. 关键设计决策

### 9.1 不走 SDK 内置 Server，基于 WebFlux 自建

不直接使用 `a2a-java-sdk-reference-jsonrpc` 的内嵌 HTTP Server，而是基于项目已有的 **WebFlux + Sinks.Many** 模式自建 Controller，原因：
- 与现有 `AgentController` 的 WebFlux 风格一致
- 可以复用已有的认证、限流、日志中间件
- A2A SDK 仅用于数据模型（Task、AgentCard 等 POJO）

### 9.2 Tool → A2A Capability 的 1:1 映射

不加中间抽象层。每一个 `@Tool` 方法直接对应一个 A2A Skill。这意味着：
- 新增一个 `@Tool` = 新增一个 A2A 能力
- 删除一个 `@Tool` = 该能力从 Agent Card 自动移除
- 无需额外注册步骤

### 9.3 外部 Agent 调用走单轮 Task（非多轮对话）

当前阶段 A2A Client 仅支持 **单轮 Task**（发送 → 等待 → 返回），不支持 `INPUT_REQUIRED` 的多轮交互。多轮交互涉及复杂的会话上下文传递，建议等业务场景明确后再支持。

## 10. 风险与注意事项

| 风险 | 影响 | 缓解措施 |
|---|---|---|
| 外部 Agent 不可用/超时 | ReAct 循环卡住 | `A2AClient.pollUntilDone` 硬超时 60s，超时 LLM 自行决定重试或跳过 |
| 外部 Agent 返回恶意数据 | 系统安全 | 外部 Agent 结果只作为 LLM 上下文，不直接执行 |
| SDK 版本更新 | 接口变动 | SDK 仅用于数据模型 POJO，调用方按接口适配 |
| 性能 | A2A Server 可能被外部频繁调用 | 按 Agent URL + API Key 做限流（RateLimiter） |

## 11. 后续演进方向

- **Agent 注册中心** — 一个中心化的 Agent Directory，所有 Agent 在此注册和发现
- **多轮 Task 支持** — A2A Client 支持 `INPUT_REQUIRED` 回环
- **流式外部 Agent** — 支持 SSE 实时推送外部 Agent 的执行进度到 A2UI
- **Task 持久化** — 当前用内存存储，生产环境切 Redis/DB
- **成本追踪** — 每次外部 Agent 调用记录 token 消耗和延迟
