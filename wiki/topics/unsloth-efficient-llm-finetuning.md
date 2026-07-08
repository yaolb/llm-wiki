---
type: topic
tags: [模型训练, LLM, 微调, 开源]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/Unsloth-3912a6ec1af881d19976f9166662acd2
---

# Unsloth — 消费级 GPU 高效微调大模型

## 概述

Unsloth 是一个开源框架，专注在**消费级 GPU** 上高效微调大语言模型（LLM）。通过内核级优化（手动编写 CUDA/Triton 算子），训练速度提升 2~5 倍，MoE（混合专家）模型可达 12 倍，显存占用减少 70%~80%。兼容 Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流模型。

2026 年推出 **Unsloth Studio** 无代码 Web UI，支持 Mac/Windows/Linux，最低仅需 3GB RAM 即可运行。

## 核心能力

1. **速度优化**：训练速度 2~5 倍提升，MoE 模型加速高达 12 倍
2. **显存效率**：显存占用降低 70%~80%，使消费级 GPU（如 RTX 3060）也能微调 7B 级别模型
3. **广泛兼容**：支持 Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流开源模型
4. **无代码界面**：Unsloth Studio 让非技术用户也能进行模型微调

## 关键数据

- MoE 模型训练加速：最高 **12 倍**
- 显存节省：**70%~80%**
- 最低运行要求：**3GB RAM**
- 平台支持：Mac / Windows / Linux

## 当前状态

2026 年推出的 Unsloth Studio 标志着该项目从命令行工具向**全民化 AI 训练**的转变——不再局限于开发者群体。

## 相关实体
- [[Unsloth]]
- [Llama-3](https://llama.meta.com)（待创建）
- [Mistral](https://mistral.ai)（待创建）
- [DeepSeek](https://platform.deepseek.com)（待创建）
- [Qwen](https://github.com/QwenLM/Qwen)（待创建）

## 相关概念
- [[模型微调（Fine-tuning）]]
- [[混合专家模型（Mixture of Experts, MoE）]]
- [CUDA 优化](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html)
