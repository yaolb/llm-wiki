# LLM Wiki — 操作日志

> 纯追加，不修改历史。记录每次 ingest / query / lint / update。

---

## [2026-08-06] ingest | WorkBuddy 数仓专家团（ishare 文章）

- CDP 抓取 58 知享文章（ishare id=130675）：WorkBuddy 数仓专家团
- 归档原文到 meishi_docs/ishare/workbuddy-data-warehouse-expert-team.md
- 创建 topics/workbuddy-data-warehouse-expert-team.md：
  - 五角色 AI 专家团（顾全局/高见远/徐维度/寇豆码/严把关）+ 职责边界矩阵
  - 指标库 = 人工唯一职责（定规则 vs 写代码分离）
  - 详细设计文档 = 协作中枢（ETL 开发与测试并行）
  - 六维度测试、传统 vs 专家团全流程对比
  - 关联 ai-agent / agent-tool-selection / spec-driven-development
- 更新 index.md（110 页）+ log.md

## [2026-08-06] update | 用户-标签 Bitmap 数据流程完善

- 爬取"数据应用部分分享（离线）"（space/1801880755144548352），20 张图归档到 _来源文档/
- user-tag-bitmap-construction.md 补充：
  - 完整数据流程总览（业务配置→ETL→编码→位图→CK→圈选→反解）
  - 引擎选型背景（Parquet 宽表/ES 双引擎问题 → CK 倒排表模型）
  - Redis 16384 分桶 + INCR 顺序编码实现（位图稠密性）
  - 阶段四 CK 写入优化：物化视图列识别（300亿 2-3h→10min）、datapart 控制、index_granularity=128 读放大优化、C++/Java 位图差异
  - 正交计算（id/x 分 shard，避免中间位图拉取 IO）
  - fetch 反解两阶段模型
- 更新参考来源 + log.md

## [2026-08-06] ingest | ES 倒排索引 Bitmap 机制研究 + 万象借鉴方案

- 经 grilling 确认需求：组合方案（机制研究+对比+借鉴设计）、源码级深度+评审级结论、三场景（实时圈选/复杂嵌套圈选/画像分布分析）、集团级 ES 已有+7.x/8.x 通用+定制分支
- 抓取并归档万象 ES 调研报告（space/2043900981556649984 → _来源文档/ES调研报告.md）
- 创建 synthesis/elasticsearch-bitmap-inverted-index-adoption.md：
  - Lucene 存储层 FOR/PFOR/bit-packed/skip list/singleton（存时压）
  - 查询执行层 IndexedDISI（65536 分块三态，与万象 bucket 同构）/FixedBitSet/SparseFixedBitSet/BooleanQuery/filter cache（查时位图）
  - ES vs CK 对比表 + 三场景借鉴方案 + 定制分支（Lucene codec 插件/长尾 singleton/热门位图缓存）
- 修复 _来源文档/马建彪工作交接.md 格式（表格链接粘连/空链接/裸SQL/表清单结构化）
- 更新 index.md（109 页）+ log.md

## [2026-08-06] update | 用户-标签 Bitmap 概念页 CK 表结构更新为生产真实结构

- 用户提供 hdp_teu_dpd_rpt_wanxiang_23_string_v2_local 实际建表语句
- 替换推测的 AggregatingMergeTree 结构为 ReplicatedMergeTree 真实结构：
  - user_ids String（Base64 编码 Bitmap）+ user_code 物化列 base64Decode 自动解码
  - shard 分片 / _batch_num 批次（PRIMARY KEY 首字段）
  - PARTITION BY (dt, tag_name)，TTL 7 天，hdd_in_order 存储策略
- 查询模式更新为 rpt_wanxiang_{brand}_view + bitmap_union(user_code)
- 更新 log.md

## [2026-08-06] ingest | 万象实体页

- 创建 entities/wanxiang.md — 万象增长服务平台实体页
- 消除 [[wanxiang]] 孤儿 wikilink（3 处引用：user-tag-bitmap-construction / bitmap-construction-engineering / wanxiang-tag-ck-pipeline）
- 实体页链接到万象文档目录树 [[wanxiang-docs-tree]] 与归档目录
- 更新 index.md（108 页）+ log.md

## [2026-08-05] update | DSL 文档补充到 Bitmap 工程方案

- 爬取美事文档 DSL 页面（space/2084884717378842624）
- 归档到 meishi_docs/万象/归档/_来源文档/DSL.md
- bitmap-construction-engineering.md 新增"八·五、查询侧 DSL 与人群圈选 SQL"章节：
  - 底层表结构（rpt_wanxiang_{brand}_view / user_code_view / user_package）
  - 群体画像：bitmap_count(bitmap_and) + TOP100 截断 + 字典映射
  - 页面圈选：多重 bitmap_and 嵌套 + 编码视图过滤 + 人群包落库
  - 嵌套标签圈选：跨 sub_tag AND + uint64 解码（bitand/位移/xor 恢复 userId）+ sub_bitmap 截断
  - 构建侧 ↔ 查询侧对应关系表
- 更新 log.md

## [2026-08-05] ingest | RoaringBitmap 实体页

- 创建 entities/roaringbitmap.md — 补充官方 GitHub 仓库链接 (github.com/roaringbitmap/roaringbitmap)
- 覆盖数据结构（三种 Container 自适应）、58 定制版特性、人群圈选应用
- 消除 user-tag-bitmap-construction / wanxiang-tag-ck-pipeline 中的孤儿 wikilink [[roaringbitmap]]
- 更新 index.md（107 页）+ log.md

## [2026-08-04] ingest | 万象文档空间完整归档

- 使用 meishi-docs-crawler 递归爬取万象美事文档空间（space/1552506105505054722）
- 发现 catalogue API 特性：需递归搜索所有嵌套层级来匹配页面ID才能展开子节点
- 爬取结果：826 个 Markdown 文件，6MB，1760 个去重外部链接
- 覆盖10个一级目录：产品文档、技术文档、产品运营、业务合作、月会、调研、AI相关、品牌映射、触达渠道、埋点列表
- 创建 topics/wanxiang-docs-archive.md — 文档归档导航页
- 所有原始文档保存到 meishi_docs/万象/归档/（含目录树 + 页面导航 + 链接索引）
- 更新 index.md（105 页）+ log.md

## [2026-08-03] ingest | Bitmap 构建工程实现详解（基于源码分析）

- 克隆 wanxiang-data-jobs、data-app-dp-utils、data_engine_script 等 3 个仓库
- 逐文件阅读 10+ 核心 Java 源文件，追溯完整代码调用链
- 创建 concepts/bitmap-construction-engineering.md — 6 阶段工程级文档：
  - SmartTagKvFormat（标签值类型校验，5 种 valueType）
  - UserCodeToRoaringBitmap + RoaringBitMapByteUDAF（uint32/uint64 双模式位图构建，4 shard 并行）
  - RoaringBitmapToClickhouse + RoaringBitMapBase64UDF（紧凑/完整双格式 Base64 编码 + 50MB JDBC 批量写入）
  - CkBitmapMergeMain（CK: groupBitmapMergeState / SR: bitmap_union 预估位图合并）
  - CombineBitmapSpark + BucketRBMUserIds（user_code→user_id 反向查询 Bucket 位图，65536 分桶）
  - BucketRBMUserIdsSr（SR 自研 BitmapValue 兼容版本）
- 含完整数据结构映射、RoaringBitmap Container 内部结构、分桶索引算法、CK/SR 兼容方案
- 更新 index.md（104 页）+ log.md
- 建立 user-tag-bitmap-construction ↔ bitmap-construction-engineering 交叉引用

## [2026-08-03] ingest | 万象标签处理与 CK 入库流水线 + 用户-标签 Bitmap 构建

- 使用美事文档爬虫抓取马建彪工作交接页面（space/2043955735540387841）及 3 个子文档
- 创建 topics/wanxiang-tag-ck-pipeline.md — 标签→CK 的 6 步处理流水线（OneID→编码→格式化→Bitmap→合并→入库）
- 创建 concepts/user-tag-bitmap-construction.md — 用户-标签 Bitmap 位图构建原理，含 uint32/uint64 编码、RoaringBitmap 映射、分桶策略、查询模式
- 深入分析了 58 定制 RoaringBitmap 的编码稳定性和并发控制机制
- 原始素材来源：美事文档（docs.58corp.com），3 份设计文档
- 更新 index.md（+2 页面：1 Source + 1 Concept）

## [2026-07-30] ingest | IDMapping 专题总结
- 爬取美事文档 IDMapping 空间（TEG-大数据部/03-数据应用部/IDMapping）
- IDMapping 目录：idmapping1.0 / 2.X / 3.X / SmartIDMapping下线 / 实时IDMapping / 图腾项目
- 创建 topics/idmapping.md — 覆盖背景、发展历程、实时 IDMapping 技术方案（V1.0，陈丽媛设计）
- 原始素材保存到 meishi_docs/IDMapping/

## [2026-07-06] ingest | AI Agent 概念补充 + PYTHIA / UZI-Skill / AI 网关
- 新增实体页：[[PYTHIA（本地 AI Agent 实时感知工具）]]（本地无密钥实时感知 Agent）、[[UZI-Skill（游资技能库）]]（股票深度分析插件）
- 新增概念页：[[AI 网关与模型路由]]（聚合多模型免费额度，自动路由与 fallback）
- 更新概念页：[[AI Agent（智能体）]]（补充反应式/深思型/学习型分类体系 + 关键能力维度 + 2026 趋势）
- 更新主题页：[[AI Agent 技术全景报告 2026]]（新增本地 Agent 与实时感知趋势）
- 保存3份原始素材到 raw/
- 全站累计：31 实体 + 21 概念 + 11 主题 + 5 综述 = 69 页面
- 更新 index.md

## [2026-07-07] ingest | Spec Kit / html-video / StarRocks 跨源查询
- 新增实体页：[[GitHub Spec Kit]]（GitHub 官方 SDD 工具包，118k Star）、[[html-video]]（HTML 转 MP4 视频工具）
- 新增主题页：[[StarRocks 跨数据源查询方案（深度调研）]]（Catalog 方案实现跨源 JOIN，587 行深度调研）
- 更新实体页：[[Claude Code]]（新增隐私与遥测配置章节）
- 全站累计：30 实体 + 21 概念 + 12 主题 + 5 综述 = 72 页面
- 更新 index.md

## [2026-07-07] update | Claude Code 隐私配置 + Codex CLI 实体
- 更新实体页：[[Claude Code]]（完整补充 10+ 隐私环境变量配置）
- 新增实体页：[[Codex CLI]]（GitHub 开源终端 AI 编程工具 + 隐私配置）
- 来源：微信公众号「灵感回路」
- 全站累计：31 实体 + 21 概念 + 12 主题 + 5 综述 = 73 页面
- 更新 index.md

## [2026-07-06] update | MCP 概念页 — 官方文档更新
- 保存原始素材到 raw/mcp-official-intro.md
- 更新概念页：[[MCP 模型上下文协议（Model Context Protocol）]]（补充官方定义

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

## [2026-07-08] feat | 增加标签云功能

