---
type: entity
tags: [工具, LLM, 微调, 开源]
created: 2026-07-04
updated: 2026-07-10
related_sources: 1
source_url: https://github.com/unslothai/unsloth
---

# Unsloth

## 概述

Unsloth 是一个开源的大语言模型高效微调框架，通过 CUDA/Triton 内核级优化，在消费级 GPU 上实现训练速度 2~5 倍提升、显存占用降低 70%~80%。2026 年推出无代码 Web UI "Unsloth Studio"。

## 核心信息
- **全称**：Unsloth
- **类型**：工具（模型训练/微调框架）
- **相关方**：开源社区
- **GitHub**: [unslothai/unsloth](https://github.com/unslothai/unsloth)
- **官网**: [unsloth.ai](https://unsloth.ai)
- **时间线**：2026 年推出 Unsloth Studio

## 详细说明

### 技术原理

通过手动优化 CUDA 和 Triton 算子，替换 PyTorch 默认实现中的低效部分。重点优化注意力机制和前馈网络中的矩阵运算。

### 兼容模型

Llama-3、Mistral、Phi-4、Gemma、Qwen、DeepSeek 等主流开源 LLM。

### 性能指标

- 标准模型训练：2~5 倍加速
- MoE 模型训练：最高 12 倍加速
- 显存节省：70%~80%
- 最低硬件要求：3GB RAM

## 相关摘要
- [[Unsloth — 消费级 GPU 高效微调大模型]]

## 延展阅读
- [Unsloth 官网](https://unsloth.ai)
- [Unsloth GitHub](https://github.com/unslothai/unsloth)
