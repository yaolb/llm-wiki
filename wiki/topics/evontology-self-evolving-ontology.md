---
type: topic
tags: [Ontology, 本体论, 语义层, Data Agent, 自进化, MCP, EvoOntology, 轨迹归因, 企业AI, 人大]
created: 2026-10-03
updated: 2026-10-03
related_sources: 1
source_url: https://mp.weixin.qq.com/s/PirpvPKDnqI0TYHFZIBRyA
---

# EvoOntology：让 Data Agent 自己维护本体层（自进化 Ontology）

> 素材分析：微信公众号「DataFunTalk」《重磅开源 EvoOntology：打掉本体"建设、维护、更新"难题》（2026-10-01），原文归档于 `raw/evontology-self-evolving-ontology.md`。
> **来源性质：媒体对论文的解读稿**（DataFunTalk 为技术社区媒体），非论文原文。文中所有实验数字均转述自论文，**未见第三方复现验证**。
> 关联：本篇是 [[本体论 (Ontology)]] 的**运行时化**延伸——概念页讲"本体是什么"，[[本体建模五步法：本体论+AI如何进入复杂工业场景]] 讲"怎么建"，本篇讲**建完以后谁来维护**。

## 一句话结论

人大团队把 Ontology 从「提前写好的静态说明书」改成「Agent 运行时查询、并用执行轨迹反向更新的服务」——**Ontology 的维护者从数据团队变成了 Agent 自己**，且实验显示这反而让 Agent 更省 Token。

## 论文基本信息

- **论文**：《EvoOntology: A Self-Evolving Ontology Layer for Data Agents》
- **发布**：2026-09-14，中国人民大学团队（RUC-DataLab），**同步开源代码**
- **链接**：arXiv `2609.15779`（https://arxiv.org/abs/2609.15779）、GitHub `ruc-datalab/EvoOntology`
- **作者之一**：张绍磊（中国人民大学信息学院助理教授），将于 **DACon 2026 北京站（10 月 23–24 日，北京希尔顿逸林酒店）** 做主题分享《自进化数据智能体：迈向 Data–Ontology–Agent 协同进化》

## 要解决的问题

企业 Agent 现在会写 SQL、调 API、读文件、跑代码，但一接进企业数据就卡在更基础的问题上：

- 同一个「客户」在不同系统里到底是不是同一个对象？
- 「收入」该取订单金额、确认收入，还是回款？
- 一个风险事件该关联哪些账户和合同？

这些**业务含义模型不会天然知道**——需要 Ontology（本体）把业务概念、数据对象、字段关系、操作规则组织起来。

但真正麻烦的是：**业务一直在变**，表越来越多、字段含义会调、Agent 用数据的方式也在变。一套 Ontology 建好之后，**谁来持续维护？** 论文的判断是：如果始终靠数据团队逐条维护，**Ontology 自己迟早变成新的维护成本**。

## 五个核心判断

### ① 把 Semantic Layer 塞进 Prompt，未必帮得上 Agent

**反直觉的实测**（DDR-Bench，Trajectory-Wise 准确率）：

| 模型 | 无 Ontology | 静态 Semantic Layer | EvoOntology |
|---|---|---|---|
| Claude-Sonnet-5 | 72.5% | **57.5%（反而降了）** | 81.3% |
| GPT-5.6-sol | 68.5% | 65.5%（也降了） | 93.5% |

论文测试的 6 种模型上，EvoOntology 相比无 Ontology 的 Baseline **平均提升 17.8 个百分点**。

**原因**：企业数据结构一大，Semantic Layer 自己就越来越复杂。每次都把整套语义塞进上下文，既占 Context，又带进大量与当前任务无关的内容。它更像**一本很厚的说明书**，Agent 每次都要从里面重新筛选。

### ② Ontology 从「说明书」变成「运行时服务」

EvoOntology 把 Ontology 拆成**三层**：

- **Content Layer** —— 真正的业务语义，含 4 类内容：
  - `Terms`：业务概念（如 Revenue、Customer）
  - `Mappings`：概念 → 底层数据表和字段
  - `Constraints`：数据使用时的限制
  - `Evidence`：支撑这些判断的**数据证据**
  > 关键：不只写"Revenue 代表收入"，还要说明**对应哪个字段、怎么关联、什么条件下能用、当初根据什么数据确定**
- **Schema Layer** —— 管 Ontology **自己的结构**；出现现有结构描述不了的新业务关系时允许改结构
- **Tool Layer** —— 决定 Agent **怎么调用**这些信息

**用法上的改变**：任务开始时只给 Agent 一个**轻量 Manifest**，真正执行后再按需通过 **MCP Server** 的 `browse`、`resolve` 等工具查询。要研究某公司 Revenue，先找业务概念，再往下解析字段、映射、约束——**不需要提前读完整个企业数据字典**。

> Ontology 由此从"Prompt 前面附的一大段背景"变成 **Agent Harness 里一个独立的运行时服务**。

### ③ Agent 的执行轨迹反过来更新 Ontology

- **冷启动**：不要求全靠人工建。**Builder Agent** 先读一批真实任务，找高频实体/指标/操作/分析条件，再主动检查底层数据（字段类型、真实数据值、关联关系），确认映射合理才写进 Ontology，**并保存 Evidence**
- **进化**：**Evolution Agent** 分析历史执行轨迹，找**重复出现的失败模式**，判断该改哪一层：
  - 常把概念映射到错误字段 → 改 **Content Layer**
  - 正确信息已存在但总检索不到 → 改 **Tool Layer**
  - 新业务关系没有合适结构可表示 → 改 **Schema Layer**