- wiki-viewer: 侧边栏增加标签云，点击标签按标签筛选文档
- wiki-viewer: 页面标签可点击，点击后自动按标签过滤
- wiki: 新增 tags-index.md 标签索引页（自动生成）
- scripts: 新增 regenerate-tags.sh 脚本

## [2026-07-08] ingest | StarRocks Catalog 数据加速策略分析

- 新增 wiki/topics/starrocks-catalog-acceleration-strategy.md
- 分析同构(SR→SR)与异构(MySQL→SR) Catalog 的加速方案对比
- 更新 index.md 和 tags-index.md

## [2026-07-08] ingest | StarRocks 物化视图深度解析

- 新增 wiki/concepts/starrocks-materialized-view.md
- 覆盖同步vs异步MV技术原理、SPJG改写算法、刷新策略、使用场景
- 更新 index.md、tags-index.md

## [2026-07-08] ingest | 2026年上半年绩效自评

- 新增 wiki/topics/h1-2026-performance-review.md
- 基于周报复盘撰写绩效汇报，包含企业价值观自评、万象&Pandas工作内容、多维总评
- 更新 index.md

## [2026-07-08] ingest | Spring AI + MCP 接口统一管理方案研究

- 新增 wiki/topics/spring-ai-mcp-architecture-research.md
- 三大方案对比：原生Starter / AI Gateway / 分层Sidecar
- 推荐渐进式演进路线：Phase1原生Starter→Phase2引入Gateway

## [2026-07-08] update | 方案一深度展开：MCP + 接口 + 文档三位一体

- 新增 4.1~4.9 完整展开方案一
- 接口即MCP：@AiApi 统一注解 + 自动桥接处理器
- 分布式MCP调用：McpClientManager + Nacos动态发现
- Streamable HTTP 传输详解与配置
- 三层文档体系：MCP Schema + OpenAPI + Markdown门户
- 完整项目结构、启动验证、推荐实施路线

## [2026-07-08] update | Nacos + 域名统一访问层设计

- 新增第五章：Nacos + 域名深度设计
- 包含四层域名架构、分层域名设计
- CoreDNS+Nacos插件、Spring Cloud Gateway、Nginx Upsync 三种方案
- 生产环境完整架构图、配置示例、推荐场景

## [2026-07-08] update | 补充 StarRocks Data Cache 配置详解

- 新增 Data Cache 配置章节：架构、版本差异、完整配置步骤
- 按表粒度控制、验证方法、JDBC Catalog 行为说明
- 常见问题 FAQ

## [2026-07-10] update | OKF 开放知识格式全面更新

- 补充 OKF v0.1 完整内容：YAML Frontmatter、Permissive Consumption Model、Reserved Files
- 新增 Karpathy LLM Wiki ↔ OKF 深度对比矩阵
- 补充 Google 参考实现（Enrichment Agent / Static Viz / 示例包）
- 补充 LLM Wiki 页面引用 OKF 的关联链接

## [2026-07-10] ingest | Agent Memory 五篇关键论文综述

- 摄入微信公众号文章：Generative Agents / MemGPT / MemoryBank / LoCoMo / A-MEM
- 创建 synthesis/agent-memory-five-papers.md 综述页
- 更新 concept/agent-memory-system.md 补充论文对照表
- 更新 index.md 添加综述入口

## [2026-07-10] ingest | Llama-3 / Mistral / DeepSeek / Qwen 实体页

- 创建四个主流 LLM 实体页，含 GitHub/官网链接
- 更新 unsloth 主题页引用（待创建→[[wikilink]]）
- 更新 index.md 添加入口（Entities: 36→40）

## [2026-07-18] update | OpenClaw vs Hermes Agent（龙虾 vs 爱马仕）深度对比
- 新增综述页：[[OpenClaw vs Hermes Agent — 执行派 vs 进化派全面对比]]（五大核心维度对比 + 选型建议）
- 更新 [[OpenClaw]] 实体页：添加 "🦞 龙虾" 昵称
- 更新 [[Hermes Agent]] 实体页：添加 "🧠 爱马仕" 昵称
- 更新 index.md

## [2026-07-18] ingest | 群体智能/蜂巢理论 — AI 深度分析
- 新增概念页：[[群体智能（Swarm Intelligence / 蜂巢理论）]]
  - 核心原理：去中心化、自组织、涌现智能
  - 经典算法：PSO、ACO、ABC
  - 与 AI 的深度联系：多 Agent 系统、BeeAGI、人工蜂群效应、Anthropic 蜂巢组织
  - 范式转变对比：从"单一模型变大"到"多系统变聪明"
- 更新 index.md

## [2026-07-10] ingest | 星火灰度上线方案（58 美事文档）

- 摄入星火灰度上线方案文档（作者：张自博）
- 创建 topic/xinghuo-grayscale-deployment.md
- 重点分析：云平台通过环境变量覆盖 spring.application.name 区分灰度/线上环境
- 补充 Spring Cloud Gateway + Nacos 灰度路由完整实现
- 增加与指标网关灰度方案的对比矩阵

## [2026-08-09] ingest | 从 Arrow 到 Iceberg 到 Polaris 到 Ossie（微信公众号「本体与AI」）

- 爬取微信公众号文章：https://mp.weixin.qq.com/s/4EpQTgZdD2wqg-5s-wtIog
- 归档原文到 raw/data-stack-semantic-standardization-wechat.md
- 新增 topics/data-stack-semantic-standardization.md：
  - 大数据栈十年五层开放标准演进：Parquet(2013 文件层) → Arrow(2016 内存层) → Iceberg(2020 表格式) → Polaris(2025 目录层) → Ossie(2026 语义层)
  - 核心洞察：每层稳定后行业把下一层交出去做标准；开放标准最难的是竞品签字（Snowflake×Databricks 共推 Polaris）
  - Ossie 语义层 = 给数据表加"翻译说明书"（YAML 字段→业务概念、指标算法、同义词），AI Agent 倒逼语义标准化
  - 标签：agent / 大数据 / 语义
- 关联 ontology / ai-agent / rag-retrieval-augmented-generation
- 更新 index.md（110→111 页）+ log.md

## [2026-08-15] query | 万象合作方盘点
- 检索 wanxiang-dev-docs 业务合作文档，盘点与万象合作的业务线与外部数据/资方
- 内部合作 BG/BU：HBG（爱房/商业地产/家居）、HRG（招聘/魔方）、LBG（家服/到家）、ABG（新车/二手车）、用价多部门、UXD
- 外部合作方：友盟（数据采买）、个推（外部标签）、中银/北银（数科项目资方）

## [2026-08-15] query+fix | Bitmap 文档盘点与修复
- 盘点：7 个核心 bitmap 页面（user-tag-bitmap-construction / bitmap-construction-engineering / roaringbitmap / user-code-encoding / elasticsearch-bitmap-inverted-index-adoption / wanxiang-crowd-package-extraction / wanxiang-tag-ck-pipeline）
- 修复 index.md syntheses/→synthesis/ 断链（7 处），补充人群包提取页索引条目
- 接入孤立页 wanxiang-crowd-package-extraction（补 4 处 wikilink + Related 区块），idmapping 接入位图网络

## [2026-08-19] ingest | J-Space 插件让 DeepSeek V4 Pro 0813 超越 Fable 5（头条「智猩猩AI」）

- 抓取头条文章（智猩猩AI 公众号转载，原文 mp.weixin.qq.com）：
  - 头条 URL：https://www.toutiao.com/article/7675317704001962496/
  - 发布：2026-08-18，作者 Jun Song 转发社区测试结果，浏览量 25 万+
- 归档原文到 raw/j-space-deepseek-v4-pro-wechat.md
- 新增 topics/j-space-deepseek-v4-pro-0813.md：
  - 核心论点：模型能力 ≠ Agent 最终表现，推理时控制是能力释放"最后一公里"
  - 两大黑盒现象：接口过拟合（Minimal 依赖）、思维链二极管（路径承诺/推理链长度失当）
  - J-Space 七大控制组件（工作空间加载/选择性路由/功能性第一人称/稠密轨/持久账本/checkpoint/经验验证恢复闭环）
  - 实验条件：Harness Minimal + reasoning_effort=max + t=1.0 + top_p=0.95，多数基准超 Fable 5
- 新增 entities/j-space-cognition-suite.md（推理时控制协议插件）
- 更新 entities/deepseek.md：补充 V4 Pro 0813（1.6T/49B/1M 上下文、官方基准、定价）与 DeepSeek Harness v0.1（MIT、Cordis 插件化）
- 标签：DeepSeek / AI Agent / 推理时控制 / 基准测试
- 关联 ai-agent / context-engineering
- 更新 index.md（111→113 页）+ log.md

## [2026-08-19] ingest | Milvus 3.0 Highlight：词法+语义高亮解决 Agent 搜索噪音（Zilliz 公众号）

- 抓取公众号文章（Zilliz，作者岳志澄）：
  - URL：https://mp.weixin.qq.com/s/LLOT7O4fbmGh2nmMA3s-Jg
  - Milvus 3.0 开源解读系列
- 归档原文到 raw/milvus-3-0-highlight-wechat.md
- 新增 topics/milvus-3-0-highlight.md：
  - 问题：饱和检索噪音浪费 token、分散 LLM 注意力
  - 词法高亮 LexicalHighlighter：BM25/TextMatch token 匹配、fragment 机制（fragment_size=100 / num_of_fragments=5 / fragment_offset）
  - 语义高亮 SemanticHighlighter：独立语义模型二次解读，解决查询与文档词汇不重叠问题
  - 自研开源语义高亮模型：中英双语/大窗口/协议友好，与 Context Pruning 一体两面，可剪 80% 上下文
  - 边界：高亮为后处理，不参与召回排序；语义高亮依赖外部模型部署
- 新增 entities/milvus.md（Zilliz 开源向量数据库，3.0 能力全景）
- 标签：Milvus / 向量数据库 / RAG / 上下文剪枝
- 关联 rag-retrieval-augmented-generation / context-engineering / ai-agent
- 更新 index.md（113→115 页）+ log.md

## [2026-08-19] ingest | 语义高亮技术全景综述（多源调研）

- 用户发起：分析当前语义高亮技术现状
- 调研来源（4 个）：
  - Zilliz 公众号：Milvus 3.0 Highlight 文章（已入库 topics/milvus-3-0-highlight.md）
  - arXiv 2508.02872：Highlight & Summarize: RAG without the jailbreaks
  - Zilliz 开源双语语义高亮模型公告（PR Newswire）+ HuggingFace semantic-highlight-bilingual-v1
  - Naver Provence / XProvence（Cross-Encoder + 高亮头）
- 新增 synthesis/semantic-highlighting-techniques.md：
  - 原理：Encoder-only token 打分（0-1）→ 句子级聚合 → 阈值过滤
  - 代表模型：Zilliz semantic-highlight-bilingual-v1（0.6B/BGE-M3 Reranker v2 底座/8192 token 窗口）、Naver Provence/XProvence（重排器加头，近零成本）
  - 价值：token 成本降 70-80%、质量提升、可解释性、Agent 工作流
  - H&S 设计模式：highlighter+summarizer 解耦，用户问题不暴露给生成 LLM，防 jailbreak
  - 趋势：块级召回→句子级上下文、重排器+高亮头一体化、高亮即上下文工程
