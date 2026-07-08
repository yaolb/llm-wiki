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

---

## 四、方案一深度展开：MCP + 接口 + 文档三位一体

### 4.1 核心架构理念

方案一的目标是构建一个 **三位一体** 的框架，让每个业务方法同时具备三重身份：

```
┌─────────────────────────────────────────────────────────┐
│                     @Service 业务方法                     │
│                                                          │
│           ┌──────────┼────────────┐                      │
│           ▼          ▼            ▼                      │
│    ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│    │ REST API │ │ MCP Tool │ │  文档     │               │
│    │(HTTP JSON)│ │(Streamable)│ │(OpenAPI) │               │
│    └──────────┘ └──────────┘ └──────────┘               │
│                                                          │
│  ┌────────────────────────────────────────────────┐     │
│  │        自动注册 & 文档生成引擎                    │     │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐     │     │
│  │  │OpenAPI   │  │MCP Schema│  │Markdown  │     │     │
│  │  │ 生成器   │  │  生成器  │  │ 文档页   │     │     │
│  │  └──────────┘  └──────────┘  └──────────┘     │     │
│  └────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
```

**核心原则：接口即 MCP，一次定义，三处可用。**

---

### 4.2 接口即 MCP：自动桥接

#### 4.2.1 统一注解体系

定义一套统一的注解，一个方法同时注册 REST 和 MCP：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AiApi {
    String name();                          // 方法名（也是 MCP tool name）
    String path() default "";              // REST 路径，为空则自动生成
    String description() default "";       // 描述
    HttpMethod method() default HttpMethod.POST;  // HTTP 方法
    String[] tags() default {};             // 分组标签
    boolean enableMcp() default true;       // 是否暴露为 MCP Tool
    boolean enableRest() default true;      // 是否暴露为 REST API
}
```

#### 4.2.2 自动桥接处理器

```java
@Component
public class AiApiBridgeRegistry implements BeanPostProcessor {
    
    private final List<AiApiEndpoint> endpoints = new CopyOnWriteArrayList<>();
    
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        for (Method method : bean.getClass().getMethods()) {
            AiApi ann = method.getAnnotation(AiApi.class);
            if (ann == null) continue;
            
            // 1. 注册 REST 端点
            if (ann.enableRest()) {
                registerRestEndpoint(bean, method, ann);
            }
            
            // 2. 注册 MCP Tool
            if (ann.enableMcp()) {
                registerMcpTool(bean, method, ann);
            }
            
            // 3. 生成文档
            endpoints.add(new AiApiEndpoint(bean, method, ann));
        }
        return bean;
    }
    
    private void registerRestEndpoint(Object bean, Method method, AiApi ann) {
        // 动态注册到 Spring MVC
        // 方案：使用 RequestMappingHandlerMapping 动态添加
        log.info("✅ REST端点注册: {} -> {}", ann.path(), method.getName());
    }
    
    private void registerMcpTool(Object bean, Method method, AiApi ann) {
        // 动态注册为 MCP Tool（通过 ToolCallback 注入到 ChatClient）
        // Spring AI 的 ToolCallback 可以编程式注册
        log.info("✅ MCP工具注册: {} -> {}", ann.name(), method.getName());
    }
}
```

#### 4.2.3 使用示例

```java
@Service
public class UserPortraitService {
    
    @AiApi(
        name = "query_user_portrait",
        path = "/api/wanxiang/portrait",
        description = "查询用户画像标签数据",
        tags = {"万象", "用户画像"}
    )
    public PortraitResult queryPortrait(
        @ApiParam("用户ID") String userId,
        @ApiParam(value = "维度列表", example = "["年龄","性别","消费力"]") List<String> dimensions
    ) {
        // 业务逻辑
        return portraitService.query(userId, dimensions);
    }
    
    @AiApi(
        name = "batch_query_tags",
        path = "/api/wanxiang/tags/batch",
        description = "批量查询标签值"
    )
    public Map<String, Object> batchQueryTags(@RequestBody BatchQueryRequest request) {
        return tagService.batchQuery(request);
    }
}
```

#### 4.2.4 自动映射规则

| 维度 | REST API | MCP Tool |
|------|----------|----------|
| 路径 | `@AiApi.path` → `/api/{module}/{name}` | Streamable HTTP endpoint |
| 参数 | JSON body → Java对象 | JSON Schema 自动生成 |
| 返回 | HTTP Response JSON | `@McpTool` 返回值 |
| 鉴权 | JWT/Token拦截器 | MCP Session鉴权 |
| 限流 | Gateway过滤器 | MCP Client限流 |
| 文档 | OpenAPI 3.1 | MCP Schema (JSON-RPC) |

---

### 4.3 分布式 MCP 调用

#### 4.3.1 架构总览

```
┌─────────────────────────────────────────────────────────────┐
│                   AI Host (统一入口)                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              McpClientManager                         │   │
│  │  ┌──────────────────────────────────────────────┐    │   │
│  │  │           MCP Service Discovery                │    │   │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐      │    │   │
│  │  │  │ 万象服务  │ │ ChatBI   │ │ 标签服务  │      │    │   │
│  │  │  │ MCP Client│ │ MCP      │ │ MCP      │      │    │   │
│  │  │  │           │ │ Client   │ │ Client   │      │    │   │
│  │  │  └─────┬─────┘ └────┬─────┘ └────┬─────┘      │    │   │
│  │  └────────┼────────────┼────────────┼───────────┘    │   │
│  └───────────┼────────────┼────────────┼──────────────┘   │
└──────────────┼────────────┼────────────┼──────────────────┘
               │ Streamable │ Streamable │ Streamable
               │ HTTP       │ HTTP       │ HTTP
    ┌──────────▼──────┐ ┌───▼────────┐ ┌─▼──────────────┐
    │ 万象 MCP Server  │ │ChatBI MCP  │ │ 标签 MCP Server │
    │ (8081)          │ │Server(8082)│ │ (8083)         │
    │                  │ │            │ │                 │
    │ @McpTool        │ │ @McpTool   │ │ @McpTool       │
    │ - queryPortrait │ │ - askBI    │ │ - listTags     │
    │ - batchTags     │ │ - genSQL   │ │ - tagValues    │
    └─────────────────┘ └────────────┘ └─────────────────┘
               │                │                │
         ┌─────┴────────────────┴────────────────┴─────┐
         │          Nacos / Consul 注册中心              │
         │  (服务发现 + 健康检查)                        │
         └──────────────────────────────────────────────┘
