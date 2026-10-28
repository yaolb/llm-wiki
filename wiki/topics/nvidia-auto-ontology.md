---
type: topic
tags: [Ontology, 本体论, 语义层, NVIDIA, Auto-Ontology, Agent-Toolkit, MCP, 知识图谱, pgvector, NVIDIA-NIM, 数据治理, 开源]
created: 2026-10-27
updated: 2026-10-27
related_sources: 1
source_url: https://mp.weixin.qq.com/s/DXdqHAA-5enaRKvY5bkt-g
---

# NVIDIA Auto Ontology：从元数据自动生成本体，创建时间缩短 90%

> 来源：DataFunTalk《NVIDIA 开源 Auto Ontology，本体创建时间缩短 90%》（2026-10-24，文末注明「截至 2026-10-23 依据公开技术资料校对」）
> 原文：https://mp.weixin.qq.com/s/DXdqHAA-5enaRKvY5bkt-g
> 原始素材：`raw/nvidia-auto-ontology.md`；快照与 **8 张图**见 `raw/assets/nvidia-auto-ontology/`
> **来源性质**：DataFunTalk 对 NVIDIA 官方公告/文档的**第三方解读**；文中插图是编辑依官方文档**重绘的示意图，不是 NVIDIA 原始截图**。
> 仓库核实（**2026-10-28 实拉 README 与 API**）：`NVIDIA/auto-ontology`，**Python**，**Apache-2.0**，**⭐417 / fork 52 / watch 5 / open issue 28**，创建 **2026-04-27**，最后推送 **2026-10-28 06:34**（当日仍在提交），体积约 **22 MB**，默认分支 `main`。
> ⚠️ 星数一天内 **195 → 417**（翻倍），属媒体曝光驱动的短期冲高，不代表生产采用。
> 技术细节（技术栈、九个工具、安全配置）均转述自该解读稿，仍需以官方 README 为准。

## 仓库实测（2026-10-28 直读 README）

### 自我定位

> "Agents can retrieve documents and query databases, but **reliability gates agentic analytics**: a revenue metric answered faster is worth nothing if the number is wrong."

定义自己是**上下文层**（context layer），回答六个问题：数据在哪、是什么意思、该不该用、怎么用、从哪来、什么与之相似。

### 真实软件组件（README 原表）

| 组件 | 技术 | 端口 |
| --- | --- | --- |
| 前端 | **Next.js 16**（React 19 / TypeScript / Tailwind 4）、**Better Auth**、**Prisma** | 3000 |
| 后端 | **FastAPI**（Python 3.12+）、**LangChain** | 3001 |
| 摄取 worker | FastAPI（Python 3.12+） | 3002 |
| 存储 | **Postgres + pgvector**（应用元数据 + 语义目录 + 向量库**同一个库**） | 5432 |
| 凭证 | **HashiCorp Vault（可选）** | — |

### 默认 NIM 模型

- LLM：`nvidia/nemotron-3-nano-30b-a3b`
- Embedding：`nvidia/nemotron-3-embed-1b`
- Rerank：`nvidia/llama-nemotron-rerank-vl-1b-v2`

配置用**三元组**（`<PREFIX>_ENDPOINT` / `_API_KEY` / `_MODEL`），`DEFAULT_MODELS_*` 兜底、可逐个覆盖；**任何 OpenAI 兼容端点都能接**，不锁死 NIM。

### 安全实现细节（比解读稿准确）

- **凭证明文风险确认为官方自述**：未配 Vault 时，整个连接对象（含密码）JSON 序列化后**不加密**存在目录行
- ⚠️ **更危险的一条**：Vault 只在 `VAULT_ADDR`、`VAULT_NAMESPACE`、`VAULT_ROLE_ID`、`VAULT_SECRET_ID` **全部齐备**时才启用；**部分配置会被忽略并打警告后回落到明文**——典型的「以为配了其实没配」失败模式
- **API Token**：只存 **SHA-256 哈希**、只显示一次；**以所有者身份行事**（无独立权限）；**不能管理 Token**（防泄漏后自我续期）；删除即 401
- **内部身份头** `x-auto-ontology-user-id` 由 Next.js 网关转发，FastAPI **不做独立校验** → 3001 端口**绝不可公网暴露**

### 对话会话

