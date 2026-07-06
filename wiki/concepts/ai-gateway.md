---
type: concept
tags: [API网关, 模型路由, 负载均衡, 成本优化, Agent基础设施]
created: 2026-07-06
updated: 2026-07-06
related_sources: 1
---

# AI 网关与模型路由

## 一句话定义

AI 网关是位于 AI 应用与多个模型提供商之间的中间层服务，统一管理 API 接入、请求路由、负载均衡和额度分配，使应用无需感知底层模型变更。

## 核心原理

```
AI 应用 → AI 网关 → 模型 A（如 OpenAI）
                   → 模型 B（如 Claude）
                   → 模型 C（如 Gemini）
                   → ...（自动 fallback）
```

网关层处理：
1. **统一接口**：将不同模型的 API 封装为兼容 OpenAI 格式
2. **自动路由**：根据模型能力、成本、延迟、可用性智能分发
3. **额度管理**：监控各 provider 的免费/付费额度，超限自动切换
4. **故障转移**：模型不可用时无缝切换到备用模型

## 常见开源方案

| 项目 | 特点 |
|------|------|
| **One API** / **New API** | 老牌 API Key 管理与路由，自动 fallback |
| **AIClient2API** | 支持 OpenAI/Gemini/Claude/Grok/千问 等，本地一键部署 |
| **APIPark** | LLM 代理/网关，跨平台额度自动调用 |
| **Higress** | 基于 Istio + Envoy 的云原生 AI 网关，Docker 一键启动 |

## 典型应用场景

### 零成本调用（聚合免费额度）

将 237 个 AI 服务的免费额度聚合管理：
- Google AI Studio：Gemini 免费 1500 次/天
- Groq：LPU 推理，极速免费
- Cerebras：每天 100 万 token
- NVIDIA NIM：120+ 开源模型一年免费
- OpenRouter：30+ 免费模型
- xAI Grok：$25 初始 + $150/月
- SiliconFlow：开源模型推理平台

### 企业级多模型管理

- 按任务分配模型（简单任务用小模型省钱，复杂任务用大模型）
- 灰度切换模型版本
- 用量监控与成本分摊

## 与 AI Agent 的关系

AI 网关是 Agent 基础设施的关键组件。Agent 通过网关访问多个模型，而不是硬编码单一 provider，从而获得：
- **弹性**：模型故障自动切换
- **经济性**：优先使用免费/低成本模型
- **兼容性**：新模型出现时无缝接入

## 相关概念
- [[AI Agent]]
- [[MCP 模型上下文协议]]

## 相关实体
- [[OpenClaw]]（内置多模型路由能力）

## 延展阅读
- [One API GitHub](https://github.com/songquanpeng/one-api)
- [Higress 官网](https://higress.ai)