```

#### 4.3.2 MCP Server 端（每个微服务独立部署）

**依赖：**
```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

**配置：**
```yaml
server:
  port: 8081

spring:
  application:
    name: mcp-server-wanxiang
  ai:
    mcp:
      server:
        name: wanxiang-agent
        version: 1.0.0
        protocol: STREAMABLE    # ← Streamable HTTP 传输
        transport: streamable-http
        sse-poll-interval: 500  # SSE 轮询间隔(ms)
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: mcp-server-wanxiang
```

**代码：**
```java
@SpringBootApplication
@EnableDiscoveryClient
public class WanxiangMcpServer {
    public static void main(String[] args) {
        SpringApplication.run(WanxiangMcpServer.class, args);
    }
}

@McpTool
public class WanxiangAgentTools {
    
    private final UserPortraitService portraitService;
    private final TagService tagService;
    
    @McpTool(
        name = "query_user_portrait",
        description = "查询用户画像标签，支持年龄/性别/消费力/兴趣等维度"
    )
    public PortraitResult queryUserPortrait(
        @McpParam("用户ID（数字格式）") String userId,
        @McpParam("查询维度列表，如 [\"年龄\",\"性别\",\"消费力\"]") 
        @JsonProperty("dimensions") List<String> dimensions
    ) {
        return portraitService.query(userId, dimensions);
    }
    
    @McpTool(name = "batch_query_tags", description = "批量查询标签值")
    public Map<String, Object> batchQueryTags(
        @McpParam("批量查询请求") BatchQueryRequest request
    ) {
        return tagService.batchQuery(request);
    }
}
```

#### 4.3.3 MCP Client 端（AI Host，统一发现与调用）

**依赖：**
```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-mcp-client-webflux</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

**配置：**
```yaml
spring:
  ai:
    mcp:
      client:
        # 静态连接配置（适合少量确定的服务）
        connections:
          - name: wanxiang-agent
            url: http://localhost:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://localhost:8082
            transport: streamable-http
```

**动态服务发现（从注册中心自动发现 MCP Server）：**
```java
@Configuration
public class McpClientAutoDiscovery {
    
    @Bean
    @ConditionalOnBean(NamingService.class)
    public McpClientManager mcpClientManager(
            NamingService namingService,
            ObjectProvider<McpClient.Builder> clientBuilder
    ) {
        return new McpClientManager(namingService, clientBuilder);
    }
}

@Component
public class McpClientManager {
    
    private final Map<String, McpClient> clients = new ConcurrentHashMap<>();
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    
    public McpClientManager(NamingService naming, ObjectProvider<McpClient.Builder> builderProvider) {
        // 每 30 秒刷新服务列表
        scheduler.scheduleAtFixedRate(() -> {
            try {
                // 发现所有标记为 MCP 的服务
                List<Instance> instances = naming.getAllInstances(
                    "mcp-server-*", true  // 支持通配符匹配
                );
                for (Instance instance : instances) {
                    String serviceName = instance.getServiceName();
                    if (!clients.containsKey(serviceName)) {
                        McpClient client = builderProvider.getObject()
                            .name(serviceName)
                            .url(String.format("http://%s:%d", 
                                instance.getIp(), instance.getPort()))
                            .transport(McpTransport.STREAMABLE_HTTP)
                            .build();
                        clients.put(serviceName, client);
                        log.info("🔄 MCP Client 自动连接: {} -> {}:{}", 
                            serviceName, instance.getIp(), instance.getPort());
                    }
                }
            } catch (Exception e) {
                log.warn("MCP服务发现刷新失败", e);
            }
        }, 0, 30, TimeUnit.SECONDS);
    }
    
    public McpClient getClient(String serviceName) {
        return clients.get(serviceName);
    }
    
    public Map<String, McpClient> getAllClients() {
        return Collections.unmodifiableMap(clients);
    }
}
```

**统一工具注入到 ChatClient：**
```java
@Component
public class UnifiedToolInjector {
    
