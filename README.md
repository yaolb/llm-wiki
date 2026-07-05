# LLM Wiki

> AI & LLM 技术知识库 · 结构化、交叉引用、LLM 可维护

LLM Wiki 是一个围绕大语言模型（LLM）和 AI Agent 生态的结构化知识管理系统。它由 **Claude Code 作为 Wiki 维护者**，遵循三层架构方法论，将原始素材持续编译为高质量、可检索、可推导的 Markdown 知识网络。

---

## 三层架构

```
索引层 (index.md)  →  摘要层 (papers/topics)  →  详细层 (entities/concepts/topics/synthesis)
     ↑                        ↑                              ↑
  快速定位               300-800 字提炼                  完整知识主体
```

| 层级 | 说明 | 文件位置 |
|---|---|---|
| **第一层：索引** | 全站目录，每个页面一行：链接 + 摘要 + 标签 | `wiki/index.md` |
| **第二层：摘要** | 原始素材提炼，含来源、核心观点、引用数据 | `wiki/papers/` `wiki/topics/` |
| **第三层：详细** | 实体、概念、主题、综述的完整描述，含交叉引用 | `wiki/entities/` `wiki/concepts/` |

---

## 目录结构

```
llm-wiki/
├── CLAUDE.md              # Wiki 操作规范（给 LLM 看的）
├── raw/                   # 原始素材（不可变，仅追加）
├── wiki/                  # LLM 维护的 Markdown 知识库
│   ├── index.md           # 全站索引（59 页面）
│   ├── log.md             # 操作日志
│   ├── entities/          # 28 个实体 — 工具、模型、框架、平台
│   ├── concepts/          # 19 个概念 — 方法论、原理、协议
│   ├── topics/            # 8 个主题 — 领域全景、技术报告
│   └── synthesis/         # 4 篇综述 — 对比分析、复盘总结
├── templates/             # 页面模板（实体/概念/论文/主题）
└── wiki-viewer/           # 前端浏览器（React + Vite）
```

---

## 内容覆盖

| 分类 | 数量 | 涵盖范围 |
|---|---|---|
| 实体 | 28 | AI 编程工具（Claude Code/OpenSpec/Superpowers/gstack）、Agent 框架（Apache Burr/OpenClaw）、RAG 系统（LightRAG/RAG-Anything）、知识工具（AutoLink/Understand Anything） |
| 概念 | 19 | 模型微调/LoRA、MCP 协议、AI Agent 架构、RAG 检索增强、MoE 混合专家、Spec 驱动开发（SDD）、上下文工程、Agent 记忆系统（L0-L3） |
| 主题 | 8 | AI Agent 技术全景 2026、AI Native 研发体系、Karpathy AI 编码方法论、万象 AI 分析平台 |
| 综述 | 4 | AI 编程 Agent 框架对比、BMAD vs OpenSpec 对比、AI 增强开发三件套、2026 上半年项目复盘 |

---

## 核心特性

- **LLM 可维护**：CLAUDE.md 定义了完整的三工作流（Ingest/Query/Lint），Claude Code 能自主完成知识摄取、查询和体检
- **Obsidian 兼容**：`[[wikilink]]` 内部引用语法，支持 Obsidian 打开并显示双向链接图谱
- **YAML Frontmatter**：每个页面包含 `type`、`tags`、`created`、`updated` 等元数据
- **Git 自动同步**：wiki 文件变更后自动 commit + push，无需手动操作
- **Notion 镜像**：通过 Notion API 自动同步到结构化知识库（数据库 + Properties + Relations）

---

## 使用方式

### 人类读者

直接在 GitHub 浏览 `wiki/` 目录，或克隆后用 Obsidian 打开 `llm-wiki/` 根目录获取双向链接图。

### LLM Agent（Claude Code）

在 `CLAUDE.md` 中已配置完整的 Wiki 维护规则。Claude Code 在此项目中工作时会自动：

1. **摄入新素材** — 解析 `raw/` 中的源文件，创建摘要页，更新实体/概念页，同步 index.md
2. **回答查询** — 先读 index.md 定位相关页面，再深入检索，附带引用来源
3. **定期体检** — 检查孤立页面、矛盾信息、过时内容、断链、内容缺口

### Notion 同步

项目内包含完整的 Notion API 同步脚本和 Skill（`~/.claude/skills/notion-wiki-structure/`），支持：

- 批量创建 Notion 数据库条目并上传 Markdown 内容
- 自动匹配 wiki 标题到 Notion 页面（关键词重叠评分算法）
- 建立 Relation 双向链接
- 生成带分类图标和 @page 提及的仪表盘页
- 自动化 Lint 体检

---

## 方法论

本项目的知识管理方法论详见 `CLAUDE.md`，核心原则：

1. **一个页面说清一件事** — 实体页不嵌套概念解释，用链接跳转
2. **交叉引用比内容多更重要** — 宁可少写一段，不可少一个链接
3. **摘要提炼增量贡献** — 不是原文翻译，是对既有知识库的增量价值
4. **矛盾优先标注而非覆盖** — 发现冲突时标注两种说法，让读者判断
5. **保持谦逊** — 不确定的内容标注"有待查证"

---

## 许可

个人知识库，仅供学习参考。
