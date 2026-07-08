---
type: concept
tags: [AI编程, SDD, 规范驱动, OpenSpec, 开发范式]
created: 2026-07-04
updated: 2026-07-04
---

# Spec驱动开发 (SDD)

## 一句话定义

Spec-Driven Development（SDD）是一种 AI 时代的软件开发范式：开发者编写规格说明书（Spec），AI 根据 Spec 自动完成代码实现、测试生成和验证，人类从"写代码"转变为"审 Spec"。

## 核心原理

```
传统开发：需求 → 人写代码 → 人写测试 → 人验证
SDD 开发：需求 → 人写 Spec → AI 写代码 → AI 写测试 → AI 验证 → 人审 Spec
```

关键转变：人类审查的不再是代码，而是规格说明书。Spec 就是"给 AI 的需求文档"。

## 实战数据

得物技术团队半年实战数据：
- 编码效率提升 **10 倍**
- 交付效率仅提升 **13%**（瓶颈在需求理解和验证环节）
- 七个深坑：Spec 写不清楚、过度 Spec、AI 理解偏差、验证覆盖率不足等

## 代表框架

- **OpenSpec**：轻量级 SDD，Spec → Execute → Verify → Archive
- **BMAD**：重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 实现

## 相关概念
- [[AI 编程（AI Programming / AI Coding）]]
- [[统一开发范式 (OpenSpec × Superpowers)]]
- [[测试驱动开发（Test-Driven Development, TDD）]]

## 相关实体
- [[OpenSpec]]
- [[BMAD]]