- 更新 entities/milvus.md + topics/milvus-3-0-highlight.md 关联
- 更新 index.md（115→116 页）+ log.md

## [2026-08-19] ingest | Anthropic 数据分析 Agent：Claude 自动化 95% 内部数据分析（AI寒武纪 转载）

- 抓取公众号文章（AI寒武纪 转载 Anthropic 官方博客）：
  - 原文：https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude
  - 发布：2026-06-04（公众号转载）
- 归档原文到 raw/anthropic-claude-data-analytics-wechat.md
- 新增 topics/anthropic-data-analytics-agent.md：
  - 核心结论：95% 分析查询自动化、约 95% 准确率；"数据分析不是写代码"
  - 三类失败模式：映射模糊 / 数据过期 / 检索失败
  - 分层技术栈：数据基础（权威数据集+三重执行标准+单一代码库+元数据一等公民）→ 可信数据源（语义层>血缘>查询语料库>业务上下文）→ Skill（路由器+Unbook）
  - 验证三件套：离线评测 / 消融实验（负面结果价值）/ 在线验证（对抗性审查+6%、来源页脚、静默失败未解决）
  - 关键数据：无 Skill 21%→有 Skill 95%+；Skill 不维护一个月 95%→65%
  - 附 Skill File Skeleton 完整框架要点
- 更新 entities/claude-code.md 关联
- 标签：Anthropic / Claude / 数据分析 / Agent / 语义层
- 关联 context-engineering / spec-driven-development / data-stack-semantic-standardization / workbuddy
- 更新 index.md（116→117 页）+ log.md

## [2026-08-19] fix | wiki-viewer 端口冲突修复
- 根因：server.mjs 未运行，端口 5174 被 datawork/frontend vite 与 deepseek-harness vitepress 两个无关 dev server 抢占，浏览器打开的是错误页面，点击左侧索引无法显示
- 修复：默认端口 5174 → 6174，规避其他项目 5xxx 端口自增冲突
- 验证：/api/pages（159 页）、/api/page、index.html 均正常，server 已运行于 localhost:6174

## [2026-08-21] ingest | 用户画像系列参考资料汇编
- 归档素材到 raw/user-profile-series-reference.md（9 主题：标签体系/应用场景/标签挖掘/标签存储/人群圈选/ID-Mapping/AI检索/标签营销/在线推荐）
- 新增 topics/user-profile-series.md：三篇九主题框架 + 核心知识点提炼（标签三分法、宽表 vs 位图、OneID 图计算、RAG 两种标签场景、DMP vs CDP、推荐漏斗）+ 合规提醒 + 写作技巧
- 更新关联：idmapping.md（画像链路第一环）、rag-retrieval-augmented-generation.md（标签过滤 vs 标签值注入）、roaringbitmap.md（宽表 vs 位图）、user-tag-bitmap-construction.md（画像九主题全景）
- 标签：用户画像 / 标签 / Bitmap / 人群圈选 / ID-Mapping / RAG / 营销 / 推荐
- 更新 index.md + log.md

## [2026-08-21] ingest | 各大模型厂商 KV-Cache 处理方式全景对比
- 归档素材到 raw/kv-cache-providers-comparison.md（原 workspace 根目录 6月23日分析文档，本次补摄入）
- 新增 topics/kv-cache-providers-comparison.md：六厂商对比总览（Claude 显式断点/GPT-5 自动/Gemini 混合/DeepSeek 磁盘缓存+MLA/Qwen3 混合/Grok 自动）、按场景选型、Prompt 优化最佳实践、注意力头压缩演进（MHA→MQA→GQA→MLA）
- 核心结论：DeepSeek 唯一磁盘 KV Cache（MLA 压缩 4×，64 token 最细粒度，命中价 10%）；Claude 最优控制（4 断点）；Gemini 显式 24h TTL 最长
- 更新关联：prompt-caching.md（KV Cache 上层应用）、deepseek.md（MLA 架构）
- 标签：KV Cache / Prompt Caching / 推理优化 / DeepSeek / MLA
- 更新 index.md + log.md

## [2026-08-21] ingest | LLM-as-a-Verifier 论文与官方实现
- 归档素材到 raw/llm-as-a-verifier-wechat.md（arXiv 2607.05391 + GitHub 官方实现资料）
- 新增 topics/llm-as-a-verifier.md：验证作为新 scaling 轴，三招核心方法（logprob 期望连续评分 / 重复评估+标准分解 / pivot 排序算法）
- 关键数据：deepseek-v4-flash 自验证 Best-of-3 86.5%、Best-of-5 88.0%（Oracle 96.6%），超 Claude Fable 5，成本 11 倍便宜
- 更新关联：opensquilla-ai-self-verification.md（AI 自验证另一路线）、deepseek.md（v4-flash 验证器后端）
- 标签：LLM-as-a-Verifier / 推理时验证 / Best-of-N / DeepSeek / Terminal-Bench
- 更新 index.md + log.md

## [2026-08-21] ingest | 本体建模五步法（企业架构EA之家）
- 抓取公众号图片消息（企业架构EA之家 eahome.com.cn），OCR 提取 36 张图文内容
- 归档素材到 raw/ontology-modeling-five-steps-wechat.md
- 新增 topics/ontology-modeling-five-steps.md：五步法（业务梳理→本体建模→数智化融合→智能体构建→智能体运行）
  - 业务梳理五类成果（流程/角色/对象/任务/规则）
  - 本体建模：实体五类（设计/工艺/生产/供应/结果）、属性四类、关系六类（组成/使用/依赖/替代/影响/处置）、跨域影响网络
  - 数智化融合底座：统一封装/标准化/可治理/可演进
  - 智能体四要素 + 多智能体专业分工 + 规则与生成式 AI 双驱动可信决策
  - 运行六环节：问题输入→意图识别→任务规划→多智能体执行→结果校验→决策输出
- 更新 concepts/ontology.md 交叉引用（与四步建模法互补）
- 标签：本体论 / Ontology / 多智能体 / 企业AI / 复杂工业场景
- 更新 index.md + log.md

## [2026-08-24] ingest | 用户画像概念与方法论（两篇文章）
- 抓取两篇文章并归档 raw/：
  - raw/user-profile-yonghong-tag-system.md（永洪社区《用户画像标签体系建设指南》tid=71561，2024-05）— 画像五要素、标签五维分类、标签体系结构（结构化/半结构化/非结构化）、四层建模方法、标签权重公式（牛顿冷却+TF-IDF）、五层体系架构
  - raw/user-profile-datahunter-method-practice.md（数猎天下《数据分析之用户画像方法与实践》20181212158）— Persona vs Profile、四类应用、行业画像差异、构建三步法、标签权重=衰减因子×行为权重×网址子权重、三大误区
- 新增 synthesis/user-profile-concept-methodology.md：概念辨析（Persona 虚构典型 vs Profile 真实标签化模型）+ 统一方法论（数据采集→清洗→标准化→目标分析→建模→标签挖掘→可视化）+ 应用场景 + 交叉引用 user-profile-series.md
- 标签：用户画像 / Persona / User Profile / 标签体系 / 方法论 / 精准营销
- 更新 index.md + log.md

## [2026-08-24] update | user-profile-series.md 参考资源与相关概念完善
- 主要参考资源模块重构为四小节：核心参考书（赵宏田两本+项亮+王喆，补豆瓣/微信读书链接）、开源项目（Await-d/one-id、Datawhale Fun-Rec、fengchi66/bigdata 附 URL）、平台案例（神策/个推/极光/火山引擎/GrowingIO + 社区媒体）、完整清单
- 修复 raw 引用路径：[[../raw/...]] → ../../raw/user-profile-series-reference.md（原路径从 topics/ 解析会指向 wiki/raw/）
- 相关概念模块按四组重构并补齐链接：画像基础、存储与圈选（Bitmap/CK/StarRocks/人群包）、身份与检索（ID-Mapping/RAG/Agentic RAG/Agent记忆）、业务落地（万象/万象AI分析平台）
- 校验所有 wikilink 与目标页 H1 精确匹配（wiki-viewer 按 H1 标题解析）
- 更新 log.md

