---

type: topic
tags: [API网关, 架构设计, MCP, Spring AI, 灰度发布, Spring Cloud Gateway]
created: 2026-07-09
updated: 2026-07-13

> **提示**：本文档灰度方案基于 58 星火灰度上线方案。Gateway 层通过自定义灰度过滤器（继承 ReactiveLoadBalancerClientFilter）实现路由决策，通过 Nacos 配置中心动态管理灰度策略（JSON 格式断言 + 比例），命中灰度的请求自动路由到 `-gray` 后缀的 Nacos 服务名。
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

基于 58 星火灰度上线方案，使用 Spring Cloud Gateway + Nacos 实现灰度路由。

### 7.1 总体架构

```
                           请求入口
                              │
                     ┌────────┴────────┐
                     │   Gateway 层     │
                     │  (灰度过滤器)     │
                     │  继承 Reactive-   │
                     │  LoadBalancer-   │
                     │  ClientFilter    │
                     └────────┬────────┘
                              │
              ┌───────────────┼───────────────┐
              │ 灰度匹配?      │               │
          ┌───┴───┐      ┌───┴────┐
          │ 是     │      │ 否     │
          │        │      │        │
   ┌──────▼────┐   │   ┌──▼───────────┐
   │ 灰度分组   │   │   │ 稳定分组      │
   │ service-  │   │   │ service      │
   │ name-gray │   │   │ name         │
   │ (Nacos)   │   │   │ (Nacos)      │
   └───────────┘   │   └──────────────┘
                   │
              ┌────▼────┐
              │  Nacos   │
              │ 注册中心  │
              │ 配置中心  │
              └─────────┘
```

**核心原理**：
- Gateway 自定义灰度过滤器继承 `ReactiveLoadBalancerClientFilter`
- 拷贝其逻辑，改写获取 Service ID 的步骤
- 通过 `LoadBalancerClient` 获取 Nacos 中的服务实例
- 通过 `ServerWebExchange` 获取 Request，提取路由 key（Cookie / IP 等）
- 通过 Nacos 配置中心的灰度策略配置判断是否走灰度
- 如需灰度，根据服务名映射配置获取灰度服务名，否则使用正式服务名
- 重建 URL 并设置 `GATEWAY_REQUEST_URL_ATTR` 改变最终路由地址

### 7.2 服务命名约定

| 环境 | 服务名示例 | 说明 |
|------|-----------|------|
| 稳定分组 | `xh-saas-admin-online` | 正式服务名，部署在稳定分组 |
| 灰度分组 | `xh-saas-admin-online-gray` | 灰度服务名，正式名 + `-gray` 后缀 |

**服务映射表**（示例）：

| 服务集群 | 稳定分组服务名 | 灰度分组服务名 |
|---------|---------------|---------------|
| 指标系统工作台 | `metric-admin-online` | `metric-admin-online-gray` |
| 指标系统查询 | `metric-query-online` | `metric-query-online-gray` |
| 指标系统驾驶舱 | `metric-report-online` | `metric-report-online-gray` |

### 7.3 灰度配置 JSON 格式

完整的灰度配置存储在 Nacos 中（Data ID: `com.58bj.dpd.xinghuo.gray`），采用 JSON 格式：

```json
{
  "grayItems": [
    {
      "config": [
        {
          "grayRatio": 30,
          "predicaterGroups": [
            {
              "predicaters": [
                {
                  "includes": ["zhangsan", "lisi"],
                  "excludes": ["wangwu"],
                  "regex": ".*ming",
                  "paramName": "xh_uname",
                  "type": "COOKIE"
                },
                {
                  "includes": ["10.162.37.160"],
                  "regex": "10.10.*",
                  "type": "IP"
                }
              ]
            },
            {
              "predicaters": [
                {
                  "includes": ["POST", "PATCH"],
                  "paramName": "METHOD",
                  "type": "HEADER"
                }
              ]
            }
          ],
          "routeKeys": [
            {
              "saltValue": 0,
              "type": "IP"
            },
            {
              "paramName": "xh_uname",
              "type": "COOKIE"
            }
          ]
        }
      ],
      "service": "xh-internal-admin-online"
    }
  ],
  "routeKeys": [
    {
      "saltValue": 0,
      "type": "IP"
    },
    {
      "paramName": "xh_uname",
      "type": "COOKIE",
      "saltValue": 1
    }
  ]
}
```

