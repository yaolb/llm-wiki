# LLM Wiki — 全站索引

> 自动维护，每次 ingest 后更新。按分类组织，每行一条：链接 + 摘要 + 标签。

---

## 实体
<!-- 人物、模型、工具、数据集、公司/组织 -->

- [Unsloth](wiki/entities/unsloth.md) — 开源 LLM 高效微调框架，CUDA 内核优化实现 2~12 倍训练加速，70%~80% 显存节省 `#工具 #微调 #开源`
- [Firecrawl](wiki/entities/firecrawl.md) — AI 原生网页数据采集引擎，输出 LLM 可消费的 Markdown/JSON，GitHub 14.2 万 Star `#工具 #网页爬虫 #MCP`
- [Snail AI](wiki/entities/snail-ai.md) — 基于 Spring Boot 4 + Spring AI 2.0 的 Java 企业级 AI Agent 平台，Apache 2.0 开源 `#工具 #AI-Agent #Java`
- [OpenSquilla](wiki/entities/opensquilla.md) — AI 编程工具，引入红绿回归证据链实现代码自验证与自修复，成本降低 60%~80% `#工具 #AI编程 #测试驱动`
- [AutoLink](wiki/entities/autolink.md) — 面向大数据场景的语义 Schema Linking 开源工具，将数据库结构转为向量嵌入实现 NL2SQL `#工具 #Text-to-SQL #开源`
- [Claude Code](wiki/entities/claude-code.md) — Anthropic 推出的命令行 AI 编程工具，多 Agent 分层架构，支持 subAgent 委派和项目记忆 `#工具 #AI编程 #Agent`
- [Codex CLI](wiki/entities/codex-cli.md) — GitHub 开源的终端 AI 编程 CLI 工具，支持 Agents/Skills 模式 `#工具 #AI编程 #GitHub`
- [PageAgent](wiki/entities/pageagent.md) — 阿里开源 32KB JS 网页 AI 操控框架，DOM 脱水技术，比 Browser-use 轻 100 倍 `#工具 #Web自动化 #AI-Agent`
- [LightRAG](wiki/entities/lightrag.md) — 港大 GraphRAG 框架，知识图谱替代传统 Chunk，EMNLP 2025，36.7k Star `#工具 #RAG #知识图谱`
- [OpenClaw](wiki/entities/openclaw.md) — 自进化单 Agent 框架，4 层记忆系统（L0-L3），支持 NAS Docker 部署 `#工具 #AI-Agent #记忆系统`
- [Hermes Agent](wiki/entities/hermes-agent.md) — 清华大学自进化 Agent，自动分析失败原因并修正策略 `#工具 #AI-Agent #自进化`
- [Superpowers](wiki/entities/superpowers.md) — 116k+ Star AI 编程 Skills 框架，TDD 驱动的模块化能力扩展体系 `#工具 #AI编程 #Skills`
- [gstack](wiki/entities/gstack.md) — YC CEO Garry Tan 的 Claude Code 技能包，111k Star，角色化 Agent 执行 `#工具 #AI编程 #角色化`
- [OpenSpec](wiki/entities/openspec.md) — 规范驱动开发（SDD）框架，Spec → Execute → Verify → Archive 五阶段流程 `#工具 #AI编程 #SDD`
- [Spec Kit](wiki/entities/spec-kit.md) — GitHub 官方开源的规格驱动开发（SDD）工具包，支持 30+ AI Coding Agent，118k Star，MIT 协议 `#工具 #AI编程 #SDD #GitHub`
- [BMAD](wiki/entities/bmad.md) — 重量级 SDD 平台，BMC 分析 → 架构 → 数据模型 → 代码生成全流程 `#工具 #AI编程 #SDD`
- [ECC](wiki/entities/ecc.md) — Everything Claude Code，21.7 万 Star 的 Claude Code 最强插件合集 `#工具 #AI编程 #插件`
- [MUX0](wiki/entities/mux0.md) — 专为 Claude Code 设计的开源 AI 编程终端，基于 Ghostty `#工具 #AI编程 #终端`
- [MemPalace](wiki/entities/mempalace.md) — 开源 AI 记忆系统，55k Star，ChromaDB + 语义搜索，本地优先 `#工具 #记忆系统 #开源`
- [Apache Burr](wiki/entities/apache-burr.md) — 状态机驱动的 Agent 框架，LangChain 替代方案 `#工具 #Agent框架 #状态机`
- [PYTHIA](wiki/entities/pythia.md) — 本地无密钥 AI Agent 工具，融合 Osiris 实时情报与 MiroFish 多智能体预测，Ollama 运行 `#工具 #AI-Agent #实时感知 #开源情报`
- [UZI-Skill](wiki/entities/uzi-skill.md) — 开源 AI 股票深度分析插件，22维×66评委×22种机构方法，支持 A/港股/美股 `#工具 #股票分析 #投资 #金融`
- [Comet](wiki/entities/comet.md) — 基于 OpenSpec + Superpowers 的自动化 Spec Skills 编排工具 `#工具 #AI编程 #自动化`
- [RAG-Anything](wiki/entities/rag-anything.md) — 港大多模态 RAG，知识图谱统一处理文本/图像/表格 `#工具 #RAG #多模态`
- [cc-switch](wiki/entities/cc-switch.md) — 跨平台 AI 助手桌面工具，104k Star，Rust + Tauri `#工具 #桌面工具 #跨平台`
- [CC-Connect](wiki/entities/cc-connect.md) — 飞书/微信中调用 AI Agent 编程的桥接工具 `#工具 #AI-Agent #飞书`
- [GSD](wiki/entities/gsd.md) — Get Shit Done，面向大型项目的上下文工程系统，解决 Context Rot `#工具 #上下文工程 #大型项目`
- [FlashRT](wiki/entities/flashrt.md) — 高性能实时推理引擎，小批量低延迟，面向具身智能 `#工具 #推理引擎 #低延迟`
- [SeedER](wiki/entities/seeder.md) — 强化学习驱动的知识图谱结构化检索系统 `#工具 #知识检索 #强化学习`
- [Huashu Design](wiki/entities/huashu-design.md) — 花叔开源 Claude Code 设计 Skill，19k Star `#工具 #设计 #UI`
- [khazix-skills](wiki/entities/khazix-skills.md) — 数字生命卡兹克开源 AI Skills 合集 `#工具 #AI编程 #Skills`
- [Understand Anything](wiki/entities/understand-anything.md) — 代码库 → 交互式知识图谱转换工具 `#工具 #代码分析 #知识图谱`
- [html-video](wiki/entities/html-video.md) — 把 HTML + CSS 通过 AI Agent 直接渲染为 MP4 视频，本地运行，插件化引擎，21 模板 `#工具 #视频生成 #AI编程`
- [FuseAI](wiki/entities/fuseai.md) — 中山大学/腾讯发起的开源 LLM 知识融合研究社区 `#模型融合 #开源 #研究`
- [InfiFusion](wiki/entities/infifusion.md) — Reallm-Labs 的统一 LLM 融合框架，首个融合 4 个 14B+ 异构模型 `#模型融合 #知识蒸馏 #LLM融合`
- [mergekit](wiki/entities/mergekit.md) — HuggingFace 流行的模型合并工具，SLERP/TIES/DARE 无需 GPU 即可合并 `#模型融合 #工具 #模型合并`

