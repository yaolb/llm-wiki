---
type: topic
tags: [Spring AI, MCP, Model Context Protocol, 架构设计, API管理, AI Gateway]
created: 2026-07-08
updated: 2026-07-08
---

# Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告

## 背景

当前技术栈：Spring AI (2.x) + Spring Boot 4.x + Java 21+。

核心需求：
1. **MCP 协议接入** — 支持 Model Context Protocol，让 AI 模型能标准化调用外部工具和数据源
2. **接口统一管理** — 统一管理多个模型（DeepSeek/ChatGPT/通义等）的接入、路由、鉴权、限流、监控
3. 运维友好、可扩展、适合企业级生产环境

---

## 总体架构参考

Spring AI 2.0 的 MCP 架构分为三层：

```
┌─────────────────────────────────────────────┐
│              Host (AI Application)           │
│  ┌──────────┐  ┌─────────────────────────┐   │
│  │ ChatClient│  │  ToolCallbackProvider   │   │
│  └────┬─────┘  └──────────┬──────────────┘   │
│       │                   │                    │
│  ┌────▼───────────────────▼──────────────┐    │
│  │        McpClient (Session Layer)       │    │
│  └────┬───────────────────┬──────────────┘    │
│       │                   │                    │
├───────┼───────────────────┼────────────────────┤
│  ┌────▼────┐       ┌─────▼──────┐             │
│  │ MCP SRV1 │       │ MCP SRV2   │  ...        │
│  │ (Stdio)  │       │ (HTTP SSE) │             │
│  └─────────┘       └───────────┘              │
└─────────────────────────────────────────────┘
```

---

## 方案一：原生 Spring AI MCP Boot Starter + Nacos/Consul 注册发现

### 核心思路

完全基于 Spring AI 官方提供的 MCP Boot Starter，利用其注解和自动化配置能力，配合注册中心实现服务的发现与管理。

### 架构

```
┌──────────────────────────────────────────────────┐
│                  AI Application (Host)             │
│                                                    │
│  ┌──────────────┐  ┌────────────────────────────┐  │
│  │  ChatClient   │  │  ToolCallbackProvider      │  │
│  │  (统一的AI    │  │  (自动发现所有MCP Server    │  │
│  │   调用入口)   │  │   的Tool并注入)             │  │
│  └──────┬───────┘  └──────────┬─────────────────┘  │
│         │                     │                     │
│  ┌──────▼─────────────────────▼──────────────────┐  │
│  │        McpClientManager                       │  │
│  │  - 连接管理/重连/健康检查                      │  │
│  │  - 通过注册中心发现 MCP Server 地址            │  │
│  └──────┬─────────────────────┬──────────────────┘  │
│         │                     │                     │
│  ┌──────▼──────┐    ┌────────▼─────────┐          │
│  │ MCP Client A│    │  MCP Client B    │  ...      │
│  │ (STREAMABLE)│    │  (STDIO/SSE)     │          │
│  └──────┬──────┘    └────────┬─────────┘          │
└─────────┼─────────────────────┼────────────────────┘
          │                     │
    ┌─────▼──────┐      ┌──────▼───────┐
    │ MCP Server  │      │  MCP Server  │
    │ 业务A(Java) │      │ 业务B(Python)│
    │  @McpTool   │      │              │
    └────────────┘      └──────────────┘
          │                     │
    ┌─────▼─────────────────────▼──────┐
    │  注册中心 (Nacos/Consul/Eureka)  │
    └──────────────────────────────────┘
```

### 技术实现

**MCP Server 端：**

```java
@SpringBootApplication
public class McpDataServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(McpDataServerApplication.class, args);
    }
}

@McpTool
public class DataQueryTools {
    
    @McpTool(name = "query_user_portrait")
    public String queryUserPortrait(
        @McpParam("user_id") String userId,
        @McpParam("dimensions") List<String> dimensions
    ) {
        // 业务逻辑
        return result;
    }
    
    @McpResource(uri = "wanxiang://users/stats")
    public String getUserStats() {
        return statService.getStats();
    }
}
```

