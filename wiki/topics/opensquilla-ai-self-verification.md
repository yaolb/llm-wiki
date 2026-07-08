---
type: topic
tags: [AI编程, 测试驱动, 自我修复, 自动化]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
source_url: https://app.notion.com/p/OpenSquilla-0-4-0-AI-3912a6ec1af8816f82e7cfaa28bfdd77
---

# OpenSquilla — AI 代码生成的自验证与自修复

## 概述

OpenSquilla 0.4.0 引入了一套**红绿回归证据链（Red-Green-Regression Pipeline）**机制，让 AI 编程从"生成代码"进化到"验证代码"的可审计阶段。

核心流程：AI 先写预期失败的测试（红）→ 修改代码让测试通过（绿）→ 跑全部已有测试确保无回归（回归）。三道关全过才交付。测试未通过时，AI 自动进入**修复闭环**：重改 → 再测 → 直到通过。

## 核心机制

1. **红灯阶段（Red）**：AI 根据需求生成预期会失败的单元测试
2. **绿灯阶段（Green）**：AI 修改实现代码使新测试通过
3. **回归阶段（Regression）**：运行全部已有测试，确保未破坏现有功能
4. **自动修复闭环**：任一阶段失败 → AI 自动分析原因 → 重新修改代码 → 重新测试，循环直到全部通过

## 关键数据

- 成本降低：**60%~80%**
- 版本：0.4.0
- 核心理念：AI 代码生成从"概率正确"到"可审计验证"

## 当前状态

OpenSquilla 代表了 AI 编程从"辅助生成"向"自主验证"的关键跨越。传统 AI 编程关注"代码写得快不快"，OpenSquilla 关注"代码写得对不对"。

## 相关实体
- [[OpenSquilla]]

## 相关概念
- [[红绿回归测试（Red-Green-Regression Pipeline）]]
- [AI 自验证（Self-Verification）](https://arxiv.org/search/?query=self-verification+AI[AI 自验证（Self-Verification in AI）](https://arxiv.org/search/?query=self-verification+AI[[AI 自验证]]searchtype=all)searchtype=all)
- [[测试驱动开发（Test-Driven Development, TDD）]]
- [[AI 编程（AI Programming / AI Coding）]]
