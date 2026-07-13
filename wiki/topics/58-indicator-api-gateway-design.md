---

type: topic
tags: [API网关, 架构设计, MCP, Spring AI, 灰度发布, Spring Cloud Gateway]
created: 2026-07-09
updated: 2026-07-13

> **提示**：本文档灰度方案已基于 58 云集群服务分组重构。灰度路由决策在 Gateway 层完成（Cookie / Token），路由到不同的 K8s Service（stable-svc / canary-svc），不再依赖 Nginx split_clients 或 Nacos 权重分流。
---


# 58 集团统一指标系统 — API 网关方案设计

## 1. 项目定位

集团业务统一指标系统，提供 AI-Native 和传统 API 两种接入方式。

- **AI-Native**：用户自然语言查指标，系统解析 → 语义层映射 → 查询返回
- **传统 API**：结构化接口，按指标名 + 维度 + 时间范围查询

## 2. 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Spring Boot | 4.x | 应用框架 |
| Spring AI | 2.0 | AI 能力 & MCP 协议支持 |
| Spring Cloud Gateway | 最新 | 网关路由层 |
| SpringDoc | 2.8.x | OpenAPI 3.1 文档 |
| Swagger 注解 | `io.swagger.v3.oas.annotations` | 接口元数据 |
| Nacos | 生产版 | 注册中心 + 配置中心 |
| StarRocks/ClickHouse | - | 数仓查询 |

## 3. 五层语义模型

```
实体建模 → 指标注册 → 维度体系 → 口径定义 → 数据源映射
```

- 实体建模：定义业务实体（简历、房源、商家等）
- 指标注册：指标 ID、名称、业务域、类型（原子/衍生/比率）、单位
- 维度体系：城市、业务线、时间粒度、流量来源等
- 口径定义：SQL 模板，支持参数注入
- 数据源映射：各业务对应的数仓集群

维护方式：人工录入为主，后续 AI 辅助录入。

## 4. 代码架构

```
                ┌──────────────────┐
                │   MetricService   │  ← 唯一业务逻辑层
                │    @Service       │
                │  queryByNL()      │
                │  queryByStruct()  │
                └────────┬─────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
   ┌──────▼──────┐  ┌───▼────────┐  ┌──▼───────────┐
   │ REST Facade │  │ MCP Facade │  │ WebSocket    │
   │ @RestController│  │ @McpTool  │  │ (预留)       │
   │ @Operation   │  │ @Schema   │  │              │
   │ @Schema      │  │ @JsonProperty│  │              │
   └──────────────┘  └────────────┘  └──────────────┘
```

**核心原则**：单 Service + 双 Facade，REST 和 MCP 共用同一套业务逻辑。

**MCP 模式**：Streamable HTTP（`spring.ai.mcp.server.protocol=STREAMABLE`）

**注解统一**：Swagger `@Schema` 同时用于 REST OpenAPI 文档生成和 MCP Tool JSON Schema 生成，两套文档来源一致。

## 5. 三通道接入

```
API 通道：api.business.com  → Token 哈希 → 节点
  ├─ POST /api/v1/metrics/query    结构化查询
  ├─ GET  /api/v1/metrics/list     指标列表
  └─ POST /api/v1/metrics/nl-query 自然语言查询

MCP 通道：mcp.business.com  → 用户 ID 哈希 → 节点
  ├─ POST /mcp/v1/tools/list       Tool 列表
  ├─ POST /mcp/v1/tools/call       Tool 调用
  └─ SSE  /mcp/v1/tools/stream     流式调用
```

## 6. 部署架构

```
                api.business.com / mcp.business.com
                            │
                   ┌────────┴────────┐
                   │  云平台 流量组   │
                   │   Cloud LB/SLB  │
                   │  (自动注册/摘除) │
                   │  (健康检查)      │
                   │  (一致性哈希)    │
                   └────────┬────────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
       ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
       │ 节点 1   │    │ 节点 2   │    │ 节点 3   │   ◀── 自动注册到流量组
       │ :8081    │    │ :8082    │    │ :8083    │
       │          │    │          │    │          │
       │ Gateway  │    │ Gateway  │    │ Gateway  │
       │ Metric   │    │ Metric   │    │ Metric   │
       │ Service  │    │ Service  │    │ Service  │
       │ MCP Svr  │    │ MCP Svr  │    │ MCP Svr  │
       └────┬─────┘    └────┬─────┘    └────┬─────┘
            │               │               │
            ├───────────────┼───────────────┘
            │               │                   
            │          ┌────▼────┐
            └─────────►│  Nacos  │
                       │ 注册中心 │
                       │ 配置中心 │
                       └─────────┘
```

