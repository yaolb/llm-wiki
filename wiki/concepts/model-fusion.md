---
type: concept
tags: [模型融合, LLM, 知识融合, 模型合并]
created: 2026-07-05
updated: 2026-07-05
related_sources: 3
---

# 模型融合（Model Fusion / Model Merging）

## 一句话定义
模型融合是将多个大语言模型（LLM）通过特定算法合并为一个统一模型的技术，旨在整合不同模型的知识和能力，无需从零训练。

## 核心原理
模型融合的核心思想是：**经过独立训练的模型在参数空间中存在互补性**。通过恰当的算法，可以将各自的知识蒸馏或合并到单一模型中。与模型集成（Ensemble）不同，融合后的模型不增加推理开销（仍为单模型）。

## 两条技术路线

### 路线一：参数空间合并（Model Merging）
直接在权重层面合并多个模型，通常**无需额外训练**，计算成本极低。

| 方法 | 原理 | 特点 |
|------|------|------|
| **SLERP** | 球面线性插值，在单位球面上平滑过渡两个模型的权重向量 | 仅支持2个模型，最流行 |
| **TIES-Merging** | 三步：Trim（保留 top-k% 显著参数）→ Elect Sign（统一符号方向）→ Disjoint Merge（排除零值后取平均） | 支持多模型，解决参数冲突 |
| **DARE** | 随机丢弃大部分 delta 参数后重缩放合并 | 减少冗余，适合稀疏融合 |
| **SCE** | Select（选方差最大的 top-k%）→ Calculate（算合并系数）→ Erase（过滤少数方向） | FuseAI 核心算法，矩阵级别的精细融合 |

### 路线二：知识蒸馏融合（Knowledge Fusion）
通过蒸馏训练将多个源模型的知识迁移到目标模型，需要**轻量级训练**。

| 方法 | 原理 | 特点 |
|------|------|------|
| **ULD（Universal Logit Distillation）** | 蒸馏源模型的 logits 输出到目标模型 | InfiFusion 基础 |
| **InfiFusion 增强版** | ULD + Top-K selection + Logits Standardization | 支持融合 4 个异构模型 |
| **FuseChat 双阶段** | SFT 对齐分布 → DPO 学习偏好 | 聊天模型融合 |
| **FuseLLM** | 提取异构模型知识 → 轻量持续训练 | 支持不同架构模型 |

## 核心挑战
1. **异构架构对齐**：不同模型（如 Llama 和 MPT）的 tokenizer 和层结构不同，需统计对齐方法
2. **参数冲突**：不同模型对同一参数的调整方向相反（正 vs 负），需统一的符号裁决
3. **信息损失**：合并过程中会丢失一部分独有知识，需权衡取舍
4. **评估困难**：缺乏标准化的融合质量评估基准

## 技术图谱

```
模型融合
├── 参数空间合并（无需训练）
│   ├── SLERP — 球面线性插值（2模型）
│   ├── TIES-Merging — Trim+Elect+Disjoint（多模型）
│   ├── DARE — 随机丢弃+重缩放
│   └── SCE — Select+Calculate+Erase
│
└── 知识蒸馏融合（轻量训练）
    ├── InfiFusion — ULD + Top-K + Logits Standardization
    ├── FuseLLM — 持续蒸馏异构模型
    ├── FuseChat — SFT + DPO 两阶段聊天融合
    └── FuseO1 — Long-Long / Long-Short 推理融合
```

## 应用场景
- **低成本创建 SOTA 模型**：Open LLM Leaderboard 榜首多来自模型融合
- **领域能力融合**：如 Base 模型 + 代码模型 + 数学模型的融合
- **推理能力提升**：Long-CoT 与 Short-CoT 模型的推理策略融合
- **模型压缩**：将大模型能力蒸馏到轻量模型（如 70B → 8B）

## 相关实体
- [[FuseAI]]
- [[InfiFusion]]
- [[mergekit]]

## 相关概念
- [[模型微调（Fine-tuning）]]
- [[AI 编程（AI Programming / AI Coding）]]

## 延展阅读
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models) — HuggingFace 官方教程
- [Model Merging Paper Collection](https://huggingface.co/collections/osanseviero/model-merging-65097893623330a3a51ead66)