    @Bean
    public ChatClient chatClient(
            ChatClient.Builder builder,
            McpClientManager clientManager) {
        
        // 收集所有 MCP Server 的 ToolCallbackProvider
        List<ToolCallbackProvider> providers = clientManager.getAllCliets()
            .entrySet().stream()
            .map(e -> new SyncMcpToolCallbackProvider(e.getValue()))
            .collect(Collectors.toList());
        
        // 合并所有工具
        ToolCallbackProvider combined = ToolCallbackProvider.combine(providers);
        
        return builder
            .defaultTools(combined)
            .build();
    }
}
```

#### 4.3.4 分布式调用流程

```
User: "帮我查一下北京地区高消费力男性用户的画像"
       │
       ▼
AI Host ChatClient
       │
       ├── 模型选择路由 → DeepSeek-V4 (推理强)
       │
       ├── 工具发现阶段
       │    └── ToolCallbackProvider 返回所有 MCP Server 的 Tool 列表
       │
       ├── 模型决策 → 需要调用 query_user_portrait
       │
       ├── MCP 调用
       │    ├── 1. McpClientManager 定位服务: mcp-server-wanxiang
       │    ├── 2. 构建 JSON-RPC 请求
       │    │    {
       │    │      "method": "tools/call",
       │    │      "params": {
       │    │        "name": "query_user_portrait",
       │    │        "arguments": {
       │    │          "user_id": "12345",
       │    │          "dimensions": ["年龄","性别","消费力"]
       │    │        }
       │    │      }
       │    │    }
       │    ├── 3. Streamable HTTP 发送 → POST /mcp/v1/tools/call
       │    │    └── 头部: Content-Type: application/json
       │    │    └── 响应: SSE 流式返回或 JSON 一次性返回
       │    ├── 4. 万象 MCP Server 接收
       │    │    ├── 反序列化参数
       │    │    ├── 调用 @McpTool 方法
       │    │    ├── 执行画像查询
       │    │    └── 返回结果
       │    └── 5. 结果返回 AI Model
       │
       └── AI 组织最终回答
```

---

### 4.4 Streamable HTTP 传输详解

#### 4.4.1 为什么选择 Streamable HTTP

| 传输方式 | 适用场景 | 优势 | 劣势 |
|---------|---------|------|------|
| STDIO | 本地单进程 | 简单直接 | 不能跨网络 |
| SSE (传统) | 简单推送 | 单向推送 | 连接开销大 |
| **Streamable HTTP** | **分布式生产环境** | **双向、低延迟、可扩展** | **配置略复杂** |

#### 4.4.2 Streamable HTTP 工作原理

```
MCP Client (AI Host)                    MCP Server (业务服务)
       │                                       │
       │  1. POST /mcp/v1/tools/list            │
       │  ─────────────────────────────────►    │
       │  ◄─────────────────────────────────    │
       │  Response: Tool[] (JSON)               │
       │                                       │
       │  2. POST /mcp/v1/tools/call             │
       │  Content-Type: application/json        │
       │  {name, arguments}                      │
       │  ─────────────────────────────────►    │
       │                                       │
       │  Option A: 一次性响应                   │
       │  ◄─────────────────────────────────    │
       │  Response: ToolResult (JSON)           │
       │                                       │
       │  Option B: SSE 流式响应                │
       │  ◄──── SSE stream ────────────────    │
       │  data: {"type":"progress",...}        │
       │  data: {"type":"result",...}          │
       │                                       │
       │  3. GET /mcp/v1/events (SSE订阅)       │
       │  (服务端主动推送工具变更通知)            │
       │  ◄──── SSE stream ────────────────    │
       │  data: {"type":"tool_list_changed"}   │
```

#### 4.4.3 Spring Boot 配置

```yaml
spring:
  ai:
    mcp:
      server:
        protocol: STREAMABLE
        transport: streamable-http
        # 可选：SSE 相关配置
        sse-poll-interval: 500          # 轮询间隔 (ms)
        sse-max-connections: 100        # 最大 SSE 连接数
        idle-timeout: 300000            # 空闲超时 (ms)
```

**WebMVC 实现（推荐，适合多数场景）：**
```
依赖: spring-ai-starter-mcp-server-webmvc
默认自动配置:
  - POST /mcp/v1/tools/call
  - POST /mcp/v1/tools/list
  - GET  /mcp/v1/events (SSE)
  - GET  /mcp/v1/health