**特点**：
- 对等部署：每个节点 = Gateway + Metric Service + MCP Server 一体进程
- 无状态：Session 不落本地，鉴权/限流/缓存走 Redis
- 3~4 节点，通过云平台流量组自动注册/摘除
- Nacos 仅用于节点元数据（版本标识）和灰度配置下发，不参与流量分发
- **Nginx 配置极简**，只需写死流量组 VIP：

```nginx
upstream metric_backend {
    # 云平台流量组 VIP，自动负载均衡
    server traffic-group-vip.internal:8081;
    # 或使用流量组提供的域名
    # server metric-gateway.aliyun.internal:8081;
}

server {
    listen 443 ssl;
    server_name api.business.com;
    location / {
        proxy_pass http://metric_backend;
    }
}
```

### 流量组工作方式

```
节点上线 → 云平台检测到端口存活 → 自动加入流量组 → 开始接收流量
                                                          │
节点下线（正常关闭）→ 云平台感知 → 从流量组摘除 → 停止流量
                                                          │
节点异常（进程挂）→ 健康检查连续失败 → 自动摘除 → 报警
```

## 6.5 服务注册与元数据

### 6.5.1 节点注册到 Nacos（携带版本元数据）

每个节点启动时自动注册到云平台流量组，同时向 Nacos 注册携带版本元数据用于灰度路由：

```yaml
# application.yml（节点1）
spring:
  application:
    name: metric-gateway
  cloud:
    nacos:
      discovery:
        server-addr: 10.0.0.100:8848
        namespace: prod
        service: metric-gateway
        group: METRIC_GROUP
        ip: 10.0.1.1
        port: 8081
        metadata:
          version: stable          # 版本标识，灰度核心字段
          region: shanghai

# 云平台流量组注册（各平台配置方式不同）
# 腾讯云: CLB 后端服务绑定 CVM ENI
# 阿里云: SLB 后端服务器组
# 华为云: ELB 后端服务器组
# 统一效果：节点上线自动接入，下线自动摘除
```

节点 2、3 同理，仅 `ip`、`port`、`version` 不同。

### 6.5.2 两层注册体系

```
┌────────────────────────────────────────────────────┐
│  第一层：云平台流量组（节点上下线自动感知）           │
│                                                      │
│  node1:8081 ──→ 云平台健康检查 ──→ 流量组 ├── 接收流量   │
│  node2:8082 ──→ 云平台健康检查 ──→ 流量组 ─── 接收流量   │
│  node3:8083 ──→ 云平台健康检查 ──→ 流量组 ─── 接收流量   │
│                                                      │
│  节点宕机 → 健康检查失败 → 自动摘除 → 停止流量               │
│                                                      │
│  第二层：Nacos 注册中心（仅元数据 + 灰度配置）       │
│                                                      │
│  Nacos 不参与流量分发，只存 version 元数据             │
│  Nacos 控制台 → 查看各节点版本分布                     │
│  Nacos 配置中心 → 灰度权重、白名单等配置下发          │
└──────────────────────────────────────────────────────┘
```

**关键区分**：
- 流量组负责：节点存活检测 + 流量分发 + 权重路由
- Nacos 负责：版本标识 + 灰度配置管理 + 运维界面

### 6.5.3 Nacos 控制台视角

```
服务列表 → metric-gateway
├── 集群: DEFAULT
│   ├── 10.0.1.1:8081  ✓  (version=stable)
│   ├── 10.0.1.2:8082  ✓  (version=stable)
│   └── 10.0.1.3:8083  ✓  (version=canary-2.1.0)
│
├── 健康检查: 3/3 在线（仅辅助参考，真实摘除由流量组执行）
└── 最后变更: 2026-07-09 15:30
```

### 6.5.4 扩容与缩容

| 操作 | 流量组自动处理 | Nacos 侧需操作 |
|------|---------------|--------------|
| 扩节点 4 | 自动加入流量组，开始接收流量 | 注册到 Nacos，标注 version |
| 缩节点 3 | 自动从流量组摘除，停止流量 | 从 Nacos 注销（可选） |
| 优雅下线 | 先通知流量组下线 → 排空请求 → 关闭进程 | 先调 Nacos API 注销 |
| 节点宕机 | 健康检查失败 → 自动摘除（15~30 秒） | 心跳超时 → 自动移除 |

