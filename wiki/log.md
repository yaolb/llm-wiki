# LLM Wiki — 操作日志

> 纯追加，不修改历史。记录每次 ingest / query / lint / update。

---

## [2026-07-06] ingest | AI Agent 概念补充 + PYTHIA / UZI-Skill / AI 网关
- 新增实体页：[[PYTHIA]]（本地无密钥实时感知 Agent）、[[UZI-Skill]]（股票深度分析插件）
- 新增概念页：[[AI 网关与模型路由]]（聚合多模型免费额度，自动路由与 fallback）
- 更新概念页：[[AI Agent]]（补充反应式/深思型/学习型分类体系 + 关键能力维度 + 2026 趋势）
- 更新主题页：[[AI Agent 技术全景报告 2026]]（新增本地 Agent 与实时感知趋势）
- 保存3份原始素材到 raw/
- 全站累计：31 实体 + 21 概念 + 11 主题 + 5 综述 = 69 页面
- 更新 index.md

## [2026-07-06] update | MCP 概念页 — 官方文档更新
- 保存原始素材到 raw/mcp-official-intro.md
- 更新概念页：[[MCP 模型上下文协议]]（补充官方定义

## [2026-07-04] init | Wiki 初始化
- 创建项目骨架
- 初始化目录结构和模板
- 编写 Schema (CLAUDE.md)

## [2026-07-04] ingest | 能能的知识库 — 首批 4 条内容摄入
- 来源：Notion 数据库「📚 能能的知识库」，通过 MCP 自动化导入
- 创建 4 个主题摘要页：Unsloth、Firecrawl、Snail AI、OpenSquilla
- 创建 4 个实体页：同一组工具/项目
- 创建 8 个概念页：模型微调、MCP、AI Agent、RAG、红绿回归测试、AI 编程、MoE、TDD
- 更新全站索引 index.md

## [2026-07-04] ingest | 第二批内容摄入 — 从 Notion 工作区深度提取
- 来源：Notion 工作区非数据库页面（Quick Note / agentic / llm / 开发 等节点树）
- 创建 2 个实体页：AutoLink、Claude Code
- 创建 2 个概念页：统一开发范式（OpenSpec × Superpowers）、自改进AI Agent
- 创建 1 个主题页：万象AI分析平台
- 创建 2 个综述页：AI编程Agent框架对比分析、2026上半年万象项目复盘
- 全站总计：6 实体 + 10 概念 + 5 主题 + 2 综述 = 23 页面
- 更新 index.md

## [2026-07-04] ingest | 第三批内容摄入 — Notion 数据库 59 条全量导入
- 来源：Notion 数据库「📚 能能的知识库」全部 59 条记录
- 补齐前 3 条数据库属性（主题/标签/摘要/状态等）
- 创建 22 个实体页：PageAgent、LightRAG、OpenClaw、Hermes Agent、Superpowers、gstack、OpenSpec、BMAD、ECC、MUX0、MemPalace、Apache Burr、Comet、RAG-Anything、cc-switch、CC-Connect、GSD、FlashRT、SeedER、Huashu Design、khazix-skills、Understand Anything
- 创建 9 个概念页：Spec驱动开发、Agent记忆系统、本体论、FDE、Prompt Caching、Loop Engineering、Agent工具选择、上下文工程、OKF开放知识格式
- 创建 3 个主题页：AI Agent 技术全景报告 2026、Karpathy AI编码方法论、AI Native 研发体系
- 创建 2 个综述页：BMAD vs OpenSpec对比、AI增强开发三件套
- 全站总计：28 实体 + 19 概念 + 8 主题 + 4 综述 = 59 页面
- 更新 index.md

## [2026-07-05] setup | OpenClaw 集成 — 自动化同步技能就绪
- 克隆仓库到 OpenClaw 工作区
- 创建 llm-wiki skill（skills/llm-wiki/SKILL.md）
- 设定规则：更新 Notion 时同步更新 llm-wiki 并提交 GitHub
- 工作流：按 CLAUDE.md 规范执行 Ingest → 更新页面 → commit & push

## [2026-07-05] ingest | Karpathy LLM Wiki 方法论 Gist
- 来源：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- 保存原始素材到 raw/karpathy-llm-wiki-methodology.md
- 创建主题页：LLM Wiki 方法论（三层架构、三大工作流、RAG vs Wiki 对比）
- 更新 Karpathy AI编码方法论页：添加相关主题链接
- 全站总计：28 实体 + 19 概念 + 9 主题 + 4 综述 = 60 页面

## [2026-07-05] ingest | HuggingFace 模型融合技术生态
- 来源：HuggingFace 官网 & arXiv 论文
- 创建概念页「模型融合」涵盖参数合并（SLERP/TIES/DARE/SCE）和知识蒸馏（InfiFusion/FuseLLM/FuseChat/FuseO1）两条技术路线
- 创建 3 个实体页：FuseAI、InfiFusion、mergekit
- 全站累计：29 实体 + 20 概念 + 9 主题 + 4 综述 = 63 页面
- 更新 index.md
- 更新 index.md

## [2026-07-05] ingest | LLM 模型融合深度报告（综述）
- 来源：arXiv 论文 (TIES/DARE/InfiFusion/FuseChat) + HuggingFace 博客 + NVIDIA 技术文章
- 创建综述页「LLM 模型融合深度报告」：原理、参数合并 vs 知识蒸馏两条技术路线、实现方式、评测对比、选型指南
- 全站累计：29 实体 + 20 概念 + 9 主题 + 5 综述 = 64 页面
- 更新 index.md

## [2026-07-05] ingest | Agentic RAG — RAG 从独立系统到 Agent 组件
- 来源：微信公众号"算法狗"《RAG没死，它藏在了Agent架构底下》
- 保存原始素材到 raw/rag-as-agent-component.md
- 创建主题页「Agentic RAG」：RAG 从独立系统降级为 Agent 组件，Agentic RAG 架构、对比传统 RAG
- 更新 RAG 概念页：新增 Agentic RAG 章节
- 全站累计：29 实体 + 20 概念 + 10 主题 + 5 综述 = 65 页面
- 更新 index.md

## [2026-07-05] ingest | RAG 评估体系深度分析
- 来源：G-Eval (arXiv:2303.16634) + LLM-as-Judge (arXiv:2306.05685) + RAGAS (arXiv:2309.15217) + 多篇综述
- 创建主题页「RAG 评估体系与方法论」：评估三维度、4 种方法、RAGAS vs DeepEval 对比、10 篇论文清单
- 更新 RAG 概念页：新增评估相关链接
- 全站累计：29 实体 + 20 概念 + 11 主题 + 5 综述 = 66 页面
- 更新 index.md