#### 关键规则

| 字段 | 说明 |
|------|------|
| `grayItems[].config[].grayRatio` | 灰度比例 0-100 |
| `predicaterGroups` | **OR 关系**：满足任一 group 即命中灰度 |
| `predicaterGroups[].predicaters` | **AND 关系**：group 内所有条件需同时满足 |
| `includes` | 包含值列表 |
| `excludes` | 排除值列表（优先级高于 includes） |
| `regex` | 正则匹配，与 includes/excludes 同时生效 |
| `routeKeys` | 路由键：基于哪个值进行一致性哈希分发 |
| `saltValue` | 盐值，用于随机化路由分布 |

#### 断言类型（type）

| 类型 | 说明 | 是否需要 paramName |
|------|------|-------------------|
| `IP` | 请求方 IP 地址 | ❌ |
| `PATH` | 请求路径 | ❌ |
| `HOST` | 请求 Host | ❌ |
| `URL` | 完整 URL | ❌ |
| `COOKIE` | Cookie 中的指定字段 | ✅ 指定 paramName |
| `HEADER` | 请求头中的指定字段 | ✅ 指定 paramName |

### 7.4 路由键（xh_route_keys Cookie）

业务相关字段统一通过 Cookie `xh_route_keys` 传递，value 为 JSON Map：

```json
{
  "xh_uname": "zhangsan",
  "xh_uid": "2018090410120014d6740d",
  "xh_project_name": ["数据分析平台", "推荐系统"],
  "xh_project_id": ["proj_001", "proj_002"],
  "xh_cuid": "cloud_001",
  "xh_cuname": "张三",
  "xh_domain": "metric.business.com"
}
```

| 字段 | 描述 | 来源 |
|------|------|------|
| `xh_uname` | 用户名 | 登录后写入 |
| `xh_uid` | 用户 ID | 登录后写入 |
| `xh_project_name` | 项目组名（列表） | 用户所属项目 |
| `xh_project_id` | 项目组 ID（列表） | 用户所属项目 |
| `xh_cuid` | 云账号 ID | 关联云平台账号 |
| `xh_cuname` | 云账号用户名 | 关联云平台账号 |
| `xh_domain` | 当前域名 | 前端自动写入 |

前端在登录成功后设置：
```javascript
// 登录后设置路由键
function setRouteKeys(userInfo) {
  const keys = {
    xh_uname: userInfo.username,
    xh_uid: userInfo.userId,
    xh_cuid: userInfo.cloudAccountId,
    xh_project_name: userInfo.projects?.map(p => p.name),
    xh_project_id: userInfo.projects?.map(p => p.id),
    xh_domain: window.location.hostname
  };
  document.cookie = `xh_route_keys=${encodeURIComponent(JSON.stringify(keys))}; path=/; domain=.business.com`;
}
```

### 7.5 Gateway 灰度过滤器实现

#### 7.5.1 自定义过滤器

```java
/**
 * 自定义灰度过滤器，继承 ReactiveLoadBalancerClientFilter
 * 注意：spring-cloud 版本不同，低版本是继承 LoadBalancerClientFilter
 */
@Component
public class GrayReactiveLoadBalancerClientFilter
        extends ReactiveLoadBalancerClientFilter {

    private final NacosConfigManager nacosConfigManager;
    private volatile GrayConfig grayConfig;

    public GrayReactiveLoadBalancerClientFilter(
            LoadBalancerClientFactory clientFactory,
            LoadBalancerProperties properties,
            NacosConfigManager nacosConfigManager) {
        super(clientFactory, properties);
        this.nacosConfigManager = nacosConfigManager;
        initGrayConfigListener();
    }

    /**
     * 监听 Nacos 灰度配置变化
     */
    private void initGrayConfigListener() {
        try {
            nacosConfigManager.getConfigService().addListener(
                "com.58bj.dpd.xinghuo.gray",
                "METRIC_GATEWAY",
                new AbstractListener() {
                    @Override
                    public void receiveConfigInfo(String config) {
                        grayConfig = JSON.parseObject(config, GrayConfig.class);
                        log.info("灰度配置已刷新");
                    }
                }
            );
        } catch (NacosException e) {
            log.error("监听灰度配置失败", e);
        }
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        GrayConfig config = this.grayConfig;

        if (config == null || !config.hasGrayItems()) {
            // 无灰度配置，走默认路由
            return super.filter(exchange, chain);
        }

        // 1. 获取当前请求匹配的服务名（从路由配置中提取）
        String serviceName = resolveServiceName(exchange);

        // 2. 查找该服务是否有灰度配置
        GrayItem grayItem = config.findGrayItem(serviceName);
        if (grayItem == null) {
            return super.filter(exchange, chain);
        }

        // 3. 判断是否命中灰度
        boolean matched = grayItem.matches(request, config.getRouteKeys());
        if (!matched) {
            return super.filter(exchange, chain);
        }

        // 4. 命中灰度，替换 serviceId 为灰度服务名
        String grayServiceName = serviceName + "-gray";
        exchange.getAttributes().put("gray_service", grayServiceName);

        // 5. 重写 URI，让 LoadBalancer 去 Nacos 拉灰度服务实例
        URI uri = exchange.getRequest().getURI();
        URI grayUri = URI.create("lb://" + grayServiceName + uri.getPath());
        exchange.getAttributes().put(
            ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR, grayUri);

        return super.filter(exchange, chain);
    }
}
```