```

**WebFlux 实现（高并发）：**
```
依赖: spring-ai-starter-mcp-server-webflux
优势: 非阻塞、背压支持、高吞吐
```

---

### 4.5 自动文档生成

#### 4.5.1 三层文档体系

```
┌──────────────────────────────────────────────────────────┐
│                  统一文档门户                               │
│                                                           │
│  ┌──────────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │  MCP Schema       │  │ OpenAPI 3.1  │  │  Markdown   │  │
│  │  (JSON-RPC)       │  │ (REST)       │  │ (人可读)    │  │
│  │                   │  │              │  │            │  │
│  │ /mcp/v1/tools/list │  │ /v3/api-docs │  │ /docs/mcp  │  │
│  │ 自动 JSON Schema  │  │ SpringDoc    │  │ 格式化文档 │  │
│  └──────────────────┘  └──────────────┘  └────────────┘  │
│                                                           │
│  统一数据源: @AiApi / @McpTool 注解元数据                   │
└──────────────────────────────────────────────────────────┘
```

#### 4.5.2 MCP Schema 自动生成

MCP 的 Schema 是自动的——`@McpTool` 注解天然生成 JSON Schema：

```json
// GET /mcp/v1/tools/list 响应 (自动生成)
{
  "tools": [
    {
      "name": "query_user_portrait",
      "description": "查询用户画像标签",
      "inputSchema": {
        "type": "object",
        "properties": {
          "user_id": {
            "type": "string",
            "description": "用户ID（数字格式）"
          },
          "dimensions": {
            "type": "array",
            "items": {"type": "string"},
            "description": "查询维度列表"
          }
        },
        "required": ["user_id", "dimensions"]
      }
    }
  ]
}
```

#### 4.5.3 REST API 文档自动生成（OpenAPI 3.1 + SpringDoc）

依赖：
```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.8.0</version>
</dependency>
```

自动生成 OpenAPI 文档：
```yaml
springdoc:
  api-docs:
    path: /v3/api-docs
  swagger-ui:
    path: /swagger-ui.html
    operations-sorter: method
    tags-sorter: alpha
  packages-to-scan: com.yourcompany.mcp
```

#### 4.5.4 MCP-OpenAPI 统一描述（关键创新）

将 MCP Tool 映射为 OpenAPI 的 扩展字段，实现 **统一描述**：

```yaml
openapi: 3.1.0
info:
  title: 万象 MCP API
  version: 1.0.0
  x-mcp-server: true                    # ← MCP 标记
paths:
  /api/wanxiang/portrait:
    post:
      operationId: query_user_portrait
      x-mcp-tool: true                   # ← 同时也是 MCP Tool
      x-mcp-tool-name: query_user_portrait
      summary: 查询用户画像
      x-mcp-param-mapping:
        # REST body 参数到 MCP arguments 的映射
        body.user_id -> arguments.user_id
        body.dimensions -> arguments.dimensions
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                user_id:
                  type: string
                  description: 用户ID
                dimensions:
                  type: array
                  items:
                    type: string
              required:
                - user_id
                - dimensions
      responses:
        '200':
          description: 查询成功
          x-mcp-result: true             # ← 同时也是 MCP 返回
```

#### 4.5.5 文档聚合门户

```java
@RestController
@RequestMapping("/docs")
public class ApiDocumentationController {
    
    private final McpServerInstance mcpServer;
    private final List<AiApiEndpoint> endpoints;
    
    // 1. 统一服务列表
    @GetMapping("/services")
    public List<McpServiceDoc> listServices() {
        // 聚合所有已注册的 MCP Server 及其工具
        return mcpServer.discovery();
    }
    
    // 2. MCP Schema 查看器（可读版）
    @GetMapping("/mcp")
    public String mcpDocPage() {
        // 生成 MCP 工具的 Markdown/HTML 文档
        return buildMcpDocPage();
    }
    
    // 3. 接口状态监控
    @GetMapping("/health")
    public Map<String, HealthStatus> healthCheck() {
        // 检查所有注册的 MCP Server 健康状态
        return healthChecker.checkAll();
    }
    
    // 4. 在线调试
    @PostMapping("/playground/try")
    public Object tryTool(@RequestBody McpTryRequest request) {
        // 在线调试 MCP Tool
        return mcpServer.callTool(request.getToolName(), request.getArguments());
    }
}
```

**生成的文档内容示例：**

```markdown
# 万象 MCP 服务文档

## 服务信息
- 服务名: mcp-server-wanxiang
- 版本: 1.0.0
- 传输协议: Streamable HTTP
- 状态: ✅ 健康 (响应时间 12ms)

## 可用工具 (3)

### 1. query_user_portrait
- **描述**: 查询用户画像标签
- **REST等效**: POST /api/wanxiang/portrait
- **参数**:
  | 名称 | 类型 | 必填 | 描述 |
  |------|------|------|------|
  | user_id | string | ✅ | 用户ID（数字格式）|
  | dimensions | array[string] | ✅ | 查询维度列表 |
- **调试**: [在线测试 →](/docs/playground?tool=query_user_portrait)

### 2. batch_query_tags
- **描述**: 批量查询标签值
...
```

---

### 4.6 完整项目结构

```
mcp-platform/
├── mcp-api/                          # 公共 API 定义
│   └── src/main/java/.../
│       ├── annotation/
│       │   └── AiApi.java            # 统一注解
│       ├── dto/
│       │   ├── McpRequest.java
│       │   └── McpResponse.java
│       └── bridge/
│           └── AiApiBridgeRegistry.java  # 自动桥接
├── mcp-server-wanxiang/              # 万象 MCP Server
│   ├── pom.xml
│   └── src/main/...
│       ├── WanxiangMcpServer.java
│       ├── tools/
│       │   ├── UserPortraitTools.java   # @McpTool
│       │   └── TagQueryTools.java
│       └── application.yml
├── mcp-server-chatbi/                # ChatBI MCP Server
│   ├── pom.xml
│   └── src/main/...
│       ├── ChatbiMcpServer.java
│       ├── tools/
│       │   ├── ChatBiTools.java
│       │   └── SqlGenTools.java
│       └── application.yml
├── mcp-server-label/                 # 标签 MCP Server
│   └── ...
├── mcp-host/                         # AI Host 统一入口
│   ├── pom.xml
│   └── src/main/...
│       ├── AiHostApplication.java
│       ├── client/
│       │   ├── McpClientManager.java     # 动态发现
│       │   └── UnifiedToolInjector.java   # 统一注入
│       ├── controller/
│       │   └── AiChatController.java     # 对话接口
│       ├── docs/
│       │   └── ApiDocumentationController.java  # 文档门户
│       └── application.yml
└── pom.xml                           # 父 POM
```

---

### 4.7 启动与验证

```bash
# 1. 启动注册中心
docker compose up -d nacos

