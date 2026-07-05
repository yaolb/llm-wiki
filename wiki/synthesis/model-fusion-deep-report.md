---
type: synthesis
tags: [模型融合, LLM融合, 综述, 对比分析, 评估]
created: 2026-07-05
updated: 2026-07-05
related_sources: 6
---

# LLM 模型融合深度报告：原理、路线、实现与评测

## 概述

模型融合（Model Fusion / Model Merging）是 LLM 领域 2024-2025 年间发展最快的技术方向之一。其核心思想很简单：**与其从头训练一个新模型，不如把多个已经训练好的模型"合体"**。这使得在几乎没有额外训练成本的情况下，创造出性能更强的模型成为可能。

本报告从原理、技术路线、实现方式、评测四个维度进行系统性梳理。

---

## 一、背景与动机

### 为什么需要模型融合？

| 挑战 | 融合方案 |
|------|---------|
| 训练一个 SOTA 模型需数百万 GPU 小时 | 融合只需几小时到几天 |
| 不同模型有不同专长（数学、代码、对话） | 融合可整合多模型能力于一身 |
| 微调多个模型成本高，部署多个模型成本更高 | 融合后单模型推理，不增加部署成本 |
| 模型集成（Ensemble）推理开销翻倍 | 融合后推理速度与单模型一致 |

### 核心洞察

研究者在实践中发现一个反直觉的现象：**多个独立微调的模型在参数空间中存在显著的互补性**。这意味着它们在权重层面的简单组合，往往能保留甚至超过各自的独立能力。这与传统机器学习中"模型集成"的思想一脉相承，但效果更惊人——因为是在参数空间而非输出空间进行融合。

---

## 二、核心技术路线

模型融合技术主要分为两大类路线，它们在原理、成本和适用场景上有着本质区别。

### 路线一：参数空间合并（Parameter-Space Merging）

**无需训练**，直接在权重层面将多个模型合并为一。

```
模型A权重 + 模型B权重 → 合并算法 → 融合模型（单模型推理）
```

#### 核心挑战

参数合并面临两个根本问题：
1. **参数冗余**：微调后的大部分参数变化极小（delta 参数的 90%+ 是冗余的）
2. **符号冲突**：模型A想让某个参数增加，模型B想让同一参数减少，直接平均会相互抵消

#### 主要方法

| 方法 | 论文 | 年份 | 核心思想 | 多模型支持 | 是否需GPU |
|------|------|------|---------|-----------|----------|
| **Linear** | Model Soups (Wortsman et al.) | 2022 | 直接加权平均 | ✅ | ❌ |
| **Task Arithmetic** | Task Arithmetic (Ilharco et al.) | 2022 | 用任务向量做算术运算 | ✅ | ❌ |
| **SLERP** | — | 2023 | 球面线性插值，保持几何特性 | ❌（仅2模型） | ❌ |
| **TIES-Merging** | TIES-Merging (Yadav et al.) | 2023 | Trim+Elect+Merge，解决参数冲突 | ✅ | ❌ |
| **DARE** | Drop And REscale (Yu et al.) | 2023 | 随机丢弃99% delta参数后重缩放 | ✅（作为插件） | ❌ |
| **SCE** | FuseChat (Wan et al.) | 2024 | Select+Calculate+Erase，矩阵级精细融合 | ✅ | ❌ |
| **Frankenmerge** | — | 2024 | 跨模型层级别的非标准合并（混合不同层） | ❌ | ❌ |

##### SLERP（球面线性插值）

最流行、最简单的合并方法。将两个模型的权重向量视为球面上的点，沿着球面弧线进行插值。

**数学原理**：
```
1. 将权重向量归一化为单位长度
2. 用点积计算两向量夹角 θ
3. 如果 θ≈0（几乎共线），退化到线性插值
4. 否则：merged = sin((1-t)θ)/sin(θ) × v1 + sin(tθ)/sin(θ) × v2
```

**核心优势**：在高维空间中保持几何特性，避免线性插值导致的幅值衰减。

**局限**：只能合并两个模型，但可以通过层级嵌套实现多模型合并。

##### TIES-Merging

三步法解决参数冲突问题：

1. **Trim（修剪）**：保留 delta 参数中 top-k%（通常 20%）最显著的参数，其余重置为 0
2. **Elect Sign（选举符号）**：统计所有模型中该参数的符号方向，以累计幅度最大的方向为统一符号
3. **Disjoint Merge（不相交合并）**：仅保留与统一符号一致的参数值做平均，排除冲突参数