#### 7.5.2 灰度匹配逻辑

```java
public class GrayItem {
    private List<GrayConfigItem> config;
    private String service;

    /**
     * 判断当前请求是否匹配此灰度项
     * config 数组内多个 GrayConfigItem 之间为 OR 关系
     * 每个 GrayConfigItem 内的 predicaterGroups 之间为 OR 关系
     * 每个 predicaterGroup 内的 predicaters 之间为 AND 关系
     */
    public boolean matches(ServerHttpRequest request, List<RouteKey> globalRouteKeys) {
        if (config == null || config.isEmpty()) return false;

        for (GrayConfigItem item : config) {
            // 1. 检查灰度比例（grayRatio）
            if (!checkGrayRatio(request, item, globalRouteKeys)) {
                continue;  // 比例未命中，尝试下一个 config item
            }

            // 2. 检查断言组（OR 关系）
            if (item.getPredicaterGroups() == null || item.getPredicaterGroups().isEmpty()) {
                return true;  // 无断言，仅按比例
            }

            for (PredicaterGroup group : item.getPredicaterGroups()) {
                if (group.matches(request)) {
                    return true;  // 任一 group 命中即走灰度
                }
            }
        }
        return false;
    }

    /**
     * 基于 routeKey 和 grayRatio 的一致性哈希校验
     */
    private boolean checkGrayRatio(ServerHttpRequest request,
                                    GrayConfigItem item,
                                    List<RouteKey> globalRouteKeys) {
        int ratio = item.getGrayRatio();  // 0-100
        if (ratio >= 100) return true;
        if (ratio <= 0) return false;

        // 使用路由键计算 hash
        List<RouteKey> keys = item.getRouteKeys() != null
            ? item.getRouteKeys() : globalRouteKeys;

        String hashKey = buildHashKey(request, keys);
        int hash = (hashKey.hashCode() & 0x7FFFFFFF) % 100;
        return hash < ratio;
    }

    private String buildHashKey(ServerHttpRequest request, List<RouteKey> keys) {
        StringBuilder sb = new StringBuilder();
        for (RouteKey key : keys) {
            String value = extractValue(request, key);
            sb.append(value).append(":").append(key.getSaltValue()).append("|");
        }
        return sb.toString();
    }
}
```

#### 7.5.3 断言组匹配

