---
type: entity
tags: [模型融合, 知识蒸馏, Reallm-Labs, LLM融合框架]
created: 2026-07-05
updated: 2026-07-05
related_sources: 1
---

# InfiFusion

## 概述
InfiFusion 是由 Reallm-Labs (InfiX-ai) 提出的统一 LLM 融合框架，首个能够**同时融合多达 4 个 14B~24B 异构模型**的系统。核心创新在于增强版 Universal Logit Distillation (ULD) 配合 Top-K selection 和 Logits Standardization。

## 核心信息
- **全称**：InfiFusion: A Unified Framework for Enhanced Cross-Model Reasoning via LLM Fusion
- **类型**：模型 / 融合框架
- **相关方**：Reallm-Labs (InfiX-ai)
- **时间线**：
  - 2025.01 — arXiv 论文发布 (arXiv:2501.02795)
- **论文**：[InfiFusion](https://arxiv.org/abs/2501.02795)
- **模型**：[InfiFusion-14B](https://huggingface.co/InfiX-ai/InfiFusion-14B)
- **许可证**：MIT

## 核心技术方案

### 融合框架
InfiFusion 提出两种融合策略：
1. **Pairwise Fusion (InfiFusion_p)**：逐个源模型分别蒸馏到 pivot 模型，然后合并
2. **Unified Fusion (InfiFusion_u)**：所有源模型同时蒸馏到 pivot 模型

### 关键技术
- **Universal Logit Distillation (ULD)** — 统一 logits 蒸馏，不受模型架构差异影响
- **Top-K Selection** — 只取 logits 分布中置信度最高的 K 个 token 参与蒸馏，过滤噪声
- **Logits Standardization** — 不同模型的 logits 分布标准化后再参与蒸馏，解决量纲不一致问题

### 训练数据
构建了 130K 条多任务训练数据：
| 领域 | 数据量 | 来源 |
|------|--------|------|
| 通用推理 | 52K | Infinity-Instruct |
| 数学 | 39K | NuminaMath-1.5，DeepSeek-R1 蒸馏答案 |
| 代码 | 39K | KodCode-V1-SFT-R1，沙箱验证过滤 |

### 惊人效率
- 完整训练仅需 **160 H800 GPU 小时**（约 1 天单机完成）
- 传统 LLM 训练需要数百万 GPU 小时

## 性能表现
在 11 个基准测试（推理/编码/数学/指令遵循）中超越 Qwen-2.5-14B-Instruct 和 Phi-4 等 SOTA 模型。

## 模型参数
- 参数量：14B
- 架构：密集 Decoder-only Transformer
- 最大上下文：16K tokens
- 融合输入长度：4K tokens
- 数据类型：bfloat16

## 相关概念
- [[模型融合（Model Fusion / Model Merging）]]

## 延展阅读
- [InfiFusion-14B](https://huggingface.co/InfiX-ai/InfiFusion-14B) — HuggingFace 模型页面
- [InfiFusion Collection](https://huggingface.co/collections/InfiX-ai/infifusion-model-fusion-and-model-merging)