## 概念
<!-- 技术概念、方法论、理论 -->

- [模型融合](wiki/concepts/model-fusion.md) — 将多个 LLM 通过参数合并或知识蒸馏统一为一个模型，无需从零训练 `#模型融合 #LLM #融合方法`
- [模型微调](wiki/concepts/model-finetuning.md) — 在预训练大模型上继续训练使之适配下游任务，含 Full Fine-tuning / PEFT / LoRA / QLoRA 等变体 `#训练方法 #LLM`
- [MCP 模型上下文协议](wiki/concepts/mcp-model-context-protocol.md) — Anthropic 提出的开放协议，标准化 AI 模型与外部工具之间的通信接口，已获 ChatGPT/VS Code/Cursor 等广泛支持 `#协议 #Agent #标准化 #工具集成`
- [AI Agent](wiki/concepts/ai-agent.md) — 具备自主感知-规划-行动能力的 AI 系统，支持工具使用、记忆管理和多步推理 `#Agent #自动化`
- [RAG 检索增强生成](wiki/concepts/rag-retrieval-augmented-generation.md) — 检索 + 生成的混合架构，已从独立系统演进为 Agent 组件 `#检索 #知识库 #LLM #Agentic`
- [红绿回归测试](wiki/concepts/red-green-regression-testing.md) — AI 自动执行红-绿-回归三道测试关卡，通过后才交付代码的验证管道 `#测试 #AI编程 #自动化`
- [AI 编程](wiki/concepts/ai-programming.md) — LLM 辅助/自动完成代码生成、测试、审查、修复，从补全→自主生成→自验证三个发展阶段 `#AI编程 #开发工具`
- [混合专家模型 MoE](wiki/concepts/moe-mixture-of-experts.md) — 稀疏激活的神经网络架构，每次推理只激活少数专家，同计算量下大幅扩大模型容量 `#模型架构 #稀疏计算`
- [测试驱动开发 TDD](wiki/concepts/test-driven-development.md) — 先写测试再写代码的软件开发方法论，红-绿-重构循环 `#测试 #软件工程`
- [统一开发范式](wiki/concepts/dev-flow-unified-paradigm.md) — 融合 OpenSpec 规范驱动和 Superpowers 纪律驱动的五阶段开发流程 `#开发范式 #AI编程 #规范驱动`
- [自改进AI Agent](wiki/concepts/self-improving-agent.md) — AI Agent 自动记录学习和错误经验，持续自我修复并将重要知识提升为项目记忆 `#AI-Agent #自我修复 #自动化`
- [Spec驱动开发 SDD](wiki/concepts/spec-driven-development.md) — 人写规格说明书 → AI 写代码+测试+验证，人类从"写代码"转为"审 Spec" `#AI编程 #SDD #开发范式`
- [Agent记忆系统](wiki/concepts/agent-memory-system.md) — L0-L3 四层记忆架构，从短期上下文到持久语义记忆 `#AI-Agent #记忆系统 #自进化`
- [本体论 Ontology](wiki/concepts/ontology.md) — 知识工程中形式化描述领域概念及其关系的框架，AI 时代重新变得关键 `#知识建模 #语义网 #Ontology`
- [FDE](wiki/concepts/fde.md) — Forward Deployed Engineer，工程师深入客户现场的 AI 落地范式 `#AI落地 #PMF #方法论`
- [Prompt Caching](wiki/concepts/prompt-caching.md) — AI Agent 工程关键优化技术，缓存系统提示词降低延迟和成本 `#性能优化 #Agent工程 #Claude-Code`
- [Loop Engineering](wiki/concepts/loop-engineering.md) — 设计 Agent 自主执行循环的方法论，替代单次 Prompt 工程 `#AI-Agent #自动化 #方法论`
- [Agent工具选择问题](wiki/concepts/agent-tool-selection.md) — 当 Agent 拥有过多 Tool 时的选择困难与解决方向 `#AI-Agent #Tool管理`
- [AI 网关与模型路由](wiki/concepts/ai-gateway.md) — 聚合多模型提供商，统一 API 接入与自动路由，零成本调用 237 个 AI 免费额度 `#API网关 #模型路由 #成本优化 #Agent基础设施`
- [上下文工程](wiki/concepts/context-engineering.md) — 系统化管理 AI Agent 在大型项目中的代码上下文，解决 Context Rot `#AI编程 #上下文管理`
- [OKF 开放知识格式](wiki/concepts/okf-open-knowledge-format.md) — Google 提出的 AI Agent 可消费结构化知识标准 `#知识格式 #Google #AI-Agent`
- [StarRocks 物化视图深度解析](wiki/concepts/starrocks-materialized-view.md) — 同步/异步物化视图技术原理、SPJG 查询改写算法、刷新策略、使用场景与最佳实践 `#StarRocks #物化视图 #查询改写`

