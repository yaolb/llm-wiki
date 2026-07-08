---
type: entity
tags: [模型融合, 工具, 模型合并, 开源]
created: 2026-07-05
updated: 2026-07-05
related_sources: 1
---

# mergekit

## 概述
mergekit 是 HuggingFace 生态中最流行的模型合并工具库，支持 SLERP / TIES / DARE / Linear 等多种合并算法。其最大优势是**无需 GPU 即可合并模型**，只需 CPU 即可完成。

## 核心信息
- **全称**：mergekit
- **类型**：工具
- **维护者**：Charles Goddard
- **仓库**：[GitHub: cg123/mergekit](https://github.com/cg123/mergekit)
- **许可证**：MIT

## 支持的合并算法

| 算法 | 说明 | 多模型支持 |
|------|------|-----------|
| **SLERP** | 球面线性插值，最流行的方法 | ❌ 仅2模型 |
| **TIES-Merging** | Trim+Elect+Disjoint 三步法 | ✅ |
| **DARE** | 随机丢弃 + 重缩放 | ✅ |
| **Linear** | 线性加权平均 | ✅ |
| **Task Arithmetic** | 任务向量算术运算 | ✅ |
| **Passthrough** | 跨层传递（合并不同层数模型） | ❌ |

## 配置示例

### SLERP 配置
```yaml
slices:
  - sources:
    - model: OpenPipe/mistral-ft-optimized-1218
      layer_range: [0, 32]
    - model: mlabonne/NeuralHermes-2.5-Mistral-7B
      layer_range: [0, 32]
merge_method: slerp
base_model: OpenPipe/mistral-ft-optimized-1218
parameters:
  t:
    - filter: self_attn
      value: [0, 0.5, 0.3, 0.7, 1]
    - filter: mlp
      value: [1, 0.5, 0.7, 0.3, 0]
    - value: 0.5
dtype: bfloat16
```

### TIES 配置
```yaml
models:
  - model: mistralai/Mistral-7B-v0.1
  - model: OpenPipe/mistral-ft-optimized-1218
    parameters:
      density: 0.5
      weight: 0.5
  - model: mlabonne/NeuralHermes-2.5-Mistral-7B
    parameters:
      density: 0.5
      weight: 0.3
merge_method: ties
base_model: mistralai/Mistral-7B-v0.1
parameters:
  normalize: true
dtype: float16
```

## 使用方式
```bash
# 安装
pip install mergekit

# 合并（需要 YAML 配置文件和指定合并方法）
mergekit-yaml config.yml output-model
```

## 影响与地位
- Open LLM Leaderboard 上大量 SOTA 模型由 mergekit 合并产生
- 使得模型融合成为社区级平民化技术（一台 MacBook 就能操作）
- 被 HuggingFace 官方教程列为推荐的模型创建方式

## 相关概念
- [[模型融合（Model Fusion / Model Merging）]]

## 延展阅读
- [Merge LLMs with mergekit](https://huggingface.co/blog/mlabonne/merge-models) — HuggingFace 官方教程
- [LazyMergekit](https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing) — 一键式 Colab 脚本