**评测结果**：在 NLP 和视觉任务上比 Task Arithmetic 平均提升 2.3%（in-domain）和 1.0-4.4%（out-of-domain）。

##### DARE（Drop And REscale）

最"暴力"的方法，核心发现是：**delta 参数中高达 99% 是冗余的**。

```
1. 用伯努利分布随机丢弃 p% 的 delta 参数（p 可达 0.99）
2. 剩余参数缩放 1/(1-p) 倍以保持期望
3. 将稀疏化的 delta 加回基础模型
```

**重要特点**：DARE 通常作为**插件**与 TIES 搭配使用（即 DARE-TIES），先随机稀疏化再解决符号冲突。这种组合是当前性能最好的参数合并方案之一。

##### SCE（Select-Calculate-Erase）

FuseAI 社区的核⼼算法，比 TIES 更进一步：

1. **Select**：选择方差最大的 top-k% 参数元素
2. **Calculate**：基于选中元素平方和计算每个模型的合并系数
3. **Erase**：过滤"少数方向"的参数冲突

**独特优势**：矩阵级别的精细控制，无需额外训练。

### 路线二：知识蒸馏融合（Knowledge Fusion / Distillation）

**需要轻量级训练**（几小时到几天），通过蒸馏将多个源模型的知识迁移到目标模型。

```
源模型A ──┐
源模型B ──┤── 蒸馏训练 ──→ 目标模型（可不同参数量、不同架构）
源模型C ──┘
```

#### 主要方法

| 方法 | 训练需求 | 模型架构 | 核心创新 |
|------|---------|---------|---------|
| **FuseLLM** | ~几小时 | 支持异构 | 统计对齐解决不同 tokenizer 问题 |
| **FuseChat** | ~1天 | 支持异构 | SFT + DPO 两阶段偏好融合 |
| **InfiFusion** | 160 GPU小时 | 支持异构 | ULD + Top-K + Logits Standardization |
| **FuseO1** | — | 支持异构 | Long-Long / Long-Short 推理融合 |

##### FuseLLM（ICLR 2024）

首个将**不同架构**的 LLM 进行知识融合的工作。

**关键创新**：统计对齐方法（Statistics-based Token Alignment）——不同模型使用不同 tokenizer，词表没有天然对齐关系。FuseLLM 通过统计 token 在大量语料上的共现关系，建立跨模型的对齐映射。

**实验**：融合 Llama-2-7B、OpenLLaMA-7B、MPT-7B 三个异构模型 → 融合模型超越所有源模型。

##### FuseChat（SFT + DPO 两阶段）

专注于聊天模型的融合，最实用的方案之一。

**第一阶段 - SFT 对齐**：用源模型的输出构造监督微调数据，消除目标模型与源模型之间的分布差异。

**第二阶段 - DPO 对齐**：用源模型对同一问题的不同回答构建偏好对（好/坏），通过直接偏好优化（DPO）学习源模型的偏好。

**FuseChat-3.0 成果**：
- 源模型：Gemma-2-27B + Mistral-Large-2407 + Qwen-2.5-72B + Llama-3.1-70B
- 目标模型：Llama-3.1-8B / Gemma-2-9B / Qwen-2.5-7B / Llama-3.2-3B / Llama-3.2-1B
- 结果：AlpacaEval-2 / Arena-Hard 达到 8B 级别 SOTA

##### InfiFusion（ULD + Top-K + Logits Standardization）

当前最先进的蒸馏融合框架，由 Reallm-Labs 提出。

**核心创新**：
1. **Universal Logit Distillation (ULD)** — 统一 logits 蒸馏框架，不受模型架构差异影响
2. **Top-K Selection** — 只取 logits 分布中置信度最高的 K 个 token 参与蒸馏，过滤噪声
3. **Logits Standardization** — 不同模型的 logits 分布标准化后再参与蒸馏，解决量纲不一致问题

**两种融合策略**：
- **InfiFusion_p（Pairwise）**：逐个源模型分别蒸馏到 pivot 模型，然后合并
- **InfiFusion_u（Unified）**：所有源模型同时蒸馏到 pivot 模型

**训练数据**：130K 条（52K 通用推理 + 39K 数学 + 39K 代码）

**效率**：仅 160 H800 GPU 小时，极低成本。

##### FuseO1-Preview（推理能力融合）

专注于 System-II 推理能力的融合，2025 年 1 月发布。

**两种策略**：
1. **Long-Long 推理融合**：融合多个 Long-CoT 推理模型（如 DeepSeek-R1 + QwQ + SkyT1）→ AIME24 74.0 分（接近 OpenAI o1 的 79.2）
2. **Long-Short 推理融合**：Long-CoT 与 Short-CoT 模型融合 → 同时具备两种推理模式

