---
type: entity
tags: [模型, LLM, 深度求索, 开源, 中国]
created: 2026-07-10
updated: 2026-08-19
source_url: https://platform.deepseek.com
---

# DeepSeek

## 概述

DeepSeek（深度求索）是中国 AI 公司深度求索（DeepSeek）开发的大语言模型系列。以创新的 MoE 架构、极致的训练效率和开源开放著称，DeepSeek-V2/V3 和 DeepSeek-R1 在业界引起广泛关注。2026-08-13 发布旗舰正式版 DeepSeek V4 Pro 0813，并开源配套 Agent 框架 DeepSeek Harness v0.1。

## 核心信息
- **开发者**：深度求索（DeepSeek）
- **代表模型**：DeepSeek-V2、DeepSeek-V3、DeepSeek-R1、DeepSeek-V4 Pro 0813
- **GitHub**: [deepseek-ai/DeepSeek-LLM](https://github.com/deepseek-ai/DeepSeek-LLM)
- **官网**: [platform.deepseek.com](https://platform.deepseek.com)
- **架构特色**：Multi-head Latent Attention + DeepSeekMoE（共享专家 + 细粒度专家）

## DeepSeek V4 Pro 0813（2026-08-13 正式版）

- **规模**：1.6T 总参数 / 49B 激活参数 / 1M 上下文窗口
- **推理强度**：Non-think / Think High / Think Max 多档可调
- **加速**：DSpark 推测解码模块
- **官方自测（自家 Harness）**：Terminal-Bench 2.1 = 87.9（预览版 72.1）、DeepSWE 12.8→62.7、HLE 42.7→60.0（带工具）、Toolathlon-Verified 74.1、DSBench-FullStack 71.1、DSBench-Hard 67.2
- **对标**：与 Opus-4.8、Fable 5、GLM-5.2/5.3、Kimi K3 同梯队竞争；网络安全（漏洞发现）表现突出
- **局限**：沙盒终端任务、复杂 Excel 财务模型生成仍有挑战；部分第三方测评认为编码实际表现不如官方数据亮眼
- **API 定价**：2026-08-16 起高峰/非高峰定价（非高峰输入 0.66 美元/M token、输出 1.98 美元/M token）
- **能力实现损失**：社区报告指出其 Agent 后训练对官方 Minimal 工具条件存在接口过拟合，且推理呈路径依赖的"思维链二极管"现象——首轮 prompt 微小变化可引发推理行为"跃迁"，路径承诺难被后续指令改变

## DeepSeek Harness v0.1（2026-08-13 开源）

- **定位**：DeepSeek 内部使用的 Agent 框架，目标成为 OpenAI Codex / Claude Code 的开放替代
- **协议**：MIT 许可证；基于 Cordis 插件系统，"一切皆插件"（工具、沙箱、会话、UI 均可替换组合）
- **能力**：连续会话日志（可恢复/分支/重放）、极简模式（仅 shell + 文件编辑器，官方基准测试即用此配置）、原生支持 OpenAI Responses API、可接入其他/本地模型提供商、内置四种插件配置模式

## 特点
- 创新的 MoE 架构设计（DeepSeekMoE）
- 极高的训练效率，成本远低于同级别模型
- DeepSeek-R1 在推理任务中表现突出
- 完全开源，社区友好

## 相关概念
- [[混合专家模型（Mixture of Experts, MoE）]]
- [[模型微调（Fine-tuning）]]
- [[上下文工程 (Context Engineering)]] — 推理时控制的上游方法论

## 相关实体
- [[Unsloth]] — 支持 DeepSeek 高效微调
- [[J-Space Cognition Suite]] — 推理时控制协议插件，让 V4 Pro 0813 在多项基准上超越 Fable 5

## 相关摘要
- [[J-Space 插件让 DeepSeek V4 Pro 0813 全面超越 Fable 5]]（topics/j-space-deepseek-v4-pro-0813.md）
- [[各大模型厂商 KV-Cache 处理方式全景对比]]（topics/kv-cache-providers-comparison.md）— DeepSeek MLA 压缩 KV Cache ~4×，唯一磁盘缓存厂商，64 token 细粒度命中

## 相关概念
- [[混合专家模型（Mixture of Experts, MoE）]]
