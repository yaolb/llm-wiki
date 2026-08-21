---
type: topic
tags: [KV Cache, Prompt Caching, 推理优化, 成本优化, DeepSeek, MLA, 大模型推理]
created: 2026-08-21
updated: 2026-08-21
related_sources: 1
---

# 各大模型厂商 KV-Cache 处理方式全景对比

## 概述

KV Cache（Key-Value Cache）是 Transformer 大模型推理加速的核心机制：自回归生成时缓存已计算的 Key/Value 张量，避免重复计算历史 token。没有 KV Cache 推理速度会慢 100 倍以上；代价是上下文越长显存占用越大（通常是推理显存瓶颈）。

厂商 KV-Cache 策略分三个层面：**推理层**（存储格式与压缩：MLA/GQA/MQA）、**缓存层**（Prefix/Prompt Cache 命中策略）、**计费层**（命中折扣定价）。

## 六厂商对比总览

| 厂商 | 控制方式 | 存储介质 | 最小匹配粒度 | 缓存命中价 | 等效折扣 |
|------|---------|---------|------------|-----------|---------|
| **Claude** | 显式（cache_control 断点） | 显存(HBM) | 1,024 tokens | 输入价 10% | ~90% off |
| **GPT-5** | 隐式/自动 | 显存(HBM) | 1,024 tokens / 128 增量 | 输入价 50% | ~50% off |
| **Gemini** | 混合（隐式 + 显式 CachedContent） | 显存(HBM) | 1,024 tokens | 隐式 ~25% / 显式 ~10% | ~75-90% off |
| **DeepSeek** | 隐式/自动 | **磁盘(SSD)** | **64 tokens（业界最细）** | ~10% | ~90% off |
| **Qwen3** | 混合 | 显存(HBM) | ~1,024 tokens | 隐式 ~20% / 显式 ~10% | ~80-90% off |
| **xAI Grok** | 隐式/自动 | 显存(HBM) | — | ~25% | ~75% off |

**关键差异**：DeepSeek 是唯一将 KV Cache 写到磁盘的厂商，依赖 MLA 压缩将 KV Cache 缩小约 4 倍，从而经济地持久化到 SSD。

## 各厂商要点

### DeepSeek —— 磁盘缓存 + MLA 压缩
- **落盘规则**：请求结束位置落盘、公共前缀检测落盘、按固定 token 间隔落盘
- **命中规则**：缓存前缀是独立完整单元，后续请求必须完整匹配；Sliding Window Attention 影响存取判别
- **API**：默认开启零改代码；返回 `prompt_cache_hit_tokens` / `prompt_cache_miss_tokens`
- **实测**（2026-05，~7K 前缀）：命中率 96%，命中成本 -74%，命中 TTFT 2.93s vs 未命中 ~4.0s
- **优劣势**：磁盘持久化寿命长、64 token 细粒度、中文场景命中率可达 98%；劣势是仅限自家模型、未命中延迟较高

### Claude —— 显式断点缓存
- `cache_control` 手动标记，最多 4 个断点分层缓存；最小缓存块 1,024 tokens；TTL 5 分钟滑动（默认）/ 1 小时
- **写入付费**（输入价 125%/200%），读取仅 10%；不支持隐式回退
- 实测：haiku-4-5 命中 TTFT 1.31s（~2× 加速）；复杂 Agent（15+ 步）流量 85%+ 命中率

### GPT-5 —— 自动内存缓存
- 完全自动，前缀 ≥1,024 tokens 且与近期请求匹配即生效；TTL 约 5-60 分钟；写入免费；命中折扣 50%；无法强制命中
- 与 DeepSeek API 格式兼容，迁移成本低

### Gemini —— 混合模式
- 隐式自动匹配（~75% off）；显式 CachedContent API 自定义 TTL（最长 24 小时），按小时付存储费，读价 ~10%
- 显式模式最小 32K tokens（早期模型）；缓存对象与区域绑定

### Qwen3 —— 混合模式
- 隐式永远开启（~20% 价格）；显式命中 ~10%、写入 125% 溢价；TTL 默认 5 分钟可配置
- 仅 qwen3-max 和 qwen3.5-plus 支持显式缓存；文档不完善建议实测

## 按场景最佳选择

| 场景 | 推荐 | 原因 |
|------|------|------|
| 英文聊天，全球用户 | Claude Haiku / GPT-5 Nano | 深度折扣 + 小模型低延迟 |
| 中文聊天，国内用户 | DeepSeek V4 Flash / Qwen3.5 Flash | 小时级缓存 + 中文低成本 |
| 英文 RAG（高质量） | Claude Sonnet + 多断点 | 分层 prompt 高效缓存 |
| 中文 RAG（成本敏感） | DeepSeek V4 Flash | 64 token 粒度容忍检索排序变化 |
| 长文档问答（零星） | Gemini 2.5 Pro 显式模式 | 24 小时 TTL |
| 复杂 Agent（15+ 步） | Claude Sonnet + 4 断点 | 85%+ 命中率 |
| 多模型门户 | 统一网关（Swfte/LiteLLM） | 单一 SDK 统一缓存控制 |

## Prompt 优化最佳实践

- **顺序编排**：KV Cache 只匹配前缀，prompt 按"最稳定 → 最变化"排列：system prompt（不变）→ tool definitions（少变）→ 检索上下文 → user message（多变）
- **值得缓存的类型**：长系统提示词、检索上下文、Few-shot 示例、工具定义（10+ JSON Schema）、对话历史、多文档 RAG
- **命中率指标**：健康 Agent 应用 60-90%；低于 30% 通常意味着随机变量（时间戳、随机 ID）侵入了缓存区域

## 底层架构演进

### 注意力头压缩技术

| 技术 | 提出者 | KV Cache 缩放 |
|------|--------|--------------|
| MHA | 原始 Transformer | 1× |
| MQA | Google | ~1/8× |
| GQA | Google | 1/2~1/8× |
| **MLA** | **DeepSeek** | **~1/4×**（KV 投影到低维潜空间） |

### 推理框架 KV Cache 管理演进
1. 连续缓存（预分配固定大小显存，碎片化严重）
2. PagedAttention（vLLM，分页式管理，类似虚拟内存）
3. 异构缓存（GPU + CPU + SSD 多层存储）
4. 统一内存架构（单地址空间管理所有层次）

## 总结

- **最省钱**：DeepSeek（10% 价自动磁盘缓存，无写入费）
- **最优控制**：Claude（4 断点显式标记）
- **最低迁移**：GPT-5 / DeepSeek（OpenAI 兼容格式，自动缓存）
- **最长 TTL**：Gemini 显式（24h）/ DeepSeek（数天）
- **最细粒度**：DeepSeek（64 tokens）
- **最佳中文**：DeepSeek / Qwen；**最佳英文**：Claude / GPT-5

## 相关概念
- [[Prompt Caching]] — KV Cache 的上层应用：缓存 System Prompt 与常用上下文，节省 50-90% 输入 Token
- [[混合专家模型（Mixture of Experts, MoE）]]

## 相关实体
- [[DeepSeek]] — MLA 架构的提出者，磁盘 KV Cache 唯一厂商
- [[Claude Code]] — 依赖显式断点缓存控制 Agent 成本

## 参考来源
- DeepSeek API 文档：https://api-docs.deepseek.com/zh-cn/guides/kv_cache
- Synthorai：LLM Prompt Caching #2: Compare Claude, GPT, Gemini, DeepSeek
- SWFTE：Prompt Caching (June 2026)
- 完整原始素材：[[../raw/kv-cache-providers-comparison.md]]
