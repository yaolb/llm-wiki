---
type: topic
tags: [RSI, 递归自我改进, MetaRSI, Harness, Data-RSI, Model-RSI, 自改进Agent, LoRA, Agent-Harness, 开源]
created: 2026-09-16
updated: 2026-09-16
related_sources: 1
source_url: https://m.toutiao.com/article/7685367903704662578/
---

# MetaRSI-v1：把 RSI 拆成 Data / Model / Harness 三个可组合算子

> 素材分析：微信公众号「智猩猩AI」《清华北大斯坦福等联手做了个RSI系统！核心组件Harness-RSI已开源》（编辑：没方，2026-09-14），原文归档于 `raw/metarsi-v1-recursive-self-improvement-toutiao.md`。

## 概述

**核心立场**：RSI（Recursive Self-Improvement，递归自我改进）不该被当成"某一招"，而应拆成**三个可组合的改进面**。

CosmosMind 联合清华大学、北京大学、斯坦福大学等提出 **MetaRSI-v1**，把待改进系统表示为

```
S = (D, θ, H)
```

D = 数据状态，θ = 模型参数与训练状态，H = 模型运行时使用的 Harness。对应三个算子：**Data-RSI**（改 D）、**Model-RSI**（改 θ）、**Harness-RSI**（改 H）。

**动机**：只优化其中一层会陷入"局部最优"——把规则不断塞进 Prompt/Memory 短期有效但让推理上下文越来越重；只做训练则把本可由 Harness 解决的问题变成昂贵的 GPU 训练。

在 Qwen3.5-35B-A3B 上，MetaRSI-v1 四项测试平均 **+10.9 pt**，比最强固定组合策略再高 **3.6 pt**。**Harness-RSI 的运行时与 Genome 格式已以 RSI-Harness 形式开源。**

## 1. RSI Kernel：统一执行内核 + 不可改动的权限边界

三个算子共享同一执行内核：

```
Observe → Diagnose → Propose → Validate → Execute → Select → Export
```

| 步骤 | 执行者 |
|------|--------|
| Diagnose、Propose | **模型**（判断哪里出问题、应怎么改） |
| Observe、Validate、Execute、Select、Export | **确定性代码** |

- 算子输入是**学习信号 σ**，由系统执行轨迹 + 验证器输出编译得到；**每次改变系统能力的操作后，σ 重新编译**。
- **权限边界（不可改动）**：模型仅负责"提出修改"，是否采纳、如何执行、效果如何由外部确定性代码判定；**禁止算子修改封闭评估器 Q\*、测试集、发布规则、资源账本**——防止通过篡改评判标准虚增性能。

## 2. 三个算子

### Data-RSI（改 D）：把运行经验变成训练数据
- 从模型自身执行轨迹提取经验，生成**经过验证的训练记录**，放大已有能力并标记能力边界；
- 输出**四维学习签名**，定位四类失败成因：知识缺失 / 推理缺陷 / 验证步骤缺失 / 干扰项敏感；
- 流水线四道流程：经验提取 → 指令生成 → 对抗生成 → 验证；
- **"生成者-验证者"隔离校验**：同一目标模型分别扮演 Operator 与 Anchor，**Anchor 看不到 Operator 的答案、必须独立重解**，两者一致才保留记录；
- 再经 **schema 合约校验 + 语义重解校验**双重闸门，输出数据集工件；
- **不改模型行为，仅产出工件。**

### Harness-RSI（改 H）：直接改造 Agent 的运行环境
- **不碰权重 θ**，直接编辑执行脚手架，**五个可编辑槽位**：系统提示词 / 持久化记忆 / 内置工具 / 技能库 / MCP 挂载工具资源；
- 输出 `HarnessPatch`，补丁必须写明：**修复假设、槽位修改操作、预期效果、风险声明**；
- 候选补丁在**对应失败分片上重放评估**，在**复杂度预算约束**下合并，**只有严格超过历史最好结果才正式替换**；
- 优点：不用训练、修改立即生效；代价：新增 Prompt/Memory/Skills **每次推理都重复消耗上下文**。

### Model-RSI（改 θ）：把能力"写回"模型
- 接收 Data-RSI 的数据，在**受约束的训练 Recipe 搜索空间**中确定 LoRA 的目标模块、Rank、学习率、Batch Size、序列长度、Checkpoint 策略，训练多个候选模型；
- **始终从同一固定基础 checkpoint θ₀ 出发**，使用**累积数据集**，避免多轮训练误差累积。

### 成本互换
| | 能力存放位置 | 付费方式 |
|---|---|---|
| Harness-RSI | 上下文（Prompt/Memory/Skills） | 每次推理付费 |
| Model-RSI | 权重 | 一次训练内化 |

## 3. 算子组合：为什么 H→M 被禁止

规则：**只要系统能力发生变化，旧的学习信号就"过期"。**