- `POST /api/chat/completions` 返回 **SSE**（`step` / `result` / `error` + `[DONE]`）
- `conversation_id` 由客户端生成；同会话并发请求返回 **409 Conversation in progress**
- 上下文只取**最近 5 轮、上限 12,000 字符**，且**不复用**内部思考、图表载荷、原始结果集

### 两个容易被忽略的仓库事实

- **「本项目当前不接受外部贡献」**（README 明文）——Apache-2.0 许可，但外部 PR/Issue 不被接纳，**采用者只能等官方**
- 基准测试**不在本仓库**：BIRD 等 Text-to-SQL 评测指向 `NVIDIA/ontology-sql-eval`；**README 没有任何准确率数字**

## 一句话

**NVIDIA 把「本体建设」这个重活拆成了五个动词，并把 Agent 的入口收窄到九个只读 MCP 工具。**

事件：**2026-10-21** NVIDIA 公布扩展版 **Agent Toolkit**，把开源项目 **Auto Ontology** 纳入新的 **Agent Knowledge Foundation**。

- 从**企业元数据、文档、已有语义模型**出发，组织业务实体、关系与指标
- 通过 **MCP / CLI / API** 向 Agent 提供可复用上下文
- 官方页面称：测试中**本体创建时间缩短 90%**

> ⚠️ 那个 90% 是**初始建设效率的厂商自测**，**不是**端到端部署周期，**也不是**准确率承诺。官方**未公开测试规模、人工审核投入与评价方法**。

## 为什么本体建设一直卡在「数据打通之后」

企业数据平台通常已有：表结构、字段描述、数据血缘、BI 报表、指标文档。

> 但**这不等于**有一套可供 Agent 使用的业务知识。

| 数据库知道 | 却不知道 |
| --- | --- |
| `customer_id` 是字符串 | 它是「消费者账号」还是「企业客户」 |
| 订单表能关联发票 | 一张发票是否只对应一笔订单 |

传统建设路径很重：数据工程师梳理来源表与主外键 → 架构师定义对象与关联 → 财务/销售审核指标口径。而且**首期建模只是开始**——新系统接入、组织调整、指标改版都会带来持续维护。

> 根本矛盾：**「原始结构」和「权威业务含义」之间没有现成的一一对应关系。**

## 五个动词：Discover / Ground / Validate / Expose / Learn

| 动词 | 做什么 |
| --- | --- |
| **Discover** | 从元数据**发现**对象与关系 |
| **Ground** | 把指标、实体、定义**对齐** |
| **Validate** | 用认证规则与血缘**检查**查询 |
| **Expose** | 通过接口**提供**上下文给 Agent |
| **Learn** | 把**已认证的纠正**纳入语义资产 |

> 定位于「**生成起始本体**」的开放组件——减少候选模型的手工整理，但**业务判断并没有消失**。

## 工程实现

| 层 | 技术 |
| --- | --- |
| 后端 | **FastAPI** |
| 前端 | **Next.js** |
| 数据摄取 | 独立服务 |
| 语义目录 + 向量索引 | **PostgreSQL + pgvector** |
| 推理 / Embedding / Reranking | **NVIDIA NIM** |
| 数据源连接 | **Databricks、Snowflake、PostgreSQL、DuckDB** |
| 部署 | **Docker Compose**、**Kubernetes** |

### 一个零售例子

CRM 存客户、交易库存订单、财务系统维护发票。系统可提出 **Customer / Order / Invoice** 实体候选，并尝试找出「客户—订单」「订单—发票」关联。

> 但这些只是**建模线索**：一个客户在多个系统可能有不同 ID，一张发票可能汇总多笔订单——**直接按同名字段 JOIN 很容易重复计算**。

### 真正关键的是指标语义

销售说的 **Revenue** 可能是支付金额，财务定义的 Revenue 可能按确认规则计算。

> 系统能发现两者都跟订单有关，**却不能凭字段相似度决定谁覆盖谁**。

可复用的语义层应保留：指标**定义**、**适用范围**、**粒度**、**关联路径**、**物理字段映射**，并标记**哪些定义已认证**。

> 这样 Agent 找到的不是「看起来相关的列」，而是**可以核查的业务概念**。

README 明确：用企业元数据建立语义与图式推理层，**补充**企业已有的 Ontology / Semantic Model——**不要求把所有数据复制到另一个图数据库**。

**分水岭**：业务人员对生成结果**测试、修正、认证**，才是从候选结构走向可信业务语义的关口。