**application.yml：**
```yaml
spring:
  ai:
    mcp:
      server:
        stdio: false
        protocol: STREAMABLE  # 生产环境推荐
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: mcp-server-data
```

**MCP Client/Host 端：**

```java
@Configuration
public class McpClientConfig {
    
    @Bean
    public ToolCallbackProvider dataMcpTools(
            McpClientManager mcpClientManager) {
        // 从注册中心发现服务并创建客户端
        return new SyncMcpToolCallbackProvider(
            mcpClientManager.getClient("mcp-server-data")
        );
    }
}

// 统一模型调用
@RestController
public class AiController {
    
    @Autowired
    private ChatClient chatClient;
    
    @PostMapping("/ai/chat")
    public String chat(@RequestBody ChatRequest request) {
        return chatClient.prompt()
            .user(request.getMessage())
            .tools(dataMcpTools)   // 所有MCP工具自动注入
            .call()
            .content();
    }
}
```

**多模型路由：**
```java
@Configuration
public class ModelRouterConfig {
    
    @Bean
    @Qualifier("deepseekChat")
    public ChatClient deepseekChat(ChatClient.Builder builder) {
        return builder.defaultSystem("你是DeepSeek模型").build();
    }
    
    @Bean
    @Qualifier("gptChat")
    public ChatClient gptChat(ChatClient.Builder builder) {
        return builder.defaultSystem("你是GPT模型").build();
    }
    
    // 路由策略
    @Bean
    public ChatClient routerChatClient(
            @Qualifier("deepseekChat") ChatClient deepseek,
            @Qualifier("gptChat") ChatClient gpt) {
        return request -> {
            if (request.isCostSensitive()) {
                return deepseek.call(request);  // 便宜模型
            }
            if (request.requiresReasoning()) {
                return deepseek.call(request);   // DeepSeek推理强
            }
            return gpt.call(request);            // GPT兜底
        };
    }
}
```

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐⭐⭐ 纯Spring生态，无额外组件 |
| 学习成本 | ⭐⭐⭐⭐ 熟悉Spring即可上手 |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 原生支持，版本跟进快 |
| 接口管理 | ⭐⭐⭐ 依赖注册中心基础能力，治理功能有限 |
| 限流/鉴权 | ⭐⭐ 需自行实现或集成Spring Cloud Gateway |
| 多模型路由 | ⭐⭐⭐ 需代码实现路由策略 |
| 可观测性 | ⭐⭐⭐ Spring Actuator + Micrometer |

---

## 方案二：自定义 Unified AI Gateway + MCP Federation

### 核心思路

构建一个独立的 **AI Gateway** 层，统一接管所有 AI 请求路由、MCP Server 注册、鉴权限流和监控，业务应用只通过 Gateway 调用。

### 架构

```
                    ┌─────────────────────────────────────┐
                    │        Clients (Web/App/API)         │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │        Unified AI Gateway            │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    AI Router Engine             │   │
                    │  │  ├─ 模型选择: 成本/延迟/能力    │   │
                    │  │  ├─ Fallback链条                │   │
                    │  │  └─ A/B Test分发               │   │
                    │  └────────────────────────────────┘   │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    MCP Federation Hub           │   │
                    │  │  ├─ MCP Server Registry        │   │
                    │  │  ├─ 统一鉴权 (OAuth2/JWT)      │   │
                    │  │  ├─ 限流 (Token Bucket)        │   │
                    │  │  ├─ 审计日志                    │   │
                    │  │  └─ 健康检查/熔断              │   │
                    │  └────────────────────────────────┘   │
                    │                                      │
                    │  ┌────────────────────────────────┐   │
                    │  │    Unified API Portal           │   │
                    │  │  ├─ 接口文档 (OpenAPI)         │   │
                    │  │  ├─ 在线调试                    │   │
                    │  │  └─ 调用统计                    │   │
                    │  └────────────────────────────────┘   │
                    └──────┬──────────────────────────┬────┘
                           │                          │
              ┌────────────▼────┐          ┌─────────▼──────────┐
              │  AI Model Pool   │          │   MCP Servers      │
              │                   │          │                     │
              │ ├ DeepSeek-V4    │          │ ├ 万象Agent MCP    │
              │ ├ GPT-4o         │          │ ├ ChatBI MCP       │
              │ ├ 通义千问        │          │ ├ 标签服务MCP      │
              │ └ Ollama(本地)    │          │ └ 第三方MCP        │
              └──────────────────┘          └─────────────────────┘
```