## 7. 灰度部署方案

### 7.1 总体架构

基于**云集群服务分组（Service Group）** 实现灰度路由，不再依赖 Nacos 或 Nginx split_clients 做流量分发。

```
                          请求入口
                             │
                     ┌──────┴──────┐
                     │  API 网关    │
                     │  (Gateway)   │
                     │  灰度决策     │
                     └──────┬──────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
       ┌──────▼──────┐  ┌───▼────────┐  ┌──▼───────────┐
       │ stable-svc  │  │ canary-svc │  │ gray-3-svc   │
       │ (K8s Service)│  │ (K8s Service)│  │ （预留）      │
       │              │  │              │  │              │
       │ Pod: v1.0.0  │  │ Pod: v2.1.0  │  │              │
       │ GRAY=stable  │  │ GRAY=canary  │  │              │
       └──────────────┘  └──────────────┘  └──────────────┘
                             │
                      ┌──────┴──────┐
                      │  云集群 SLB  │
                      │  (服务分组)   │
                      └─────────────┘
```

**关键原则**：
- 每个 K8s Service 对应一个灰度分组（stable / canary）
- 节点通过**环境变量**标识灰度分组：`GRAY=stable` 或 `GRAY=canary`
- API 网关根据请求特征（Cookie / Token）决策路由到哪个 Service
- 不做 API 粒度的分流，只做**用户级**和 **Token 级**灰度

### 7.2 用户标识体系

从 Cookie 中提取用户标识，作为灰度决策的依据：

| Cookie 字段 | 用途 | 说明 |
|-------------|------|------|
| `xxzlclientid` | **用户级灰度路由 key** | UUID 格式，标识用户设备/客户端。灰度比例基于此值哈希 |
| `xxzlxxid` | 跨域用户标识 | 加密字符串，可用于跨服务用户关联 |
| `loginuserid` | 登录用户 ID | 已登录用户的唯一 ID，白名单灰度用 |

> 对于 API 调用（无 Cookie），通过 OAuth2.0 Token 识别调用方（见 7.3）

### 7.3 Token 级灰度（OAuth2.0）

#### 7.3.1 Token 灰度标记

OAuth2.0 Token 中携带灰度信息，JWT 格式在 claims 中加入 `gray_level` 字段：

```json
{
  "sub": "2018090410120014d6740d",
  "aud": "metric-gateway",
  "iss": "https://passport.58corp.com",
  "exp": 1893456000,
  "iat": 1700000000,
  "gray_level": "canary",       // ← 灰度标记
  "scope": "metrics:read",
  "client_id": "data_platform"
}
```

| `gray_level` 值 | 含义 |
|------------------|------|
| `stable`（默认） | 走稳定版 |
| `canary` | 走灰度版 |
| `gray_3` | 走灰度 3 组（预留多组灰度） |
| 不携带 | 按比例哈希判定 |

#### 7.3.2 Token 灰度标记的授予方式

```
┌──────────────┐     Token 颁发              ┌──────────────┐
│  认证服务器   │ ────────────────────────→  │  客户端      │
│  passport    │   JWT + gray_level claim    │  (app/ui)    │
│  58corp.com  │                              │              │
└──────┬───────┘                              └──────┬───────┘
       │                                             │
       │  Token 颁发策略：                             │ 携带 Token
       │  a) 白名单用户 → gray_level=canary            │
       │  b) 按 client_id 比例 → gray_level=canary     │
       │  c) 默认 → gray_level=stable                  │
       │                                             ▼
       │                                      ┌──────────────┐
       │                                      │  API 网关     │
       │                                      │  解析 JWT     │
       │                                      │  gray_level   │
       │                                      │  → 路由决策    │
       │                                      └──────────────┘
```

**三种授予策略**：

```yaml
# 策略 a：白名单
- 用户: ["user_qa_001", "user_qa_002", "pm_leader"]
  → Token 中 gray_level=canary

# 策略 b：按比例
- client_id: "data_platform" 的 10% 用户
  → Token 中 gray_level=canary
  （由认证服务器根据 sub/xxzlclientid 哈希决定）

# 策略 c：手动指定（测试用）
- 请求头 X-Force-Gray: canary
  → 网关覆盖 Token 的 gray_level
```

