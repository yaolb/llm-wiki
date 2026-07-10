---
type: concept
tags: [OKF, Open Knowledge Format, Google, AI Agent, 知识格式, 语义搜索, Karpathy, LLM Wiki]
created: 2026-07-04
updated: 2026-07-10
---

# OKF 开放知识格式

## 一句话定义

**OKF（Open Knowledge Format）** 是 Google Cloud 于 2026 年 6 月发布的 AI 时代知识标准化规范（v0.1），以 **Markdown + YAML Frontmatter** 构建"机器可读、人类可懂"的原子化知识包，本质上是 **Karpathy "LLM Wiki" 理念的工业化标准化落地**。

> 官宣时间线：2026-06-12 Google Cloud Blog 发布 → 2026-06-14 正式公开 → Apache 2.0 开源于 `github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf`

## 背景：为什么需要 OKF？

传统 RAG（检索增强生成）的痛点：
- 每次提问临时从海量碎片检索，知识无法沉淀
- 切片噪声大，拼凑上下文易出错
- 知识散落在 Confluence、API 文档、数据库、网盘等不同系统

2026 年 4 月，Andrej Karpathy 提出了 **LLM Wiki** 理念——"先编译，后查询"（Compile-first, instead of RAG），让 LLM 自动将零散资料编译成结构化 Wiki。

两个月后 Google 跟进，发布 OKF 规范，将 Karpathy 的"媒介层"标准化、工业化。

## 核心架构

OKF **不是一个软件/库**，而是一个极简的"知识包装规范"。它倡导**去中心化、原子化**的知识管理。

### 三大结构要素

#### 1️⃣ Just Markdown（纯文本主体）
主体用标准 Markdown。规范鼓励使用 Heading、Table、Code Block 等强结构化排版，因其天然的"语法锚点"能极大帮助 AI Agent 准确提取语义。

#### 2️⃣ Just YAML Frontmatter（元数据索引卡片）
每个 .md 文件顶部有一段 YAML 元数据（类似图书馆索引卡片）：

```yaml
type: metric                      # 唯一必填字段！定义资产属性
title: 每周活跃用户数              # 推荐
description: 过去7天内至少...       # 推荐
resource: bq://project.dataset...  # 指向实体资产的 URI 链接
tags: [用户增长, 核心指标]         # 标签
timestamp: 2026-06-14             # 时间戳
```

- **唯一必填**：`type`——定义该知识的资产属性
- **推荐高频**：`title`、`description`、`resource`、`tags`
- `type` 可取任意值，常用：`metric`（指标）、`table`（表）、`runbook`（运维手册）、`api`（API 说明）、`concept`（概念）、`pipeline`（数据管道）等

#### 3️⃣ Reserved Files（保留系统文件）
- **`index.md`**（动态目录）：支持 **渐进式披露（Progressive Disclosure）**——Agent 先读目录了解全局，再精准定位，避免一次性加载海量文档导致的"中间迷失（Lost in the Middle）"与高昂 Token 成本
- **`log.md`**（审计日志）：记录知识包的版本变更历史

### 容错消费模型（Permissive Consumption Model）

**极其务实的设计**——规范明确规定：
- Agent **不能**因为文件缺少可选字段就拒绝解析
- Agent **不能**因为使用了自定义 type 就报错
- Agent **不能**因为存在失效的交叉链接就停止工作
- 即使格式不严谨，Agent 也要退化到通用文档继续读取

>"严律守己，宽以待人"——极大降低数据生产者的门槛

## OKF 与 Karpathy LLM Wiki 深度对比

| 维度 | Karpathy LLM Wiki | Google OKF |
|---|---|---|
| 本质 | 个人知识库工作流理念 | 工业化标准规范 |
| 发布时间 | 2026年4月（GitHub Gist） | 2026年6月14日（v0.1） |
| 核心口号 | "先编译，后查询" | "供应商中立的纯文本知识格式" |
| 组织形式 | Obsidian 类 Wiki + MCP 接口 | 标准文件夹 + Markdown + YAML |
| 元数据 | 自由格式 Wikilink `[[...]]` | 标准化 YAML Frontmatter + 强制 `type` |
| 工具链 | 自定义 MCP Tools（wiki_query 等） | 参考实现（Enrichment Agent + Static Viz） |
| 容错机制 | 未明确定义 | 明确 Permissive Consumption Model |
| 版本控制 | Git | Git（CI/CD 友好设计） |
| 适用范围 | 个人开发者 / 研究者 | 企业级 + 跨组织互操作 |
| 规范性 | 方法论层面 | 正式规范文档 + 参考实现 |

两者不是替代关系，而是 **理念 → 标准** 的演进关系。

## Google 参考实现

### 1. Enrichment Agent（知识补充机器人）
指向一个 BigQuery 数据集，自动为每张表/视图起草 OKF 文档，再爬取官方文档补充引用和关联关系。

### 2. Static Viz（静态网页展示器）
给一个 OKF 知识包文件夹，吐出一个交互式知识图谱 HTML 文件。所有节点=文件，连线=链接关系，纯前端无需后端。

### 3. 示例知识包
- GA4 电商数据
- Stack Overflow 技术问答
- 比特币公开数据集

## 为什么重要？

> 如果说 **OpenAPI** 统一了 AI Agent 调用 **工具（Tools）** 的接口，
> 那么 **OKF 与 LLM Wiki** 正在统一 AI Agent 获取 **知识（Knowledge）** 的接口。

三大启示：

1. **知识即代码（Knowledge as Code）**——用 Git 管理纯文本知识，无缝 CI/CD，Diff、Code Review 全部可用
2. **事前治理（KAG）颠覆事后缝补（RAG）**——在输入端将资产"编译"成结构化图谱，而非留到查询时大海捞针
3. **"机器可读性"成为新架构评价指标**——衡量系统好坏不仅看并发和延迟，更要看 AI 能否高效理解

## OKF 典型文件结构

```
my-knowledge-bundle/
├── index.md               # 目录 / 渐进式披露入口
├── log.md                 # 变更日志
├── metrics/
│   ├── index.md
│   ├── monday-active-users.md
│   └── revenue.md
├── tables/
│   ├── index.md
│   └── user_login_log.md
├── runbooks/
│   └── incident-response.md
└── ... (任意嵌套)
```

## 相关概念
- [[LLM Wiki — 基于 LLM 的结构化知识库方法论]]
- [[RAG 检索增强生成（Retrieval-Augmented Generation）]]
- [[AI Agent（智能体）]]
- [[本体论 (Ontology)]]
- [[Context Context Context]]

## 拓展阅读
- [Google Cloud Blog — Introducing the Open Knowledge Format](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing)
- [OKF 规范 (GitHub)](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf)
- [Karpathy LLM Wiki 原文 (Gist)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