### 技术实现

**Gateway 核心路由引擎：**

```java
@Component
public class AiModelRouter {
    
    private final Map<String, ChatClient> modelPool = new ConcurrentHashMap<>();
    
    @PostConstruct
    public void init() {
        modelPool.put("deepseek-v4", buildDeepSeekClient());
        modelPool.put("gpt-4o", buildGptClient());
        modelPool.put("qwen", buildQwenClient());
    }
    
    public ChatClient route(AiRequest request) {
        // 1. 成本优化路由
        if (request.getMaxCost() < 0.001) {
            return modelPool.get("qwen");
        }
        // 2. 能力感知路由
        if (request.requiresReasoning()) {
            return modelPool.get("deepseek-v4");
        }
        // 3. 延迟优先路由
        if (request.isLatencySensitive()) {
            return modelPool.get("gpt-4o");  // 最快
        }
        // 4. Fallback 链
        return modelPool.get("deepseek-v4")
            .fallbackTo(modelPool.get("gpt-4o"))
            .fallbackTo(modelPool.get("qwen"));
    }
}
```

**MCP Federation Registry：**

```java
@RestController
@RequestMapping("/mcp-registry")
public class McpRegistryController {
    
    private final McpServiceRegistry registry;
    
    // MCP Server 注册
    @PostMapping("/register")
    public void register(@RequestBody McpServiceSpec spec) {
        registry.register(spec);
    }
    
    // 统一 MCP 调用入口
    @PostMapping("/v1/tools/{serverId}/{toolName}")
    public McpCallResponse callTool(
            @PathVariable String serverId,
            @PathVariable String toolName,
            @RequestBody McpCallRequest request) {
        // 鉴权 → 限流 → 调用 → 审计
        return registry.invoke(serverId, toolName, request);
    }
    
    // Health Check
    @GetMapping("/health")
    public Map<String, McpHealth> healthCheck() {
        return registry.checkAll();
    }
}
```

**限流与鉴权（Gateway 层统一管控）：**

```java
@Component
public class McpRateLimiter {
    
    private final Map<String, RateLimiter> limiters = new ConcurrentHashMap<>();
    
    public boolean tryAcquire(String apiKey, String endpoint) {
        // 按 API Key + 接口 限流
        String key = apiKey + ":" + endpoint;
        return limiters.computeIfAbsent(key, 
            k -> RateLimiter.create(100, Duration.ofMinutes(1))
        ).tryAcquire();
    }
}
```

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐⭐ 独立 Gateway 组件，架构复杂度增加 |
| 学习成本 | ⭐⭐ 需要理解MCP协议 + Gateway设计 |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 完全自定义，协议兼容性可控 |
| 接口管理 | ⭐⭐⭐⭐⭐ 统一注册、鉴权、限流、审计完备 |
| 限流/鉴权 | ⭐⭐⭐⭐⭐ Gateway 层原生支持 |
| 多模型路由 | ⭐⭐⭐⭐⭐ 路由策略高度灵活 |
| 可观测性 | ⭐⭐⭐⭐⭐ 统一审计日志 + Prometheus 指标 |

---

## 方案三：分层架构 — Spring AI + API Gateway + MCP Sidecar

### 核心思路

MCP Server 以 Sidecar 模式部署，每个业务服务附带一个 MCP Sidecar 代理，统一由 API Gateway 管理流量和策略。

### 架构

