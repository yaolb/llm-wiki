---
type: topic
tags: [WorkBuddy, AI Agent, 多智能体, 数仓, 自动化开发, 58, 指标库]
created: 2026-08-06
updated: 2026-08-06
related_sources: 1
source_url: https://ishare.58corp.com/articleDetail?actType=mlcc&id=130675
---

# WorkBuddy 数仓专家团：AI 智能体驱动的数仓全流程自动化

## 概述

58 内部基于 WorkBuddy 平台构建的**五角色 AI 智能体团队**，实现数仓开发全流程自动化（建模 → 建表 → ETL → 调度 → 测试 → 交付）。核心理念：**人工只负责"定规则"（指标库），专家团负责"写代码"（全自动开发）**。

## 背景：传统数仓开发之痛

传统模式一个需求从提出到上线需经历：需求澄清 → 架构设计 → 建表 DDL → 手写 ETL → 配置调度 → 配置依赖 → 手写测试 → 编写文档 → JOB 上线。环节多、周期长、易出错、严重依赖个人经验，多项目只能串行排队。

## 五角色 AI 智能体团队

| 角色 | 专家名称 | 核心职责 | 能力边界 |
|------|----------|----------|----------|
| 交付总监 | 顾全局 | 接收需求、调度成员、中转信息、汇编最终交付 | 不替代任何专业产出，所有跨成员信息流必须经主理人中转 |
| 数仓架构师 | 高见远 | 数仓总体架构、分层规划、系统边界定义、技术选型 | 不输出 DDL/ETL、不执行建表 |
| 数据建模师 | 徐维度 | 维度建模、表结构设计、DDL 建表执行、字段取数逻辑、详细设计文档 | 不输出 ETL INSERT、不写测试案例、禁止 DROP TABLE |
| 数据工程师 | 寇豆码 | ETL 开发、58DP 调度配置、JOB 上线、开发文档 | 不输出建表 DDL、不写测试案例 |
| 质量审查员 | 严把关 | 测试案例编写、6 维度覆盖测试、批量执行、数据一致性验证 | 禁止任何写操作（只读不写），所有测试 SQL 必须是 SELECT |

**职责边界矩阵**：每项工作（架构设计/建表 DDL/建表执行/ETL 代码/平台调度/测试案例/质量校验/任务编排）只有一个唯一负责人，职责不交叠。

**标准工作流程（SOP）**：需求澄清 → 架构设计 → 建模+建表 → ETL 开发+上线 → 质量审查 → 交付。

**协作机制**：主理人创建团队 → 调度成员下发任务 → 成员回传产出 → 主理人汇编交付。**所有跨成员信息流必须经主理人中转，严禁成员互直连**（Hub-and-Spoke 拓扑）。

## 指标库：专家团体系中人工的唯一职责

### 定位

指标库是**人工与自动化的交接点**，也是整体共享、持续积累的知识库：

```
对接业务需求 → 确认业务口径 → 维护指标库 → 触发专家团 → 全流程自动化开发
（人工）        （人工）        （人工）      （自动）        （自动）
```

⚠️ **关键约束**：指标库必须先维护好，否则专家团无法启动——维护指标库是触发自动化开发的唯一入口。

### 指标库内容

| 要素 | 说明 | 示例 |
|------|------|------|
| 字段名 | 指标的唯一标识 | `pm_prop_esf_d_ajk`（安居客二手房套餐推广房源量） |
| SQL 计算公式 | 指标的计算逻辑 | `COUNT(1)` 或 `SUM(xxx)` |
| 数据源表 | FROM 表名 | `dm_broker_house_esf_daily` |
| 筛选条件 | WHERE 子句 | `cal_dt='${cal_dt}' AND is_pm_d_ajk=1` |
| 聚合逻辑 | COUNT/SUM + GROUP BY | `GROUP BY broker_id, city_id` |

### 价值