## 九个 MCP 工具：Agent 不再直接猜 SQL

### 鉴权分层（这个设计值得学）

```
Agent → MCP 服务 → 带认证的 Next.js API 网关 → 后端
```

**MCP 服务只是公共 API 的 HTTP 客户端**，本身不持有数据库凭证，也不能绕过平台权限。

> 把「Agent 能用哪些工具」和「当前用户能访问什么」**分开处理**。

### 九个默认工具

| 工具 | 作用 |
| --- | --- |
| `search_terms` | 查找业务术语 |
| `get_term` | 取术语解释 |
| `get_term_columns` | 术语 → 实际字段 |
| `get_term_sql_attributes` | 术语 → SQL 属性 |
| `get_sql_attribute` | 查单个 SQL 属性 |
| `describe_table` | 表的语义关联 |
| `check_answerable` | 语义层**是否覆盖**该问题 |
| `check_readiness` | 语义层**是否已编译**、数据库**连接是否可执行** |
| `ask_question` | 启动完整 NL→SQL 问答链路 |

### 典型调用链

问「上季度活跃客户数」：

1. `search_terms` 检索「活跃客户」定义
2. `get_term_columns` 拿映射字段
3. `check_answerable` + `check_readiness` 做前置检查
4. `ask_question` 出答案

返回：**答案 + 实际执行的 SQL + 结果行**，供上层复核。

> ⚠️ 结果**最多返回 100 行**，并用 `row_count`、`truncated` 告知是否截断——**「拿到了查询结果」不等于「拿到了完整明细」**。

### 「只读」不等于没风险

默认 MCP 工具**全部只读**，**故意不暴露**任意浏览原始数据库/Schema/原始列的工具——目的是逼 Agent 走语义层，而不是绕过约束猜表。

> 但 `ask_question` **仍会经平台执行查询 SQL**。所以：「只读」**不等于**没有访问生产数据的风险——**数据库账户、行级权限、审计仍需企业自行配置**。

这也解释了 Validate 的边界：**生成 SQL 与执行成功只完成技术检查**；指标口径、连接粒度、数据来源、可解释性仍要验。官方**没有**承诺所有生成查询能自动通过业务正确性审计。

## 长期可信：靠审核与生产配置

初次生成本体只是起点。业务增长会改「活跃用户」的统计窗口，财务关账会改收入确认时点，新业务线会引入新客户标识。

> 缺审批、回归测试、版本记录 → 本体就从「可信上下文」**慢慢退化成另一份过时文档**。

### 建议的三态流转

| 状态 | 谁负责 |
| --- | --- |
| **候选** | 系统发现新字段/关联、提出指标候选 |
| **待审核** | 业务所有者裁定口径 |
| **已认证** | 数据团队用固定测试问题 + SQL 结果检查变更 |

上线后观察四个指标：**口径冲突率、错误 SQL 比例、查询可回答率、人工复核投入**。

> 比「单次建模快多少」更重要的是：**规则变化时它还可控吗**。

### Learn 的正确理解

官方把 Learn 列为能力方向，强调**吸收已认证的纠正**。

> ⚠️ **不要**读成「所有用户反馈都会自动变成正式业务规则」。

## 两个必须注意的安全细节

**① 凭证可能明文落库**
通过 Web UI 添加数据源时，**若未配置 HashiCorp Vault，连接对象（含密码）可能以未加密 JSON 存在 PostgreSQL**；**Vault 默认不启用**。

> 部署前先确认：密钥存储策略、最小权限数据库账号、网络隔离。**别因为系统有认证与 RBAC 就以为凭证自动受保护。**

**② 内部身份头信任边界**
FastAPI 使用的内部用户身份头由 **Next.js 网关转发**，**后端端口不应直接暴露公网**。

## 四家同谈 Ontology，落点不同

| 平台 | 落点 |
| --- | --- |
| **NVIDIA Auto Ontology** | 元数据发现 → 语义组织 → 查询验证 → MCP 接入，做**开放的语义支撑组件** |
| **Palantir Ontology** | 对象/属性/链接表达业务状态 + **Action / Function 把对象修改连到业务流程**——**执行型本体** |
| **Snowflake Horizon Context** | 数据目录 + 语义视图 + 血缘 + 访问控制统一；Semantic Views 供 Cortex Analyst 复用，Autopilot 辅助生成 |
| **Databricks Genie Ontology** | 自动推断 + Unity Catalog 中**人工管理的** Metric Views / Pages 等语义资产 |

