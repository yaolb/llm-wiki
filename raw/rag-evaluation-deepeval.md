# RAG 评估与 DeepEval 方案

来源：多个论文 + DeepEval 官方文档 + RAGAS 官方文档
日期：2026-07-05

核心参考文献：
1. G-Eval (Liu et al., 2023) - arXiv:2303.16634 - EMNLP 2023
2. Judging LLM-as-a-Judge (Zheng et al., 2023) - arXiv:2306.05685 - NeurIPS 2023
3. RAGAS (Espinosa-Anke et al., 2023) - arXiv:2309.15217
4. LLMs-as-Judges Survey (Li et al., 2024) - arXiv:2412.05579
5. JudgeBench (Tan et al., 2024) - arXiv:2410.12784
6. DeepEval - https://github.com/confident-ai/deepeval

核心内容：
- RAG 评估三维度：检索质量、生成质量、端到端系统
- 4 种评估方法：LLM-as-Judge / 人工 / 参考答案 / 持续监控
- 主流框架对比：RAGAS vs DeepEval
- DeepEval 技术方案：G-Eval + DAGMetric + QAG 三合一