## 主题
<!-- 技术领域、研究方向、行业动态 -->

- [Unsloth — 消费级 GPU 高效微调大模型](wiki/topics/unsloth-efficient-llm-finetuning.md) — 开源框架让普通显卡也能微调 7B 级大模型，2026 年推出无代码 Web UI `#模型训练 #微调 #开源`
- [Firecrawl — AI 原生的网页数据采集引擎](wiki/topics/firecrawl-web-scraping.md) — 将任意网站转为 LLM 可消费的结构化数据，配套 MCP Server 接入 Agent 生态 `#网页爬虫 #MCP #AI`
- [Snail AI — Java 生态的企业级 AI Agent 平台](wiki/topics/snail-ai-agent-platform.md) — 让 Java 开发者不需 Python 就能构建多模型管理、RAG、长时记忆的 Agent 应用 `#AI项目 #Java #Agent`
- [OpenSquilla — AI 代码生成的自验证与自修复](wiki/topics/opensquilla-ai-self-verification.md) — AI 编程从"生成代码"进化到"验证代码"，红绿回归闭环实现可审计的代码交付 `#AI编程 #测试驱动 #自动化`
- [万象AI分析平台](wiki/topics/wanxiang-ai-analysis.md) — 基于 MCP 协议的智能数据分析平台，集成流量地图、交叉分析、AI圈人等全链路能力 `#AI分析 #数据平台 #MCP`
- [AI Agent 技术全景报告 2026](wiki/topics/ai-agent-landscape-2026.md) — 六大趋势 × 架构范式 × 框架对比，基于 50+ 篇技术资料的系统梳理 `#AI-Agent #技术全景 #2026`
- [Karpathy AI编码方法论](wiki/topics/karpathy-ai-coding-methodology.md) — 65行 CLAUDE.md 定义的四条铁律：先想再写、简洁第一、手术式修改、目标驱动 `#AI编程 #方法论 #Karpathy`
- [AI Native 研发体系](wiki/topics/ai-native-dev-system.md) — 以 AI 为核心重新设计软件开发全流程，从辅助工具到 Agent 自主执行 `#AI-Native #研发体系 #软件2.0`
- [Agentic RAG](wiki/topics/agentic-rag.md) — RAG 从独立系统降级为 Agent 工具箱中的组件，由 Agent 自主决定检索策略 `#RAG #Agent #Agentic-RAG`
- [StarRocks 跨数据源查询方案](wiki/topics/starrocks-cross-data-source-query.md) — StarRocks Catalog 方案实现 Hive/Iceberg/MySQL/ES 等跨源 JOIN 查询，v3.0+ 推荐 `#StarRocks #数据查询 #跨数据源`
- [StarRocks Catalog 数据加速策略](wiki/topics/starrocks-catalog-acceleration-strategy.md) — 同构(SR→SR)与异构(MySQL→SR) Catalog 的数据加速策略深度分析与选型推荐 `#StarRocks #数据加速 #Catalog #物化视图`
- [RAG 评估体系与方法论](wiki/topics/rag-evaluation.md) — 评估三维度、LLM-as-Judge / RAGAS / DeepEval 框架对比、论文支撑 `#RAG #评估 #LLM-as-Judge`