### 7.4 灰度决策树

```
                        收到请求
                            │
              ┌─────────────┴─────────────┐
              │                           │
         有 Cookie                    无 Cookie
              │                      （API Token 调用）
     ┌────────┴────────┐                  │
     │                  │           ┌──────┴──────┐
     │           有 X-Force-Gray?   │              │
     │                  │      Token 有 gray_level?
     │                  ├── 是 → 用指定值    │       │
     │                  │             是──┴── 否
     │               ┌──┴──┐              │
     │          xxzlclientid 哈希     hash(client_id +
     │          按比例切分:           xxzlclientid)
     │          90% stable / 10%      按比例切分
     │               canary                │
     │                  │                  │
     └──────────────────┴──────────────────┘
                        │
                  ┌─────┴─────┐
                  │           │
              gray=stable  gray=canary
                  │           │
           ┌─────┘           └─────┐
           │                       │
      stable-svc              canary-svc
```

### 7.5 Gateway 灰度决策代码

```java
@Component
public class GrayRoutingGlobalFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();

        // 优先级 1：手动强制指定（QA 验证用）
        String forceGray = request.getHeaders().getFirst("X-Force-Gray");
        if (forceGray != null && isValidGrayLevel(forceGray)) {
            return routeToGroup(exchange, chain, forceGray);
        }

        // 优先级 2：Cookie 用户级灰度（Web / MCP 通道）
        String clientId = extractCookie(request, "xxzlclientid");
        if (clientId != null) {
            String grayLevel = resolveByConsistentHash(clientId, 100, 10);
            // 10% 的 xxzlclientid 走 canary
            return routeToGroup(exchange, chain, grayLevel);
        }

        // 优先级 3：Token 级灰度（API 通道）
        String token = extractBearerToken(request);
        if (token != null) {
            try {
                Claims claims = jwtParser.parseClaims(token);
                String grayLevel = claims.get("gray_level", String.class);
                if (grayLevel != null && isValidGrayLevel(grayLevel)) {
                    return routeToGroup(exchange, chain, grayLevel);
                }
                // Token 无 gray_level，按 client_id + sub 哈希
                String hashKey = claims.get("client_id", String.class) + ":"
                    + claims.get("sub", String.class);
                String resolved = resolveByConsistentHash(hashKey, 100, 10);
                return routeToGroup(exchange, chain, resolved);
            } catch (Exception e) {
                log.warn("Token 解析失败，走 stable: {}", e.getMessage());
            }
        }

        // 兜底：stable
        return routeToGroup(exchange, chain, "stable");
    }

    /**
     * 改写请求的 X-Gray-Group 头，K8s Service 根据该头路由
     */
    private Mono<Void> routeToGroup(ServerWebExchange exchange,
                                     GatewayFilterChain chain, String grayLevel) {
        ServerHttpRequest mutated = exchange.getRequest().mutate()
            .header("X-Gray-Group", grayLevel)
            .build();
        return chain.filter(exchange.mutate().request(mutated).build());
    }

    /**
     * 一致性哈希：保证同一 key 始终指向同一灰度组
     */
    private String resolveByConsistentHash(String key, int total, int canaryPercent) {
        int hash = Objects.hash(key) & 0x7FFFFFFF;
        return (hash % total < canaryPercent) ? "canary" : "stable";
    }

    private String extractCookie(ServerHttpRequest request, String name) {
        String cookie = request.getHeaders().getFirst(HttpHeaders.COOKIE);
        if (cookie == null) return null;
        return Arrays.stream(cookie.split(";"))
            .map(String::trim)
            .filter(c -> c.startsWith(name + "="))
            .map(c -> c.substring(name.length() + 1))
            .findFirst().orElse(null);
    }

    private String extractBearerToken(ServerHttpRequest request) {
        String auth = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (auth != null && auth.startsWith("Bearer ")) {
            return auth.substring(7);
        }
        return null;
    }

    private boolean isValidGrayLevel(String level) {
        return "stable".equals(level) || "canary".equals(level);
    }

    @Override
    public int getOrder() {
        return -1;  // 最高优先级过滤器
    }
}
```

### 7.6 云集群服务分组配置

#### 7.6.1 环境变量标识

每个 Pod 通过环境变量 `GRAY` 标识所属灰度分组：