## [2026-08-24] fix | 修复参考清单链接 404（Cannot GET /raw/...）
- 根因：wiki-viewer 的 /api/page 仅允许 wiki/ 目录（path 校验 startsWith WIKI_DIR），raw/ 素材无法渲染；直接改回 markdown 相对链接仍会 404
- 修复：新增 wiki/sources/user-profile-series-reference.md（raw 内容编译版 + frontmatter，type: source），主题页改用 wikilink [[用户画像系列文章 · 参考资料汇编]] 导航
- 顺带发现：index.md 中 6 个 sources/*.md 链接（ai-gateway-model-routing 等）指向的 wiki/sources/ 目录不存在，文件实际在 raw/——同类坏链，待修复
- 更新 index.md + log.md

## [2026-08-24] fix | 修复 index.md 历史坏链：7 个 sources/*.md 指向不存在目录
- 根因：commit 4bf9e82（ingest: AI Agent 分类体系 + PYTHIA + UZI-Skill + AI 网关）起，index.md 的 Sources 条目写成 sources/xxx.md，但文件实际归档在 raw/，wiki/sources/ 从未存在 → viewer 全部 404
- 修复：7 个 raw 素材（ai-gateway-model-routing / karpathy-llm-wiki-methodology / mcp-official-intro / pythia-local-ai-agent / rag-as-agent-component / rag-evaluation-deepeval / uzi-skill-stock-analysis）复制到 wiki/sources/ 并补 frontmatter（type: source + 原始素材归档链接）
- 验证：8 个 sources 页面 /api/page 全部 200
- 更新 log.md

## [2026-09-05] ingest | 万象 ID 映射实现方案设计文档（代码级）
- 新增 topics/wanxiang-idmapping-design.md：基于 dataengine 仓库两个项目（wanxiang-automated-market-idmaping 生产侧 / wanxiang-real-label-execute-select 消费侧）的代码走读，编译为纯 Markdown（GFM 表格 + ASCII 图 F0/F3/F4/F5/F7/F9），覆盖系统全景、键结构（键A 昨-今双日期 Hash / 键B 品牌哈希桶 String / Wtable rowKey）、三级查询协议（flag 1-4）、slot 分组 pipeline、演进决策、死代码地图与复刻指南
- 原始 HTML 可视化版归档 raw/wanxiang-idmapping-design.html（viewer 不渲染 raw/，仅存档）
- 交叉链接：topics/idmapping.md（业务层）相关文档区新增 wikilink 指向本页，updated 改 2026-09-05
- index.md 补两条目：idmapping.md（此前遗漏未收录）+ 本页
- 更新 log.md

## [2026-09-07] update | 万象 ID 映射补全服务端章节与全链路闭环（§10）
- 读通 norman-oneservice-idmapping（外部 idmapping 查询服务，SCF RPC + Guice + StorageServiceCenter，git 末端已下线资源）：唯一活接口 queryIDMapping 三模式 OFFLINE(Wtable)/REALTIME(键A·仅品牌150/151)/ALL(离线→实时)，键结构与 dataengine 消费端逐字节一致、协议双向实锤
- 新增 §10：服务接口层（@OperationAsyn 异步回包 + 校验链）、OneID 设计意图（StrategyEnum MRU/MFU/ONEID 三策略已废弃、IDType 29 种全集）、优化方案对比（服务端逐条 exist+hget vs 消费端 batch=100 slot pipeline）、全链路闭环图（采集→处理入库→服务→消费→回流修复，证据等级标注）
- 下游定位：norman-dataservice-inner 人群包链路（CrowdPackageProcess）注入 IOneServiceIDMap 调 queryIDMapping
- 概述补服务端导览；index.md 条目摘要同步
- 更新 log.md

## [2026-09-08] ingest | LoopArena：阿里 DreamX 开源 Loop 调度能力评测（智猩猩AI 公众号）
- 用户提供微信公众号文章（智猩猩AI），正文动态渲染无法直接抓取 → 经搜狐同文转载获取全文
- 归档素材到 raw/looparena-wechat.md（含微信原链 + 搜狐镜像链接）
- 新增 topics/looparena-benchmark.md：固定 Worker（Qwen3.7-Plus）只考 Controller 的解耦评测设计
  - 机制：Evidence Packet（只读 Reporter 打包进展）→ Controller 输出 Loop Contract（下一轮目标/保留行为/完成条件），Controller 无代码工具、决策经 Worker 落地并受执行验收
  - 三类评测：Type I 单步指令选择（90 题，最低约 0.31 美元，5 分钟上手）；Type II 任务切片（27，成本较全任务降 64.4%，排序 ρ=0.9747）；Type III 完整任务（27，11 SCBench + 16 BeyondSWE，最强 GPT-5.5 也仅 24.69% SSR）
  - 榜单：GPT-5.5 全面第一（87.78/51.85/24.69）；Qwen3.7-Plus 完整任务第二；DeepSeek-V4-Flash Type I 第二（77.78）但 Type III 第四——单步决策 ≠ 长程带队
  - 参考策略警示：fixed vs no-control 在 Type II 差 7.4pt、Type III 持平 18.52% → 切片结论需回全任务核对
  - 工程：Apache-2.0，CLI looparena-type1/2/3，arXiv:2608.28281
- 更新 concepts/loop-engineering.md：新增「谁来做 Loop 里的调度——Controller 评测」章节与交叉引用
- 标签：LoopArena / Loop Engineering / Agent 评测 / Controller
- 更新 index.md + log.md

## [2026-09-09] ingest | 时空可组合性编程范式论文分析（arXiv 2608.25512）
- 新增 topics/spatiotemporal-composability.md：北大+DeepSeek-AI 论文分析，revertible effects / reactive coeffects / context paradigm 三机制 + 动态组合演算五元定理 + Cordis/Koishi 生产案例与局限评价，定位为 Agent Harness 热可组合性拼图（与 LoopArena 调度评测、J-Space 推理时控制并列）
- 原始 PDF 归档 raw/arxiv-2608.25512-spatiotemporal-composability.pdf
- index.md Sources 区头部新增条目；wikilink 目标 H1 已校验（LoopArena/J-Space/AI Agent/Agent记忆系统/Loop Engineering/DeepSeek）
- 更新 log.md
## [2026-09-09] ingest | 知乎 Cordis 解读整合进论文分析页
- 提取知乎文章（苏迟但到，2026-08-13，AI 生成解读，229 赞）全文，归档 raw/zhihu-cordis-design-philosophy.md
- topics/spatiotemporal-composability.md 新增 §6 社区解读对照：granularity mismatch 框架、undo log 类比、UNLOADING/episode 嵌套、Confluence 反 state drift、Cordis vs Sandbox 边界、transactional HMR、四条工程约束（witness/independence/循环依赖/interface versioning）
- 对照结论：事实层面零冲突；该文独特贡献为框架表达与工程约束具体化，已标注 AI 生成可信度注意事项

## [2026-09-11] update | Cordis 时空可组合性 vs 既有方案逐项对比
- 新增 synthesis/cordis-vs-existing-composability-approaches.md：Cordis 与 React useEffect / Spring DI / Erlang 热升级 / DSU 逐项对比（14 维：粒度/时间可组合性/逆操作责任/撤销顺序/空间可组合性/依赖解析/依赖变化响应/生命周期次序/热替换/状态保持/失败回滚/逆校验/系统边界/代价）+ 横向汇总表 + 5 条结论
- 结论：仅 Cordis 同时覆盖时间+空间两轴；手写逆是所有方案的共同成本、差异在粒度；撤销顺序与 provider 响应式重连是分水岭；Cordis 运行时不校验逆 + 跨系统边界只能补偿
- topics/spatiotemporal-composability.md 相关概念区补充 wikilink
- 标签：deepseek / harness
- 更新 index.md + tags-index.md + log.md

## [2026-09-16] ingest | Anthropic 多 Agent 编排方式（任务 DAG + proof-sketch）
- 素材：微信公众号「司徒驴三」《Anthropic 提出一种新的多 Agent 编排方式》（微信正文动态渲染，改用 curl + 本地 HTML 解析提取全文），归档 raw/anthropic-multi-agent-dag-orchestration-wechat.md
- 新增 topics/agent-task-dag-orchestration.md：从 Anthropic Lean 4 费马大定理项目（几十个 Claude Agent / 11 天 / 约 1300 万行 Lean / 30,300 中间定理）提炼五节方法论
  - 任务契约：DAG 节点存"要交付的结果"（形式化声明）而非角色；声明与证明分离；边必须有依据（A 在 B 前 ≠ B 依赖 A）
  - proof-sketch：引用未证子定理的有条件推导，SKETCH_ACCEPTED → "方案成立"与"工作完成"是两个状态；多候选路线依赖归属各方案
  - 调度：里程碑定方向 → 未解决叶子节点 → 先读已有分解/失败/讨论；反模式=只挑容易节点导致主目标停滞；复用进流程（自然语言找候选、正式条件定适用）
  - 状态与验证：声明不可改、需求变更发新条目；Agent 说"完成"只是报告，需验证器；软件无等价物 → 验收条件与检查程序独立管理
  - 落地：从可复现问题开始、跨会话任务字段表、Worker 循环、原子领取+租约、验证绑定输入版本/哈希、最小扩展性实验（2 Worker 中途换人）
- 交叉引用：topics/spatiotemporal-composability.md 相关概念区、concepts/ai-agent.md「多 Agent 协作」新增「依赖图模式」条目
- 定位：与 LoopArena（调度能力）、J-Space（推理时控制）、Cordis 时空可组合性（harness 组件热替换）并列的 Agent 编排侧拼图
- 标签：多Agent / Agent编排 / 任务DAG / Prove2Me / Anthropic / Lean4 / Agent-Harness / 状态管理 / 验证
- 更新 index.md + tags-index.md + log.md

## [2026-09-16] ingest | MetaRSI-v1：把 RSI 拆成 Data/Model/Harness 三算子（智猩猩AI）
- 素材：今日头条转载「智猩猩AI」《清华北大斯坦福等联手做了个RSI系统！核心组件Harness-RSI已开源》（2026-09-14），正文藏在内联 URL 编码 JSON 的 articleInfo.content，经解码 + HTML 清洗提取全文；归档 raw/metarsi-v1-recursive-self-improvement-toutiao.md
- 新增 topics/metarsi-v1-recursive-self-improvement.md：CosmosMind + 清华/北大/斯坦福，S=(D,θ,H) 三改进面 + Data-RSI/Harness-RSI/Model-RSI 三算子
  - RSI Kernel 七步（仅 Diagnose/Propose 由模型做，其余确定性代码）+ 不可改动权限边界（禁止改评估器 Q*、测试集、发布规则、资源账本）
  - Data-RSI：四维学习签名 + 生成者-验证者隔离校验（Anchor 独立重解）+ schema/语义双闸门；Harness-RSI：五槽位脚手架 + HarnessPatch（修复假设/操作/预期/风险）+ 失败分片重放 + 复杂度预算 + 严格超越才替换；Model-RSI：受约束 Recipe 搜索空间 + 固定 θ₀ 累积数据
  - H→M 禁止（旧学习信号过期），五种合法转换；三级递归：算子 → RSI²（提案策略 + 算子排序）→ MetaRSI²（调度策略）
  - 实测（Qwen3.5-35B-A3B 无教师）：TB2.1 23.6→31.9、SWE-bench Pro 10.3→19.5、GPQA-D 71.2→83.8、AIME 55.0→68.3，平均 +10.9（固定组合仅 +7.3，多出的 3.6 pt 来自动态调度）
  - API 路线：仅 Data-RSI + Harness-RSI，六大前沿模型 TB2.1 全部自我提升（+5.6~9.2，均值 +7.3）
  - 开源：Harness-RSI 运行时 + Genome 格式 → RSI-Harness（原文未给仓库链接，标注待补充）
- 更新 concepts/self-improving-agent.md：新增「学术化版本：MetaRSI-v1 的三算子框架」小节（轻量自改进 vs 论文级上位框架对照）+ 相关概念扩链
- 交叉引用：concepts/loop-engineering.md、concepts/context-engineering.md、topics/agent-task-dag-orchestration.md 相关概念区各补互链
- 标签：RSI / 递归自我改进 / MetaRSI / Harness / Data-RSI / Model-RSI / 自改进Agent / LoRA / Agent-Harness / 开源
- 更新 index.md + tags-index.md + log.md

## [2026-09-16] ingest | 紫东太初 ZDTaichu5.0‑9B 开源（官方账号）
- 素材：今日头条账号「中科紫东太初」（厂商官方发布）《重磅开源！紫东太初 ZDTaichu5.0‑9B》（2026-09-14，模型 9-15 开源）；正文在内联 URL 编码 JSON 的 articleInfo.content，解码 + HTML 清洗提取全文；归档 raw/zdt-taichu-5-0-9b-toutiao.md
- 新增 topics/zdt-taichu-5-0-9b.md：约 9B 参数通用多模态模型，支持单图/多图/长视频/任意分辨率
  - 四层能力链：空间感知 → 复杂三维空间推理 → 具身条件推理 → 物理交互决策
  - 厂商自述成绩：九大空间理解基准 8 项同参数组别第一；MindCube-tiny 78.27；ViewSpatial 跨视角（仅本模型输出正确相对方位）；ERQA/RoboSpatial 同参数开源第一；视频定位（"从左到右第二个银色盒子"）只有本模型坐标正确
  - 自适应循环推理：熵门控 + 前向传播内部循环（不依赖外部 CoT）+ 阻尼更新/双重停止判据/轨迹读出与状态回滚；内部循环提单步质量、外部任务循环接环境反馈
  - 稀缺开源点：除权重外开放覆盖 预训练/SFT/高质量退火/GRPO 可验证强化学习 的完整数据生产管线（哈希-URL 双去重、三维能力标签体系、思维链合成、能力域-难度-质量三维标签、坐标命中/格式合规奖励）
  - 落地（自述）：科研自动化干湿实验闭环、智能制造备料配送/机台上料、端侧设备控制
- 新增 entities/zdt-taichu.md：中科紫东太初（中科院自动化所孵化、全球首个中文千亿参数级多模态大模型、SAIL 奖 + 网信办备案 + 信通院可信认证双认证）
- 交叉引用：concepts/loop-engineering.md 相关概念区补充「内部循环 + 外部任务循环」互链
- 可信度标注：全文标注"厂商官方自述，无第三方复现"，开源仓库地址标为待补
- 标签：紫东太初 / ZDTaichu / 多模态大模型 / 空间具身 / 具身智能 / 开源 / GRPO / 循环推理 / 中科院自动化所
- 更新 index.md + tags-index.md + log.md

## [2026-09-16] ingest | Apache Ossie 实战：AI 取数系统的业务语义地基（胡二说八道）
- 素材：微信公众号「胡二说八道」《Apache Ossie 实战：我如何给 AI 取数系统搭一层业务语义地基》（2026-08-22，ct 1787374527）；微信正文经 curl + js_content 解析提取全文；归档 raw/apache-ossie-in-practice-ai-data-retrieval-wechat.md
- 定位：与 topics/data-stack-semantic-standardization.md（本体与AI，2026-08-09）为同一 Ossie 主题的「Why → How」前后篇，双方已互链
- 新增 topics/apache-ossie-ai-data-retrieval.md：
  - 核心判断：难的不是让大模型写 SQL，而是让它知道公司数据是什么意思；最危险的是"看起来合理、跑得出结果、但口径错误"的 SQL
  - 三层业务语义知识库：Ossie（结构化/可执行/可交换）+ Wiki（解释/背景/例外/决策过程）+ 图&向量库（关系推理与反向映射）
  - Ossie 对象模型对应：Dataset / Field / Relationship / Metric / AI Context / Custom Extensions；指标层级（事实表原始字段 → 原子指标 → 派生指标 → 衍生指标）；跨 Hive/StarRocks/PG 统一语义
  - 八步链路：理解问题 → 召回结构化语义 → 召回业务知识 → 关系扩展 → 生成 SQL → 执行 → 代码二次处理 → 可视化与可追溯解释
  - 四类验证：SQL 逻辑 / 强业务规则（内部账号、测试门店、退款不进收入）/ 数据量级（异常提示）/ 历史问句对比（差异必须可解释）
  - 持续更新闭环：元数据同步 Ossie（版本管理+校验）、历史问句沉淀为业务知识、测试集回归
  - 结论：Ossie 不替代 Wiki / 图向量 / 指标治理 / 数据建模，而是链路的中间语义地基；参考 Apache Ossie GitHub
- 更新 topics/data-stack-semantic-standardization.md：相关概念区补续篇互链 + updated 改 2026-09-16
- 标签：Ossie / 语义层 / AI取数 / Text-to-SQL / 数据治理 / 知识库 / 图数据库 / 向量检索 / 指标治理
- 更新 index.md + tags-index.md + log.md

## [2026-09-17] ingest | Datastrato 2.0：Agent Context 的三重支柱（DataFun）
- 素材：微信公众号「DataFun」《全球首发！Datastrato 2.0：统一元数据、开放语义层与 Ontology》（2026-09-16）；微信正文经 curl + js_content 解析提取全文；归档 raw/datastrato-2-0-agent-context-three-pillars-wechat.md
- ⚠️ 来源性质：DACon 2026 北京站演讲预告 + Datastrato 2.0（Gravitino 2.0 企业版）发布稿，含大量票务活动信息；厂商主张为自述，未见第三方验证
- 新增 topics/datastrato-agent-context-three-pillars.md：
  - 问题起点：业务部门问"这个月到底卖了多少钱"，数仓里三张表、两套口径，抛给 Agent 后 Agent 更懵——算得对不对、背后规则是什么、能不能照此下指令都不知道
  - 核心判断：Agent 从"回答问题"走向"推理/决策/执行"后，瓶颈不再是模型会不会答，而是**没有可依赖的企业上下文**；需要三件事——数据意味着什么 / 业务实体如何关联 / 行动受哪些规则约束
  - 三重支柱（逐层递进）：① 统一元数据（Apache Gravitino，跨云跨引擎多模态描述数据资产）→ ② 开放语义层（指标/维度/业务定义跨工具共享，钉死"一个指标多个口径"）→ ③ Ontology（业务实体、关系与规则显式建模，把自然语言意图映射到真实数据与操作边界内）
  - 路径纠偏（全文最有价值处）：自上而下从应用任务出发建语义出价值快但易生**上下文孤岛**；自下而上从元数据治理出发底座扎实但**推不出业务含义**；推荐**混合路径**——业务场景牵引建模 + 统一元数据连接 + 业务校验/Agent 反馈持续迭代
  - 保鲜论：上下文会"过期"（数据漂移 / 业务规则变化 / 模型升级），**不保鲜的上下文反而会把 Agent 带偏**
  - 产品化：数据目录（Data Catalog）→ AI Context Platform；堵俊平（Apache Gravitino 发起人、原 LF AI & Data 董事主席）主讲，同场李明皇讲"每个回答都有据可查"
- 三条路线对照（本页新增对照表）：Ossie 原篇＝开放标准（语义层是五层数据栈最后一块拼图）／Ossie 实战＝工程落地（三层语义知识库+八步链路+四类验证）／Datastrato＝产品化三层（元数据为地基、语义居中、Ontology 收口）；分歧点＝元数据层归属与是否设显式本体终点；共识＝上下文必须靠反馈迭代保鲜
- 交叉引用：topics/data-stack-semantic-standardization.md、topics/apache-ossie-ai-data-retrieval.md、concepts/ontology.md（均补互链并更新 updated）
- 标签：Agent上下文 / 元数据 / 语义层 / Ontology / Gravitino / Datastrato / 数据目录 / AI-Context-Platform / 上下文工程
- 更新 index.md + tags-index.md（416 标签）+ log.md

## [2026-09-17] ingest | AgentConnect：@Agent 下发任务的开源自托管平台（AI产品银海）
- 素材：微信公众号「AI产品银海」《Claude Tag 被开源了？现在你可以随时 @任意 Agent》（2026-08-27）；微信正文经 curl + js_content 解析提取全文；归档 raw/agentconnect-open-source-agent-hosting-wechat.md
- 性质提示：体验型产品文章（含作者实操演示），非厂商官方发布稿；能力描述为作者自述，未见第三方验证
- 新增 entities/agentconnect.md（实体页）：
  - 定位：开源、可自托管的 Agent 托管平台（Apache 2.0），把 Anthropic「Claude Tag」的 @Agent 下发任务模式产品化；核心判断"任务下发、后台执行和结果回传由同一套平台承接"
  - 多角色托管：每个角色独立配置模型/记忆/工作区/权限/MCP/Connectors/Skill/沙箱；**Harness 可换**（Claude Code / Codex / DeepSeek Harness 一键创建）——这是与 Claude Tag（绑定 Claude）最大的不同
  - 触发源：IM @（Discord/Slack/Telegram/GitHub/GitLab）、Webhook、代码仓库事件、定时 Schedule
  - 实操演示（跨境电商选品）：百炼 MCP 取候选商品 → 统一类目/价格/热度 → 写入飞书多维表格「选品机会池」→ 补竞品价格与销量分布生成价格-评分-销量气泡图 → 高潜进重点视图 → 结论成飞书文档回传 Discord；团队不用重复搬运数据
  - 可信数据源论证（全文最有价值段）：网页搜索整理的走势存在价格时间点/单位/时区/口径不一致，定时晨报会把这些误差直接写进结论；故 MCP 取可信数据、Skill 固定分析步骤与校验规则、Agentic 框架做执行；输出保留数据时间与来源、数据缺失明确标记
  - 与 OpenClaw 对照表（新增）：多角色 + Harness 可换 + 多渠道 vs 单 Agent + L0–L3 分层记忆；共同点是"IM @ → 后台异步 → 回传"
  - 作者判断："会调用模型的团队越来越多，能让 Agent 真正接手固定任务的团队仍然很少"；角色配置/Skill/数据连接/权限规则/任务流程都会沉淀为组织资产，故自托管价值在迁移不用从零
- 交叉引用：entities/openclaw.md（对比区）、entities/snail-ai.md、concepts/ai-agent.md（相关实体）、concepts/mcp-model-context-protocol.md（相关实体）
- 标签：工具 / 开源 / AI Agent / Agent托管平台 / MCP / 自托管 / Apache2.0 / IM集成 / Claude Tag
- 更新 index.md + tags-index.md + log.md

## [2026-09-28] ingest | Pi Agent 的 Context 管理（大模型智能/青稞AI）
- 素材：微信公众号「大模型智能」转载「青稞AI」（作者 cecilia）《到底什么是 Context？万字长文谈 Pi Agent context 管理》（2026-09-28，约 14000 字）；微信正文经 curl + js_content 解析提取全文，末尾技术群邀请/推荐位文本已剔除；归档 raw/pi-agent-context-management-wechat.md
- 性质：技术解析长文（作者以 Pi Agent 源码为对象逐层拆解），含大量内部数据结构定义，属一手工程细节分析，非厂商发布稿
- 关联定位：Pi 即 concepts/pi-coding-agent.md 记录的 earendil-works 开源终端编码 Agent（MIT）；本篇补的是该实体页缺失的**内部机制层**
- 文章起点：小红书争论「Skill 是 Prompt 还是 Context？」→ 作者先区分 Prompt（相对静态的指令设计）与 Context（运行中动态形成的信息环境）
- 新增 topics/pi-agent-context-management.md：
  - Context 五要素：System Prompt / Tool Definitions / User Messages / Assistant Messages / Tool Results；前两者为静态前缀，后三者为动态部分；三者分工 Model（决定下一步）· Harness（组装管理 Context、校验执行工具）· Environment（承载真实状态）
  - KV-Cache 友好三原则：保持前缀稳定 / 动态信息向后追加（不回头改前缀）/ 用标准消息结构（system·user·assistant·tool，不自行拼接）
  - 分层：AgentSession（管会话怎么跑：prompt/abort/continue、任务队列、重试、Compaction）vs AgentSessionRuntime（生命周期容器）；引入 AgentSessionServices 解决「切 Session 却沿用旧 cwd 资源」的环境错配——先按目标 cwd 重建 Services 再建 Session
  - 消息模型：Tool Call 不是独立消息而是 AssistantMessage.content 的一部分；ToolResultMessage 经 beforeToolCall→execute→afterToolCall 生成，异常转错误结果而非中断 Loop
  - Skill 两阶段：System Prompt 只放 name/description/location 索引 → 任务匹配后 read SKILL.md 正文才进入 Context
  - 长程任务：agent_end 结束的是本轮 Run 的持续更新而非 Context 本身；历史沉淀 Session State；只有 compaction 真正改变历史形态
  - Context 预算管理三步：预算内全量 / 超预算截断预览（保留尾部）/ 完整输出落盘按需 read（2000 行·50KB 双限，边产生边处理，清 ANSI）
  - 两层 Failover：Provider 层不改 Agent Context（同轮重发）；Session 层先回滚失败 AssistantMessage 再从有效 Context 重启 → 说明 Context 还需支持回滚/恢复/重建
  - Compaction 九个细节：①切点按 token 预算且不能切在 Tool Result 上 ②split-turn 补因果摘要 ③previous-summary 增量合并 ④summary 自带 token 预算 ⑤生成 task continuation state 而非聊天总结 ⑥read/write/edit 文件清单程序化保留（语义交 LLM、事实交程序）⑦摘要生成不走 Agent Loop（避免递归膨胀）⑧真正重建为 [CompactionSummary, ...RecentMessages] 专门消息类型 ⑨Compaction 记录持久化可追踪
  - 结论：Compaction 是 Context representation transformation——把远端历史从高成本原始消息表示转成低成本结构化摘要表示；RunLoop 管增长，Compaction 管降维与重建
- 交叉引用：concepts/pi-coding-agent.md（延伸阅读）、concepts/context-engineering.md、concepts/prompt-caching.md、concepts/agent-memory-system.md、topics/datastrato-agent-context-three-pillars.md（治理视角 vs 运行时视角对照）
- 标签：Pi Agent / 上下文工程 / Context / compaction / KV-Cache / Agent-Harness / 长程任务 / Prompt
- 更新 index.md + tags-index.md + log.md

## [2026-10-03] ingest | EvoOntology：让 Data Agent 自己维护本体层（DataFunTalk）

- 素材：微信公众号「DataFunTalk」《重磅开源 EvoOntology：打掉本体"建设、维护、更新"难题》（2026-10-01）；微信正文经 fetch-article.py 抓取，--assets 落盘原始快照 + 正文图 21 张；归档 raw/evontology-self-evolving-ontology.md
- 性质：**媒体对论文的解读稿**（DataFunTalk 技术社区媒体），非论文原文；所有实验数字均转述自论文，**未见第三方复现验证**
- 论文：《EvoOntology: A Self-Evolving Ontology Layer for Data Agents》，中国人民大学团队（RUC-DataLab），2026-09-14 发布并开源；arXiv 2609.15779 / GitHub ruc-datalab/EvoOntology；作者之一张绍磊（人大信息学院助理教授）将于 DACon 2026 北京站（10-23~24）分享
- 新增 topics/evontology-self-evolving-ontology.md：
  - 核心命题：Ontology 从「提前写好的静态说明书」→「Agent 运行时查询、并用执行轨迹反向更新的服务」；维护者从数据团队变成 Agent 自己
  - ① 静态 Semantic Layer 塞进 Prompt 反而降准：DDR-Bench Trajectory-Wise，Claude-Sonnet-5 无 Ontology 72.5% → 静态 57.5% → EvoOntology 81.3%；GPT-5.6-sol 68.5% → 65.5% → 93.5%；六模型平均 +17.8 pt
  - ② 三层结构：Content（Terms/Mappings/Constraints/Evidence）、Schema（本体自身结构）、Tool（Agent 怎么调用）；只给轻量 Manifest，按需经 MCP 的 browse/resolve 查询
  - ③ 轨迹反向更新：Builder Agent 冷启动建初始本体（含 Evidence）→ Evolution Agent 分析轨迹找失败模式 → 定位该改哪层 → 生成**局部 Patch**（非重建）→ Candidate vs Parent 同组验证任务成对评测，更好才接受
  - 消融：完整 89.5%；取消 Gate 78.3%；取消 Attribution 也下降 → Self-Evolving ≠ 自由改库
  - ④ 成本反降：轮均输入 3.2K→4.6K，但轮数 14.6→8.4，总 Token 52.6K→42K（−20%），Trajectory-Wise 69.5%→89.5%；对比普通 Memory 75.8%——Memory 存"过去怎么做"，Ontology 沉淀"可查询可组合的业务规则"
  - ⑤ 跨模型不通用：四模型各自进化所得 Term 两两 Jaccard ≤0.62，交叉迁移至少降 6.6 pt（平均差最高 10.9 pt）；层贡献 Tool 57% / Content 34% / Schema 9% → **"怎么用"比"补多少"更重要**
  - 局限（论文自认）：仅 DDR-Bench/InsightBench/BIRD 类 Benchmark；真实企业权限/规则冲突/多人修改/审计/版本治理复杂得多
- 交叉引用：concepts/ontology.md、topics/ontology-modeling-five-steps.md、topics/apache-ossie-ai-data-retrieval.md、topics/data-stack-semantic-standardization.md、topics/anthropic-data-analytics-agent.md（均加反向引用）
- 标签：Ontology / 本体论 / 语义层 / Data Agent / 自进化 / MCP / EvoOntology / 轨迹归因 / 企业AI / 人大
- 更新 index.md + tags-index.md + log.md

## [2026-10-04] ingest | HyperFrames：用HTML就能快速做出视频（青鱼学AI）

- 素材：微信公众号「青鱼学AI」《HyperFrames：用HTML就能快速做出视频》（2026-08-31 18:09），短帖
- 抓取：web_fetch 失败 → curl 拿到的是 JS 渲染外壳（无 js_content / rich_media_content）→ 改用无头 Chromium（playwright 1.63 + headless_shell-1228，executablePath 指定）渲染取正文；原始快照（渲染后 DOM，3.7MB，已 gitignore）落 `raw/assets/hyperframes-html-video-wechat/original.html`
- 归档：`raw/hyperframes-html-video-wechat.md`（正文约 400 字，无图）
- 新增 `entities/hyperframes.md`：
  - HeyGen 开源的程序化视频渲染框架，Apache 2.0 免费可商用
  - 核心：把做视频变成写网页——HTML + `data-*` 属性排时间线 → 无头浏览器逐帧渲染 → FFmpeg 编码 MP4，无需剪辑、帧级精确、输出确定可复用
  - 「为 AI Agent 而生」：内置 20 个 Agent Skills，AI 编程助手自主完成 规划→写HTML→配动画→渲染出片；配套 50+ 组件市场 / Studio 可视化编辑器 / Figma 导入 / 云端渲染
  - GitHub `heygen-com/hyperframes`；官网 `hyperframes.heygen.com`
- 交叉引用：`entities/html-video.md`（其「渲染引擎架构」默认引擎 Hyperframes → 改为指向本页，并加「相关」区块反向引用）
- 注意：html-video 页写的是引擎名 "Hyperframes"（小写 f），本篇为 HeyGen 同名项目，判断为同一物，已做互链；若后续发现为不同项目需拆分
- 标签：视频生成 / AI编程 / 开源工具 / html-to-video / Agent Skills / HeyGen / HyperFrames
- 更新 index.md + tags-index.md + log.md

## [2026-10-04] ingest | 顶层本体、行业本体库整理（含开源）（基线沉思）

- 素材：微信公众号「基线沉思」《顶层本体、行业本体库整理（含开源）》（2026-09-03 17:57）——一份**人工整理的本体标准链接清单**
- 抓取：web_fetch 只回 readability 片段（722B）→ 改用无头 Chromium 渲染取全文（5023 字）；原始快照落 `raw/assets/ontology-standards-and-libraries/original.html`（已 gitignore）；正文无图（结尾一张知识星球二维码未收录）
- 归档：`raw/ontology-standards-and-libraries.md`（18 张分组表，含全部名称+URL）
- 新增 `topics/ontology-standards-and-libraries.md`：
  - 结构：5 个顶层本体（BFO 2.0 / DOLCE / UFO-OntoUML / SUMO / GFO）+ W3C 跨行业基础设施 8 项（OWL 2 / RDF 1.1 / SKOS / PROV-O / DCAT 3 / SSN-SOSA / Schema.org / SPARQL 1.1）+ 16 个行业本体域
  - 行业域：制造/工业4.0、能源/电力、油气/流程、金融/监管、医疗/生命科学、建筑/BIM、供应链/零售、智慧城市/IoT、数字孪生、法律/合规、农业/食品、交通/物流
  - 代表项：IOF、AAS(IDTA)、IEC CIM OWL、FIBO、SNOMED CT、HL7 FHIR(+RDF)、OBO Foundry(GO/ChEBI/UBERON)、IFC+ifcOWL、BOT、CityGML 3.0、DTDL、W3C WoT TD、ETSI SAREF 全系列
  - 作者提示：ISO 正式标准多需付费，但对应 **OWL/RDF 实现版本通常可在 GitHub 免费获取**
- 交叉引用：`concepts/ontology.md`（相关概念+1）、`topics/ontology-modeling-five-steps.md`（相关概念+1）均加反向引用
- 标签：Ontology / 本体论 / 顶层本体 / 行业本体 / 语义层 / 开源标准 / OWL / RDF / 知识图谱 / 参考资料
- 更新 index.md + tags-index.md + log.md

## [2026-10-04] ingest | KV Cache 机制详解（亦行学社）

- 素材：微信公众号「亦行学社」（原文「小H无记」）《KV Cache 机制详解》（2026-09-29 18:49），科普长文，约 1.5 万字 + 28 张图
- 抓取：web_fetch 仅回 readability 片段（812B）→ 无头 Chromium 渲染取全文 + 懒加载滚屏触发图片；`--assets` 流程下载 28 张正文图全部成功；原始快照落 `raw/assets/kv-cache-mechanism-explained/original.html`（已 gitignore）
- 归档：`raw/kv-cache-mechanism-explained.md`（16354 字，图在正文原位引用）
- 新增 `topics/kv-cache-mechanism-explained.md`：七章脉络（RNN 困境→Attention→Transformer→Q/K/V→自回归与因果掩码→缓存什么→显存代价→六维优化→四家实战→参考论文）
  - 一句话本质：KV cache = 用显存换计算
  - 分界：Prefill 算力密集（定 TTFT）/ Decode 带宽密集（每步只算 1 token 却读全部 KV）——所有稀疏/驱逐优化只在 Decode 划算
  - 显存公式 `2 × batch × 层数 × KV头数 × 头维度 × token数 × 字节`；Llama2-7B 每 token 512KB、4096 ctx≈2GB；GQA(4头) 比 MHA(32头) 省 8 倍；256K ctx≈128GB
  - 四大开源模型：DeepSeek MLA（KV−93.3%、吞吐+5.76×，cache≈2.25 组 GQA）／Qwen GQA→Gated DeltaNet／GLM MHA→MLA+DSA（MLA 省存储、DSA 省计算，动态稀疏不省存储）／Kimi KDA+MLA 3:1 混合（K2 KV−75%、吞吐 6×、1M ctx；K3 93 层=69 KDA+24 Gated MLA）
  - 启示：缓存对象从「多头 K/V」→「潜向量」→「循环状态」；推理系统存储层要兼容「混合架构 + 超长上下文」
- 交叉引用：`topics/kv-cache-providers-comparison.md`（相关概念加反向引用）
- 标签：KV Cache / 推理优化 / Attention / 显存 / DeepSeek / MLA / GQA / 线性注意力 / 长上下文 / Transformer
- 更新 index.md + tags-index.md + log.md

## [2026-10-12] ingest | 从本体论到 Fabric Ontology（Deon的学习小站）

- 素材：微信公众号「Deon的学习小站」《从本体论到 Fabric Ontology》（2026-09-15），长篇教学/实操笔记，约 4.3 万字 + 19 张图，三篇 + 四附录
- 抓取：web_fetch 直接报 `Readability ... returned no content` → `fetch-article.py` **自动走新加的无头渲染兜底**（本次兜底链路首个真实用例），19/19 图全部本地化；快照 5.1MB 落 `raw/assets/fabric-ontology-from-ontology/original.html`（已 gitignore）
- 归档：`raw/fabric-ontology-from-ontology.md`（93402 bytes）
- 新增 `topics/fabric-ontology-from-ontology.md`（10813 bytes）：
  - 贯穿案例：连锁奶茶店冷链断裂追责（投诉→批次→车→制冷状态 / 投诉→门店→冷柜→温度历史）
  - 第一篇：哲学本体论 → Gruber 定义考据 → 术语表/分类学/本体 → 语义网 RDF/RDFS/OWL/SPARQL 为何难普及（败在 shared）→ 知识图谱实用主义转向 → **RDF 图 vs 属性图分叉**（GQL 2024 = ISO/IEC 39075）→ **LLM 三种失败**（术语歧义/关系臆测/无法解释）+ grounding 上限 + 从回答到执行动作
  - 第二篇：Fabric IQ（Microsoft IQ 四块之一）三层结构；六类 Item；**Ontology declares what connects and why. Graph stores and traverses.**；实测建本体会自动生成 3 个 Item（Lakehouse+SQLEndpoint+GraphModel）→ 本体是**一层声明**非独立存储；**属性图 + GQL 不是 RDF + SPARQL**；对象模型（实体类型/键只能 string|integer/静态+时序属性/关系有名字有方向/属性名全局唯一 1–26 字符）；数据绑定（不复制数据、静态绑定仅一个、类型映射、**硬限制**：必须托管表 / 不能启用 OneLake 安全 / 不能启用列映射[列名含空格自动触发] / **手动刷新**）；实体类型键缺失导致**静默保存失败**；查询层是**路由器**（Graph→GQL、Eventhouse→KQL）+ NL2Ontology；9 章实操含**8 条踩坑清单**
  - 第三篇：对比 Palantir Foundry（动力学元素 action types/functions 是最大差异）/ RDF-OWL 栈（强推理+跨组织 IRI）/ Neo4j（schema 仅指索引与约束，本体层需自建）/ 基线 LLM+表结构；**10.7 什么时候不该用本体**（三类不适场景 + 该用的信号）；作者对贯穿案例的诚实结论：「本体划算但非必需，用它论证客户必须买则是夸大」
  - ⭐ 作者自带「证据边界」：第 10 章不含性能与 TCO 测量；Palantir/RDF/Neo4j 三列全部来自官方文档、作者未实操；Fabric Ontology 处于**预览状态**
- 交叉引用（双向）：`concepts/ontology.md`、`topics/ontology-modeling-five-steps.md`、`topics/ontology-standards-and-libraries.md`、`topics/evontology-self-evolving-ontology.md` 均加反向引用
- 标签：Ontology / 本体论 / 语义层 / Microsoft Fabric / Fabric IQ / 知识图谱 / RDF / OWL / 属性图 / GQL / Palantir / Neo4j / LLM grounding / 选型
- 更新 index.md + tags-index.md + log.md

## [2026-10-12] ingest | Jev 模型：单步判别式决策模型（知乎 @谷粒）

- 素材：知乎专栏 @谷粒《万字长文解读 Jev 模型：是什么以及怎么用》（2026-09-22 编辑于 12:02 · 江苏），13,835 字，无正文图、数据以表格承载
- **抓取**：知乎对匿名/无头抓取返回 **403**（`zh-zse-ck` 签名 + 登录墙），`web_fetch` 与 curl（含 Googlebot/Bingbot UA）全部 403；**改用有头真实 Chrome（playwright chromium-1228 完整版 Google Chrome for Testing.app）渲染通过**，取 `.Post-RichText`
- **工具固化**：`render-html.js` 新增第 5 参数「逗号分隔 CSS 选择器」；`fetch-article.py` 新增 `fetch_zhihu()` 分支（静态失败即渲染兜底）、`SITE_SELECTORS` 站点选择器表、以及**未内置来源的通用渲染兜底**（原为直接 SystemExit）
- 归档：`raw/jev-model-zhihu-guli.md`（28,797 bytes）；快照 `raw/assets/jev-model-zhihu-guli/original.html`（已 gitignore，无正文图）
- 新增 `topics/jev-model.md`（17,185 bytes）：
  - **定位**：不生成文字的单步判别模型；去掉自回归解码循环，**一次前向传播**输出离散标签；`choice`/`score`/`noul` 三原语 + 置信度；TypeSafe AI（创始人 Diogo Almeida）；输入 $0.042/M Token、输出免费、端到端 70–500 ms
  - **命名**：杰文斯悖论（成本降百倍 → 写死 if-else 处都接模型）；双系统叙事（System 1 反射弧 / System 2 深推）
  - **原理**：末位 Logits 掩码投影 / NLI 交叉编码器两条复现路径；**KV Cache 前缀共享**解高并发（一次 Prefill，几十候选共享同一 KV 指针）；**RLCD 优化 ECE** 做置信度校准；注意力带来的两个结构性问题（无关项干扰 / 选项顺序敏感）
  - **数据**：0.5B 提取 logits <30 ms；长文本 360→29,835 Token 为 57.5→218 ms；并发 1→1,500 为 70→610 ms；Jev 86.6% vs 本地 Qwen2.5-7B 73.8% 一致性
  - **失败模式**：缺思维链（钓鱼邮件 Claude Haiku 更优）/ 选项顺序偏差 / 无关项干扰 / 未校准风险 / 无文本生成 / 单步局限
  - **四种设计模式**：推测性扇出 / 置信度门控 / 复合评分 / 分层分类
  - **生产架构**：混合路由 + 成本延迟测算（月度 $25,200→$5,140.80，−79.6%；P50 1,800→70 ms，−96.1%）；三种网关形态；ReflexGate 中间件；影子流量校验；社区案例 pi-warden / pi-jev-auto-mode / jev-router
  - **选型**：四问 + BERT/LLM/Jev 三范式对比表 + 适合/不适合清单 + 两点工程建议
  - ⚠️ **入库时做了实际核对**：官方站 `jev.kuhung.me` / `typesafe.ai` 均 200；GitHub 搜 `jev in:name` 共 **13,604 个仓库**（`browser-use/jev-ultrafast` ⭐22,679、`jev-chat/jev-chat-jarvis` ⭐7,656、`tamaratran/fast-jev-compaction` ⭐7,593、`TheoLeeCJ/SemIf-OpenJev` ⭐4,787、`yibie/awesome-jev` ⭐2,286）；但文中引用的 `harshatheg/Qwen-2.5-1B-RLCD`、`AlexWortega/openjev`、`multimodalart/jev-reproductions-tracker` **查无此库（404）**，`rorshopping/jev-on-a-laptop`（⭐24）真实存在 → 已在页内加「核对结果」警示
- 交叉引用（双向）：`concepts/ai-gateway.md`、`topics/kv-cache-mechanism-explained.md`、`topics/pi-agent-context-management.md` 均加反向引用
- 标签：决策模型 / Jev / TypeSafe / 判别模型 / System One / 非自回归 / 单步推理 / 模型路由 / 模型网关 / KV Cache / Logits 校准 / RLCD / 置信度门控 / 蒸馏 / Agent 安全
- 更新 index.md + tags-index.md + log.md

## [2026-10-18] ingest | PilotDeck 2.0：清华开源的智能体操作系统（量子位）

- 素材：今日头条「量子位」《清华开源！智能体操作系统任务成本降83%，AI记忆可查可改》（2026-10-17 19:30），短链 `https://m.toutiao.com/is/9HOhFI9b7yw/` → 正文页 `7697597470469063187`
- 抓取：`fetch-article.py` 头条内联 JSON 路径一次命中，正文 3,452 字符（该稿本身短），**9/9 张图全部本地化**（含 4 张 GIF 演示）
- 归档：`raw/tsinghua-agent-os-memory.md`；快照 `raw/assets/tsinghua-agent-os-memory/original.html`（已 gitignore）
- 新增 `topics/pilotdeck-2-agent-os.md`（8,280 bytes）：
  - **定位**：清华 THUNLP + 面壁智能 + OpenBMB + AI9Stars 开源的「Agent 操作系统」，以 **WorkSpace（工作舱）** 为基本单位——每项目独立文件系统/记忆库/技能集，解决多项目并行的**上下文污染与记忆串台**
  - **三根支柱**：① **白盒记忆**（生成→抽取→存储→调用全链路可见；可逐条查看、手改、删除、一键固定；**Dream 模式**空闲时归纳/提炼/去重 + **一键回滚**）② **Always-on**（关窗口仍后台推进长任务、主动发现候选任务、成果落地为本地文件 + 进展总结）③ **Smart Routing**（任务难度识别 + 端云协同分层编排：强模型管决策、弱模型干执行/润色/格式）
  - **数据（厂商自述）**：自媒体场景 Opus 4.5 全开 $12.58 → 主 Opus 4.5 + 子 Sonnet 4.5 **$2.83**（≈省 70%）；7 个高难任务 MiniMax-M2.7 单体 37.1 分/$1.90、Sonnet 4.6 单体 69.1 分/$18.36、**主 Sonnet 4.6 + 子 MiniMax-M2.7 = 70.6 分 / $3.15**（**−82.8%**，标题「降 83%」出处）；Workbuddy Bench 配 Qwen3.6-35B-A3B **79.1** > Claude Code 77.3
  - **坐标**：对比 Claude Code/Cursor/Trae Solo（IDE）、Claude Cowork（桌面项目隔离）、WorkBuddy（IM 接入），PilotDeck 主打**长周期多项目生产力**
  - **部署**：一键安装（macOS/Linux、Windows PowerShell）、源码、Docker Compose；Web/CLI/IM 三端一致；原生 **MCP**；**AGPL-3.0**
  - **实测核对**：GitHub `OpenBMB/PilotDeck` **HTTP 200**，⭐4,591 / fork 512 / issue 155，TypeScript，创建 2026-05-22，最近推送 **2026-10-16**，官网 `pilotdeck.openbmb.cn`；README 确认 2.0 于 **2026-10-15** 发布
  - ⚠️ 成本/得分/对比基线均为官方与新闻稿口径，**未见第三方复现**；Workbuddy Bench 题目与评分细节未公开
- 交叉引用（双向）：`concepts/agent-memory-system.md`、`entities/agentconnect.md`、`topics/jev-model.md` 均加反向引用
- 标签：Agent OS / 智能体操作系统 / PilotDeck / 清华 / THUNLP / OpenBMB / 面壁智能 / 白盒记忆 / Dream模式 / Always-on / 智能路由 / 工作舱 / Agent记忆 / MCP
- 更新 index.md + tags-index.md + log.md

## [2026-10-19] ingest | SAM / FastSAM / MobileSAM 三条轻量化路线对比（CSDN）

- 素材：CSDN 博客 qq_45752541《【图像分割】大模型SegmentAnything、FastSAM与MobileSAM对比》（2023-10-11 修改），正文 3,664 字符，**16/16 张图全部本地化**
- 抓取：CSDN 静态 HTML 直出，一次命中；顺手给 `fetch-article.py` 新增 `fetch_csdn()` 分支（正文在 `#content_views`，到 `</article>` 结束；标题取 `h1.title-article`），不再依赖通用渲染兜底
- 归档：`raw/sam-fastsam-mobilesam-csdn.md`；快照 `raw/assets/sam-fastsam-mobilesam-csdn/original.html`（已 gitignore）
- 新增 `topics/sam-fastsam-mobilesam.md`（6,882 bytes）：
  - **SAM 打底**：ViT-H 图像编码器 **600M+ 参数** vs 掩码解码器 **<4M** → 瓶颈明确在编码器；支持点/框/文字提示，零样本迁移
  - **FastSAM（换架构）**：中科院自动化所 2023-06-22；CNN backbone + 「全实例分割 → 指令匹配」两阶段；point 走位置最优区域、box 走最大 IoU、text 走 CLIP 图文对齐；**仅用 SA-1B 2% 数据**训练即接近 SAM，**提速 50 倍**；代价是边缘不平滑
  - **MobileSAM（换编码器 + 解耦蒸馏）**：诊断出「编码器+解码器耦合优化」是效果差的根因；把 ViT-H 知识单独蒸馏进轻量编码器，**解码器直接复用**；单卡 **<1 天**、体积 **小 60+ 倍**、**~10ms/图**（8ms encoder + 2ms decoder）、比 FastSAM **小 7 倍、快 4 倍**；解耦蒸馏算力消耗 **<1%**
  - **三者对比表**：架构/参数/速度/训练数据/分割质量/提示类型/适用场景
  - **四个洞察**：轻量化两条正交路线（改架构 vs 改规模+蒸馏）；解耦是关键工程判断；瓶颈定位比压缩技巧更重要；数据效率是另一条杠杆（2% 数据 + 架构先验）
  - ⚠️ **时效标注**：2023 年综述，未覆盖 SAM 2 及后续迭代；指标为论文/作者口径，未独立复现
- 交叉引用：`topics/zdt-taichu-5-0-9b.md`、`concepts/model-fusion.md`、`topics/jev-model.md` 已在页内引用（后两者为“另一条降本路线”的对照）
- 标签：图像分割 / SAM / Segment Anything / FastSAM / MobileSAM / 轻量化 / 知识蒸馏 / 解耦蒸馏 / ViT / CLIP / 边缘计算 / 视觉大模型
- 更新 index.md + tags-index.md + log.md

## [2026-10-19] ingest | ChatGPT 会话三篇：MobileSAM vs ACE2P + 图像颜色校正两篇

- 素材：用户自有 ChatGPT 会话（经 **ego lite / ego-browser** 已登录态提取，spaceId 20）
  - 《MobileSAM与ACE2P对比》 https://chatgpt.com/c/6ad50397-de9c-83ea-9696-7e2162f0f0de
  - 《豆包图生图颜色适配》 https://chatgpt.com/c/6acc6d62-c0c8-83ea-9731-3c1e4b160d72
  - 《解释清晰度差异》 https://chatgpt.com/c/6ad0aa8c-721c-83ea-a976-a1811c702fc7
- 背景：ChatGPT 私有会话 `/c/` 对匿名抓取返回 403（后端接口亦 403，share 页只有 SPA 空壳）。按用户要求改用 ego lite，通过 `ego-browser nodejs` 的 `taskSpace` / `page.goto` / `page.evaluate` 提取正文
- 归档原始正文：
  - `raw/chatgpt-mobilesam-vs-ace2p.md`
  - `raw/chatgpt-doubao-seedream-color-correction.md`
  - `raw/chatgpt-seedream-1k-2k-quality-eval.md`
- 新增三个 wiki 页：
  1. `topics/mobilesam-vs-ace2p.md` —— 通用交互式分割 vs 人体语义解析；MobileSAM（TinyViT，9.66M，12ms，CPU ~3s）vs ACE2P（自动部位/服装类别）；A-CE2P 属 SCHP 增强版、SCHP 是替代方案（LIP 20 类）；换裤子推荐「人体解析 + MobileSAM 精修 + 保护蒙版 + Seedream + OpenCV 校色」，语义蒙版不能直接当最终生成蒙版
  2. `topics/doubao-seedream-color-correction.md` —— **图像颜色校正主文**：色差四因（生成式重绘/光照适配/语义颜色/多图冲突）；不要匹配平均 RGB，改用 Lab：商品均匀受光面料取基准 → 主要校 a*/b* → L* 受约束 → Mask 羽化 → ΔE00 多区域验收；α 从 0.7 起；Seedream 5.0 Pro API（`doubao-seedream-5-0-pro-260628`，2K/PNG/多图≤10）；Java+OpenCV 4 核 8G 无 GPU、单任务 130–250MB
  3. `topics/seedream-1k-2k-quality-eval.md` —— **图像颜色校正验收侧**：1K/1.5K/2K 三档（1.5K 与 1K 同价，待核实）；效果差距大于像素差距；六维评测（区域保持 25/商品特征 25/自然度 20/色彩 15/清晰度 10/缺陷 5）+ 硬性否决；Java/OpenCV 算 MAE/PSNR/Laplacian/ΔE76（生产升 ΔE00）；视觉模型补语义；阈值 综合≥85、PSNR≥35dB、MAE≤3/255、ΔE00≤5；100 组×5 次盲评，看每张合格图成本
