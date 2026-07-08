---
type: topic
tags: [知识管理, LLM-Wiki, 方法论, Karpathy, RAG, 结构化知识]
source_url: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
ingested: 2026-07-05
---

# LLM Wiki — 基于 LLM 的结构化知识库方法论

## 概述

Andrej Karpathy 提出的 **LLM Wiki** 模式，核心思想是用 LLM 增量构建和维护一个**持久化的、结构化交叉引用的 Markdown 知识库**，替代传统 RAG 的"查一次拼一次"模式。LLM 负责所有写作和维护，人类负责素材收集和方向引导。

## RAG vs LLM Wiki

| 维度 | 传统 RAG | LLM Wiki |
|---|---|---|
| 知识状态 | 每次查询从头检索 | 持久化、持续更新的结构化资产 |
| 交叉引用 | 无，每次临时拼凑 | 预先建立，双向链接 |
| 矛盾处理 | 可能检索出矛盾的片段 | 摄入时标注、对比、仲裁 |
| 查询质量 | 受检索引擎和 chunk 策略影响 | LLM 先读索引定位再深入，结果稳定可引用 |
| 维护成本 | 无需维护但结果不稳定 | LLM 自动维护，人类几乎零成本 |
| 积累效应 | 无 — 每次独立 | 有 — wiki 随素材增加越来越丰富 |

## 三层架构

```
原始素材 (raw/)   →  Wiki (wiki/)   →  Schema (CLAUDE.md)
 不可变，仅追加        LLM 生成/维护      规范与约定
```

- **原始素材层**：文章、论文、笔记、图片等，LLM 只读不写
- **Wiki 层**：摘要 → 实体/概念/主题/综述，含 index.md 全局目录 + log.md 操作日志
- **Schema 层**：一份给 LLM 看的规范文档（CLAUDE.md），定义页面结构、工作流、命名约定

## 三大工作流

### Ingest（摄入）
1. 新素材放入 `raw/`
2. LLM 读取 → 讨论关键点 → 写摘要页
3. 更新涉及的实体页和概念页（可能触达 10-15 个页面）
4. 更新 index.md + log.md

### Query（查询）
1. LLM 先读 index.md 定位相关页面
2. 深入阅读后合成答案，附带引用
3. 有价值的问答归档为 `synthesis/` 下的新页面

### Lint（体检）
- 矛盾检测、过时信息、孤立页面、缺失页面、断链、内容缺口、格式合规
- LLM 输出报告，按严重程度排序

## 关键设计

- **index.md**：全站目录，每行 = 链接 + 摘要 + 标签，LLM 查询时先读此文件定位
- **log.md**：纯追加操作日志，`## [YYYY-MM-DD] 操作 | 简述` 格式，可被 grep 解析
- **Wikilink**：`[[页面名]]` 内部引用，与 Obsidian 双向链接兼容
- **YAML Frontmatter**：每个页面包含 type/tags/created/updated 元数据

## 适用场景

- 个人知识管理（追踪目标、健康、心理等）
- 学术研究（深度阅读论文，增量构建知识库）
- 读书笔记（按章节归档，构建角色/主题/情节的关联 Wiki）
- 团队内部 Wiki（LLM 消化 Slack/会议/文档后自动维护）
- 竞品分析、课程笔记、深度爱好研究等

## 为什么有效

人类放弃 Wiki 的原因是维护负担增长快于价值。LLM 不会无聊、不会忘记更新引用、一次能触达 15 个文件。维护成本趋近于零，Wiki 始终保持健康。

## 本项目的应用

llm-wiki 完全遵循此方法论构建：
- CLAUDE.md 定义了完整的工作流和质量规范
- 59 个页面覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD 等核心领域
- 每次文件变更自动 Git 同步
- 同时维护 Notion 端镜像（Database + Properties + Relations）

## 相关实体
- [[Claude Code]] — 本项目使用的 LLM Agent
- [Obsidian](https://obsidian.md) — 配合使用的知识库浏览器

## 相关概念
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]] — LLM Wiki 要替代的传统检索模式
- [[上下文工程 (Context Engineering)]] — 系统化管理 AI 在大型项目中的代码上下文
- [[AI Agent（智能体）]] — LLM Wiki 的维护者本质上是一个 Agent
- [[本体论 (Ontology)]] — 知识的结构化形式化描述
- [[Agent记忆系统]] — L0-L3 记忆架构与 Wiki 持久化存储互补

## 拓展阅读
- [Karpathy Gist 原文](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [Vannevar Bush — As We May Think (1945)](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/) — Memex 概念