```yaml
# stable 部署
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metric-gateway-stable
  namespace: metric-prod
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: gateway
          image: metric-gateway:v1.0.0
          env:
            - name: GRAY
              value: "stable"          # ← 标识稳定版
            - name: NACOS_NAMESPACE
              value: "metric-prod"
            - name: METRIC_VERSION
              value: "v1.0.0"
---
# canary 部署
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metric-gateway-canary
  namespace: metric-prod
spec:
  replicas: 1
  template:
    spec:
      containers:
        - name: gateway
          image: metric-gateway:v2.1.0
          env:
            - name: GRAY
              value: "canary"          # ← 标识灰度版
            - name: NACOS_NAMESPACE
              value: "metric-prod"
            - name: METRIC_VERSION
              value: "v2.1.0"
```

#### 7.6.2 K8s Service 分组

```yaml
# 稳定版 Service
apiVersion: v1
kind: Service
metadata:
  name: metric-stable-svc
  namespace: metric-prod
spec:
  selector:
    app: metric-gateway
    gray: stable            # 只选中 stable 的 Pod
  ports:
    - port: 80
      targetPort: 8081

---
# 灰度版 Service
apiVersion: v1
kind: Service
metadata:
  name: metric-canary-svc
  namespace: metric-prod
spec:
  selector:
    app: metric-gateway
    gray: canary            # 只选中 canary 的 Pod
  ports:
    - port: 80
      targetPort: 8081
```

#### 7.6.3 Gateway 路由配置

```yaml
# application-gateway.yml
spring:
  cloud:
    gateway:
      routes:
        # ── 稳定版路由 ──
        - id: metric-stable
          uri: http://metric-stable-svc.metric-prod.svc.cluster.local
          predicates:
            - Header=X-Gray-Group, stable
          filters:
            - StripPrefix=1

        # ── 灰度版路由 ──
        - id: metric-canary
          uri: http://metric-canary-svc.metric-prod.svc.cluster.local
          predicates:
            - Header=X-Gray-Group, canary
          filters:
            - StripPrefix=1

        # ── 兜底路由 ──
        - id: metric-default
          uri: http://metric-stable-svc.metric-prod.svc.cluster.local
          predicates:
            - Path=/**
          filters:
            - StripPrefix=1
```

### 7.7 Nginx 层配置

Nginx 仅做 SSL 终结 + 转发到 Gateway Service，不做灰度路由决策：

```nginx
upstream gateway_backend {
    server metric-gateway-svc.metric-prod.svc.cluster.local:80;
}

server {
    listen 443 ssl;
    server_name api.business.com;

    location / {
        proxy_pass http://gateway_backend;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Cookie $http_cookie;           # 透传 Cookie
        proxy_set_header Authorization $http_authorization;  # 透传 Token
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 300s;
    }
}
```

### 7.8 灰度流程

| 步骤 | 操作 | 说明 |
|------|------|------|
| 1. 部署 canary | 部署 `metric-gateway-canary` Deployment，镜像 v2.1.0，`GRAY=canary` | 新 Pod 启动，注册到 canary-svc |
| 2. 配置灰度比例 | Gateway 中 `resolveByConsistentHash` 的 canaryPercent=10 | 10% 的 xxzlclientid 走 canary |
| 3. QA 验证 | QA 通过 passport 后台设为 white_user → Token 带 `gray_level=canary` | 或直接带 `X-Force-Gray: canary` 头 |
| 4. Token 灰度 | 在认证服务器配置：`client_id=data_platform` 的 10% 用户颁发 canary Token | Token 级灰度，无感切流 |
| 5. 调大比例 | canaryPercent: 10 → 30 → 50 | 逐步放大 |
| 6. 全量上线 | canary Pod 缩容，stable Pod 升级到 v2.1.0，`GRAY=stable` | 统一为 stable，删除 canary-svc |
| 7. 回滚 | canaryPercent→0，或缩容 canary Pod，stable 不变 | 即时切回 |

### 7.9 Nacos 灰度配置（简化版）

灰度比例和策略集中在 Nacos 配置中心管理，Gateway 动态感知：