- **口径统一**：取数逻辑一处维护，杜绝"同一指标不同人不同 SQL"
- **可追溯**：任何字段计算逻辑可在指标库查到源头
- **低门槛**：新人不需要熟悉底层表结构
- **质量可控**：计算逻辑人工确认固化，AI 生成 SQL 无理解偏差

### 指标复用规模效应

只有**新增指标**才需要人工维护，已有指标直接复用。指标库越丰富，"零维护直接复用"比例越高，开发周期从天级压缩到小时级，人工精力转向业务理解。

## 详细设计文档：串联各专家角色的核心纽带

```
指标库（输入）──→ 详细设计文档（中枢）──→ ETL 开发 + 测试（并行执行）
```

- **向上**：消费指标库取数逻辑 → 结构化表设计
- **向下**：为数据工程师提供 ETL 开发的精确输入
- **横向**：为质量审查员提供测试案例编写的字段依据

**并行分叉**：详细设计文档完成后，ETL 开发（左路）与测试案例编写（右路）**并行启动**，大幅缩短交付周期。

### 案例：经纪人二手房套餐推广房源量表

```sql
-- 建模师产出 DDL
CREATE TABLE dw_db.da_broker_promotion_daily (
    broker_id           BIGINT  COMMENT '经纪人ID',
    city_id             INT     COMMENT '城市ID',
    pm_prop_esf_d_ajk   INT     COMMENT '安居客二手房套餐推广房源量',
    cal_dt              STRING  COMMENT '日期分区'
) PARTITIONED BY (cal_dt STRING) STORED AS ORC;

-- 工程师产出 ETL
ALTER TABLE dw_db.da_broker_promotion_daily DROP IF EXISTS PARTITION (cal_dt = '${dealDate}');
INSERT OVERWRITE TABLE dw_db.da_broker_promotion_daily PARTITION (cal_dt = '${dealDate}')
SELECT user_id AS broker_id, unity_city_id AS city_id, COUNT(1) AS pm_prop_esf_d_ajk
FROM dw_db.dm_broker_house_daily
WHERE cal_dt = '${dealDate}' AND is_pm_d_ajk = 1
GROUP BY user_id, unity_city_id;
```

**六维度测试**（审查员）：完整性（集合对比无遗漏）、准确性（抽样对比）、一致性（按维度汇总交叉验证）、唯一性（主键无重复）、有效性（值域合法）、空值检查。

## 传统 vs 专家团模式

| 环节 | 传统模式 | 专家团模式 | 负责角色 |
|------|----------|-----------|----------|
| 建表 DDL | 手动编写 | 自动生成并执行 | 徐维度 |
| ETL SQL | 手动编写 | 自动生成 | 寇豆码 |
| 调度/依赖配置 | 手动配置 | 自动配置 | 寇豆码 |
| JOB 上线 | 手动提交 | 自动上线 | 寇豆码 |
| 测试案例/执行/报告 | 手动 | 自动生成/批量执行/自动输出 | 严把关 |
| 开发文档 | 手动编写 | 自动生成 | 寇豆码 |
| 最终交付 | 手动汇编 | 自动汇编 | 顾全局 |

## 与 AI Agent 体系的关联

- **多角色协作模式**：五专家各司其职 + 主理人 Hub-and-Spoke 中转——与 [[ai-agent]] 的多 Agent 协作范式一致
- **职责边界矩阵**：每个工作项唯一责任人，防止角色重叠/遗漏——[[agent-tool-selection]] 中工具边界设计的实践案例
- **指标库 = 人工唯一职责**："定规则 vs 写代码"的职责分离——[[ai-native-dev-system]] 中 AI Native 研发体系的落地
- **详细设计文档 = 统一数据源**：文档作为跨角色协作契约——[[spec-driven-development]] 的 Spec 驱动思想

## 原始素材

- [58知享原文](https://ishare.58corp.com/articleDetail?actType=mlcc&id=130675)
- [本地归档全文](/meishi_docs/ishare/workbuddy-data-warehouse-expert-team.md)
