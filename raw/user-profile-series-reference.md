# 用户画像系列文章 · 参考资料汇编

> 整理日期：2026-08-11
> 覆盖范围：基础篇（标签体系构建 / 应用场景）、提高篇（标签挖掘 / 标签存储 / 人群圈选 / ID-Mapping / AI 检索）、应用篇（基于标签的营销 / 在线推荐）
> 每节包含：核心知识点 → 写作大纲建议 → 参考资料（可直接打开）

---

## 系列整体框架建议

| 篇 | 主题 | 一条主线 |
|---|---|---|
| 基础篇 | 标签体系构建、标签应用场景 | "标签是什么、怎么设计、用在哪" |
| 提高篇 | 标签挖掘、存储、人群圈选、ID-Mapping、AI 检索 | "标签怎么生产、怎么存、怎么查、怎么和 AI 结合" |
| 应用篇 | 基于标签的营销、在线推荐 | "标签怎么产生业务价值" |

推荐的行文主线（贯穿三篇，读者体验最好）：
**数据（ID-Mapping 统一身份）→ 标签（挖掘/加工）→ 存储（宽表/位图）→ 服务（检索/圈选）→ 应用（营销/推荐/AI）**

---

# 一、基础篇

## 1. 标签体系的构建

### 核心知识点
- **用户画像的定义**：基于社会属性、生活习惯、消费行为等数据抽象出的标签化用户模型（Persona vs User Profile 的区别：前者偏调研定性，后者偏数据标签）。
- **标签 = 画像的原子单元**：标签是结构化、标准化的用户特征描述，可以是描述（省份）、统计值（近7日点击次数）、关键日期（首购日）。
- **标签三大分类（构建方法维度）**：
  - 统计类标签：性别、年龄、累计消费金额等，来自注册/交易/访问统计；
  - 规则类标签：由业务规则产生，如"近90天交易≥3次 = 高活跃用户"，需运营+数据共同制定；
  - 模型类（挖掘类）标签：通过机器学习预测，如流失概率、商品偏好、用户价值分层。
- **标签维度划分（业务视角）**：基础属性、行为、交易/消费、内容兴趣、社交、设备、生命周期、价值分层等。
- **标签体系设计要求**：分类明确、结构化（金字塔/树状）、可复用、可扩展；建立**标签字典**（名称、业务含义、计算逻辑、数据来源、更新周期、负责人）。
- **构建流程**：明确业务目标 → 业务梳理（各部门 KPI 与核心关注点）→ 数据收集与整合 → 标签分类设计 → 标签加工实现 → 标签库建立 → 系统搭建 → 应用与维护（关注覆盖率、准确率、更新延迟）。
- **底层依赖**：数据仓库分层（ODS/DWD/DWS/DM），画像是对 DW/DM 层用户数据的二次建模。

### 写作大纲建议
1. 为什么需要标签体系（从"数据"到"可执行语言"）
2. 标签的分类方法（统计/规则/模型 × 属性/行为/消费/兴趣/社交）
3. 标签体系设计原则（MECE、结构化、可扩展、可治理）
4. 标签字典与元数据管理
5. 从 0 到 1 构建的完整流程（配一张流程图）
6. 常见坑：标签泛滥无治理、口径不统一、覆盖不全、更新滞后

### 参考资料
- 人人都是产品经理《用户画像标签体系详解》：https://www.woshipm.com/user-research/572393.html
- 人人都是产品经理《用户画像与标签体系》：https://www.woshipm.com/data-analysis/4167662.html
- CSDN《用户画像标签体系构建》：https://blog.csdn.net/jane9872/article/details/130757506
- 博客园《用户画像与标签体系建设》：https://www.cnblogs.com/duanxz/p/12671474.html
- 腾讯云开发者《用户画像标签体系》：https://cloud.tencent.com/developer/article/1892518
- 数数科技《从0到1，一文掌握用户画像标签体系》：https://www.truemetrics.cn/articles/methods/%E4%BB%8E0%E5%88%B01%EF%BC%8C%E4%B8%80%E6%96%87%E6%8E%8C%E6%8F%A1%E7%94%A8%E6%88%B7%E7%94%BB%E5%83%8F%E6%A0%87%E7%AD%BE%E4%BD%93%E7%B3%BB.html
- 极光《用户画像标签体系》：https://www.jiguang.cn/tips/1227
- 神策数据（用户标签产品）：https://www.sensorsdata.cn/product/userTag.html
- GitHub 用户画像学习笔记（fengchi66/bigdata）：https://github.com/fengchi66/bigdata

