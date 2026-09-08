---
type: topic
tags: [LoopArena, Loop Engineering, Agent 评测, Controller, 基准测试, 阿里巴巴, DreamX, Coding Agent]
created: 2026-09-08
updated: 2026-09-08
related_sources: 1
source_url: https://mp.weixin.qq.com/s/jC525f3Q4eZ4wgxWSp7Y-g
---

# LoopArena：把模型的 Loop 调度能力单独拎出来考

## 概述

阿里巴巴 DreamX 团队（GitHub org：AMAP-ML）开源的 **LoopArena**（v0.1.0，Apache-2.0，arXiv:2608.28281）——一个专门评测「模型作为长程 Loop 运行时 Controller（调度员）」能力的 Benchmark。核心理念：**Worker 锁死、只考 Controller**——固定同一个 Coding Agent（Qwen3.7-Plus）与工具/环境/预算，只更换负责"看进展、派活、决定下一步"的外层模型，把控制能力从整体 Agent 表现中单独剥离出来比较。论文登顶 Hugging Face Daily Papers 当日榜首，获 Shashank Ashtikar（"太需要这样的工作了"）、DAIR.AI、Rohan Paul 等海外博主跟进。

## 背景：Loop Engineering 缺一把评测尺

Loop Engineering 把开发者从"一问一答催 Agent"变为"设计能持续派活的 Loop"：人定目标与验收标准，Loop 按执行反馈组织 Agent 一轮轮干活（类似 Tech Lead 角色）。已有编程评测测的是整套 Coding Agent 完成任务的能力，**外层"谁来指挥"一直被混在一起没单独测过**。LoopArena 补上这一环，并给出低预算方案——对比 Terminal-Bench 4.0 单组评测跑掉数千甚至近万美元，其 Type I 全套最低约 0.31 美元。

## 核心机制

- **解耦**：Worker（改代码/跑测试的执行者，评测中固定 Qwen3.7-Plus）= 不变项；Controller（读进展、定安排的模型）= 被测对象。评测器统一验收最终代码与行为。
- **Evidence Packet**：Worker 每轮结束后由只读 Reporter 整理进展，打包给 Controller。
- **Loop Contract**：Controller 输出的"下一轮指令"，含目标、要保留的既有行为、本轮完成条件；**Controller 无代码工具、不直接改仓库**，决策必须经 Worker 落地 → 每轮安排都受执行反馈检验。

## 三类评测（投入与执行范围递增）

| 类型 | 测什么 | 起点 | 规模 | 计分 |
|------|--------|------|------|------|
| **Type I · Contract selection** | 从 4 个候选指令中选最优下一步（候选已用真实执行验证过，评测新模型无需重跑 Agent） | 冻结的 Evidence Packet 控制点 | 90 | Contract 准确率 |
| **Type II · Condensed task** | 从标准化的任务切片中途接手，闭环指导 Worker 完成一段 | 任务切片工作区 | 27 | Strict Success Rate |
| **Type III · Full task** | 从原始仓库状态全程带到交付 | 原始任务状态 | 27 | Strict Success Rate |

- Type II/III 在 11 个 SCBench + 16 个 BeyondSWE 任务上一一配对；Type I 为低成本多选题式入口（5 分钟上手，仅模型调用，不跑 Worker/Docker）。
- **Type II 平均推理成本比配对完整任务降约 64.4%**，且模型排序与 Type III 高度一致（Spearman ρ = 0.9747）→ 可先用切片低成本筛方案，再上全任务验证。
- 参考策略（不计入 Controller 排名）：Type II 上 fixed-control 46.91% vs no-control 39.51%；但两者在 Type III 均仅 18.52% —— 提醒切片结论要回到完整任务核对。

## 首榜结果（v0.1.0 主榜单，Worker/Reporter 固定 Qwen3.7-Plus）

| Controller | Type I 准确率 ↑ | Type II SSR ↑ | Type III SSR ↑ |
|------------|----------------|---------------|----------------|
| **GPT-5.5** | **87.78** | **51.85** | **24.69** |
| Qwen3.7-Plus | 72.22 | 48.15 | 23.46 |
| Claude Opus 4.8 | 76.67 | 48.15 | 20.99 |
| DeepSeek-V4-Flash-0731 | 77.78 | 45.68 | 19.75 |
| GLM 5.2 | 74.44 | 37.04 | 16.05 |

**要点**：GPT-5.5 全面第一但完整任务成功率也仅 24.69% → 长程 Loop 控制仍有巨大空间；Qwen3.7-Plus 完整任务第二（自家 Worker 组合占优）；DeepSeek-V4-Flash 单步决策（Type I 第二）强于长程带队（Type III 第四）——"会选下一步" ≠ "带得完任务"。

## 工程入口

- 仓库：github.com/AMAP-ML/LoopArena（数据/协议/评测代码/结果 artifacts 全公开，Python ≥3.10）
- 命令：`looparena-type1-run`（Type I，可 `--preflight-only` 免调用校验）／`looparena-type2-panel`／`looparena-type3-panel`（可断点续跑+汇总）
- Type II/III 需 Git/Docker/uv，上游素材（BeyondSWE-harbor、SCBench runner/problems）按 `benchmarks/upstreams.toml` 固定版本本地准备，验 Docker 镜像 ID 后才放行模型调用
- 论文：arXiv:2608.28281（LoopArena: Benchmarking Models as Runtime Controllers for Loop Engineering，Yi Wang 等）

## 相关概念
- [[Loop Engineering]] — 本评测锚定的工程范式（概念页）
- [[AI 编程（AI Programming / AI Coding）]] — 被测场景：长程 Coding Agent 闭环
- [[AI Agent（智能体）]]
- [[LLM-as-a-Verifier：验证作为新的 Scaling 轴]] — 另一条"给 Agent 结果把关"的独立评测/验证路线（可对照）

## 相关实体
- [[Qwen]] — Qwen3.7-Plus 兼任固定 Worker 与被测 Controller
- [[DeepSeek]] — DeepSeek-V4-Flash 被测（Type I 第二 / Type III 偏弱）

## 延展阅读
- [原文（智猩猩AI 公众号）](https://mp.weixin.qq.com/s/jC525f3Q4eZ4wgxWSp7Y-g)（同文：搜狐转载 https://www.sohu.com/a/1072820588_122980439）
- [GitHub: AMAP-ML/LoopArena](https://github.com/AMAP-ML/LoopArena)
- [论文 arXiv:2608.28281](https://arxiv.org/abs/2608.28281)