```yaml
# Data ID: metric-gray-config.yaml
# Group: METRIC_GATEWAY

gray:
  enabled: true

  # ── 比例灰度 ──
  percentage:
    cookie_key: xxzlclientid    # 按 xxzlclientid 哈希
    stable: 90                  # 90% 走 stable
    canary: 10                  # 10% 走 canary
    hash_total: 100

  # ── Token 灰度 ──
  token:
    enabled: true
    jwt_claim: gray_level       # JWT 中的灰度 claim 名
    # 当 Token 中无 gray_level 时的兜底策略
    fallback_hash_key: "${client_id}:${sub}"
    fallback_canary_percent: 10

  # ── 强制指定（QA 测试用） ──
  override_header: X-Force-Gray

  # ── 白名单（不按比例，直接走 canary） ──
  whitelist:
    cookie_values:
      - xxzlclientid: "qa-client-001"
      - xxzlclientid: "qa-client-002"
    user_ids:
      - "2018090410120014d6740d"   # PM 的 userid
      - "2018090410120014d6741d"   # QA leader
```

### 7.10 灰度策略变更生效

Nacos 配置变更 → Gateway 动态感知：

```java
@Component
public class GrayConfigListener {

    private final NacosConfigManager nacosConfigManager;
    private final GrayRoutingService routingService;

    @PostConstruct
    public void init() {
        nacosConfigManager.getConfigService().addListener(
            "metric-gray-config.yaml", "METRIC_GATEWAY",
            new AbstractListener() {
                @Override
                public void receiveConfigInfo(String config) {
                    GrayConfig cfg = YamlUtil.parse(config, GrayConfig.class);
                    routingService.updateConfig(cfg);
                    log.info("灰度配置已刷新，canary: {}%",
                        cfg.getPercentage().getCanary());
                }
            }
        );
    }
}
```

### 7.11 版本管控与升级节奏

```
版本号         服务分组      Pod 数   状态
──────         ────────    ──────   ────────────
v1.0.0         stable-svc   3       stable(旧版)
v2.1.0         canary-svc   1       canary

灰度验证通过后：
  1. stable-svc 的 Pod 逐个滚动升级到 v2.1.0
  2. canary-svc 缩容到 0
  3. Nacos gray.canary:10 → gray.canary:0
  4. 删除 canary-svc 和 canary Deployment
  5. 等待下一轮（v2.2.0 → canary）
```

---

## 8. Nacos 配置体系

### 8.1 命名空间与 Data ID 规划

按环境隔离：

```
Namespace: metric-dev     → 开发环境
Namespace: metric-test    → 测试环境
Namespace: metric-prod    → 生产环境
```

每个命名空间下按 Data ID 划分配置维度：

```
# Data ID 命名规范
metric-{domain}-{type}.{format}

# 示例
metric-gray-config.yaml          # 灰度权重配置
metric-datasource.yaml           # 数据源映射
metric-indicators.yaml           # 指标注册表
metric-dimensions.yaml           # 维度字典
metric-auth.yaml                 # 鉴权规则
metric-limits.yaml               # 限流配置
```

### 8.2 灰度配置完整 YAML

```yaml
# Data ID: metric-gray-config.yaml
# Group: METRIC_GATEWAY

gray:
  enabled: true

  user_rules:
    - type: whitelist
      description: "内部白名单用户走 canary"
      users:
        - "user_internal_001"
        - "user_internal_002"
        - "qa_team_leader"
      target_version: canary

    - type: percentage
      description: "10% 用户灰度"
      percent: 10
      hash_key: user_id
      target_version: canary

  version_groups:
    stable:
      match: version == "stable"
      weight: 90
      nodes:
        - 10.0.1.1:8081
        - 10.0.1.2:8082
    canary:
      match: version == "canary-*"
      weight: 10
      nodes:
        - 10.0.1.3:8083

  override:
    headers:
      X-Route-Version: version
      X-Route-Node: node_ip

  canary:
    min_healthy_ratio: 0.5
    auto_rollback:
      error_threshold: 5
      latency_threshold_ms: 2000
      check_interval_sec: 30
```

### 8.3 指标注册表配置

```yaml
# Data ID: metric-indicators.yaml
# Group: METRIC_GATEWAY

indicators:
  - id: resume_delivery_count
    name: 简历投递量
    domain: recruitment
    type: ATOMIC
    unit: 次
    description: 指定周期内用户投递简历的总次数

  - id: resume_delivery_rate
    name: 简历投递率
    domain: recruitment
    type: RATIO
    unit: "%"
    formula: "resume_delivery_count / resume_view_count * 100"

  - id: active_listing_count
    name: 有效房源量
    domain: house
    type: ATOMIC
    unit: 套
```

### 8.4 数据源映射与口径 SQL