---

## 2. 标签的应用场景

### 核心知识点
- **八大典型场景**：
  1. 精准营销与广告投放（圈选人群、定向触达）
  2. 个性化推荐（召回/排序的画像特征）
  3. 用户运营（生命周期管理、促活、流失预警与召回）
  4. 产品设计与优化（识别需求痛点、功能迭代）
  5. 风险控制（反欺诈、刷单识别、异常行为）
  6. 智能客服/智能问答（服务分流、个性化应答）
  7. 商业洞察与市场细分（经营分析、战略决策）
  8. 内容分发（资讯/视频按标签匹配内容）
- **场景与标签的对应关系**：不同场景对标签的时效性要求不同——实时标签（推荐、反欺诈）、准实时（运营触达）、离线（经营分析）。
- **应用闭环**：标签 → 圈选/查询 → 触达/推荐 → 效果回收 → 标签优化。

### 写作大纲建议
1. 场景总览（一张场景地图）
2. 按"生命周期"讲场景：获客（广告定向）→ 激活（个性化推荐）→ 留存（促活运营）→ 转化（精准营销）→ 召回（流失预警）
3. 按"业务线"讲场景：营销 / 产品 / 风控 / 客服
4. 场景对标签的要求（时效、粒度、覆盖率）——为"提高篇"埋钩子

### 参考资料
- 人人都是产品经理《用户画像应用场景》：https://www.woshipm.com/operate/3819009.html
- 人人都是产品经理《用户画像在产品中的应用》：https://www.woshipm.com/it/680776.html
- 火山引擎《用户画像与精细化运营》：https://developer.volcengine.com/articles/7317467355334836274
- 神策《用户画像典型应用》：https://www.hypers.com/content/archives/6255
- MBA 智库《精准营销》：https://wiki.mbalib.com/wiki/精准营销
- 人人都是产品经理《用户画像的应用实践》：https://www.woshipm.com/operate/5259827.html

---

# 二、提高篇

## 3. 标签的挖掘

### 核心知识点
- **标签挖掘 = 特征工程 + 机器学习/规则提炼**：
  - 特征构造 / 变换（归一化、标准化）/ 选择 / 提取（PCA、Embedding）；
  - 常用算法：分类（SVM、逻辑回归、朴素贝叶斯、决策树、神经网络）、聚类（K-Means、层次聚类）、关联规则、时序模型（RFM、LTV 预测、流失预测）。
- **四类挖掘产出**：事实标签（直接提取）、统计标签（聚合计算）、模型标签（聚类/抽象）、预测标签（机器学习预测）。
- **典型挖掘任务**：用户价值分层（RFM、CLV）、流失预警、性别/年龄预测、兴趣偏好识别、相似人群扩展（Lookalike）。
- **工程要点**：样本与标签定义、特征稳定性监控、模型评估（准确率/覆盖率）、挖掘任务调度（Airflow）、标签回填与更新策略。
- **标签质量评估**：覆盖率、准确率（抽样验证）、时效性、稳定性。

### 写作大纲建议
1. 标签从哪来：统计、规则、模型的取舍
2. 特征工程是挖掘的地基（结合用户行为数据举例）
3. 经典挖掘场景拆解：RFM 价值分层 / 流失预测 / 兴趣偏好识别（各配一个简例）
4. 挖掘类标签的工程化（训练 → 上线 → 监控 → 迭代）
5. 挖出来的标签如何验收（覆盖率/准确率口径）