---

## 三、技术路线对比

### 总览对比

| 维度 | 参数空间合并 | 知识蒸馏融合 |
|------|------------|------------|
| **训练需求** | 无需训练 | 需轻量训练（几小时~几天） |
| **硬件要求** | CPU only | GPU（蒸馏需要模型推理） |
| **模型架构要求** | 通常需同架构 | 支持异构架构 |
| **模型大小** | 与源模型一致 | 目标模型可更小（如 70B→8B） |
| **性能上限** | 受源模型组合限制 | 可超越源模型（蒸馏提炼） |
| **部署成本** | 与源模型相同 | 可大幅降低 |
| **可解释性** | 较低（权重层面的黑箱） | 较低 |
| **稳定性** | 偶有性能崩塌 | 较稳定 |

### 适用场景

```
参数空间合并 → 快速尝鲜、零成本提升、已有同架构模型
                     │
知识蒸馏融合 → 需要压缩模型、异构模型整合、追求极致性能
                     │
混合方案(DARE-TIES) → 当前社区最流行，兼顾简单与效果
```

---

## 四、实现方式

### mergekit 工具链（参数合并）

HuggingFace 生态中最流行的合并工具，由 Charles Goddard 维护。

**安装与使用**：
```bash
pip install mergekit
mergekit-yaml config.yml output-model
```

**核心配置**（以 DARE-TIES 为例）：
```yaml
models:
  - model: base-model  # 基础模型（未微调的版本）
  - model: model-a
    parameters:
      density: 0.5     # 保留 50% 的 delta 参数
      weight: 0.5      # 权重系数
  - model: model-b
    parameters:
      density: 0.5
      weight: 0.3
merge_method: dare_ties
base_model: base-model
parameters:
  normalize: true
dtype: bfloat16
```

**参数调试要点**：
- `density`（密度）：保留的 delta 参数比例，0.1~0.9，通常 0.5 左右效果较好
- `weight`（权重）：每个模型在融合中的贡献比例，合计不一定需要 = 1
- `normalize`：是否自动归一化权重
- 不同层类型（self_attn vs mlp）可使用不同的插值系数，需实验调优

### 社区自动化工具

- **Automerger**（HuggingFace Space）— 自动从 Open LLM Leaderboard Top-20 中随机选两个模型合并，自动评估
- **LazyMergekit**（Colab 脚本）— 一键式模型合并环境
- **MergeKit GUI** — 参数合并的 Web 界面

### 蒸馏融合实现（以 FuseChat 为例）

```python
# 第一阶段：SFT 构建训练数据
for each source_model:
    for each prompt in training_set:
        response = source_model.generate(prompt)
        training_data.append((prompt, response))

# 在目标模型上 SFT
trainer = SFTTrainer(model=target_model, train_dataset=training_data)
trainer.train()

# 第二阶段：DPO 构建偏好数据
for each prompt:
    good = source_model_A.generate(prompt)
    bad  = source_model_B.generate(prompt)
    preference_data.append((prompt, good, bad))

# 在目标模型上 DPO
trainer = DPOTrainer(model=target_model_after_sft, train_dataset=preference_data)
trainer.train()
```

---

## 五、评测体系

### 常用评测基准

| 基准 | 考查维度 | 说明 |
|------|---------|------|
| **TruthfulQA** | 真实性 | 检查模型是否会传播常见误解 |
| **BigBench** | 广泛推理 | 200+ 任务：自动分类、作者验证等 |
| **GPT4All** | 综合能力 | HellaSwag + WinoGrande + BoolQ 等综合 |
| **AGIEval** | 人类认知 | 数学测试、法律考试等人类水平认知 |
| **AlpacaEval 2.0** | 指令遵循 | 自动评估对指令的遵循程度 |
| **Arena-Hard** | 对话质量 | 与 GPT-4/Claude 的对比胜率 |
| **AIME 2024** | 高难度数学 | 竞赛级数学推理能力 |
| **SWE-bench** | 编程能力 | 真实 GitHub Issue 解决能力 |

### 参数合并评测结果（Automerger 数据）

基于 HuggingFace Automerger 对 110 个合并模型的统计分析（Kostis Gourgoulias, 2024）：

- **SLERP vs DARE-TIES**：SLERP 在右尾（最佳表现）略占优势，但差异不显著
- **TruthfulQA 与 GPT4All 呈负相关**（r≈-0.6）：越"真实"的模型在综合能力上反而可能越弱
- **BigBench 与其他基准相关性低**：独立维度，不能仅靠单一基准评估