```yaml
# Data ID: metric-datasource.yaml
# Group: METRIC_GATEWAY

datasources:
  - name: starrocks_recruitment
    type: STARROCKS
    jdbc_url: jdbc:mysql://recruitment-cluster.query.internal:9030/recruitment_ads
    query_timeout_sec: 30
    max_connections: 50

  - name: clickhouse_house
    type: CLICKHOUSE
    jdbc_url: jdbc:clickhouse://house-cluster.query.internal:8123/house_ads
    query_timeout_sec: 60
    max_connections: 30

metrics_sql:
  resume_delivery_count: |
    SELECT COUNT(DISTINCT resume_id) AS value
    FROM fact_resume_delivery
    WHERE city = '{city}'
      AND delivery_date BETWEEN '{start_date}' AND '{end_date}'
      AND biz_type = '{biz_type}'

  active_listing_count: |
    SELECT COUNT(listing_id) AS value
    FROM dim_house_listing
    WHERE city = '{city}'
      AND listing_status = 'ONLINE'
      AND update_time >= '{snapshot_time}'
```

### 8.5 Nacos 客户端配置（Spring Boot 侧）

```yaml
# application-nacos.yml

spring:
  cloud:
    nacos:
      config:
        server-addr: ${NACOS_ADDR:10.0.0.100:8848}
        namespace: ${NACOS_NAMESPACE:metric-prod}
        group: METRIC_GATEWAY
        file-extension: yaml
        shared-configs:
          - data-id: metric-gray-config.yaml
            group: METRIC_GATEWAY
            refresh: true
          - data-id: metric-datasource.yaml
            group: METRIC_GATEWAY
            refresh: true
          - data-id: metric-indicators.yaml
            group: METRIC_GATEWAY
            refresh: false
          - data-id: metric-auth.yaml
            group: METRIC_GATEWAY
            refresh: true
          - data-id: metric-limits.yaml
            group: METRIC_GATEWAY
            refresh: true

      discovery:
        server-addr: ${NACOS_ADDR:10.0.0.100:8848}
        namespace: ${NACOS_NAMESPACE:metric-prod}
        service: metric-gateway
        group: METRIC_GROUP
        metadata:
          version: ${METRIC_VERSION:stable}
          region: ${REGION:shanghai}
          health_check_url: /actuator/health
```

### 8.6 Nacos 灰度配置监听（关键代码）

```java
@Component
public class GrayConfigListener implements ApplicationListener<RefreshEvent> {

    private final NacosConfigManager nacosConfigManager;
    private final GrayRoutingService grayRoutingService;

    @PostConstruct
    public void init() {
        nacosConfigManager.getConfigService().addListener(
            "metric-gray-config.yaml",
            "METRIC_GATEWAY",
            new AbstractListener() {
                @Override
                public void receiveConfigInfo(String config) {
                    GrayConfig newConfig = YamlUtil.parse(config, GrayConfig.class);
                    grayRoutingService.updateRules(newConfig);
                }
            }
        );
    }
}

@Service
public class GrayRoutingService {

    private volatile GrayConfig currentConfig;

    public String resolveTargetVersion(HttpServletRequest request) {
        GrayConfig config = this.currentConfig;
        if (config == null || !config.isEnabled()) return "stable";

        // 1. 请求头覆盖（最高优先级）
        String headerVersion = request.getHeader("X-Route-Version");
        if (headerVersion != null) return headerVersion;

        // 2. 白名单匹配
        String userId = resolveUserId(request);
        for (UserRule rule : config.getUserRules()) {
            if ("whitelist".equals(rule.getType()) && rule.getUsers().contains(userId)) {
                return rule.getTargetVersion();
            }
        }

        // 3. 按比例灰度
        for (UserRule rule : config.getUserRules()) {
            if ("percentage".equals(rule.getType())) {
                int hash = Objects.hash(userId) & 0x7FFFFFFF;
                if (hash % 100 < rule.getPercent()) {
                    return rule.getTargetVersion();
                }
            }
        }

        return "stable";
    }
}
```

---

## 9. API 网关接入细节

### 9.1 Spring Cloud Gateway 完整配置

灰度路由决策统一由 `GrayRoutingGlobalFilter` 实现（代码见 §7.5），Gateway 路由层仅按 `X-Gray-Group` 头分发到对应的 K8s Service：