### 参考资料
- 掘金《用户画像标签挖掘实践》：https://juejin.cn/post/7249173717750087740
- CSDN《用户画像标签挖掘》：https://blog.csdn.net/qq_44283562/article/details/140663766
- 龙石数据《用户画像标签挖掘》：https://www.longshidata.com/blog/c/c2020082402.html
- CSDN《特征工程与用户画像》：https://blog.csdn.net/qq_28625359/article/details/140148327
- IBM《机器学习入门》：https://www.ibm.com/cn-zh/think/topics/machine-learning

---

## 4. 标签的存储

### 核心知识点
- **分层存储架构**（不同数据不同库）：
  - Hive：离线标签结果、人群结果、特征库；
  - MySQL：标签元数据、字典、监控数据；
  - HBase：线上接口实时查询类数据（低延迟）；
  - Elasticsearch：海量标签实时检索、人群透视分析；
  - 分析型数据库（ClickHouse / Doris / StarRocks / Hologres）：标签宽表、位图索引、即席查询；
  - Redis：在线特征服务、实时标签缓存。
- **两种核心存储模型**：
  - **标签宽表**（一行一用户、一列一标签）：适合"查单个用户全量画像"，OLAP 列存压缩；
  - **位图（Bitmap / RoaringBitmap）**：一个标签值一张位图，用户 ID 映射为位偏移，适合"按标签找人群"；交并差 = 位运算，秒级圈选。
- **位图要点**：低基数标签（性别、省份、状态）效率极高；高基数/连续值不适合；稀疏场景用 RoaringBitmap 分块压缩；字符串 ID 需先映射为连续整数偏移。
- **大厂实践**：腾讯、京东、货拉拉等用 RoaringBitmap + OLAP 引擎做人群圈选；阿里 Hologres 提供 RoaringBitmap 函数。
- **实时/离线双链路**：离线 T+1 批量更新（Spark/Flink 批）、实时标签（Flink 流 + Kafka）写 Redis/在线库。

### 写作大纲建议
1. 存储设计的两大问题：怎么存用户标签、怎么快速查
2. 标签宽表 vs 位图：各自的适用场景（配对比表）
3. 位图原理拆解（用户ID映射、AND/OR/NOT 位运算、RoaringBitmap 压缩）
4. 分层存储架构图（Hive/MySQL/HBase/ES/OLAP/Redis 各司其职）
5. 实时与离线双链路更新
6. 选型建议：什么规模用什么

### 参考资料
- 腾讯云《基于位图的用户标签存储与圈选》：https://cloud.tencent.com/developer/article/2345280
- 位图用户标签系统（博客）：https://leriou.github.io/2017-12-29-user-tag-sys-on-bitmap/
- 掘金《用户画像标签存储与人群圈选》：https://juejin.cn/post/7350924978679857202
- 京东云《基于位图的用户画像实践》：https://developer.jdcloud.com/article/3594
- SelectDB《Doris 用户画像与人群圈选》：https://www.selectdb.com/blog/1253
- 阿里云 Hologres《RoaringBitmap 应用》：https://help.aliyun.com/zh/hologres/use-cases/roaring-bitmaps
- InfoQ《用户画像系统存储实践》：https://www.infoq.cn/article/eahz0lvltkq4s9hxiyai
- OLAP 选型对比（Doris/StarRocks/ClickHouse/Hologres/ES）：https://blog.csdn.net/Taerge0110/article/details/161857890

---

## 5. 人群圈选

### 核心知识点
- **定义**：按业务条件（标签组合）从全量用户中筛选目标人群，是精准营销/运营的第一步。
- **两种实现路线**：
  - **位图路线**：标签值 → 位图，条件 → 位运算（AND/OR/NOT），毫秒~秒级，适合亿级用户；
  - **OLAP 路线**：标签宽表 + SQL（`WHERE 标签条件`），Doris/StarRocks/ClickHouse 列存加速，支持更复杂条件与透视分析。