# 2. 启动各 MCP Server
cd mcp-server-wanxiang && mvn spring-boot:run  # :8081
cd mcp-server-chatbi  && mvn spring-boot:run  # :8082
cd mcp-server-label   && mvn spring-boot:run  # :8083

# 3. 启动 AI Host
cd mcp-host && mvn spring-boot:run             # :8080

# 4. 验证
curl http://localhost:8080/mcp/v1/tools/list
# → 返回所有已注册 MCP Server 的工具列表

curl http://localhost:8080/docs/services
# → 返回服务列表及文档
```

**验证工具自动发现：**
```bash
# 手动触发 MCP 调用
curl -X POST http://localhost:8080/mcp/v1/tools/call \
  -H "Content-Type: application/json" \
  -d '{
    "name": "query_user_portrait",
    "arguments": {
      "user_id": "12345",
      "dimensions": ["年龄", "性别", "消费力"]
    }
  }'
```

---

### 4.8 方案一能力覆盖矩阵

| 需求 | 实现方式 | 状态 |
|------|---------|:----:|
| MCP 协议接入 | `@McpTool` 注解 + `spring-ai-starter-mcp-server-webmvc` | ✅ 原生 |
| Streamable HTTP | `protocol: STREAMABLE` + Streamable HTTP transport | ✅ 原生 |
| 分布式 MCP 调用 | 每个微服务独立 MCP Server + Nacos 注册发现 + McpClientManager | ✅ 方案 |
| 接口即 MCP | `@AiApi` 统一注解 → 自动注册 REST + MCP | ✅ 框架 |
| MCP Schema 文档 | 自动生成 (`/mcp/v1/tools/list`) | ✅ 自动 |
| REST API 文档 | SpringDoc OpenAPI 3.1 (`/swagger-ui.html`) | ✅ Spring生态 |
| 统一文档门户 | `ApiDocumentationController` 聚合展示 | ✅ 方案 |
| 在线调试 | `/docs/playground/try` 端点 | ✅ 方案 |
| 服务健康检查 | `/mcp/v1/health` + Nacos 健康检查 | ✅ 自动 |
|

---

### 4.9 推荐实施路线

```
第1周                   第2周                   第3-4周
─────────────          ─────────────           ──────────────
搭建 MCP 基础框架       扩展分布式 MCP          完善文档体系
├── 创建 mcp-api 模块   ├── 部署 Nacos          ├── 集成 SpringDoc
├── 实现 @AiApi 注解    ├── 各服务注册发现      ├── 开发文档门户
├── 首个 MCP Server     ├── McpClientManager    ├── 在线调试
├── Streamable HTTP     ├── 统一工具注入        └── 文档部署
└── 端到端验证          └── 分布式调用验证
```

---

## 五、Nacos + 域名：统一访问层深度设计

### 5.1 为什么需要域名

在微服务 + MCP 架构中，MCP Server 通过 Nacos 注册后，AI Host 需要访问它们。如果直接使用 IP:Port：

| 问题 | 说明 |
|------|------|
| IP 硬编码 | 扩缩容或重启后 IP 变化，需要手动更新 |
| 无法负载均衡 | 多实例需要自行实现负载均衡 |
| HTTPS/TLS 困难 | 每个实例单独管理证书 |
| 运维割裂 | 服务名与访问地址脱节，排查困难 |

引入域名后：

```
用户请求 → https://mcp.yourcompany.com/wanxiang/portrait
                               ↓
                     DNS 解析 → Nacos 服务发现
                               ↓
                   负载均衡 → 具体实例 IP:Port
