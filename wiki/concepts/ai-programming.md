---
type: concept
tags: [AI编程, 自动化, 开发工具]
created: 2026-07-04
updated: 2026-07-13
related_sources: 2
---

# AI 编程（AI Programming / AI Coding）

## 一句话定义

AI 编程指使用大语言模型（LLM）辅助或自动完成软件开发的各个环节，包括代码生成、代码审查、测试编写、调试修复和文档生成等。

## 核心原理

AI 编程工具通常基于以下能力：

1. **代码生成**：根据自然语言描述生成代码片段或完整函数
2. **代码补全**：在开发者输入时实时预测和补全代码
3. **测试生成**：自动为已有代码生成单元测试
4. **Bug 修复**：分析错误日志和代码，自动修复缺陷
5. **代码审查**：检查代码质量、安全漏洞和最佳实践合规性
6. **文档生成**：根据代码自动生成注释和 API 文档

## 发展阶段

### 第一阶段：辅助补全
GitHub Copilot、Cursor 等工具提供行级/块级代码补全，人类仍是代码的主要作者。

### 第二阶段：Vibe Coding（氛围编程）
[Karpathy 于 2025 年初提出](/topics/karpathy-ai-coding-methodology)。AI 根据自然语言描述独立生成完整功能模块，人类只管提需求、接受输出。适用于原型和个人项目。

### 第三阶段：Agentic Engineering（智能体工程）
[Karpathy 于 2026 年提出](/topics/karpathy-ai-coding-methodology#从-vibe-coding-到-agentic-engineering2026-年演进)。人类从"代码写作者"变为"架构师"，编写 Spec、验收 AI 输出、协调多个 Agent。代表：Claude Code、Cursor Agent 模式。

### 第四阶段：自验证
AI 不仅生成代码，还**自主验证代码的正确性**。代表：[[OpenSquilla]] 的红绿回归证据链、[[红绿回归测试（Red-Green-Regression Pipeline）]]。

## 代表工具

- GitHub Copilot
- Cursor
- Claude Code
- [[OpenSquilla]]

## 相关概念
- [[测试驱动开发（Test-Driven Development, TDD）]]
- [[红绿回归测试（Red-Green-Regression Pipeline）]]
- [AI 自验证（Self-Verification）](https://arxiv.org/search/?query=self-verification+AI[AI 自验证（Self-Verification in AI）](https://arxiv.org/search/?query=self-verification+AI[[AI 自验证]]searchtype=all)searchtype=all)