- **人群圈选的高级玩法**：
  - 人群包管理（创建、去重、预估规模、导出）；
  - 圈选 + 透视分析（看圈出人群的画像分布，验证合理性）；
  - 相似人群扩展（Lookalike）：以种子人群训练模型，扩展高相似新客；
  - 人群包同步到投放/触达平台（DSP、短信、Push、企微）。
- **工程要点**：人群预估（不实际计算只算量级）、人群更新策略（一次性/周期性）、人群版本管理、人群包大小上限控制。

### 写作大纲建议
1. 什么是人群圈选，业务上解决什么问题
2. 两种技术路线对比（位图 vs OLAP 宽表）
3. 一个圈选请求的完整链路（条件解析 → 计算 → 人群落库 → 透视 → 同步投放）
4. 进阶：Lookalike 相似人群、人群透视
5. 性能与成本优化（预估、缓存、增量更新）

### 参考资料
- 阿里云 RDS PG《实时精准营销与人群圈选方案》：https://help.aliyun.com/zh/rds/apsaradb-rds-for-postgresql/implement-real-time-precision-marketing-and-user-group-selection-by-using-an-apsaradb-rds-for-postgresql-instance
- 阿里云《人群圈选相关文档》：https://help.aliyun.com/zh/document_detail/273066.html
- SelectDB《人群圈选实践》：https://www.selectdb.com/blog/1520
- 腾讯云《用户画像与人群圈选》：https://cloud.tencent.com/developer/article/1916213
- 火山引擎《人群圈选与精细化运营》：https://developer.volcengine.com/articles/7317467355334836274

---

## 6. ID-Mapping 技术

### 核心知识点
- **要解决的问题**：同一用户在不同系统/设备/触点有多个 ID（注册账号、手机号、邮箱、设备 IMEI/IDFA/OAID、Cookie、微信 UnionID/OpenID、电商账号等），需统一映射为全局唯一 ID（OneID/UID）。
- **主要实现方法**：
  1. 规则匹配：按业务规则与标识优先级关联（注册账号为主 ID，关联设备/手机号）；
  2. 图计算：把 ID 和关联关系抽象为点/边，构建无向连通图，同一连通分量 = 同一用户，生成 ID 映射字典；
  3. 机器学习/数据融合：基于行为特征相似度做跨设备/跨平台匹配；
  4. 优先级取值：不同标识设优先级，取最高可用者。
- **典型 ID 优先级参考**：登录账号 > 手机号 > 邮箱 > 微信 UnionID > 设备 ID > Cookie ID。
- **工程要点**：ID 图规模大需分布式图计算（GraphX/Spark 连通分量）、ID 合并/分裂的治理（错误合并很难拆）、增量更新、OneID 服务化（在线查询映射关系）。
- **行业实践**：阿里 OneID、腾讯 OneID、美团、58 同城、网易均有 ID-Mapping 体系；开源可参考 one-id 项目。
- **挑战**：隐私合规（跨域打通需谨慎）、ID 造假（设备农场）、映射规则持续优化。

### 写作大纲建议
1. 为什么需要 OneID：数据孤岛与"一个用户多个身份"
2. ID 类型全景（账号/设备/触点/第三方标识）
3. 核心算法：图计算连通分量（配图例，讲清楚点边和合并逻辑）
4. 规则/优先级方法与 ML 方法的补充
5. 工程化：离线图构建 + 在线映射服务 + 合并治理
6. 合规提醒：ID 打通的边界

### 参考资料
- 标点符《ID-Mapping 详解》：https://www.biaodianfu.com/id-mapping/
- 腾讯云《OneID 与 ID-Mapping 实践》：https://cloud.tencent.com/developer/article/2270949
- 阿里云开发者社区《ID-Mapping 技术方案》：https://developer.aliyun.com/article/1408121
- 阿里云开发者社区《OneID 实践》：https://developer.aliyun.com/article/1319881
- 人人都是产品经理《ID-Mapping 与用户画像》：https://www.woshipm.com/it/2831620.html
- GitHub 开源 OneID 实现：https://github.com/Await-d/one-id