```yaml
# application-gateway.yml

spring:
  cloud:
    gateway:
      default-filters:
        - name: RequestRateLimiter
          args:
            key-resolver: "#{@apiKeyResolver}"
            redis-rate-limiter:
              replenishRate: 100
              burstCapacity: 200
        - name: Retry
          args:
            retries: 2
            statuses: BAD_GATEWAY, SERVICE_UNAVAILABLE
            methods: GET, POST

      routes:
        # ── 稳定版路由 ──
        - id: metric-stable
          uri: http://metric-stable-svc.metric-prod.svc.cluster.local
          predicates:
            - Path=/api/**,/mcp/**
            - Header=X-Gray-Group, stable
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: metricApiBreaker
                fallbackUri: forward:/fallback/metrics

        # ── 灰度版路由 ──
        - id: metric-canary
          uri: http://metric-canary-svc.metric-prod.svc.cluster.local
          predicates:
            - Path=/api/**,/mcp/**
            - Header=X-Gray-Group, canary
          filters:
            - StripPrefix=1

        # ── 兜底路由（无 X-Gray-Group 头时） ──
        - id: metric-default
          uri: http://metric-stable-svc.metric-prod.svc.cluster.local
          predicates:
            - Path=/**
          filters:
            - StripPrefix=1
```

### 9.2 Nginx 层配置

Nginx 仅做 SSL 终结 + 透传 Cookie/Token 到 Gateway，不做灰度路由决策：

```nginx
upstream gateway_backend {
    server metric-gateway-svc.metric-prod.svc.cluster.local:80;
}

server {
    listen 443 ssl;
    server_name api.business.com;

    location / {
        proxy_pass http://gateway_backend;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Cookie $http_cookie;
        proxy_set_header Authorization $http_authorization;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 300s;
    }

    location /actuator/ {
        proxy_pass http://gateway_backend;
        proxy_set_header X-Real-IP $remote_addr;
        allow 10.0.0.0/8;
        deny all;
    }
}
```

---

## 10. 鉴权与接入流程

### 10.1 Nacos 鉴权配置

```yaml
# Data ID: metric-auth.yaml
apps:
  - app_id: data_platform
    app_secret: ${ENC:xxxx}
    permissions:
      - resume_delivery_count
      - "*"
    rate_limit: 1000/min
    channels: [API, MCP]

  - app_id: business_ui
    app_secret: ${ENC:yyyy}
    permissions:
      - resume_delivery_count
    rate_limit: 100/min
    channels: [API]

  - app_id: ai_assistant
    app_secret: ${ENC:zzzz}
    permissions:
      - "*"
    rate_limit: 200/min
    channels: [MCP]
```

### 10.2 接入流程

```
客户端                              API 网关
  │                                    │
  │ POST /auth/token                   │
  │ { app_id, app_secret }             │
  │────────────────────────────────►   │
  │◄────────────────────────────────   │
  │ { access_token, permissions }      │
  │                                    │
  │ GET /api/v1/metrics/query          │
  │ Authorization: Bearer ***          │
  │ {指标ID, 维度, 时间范围}           │
  │────────────────────────────────►   │
  │◄────────────────────────────────   │
  │  结果                              │
```

### 10.3 请求示例

```bash
# 获取 Token
curl -X POST https://api.business.com/auth/token \
  -H "Content-Type: application/json" \
  -d '{"app_id": "data_platform", "app_secret": "***"}'

# 结构化查询
curl -X POST https://api.business.com/api/v1/metrics/query \
  -H "Authorization: Bearer eyJhbG..." \
  -d '{
    "metric_id": "resume_delivery_count",
    "dimensions": {"city": "北京"},
    "time_range": {"start": "2026-06-01", "end": "2026-06-30"}
  }'

# 灰度验证
curl -X POST ... -H "X-Route-Version: canary" ...
```

---

## 11. 文档体系

| 通道 | 文档类型 | 生成方式 |
|------|---------|---------|
| REST API | OpenAPI 3.1 | SpringDoc 扫描 `@Operation` / `@Schema` |
| MCP Tool | MCP JSON Schema | Spring AI 自动反射 + `@Schema` 增强 |
| 文档门户 | Knife4j UI | 聚合展示 |

## 12. Roadmap

```
Phase 1（当前）:  短查询 + 无状态 + Nginx 一致性哈希灰度
Phase 2（后续）:  长对话 + MCP 会话 Redis 化 + 全链路监控
Phase 3（远期）:  指标语义层 AI 辅助录入 + 智能指标推荐
```

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