> 结论：**「NVIDIA 首次让机器自动构建 Ontology」这个说法不成立**——另外三家也都在做语义自动化。

### 怎么选

| 现状 | 更适合 |
| --- | --- |
| 重点是已有仓库里的指标治理 | **原生语义层**（最易沿用权限体系） |
| 强调业务对象与动作闭环 | **执行型 Ontology**（Palantir 路线） |
| 多个平台并存，想给不同 Agent 共享语义入口 | **开放组件**（但需测算跨源建模质量与长期维护成本） |

> ⚠️ NVIDIA 10-21 公告提到 Palantir、Databricks、Snowflake，指的是更广泛的 **Agent Knowledge Foundation**，**不能推断它们已生产部署 Auto Ontology**。

## 评价标准要换

对 Data Agent，该跟踪的指标从「能写多少条 SQL」转向：

- **有多少问题使用了已认证定义**
- **有多少错误可追溯**
- **有多少变更可以稳定复核**

> 当业务知识从散落的文档与提示词，进入**可检索、可审核的共享语义目录**，Agent 才有条件从演示走向长期运行。

## 与库内已有线索的关系

- [[Helix Foundry：图 + SQL 自动构建跨源企业本体]] —— **最直接的对照**：两者都从元数据自动生成本体。差异在「谁拍板」——Helix Foundry 用**确定性程序发现 + 人确认**，明确**不让 LLM 决定结构**；Auto Ontology 用 **NIM 推理**生成候选，靠**三态审核（候选/待审/已认证）**兜底。另一个差异是执行侧：Helix 用 DuckDB 跑 SQL，Auto Ontology 只做语义供应、不接管计算
- [[从本体论到 Fabric Ontology]] —— 微软路线：属性图 + GQL、本体是「一层声明」、图是**物化的需手动刷新**；NVIDIA 则**不要求把数据复制到图数据库**，只做语义目录
- [[EvoOntology：让 Data Agent 自己维护本体层]] —— 都强调「Learn / 演化」，但 EvoOntology 让 Agent **用执行轨迹反向改本体**并经 Gate 验证；Auto Ontology 的 Learn 只吸收**已认证的纠正**，权力仍归人
- [[Datastrato 2.0：Agent Context 的三重支柱]] —— 同一问题域的国内产品路线（统一元数据 → 开放语义层 → Ontology），可对照其「混合路径建模」与本篇的「发现-审核」流程
- [[本体论 (Ontology)]] —— 概念页
- [[从 Arrow 到 Iceberg 到 Polaris 到 Ossie]] —— 语义标准化长链条上，本篇属**语义供给层**，不碰存储格式

## 待验证 / 证据边界

- **README 未给任何准确率/延迟数字**：BIRD 等基准指向 `NVIDIA/ontology-sql-eval`，本项目只讲架构与配置 → 「多准」必须自己去那个仓库跑
- **90% 无测试细节**：官方未公开样本规模、基线定义、人工审核工时、评价方法——**不能据此估算企业上线周期**
- **仓库已核实元数据**（⭐195 / fork 27 / 创建 2026-04-27 / 推送 2026-10-26，Python），但**许可协议未取到**（API 返回被截断）；星数不大，说明**社区热度远低于 Helix Foundry（⭐1,599）或 Laya（⭐33,414）**，不宜当作成熟生态
- 文中技术栈（FastAPI/Next.js/pgvector/NIM）**全部转述自解读稿**，未逐项比对官方 README
- **九个 MCP 工具的名称与语义**来自解读稿对官方 `docs/mcp.md` 的转述，**未逐项比对原文**
- **「只读」的实际边界**：`ask_question` 会执行 SQL，真实风险取决于数据库账户与行级权限配置——文中已提示，但**没有量化审计能力**
- **Vault 默认不启用、凭证可能明文落库**：这是文中引述的部署文档细节，**务必在真实部署前自行确认**，这是本篇最值得当真的风险项
- **四家对比是定性描述**，无同数据集评测；「各家都在做语义自动化」的判断成立，但**能力深浅无法从本文得出**
- 文中插图**为编辑重绘**，不是官方截图——图形细节不可作为产品事实引用