---

## 7. AI 检索：RAG 技术 + "基于标签 / 基于标签值"两种场景

### 核心知识点
- **RAG 基础**：检索增强生成 = 外部检索（知识库/数据库/画像）+ 大模型生成；解决幻觉、知识过时、私有数据访问问题；流程：查询 → 检索 → 增强上下文 → 生成。
- **用户画像在 RAG/Agent 中的价值**：让大模型"千人千面"——用画像指导检索范围、控制回复风格、结合记忆模块实现个性化。
- **两种检索场景（本主题重点，建议对比着写）**：
  1. **基于标签检索（以"标签"为检索维度/过滤器）**：
     - 画像标签作为元数据/过滤器，先按标签缩小检索范围，再做语义匹配（"标签过滤 + 向量检索"的组合）；
     - 例：用户带"金融科技"兴趣标签 → 优先检索打标为金融科技的知识文档；客服场景按"VIP/投诉敏感/流失风险"标签做服务分流与知识推荐；
     - 本质：用结构化标签约束检索空间，提升精度与效率。
  2. **基于标签值检索（以"标签的具体值"为查询内容/条件）**：
     - 标签值是标签的具体实例（性别=男、会员等级=白金、情绪=愤怒、年龄段=25-35），查询时按具体值精确/条件匹配，或把标签值拼进 Prompt 作为个性化上下文；
     - 例：用户"情绪=愤怒" → 转人工/安抚话术；"会员等级=白金" → 高级别服务；"近30天加购母婴类" → 推荐母婴知识/优惠；
     - 本质：标签值是"事实数据"，直接参与匹配或注入生成。
- **Agent 与画像的结合**：动态画像（显式+隐式偏好）、记忆系统（短期对话 + 长期画像）、LLM 自动打标签（LLM Tagging）反哺画像。
- **工程要点**：向量库（Milvus/ES/阿里云 OpenSearch）+ 标签过滤的混合检索；标签体系质量直接决定检索效果；画像实时更新才能支撑实时个性化。

### 写作大纲建议
1. RAG 原理速览（检索-增强-生成，配流程图）
2. 为什么用户画像能"喂"给大模型：从通用问答到千人千面
3. 场景一：基于标签的检索（标签作过滤器 + 向量检索，配架构图）
4. 场景二：基于标签值的检索（标签值作条件/上下文，配客服例子）
5. 两种场景对比总结表（检索对象 / 典型示例 / 适用场景 / 技术要点）
6. Agent 时代：记忆 + 动态画像 + 自动打标
7. 落地注意：标签质量、时效、合规

### 参考资料
- Elastic《什么是 RAG》：https://www.elastic.co/cn/what-is/retrieval-augmented-generation
- AWS《什么是 RAG》：https://aws.amazon.com/cn/what-is/retrieval-augmented-generation/
- 人人都是产品经理《用户画像 + 大模型应用》：https://www.woshipm.com/ai/6280249.html
- OceanBase《RAG 技术解读》：https://open.oceanbase.com/blog/24180834896
- 阿里云百炼《RAG 知识库》：https://help.aliyun.com/zh/model-studio/rag-knowledge-base
- 小多科技《智能客服中的用户画像：实时标签 + AI 预测（基于标签/标签值两种方式的深入拆解）》：https://insight.xiaoduoai.com/e-commerce-agent/what-is-the-use-of-user-persona-analysis-in-intelligent-customer-service-system-how-to-achieve-personalized-services-for-thousands-of-people-in-depth-dissection-of-real-time-tagging-system-and-ai-pred.html
- 腾讯云《大模型个性化与用户画像》：https://cloud.tencent.com/developer/article/2605719
- EmergentMind《LLM Tagging》：https://www.emergentmind.com/topics/llm-tagging
- LLM 个性化记忆实践：https://matt33.com/2026/07/11/llm-personalization-memory/