## 综述
<!-- 多源对比、综合分析、阶段性总结 -->

- [AI编程Agent框架对比分析](wiki/synthesis/agent-framework-comparison.md) — 从规划、记忆、架构、创新技术四个维度对比 Claude Code / Gemini / Cursor 等主流编程 Agent `#AI编程 #Agent #对比分析`
- [2026上半年万象项目复盘](wiki/synthesis/2026-h1-wanxiang-review.md) — 万象 AI Agent 能力建设、智能圈人、ChatBI、标签治理四大方向复盘 `#复盘 #万象 #2026`
- [BMAD vs OpenSpec：航母与特种兵](wiki/synthesis/bmad-vs-openspec.md) — AI 驱动开发两大赛道的多维度对比与选型建议 `#SDD #对比分析 #BMAD #OpenSpec`
- [AI增强开发三件套](wiki/synthesis/ai-dev-trifecta.md) — OpenSpec + Superpowers + gstack 把 Vibe Coding 拉回工程交付 `#AI编程 #工程交付 #三件套`
- [LLM 模型融合深度报告](wiki/synthesis/model-fusion-deep-report.md) — 从原理、技术路线、实现方式、评测四维度系统性梳理模型融合全貌 `#模型融合 #综述 #评测`

## 标签

- 📑 [标签索引](tags-index.md) — 按标签浏览分类，共 210+ 个标签

---

_最后更新于 2026-07-07_ | 全站 73 页面，覆盖 AI Agent、AI 编程、RAG、知识图谱、SDD、知识管理方法论、模型融合等核心领域