```

### 5.2 四层域名架构

```
                            ┌──────────────────────────────┐
                            │        外部 DNS              │
                            │  mcp.yourcompany.com → VIP   │
                            └────────────┬─────────────────┘
                                         │ A记录/CNAME
                            ┌────────────▼─────────────────┐
                            │     负载均衡器 (SLB/Nginx)    │
                            │  - TLS 终结                   │
                            │  - 域名 → 反向代理            │
                            │  - 统一 443 入口              │
                            └────────────┬─────────────────┘
                                         │
            ┌────────────────────────────┼────────────────────────────┐
            │                            │                            │
  ┌─────────▼──────────┐    ┌───────────▼──────────┐    ┌───────────▼──────────┐
  │  API Gateway        │    │   AI Host (MCP Client)│    │   其他内部服务       │
  │  (Spring Cloud GW)  │    │                      │    │                      │
  │  gw.mcp.internal    │    │  host.mcp.internal   │    │  svc.mcp.internal    │
  └─────────┬──────────┘    └───────────┬──────────┘    └───────────┬──────────┘
            │                            │                            │
            └──────────────┬─────────────┴──────────────┬────────────┘
                           │                            │
                  ┌────────▼────────┐          ┌───────▼────────┐
                  │   Nacos Cluster  │          │  CoreDNS       │
                  │   (注册中心)     │          │  (内部DNS)     │
                  │   nacos:8848    │          │                │
                  └────────┬────────┘          └───────┬────────┘
                           │                            │
            ┌──────────────┼────────────────────────────┘
            │              │              Internal DNS 解析:
            │              │              *.mcp.internal → Nacos
            │              │
   ┌────────▼────────┐  ┌──▼──────────┐  ┌──────────────┐
   │ 万象 MCP Server  │  │ ChatBI MCP  │  │ 标签 MCP     │
   │  mcp-wanxiang    │  │ mcp-chatbi  │  │ mcp-label    │
   │  :8081           │  │  :8082      │  │  :8083       │
   └─────────────────┘  └─────────────┘  └──────────────┘
```

### 5.3 域名分层设计

| 层级 | 域名 | 用途 | 访问范围 |
|------|------|------|---------|
| **外部** | `mcp.yourcompany.com` | 用户/第三方MCP调用入口 | 公网 |
| **Gateway** | `gw.mcp.internal` | API Gateway 内部地址 | 内网 |
| **AI Host** | `host.mcp.internal` | AI Host MCP Client 访问 | 内网 |
| **服务** | `mcp-wanxiang.mcp.internal` | 万象 MCP Server | 内网 |
| **服务** | `mcp-chatbi.mcp.internal` | ChatBI MCP Server | 内网 |
| **服务** | `mcp-label.mcp.internal` | 标签 MCP Server | 内网 |
| **Nacos** | `nacos.mcp.internal` | Nacos 集群 | 内网 |

### 5.4 方案一：CoreDNS + Nacos 插件（推荐）

将 Nacos 注册的服务自动导出为 DNS 域名，CoreDNS 提供服务发现，实现「服务名 ↔ 域名」的自动映射。

#### 架构
```
MCP Server 注册到 Nacos
       │
       │ 服务名: mcp-wanxiang
       ▼
Nacos CoreDNS 插件 (sidecar)
       │
       │ 自动注册 DNS 记录
       ▼
CoreDNS 服务器
  mcp-wanxiang.mcp.internal  A  10.0.1.10:8081
  mcp-wanxiang.mcp.internal  A  10.0.1.11:8081  (多实例)
       │
       │ DNS 查询
       ▼
AI Host / Gateway 通过域名访问
```

#### 部署 CoreDNS + Nacos 插件

```yaml
# CoreDNS Corefile
.:53 {
    errors
    health
    ready
    # Nacos 插件
    nacos {
        # Nacos 服务器地址
        server_addr http://nacos.mcp.internal:8848
        # 域名后缀
        domain_suffix mcp.internal
        # 刷新间隔（秒）
        refresh_interval 30
        # 默认 TTL
        ttl 60
    }
    # 转发外部 DNS
    forward . 8.8.8.8 114.114.114.114
    cache 30
}
```

#### Nacos CoreDNS 插件 Pod 配置
```yaml
# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coredns-nacos
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coredns-nacos
  template:
    metadata:
      labels:
        app: coredns-nacos
    spec:
      containers:
      - name: coredns
        image: coredns/coredns:latest
        args: ["-conf", "/etc/coredns/Corefile"]
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        volumeMounts:
        - name: config
          mountPath: /etc/coredns
      # Nacos 插件 sidecar
      - name: nacos-dns-sidecar
        image: nacos-group/nacos-coredns-plugin:latest
        env:
        - name: NACOS_SERVER_ADDR
          value: "http://nacos.mcp.internal:8848"
        - name: DOMAIN_SUFFIX
          value: "mcp.internal"
      volumes:
      - name: config
        configMap:
          name: coredns-config
```

#### 验证 DNS 解析
```bash
# 查询 MCP Server 的 IP
dig mcp-wanxiang.mcp.internal @coredns-ip

# 结果
mcp-wanxiang.mcp.internal. 60 IN A 10.0.1.10
mcp-wanxiang.mcp.internal. 60 IN A 10.0.1.11

# 查询 ChatBI MCP Server
dig mcp-chatbi.mcp.internal @coredns-ip
```

#### AI Host 配置（使用域名）
```yaml
spring:
  ai:
    mcp:
      client:
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang.mcp.internal:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi.mcp.internal:8082
            transport: streamable-http
