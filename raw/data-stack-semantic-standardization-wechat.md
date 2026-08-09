# 从 Arrow 到 Iceberg 到 Polaris 到 Ossie：语义标准化的最后一块拼图

> 来源：微信公众号「本体与AI」
> 链接：https://mp.weixin.qq.com/s/4EpQTgZdD2wqg-5s-wtIog
> 日期：2026-08

## 核心论点

2018 年"企业大数据平台"架构图（Hadoop + ETL 箭头 + Tableau，格式五花八门，点对点 connector 硬接）的每一层，七年内被 Apache 开源标准一块一块吃掉：

| 层 | 标准 | 年份 | 解决的问题 |
|----|------|------|-----------|
| 文件格式层 | Parquet | 2013 | 数据存成什么？怎么读？（最稳固） |
| 内存交换层 | Arrow | 2016 | 数据怎么传？格式是啥？（成熟） |
| 表格式层 | Iceberg | 2020 | 表怎么管？怎么改？（快速增长） |
| 目录 & 治理层 | Polaris | 2025 | 数据在哪？谁能看？（刚毕业） |
| 语义层 | Ossie | 2026 | 你的数据什么意思？（刚进场 🔥） |

十年，五层，一个逻辑：**每层一旦稳定，行业就把下一层也交出去做成开放标准**。上层是应用层（BI / Agent / 业务系统）。

## 第一块：Arrow（2016，内存格式）

- 痛点：Spark 读 Pandas DataFrame 要序列化成 JSON 再反序列化，几百 GB 数据 70% 时间花在格式翻译
- Wes McKinney（Pandas 作者）牵头：跨语言、跨进程的列式内存标准布局，同一指针直接传，不需要序列化
- 衍生：Flight（传输）、ADBC（数据库驱动）、DataFusion（查询引擎）
- 现状：Polars、DuckDB、InfluxDB 3.0 底层都用 Arrow；Parquet 读出是 Arrow、传 GPU 是 Arrow、shuffle 也是 Arrow

## 第二块：Iceberg（2020，表格式）

- 痛点：数仓一张"订单表"底层是 S3 上十万个 Parquet 文件，加列/删行/回滚 = 操作一堆文件
- Netflix 2017 年开始搞：在 Parquet 上抽象出 schema（字段定义）、partition（分区）、snapshot（版本快照）
- 2025 Spec v3：二进制删除向量（删行不重写整个文件）、行级血缘、Variant 类型（JSON 半结构化）
- 一句话："表是一个逻辑概念，不是一堆文件的别名"

## 第三块：Polaris（2025，目录层）

- 痛点：Iceberg 表在 Snowflake/Databricks/Dremio 各一套，同一张表三份，权限三套系统各配一遍
- 先有 Iceberg REST Catalog 协议（不统一平台，只统一查询目录的接口标准）
- Snowflake 2024 开源 Polaris，与 Databricks 联手推 Apache 孵化；2026 年 7 月毕业为顶级项目
- 关键：**不是技术多牛，是 Snowflake 和 Databricks 这对冤家同时认了它**（两个最主要的 Iceberg 生产用户）

## 第四块：Ossie（2026，语义层）——今天的重点

- 场景：BI 读到 `sales.orders` 的 `o_sts_cd=3`，Polaris 告诉你表在哪、谁能读、快照号几——全对；但 Agent 不知道 `o_sts_cd=3` 就是"已完成"，更不知道"已完成"= 已发货 + 已签收 + 已入账
- Ossie：给所有数据表加一份"翻译说明书"——YAML 把字段映射到业务概念、定义指标算法、标注同义词
- 分工：Polaris 说"表在 S3 bucket-xyz，最新快照 snapshot-456"；Ossie 说"o_sts_cd=3 叫'已完成'，等价词 'OrderComplete'/'订单完成'/'状态3'"

## 为什么顺序不是偶然的

五层不是规划出来的，是行业一层一层"交"出来的：① 先用起来（各家各搞一套）→ ② 痛够了（对接成本 > 搬数据成本）→ ③ 有人牵头（大公司开源内部方案）→ ④ **竞品认了**（最难的坎）→ ⑤ 进 Apache。

重点在 ④：开放标准最难的从来不是技术，是让竞争对手坐下来一起签字。Ossie 现在也在过这道坎——50+ 家公司签了字。

上层依赖下层：没有 Parquet 统一文件格式，Iceberg 抽象复杂度爆炸；没有 Iceberg，Polaris 目录没有统一口径；没有 Polaris，Ossie 语义模型不知道该挂在哪。**每一层的开放标准，都让下一层的问题变得清晰可见。每层都是上一层的"编译目标"。**

## Ossie 为什么意义特殊

前四层是"数据基础设施"，对齐的是**机器跟机器怎么说话**；Ossie 解决的是**人跟机器之间怎么对齐含义**。同一"收入"在财务/销售/运营各有定义，让 50 家公司签"什么是收入"比签"文件怎么存"难十倍。

2026 年能成的原因：
1. **AI Agent 倒逼**：BI 出错人还能纠，Agent 直接根据查询结果做决策，口径错了没人复核——"含义"变成必须标准化的问题
2. **生态成熟**：Parquet/Iceberg/Polaris 三层都稳了，行业可以抬头看下一层

## 对数据架构师意味着什么

- Parquet + Iceberg 是**地基**（2026 起点线，无争议）
- Polaris 是**围墙**（决定谁能进、看到什么；已有 Snowflake Horizon / Databricks Unity Catalog 可不换，但权限模型往 Iceberg REST 协议靠）
- Ossie 是**门牌号**（决定每个房间放什么、叫什么；目前没人敢上生产，作者已把本体模型转成 Ossie 格式随表结构维护，等于先写"语义源码"，等工具链成熟"编译一下就能用"）

下一篇预告：「"本体"这个词，被大数据圈重新发明了一遍」
