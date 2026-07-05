---
type: entity
tags: [模型融合, 开源社区, 中山大学, 腾讯]
created: 2026-07-05
updated: 2026-07-05
related_sources: 3
---

# FuseAI

## 概述
FuseAI 是一个开源模型融合研究社区，由中山大学和腾讯 AI Lab 发起，专注于将多个异构大模型的知识和能力融合为统一模型。其核心理念是：与其从头训练新模型，不如将已有模型的独特能力融合在一起。

## 核心信息
- **全称**：FuseAI: Knowledge Fusion of Large Language Models
- **类型**：开源研究社区
- **相关方**：中山大学、腾讯 AI Lab、Fanqi Wan 等
- **时间线**：
  - 2024.08 — FuseChat (arXiv 2408.07990) 发布
  - 2024.12 — FuseChat-3.0 发布（SOTA 8B LLM）
  - 2025.01 — FuseO1-Preview 发布（AIME24 74.0分）
  - 2025.02 — WRPO 论文被 ICLR 2025 录用

## 关键项目

### FuseLLM（ICLR 2024）
首个将不同架构的 LLM 进行知识融合的工作。融合了 Llama-2-7B、OpenLLaMA-7B、MPT-7B 三个异构模型。
- **方法**：从多个源模型中提取知识，通过轻量级持续训练合并到统一模型
- **关键创新**：统计对齐方法解决了不同 tokenizer / 词表的对齐难题

### FuseChat
聚焦于聊天模型的知识融合。
- **FuseChat-3.0**：采用隐式融合方法（SFT + DPO），将 4 个 70B+ 大模型（Gemma-2-27B / Mistral-Large / Qwen-2.5-72B / Llama-3.1-70B）的能力蒸馏到 1B~8B 的小模型中
- **关键成果**：Llama-3.1-8B 融合后在 AlpacaEval-2 / Arena-Hard 上达到 SOTA

### FuseO1-Preview
专注于 System-II 推理能力的融合。
- **Long-Long 推理融合**：多个 Long-CoT 推理模型融合 → AIME24 74.0（接近 OpenAI o1 的 79.2）
- **Long-Short 推理融合**：Long-CoT 与 Short-CoT 模型融合 → 兼具两种推理模式能力
- **核心技术**：SCE 合并算法

## 核心技术：SCE 合并（Select-Calculate-Erase）
FuseAI 在参数空间合并阶段的核心算法：
1. **Select（选择）**：筛选出方差最大的 top-k% 参数元素（最显著的变化方向）
2. **Calculate（计算）**：基于选中元素的平方和为每个目标模型确定合并系数
3. **Erase（擦除）**：过滤"少数方向"的参数冲突，统一全局符号

无需额外训练即可实现矩阵级别的精细融合。

## 相关概念
- [[模型融合]]
- [[Spec驱动开发 SDD]]

## 延展阅读
- [FuseAI HuggingFace](https://huggingface.co/FuseAI)
- [FuseChat Paper](https://arxiv.org/abs/2408.07990)
- [FuseO1-Preview Blog](https://huggingface.co/blog/Wanfq/fuseo1-preview)