```java
public class PredicaterGroup {
    private List<Predicater> predicaters;

    /**
     * group 内所有条件为 AND 关系：必须全部满足
     */
    public boolean matches(ServerHttpRequest request) {
        if (predicaters == null || predicaters.isEmpty()) return true;
        return predicaters.stream().allMatch(p -> p.matches(request));
    }
}

public class Predicater {
    private List<String> includes;
    private List<String> excludes;
    private String regex;
    private String paramName;
    private String type;  // IP / PATH / HOST / URL / COOKIE / HEADER

    public boolean matches(ServerHttpRequest request) {
        String value = extractValue(request);
        if (value == null) return false;

        // excludes 优先级高于 includes
        if (excludes != null && excludes.contains(value)) return false;

        // includes
        if (includes != null && includes.contains(value)) return true;

        // regex
        if (regex != null && value.matches(regex)) return true;

        return false;
    }

    private String extractValue(ServerHttpRequest request) {
        switch (type) {
            case "IP":
                return request.getRemoteAddress() != null
                    ? request.getRemoteAddress().getAddress().getHostAddress() : null;
            case "PATH":
                return request.getURI().getPath();
            case "HOST":
                return request.getHeaders().getFirst(HttpHeaders.HOST);
            case "URL":
                return request.getURI().toString();
            case "COOKIE":
                return extractFromCookie(request, paramName);
            case "HEADER":
                return request.getHeaders().getFirst(paramName);
            default:
                return null;
        }
    }
}
```

### 7.6 灰度路由流程

```
请求到达 Gateway
       │
       ▼
1. 从路由配置提取 serviceId（如 xh-saas-admin-online）
       │
       ▼
2. 从 Nacos 加载灰度配置 com.58bj.dpd.xinghuo.gray
       │
       ▼
3. 查找该 service 是否有 grayItem
       │
   ┌───┴───┐
   │ 无     │ 有
   │        ▼
   │   4. 遍历 grayItem.config[]（OR 关系）
   │        │
   │        ▼
   │   5. 检查 grayRatio（按路由 key 哈希 % 100 < ratio）
   │        │
   │   ┌────┴────┐
   │   │ 不命中   │ 命中
   │   │          ▼
   │   │    6. 遍历 predicaterGroups（OR 关系）
   │   │          │
   │   │          ▼
   │   │    7. 遍历 predicaters（AND 关系）
   │   │          │
   │   │    ┌────┴────┐
   │   │    │ 全部匹配 │ 任一不匹配
   │   │    │          │
   │   │    ▼          │
   │   │  命中灰度     │
   │   │    │          │
   │   │    ▼          ▼
   │   │  替换 serviceId  继续下一个 config item
   │   │  为 -gray 后缀    ─────────►
   │   │    │
   │   ▼    ▼
   │   LoadBalancer 从 Nacos
   │   获取对应服务实例
       │
       ▼
   请求最终路由到目标节点
```

### 7.7 云平台部署与环境变量

#### 7.7.1 云平台分组配置

```
云平台 → 配置分组 → 高级 → 环境变量配置
```

为每个灰度分组设置环境变量覆盖服务名：

| 分组 | 环境变量 | 值 |
|------|---------|---|
| 稳定分组（metric-admin） | 无（使用 application.yml 默认） | `metric-admin-online` |
| 灰度分组（metric-admin-gray） | `spring:application:name` | `metric-admin-online-gray` |

#### 7.7.2 灰度分组创建

```
云平台 → 新建 灰度 bucket（用于前端灰度发布）
  ├─ 星火工作台
  ├─ 星火驾驶舱
  ├─ 星图
  └─ 星火活动

云平台 → 新建 灰度分组（用于后端灰度发布）
  ├─ 指标系统工作台  → 灰度分组名: metric-admin-gray
  ├─ 指标系统查询    → 灰度分组名: metric-query-gray
  └─ 指标系统驾驶舱  → 灰度分组名: metric-report-gray
```

关键操作：灰度分组需要按照上面操作路径**增加灰度服务名修改**，设置 `spring:application:name` 环境变量为对应的灰度服务名。

### 7.8 Spring Cloud Gateway 路由配置

路由配置同样发布在 Nacos 中，动态刷新：

```yaml
# Data ID: metric-gateway-routes.yaml
spring:
  cloud:
    gateway:
      routes:
        - id: metric-admin
          uri: lb://metric-admin-online
          predicates:
            - Path=/admin/**
          filters:
            - StripPrefix=1

        - id: metric-query
          uri: lb://metric-query-online
          predicates:
            - Path=/api/v1/metrics/**
          filters:
            - StripPrefix=2

        - id: metric-report
          uri: lb://metric-report-online
          predicates:
            - Path=/report/**
          filters:
            - StripPrefix=1

        - id: metric-mcp
          uri: lb://metric-mcp-online
          predicates:
            - Path=/mcp/v1/**
          filters:
            - StripPrefix=1
```

