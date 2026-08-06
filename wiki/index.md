# Wiki Index

## Generated
<!-- openclaw:wiki:index:start -->
- Render mode: `native`
- Total pages: 109
- Claims: 0
- Sources: 10
- Entities: 42
- Concepts: 40
- Syntheses: 6
- Reports: 10

### Sources
- [万象文档归档索引](topics/wanxiang-docs-archive.md) — 万象美事文档空间完整归档概述与导航 `#万象 #文档归档 #导航`
- [万象文档完整目录树](topics/wanxiang-docs-tree.md) — 823 个文档的完整目录树，点击可跳转到本地 Markdown 文件 `#万象 #目录树 #本地文档`
- [万象标签处理与 CK 入库流水线](topics/wanxiang-tag-ck-pipeline.md) — 基于美事文档爬取的标签→CK 6步处理流水线完整梳理，含格式化、位图构建、并发控制、查询模式 `#万象 #ClickHouse #数据接入`
- [AI 网关与模型路由：聚合多模型免费额度](sources/ai-gateway-model-routing.md)
- [LLM Wiki](sources/karpathy-llm-wiki-methodology.md)
- [MCP 模型上下文协议 — 官方文档解读](sources/mcp-official-intro.md)
- [PYTHIA：本地无密钥 AI Agent，全球实时感知 + 预测](sources/pythia-local-ai-agent.md)
- [RAG 作为 Agent 组件](sources/rag-as-agent-component.md)
- [RAG 评估与 DeepEval 方案](sources/rag-evaluation-deepeval.md)
- [UZI-Skill：AI 股票深度分析插件](sources/uzi-skill-stock-analysis.md)

### Entities
- [Apache Burr](entities/apache-burr.md)
- [AutoLink](entities/autolink.md)
- [BMAD](entities/bmad.md)
- [CC-Connect](entities/cc-connect.md)
- [cc-switch](entities/cc-switch.md)
- [Claude Code](entities/claude-code.md)
- [Codex CLI](entities/codex-cli.md)
- [Comet](entities/comet.md)
- [ECC (Everything Claude Code)](entities/ecc.md)
- [Firecrawl](entities/firecrawl.md)
- [FlashRT](entities/flashrt.md)
- [FuseAI](entities/fuseai.md)
- [GitHub Spec Kit](entities/spec-kit.md)
- [GSD (Get Shit Done)](entities/gsd.md)
- [gstack](entities/gstack.md)
- [Hermes Agent](entities/hermes-agent.md)
- [html-video](entities/html-video.md)
- [Huashu Design](entities/huashu-design.md)
- [InfiFusion](entities/infifusion.md)
- [khazix-skills](entities/khazix-skills.md)
- [LightRAG](entities/lightrag.md)
- [MemPalace](entities/mempalace.md)
- [mergekit](entities/mergekit.md)
- [MUX0](entities/mux0.md)
- [OpenClaw](entities/openclaw.md)
- [OpenSpec](entities/openspec.md)
- [OpenSquilla](entities/opensquilla.md)
- [PageAgent](entities/pageagent.md)
- [PYTHIA（本地 AI Agent 实时感知工具）](entities/pythia.md)
- [RAG-Anything](entities/rag-anything.md)
- [SeedER](entities/seeder.md)
- [Snail AI](entities/snail-ai.md)
- [Superpowers](entities/superpowers.md)
- [Understand Anything](entities/understand-anything.md)
- [Unsloth](entities/unsloth.md)
- [UZI-Skill（游资技能库）](entities/uzi-skill.md)
- [Llama-3](entities/llama-3.md)
- [Mistral](entities/mistral.md)
- [DeepSeek](entities/deepseek.md)
- [Qwen](entities/qwen.md)
- [RoaringBitmap](entities/roaringbitmap.md) — 高效压缩位图数据结构，大数据人群圈选标准库，官方仓库 github.com/roaringbitmap/roaringbitmap `#Bitmap #数据结构 #万象`
- [万象](entities/wanxiang.md) — 58集团一站式增长服务平台，标签画像/人群圈选/用户编码，823文档归档入口 `#万象 #数据资产 #增长平台`

