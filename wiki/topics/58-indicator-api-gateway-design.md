---

type: topic
tags: [API网关, 架构设计, MCP, Spring AI, 灰度发布, Spring Cloud Gateway]
created: 2026-07-09
updated: 2026-07-13
---


# ORACLE 统一指标系统 — API 网关方案设计

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

### 7.1 路由策略

#### 7.1.1 分层路由模型

云平台流量组负责节点自动注册/摘除，路由策略分为两层：

```
                    请求
                      │
                  Nginx（路由策略层）
                  ┌─ hash 路由
                  ├─ header 覆盖
                  └─ canary 分流
                      │
            ┌─────────┴─────────┐
            │                   │
      流量组 A（stable）    流量组 B（canary）
       │  node1,node2       │  node3
       │  自动注册/摘除      │  自动注册/摘除
```

**Nginx 侧不再配置单个节点 IP**，只写死流量组 VIP/域名。节点上下线完全由云平台流量组管理。

#### 7.1.2 默认分流（一致性哈希）

```nginx
# 流量组 A（稳定版本）
upstream stable_group {
    server stable-group-vip.internal:8081;
}

# 流量组 B（灰度版本）
upstream canary_group {
    server canary-group-vip.internal:8081;
}

# 路由选择：默认按 hash，带 header 可覆盖
map $http_x_route_version $backend {
    default       $hash_backend;
    canary        canary_group;
    stable        stable_group;
}

# 默认按 Token/UserID 一致性哈希
split_clients $http_authorization $hash_backend {
    90%    stable_group;
    10%    canary_group;
}

server {
    location /api/ {
        proxy_pass http://$backend;
    }
    location /mcp/ {
        # 这里按 user_id hash
        set $hash_key $http_x_user_id;
        proxy_pass http://$backend;
    }
}
```

**分流规则**：

| 通道 | 默认路由 | 灰度验证 |
|------|---------|---------|
| Web/MCP | `hash $http_x_user_id` → 90% stable / 10% canary | `X-Route-Version: canary` → 流量组 B |
| API | `hash $http_authorization` → 90% stable / 10% canary | `X-Route-Node: node3` → 指定节点 |

Web 访问（MCP）按用户 ID 哈希，保证同一用户的长对话始终落到同一流量组。
API 访问按 Token 哈希，保证同一调用方始终落到同一流量组。

#### 7.1.3 指定路由（覆盖哈希，灰度验证用）

支持通过请求头**显式指定路由**，绕开一致性哈希，方便针对性验证：

```
X-Route-Node: node1 | node2 | node3      → 路由到指定节点（组合 X-Forwarded-Host 等）
X-Route-Version: stable | canary          → 路由到对应版本组（不关心具体节点）
```

适用场景举例：
- QA 测试新版：`X-Route-Version: canary` 直接切到 canary 流量组
- 定向验证某个用户：`X-Route-Node: node3` 锁定到指定 IP（直接节点 IP）
- 灰度白名单：内部用户带 `X-Route-Version: canary`，外部用户走默认流量组

#### 7.1.4 网关层 Gateway 覆盖