- **标签要求落实**：两篇颜色相关页均打上 `#图像颜色校正`；分割篇打 `#图像分割 / #MobileSAM / #ACE2P / #人体解析` 等
- 说明：侧边栏《比较XMP模式区别》经核实是 **DDR5 内存 XMP 超频**，与图像颜色无关，未打颜色标签
- 来源性质均为 ChatGPT 生成内容，已在页内标注「需回官方文档/实测核对」

## [2026-10-19] update | MobileSAM vs ACE2P 页补充参考实现仓库核实

- 用户补发原文中出现的 GitHub 链接 `rajatb94/human_parsing`
- 核实：HTTP 200；Jupyter Notebook；MIT；创建与最后推送均为 2020-12-05；⭐0 / fork 0；无 description
- 判定：**个人复现仓库，非 ACE2P / SCHP 官方实现**，7 年未更新，不可直接用于生产选型
- 已写入 `wiki/topics/mobilesam-vs-ace2p.md` 的「参考实现仓库」小节，并在「待验证」补充骨干网络未公开的说明

## [2026-10-19] ingest | Helix Foundry：图 + SQL 自动构建跨源企业本体

- 原文：DataFunTalk《Helix Foundry开源：图与SQL联手，自动构建跨源企业本体》（2026-10-18）
  https://mp.weixin.qq.com/s/gmn3baN1x23P5inIE_WlDA