```

### 5.5 方案二：Spring Cloud Gateway + Nacos 统一路由

不直接给 MCP Server 配域名，而是通过 Gateway 统一转发，Gateway 本身暴露一个域名。

#### 架构
```
外部请求 → https://mcp.yourcompany.com/wanxiang/query
                                  ↓
                    Spring Cloud Gateway
                    ├── gw.mcp.internal
                    ├── 路由规则:
                    │   /wanxiang/** → mcp-wanxiang:8081
                    │   /chatbi/**   → mcp-chatbi:8082
                    │   /label/**    → mcp-label:8083
                    ├── 统一鉴权 (JWT)
                    ├── 统一限流 (Redis)
                    └── 统一审计
                                  ↓
                    Nacos 服务发现 → 负载均衡
                                  ↓
                    具体 MCP Server 实例
```

#### Gateway 配置

```yaml
spring:
  application:
    name: mcp-gateway
  cloud:
    nacos:
      discovery:
        server-addr: nacos.mcp.internal:8848
    gateway:
      # 全局默认过滤器
      default-filters:
        - name: RequestRateLimiter
          args:
            redis-rate-limiter.replenishRate: 100
            redis-rate-limiter.burstCapacity: 200
        - name: JwtAuthentication
      routes:
        # ===== MCP 协议代理 =====
        - id: mcp-wanxiang-tools
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/mcp/v1/tools/**
          filters:
            - StripPrefix=1
        - id: mcp-wanxiang-call
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/mcp/v1/call/**
          filters:
            - StripPrefix=1
        
        # ===== REST 接口代理 =====
        - id: wanxiang-rest
          uri: lb://mcp-server-wanxiang
          predicates:
            - Path=/wanxiang/api/**
          filters:
            - StripPrefix=1
        
        - id: chatbi-rest
          uri: lb://mcp-server-chatbi
          predicates:
            - Path=/chatbi/api/**
          filters:
            - StripPrefix=1

      # 自动服务发现路由
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true
          # 只暴露 MCP 相关服务
          filters:
            - name: McpServiceFilter
```

#### 统一的鉴权过滤器

```java
@Component
public class JwtAuthenticationFilter implements GatewayFilter, Ordered {
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        
        // MCP 协议检查
        if (path.contains("/mcp/v1/tools/call")) {
            return checkMcpAuth(exchange, chain);
        }
        // REST API 检查
        return checkRestAuth(exchange, chain);
    }
    
    private Mono<Void> checkMcpAuth(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 从 Header 中提取 MCP Session Token
        String token = exchange.getRequest().getHeaders()
            .getFirst("X-MCP-Auth");
        if (token == null || !validateToken(token)) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
        return chain.filter(exchange);
    }
}
```

### 5.6 方案三：Nginx + Nacos Upsync（传统运维友好）

如果团队更熟悉 Nginx 而不是 Spring Cloud Gateway：

```nginx
# Nginx 配置
upstream mcp-wanxiang {
    # Nacos upsync 模块动态更新后端列表
    nacos http://nacos.mcp.internal:8848;
    nacos_service_name mcp-server-wanxiang;
    nacos_group DEFAULT_GROUP;
    nacos_subscribe on;
    
    keepalive 64;
}

upstream mcp-chatbi {
    nacos http://nacos.mcp.internal:8848;
    nacos_service_name mcp-server-chatbi;
    nacos_group DEFAULT_GROUP;
    nacos_subscribe on;
}

server {
    listen 443 ssl;
    server_name mcp.yourcompany.com;
    
    ssl_certificate     /etc/ssl/mcp.yourcompany.com.pem;
    ssl_certificate_key /etc/ssl/mcp.yourcompany.com.key;
    
    # 统一请求体大小限制
    client_max_body_size 10m;
    
    # ===== MCP 协议路由 =====
    location ~ ^/wanxiang/mcp/(.*)$ {
        proxy_pass http://mcp-wanxiang/mcp/$1$is_args$args;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-MCP-Forwarded true;
        
        # MCP Streamable HTTP 需要 SSE
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        chunked_transfer_encoding on;
        proxy_buffering off;
        proxy_cache off;
    }
    
    location ~ ^/chatbi/mcp/(.*)$ {
        proxy_pass http://mcp-chatbi/mcp/$1$is_args$args;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        proxy_buffering off;
    }
    
    # ===== REST API 路由 =====
    location /wanxiang/api/ {
        proxy_pass http://mcp-wanxiang/api/;
        proxy_set_header Host $host;
    }
    
    location /chatbi/api/ {
        proxy_pass http://mcp-chatbi/api/;
        proxy_set_header Host $host;
    }
}
```

安装 Nacos Upsync 模块：
```bash
# 编译 Nginx 时添加 upsync 模块
./configure --add-module=/path/to/nginx-upsync-module
make && make install
```

### 5.7 三种方案对比

| 维度 | CoreDNS+Nacos | Spring Cloud GW | Nginx+Nacos Upsync |
|------|:-------------:|:---------------:|:------------------:|
| 架构复杂度 | ⭐⭐低 | ⭐⭐⭐中 | ⭐⭐⭐中 |
| 动态路由 | ✅ 自动DNS发现 | ✅ LB:// 自动发现 | ✅ Upsync 自动同步 |
| 统一鉴权 | ❌ 需额外实现 | ✅ 内置过滤器 | ❌ Lua 脚本实现 |
| 限流能力 | ❌ 无 | ✅ Redis RateLimiter | ⚠️ ngx_http_limit_req |
| TLS 终结 | ❌ 需外部 LB | ✅ Gateway 层实现 | ✅ Nginx 原生 |
| 协议支持 | DNS | HTTP/MCP/SSE | HTTP/WS/SSE |
| 运维熟悉度 | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| K8s 友好度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

### 5.8 推荐方案

#### 🏆 小规模（< 5 个 MCP Server）：Spring Cloud Gateway

```
mcp.yourcompany.com
       ↓
Spring Cloud Gateway  (gw.mcp.internal)
       ├── /wanxiang/**  →  mcp-wanxiang (Nacos LB)
       ├── /chatbi/**    →  mcp-chatbi   (Nacos LB)
       └── /label/**     →  mcp-label    (Nacos LB)
```

**理由：** 与 Spring 生态无缝集成，Gateway 自带路由+鉴权+限流，一套代码解决所有问题。

#### 🏆 中大规模（> 5 个 MCP Server + K8s）：CoreDNS + Nacos

```
AI Host 通过域名调用:
  mcp-wanxiang.mcp.internal:8081
  mcp-chatbi.mcp.internal:8082

CoreDNS 自动将 Nacos 服务名 → DNS A记录
```

**理由：** 服务名即域名，语言无关（Python/Go/Java 都能用 DNS 发现），K8s 原生友好。

#### 🏆 传统运维团队：Nginx + Nacos Upsync

**理由：** 运维最熟悉 Nginx，不引入新组件，Upsync 模块实现动态后端更新。

### 5.9 生产环境推荐架构（完整）

```
                                        ┌──────────────────────────┐
                                        │  外部DNS                  │
                                        │  mcp.yourcompany.com     │
                                        │    ↓ A记录               │
                                        └────────┬─────────────────┘
                                                 │
                                        ┌────────▼─────────────────┐
                                        │  SLB / 云负载均衡         │
                                        │  - TLS 443 终结           │
                                        │  - DDoS 防护              │
                                        └────────┬─────────────────┘
                                                 │
                                        ┌────────▼─────────────────┐
                                        │  Spring Cloud Gateway ×2  │
                                        │  - 统一鉴权 (OAuth2)      │
                                        │  - Redis 限流             │
                                        │  - 审计日志               │
                                        └────────┬─────────────────┘
                                                 │
          ┌───────────────────────────────────────┼───────────────────────┐
          │                                       │                       │
  ┌───────▼────────┐                    ┌─────────▼──────┐   ┌───────────▼────┐
  │ AI Host ×2     │                    │ Nacos ×3       │   │ CoreDNS ×2     │
  │ (MCP Client)   │                    │ (Cluster)      │   │ (Nacos Plugin) │
  │ host.mcp.inter │                    │ nacos.mcp.in.. │   │ *.mcp.internal │
  └───────┬────────┘                    └─────────┬──────┘   └───────────┬────┘
          │                ┌──────────────────────┼──────────────────────┘
          │                │                      │
          │                │  DNS: mcp-wanxiang.mcp.internal → 10.0.1.x
          │                │
  ┌───────▼────────────────▼──────────────────────────────────────────────┐
  │                   Kubernetes / 物理机集群                               │
  │                                                                        │
  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
  │  │ mcp-wanxiang    │  │ mcp-chatbi      │  │ mcp-label       │        │
  │  │ 2 pods / 2实例  │  │ 2 pods / 2实例  │  │ 1 pod  / 1实例  │        │
  │  │ Streamable HTTP │  │ Streamable HTTP │  │ Streamable HTTP │        │
  │  │ @McpTool        │  │ @McpTool        │  │ @McpTool        │        │
  │  └─────────────────┘  └─────────────────┘  └─────────────────┘        │
  └────────────────────────────────────────────────────────────────────────┘
```

### 5.10 配置示例汇总

#### Nacos 配置
```yaml
# 所有 MCP Server 统一配置
spring:
  cloud:
    nacos:
      discovery:
        server-addr: nacos.mcp.internal:8848
        namespace: mcp-platform       # 命名空间隔离
        group: MCP_SERVER_GROUP       # 分组
        # 注册时附加元数据
        metadata:
          mcp-protocol: streamable-http
          mcp-version: "1.0"
          mcp-tools: portrait,tags
```

#### AI Host 动态发现 + 域名调用
```yaml
spring:
  ai:
    mcp:
      client:
        # 方式1：静态域名（推荐 CoreDNS 方案）
        connections:
          - name: wanxiang-agent
            url: http://mcp-wanxiang.mcp.internal:8081
            transport: streamable-http
          - name: chatbi-service
            url: http://mcp-chatbi.mcp.internal:8082
            transport: streamable-http

# 方式2：Nacos 动态发现（Gateway 方案）
# AI Host 通过 Gateway 统一入口
mcp:
  gateway:
    url: https://mcp.yourcompany.com
    auth-token: ${MCP_AUTH_TOKEN}
```

#### 外部域名 DNS 配置
```
# DNS 解析记录
mcp.yourcompany.com.      300 IN A     <SLB公网IP>
gw.mcp.internal.          300 IN A     10.0.0.10
gw.mcp.internal.          300 IN A     10.0.0.11
host.mcp.internal.        300 IN A     10.0.1.10
host.mcp.internal.        300 IN A     10.0.1.11
nacos.mcp.internal.       300 IN A     10.0.2.10
nacos.mcp.internal.       300 IN A     10.0.2.11
nacos.mcp.internal.       300 IN A     10.0.2.12
```
