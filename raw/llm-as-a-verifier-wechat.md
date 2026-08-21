# LLM-as-a-Verifier：论文 + 官方实现资料（微信整理 2026-08-21）

> 来源：用户微信整理（头条文章《LLM-as-a-Verifier》背后的论文与实现资料）

## 论文

- **《LLM-as-a-Verifier: A General-Purpose Verification Framework》**
- arXiv: **2607.05391**（2026年7月6日，v2）
- 链接: https://arxiv.org/abs/2607.05391
- 一句话核心：验证（判断答案对不对）是一条新的 scaling 轴。不训模型，纯靠推理时把 LLM 当验证器

## 官方实现

- GitHub: https://github.com/llm-as-a-verifier/llm-as-a-verifier
- 安装: `pip install llm-verifier`
- 0.2.0 版本专门加了 **deepseek-v4-flash 验证器后端** + **Terminal-Bench 2.1 自验证基准**
- Claude Code 插件版: https://github.com/llm-as-a-verifier/TurboAgent

## 核心方法（3招）

1. **细粒度评分**：不输出离散分数，而是对评分 token 的 logprob 分布求期望 → 连续分数，能拉开好/坏解的差距
2. **重复评估 + 标准分解**：同一标准评多次取平均降方差；把"正确性"拆成多个子标准分别评
3. **成本优化的排序算法**：用 pivot 候选（pivots < N）做两两对比，省验证开销

## 头条 88% 怎么来的

用 deepseek-v4-flash 每个任务生成 5 条 mini-swe-agent 轨迹，再用同一个模型当验证器选最优（自己验证自己的输出）：

- Best-of-3：Pass@1 79.4% → **86.5%**
- Best-of-5：Pass@1 78.7% → **88.0%**（Oracle 上界 96.6%）
- 超过 Claude Fable 5，成本约 **11 倍便宜**（任务级成本低至 ~0.03–0.11 美元；API 单价输入 $0.14 vs $10 / 百万 token）

## 本地复现

轨迹数据都在仓库 `data/terminal_bench_2.1trajs/` 里，只需 `.env` 配 `DEEPSEEK_API_KEY`（或自建 vLLM 服务返回 logprobs），然后：

```
python scripts/run_bo3.py # best-of-3
python scripts/run_bo5.py # best-of-5
```

代码用起来也很简单：`llm_verifier.select(problem, candidates, criteria=..., n_evaluations=4)` 就能从 N 个候选里选出最好的。
