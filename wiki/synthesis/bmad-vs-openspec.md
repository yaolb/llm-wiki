---
type: synthesis
tags: [BMAD, OpenSpec, SDD, 规格驱动, AI编程, 对比分析]
created: 2026-07-04
updated: 2026-07-04
---

# BMAD vs OpenSpec：AI驱动开发的航母与特种兵

## 定位差异

- **BMAD**：航母级平台，提供从需求分析（BMC）到架构设计、数据建模、代码生成的完整闭环
- **OpenSpec**：特种兵式轻量工具，专注于 Spec → Execute → Verify 的核心链路

## 多维度对比

| 维度 | BMAD | OpenSpec |
|---|---|---|
| 定位 | 重量级 SDD 平台 | 轻量级 SDD 工具 |
| 工作流 | BMC 分析 → 架构 → 数据模型 → 实现 | Explore → Specify → Execute → Verify → Archive |
| 学习曲线 | 陡峭，需要系统学习 | 平缓，即开即用 |
| 集成度 | 高度集成，一站式 | 模块化，按需组合 |
| 适用场景 | 大型企业级项目 | 灵活的个人/团队项目 |
| 生态系统 | 独立完整 | 与 Superpowers + gstack 组合 |
| 灵活性 | 较低（受限于平台规范） | 高（自由组合 Skills） |
| 审计能力 | 强（全流程可追溯） | 中（核心链路可追溯） |

## 选型建议

- **选 BMAD**：大型组织、需要全流程管控、愿意投入学习成本
- **选 OpenSpec**：小团队/个人开发者、需要快速启动、已有 Skills 生态
- **组合使用**：BMAD 做顶层规划 + OpenSpec 做具体执行

## 相关实体
- [[BMAD]]
- [[OpenSpec]]

## 相关概念
- [[Spec驱动开发]]
- [[AI编程]]