### 蒸馏融合评测结果

**InfiFusion-14B**（11 个基准测试）：
- 超越 Qwen-2.5-14B-Instruct、Phi-4 等 SOTA 模型
- 在所有推理/编码/数学/指令遵循任务上表现一致

**FuseO1-Preview-32B**（AIME24）：
- 74.0 Pass@1（OpenAI o1-mini: 63.4, o1-preview: 44.6, o1: 79.2）
- 接近完整 o1 水平，远超其他开源方案

**FuseChat-3.0-8B**（AlpacaEval-2 / Arena-Hard）：
- 在 8B 参数级别达到 SOTA
- 接近 70B 级别模型的对话质量

---

## 六、选型指南

### 场景一：零成本快速提升模型性能

```
推荐：SLERP 或 DARE-TIES
工具：mergekit
成本：0 美元（仅需 CPU）
时间：几分钟
条件：需要同架构模型（如两个 Mistral-7B 的微调版本）
```

### 场景二：将多个大模型能力灌入小模型

```
推荐：FuseChat-3.0 方案
工具：TRL (SFTTrainer + DPOTrainer)
成本：~100 GPU 小时
时间：1-2 天
特点：可以大幅降低推理成本
```

### 场景三：融合不同架构的异构模型

```
推荐：FuseLLM 或 InfiFusion
工具：自定义蒸馏训练
成本：160-500 GPU 小时
时间：1-7 天
特点：最灵活，但实现复杂度最高
```

### 场景四：提升复杂推理能力（数学/编程）

```
推荐：FuseO1 或 InfiFusion
特点：Long-CoT 推理融合效果最显著
注意：需要 CoT 数据集的蒸馏，训练成本较高
```

---

## 七、关键发现与趋势

### 已证实的经验

1. **99% 的 delta 参数是冗余的**（DARE 发现）— 参数空间存在巨大压缩空间
2. **符号冲突是合并失败的主因**（TIES 发现）— 解决符号冲突后效果显著提升
3. **蒸馏融合通常优于参数合并** — 但成本增加，并非所有场景都值得
4. **同基础模型的微调版本合并效果最好** — 参数空间邻近度是成功的关键
5. **模型越大，合并效果越好** — 大模型的参数冗余度更高，DARE 在更大模型上效果更稳定

### 发展趋势

| 趋势 | 说明 |
|------|------|
| **自动化合并** | 自动搜索最优合并参数（权重、密度、层级别参数） |
| **可微分合并** | 将合并过程融入训练（Differentiable DARE-TIES） |
| **跨架构融合** | 不仅是参数空间，更关注功能层面的知识融合 |
| **推理策略融合** | 融合不同推理路径（Long-CoT + Short-CoT + Fast思考） |
| **多模态融合** | 文本、图像、代码等多模态模型的融合 |

### 未解决的问题

- **理论基础薄弱**：为什么参数合并有效？目前缺乏理论解释
- **反向链接缺失**：合并后的模型"忘掉"了什么能力？如何检测？
- **规模化规律不明**：融合更多模型（>4个）是否还能继续提升？
- **评估不完整**：缺乏安全、偏见、鲁棒性等维度的系统评测

---

## 八、总结

模型融合是当前 LLM 研究中最具"性价比"的方向之一。两条技术路线各有适用场景：

- **参数空间合并**适合快速原型、零成本提升，是社区最活跃的方向
- **知识蒸馏融合**适合模型压缩、异构模型整合、追求极致性能

两者并非互斥——在实际工程中，可以先参数合并快速验证，再用蒸馏融合进一步优化。随着工具的成熟（mergekit、FuseAI 生态），模型融合正在从"黑科技"变成每个开发者都可以使用的常规手段。

---

## 相关实体
- [[FuseAI]]
- [[InfiFusion]]
- [[mergekit]]

## 相关概念
- [[模型融合]]
- [[模型微调]]
- [[AI 编程]]

## 延展阅读
- [TIES-Merging Paper](https://arxiv.org/abs/2306.01708)
- [DARE Paper](https://arxiv.org/abs/2311.03099)
- [InfiFusion Paper](https://arxiv.org/abs/2501.02795)
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models)
- [NVIDIA: Introduction to Model Merging](https://developer.nvidia.com/blog/an-introduction-to-model-merging-for-llms/)
- [Automerger Analysis](https://huggingface.co/blog/kgourgou/a-first-look-at-automerger-data)