路由配置中的 `lb://{serviceName}` 使用 Nacos 服务发现，灰度过滤器会在命中灰度时自动将 `serviceName` 替换为 `{serviceName}-gray`。

### 7.9 Nacos 服务映射配置

```yaml
# Data ID: com.58bj.dpd.xinghuo.service

service-mapping:
  metric-admin-online: metric-admin-online-gray
  metric-query-online: metric-query-online-gray
  metric-report-online: metric-report-online-gray
  metric-mcp-online: metric-mcp-online-gray
```

### 7.10 灰度流程

#### 7.10.1 上线步骤

| 阶段 | 操作 |
|------|------|
| 1. 稳定分组上线 | 后端接入 Nacos，部署稳定分组，验证注册成功 |
| 2. 流量切换 | 联系运维将流量切换到网关层 |
| 3. 灰度分组上线 | 部署灰度分组 Pod，`spring:application:name` 设置为灰度服务名 |
| 4. 灰度策略配置 | 在 Nacos 中写入灰度配置 JSON，先根据 IP 或 特定用户灰度 QA 流量 |
| 5. 逐步放开 | 逐渐调大 grayRatio，或增加更多的 predicate 条件 |
| 6. 全量上线 | 灰度验证通过后，稳定分组滚动升级，下线灰度分组 |

#### 7.10.2 升级顺序

```
第一阶段：星图 → 无外部用户，风险最低
第二阶段：指标系统活动页 → 流量较小
第三阶段：外部指标系统 → 外部用户先行验证
第四阶段：内部指标系统 → 内部用户最后升级
```

#### 7.10.3 灰度策略示例

```json
// 第一阶段：仅 QA 人员
{
  "grayItems": [{
    "config": [{
      "grayRatio": 100,
      "predicaterGroups": [{
        "predicaters": [{
          "includes": ["qa_zhangsan", "qa_lisi"],
          "paramName": "xh_uname",
          "type": "COOKIE"
        }]
      }]
    }],
    "service": "metric-admin-online"
  }]
}

// 第二阶段：按 IP 白名单 + 10% 流量
{
  "grayItems": [{
    "config": [{
      "grayRatio": 10,
      "predicaterGroups": [{
        "predicaters": [{
          "includes": ["10.162.37.*"],
          "type": "IP"
        }]
      }]
    }]
  ],
  "routeKeys": [{"type": "IP"}]
}

// 第三阶段：按比例灰度 30%
{
  "grayItems": [{
    "config": [{
      "grayRatio": 30,
      "routeKeys": [{"type": "IP", "saltValue": 1}]
    }],
    "service": "metric-admin-online"
  }]
}
```

### 7.11 其他收益

灰度方案落地后，可进一步接入 Spring Cloud 全家桶基础能力：

- **限流**：Spring Cloud Gateway 的 RequestRateLimiter
- **熔断降级**：Spring Cloud CircuitBreaker
- **全链路追踪**：Spring Cloud Sleuth / SkyWalking
- **数据服务迁移**：数据服务和截图服务可从 SCF 迁移到 Nacos，对外独立部署

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

路由规则发布到 Nacos（动态生效），灰度过滤器自动将命中的服务名替换为 `-gray` 后缀：

```yaml
# 配置方式一：Nacos Data ID → metric-gateway-routes.yaml
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
        - id: metric-admin
          uri: lb://metric-admin-online
          predicates:
            - Path=/admin/**
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: metricApiBreaker
                fallbackUri: forward:/fallback/metrics

        - id: metric-query
          uri: lb://metric-query-online
          predicates:
            - Path=/api/v1/metrics/**
          filters:
            - StripPrefix=2

        - id: metric-report
          uri: lb://metric-report-online
          predicates:
            - Path=/report/**
          filters:
            - StripPrefix=1

        - id: metric-mcp
          uri: lb://metric-mcp-online
          predicates:
            - Path=/mcp/v1/**
          filters:
            - StripPrefix=1
```

当灰度过滤器判定命中灰度时（参见 §7.5），自动将 `lb://metric-admin-online` 替换为 `lb://metric-admin-online-gray`，使得 LoadBalancer 从 Nacos 拉取灰度服务实例。

### 9.2 Nginx 层配置

Nginx 仅做 SSL 终结 + 透传 Cookie 到 Gateway，不做灰度路由决策：