```
                    ┌──────────────────────────────────────┐
                    │         API Gateway (Spring Cloud     │
                    │         Gateway / Zuul)               │
                    │                                      │
                    │  ├ 统一入口 /v1/ai/*                  │
                    │  ├ 鉴权: OAuth2 / JWT                │
                    │  ├ 限流: Redis-based Token Bucket     │
                    │  ├ 路由: /v1/ai/wanxiang → Wanxiang   │
                    │  │           /v1/ai/chatbi → ChatBI   │
                    │  └ 监控: Prometheus + Grafana        │
                    └──────┬──────────────────────┬────────┘
                           │                      │
              ┌────────────▼────┐    ┌────────────▼────┐
              │  业务服务A       │    │  业务服务B       │
              │  (万象Agent)     │    │  (ChatBI/Pandas) │
              │                  │    │                  │
              │ ┌──────────────┐│    │ ┌──────────────┐│
              │ │ Spring AI    ││    │ │ Spring AI    ││
              │ │ ChatClient   ││    │ │ ChatClient   ││
              │ └──────┬───────┘│    │ └──────┬───────┘│
              │        │        │    │        │        │
              │ ┌──────▼───────┐│    │ ┌──────▼───────┐│
              │ │MCP Sidecar   ││    │ │MCP Sidecar   ││
              │ │代理 (本地)    ││    │ │代理 (本地)    ││
              │ │Stdio/HTTP    ││    │ │Stdio/HTTP    ││
              │ └──────────────┘│    │ └──────────────┘│
              └─────────────────┘    └─────────────────┘
                           │                      │
              ┌────────────▼────────────────────▼────┐
              │     MCP Server Pool                  │
              │                                      │
              │ ├ 标签服务 MCP Server                 │
              │ ├ 圈人服务 MCP Server (Python)       │
              │ ├ 数据查询 MCP Server                 │
              │ └ 报表服务 MCP Server                 │
              └──────────────────────────────────────┘
```

### 核心特性