- 抓取：`web_fetch` 只拿到标题（正文 JS 注入），改用 `scripts/fetch-article.py` 直接命中 `js_content`，**7,607 字 + 6 张图全本地化**
- 仓库核实（2026-10-19）：`HelixDB/helix-foundry` HTTP 200，**TypeScript**，**Apache-2.0**，⭐**1,599** / fork 242 / open issue 17，创建 **2026-10-07**，最后推送 **2026-10-13**；官网 helix-db.com 200
- 归档：`raw/helix-foundry-graph-sql-ontology.md`；素材 `raw/assets/helix-foundry-graph-sql-ontology/`（original.html + img-01…img-06）
- 新页：`wiki/topics/helix-foundry-graph-sql-ontology.md`
- 核心内容：
  - 11 个数据集（Stripe/WorkOS/PostHog/PlanetScale/S3）→ 难点不在写 SQL 而在**跨源实体身份识别**
  - **确定性程序发现关系，AI 只改写描述命名、不决定结构**，人确认后物化——刻意规避 LLM 推断直接入库
  - 架构：HelixDB（对象/边/发布状态）+ DuckDB（SQL/聚合）+ Parquet（不可变快照）；**非统一混合查询引擎**
  - 执行安全：只加载获准快照、单条 SELECT、默认 2 并发 × 512MB、凭据隔离
  - 实测：3 万客户/7 万订单/6.77 万关系，v0.0.12 发布 ~64 秒（M1 Pro 8C8G）
  - Data Agent（qwen3:4b）：6 次调用/14,516 Token/153 秒 → 32 Customer + 240 Order + 240 关系 + 35 延迟订单
  - 与 dbt MetricFlow 分工不同；指标治理仍需人工
  - 边界：单机 MVP、无多租户、无写回/分布式、大规模分页待完善、**备份恢复脚本未经真实 Compose 验证**
