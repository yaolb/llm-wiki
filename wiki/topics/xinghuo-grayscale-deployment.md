---
type: topic
tags: [灰度发布, 星火, 58, Spring Cloud Gateway, Nacos, 云平台]
created: 2026-07-10
updated: 2026-07-10
source_url: https://docs.58corp.com/#/space/1518924893230518275
---

# 星火灰度上线方案 — 云平台环境隔离与灰度路由

## 概述

58 同城星火系统（数据分析 BI 平台）的灰度上线方案。核心思路是 **云平台灰度分组 + Nacos 注册/配置中心 + Spring Cloud Gateway 自定义过滤器** 三层联动，实现线上线下环境隔离与流量按需调度。

## 云平台如何区分灰度环境和线上环境

这是整套方案的**核心机制**：

### 机制：环境变量覆盖服务名

云平台的「配置分组」提供高级设置——**环境变量配置**，可以在部署时覆盖应用自身的 `application.yml` 配置：

> 云平台 → 配置分组 → 高级 → 环境变量配置
> 增加 `spring.application.name` = 对应灰度分组服务名

**效果**：同一个 jar 包，部署到不同分组时注册到 Nacos 的 service name 不同：

| 环境 | 配置来源 | spring.application.name 值 | Nacos 注册名 |
|------|----------|--------------------------|-------------|
| 线上（稳定分组） | 项目 application.yml 内置 | `xh-internal-admin-online` | `xh-internal-admin-online` |
| 灰度（灰度分组） | 云平台环境变量覆盖 | `xh-internal-admin-online_gray` | `xh-internal-admin-online_gray` |

### 完整环境准备

**前端**：WOS（58 对象存储）中为每个应用新建灰度 bucket
- 星图（stable / canary）
- 星火活动（stable / canary）
- 星火工作台（stable / canary）
- 星火驾驶舱（stable / canary）

**后端**：云平台新建灰度分组
- 为每个后端应用（星图、星火活动、星火工作台、星火驾驶舱）创建对应的灰度分组
- 在灰度分组的「高级配置」中设置服务名属性

**基础设施**：
- 新建 Nacos 集群（3 节点），域名 `xinghuo.nacos.58corp.com`，专用 MySQL 数据库
- 新建 Gateway 云平台集群
- 新建 `xinghuo-gateway` 模块用于自定义灰度过滤器开发

### 项目改动量

星火后端只需在启动类增加 `@EnableDiscoveryClient` 注解，配置文件增加 Nacos 服务地址和服务名，即可接入服务发现。**灰度配置不需要改代码**——项目配置文件使用稳定分组，灰度分组的配置通过云平台环境变量注入。

## 灰度路由实现

### 网关过滤器

自定义过滤器继承 `ReactiveLoadBalancerClientFilter`（低版本 Spring Cloud 继承 `LoadBalancerClientFilter`），核心逻辑：

1. 从 Nacos 动态监听灰度配置 JSON
2. 从 Request 提取路由 key（IP / Cookie 中的用户标识 / URL / HEADER 等）
3. 通过 Predicater 断言组匹配灰度条件（组间 OR、组内 AND）
4. 通过 CRC32(设备ID) % 100 < grayRatio 控制灰度比例
5. 通过 `exchange.getAttributes().put(GATEWAY_REQUEST_URL_ATTR, finalUrl)` 改变路由目标

### 灰度配置 JSON 结构

```json
{
  "grayItems": [
    {
      "config": [
        {
          "grayRatio": 50,
          "predicaterGroups": [
            {
              "predicaters": [
                {
                  "excludes": ["yutian", "zhaosi"],
                  "includes": ["zhangsan", "lisi"],
                  "paramName": "xh_uname",
                  "regex": ".*ming",
                  "type": "COOKIE"
                },
                {
                  "includes": ["127.0.0.1"],
                  "regex": "192.168.*",
                  "type": "IP"
                }
              ]
            }
          ],
          "routeKeys": [
            { "saltValue": 0, "type": "IP" },
            { "paramName": "xh_uname", "type": "COOKIE" }
          ]
        }
      ],
      "service": "xh-internal-admin-online"
    }
  ],
  "routeKeys": [
    { "saltValue": 0, "type": "IP" },
    { "paramName": "xh_uname", "type": "COOKIE", "saltValue": 1 }
  ]
}
```

### 灰度分流判断流程

```
请求到达
 → 灰度过滤器拦截
 → 从 Nacos 读取灰度配置（动态监听，实时生效）
 → Predicater 断言匹配
    ├─ 断言条件：type=IP / COOKIE / HEADER / PATH / HOST / URL
    ├─ includes（包含）、excludes（排除）、regex（正则）
    └─ 组间 OR、组内 AND
    ├─ 未命中任何断言 → 路由到【稳定集群】
    └─ 命中断言 → 进入比例控制
       → 获取设备 ID（IP / Cookie 中的 xh_uname / Session userId）
       → CRC32(设备ID) % 100
       ├─ 余数 < grayRatio → 路由到【灰度集群】的对应节点
       └─ 余数 >= grayRatio → 路由到【稳定集群】
```

### 灰度上线完整流程

```
① 开发完成，部署到灰度分组（前后端）
② Nacos 配置灰度策略：先按云账号 IP 灰度测试人员
③ 逐步放大比例：10% → 30% → 100%
④ 观察监控报表，对比 gray_matched=true/false 的错误率
⑤ 验证通过 → 全量上线
⑥ 回滚：grayRatio 改 0 → 流量全部回到稳定集群
```

升级顺序：星图 → 星火活动 → 外部星火 → 内部星火

## 监控体系

每次请求记录日志 → Kafka → ClickHouse：

| 字段 | 说明 |
|------|------|
| trace_id | UUID |
| url | 请求 URL |
| domain | 域名 |
| xh_route_keys | 灰度路由 key |
| gray_matched | 是否命中灰度 |
| source_host | 来源 |
| target_service | 目标服务 |
| target_host:port | 目标节点 |
| status_code | HTTP 状态码 |
| err_msg | 错误信息 |
| cost_ms | 耗时 |
| create_time | 时间 |

报表维度：灰度 vs 稳定的错误率对比、灰度流量占比、最新错误记录

## 与指标网关灰度方案对比

| 维度 | 指标网关（前一文档） | 星火 |
|------|--------------------|------|
| 网关层 | Nginx + OpenResty Lua | Spring Cloud Gateway |
| 注册中心 | Nacos（metadata.version） | Nacos（灰度分组名覆盖 service name） |
| 环境区分 | `metadata.version = canary-2.1.0` | 云平台环境变量覆盖 `spring.application.name` |
| 分流方式 | Token 哈希 + split_clients 权重 | CRC32 + grayRatio + Predicater 断言 |
| 灰度策略 | 权重比例 | 多维断言（IP/COOKIE/HEADER/PATH）+ 比例 |
| 动态刷新 | Nacos 配置监听 | Nacos 配置监听 |
| 架构风格 | Nginx 反向代理层 | 微服务网关层 |

## 相关概念
- [[灰度发布（Canary Release）]]
- [[58 指标 API 网关方案设计]]

## 拓展阅读
- [Spring Cloud Gateway 官方文档](https://spring.io/projects/spring-cloud-gateway)
- [Nacos 官方文档](https://nacos.io)