- **H→M 禁止**：Harness-RSI 改系统后，此前 Data-RSI 生成的数据对应的是"旧系统"，直接拿去训练等于**用过期数据内化新能力**；
- 正确路径：先 **H→D**（重跑系统、生成最新数据），再 **D→M**；
- 论文定义的**五种合法跨算子转换**：`D→H`、`D→M`、`H→D`、`M→D`、`M→H`。

## 4. 三级递归结构

| 层级 | 优化对象 |
|------|----------|
| **底层算子**（Data / Model / Harness） | 修改**系统本身**（D、θ、H） |
| **RSI² Agent** | 横向：下一步调用哪个算子、如何排列；纵向：修改某算子"如何分析失败、如何提出修改"的**提案策略** |
| **MetaRSI² Agent** | 一个完整 Improvement Term 结束后复盘，调整 **RSI² Agent 的调度策略** |

## 5. 实验结果（Qwen3.5-35B-A3B，无更强教师模型）

全程无更强模型充当教师：诊断、数据生成、Harness 修改、调度全部由目标模型自己完成。

| 基准 | 起点 | → MetaRSI-v1 |
|------|------|--------------|
| Terminal-Bench 2.1 | 23.6 | **31.9** |
| SWE-bench Pro | 10.3 | **19.5** |
| GPQA-D-hard100 | 71.2 | **83.8** |
| AIME 2025/2026（60 题） | 55.0 | **68.3** |

**关键结论**：固定 `D→M→H` 与 Static Router 同样拥有三个算子，只拿到 **+7.3**；MetaRSI-v1 达 **+10.9** —— **额外 3.6 pt 来自"动态调度"本身**，而非"算子多就一定强"。

**算子差异**：Harness-RSI 是四项中表现最好的单一算子，在 GPQA、AIME 等**封闭式推理**任务上优势更明显；在 Terminal-Bench 2.1、SWE-bench Pro 等**可执行**任务上三者差距明显缩小 → **不同失败模式适配不同改进路径**，三者互补。

**API 路线（无权重也能 RSI）**：仅允许 `Data-RSI + Harness-RSI` 时，GPT-5.6 Sol / Claude Opus 5 / Gemini 3.1 Pro / DeepSeek V4 Pro / Kimi K3 / GLM-5.2 六个前沿模型在 Terminal-Bench 2.1 上**全部自我提升**，增幅 5.6～9.2 pt、平均 **+7.3**。即只要**能调 API**，就能沿 **Harness Route** 在不更新权重的情况下完成 RSI。

## 6. 与相邻工作的关系

- **与 [[任务 DAG 多 Agent 编排：Anthropic 费马大定理项目的启示]] 同构的内核**：Anthropic 的"Agent 说完成只是报告、验证器必须独立"与本页的 **RSI Kernel 权限边界**（模型只提案、确定性代码定采纳）是同一思想在不同尺度上的体现——前者跨 Agent 交接任务，后者让单个系统改自己。
- **Harness 五槽位 = Agent 的可热替换组件面**：与 [[时空可组合性编程范式 — Cordis 与动态组合演算]] 关注的问题相邻——Cordis 给"运行中装卸组件"补形式化基础（怎么安全地换），Harness-RSI 给"该换什么"补搜索与验证流程（换什么、凭什么换）。
- **σ 过期 → H→D→M**：与 Cordis 的 **Confluence / 反 state drift** 是同一类"历史不可观察"诉求的工程版本：能力一变，旧数据的有效性就必须作废。

## 相关概念

- [[自改进AI Agent]] — 本页是其"自动化闭环"思路的论文级系统化：从"记录经验到 Markdown"升级为"三算子 + 内核 + 调度"
- [[上下文工程 (Context Engineering)]] — Harness-RSI 的代价正是上下文成本，二者是同一权衡的供给侧与需求侧
- [[Loop Engineering]] — RSI²/MetaRSI² 的"谁来决定下一步改哪里"与 Controller 评测同题
- [[Agent记忆系统]] — Harness 五槽位中的"持久化记忆"即其落点
- [[时空可组合性编程范式 — Cordis 与动态组合演算]] — harness 组件层的形式化基础
- [[任务 DAG 多 Agent 编排：Anthropic 费马大定理项目的启示]] — 验证器独立性的同源原则
- [[LLM-as-a-Verifier：验证作为新的 Scaling 轴]] — "验证器把关"的另一条路线
- [[红绿回归测试（Red-Green-Regression Pipeline）]] — "失败分片重放评估"的工程对应

## 外部链接

- 论文实体：CosmosMind + 清华 / 北大 / 斯坦福，MetaRSI-v1（2026-09）
- 开源：**RSI-Harness**（Harness-RSI 运行时 + Genome 格式）——具体仓库地址待补充（原文未给链接）