### Concepts
- [用户-标签 Bitmap 构建：工程实现详解](concepts/bitmap-construction-engineering.md) — 基于 wanxiang-data-jobs 源码的完整工程级分析，含 Spark UDAF、RoaringBitmap 序列化、Base64 编码、CK 写入、Bucket 分桶全流程 `#Bitmap #工程实现 #Spark #RoaringBitmap`
- [用户-标签 Bitmap 位图构建](concepts/user-tag-bitmap-construction.md) — 用 RoaringBitmap 压缩位图表示"用户-标签值"集合关系，user_code 直接作为 bit 位置索引，支持 O(1) 级集合交并差运算 `#Bitmap #标签 #万象 #ClickHouse`
- [2026年上半年绩效自评](concepts/h1-2026-performance-review.md)
- [58 集团统一指标系统 — API 网关方案设计](topics/58-indicator-api-gateway-design.md)
- [星火灰度上线方案 — 云平台环境隔离与灰度路由](topics/xinghuo-grayscale-deployment.md)
- [Agentic RAG：RAG 从独立系统到 Agent 组件](concepts/agentic-rag.md)
- [Agent工具选择问题](concepts/agent-tool-selection.md)
- [Agent记忆系统](concepts/agent-memory-system.md)
- [AI Agent 技术全景报告 2026](concepts/ai-agent-landscape-2026.md)
- [AI Agent（智能体）](concepts/ai-agent.md)
- [AI Native 研发体系](concepts/ai-native-dev-system.md)
- [AI 编程（AI Programming / AI Coding）](concepts/ai-programming.md)
- [AI 网关与模型路由](concepts/ai-gateway.md)
- [FDE (Forward Deployed Engineer)](concepts/fde.md)
- [Firecrawl — AI 原生的网页数据采集引擎](concepts/firecrawl-web-scraping.md)
- [Karpathy AI编码方法论](concepts/karpathy-ai-coding-methodology.md)
- [LLM Wiki — 基于 LLM 的结构化知识库方法论](concepts/llm-wiki-methodology.md)
- [Loop Engineering](concepts/loop-engineering.md)
- [MCP 模型上下文协议（Model Context Protocol）](concepts/mcp-model-context-protocol.md)
- [OKF 开放知识格式](concepts/okf-open-knowledge-format.md)
- [OpenSquilla — AI 代码生成的自验证与自修复](concepts/opensquilla-ai-self-verification.md)
- [OpenAI 内部数据代理（Data Agent）](concepts/openai-data-agent.md)
- [Prompt Caching](concepts/prompt-caching.md)
- [RAG 检索增强生成（Retrieval-Augmented Generation）](concepts/rag-retrieval-augmented-generation.md)
- [RAG 评估体系与方法论](concepts/rag-evaluation.md)
- [Snail AI — Java 生态的企业级 AI Agent 平台](concepts/snail-ai-agent-platform.md)
- [Spec驱动开发 (SDD)](concepts/spec-driven-development.md)
- [Spring AI 基础上实现 MCP 与接口统一管理 — 方案深度研究报告](concepts/spring-ai-mcp-architecture-research.md)
- [StarRocks Catalog 数据加速策略深度分析：同构 vs 异构](concepts/starrocks-catalog-acceleration-strategy.md)
- [StarRocks 物化视图深度解析：原理、使用与场景](concepts/starrocks-materialized-view.md)
- [StarRocks 跨数据源查询方案（深度调研）](concepts/starrocks-cross-data-source-query.md)
- [Unsloth — 消费级 GPU 高效微调大模型](concepts/unsloth-efficient-llm-finetuning.md)
- [万象AI分析平台](concepts/wanxiang-ai-analysis.md)
- [上下文工程 (Context Engineering)](concepts/context-engineering.md)
- [群体智能（Swarm Intelligence / 蜂巢理论）](concepts/swarm-intelligence.md) — 去中心化自组织涌现智能，与多 Agent 系统、人工蜂群效应的深度联系 `#AI #群体智能 #多Agent #分布式系统`
- [本体论 (Ontology)](concepts/ontology.md)
- [模型微调（Fine-tuning）](concepts/model-finetuning.md)
- [模型融合（Model Fusion / Model Merging）](concepts/model-fusion.md)
- [测试驱动开发（Test-Driven Development, TDD）](concepts/test-driven-development.md)
- [混合专家模型（Mixture of Experts, MoE）](concepts/moe-mixture-of-experts.md)
- [红绿回归测试（Red-Green-Regression Pipeline）](concepts/red-green-regression-testing.md)
- [统一开发范式 (OpenSpec × Superpowers)](concepts/dev-flow-unified-paradigm.md)
- [自改进AI Agent](concepts/self-improving-agent.md)
- [已 Push 代码撤回：Git revert vs reset](concepts/git-revert-vs-reset.md) — 公共分支用 revert，私有分支用 reset，面试高频题 `#Git #版本控制 #工作流`

### Syntheses
- [ES 倒排索引 Bitmap 机制研究与万象借鉴方案](syntheses/elasticsearch-bitmap-inverted-index-adoption.md) — Lucene 倒排索引位图机制源码级研究（FOR/PFOR/IndexedDISI/filter cache）+ ES vs CK 对比 + 实时圈选/嵌套圈选/画像分析三场景借鉴方案 `#Elasticsearch #倒排索引 #Bitmap #万象`
- [2026上半年万象项目复盘](syntheses/2026-h1-wanxiang-review.md)
- [AI增强开发三件套：把Vibe Coding拉回工程交付](syntheses/ai-dev-trifecta.md)
- [AI编程Agent框架对比分析](syntheses/agent-framework-comparison.md)
- [BMAD vs OpenSpec：AI驱动开发的航母与特种兵](syntheses/bmad-vs-openspec.md)
- [LLM 模型融合深度报告：原理、路线、实现与评测](syntheses/model-fusion-deep-report.md)
- [Agent Memory 五篇关键论文综述](syntheses/agent-memory-five-papers.md)
- [OpenClaw vs Hermes Agent — 执行派 vs 进化派全面对比](synthesis/openclaw-vs-hermes.md) — 龙虾 vs 爱马仕，2026 年两大顶流 AI Agent 框架对比 `#OpenClaw #Hermes #龙虾 #爱马仕`

### Reports
- [Claim Health](reports/claim-health.md)
- [Contradictions](reports/contradictions.md)
- [Lint Report](reports/lint.md)
- [Low Confidence](reports/low-confidence.md)
- [Open Questions](reports/open-questions.md)
- [Person Agent Directory](reports/person-agent-directory.md)
- [Privacy Review](reports/privacy-review.md)
- [Provenance Coverage](reports/provenance-coverage.md)
- [Relationship Graph](reports/relationship-graph.md)
- [Stale Pages](reports/stale-pages.md)
<!-- openclaw:wiki:index:end -->