```nginx
upstream gateway_backend {
    # 网关层部署为云平台分组，VIP 由云平台管理
    server gateway-group-vip.internal:8081;
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

## 10. 用户级限流（基于 OA）

在 Gateway 层实现用户维度的限流，基于用户 OA（组织账号）而非 IP 或 client_id，确保同一用户多设备/多 IP 共享限流额度。

### 10.1 用户 OA 提取策略

| 请求来源 | 提取方式 | 提取的值 |
|---------|---------|---------|
| Web/MCP（有 Cookie） | `xh_route_keys` Cookie 解析 JSON → `xh_uname` | OA 用户名（如 `zhangsan`） |
| API（有 Token） | JWT 解析 → `sub` claim，或自定义 `oa` claim | OA 用户名或用户 ID |
| 兜底 | `loginuserid` Cookie | 登录用户 ID |
| 无法识别 | 降级到 IP 限流 | 客户端 IP |

### 10.2 限流 Key 格式

```
# 格式：rate_limit:{层级}:{route}:{oa}
# 示例
rate_limit:user:metric-admin:zhangsan      # 用户级
rate_limit:user_api:/api/v1/metrics:zhangsan  # 用户+接口级
rate_limit:user_ip:zhangsan:10.162.1.1     # 用户+IP级（防多设备绕过）
```

### 10.3 限流阈值设计

```yaml
# 三层限流（同时生效，命中任一即限流）
rate_limits:
  # 第一层：用户全局限流
  user_global:
    key_prefix: rate_limit:user
    key_resolver: user_oa
    capacity: 1000          # 令牌桶容量
    rate: 100               # 每秒补充令牌数

  # 第二层：用户+路由限流
  user_route:
    key_prefix: rate_limit:user_route
    key_resolver: user_oa + route
    rules:
      - routes: [/api/v1/metrics/query]       # 指标查询
        capacity: 200
        rate: 20
      - routes: [/api/v1/metrics/nl-query]     # 自然语言查询
        capacity: 50
        rate: 10
      - routes: [/api/v1/metrics/list]         # 指标列表
        capacity: 500
        rate: 50
      - routes: [/mcp/v1/**]                   # MCP 通道
        capacity: 100
        rate: 10

  # 第三层：用户+路由+维度限流（防止单维度打爆）
  user_route_dimension:
    # 比如：同一用户查询不同城市的指标，限制并发
    key_prefix: rate_limit:user_route_dim
    capacity: 30
    rate: 10
```

### 10.4 自定义 KeyResolver 实现

```java
@Component("userOaKeyResolver")
public class UserOaKeyResolver implements KeyResolver {

    private static final String XH_ROUTE_KEYS = "xh_route_keys";

    @Override
    public Mono<String> resolve(ServerWebExchange exchange) {
        ServerHttpRequest request = exchange.getRequest();

        // 1. 从 xh_route_keys Cookie 解析 OA
        String oa = resolveFromRouteKeysCookie(request);
        if (oa != null) return Mono.just("user_oa:" + oa);

        // 2. 从 JWT Token 解析
        String token = extractBearerToken(request);
        if (token != null) {
            try {
                Claims claims = jwtParser.parseClaims(token);
                String sub = claims.get("sub", String.class);
                if (sub != null) return Mono.just("token_sub:" + sub);
            } catch (Exception ignored) {}
        }

        // 3. 从 loginuserid Cookie 兜底
        String loginUserId = extractCookie(request, "loginuserid");
        if (loginUserId != null) return Mono.just("login_user:" + loginUserId);

        // 4. 降级到 IP
        String ip = Objects.requireNonNull(request.getRemoteAddress()).getAddress().getHostAddress();
        return Mono.just("ip:" + ip);
    }

    private String resolveFromRouteKeysCookie(ServerHttpRequest request) {
        String cookie = extractCookie(request, XH_ROUTE_KEYS);
        if (cookie == null) return null;
        try {
            String decoded = URLDecoder.decode(cookie, StandardCharsets.UTF_8);
            Map<String, Object> keys = JSON.parseObject(decoded);
            return (String) keys.get("xh_uname");
        } catch (Exception e) {
            return null;
        }
    }

    private String extractCookie(ServerHttpRequest request, String name) {
        String cookieHeader = request.getHeaders().getFirst(HttpHeaders.COOKIE);
        if (cookieHeader == null) return null;
        return Arrays.stream(cookieHeader.split(";"))
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
}
```

### 10.5 路由级限流配置

```yaml
# 配合自定义 KeyResolver，对不同路由配置不同限流阈值
spring:
  cloud:
    gateway:
      routes:
        - id: metric-query
          uri: lb://metric-query-online
          predicates:
            - Path=/api/v1/metrics/query
          filters:
            - name: RequestRateLimiter
              args:
                key-resolver: "#{@userOaKeyResolver}"
                redis-rate-limiter:
                  replenishRate: 20     # 每秒 20 个令牌
                  burstCapacity: 200    # 突发 200
                  requestedTokens: 1
            - StripPrefix=2

        - id: metric-nl-query
          uri: lb://metric-query-online
          predicates:
            - Path=/api/v1/metrics/nl-query
          filters:
            - name: RequestRateLimiter
              args:
                key-resolver: "#{@userOaKeyResolver}"
                redis-rate-limiter:
                  replenishRate: 10     # NL 查询更耗资源
                  burstCapacity: 50
                  requestedTokens: 1
            - StripPrefix=2

        - id: metric-admin
          uri: lb://metric-admin-online
          predicates:
            - Path=/admin/**
          filters:
            - name: RequestRateLimiter
              args:
                key-resolver: "#{@userOaKeyResolver}"
                redis-rate-limiter:
                  replenishRate: 50
                  burstCapacity: 500
            - StripPrefix=1
```

### 10.6 Nacos 动态限流配置

限流阈值通过 Nacos 动态管理，无需重启：

```yaml
# Data ID: metric-limits.yaml
# Group: METRIC_GATEWAY

rate_limits:
  user:
    default:
      replenishRate: 100
      burstCapacity: 1000

  # 按用户的限流阈值（白名单）
  user_overrides:
    - oa: "admin_zhang"
      replenishRate: 500      # 管理员放宽
      burstCapacity: 5000
    - oa: "etl_service"
      replenishRate: 1000     # 服务账号放宽
      burstCapacity: 10000

  # 按路由的限流阈值
  route:
    /api/v1/metrics/query:
      replenishRate: 20
      burstCapacity: 200
    /api/v1/metrics/nl-query:
      replenishRate: 5
      burstCapacity: 30
    /api/v1/metrics/list:
      replenishRate: 50
      burstCapacity: 500

  # 全局 IP 黑名单（超过阈值自动加入）
  ip_blacklist:
    enabled: true
    threshold: 1000       # 1 分钟内超过 1000 次请求
    ban_duration_min: 30  # 封禁 30 分钟
```

### 10.7 限流效果监控

```java
@Component
public class RateLimitMonitor {

    private final MeterRegistry meterRegistry;

    /**
     * 记录限流事件 → Prometheus / Grafana
     */
    @EventListener
    public void onRateLimitEvent(RateLimitEvent event) {
        meterRegistry.counter("gateway.rate_limit.blocked",
            "user", event.getUserOa(),
            "route", event.getRoute(),
            "reason", event.getReason()
        ).increment();

        log.warn("用户 {} 触发限流: route={}, reason={}",
            event.getUserOa(), event.getRoute(), event.getReason());
    }
}
```

### 10.8 限流返回格式

被限流的请求统一返回：

```json
{
  "code": 429,
  "message": "请求过于频繁，请稍后再试",
  "data": {
    "retry_after_sec": 30,
    "limit_type": "user_rate_limit",
    "current_usage": 205,
    "limit": 200
  }
}
```

---

## 12. 鉴权与接入流程

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

## 13. 文档体系

| 通道 | 文档类型 | 生成方式 |
|------|---------|---------|
| REST API | OpenAPI 3.1 | SpringDoc 扫描 `@Operation` / `@Schema` |
| MCP Tool | MCP JSON Schema | Spring AI 自动反射 + `@Schema` 增强 |
| 文档门户 | Knife4j UI | 聚合展示 |

## 14. Roadmap

```
Phase 1（当前）:  短查询 + 无状态 + Nginx 一致性哈希灰度
Phase 2（后续）:  长对话 + MCP 会话 Redis 化 + 全链路监控
Phase 3（远期）:  指标语义层 AI 辅助录入 + 智能指标推荐
```

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
