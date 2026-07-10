# 星火灰度上线方案

> 来源：58 美事文档
> 作者：张自博 (zhangzibo) | 负责人：严志 (yanzhi)
> 创建：2021-11-15 | 最后修改：2022-04-26
> 链接：https://docs.58corp.com/#/space/1518924893230518275

## 背景

星火系统上线依赖云平台，每次上线均为全量上线，存在风险。尤其是出现不兼容性升级时（如过滤器组件重构），会导致用户报表不可用，需要手动恢复。

## 目标

- 内外部系统前后端均可平滑上线
- 提供多种灰度策略：基于用户 / 流量 / 接口 / IP / 项目组等业务维度
- 提升系统拓展能力（限流、熔断降级、全链路追踪等微服务基础能力均可接入）

## 核心架构

网关层：Spring Cloud Gateway
注册中心 & 配置中心：Nacos
灰度路由：自定义 Gateway 过滤器继承 ReactiveLoadBalancerClientFilter

## 云平台如何区分灰度环境 vs 线上环境

这是核心机制——通过云平台「配置分组 → 高级 → 环境变量配置」覆盖服务名：

稳定环境：项目 application.yml 中的 spring.application.name = xh-internal-admin-online
灰度环境：云平台配置分组环境变量 spring.application.name = xh-internal-admin-online_gray

这样同一个 jar 包启动后，由于云平台分组的「环境变量覆盖」机制，注册到 Nacos 的是不同的 service name，天然形成两套隔离的节点池。

## 灰度配置结构（Nacos JSON）

灰度配置发布在 Nacos 配置中心，Gateway 通过监听实现动态路由：

```json
{
  "grayItems": [{
    "config": [{
      "grayRatio": 50,
      "predicaterGroups": [
        {
          "predicaters": [
            { "includes": ["zhangsan","lisi"], "type": "COOKIE", "paramName": "xh_uname" },
            { "includes": ["127.0.0.1"], "regex": "192.168.*", "type": "IP" }
          ]
        }
      ],
      "routeKeys": [
        { "type": "IP" },
        { "type": "COOKIE", "paramName": "xh_uname" }
      ]
    }],
    "service": "xh-internal-admin-online"
  }],
  "routeKeys": [
    { "type": "IP" },
    { "type": "COOKIE", "paramName": "xh_uname", "saltValue": 1 }
  ]
}
```

## 灰度分流逻辑

请求 → Predicater 匹配（IP/COOKIE/HEADER/PATH 多维度断言）
  ├─ 未匹配 → 稳定集群
  └─ 匹配 → CRC32(设备ID) % 100 < grayRatio ?
              ├─ 是 → 灰度集群
              └─ 否 → 稳定集群

## 监控

记录每次请求的 trace_id、gray_matched、source_host、target_service、target_host、status_code、cost_ms 入 Kafka → ClickHouse，制作对比报表。