**1. Gateway 统一路由：**

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ai-wanxiang
          uri: lb://wanxiang-service
          predicates:
            - Path=/v1/ai/wanxiang/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 100
                redis-rate-limiter.burstCapacity: 200
        - id: ai-chatbi
          uri: lb://chatbi-service
          predicates:
            - Path=/v1/ai/chatbi/**
```

**2. MCP Sidecar 代理：**

```java
@Component
public class McpSidecarProxy {
    
    private final Map<String, McpClient> clients = new ConcurrentHashMap<>();
    
    @EventListener(ApplicationReadyEvent.class)
    public void init() {
        // 自动发现本地的 MCP 服务器进程
        discoverLocalMcpServers();
    }
    
    public McpResult executeTool(String toolName, McpArgs args) {
        // 本地优先 → 远程MCP Server兜底
        McpClient client = clients.get(toolName);
        if (client == null) {
            client = remoteMcpClient(toolName);
        }
        return client.callTool(toolName, args);
    }
}
```

**3. 统一配置中心（Apollo/Nacos）：**

```yaml
# 模型配置 - 统一管理
ai:
  models:
    deepseek-v4:
      endpoint: https://api.deepseek.com
      api-key: ${DEEPSEEK_KEY}
      max-tokens: 4096
      cost-per-token: 0.0001
      weight: 80  # 路由权重
    gpt-4o:
      endpoint: https://api.openai.com
      api-key: ${GPT_KEY}
      max-tokens: 4096
      cost-per-token: 0.002
      fallback-only: true  # 仅作为Fallback
```

### 优缺点

| 维度 | 评价 |
|------|------|
| 架构简洁度 | ⭐⭐ 三层架构，组件较多 |
| 学习成本 | ⭐⭐ 需要理解Gateway+Sidecar+MCP |
| MCP 协议兼容 | ⭐⭐⭐⭐⭐ 完全兼容 |
| 接口管理 | ⭐⭐⭐⭐⭐ Gateway统一管控 |
| 限流/鉴权 | ⭐⭐⭐⭐⭐ Gateway原生能力 |
| 多模型路由 | ⭐⭐⭐⭐⭐ 配置中心动态下发 |
| 运维成本 | ⭐⭐ 组件多，部署较复杂 |
| 可观测性 | ⭐⭐⭐⭐⭐ 全链路监控 |

---

## 方案对比汇总

| 维度 | 方案一：原生Starter | 方案二：AI Gateway | 方案三：分层Sidecar |
|------|:----------------:|:----------------:|:----------------:|
| **实现复杂度** | ⭐低 | ⭐⭐⭐中高 | ⭐⭐⭐⭐高 |
| **MCP原生支持** | 最强 | 中等（需自定义） | 强 |
| **接口统一管理** | 弱 | 强 | 最强 |
| **多模型路由** | 中等 | 强 | 强 |
| **限流/鉴权** | 弱 | 强 | 最强 |
| **运维成本** | 低 | 中 | 高 |
| **适合团队规模** | 小团队 | 中大型 | 大型 |
| **快速上线** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **可扩展性** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **与Spring AI版本同步** | 自动 | 手动 | 自动+手动 |

---

## 推荐方案

### 🏆 推荐：方案一 + 渐进式演进

如果是从现有 Spring AI 项目起步，推荐**方案一（原生 Starter）作为第一阶段**，按以下路线演进：

```
Phase 1 (1-2周)           Phase 2 (2-4周)           Phase 3 (持续)
───────────────          ───────────────           ──────────────
方案一：原生Starter  →    引入Gateway层       →    完善治理能力
                          (方案二/三子集)
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│ Spring AI    │       │ + Spring Cloud   │       │ + MCP Registry│
│ MCP Starter  │       │   Gateway        │       │ + 统一监控    │
│ ChatClient   │  ──►  │ + 注册中心       │  ──►  │ + 模型路由    │
│ @McpTool     │       │ + 基础限流       │       │ + 审计日志    │
│ 单模型       │       │ + Config Center  │       │ + A/B测试     │
└──────────────┘       └──────────────────┘       └──────────────┘
```

**推荐理由：**

1. **快速验证** — 原生 Starter 开箱即用，1~2天可跑通完整 MCP 链路
2. **渐进无痛** — 不阻塞业务迭代，后续可平滑引入 Gateway/Sidecar
3. **生态优势** — Spring AI 官方 MCP Starter 随版本持续迭代，社区成熟
4. **适合当前场景** — 万象和 ChatBI 本就是 Spring Boot 生态，集成成本最低

**MVP 快速启动示例：**

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-client-webflux</artifactId>
</dependency>
```

```yaml
spring:
  ai:
    mcp:
      client:
        # 声明式配置多个 MCP Server
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang:8080
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi:8080
            transport: streamable-http
```

**关于接口统一管理的 Phase 2 增量：**

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ai-unified
          uri: lb://ai-host-service
          predicates:
            - Path=/v1/ai/**
          filters:
            - name: RequestRateLimiter  # 限流
            - name: JwtAuthentication   # 统一鉴权
            - name: AiAuditLogger       # 审计日志
```

---

## 总结

| 需求 | 方案一 Phase1 | 方案一 Phase2 |
|------|:-----------:|:-----------:|
| MCP 协议接入 | ✅ 原生支持 | ✅ 原生支持 |
| 多模型调用 | ✅ ChatClient统一 | ✅ + 路由策略 |
| 统一鉴权 | ❌ 需自行实现 | ✅ Gateway 统一 |
| 限流控制 | ❌ 需自行实现 | ✅ Gateway 统一 |
| 服务发现 | ✅ Nacos/Consul | ✅ Nacos/Consul |
| 可观测性 | ⚠️ Actuator基础 | ✅ + Prometheus+Grafana |
| 动态配置 | ⚠️ 本地配置 | ✅ 配置中心统一 |

**最终推荐：先用方案一（原生 Spring AI MCP Starter）快速上线，再按需演进到 Gateway 架构。** 不要一开始就追求大而全的 Gateway，防止过度设计耽误业务迭代。