- 双向引用：`topics/fabric-ontology-from-ontology.md`、`topics/evontology-self-evolving-ontology.md`、`topics/datastrato-agent-context-three-pillars.md`、`concepts/ontology.md`
- 顺手修复：`wiki/index.md` 中两处条目粘连（第 17 行 8 条、第 20 行 2 条挤在同一行），已按 `` ` `` 边界拆分为独立行

## [2026-10-19] ingest | Laya：421M 非自回归 System 1 决策模型（Jev 开源替代）

- 原文：魔搭 ModelScope 社区《Laya 开源：比Jev快4倍！421M 参数，33 毫秒完成 System 1 决策》（2026-09-21）
  https://mp.weixin.qq.com/s/9SJf3nhK25rZcZwQNTg7mw
- 抓取：`scripts/fetch-article.py` 命中 `js_content`，**9,614 字 + 21 张图全本地化**（6.3 MB）
- 核实（2026-10-19）：`NandhaKishorM/laya` HTTP 200，Python，**Apache-2.0**，⭐**33,414** / fork 3,002 / issue 89，创建 **2026-09-18**，推送 **2026-10-17**；
  ModelScope 模型页 200；PyPI `laya` **0.4.11**；HF Space `convaiinnovations/laya-demo` 存在
  ⚠️ 文章称"GitHub 2.1k Stars"，一个月后实际已 33,414
- 归档：`raw/laya-system1-decision-model.md`；素材 `raw/assets/laya-system1-decision-model/`（original.html + img-01…img-21）
- 新页：`wiki/topics/laya-system1-decision-model.md`
- 核心内容：
  - 421M ＝ ModernBERT-large（395M）＋ 决策头；`[MASK]` 选项抽取 + 带拟合温度 T 的 Softmax
  - 行动/升级头：[CLS] + 4 个分布特征 → 1028 维 → [P(act), P(escalate)]
  - RLCD：严格适当评分规则（对数/球面/RPS）＋ REINFORCE 组均值优势，零监督 CE
  - 成本矩阵 act对 +1 / act错 −3 / escalate −0.5 → **自动学出 62.5% 自动行动阈值**
  - TD(λ=1.0) 前缀增长解决多轮数据泄漏；置信度 = 1 − H/logK
  - 25,424 题实测：P50 38.4ms、任务内 83.8%（ECE 0.060）、零样本 65.1%（ECE 0.207）
  - 选择性自动化：前 50% 覆盖时准确率 92.2%；阈值 0.85 可自动处理约一半工单
- **批判点已写入待验证**：「快 4 倍」取 Jev 最佳 150ms（对均值 400ms 实为 10.4 倍）；云端 API vs 本地前向口径不对等；
  「自托管 $0.00」忽略 GPU 摊销；零样本 ECE 0.207 说明校准是任务家族内性质
- 双向引用：`topics/jev-model.md`（新增 Laya 条目）、AI 网关与模型路由、KV Cache、Pi Agent、Agent 全景、PilotDeck、Helix Foundry