请求到达 Spring Cloud Gateway 后，Gateway 层进一步按调用方标识覆盖路由：

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: metric-api-stable
          uri: http://stable-group-vip.internal:8081
          predicates:
            - Path=/api/v1/**
        - id: metric-api-canary
          uri: http://canary-group-vip.internal:8081
          predicates:
            - Path=/api/v1/**
            - Header=X-Route-Version, canary
```

Gateway Filter 逻辑：
```
收到请求
  ├─ 有 X-Route-Node? → 直接路由到该 IP 地址
  ├─ 有 X-Route-Version? → 路由到对应流量组
  └─ 无覆盖头 → 落默认流量组（由 Nginx split_clients 决定）
```

### 7.2 权重控制

权重由**云平台流量组**管理，不在 Nginx 侧维护。运维在流量组控制台操作：

```
云平台 → 流量组管理 → 指标网关
├── 稳定版本（stable_group）
│   ├── 节点 10.0.1.1:8081  ✓  权重: 45
│   ├── 节点 10.0.1.2:8082  ✓  权重: 45
│   └── 流量权重: 90%（相对总流量）
│
├── 灰度版本（canary_group）
│   ├── 节点 10.0.1.3:8083  ✓  权重: 10
│   └── 流量权重: 10%
│
└── 操作: [调整权重] [添加节点] [移除节点]
```

Nginx 侧仅配置 `split_clients` 的比例，与云平台流量组权重保持一致：

```nginx
split_clients $http_authorization $hash_backend {
    90%    stable_group;     # 与流量组 90% 一致
    10%    canary_group;     # 与流量组 10% 一致
}
```

**调整权重时，两边同步修改**：云平台流量组控制台 + Nginx `split_clients` 百分比。

### 7.3 分流决策树

```
                        收到请求
                            │
                    ┌───────┴───────┐
                    │               │
              Web/MCP 通道       API 通道
                    │               │
                    │          ┌────┴────┐
                    │          │         │
                    │     有路由头?  无路由头?
                    │          │         │
              按 UserID      ┌┴┐       按 Token
              一致性哈希   指定节点  一致性哈希
                                │
                            路由到
                          目标节点
```

### 7.4 灰度流程

| 操作 | Nacos 操作 | 效果 |
|------|-----------|------|
| 灰度上线 | 设置 canary weight=10 | 10% 流量切新版 |
| 指定验证 | QA 请求带 `X-Route-Version: canary` | 定向到灰度节点 |
| 调大灰度 | 调 weight 10→30 | 30% 流量切新版 |
| 全量上线 | 三节点 weight 均分 | 全量新版 |
| 回滚 | canary weight→0 | 流量全回旧版 |

### 7.5 Nacos 灰度配置

```yaml
# Data ID: metric-gray-config.yaml
# Group: METRIC_GATEWAY
gray:
  enabled: true
  routing:
    default:
      api: token          # API 通道默认按 token 哈希
      mcp: user_id        # Web/MCP 通道按用户 ID 哈希
    override_headers:     # 覆盖哈希的请求头
      node: X-Route-Node
      version: X-Route-Version
  api_nodes:
    - ip: 10.0.1.1
      weight: 45
      version: stable
    - ip: 10.0.1.2
      weight: 45
      version: stable
    - ip: 10.0.1.3
      weight: 10
      version: canary-2.1.0
  mcp_nodes:
    - ip: 10.0.1.1
      weight: 45
      version: stable
    - ip: 10.0.1.2
      weight: 45
      version: stable
    - ip: 10.0.1.3
      weight: 10
      version: canary-2.1.0

### 7.6 Nacos 灰度实现流程

#### 7.6.1 三层控制模型

Nacos 在灰度中承担三个角色，分别在灰度流程的不同层面发挥作用：

1. **配置中心 → 权重策略控制**
   - `metric-gray-config.yaml`：Data ID 下的灰度配置（权重、路由头定义）
   - Nacos 推送到 Nginx Lua / Gateway 生效

2. **注册中心 → 版本元数据 + 节点管理**
   - 节点注册时通过 `metadata.version` 区分版本（`stable` / `canary-2.1.0`）
   - 运维可通过 Nacos API 调节单个节点权重

3. **配置中心 → 动态路由规则**
   - Gateway 动态路由规则（灰度白名单、Header 路由）
   - `X-Route-Version` 映射到 `version=canary` 的节点
   - 支持 Nacos 动态刷新，无需重启节点

#### 7.6.2 灰度上线完整流程

| 时间 | 操作 | 生效机制 |
|------|------|----------|
| T-10min | 新版本部署到 node3 | 修改 `application.yml` → `metadata.version = canary-2.1.0`，启动 node3 |
| T-5min | Nacos 注册完成 | 控制台显示 node3 ✓ `(version=canary-2.1.0)`，此时权重为默认值（尚未加入生产流量） |
| **T0** | **Nacos 灰度配置 → 设置 weight=10** | 配置中心推送 `metric-gray-config.yaml` → `api_nodes[2].weight: 0 → 10` → Nginx Lua 轮询感知 → 10% Token 哈希落到 node3 |
| T+10min | 观察监控 | 看 node3 错误率/延迟/查询正确性，对比 node1/node2 基线；QA 带 `X-Route-Version: canary` 手动验证 |
| T+30min | 调大灰度权重 10→30 | Nacos 配置中心改 weight → 更多用户切到新版 |
| T+1h | **全量上线** | 停止旧版节点重启为新版 → Nacos weight 均分 → 归档 canary 配置 |
| T+X | **回滚**（如发现问题） | Nacos canary weight 改 0 → 流量全回旧版 → 下线问题节点修复后再灰度 |

#### 7.6.3 Nacos 配置变更操作（运维界面）

**Step 1：登录 Nacos 控制台 → 配置管理 → 配置列表**

```
Data ID:    metric-gray-config.yaml
Group:      METRIC_GATEWAY
命名空间:    prod
格式:        YAML
描述:        指标网关灰度权重配置
```

**Step 2：编辑配置内容**

灰度上线时，将 canary 节点权重从 0 改为 10：

```yaml
  api_nodes:
    - ip: 10.0.1.1
      weight: 45        # ← 不改
      version: stable
    - ip: 10.0.1.2
      weight: 45        # ← 不改
      version: stable
    - ip: 10.0.1.3
      weight: 10        # ← 0 → 10（灰度上线）
      version: canary-2.1.0
```

**Step 3：发布（携带变更说明）**

```
发布说明: [灰度] 节点3 上线 2.1.0 版本，weight 0→10
配置格式: YAML
Md5:      a1b2c3d4...

[发布]      [对比]      [回滚]
```

#### 7.6.4 版本分组与灰度策略

```yaml
# 版本分组定义
version_groups:
  stable:
    match: version == "stable"
    weight: 90               # 权重和
    nodes:
      - 10.0.1.1
      - 10.0.1.2

  canary:
    match: version == "canary-*"
    weight: 10
    nodes:
      - 10.0.1.3

# 灰度策略
strategies:
  - name: "按比例灰度"          # 默认
    type: weight
    description: "按权重比例分发流量"

  - name: "白名单灰度"          # QA/内部用户优先
    type: whitelist
    header: X-User-Id
    values:
      - user_qa_001
      - user_qa_002
      - user_internal_admin
    target_version: canary

  - name: "指定路由"            # 调用方主动指定
    type: header
    header: X-Route-Version
    values:
      - canary
    target_version: canary
```

#### 7.6.5 Nacos 配置与云平台流量组联动

由于使用了云平台流量组管理节点注册/摘除，Nacos ↔ Nginx 的实时 upstream 同步不再是必须的。改为三层联动模型：

```
运维操作                  Nacos                   云平台流量组          转发层
───────                 ──────                  ────────────         ──────

灰度上线                 配置中心更新              流量组权重调整        Nginx
  └── Nacos 改 weight    metric-gray-config       └── 稳定组 90%        split_clients
       └── 运维查看      的 canary 比例            └── 灰度组 10%       同步调整
                              │                        │
                         （状态展示）              （流量执行）         （hash 比例）
```

**各层职责**：

| 层 | 职责 | 备注 |
|----|------|------|
| Nacos 配置 | 灰度权重的**声明层**，运维在此操作 | 仅做配置管理，不直接影响流量 |
| 云平台流量组 | 节点注册/摘除 + 权重比率的**执行层** | 实际控制流量分发 |
| Nginx split_clients | 一致性哈希的**比例层** | 与流量组权重保持同步即可 |

**运维操作时**：
1. 先在 Nacos 控制台改 `metric-gray-config.yaml` 中的 canary 权重
2. 再到云平台流量组控制台调整 stable/canary 组的流量比例
3. 如果改了 split 比例，同步更新 Nginx 配置

Nacos 和流量组之间没有自动化联动——它们是**人为保持一致的**。这个设计的优点是：Nacos 挂了不影响线上流量，流量组挂了直接影响节点注册/摘除但 Nginx 的 split 路由配置仍然有效。

#### 7.6.6 版本管控与升级节奏

```
版本号     节点      状态          权重
──────     ────    ────────────    ──────
v1.0.0     1,2     stable(旧版)    90%
v2.1.0     3       canary         10%

灰度验证通过后：
  1. 节点 1、2 升级到 v2.1.0
  2. 三节点 version 统一为 stable
  3. 权重均分 33%
  4. 归档 metric-gray-config.yaml 的 canary 段落

重复上述流程进入下一轮灰度（v2.2.0 → canary）
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
        - id: metric-api-stable
          uri: lb://metric-gateway
          predicates:
            - Path=/api/v1/**
            - Header=X-Route-Version, stable
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: metricApiBreaker
                fallbackUri: forward:/fallback/metrics

        - id: metric-api-canary
          uri: lb://metric-gateway
          predicates:
            - Path=/api/v1/**
            - Header=X-Route-Version, canary
          filters:
            - StripPrefix=1

        - id: metric-api-default
          uri: lb://metric-gateway
          predicates:
            - Path=/api/v1/**
          filters:
            - StripPrefix=1
            - name: GrayRouting

        - id: metric-mcp-stable
          uri: lb://metric-gateway
          predicates:
            - Path=/mcp/v1/**
            - Header=X-Route-Version, stable
          filters:
            - StripPrefix=1

        - id: metric-mcp-canary
          uri: lb://metric-gateway
          predicates:
            - Path=/mcp/v1/**
            - Header=X-Route-Version, canary
          filters:
            - StripPrefix=1

        - id: metric-mcp-default
          uri: lb://metric-gateway
          predicates:
            - Path=/mcp/v1/**
          filters:
            - StripPrefix=1
            - name: GrayRouting
```

### 9.2 Gateway 自定义灰度 Filter

```java
@Component
public class GrayRoutingGatewayFilterFactory
        extends AbstractGatewayFilterFactory<GrayRoutingGatewayFilterFactory.Config> {

    private final GrayRoutingService grayRoutingService;

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();

            if (request.getHeaders().containsKey("X-Route-Version") ||
                request.getHeaders().containsKey("X-Route-Node")) {
                return chain.filter(exchange);
            }

            String version = grayRoutingService.resolveTargetVersion(
                new ServletServerHttpRequest(request).getServletRequest());

            ServerHttpRequest modified = request.mutate()
                .header("X-Route-Version", version)
                .build();

            return chain.filter(exchange.mutate().request(modified).build());
        };
    }

    @Data
    public static class Config {
        private String configDataId;
    }
}
```

### 9.3 Nginx 层配置

```nginx
upstream metric_backend {
    server traffic-group-vip.internal:8081 max_fails=3 fail_timeout=10s;
}

upstream metric_web {
    hash $http_x_user_id consistent;
    server traffic-group-vip.internal:8081;
}

upstream metric_api {
    hash $http_authorization consistent;
    server traffic-group-vip.internal:8081;
}

server {
    listen 443 ssl;
    server_name api.business.com;

    location /mcp/ {
        proxy_pass http://metric_web;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-User-Id $http_x_user_id;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 300s;
    }

    location /api/ {
        proxy_pass http://metric_api;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Authorization $http_authorization;
    }

    location /actuator/ {
        proxy_pass http://metric_backend;
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
