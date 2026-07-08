---
type: concept
tags: [AI编程, 测试, 自动化, 质量保证]
created: 2026-07-04
updated: 2026-07-04
related_sources: 1
---

# 红绿回归测试（Red-Green-Regression Pipeline）

## 一句话定义

红绿回归测试是 [[OpenSquilla]] 引入的 AI 代码验证管道：AI 先写预期失败的测试（红），再修改代码使测试通过（绿），最后运行全部已有测试确保无回归（回归），三道关全过才交付代码。

## 核心原理

```
需求输入 → [红灯] AI写预期失败测试 → [绿灯] AI改代码通过测试 → [回归] 运行全部旧测试
                ↓ 失败                                   ↓ 失败                  ↓ 失败
           自动分析 → 重试                           自动分析 → 重试         自动分析 → 重试
                                                                                    ↓ 通过
                                                                               ✅ 交付代码
```

### 三道关卡

1. **红灯（Red）**：AI 根据需求规格生成单元测试，这些测试在实现代码不存在时必然失败，验证测试本身是正确的（测到了该测的东西）
2. **绿灯（Green）**：AI 修改实现代码使新测试通过，证明代码满足了需求
3. **回归（Regression）**：运行全部已有测试套件，确保新代码没有破坏任何现有功能

### 自动修复闭环

任一阶段失败时，AI 自动分析失败原因 → 修改代码 → 重新运行测试，循环直到全部通过或达到最大重试次数。

## 与传统 TDD 的区别

传统的 [[测试驱动开发（Test-Driven Development, TDD）]] 由**人类开发者**按红-绿-重构的节奏编写代码。红绿回归测试将其**自动化**——AI 成为执行 TDD 循环的主体，人类从"写代码的人"变成"审代码的人"。

## 关键指标

- 开发成本降低：60%~80%（据 OpenSquilla 0.4.0 数据）

## 相关概念
- [[测试驱动开发（Test-Driven Development, TDD）]]
- [AI 自验证（Self-Verification）](https://arxiv.org/search/?query=self-verification+AI[AI 自验证（Self-Verification in AI）](https://arxiv.org/search/?query=self-verification+AI[[AI 自验证]]searchtype=all)searchtype=all)
- [[AI 编程（AI Programming / AI Coding）]]