---

# 三、应用篇

## 8. 基于标签的营销

### 核心知识点
- **营销闭环**：画像标签 → 圈选人群 → 制定策略 → 多渠道触达（短信/Push/邮件/企微/广告）→ 效果回收 → 标签与策略优化。
- **营销自动化（MA）**：基于行为触发（加购未支付、沉睡唤醒、生日关怀等）自动执行个性化营销；核心是"对的人 × 对的渠道 × 对的时机 × 对的内容"。
- **生命周期营销**：新客首购、复购提升、流失预警与召回、高价值用户维护，每个阶段有对应的标签组合与策略。
- **广告投放（DMP 体系）**：标签 → 人群包 → 同步 DSP/ADX 定向投放；DMP 管匿名 ID（Cookie/设备 ID）人群包，CDP 管含 PII 的客户档案（两者区别值得一写）。
- **私域运营**：企微/公众号场景下用标签做客户分层、群发策略、1v1 个性化服务。
- **效果评估**：触达率、打开率、转化率、ROI，A/B 测试；用效果反哺标签体系优化。

### 写作大纲建议
1. 营销的三次进化：大众营销 → 分群营销 → 个性化营销（标签是分水岭）
2. 标签驱动营销的完整链路（配流程图）
3. 典型营销场景拆解：新客转化、流失召回、大促预热、会员权益（各配标签组合示例）
4. 营销自动化：事件触发 + 旅程编排
5. DMP/CDP/MA 平台的定位区别
6. 效果度量与 A/B 测试，标签如何反哺迭代

### 参考资料
- 神策《标签驱动精细化运营》：https://www.hypers.com/content/archives/6594
- 人人都是产品经理《用户标签与精细化运营》：https://www.woshipm.com/operate/5618967.html
- 径硕科技《营销自动化实战》：https://www.jingdigital.com/articles/18740/
- 纷享销客《标签与精准营销》：https://www.fxiaoke.com/crm/information-44274.html
- 个推《用户画像与运营》：https://www.getui.com/college/2019040922
- 人人都是产品经理《DMP 人群包与广告定向》：https://www.woshipm.com/share/6094121.html
- AppsFlyer《DMP 术语解释》：https://www.appsflyer.com/glossary/data-management-platform/
- 人人都是产品经理《用户运营中的画像应用》：https://www.woshipm.com/operate/2618874.html

---

## 9. 在线推荐

### 核心知识点
- **推荐系统总架构**：召回 → 粗排 → 精排 → 重排（漏斗式），画像贯穿全程。
- **用户画像在推荐中的角色**：
  - 召回阶段：UserCF/向量召回（双塔）用画像与兴趣向量匹配候选；
  - 排序阶段：画像特征（长期兴趣）+ 实时特征（近期行为序列）作为精排模型输入（CTR/CVR 预估）；
  - 冷启动：新用户无行为 → 靠基础属性标签 + 热门兜底。
- **在线 vs 离线**：离线批量算（T+1 画像）、在线实时算（Flink 流计算实时标签/实时特征，Redis 特征服务），"模型再牛，特征是昨天的，一样白搭"。
- **特征平台**：离线特征 + 实时特征统一管理，训练/在线一致性（Train-Serve Skew）。
- **画像与推荐的反馈闭环**：推荐结果 → 用户行为 → 标签更新 → 下一轮推荐更准。

### 写作大纲建议
1. 推荐系统解决什么问题（信息过载），为什么需要画像
2. 推荐架构速览：召回-粗排-精排-重排
3. 画像在召回/排序/冷启动中的具体用法（各配例子）
4. 实时特征与在线画像：Flink + Redis 链路
5. 特征平台与训练/在线一致性
6. 反馈闭环：推荐如何反哺画像更新