- **改法是局部 Patch，不是重建**
- **关键 Gate**：新 Candidate 与旧 Parent 在**同一组验证任务**上重跑，模型/解码参数/执行预算**保持一致**，**只有确实更好才接受**，否则保留旧版

**消融实验**（说明 Gate 不是可选项）：

| 配置 | DDR-Bench Trajectory-Wise |
|---|---|
| 完整 EvoOntology | **89.5%** |
| 取消 Gate（所有修改直接进下一版） | 78.3% |
| 取消 Attribution（不判断该归到哪层） | 也下降 |

> 所以「Self-Evolving」**不等于让 Agent 自由改知识库**。链路是明确的：**跑任务 → 收集轨迹 → 找失败模式 → 定位问题 → 生成修改 → 验证决定是否接受**。

### ④ Ontology 越用越多，Agent 反而少走弯路

担心"多查一次 MCP 多读一层语义会增加 Token"是合理的，但实测**恰好相反**（DDR-Bench）：

| 阶段 | 轮均输入 Token | 平均任务轮数 | 总 Token |
|---|---|---|---|
| 无 Ontology | 3.2K | 14.6 轮 | 52.6K |
| 加入初始 Ontology | 4.1K | 11.2 轮 | 50.4K |
| 持续进化后 | 4.6K | **8.4 轮** | **42K（−20%）** |

四模型分析中：**总 Token 52.6K → 42K（约 −20%），Trajectory-Wise 69.5% → 89.5%**。

**原因**：没有 Ontology 时，Agent 每次都要重复探索——找表、看字段、查取值、试 Join、判断业务含义。Ontology 把**已验证过的结果沉淀下来**，后续任务直接复用；每步多读一点语义，换来大量无效探索的减少。

**和普通 Memory 的对比**：

| 方案 | Trajectory-Wise |
|---|---|
| ReAct Baseline | 69.5% |
| + 可检索历史轨迹的 Memory | 75.8% |
| **EvoOntology** | **89.5%** |

> **Memory 保存"过去某个任务怎么做过"；Ontology 更进一步，把这些经验重新整理成可查询、可组合的结构。** 一个偏历史记录，一个更接近**长期积累的业务规则**。

### ⑤ 同一套业务知识，不同模型可能需要不同的 Ontology

四个模型（GPT-5.5、GPT-5.6-sol、Claude-Sonnet-5、Claude-Opus-4.8）从**同一初始 Ontology** 出发各自进化，最终结果**并不一样**：

- 各模型最终接受的 Term，两两 **Jaccard 重合度最高不超过 0.62**
- 交叉实验：把一个模型的 Ontology 给另一个模型用，**性能都下降**——用自己进化出来的效果最好，跨模型迁移**至少降 6.6 个百分点**，部分情况**平均差 10.9 个百分点**

**被接受的演化修改，增益来自哪一层**：

| 层 | 累计增益占比 |
|---|---|
| **Tool Layer** | **57%** |
| Content Layer | 34% |
| Schema Layer | 9% |

> **超过一半的收益来自"怎么让 Agent 使用 Ontology"，而不是继续往里补更多知识。** 这跟过去对 Ontology 的理解很不一样：以前核心工作是"把业务对象和关系定义准确"；进入 Agent 场景后，**怎么查询、什么时候查询、查到什么粒度，也开始变成 Ontology 的一部分**。

## 局限（论文自己承认）

EvoOntology **目前仍是研究工作**：

- 实验集中在 **DDR-Bench、InsightBench、BIRD** 这类 Data Agent Benchmark
- **真实企业里的权限控制、业务规则冲突、多人修改、审计、长期版本治理要复杂得多**
- 保留 Parent/Candidate、验证、回滚机制，本身就说明 Self-Evolving **不是把 Ontology 完全交给 Agent**，而是把**一部分维护过程变成可自动运行、自动验证的循环**

## 与知识库既有内容的关联

- [[本体论 (Ontology)]] —— 概念基础；本篇补的是**运行时与维护机制**
- [[本体建模五步法：本体论+AI如何进入复杂工业场景]] —— 传统"人工建本体"路线；本篇正是对它**"建完谁维护"**这一缺口的回应
- [[Apache Ossie 实战：给 AI 取数系统搭一层业务语义地基]] —— 同属"AI 取数的语义层"问题域；Ossie 强调**用开放标准把语义层建起来**，EvoOntology 强调**建完以后靠轨迹自维护**，两者是同一链条的不同环节
- [[从 Arrow 到 Iceberg 到 Polaris 到 Ossie：语义标准化的最后一块拼图]] —— "语义层需要持续保鲜"的判断与本篇一致
- [[Datastrato 2.0：Agent Context 的三重支柱（统一元数据 → 开放语义层 → Ontology）]] —— 产品化路线，同样以 Ontology 收口
- [[Anthropic 数据分析 Agent：Claude 自动化 95% 内部数据分析]] —— 同属 Data Agent 落地；都指出**验证环节决定能否上线**
- [[MetaRSI-v1：把 RSI 拆成 Data / Model / Harness 三个可组合算子]] —— **Candidate/Parent 成对评测 + 拒绝则回滚**是其"测试集 + 持续更新闭环"的工程镜像
- [[58 集团统一指标系统 — API 网关方案设计]] / [[万象 AI 分析平台]] —— 企业侧"统一语义层"的现实工程语境（指标口径统一是同一类问题）

## 待验证

- 论文未提供**中文/企业私有数据集**上的结果；真实权限与审计场景下的自进化安全性未验证
- 媒体解读稿与 arXiv 原文可能有个别数字偏差，**引用具体数字前建议回原文核对**（arXiv 2609.15779）
- 开源代码 `ruc-datalab/EvoOntology` 的可复现性尚未核实
