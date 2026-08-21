---
type: topic
tags: [LLM-as-a-Verifier, 推理时验证, Best-of-N, 自验证, DeepSeek, Terminal-Bench, scaling]
created: 2026-08-21
updated: 2026-08-21
related_sources: 1
source_url: https://arxiv.org/abs/2607.05391
---

# LLM-as-a-Verifier：验证作为新的 Scaling 轴

## 概述

《LLM-as-a-Verifier: A General-Purpose Verification Framework》（arXiv:2607.05391，2026-07-06 v2）提出：**验证（判断答案对不对）是一条新的 scaling 轴**——不训练模型，纯靠推理时把 LLM 当验证器，从 N 个候选解中选出最优，即可显著提升任务表现。

论文配套官方实现：GitHub `llm-as-a-verifier/llm-as-a-verifier`，`pip install llm-verifier`。0.2.0 版本新增 **deepseek-v4-flash 验证器后端** + **Terminal-Bench 2.1 自验证基准**。另有 Claude Code 插件版 TurboAgent（github.com/llm-as-a-verifier/TurboAgent）。

## 核心方法（三招）

1. **细粒度评分**：不输出离散分数，而是对评分 token 的 **logprob 分布求期望** → 连续分数，能拉开好解/坏解的差距
2. **重复评估 + 标准分解**：同一标准评多次取平均降方差；把"正确性"拆成多个子标准分别评
3. **成本优化的排序算法**：用 pivot 候选（pivots < N）做两两对比，省验证开销

## 关键结果：88% 怎么来的

用 deepseek-v4-flash 每个任务生成 5 条 mini-swe-agent 轨迹，再用**同一个模型**当验证器选最优（自己验证自己的输出）：

| 配置 | Pass@1 |
|------|--------|
| Best-of-3 | 79.4% → **86.5%** |
| Best-of-5 | 78.7% → **88.0%**（Oracle 上界 96.6%） |

- 超过 Claude Fable 5
- 成本约 **11 倍便宜**：任务级成本低至 ~0.03–0.11 美元；API 单价输入 $0.14 vs $10 / 百万 token

## 本地复现

轨迹数据在仓库 `data/terminal_bench_2.1trajs/`，只需 `.env` 配 `DEEPSEEK_API_KEY`（或自建 vLLM 服务返回 logprobs）：

```bash
python scripts/run_bo3.py   # best-of-3
python scripts/run_bo5.py   # best-of-5
```

代码接口：`llm_verifier.select(problem, candidates, criteria=..., n_evaluations=4)` 从 N 个候选里选出最好的。

## 意义与定位

- **验证是新的 scaling 轴**：与"更大模型 / 更多训练"正交，推理时计算（Best-of-N + 验证器）可独立带来收益
- **自验证闭环**：生成器与验证器可以是同一模型（self-verification），低成本即可超越强基线
- 与测试驱动（红绿回归）、Agent 自修复等"验证优先"理念同源，但把验证从"工程纪律"提升为"可量化的推理时优化手段"

## 相关实体
- [[DeepSeek]] — deepseek-v4-flash 作为验证器后端，MLA 压缩带来 11 倍成本优势
- [[Claude Code]] — TurboAgent 插件版面向 Claude Code 生态

## 相关概念
- [[OpenSquilla — AI 代码生成的自验证与自修复]] — AI 自验证的另一条路线（红绿回归证据链）
- [[自改进AI Agent]]
- [[红绿回归测试（Red-Green-Regression Pipeline）]]
- [[AI Agent（智能体）]]

## 参考来源
- arXiv: https://arxiv.org/abs/2607.05391
- GitHub: https://github.com/llm-as-a-verifier/llm-as-a-verifier
- TurboAgent: https://github.com/llm-as-a-verifier/TurboAgent
- 原始素材：[[../raw/llm-as-a-verifier-wechat.md]]