### 参考资料
- 推荐系统用户画像总结：https://yeyzheng.github.io/2018/04/07/recommend-system-summary-User-profile/
- 掘金《用户画像与推荐系统》：https://juejin.cn/post/7315122969347620901
- Datawhale《推荐系统教程 Fun-Rec》：https://datawhalechina.github.io/fun-rec/
- 极客时间《推荐系统实践》（专栏）：https://time.geekbang.org/column/article/6495
- 腾讯云《实时推荐与用户画像》：https://cloud.tencent.com/developer/article/2613065
- 特征平台实践：https://qiankunli.github.io/2022/06/27/feature_platform.html
- 阿里云 PAI《序列特征与实时特征》：https://help.aliyun.com/zh/pai/sequence-features-and-real-time-features
- AWS《推荐系统召回阶段深度解析》：https://aws.amazon.com/cn/blogs/china/in-depth-discussion-on-the-recall-stage-of-recommendation-system-of-recommendation-system-series/
- 人人都是产品经理《用户画像在推荐中的应用》：https://www.woshipm.com/data-analysis/4542994.html

---

# 四、通用资源与补充建议

## 书籍（系统学习首选）
- **《用户画像：方法论与工程化解决方案》**（赵宏田）——豆瓣：https://book.douban.com/subject/34961590/ ；从数仓架构、标签体系、存储（Hive/MySQL/HBase）、标签开发（统计/规则/挖掘/流式）、Airflow 调度到应用场景全覆盖，与你的系列结构高度吻合，是主要参考书。
- **《用户画像：平台构建与业务实践》**——偏画像中台（标签管理、标签服务、分群、画像分析四大模块），有可运行代码。
- **《用户画像：全渠道画像方法与实践》**（赵宏田）——微信读书：https://weread.qq.com/web/bookDetail/4b2325a0813ab8884g018df4 ；App/企微/公众号/小程序/抖音等多渠道画像 + 营销自动化。
- 推荐系统经典：《推荐系统实践》（项亮）；《深度学习推荐系统》（王喆）。

## 开源项目
- 用户画像学习笔记（含完整目录）：https://github.com/fengchi66/bigdata
- OneID 开源实现：https://github.com/Await-d/one-id
- Datawhale 推荐系统 Fun-Rec：https://datawhalechina.github.io/fun-rec/

## 平台/社区（案例素材来源）
- 神策数据、GrowingIO、易观、个推、火山引擎、极光——官方博客有大量画像/标签/圈选案例；
- 人人都是产品经理（woshipm）、InfoQ、掘金、CSDN、腾讯云+社区、阿里云开发者社区——搜"用户画像"有海量一线实践；
- 大厂技术号：美团技术团队、京东技术、字节技术（火山引擎）、阿里云开发者——搜"画像/圈选/OneID"有高质量深度文。

## 合规提醒（写应用篇时建议加一节）
- 《个人信息保护法》（2021.11.1 施行）：目的明确、最小必要、公开透明、确保安全等原则；敏感个人信息需单独同意；自动化决策需提供拒绝方式。
- 匿名化（不可逆）vs 去标识化/假名化（可逆）的区别；K-匿名、差分隐私等脱敏技术。
- 用户画像的合规红线：过度采集、跨域数据打通（ID-Mapping 尤其敏感）、广告定向中的精准识别风险。
- 参考：个推《画像与合规》：https://www.getui.com/college/2021110179 ；金杜《个人信息保护法解读》：https://www.junhe.com/law-reviews/1539

## 写作技巧建议
1. **每篇一个核心比喻**：如"标签是用户的身份证+体检报告+简历"；"OneID 是把散落各地的用户碎片拼成完整拼图"。
2. **配图优先级**：标签体系架构图 > 数据流图 > 位图原理图 > 圈选链路图 > 推荐漏斗图。
3. **数据说话**：位图 vs 宽表的性能对比、圈选秒级响应、推荐 CTR 提升百分比等，搜大厂案例数字。
4. **系列钩子**：基础篇结尾预告"标签怎么算出来、怎么存、怎么查"；提高篇结尾预告"标签最终要变成生意"。
