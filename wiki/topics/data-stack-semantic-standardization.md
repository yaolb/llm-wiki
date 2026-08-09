---
type: topic
tags: [agent, 大数据, 语义]
created: 2026-08-09
updated: 2026-08-09
related_sources: 1
source_url: https://mp.weixin.qq.com/s/4EpQTgZdD2wqg-5s-wtIog
---

# 从 Arrow 到 Iceberg 到 Polaris 到 Ossie：语义标准化的最后一块拼图

## 概述

微信公众号「本体与AI」文章。核心论点：2018 年"企业大数据平台"架构图（Hadoop + ETL + Tableau，格式五花八门、点对点 connector 硬接）的每一层，七年内被 Apache 开源标准一块一块吃掉——**Parquet（文件层）→ Arrow（内存层）→ Iceberg（表格式）→ Polaris（目录层）→ Ossie（语义层，2026）**。十年五层一个逻辑：每层一旦稳定，行业就把下一层也交出去做成开放标准。

## 五层演进

| 层 | 标准 | 年份 | 解决的问题 |
|----|------|------|-----------|
| 文件格式层 | Parquet | 2013 | 数据存成什么？怎么读？（最稳固） |
| 内存交换层 | Arrow | 2016 | 数据怎么传？格式是啥？（成熟） |
| 表格式层 | Iceberg | 2020 | 表怎么管？怎么改？（快速增长） |
| 目录 & 治理层 | Polaris | 2025 | 数据在哪？谁能看？（刚毕业） |
| 语义层 | Ossie | 2026 | 你的数据什么意思？（刚进场） |

## 关键要点

### Arrow — 内存交互层
- 痛点：Spark 读 Pandas DataFrame 需序列化再反序列化，几百 GB 数据 70% 时间花在格式翻译
- Wes McKinney（Pandas 作者）牵头：跨语言、跨进程的列式内存标准布局，同一指针直接传，无需序列化
- 衍生：Flight（传输）、ADBC（数据库驱动）、DataFusion（查询引擎）
- 现状：Polars、DuckDB、InfluxDB 3.0 底层都用 Arrow

### Iceberg — 表格式层
- Netflix 2017 年发起：在 Parquet 文件上抽象 schema / partition / snapshot
- 2025 Spec v3：二进制删除向量（删行不重写整个文件）、行级血缘、Variant 类型（JSON 半结构化）
- 一句话："表是一个逻辑概念，不是一堆文件的别名"

### Polaris — 目录层
- 基础：Iceberg REST Catalog 协议（统一查询目录的接口标准）
- Snowflake 2024 开源 Polaris + Databricks 联手推 Apache 孵化，2026 年 7 月毕业顶级项目
- 关键洞察：**不是技术多牛，是 Snowflake 和 Databricks 这对冤家同时认了它**——开放标准最难的是让竞争对手一起签字

### Ossie — 语义层（核心）
- 场景：Agent 读到 `o_sts_cd=3`，Polaris 告诉它表在哪、谁能读，但 Agent 不知道 `o_sts_cd=3` 就是"已完成"，更不知道"已完成"= 已发货 + 已签收 + 已入账
- Ossie：给数据表加"翻译说明书"——YAML 把字段映射到业务概念、定义指标算法、标注同义词
- 分工：Polaris 管"数据在哪"，Ossie 管"数据是什么意思"（Agent 和 BI 工具理解表）

## 五层顺序不是偶然的

行业一层一层"交"出来：① 先用起来（各家各搞一套）→ ② 痛够了（对接成本 > 搬数据成本）→ ③ 有人牵头（大公司开源内部方案）→ ④ **竞品认了** → ⑤ 进 Apache。

- 重点在 ④：Iceberg 最难的不是 Spec v3，是 Databricks 认了、Snowflake 也认了；Ossie 现在也在过这道坎（50+ 家公司已签字）
- 上层依赖下层：每层的开放标准让下一层的问题变得清晰可见，**每层都是上一层的"编译目标"**

## Ossie 为什么意义特殊

前四层对齐"机器跟机器怎么说话"；Ossie 解决"人跟机器之间怎么对齐含义"。2026 年能成的两个原因：

1. **AI Agent 倒逼**：BI 出错人还能纠，Agent 直接根据查询结果做决策、口径错了没人复核——"含义"变成必须标准化的问题
2. **生态成熟**：Parquet/Iceberg/Polaris 三层稳了，行业可以抬头看下一层

## 对数据架构师的建议

- **Parquet + Iceberg = 地基**：2026 年的起点线，无争议
- **Polaris = 围墙**：决定谁能进、看到什么；已有 Snowflake Horizon / Databricks Unity Catalog 可不换，但权限模型往 Iceberg REST 协议靠
- **Ossie = 门牌号**：决定每个房间放什么、叫什么；目前没人敢上生产，可先把本体模型转成 Ossie 格式随表结构维护（先写"语义源码"，等工具链成熟再"编译"）

## 相关概念
- [[ontology]] — 本体论：Ossie 语义层的理论基础
- [[ai-agent]] — AI Agent 倒逼数据语义标准化
- [[rag-retrieval-augmented-generation]] — Agent 读取数据的相关检索体系
