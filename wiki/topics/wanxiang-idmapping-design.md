---
type: topic
tags: [IDMapping, 万象, Flink, Redis, 实时计算, 数据平台, 58同城]
created: 2026-09-05
updated: 2026-09-05
related_sources: 1
---

# 万象 ID 映射 — 实现方案与实现流程

> 业务背景与版本演进见 [[IDMapping — 58 用户 ID 关系映射体系]]；本文是其**代码级实现设计文档**，基于对两个仓库的代码走读整理（2026-09）。

## 概述

把营销人群**只有的设备 ID**，实时转成**手机号等目标 ID**，支撑自动化营销触达与实时圈选。生产侧（Flink 转换）与消费侧（圈选查询）**共享同一套 Redis / Wtable 键结构与三级查询协议**；映射数据由外部 idmapping 服务统一生产，本仓库只消费。

**关键数字**：主链路并行度 24 · 滚动处理窗口 5s · checkpoint 间隔 5min · pipeline 批查 batch=100。

**服务端补全**（第 10 章）：外部 idmapping 查询服务即 `norman-oneservice-idmapping`（SCF RPC，queryIDMapping 三模式 OFFLINE/REALTIME/ALL，已下线）；其下游消费方含 `norman-dataservice-inner` 人群包链路。全链路「采集 → 处理入库 → 服务 → 消费 → 回流修复」闭环见 §10.5。

**阅读路径**：
- 接手 / 排障：第 4 章（生产跑法）→ 第 6 章（为什么这样设计）→ 第 7 章（哪些别碰）
- 复刻新任务：第 1–6 章通读 + 第 8 章 checklist，重点是键结构和三级查询协议
- 只看圈选下游：第 3 章（核心概念）→ 第 5 章（消费侧实现）即可独立理解

## 1. 背景与问题

同一个用户在万象平台上散落着多种 ID：设备 ID（`imei` / `oaid` / `idfa` / 58 加密的 `wb_imei`）、手机号（`telep`）、统一用户 ID（`uid`）等。而不同的触达渠道和圈选规则，只认特定的一种 ID。ID 映射就是把"已有的 ID"翻译成"要用的 ID"。

### 两个典型场景

| 场景 | 转化 | 触发方 |
|------|------|--------|
| A · 自动化营销触达 | 营销引擎只拿到人群的设备 ID（如 `wb_imei`），但短信渠道只认手机号 → `wb_imei →(映射)→ telep`，转换后延迟触达 | **生产侧** Flink 任务（第 4 章） |
| B · 实时标签圈选 | 圈选规则按 `uid` 定义，但用户事件流只带设备 ID → 补全成统一设备号 / uid，并判定明细在冷库还是热库 | **消费侧** 圈选作业（第 5 章） |

### 为什么不自建映射库

映射关系体量大、对实时性要求高，且是跨系统共享的公共数据。因此映射数据**不由本仓库任何代码生产**，而是由外部 idmapping 服务 + 离线人群包链路统一写入 Redis / Wtable，本仓库两个模块只做查询与消费（见 §5.5）。

## 2. 系统全景

图例：Redis（红）· Wtable 58 KV（蓝）· Kafka（绿）· WMB 消息总线（紫）· SCF 元数据 RPC（灰）

```
接入层 · INGEST
┌───────────────────────────────┐  ┌───────────────────────────────┐
│ Kafka · 营销执行数据           │  │ Kafka · 实时用户标签流         │
│ hdp_teu_dpd_wxrd_auto_market  │  │ hdp_teu_dpd_real_online_user  │
│ _execute_data                 │  │ _tag                          │
└──────────────┬────────────────┘  └──────────────┬────────────────┘
               │ 消费                              │ 消费
计算层 · FLINK ▼                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│ 计算层 · 本仓库两个 Flink 作业（映射数据只读）                     │
│ ┌───────────────────────────┐  ┌───────────────────────────┐    │
│ │ IdMappingTransferV1       │  │ AutoMateMarkettingSend    │    │
│ │ 主链路 · 并行24 · 5s窗口   │  │ Message                   │    │
│ │ batch=100                 │  │ 第二跳 · 并行8 · 到期转发  │    │
│ │ → 延迟 WMB ×9 · 统计日志  │  │ → 服务端WMB 110811 短信/push │    │
│ └───────────────────────────┘  └───────────────────────────┘    │
│ ┌───────────────────────────┐                                   │
│ │ ExpressionSelectProcess   │                                   │
│ │ Function                  │                                   │
│ │ 消费侧 · 圈选+ID转化/补全 │                                   │
│ └───────────────────────────┘                                   │
└──────────┬──────────────────────────────────────────────────────┘
           │ 读 键A · 键B · Wtable · SCF
存储层     ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Redis 实时   │ │ Redis ID     │ │ Wtable ID    │ │ Wtable 离线  │
│ 画像         │ │ 关系库       │ │ 映射表       │ │ 标签表       │
│ realtime-    │ │ oneservice-  │ │ bid          │ │ bid          │
│ portrait ×10 │ │ idmap ×16    │ │ 139132930    │ │ 139132929    │
│ 键A · Hash   │ │ 键B · String │ │ rowKey/col1  │ │ 圈选明细兜底 │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
           ▲               ▲               ▲
           ┆ 写            ┆ 写            ┆ 写   （橙色虚线）
   ┌───────┴───────────────┴───────────────┴───────┐
   ┆ 外部 idmapping 服务（唯一写者）                ┆
   ┆ ✎ 离线人群包链路 · 按天写"昨-今"双日键        ┆
   └───────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│ SCF · 品牌元数据（设备 ID 类型 deviceType）                      │
│ MetaDataService.getBrandId(brandId) · Caffeine 5min 缓存        │
└─────────────────────────────────────────────────────────────────┘

输出层 · SINK
┌───────────────┐ ┌───────────────┐ ┌────────────────┐ ┌───────────────┐
│ 延迟 WMB ×9   │ │ 服务端 WMB    │ │ 统计日志 Kafka │ │ 圈选中间结果  │
│ tag MSG_DELAY │ │ 短信/push触达 │ │ idmapping_     │ │ kafka.        │
│ ← TransferV1  │ │ ← SendMessage │ │ service_wmb    │ │ expression.   │
│               │ │               │ │ ← 侧输出·两模块│ │ ← Expression  │
└───────────────┘ └───────────────┘ └────────────────┘ └───────────────┘
```

**图 F0** 系统全景。虚线"写"箭头 = 外部 idmapping 服务；实线"读"箭头 = 本仓库；各模块的输出落点标注在框内"→"行。两个模块消费的键结构完全一致。

| 模块 | 角色 | 核心类 | 入口 / 主 topic |
|------|------|--------|----------------|
| `wanxiang-automated-market-idmaping` | 生产侧 · 转换并写延迟触达 | `IdMapingTransProcessFnV1` / `AutoMarketingMapFunction` / `RedisKVServiceV2` | `IdMappingTransferV1` · hdp_teu_dpd_wxrd_auto_marketing_execute_data |
| `wanxiang-real-label-execute-select` | 消费侧 · 圈选时 ID 转化 / 补全 | `ExpressionSelectProcessFunction` / `IdMappingRedisKVServiceImpl` / `WtableKVIdMappingService` | `ExpressionSelectMain` · hdp_teu_dpd_real_online_user_tag |
| 外部 idmapping 服务 | 唯一写者 · 维护映射数据 | （不在本仓库） | oneservice-idmap / 离线人群包链路 |

## 3. 核心概念与数据模型

### 术语

| 术语 | 含义 |
|------|------|
| `idType` | 当前 ID 的类型（输入侧），如 `wb_imei` / `oaid` / `idfa` / `telep` / `uid` |
| `switchType` | 目标 ID 类型（输出侧），如把 `wb_imei → telep` 的 `telep` |
| `channelType` | 触达渠道：1 短信 / 2 58push / 3 安居客 push |
| `targets[]` | 一条消息的目标列表，每项含 `{idType, switchType, channelType}` |
| `brandId` | 品牌 ID，映射键的第一维度 |
| `deviceType` | 品牌元数据给出的"该品牌的设备 ID 类型"，决定走一次还是二次查询 |
| `traceId` | 链路追踪 ID，贯穿入站 → 转化 → 输出 → 触达 |
| `isHot` / `flag` | ID 关系里用户明细的位置：1 = 热（在 Redis），2 = 冷（在 Wtable） |

### 转换结果四分支（flag 常量）

| flag | 常量 | 含义 | 存储 |
|------|------|------|------|
| 1 | `ONESEARCHREIDS` | 一次查询 Redis：id 本身就是设备号，HMGET 直接出目标 ID | Redis · 键 A |
| 2 | `TWOSEARCHREIDS` | 二次查询 Redis：先 GET 换设备号，再 HMGET 出目标 ID | Redis · 键 A |
| 3 | `SEARCHWTABLE` | Redis 未命中，兜底查 Wtable 全量离线映射 | Wtable |
| 4 | `NOSEARCHEANYWHERE` | 无需转化：所有 switchType == idType，原值直发 | — |

### 输入模型 AutoMateMarketModel（生产侧入站 JSON）

| 字段 | 含义 |
|------|------|
| `imei` | 当前 ID 值（字段名叫 imei，实际类型由 `targets[].idType` 决定） |
| `targets[]` | `{idType, switchType, channelType}` 列表 |
| `brandId` | 品牌 ID |
| `planId` | 营销计划 ID |
| `traceId` | 链路追踪 ID |
| `latencyTime` | 延迟投递秒数，输出时映射为 `delaySeconds` |

### Redis 的两种键结构（全文最关键）

**键 A · 昨-今双日期 Hash**（设备 ID → 各目标 ID，实时画像集群）：

```
键：20221013-20221014-150-wb_imei-abc001
    └─昨日──┘ └─今日──┘ └brand┘ └idType┘ └ID值┘
      yyyyMMdd  yyyyMMdd

值 = Hash：map<idType, idValue>
  field telep → 138****1001   ← switchType 列（本次要取的，HMGET 只取需要的列）
  field imei  → abc001
  field uid   → 88888888

TTL 仅覆盖 昨天 + 今天 两天，按天由离线/实时链路写入
```

**键 B · 品牌 + 哈希桶 String**（ID 关系库，冷热路由用）：

```
键：10001_00012345678
    └brand┘ └─hash(idType_idValue)%3e8 补零 11 位─┘

值 = IdRelation protobuf：map<idValue 末 6 位, IDItem{uid, flag}>
  key 100001 → uid 888888 · flag 1 热
  key 999002 → uid 123456 · flag 2 冷

末 6 位匹配命中后才取 uid；flag 决定走 Redis 还是 Wtable 离线标签
```

**图 F3** Redis 两种键。键 A 用于"ID → 目标 ID"转化（生产侧 & 消费侧共用）；键 B 用于"ID → 统一设备号 + 冷热标记"（消费侧离线补全）。

**Wtable 键结构**（ID 映射表 bid 139132930 · tableId=1 · colKey="col1"）：

```
rowKey：150_wb_imei_abc001
        └brand┘ └idType┘ └ID值┘

值 = WtableStroe protobuf：map<string, string> kvIdTypeValue
  telep → 138****1001
  imei  → abc001
  uid   → 88888888

Redis 未命中时的全量离线兜底（另一张表 bid 139132929 是离线标签表）
```

**图 F4** 与 Redis 键 A 语义一致，只是介质不同、全量无 TTL。

## 4. 生产侧实现 · 自动化营销 ID 映射

### 4.1 入口与子命令

`App.java` 用 picocli 启动 `JobEntry`，注册了 3 个子命令；旧版逐条异步实现仍在代码里但**未注册**（死代码，见第 7 章）。

| 子命令 | 作用 | 并行度 | 状态 |
|--------|------|--------|------|
| `IdMappingTransferV1` | 主链路：Kafka → 5s 窗口批查 → 延迟 WMB | 24 | **生产主链路** |
| `AutoMateMarkettingSendMessage` | 第二跳：消费延迟 WMB，到期转发服务端 WMB 触发短信/push | 8 | **生产** |
| `ProduceDataToKafka` | 造数 / 压测工具 | 1 | 测试 |
| `IdMappingTransfer` | 旧版：AsyncDataStream 逐条异步版 | 36 | 未注册 · 死代码 |

### 4.2 主链路数据流

```
┌────────────┐   ┌────────────────┐   ┌─────────┐   ┌──────────┐   ┌───────────────┐   ┌───────┐
│ Kafka      │ → │ AutoMarketing  │ → │ keyBy   │ → │ 窗口     │ → │ IdMapingTrans │ → │ 延迟  │
│ Source     │   │ MapFunction    │   │ Select  │   │ Tumbling │   │ ProcessFnV1   │   │ WMB×9 │
│ 营销执行   │   │ 打rebalanceKey │   │ KeyFn   │   │ Process  │   │ batch=100     │   │       │
│ 1s watermk │   │ 并行 24        │   │ 按imei  │   │ TimeWin  │   │ pipeline批查  │   │       │
└────────────┘   └────────────────┘   └─────────┘   │ 5s       │   │ 三级查询flag1-4│   └───────┘
                                                    └──────────┘   └──────┬────────┘
                                                                          │ 侧输出
                                                       ┌──────────────────▼─────────────────────┐
                                                       │ StasticFlatMapFn → Kafka 统计日志      │
                                                       │ hdp_teu_dpd_automated_idmapping_       │
                                                       │ service_wmb                            │
                                                       └────────────────────────────────────────┘
```

**图 F5** 生产主链路算子链（对应 Flink Web UI 可直接核对）。关键设计：先按 `imei` 哈希 `keyBy`，在窗口内把同批数据攒成 `batch=100` 的 pipeline 批查，避免逐条 RPC。

### 4.3 转换核心 · 三级查询

这是整个系统的心脏。每条消息最终落在一个 flag 分支上，未命中的逐级降级：Redis → Redis → Wtable。

```
输入 AutoMateMarketModel（imei · targets[{idType,switchType}] · brandId）
  │
  ▼
所有 switchType == idType ？──是──→ 【flag 4 · 原值直发】 NOSEARCHEANYWHERE
  │否
  ▼
查品牌元数据 deviceType（SCF RPC · Caffeine 5min 缓存）
  │
  ▼
流中 idType == deviceType ？
  │                                              │
  │是 · 本身是设备号                              │否 · 非设备号
  ▼                                              ▼
Redis pipeline HMGET 键 A                    Redis pipeline GET 键 A
只取 switchType 列 · 未命中降级               非设备 id → 设备号
  │命中                                        │有设备号
  ▼                                            ▼
【flag 1 · ONESEARCHREIDS】              Redis pipeline HMGET 键 A
  │未命中                                用设备号再查目标 ID
  │                                        │命中            │未命中
  │                                        ▼                │
  │                                  【flag 2 · TWOSEARCHREIDS】
  ▼
Wtable mGet 兜底（键 rowKey）←──────── 同左（两条未命中支路都到此）
查不到 → 统计 tag 4 丢弃
  │
  ▼
【flag 3 · SEARCHWTABLE】
```

**图 F7** 三级查询决策树。逐级降级：设备号一次 Redis（flag 1）→ 非设备号二次 Redis（flag 2）→ Redis 未命中查 Wtable（flag 3）→ 都查不到记统计丢弃；无需转化直发（flag 4）。

| 级别 | 查什么存储 | 查的键 | 取什么 | 未命中降级 | 结果 flag |
|------|-----------|--------|--------|-----------|----------|
| 0 | SCF 品牌元数据 | `brandId` | deviceType | — | — |
| 1 | Redis · 实时画像 | `昨-今-brand-idType-id` | HMGET switchType 列 | → Wtable | 1 |
| 2 | Redis · 实时画像 | `昨-今-brand-idType-id` | GET 设备号 → 再 HMGET | → Wtable | 2 |
| 3 | Wtable · ID 映射表 | `brand_idType_id` | protobuf map<idType,idValue> | 统计 tag 4 丢弃 | 3 |

### 4.4 Redis 接入 · slot 分组 pipeline

JedisCluster 本身不支持 pipeline。实现用 `JedisClusterPlusV2` 替换 connectionHandler，通过 `JedisSlotAdvancedConnectionHandlerV2.getJedisPoolFromSlot(slot)` 按 **CRC16 slot** 拿到具体节点连接池，把同 slot 的 key 攒成一条原生 pipeline 批量发送——也就是把"异步逐条"换成了"同步批查"（伪异步）。

| | 旧版（未注册）· 逐条异步 | V1（生产）· 窗口批查 |
|---|---|---|
| 模型 | `AsyncDataStream.unorderedWait(100s, 10)`，每条数据一个 CompletableFuture 进线程池查 Redis | 5s 窗口内按 `batch=100` 攒批 |
| RPC | 1 条数据 = 1 次 RPC，QPS 高、乱序无窗口 | 按 slot 分组到节点，同 slot key 一条 pipeline（hmget / get）；批间 `Thread.sleep(intervalTime)` 限流 |

### 4.5 输出与统计

- **主路**：转换结果（含 `targetId` / `delaySeconds`）写入多个**延迟 WMB subject**（tag `MSG_DELAY`，9 个延迟档位）。
- **第二跳**：`AutoMateMarkettingSendMessage` 消费延迟 WMB，到 `delaySeconds` 到期后转发**服务端 WMB**（subject 110811），触发短信 / push。
- **侧输出**：每次查询成败（tag 0 异常 / 4 未成功 / 5 成功）写 `StatisticsModel` → `StasticFlatMapFn` → Kafka 日志 topic，供全链路延迟监控与映射修复回流。

### 4.6 配置与部署

| 项 | 值（prod） |
|----|-----------|
| 配置加载 | `Props` 单例 → props-{profile}.yml |
| Kafka | bh-kafka3-{1..5}.58dns.org:9092 |
| Redis | realtime-portrait-01~10.rdb.58dns.org（46382~46427） |
| WMB 注册中心 | esb.registryserver.58dns.org:21010 |
| Wtable | nameprod.wtable.58dns.org · bid 139132930 |
| checkpoint | 5min · 超时 2min · fixedDelayRestart(MAX, 30s) · file:///mfs_live/keop/flink/checkpoints |
| 命令行 | `--profile --parallelism --groupId --tableId --colKey --batch --intervalTime --windowTime --hashKey` |

## 5. 消费侧实现 · 圈选中的 ID 转化与补全

### 5.1 主链路

消费侧核心是 `ExpressionSelectProcessFunction`（Flink `ProcessWindowFunction`）：消费上游 data-accept 产出的用户标签流，`keyBy` 后进 1 分钟窗口做圈选；主输出圈选中间结果，侧输出把 ID 转化成败回流到统计日志 topic（供外部 idmapping 服务修复映射）。

### 5.2 open() 初始化 4 个客户端

| 客户端 | 连接 | 用途 |
|--------|------|------|
| `IdMappingRedisKVServiceImpl` | redis.id.relation.host · oneservice-idmap ×16 | 链路 A：ID → 统一设备号 + 冷热标记 |
| `IdMappingRealDateFromRedisService` | redis.idmapping.relation.host · realtime-portrait ×10 | 链路 B：实时 ID 转化（键 A） |
| `WtableKVService` | bid 139132929 | 离线标签表（圈选明细兜底） |
| `WtableKVIdMappingService` | bid 139132930 | 链路 B：Wtable ID 映射兜底 |

### 5.3 链路 A · 离线明细补全

当圈选命中但用户缺少某个离线数据源的明细时：`queryByMissOfflineDatasourceId → getUserAccDevId` 对缺失项构造 `IdRealtionBean`，调 `hmGetIdRelation` 批量 **GET 键 B**（String，值是 `IdRelation` protobuf）。按 `idValue 末 6 位` 匹配 map key 命中后取 `uid` 与 `flag`：**flag=1 热**走 Redis 离线标签，**flag=2 冷**走 Wtable 离线标签。

### 5.4 链路 B · 实时 ID 转化

圈选规则要求的 `crowdType` 与流中 `idType` 不一致时才需要转化：`getTransformDetail` 按**设备 / 非设备分流**，走与生产侧**完全相同**的三级查询（键 A HMGET / GET + Wtable 兜底），产出 `Map<userKey("idType#id"), Map<idType, idValue>>`，`select()` 用它替换 userId 后查圈选规则；查不到映射则跳过该规则。

```
┌────────────────────────┐   ┌───────┐   ┌──────────┐
│ Kafka · 实时用户标签流 │ → │ keyBy │ → │ 窗口     │
│ hdp_teu_dpd_real_      │   │ user  │   │ 1min滚动 │
│ online_user_tag        │   │ Key   │   └────┬─────┘
└────────────────────────┘   └───────┘        ▼
┌────────────────────────────────────────────────────────────────────┐
│ ExpressionSelectProcessFunction · 窗口内两条链路                    │
│                                                                    │
│ ┌─ 链路 A · 离线明细补全（缺失数据源时）──┐  ┌─ 链路 B · 实时 ID 转化 ─┐│
│ │ queryByMissOfflineDatasourceId        │  │ getTransformDetail      ││
│ │  · 找缺失离线数据源                   │  │  · crowdType ≠ 流idType ││
│ │           ▼                           │  │    才转化               ││
│ │ getUserAccDevId → hmGetIdRelation     │  │           ▼             ││
│ │  （100 条/批）                        │  │ 按设备/非设备分流       ││
│ │           ▼                           │  │ （同生产侧判deviceType）││
│ │ pipeline GET 键 B                     │  │           ▼             ││
│ │  IdRelation protobuf                  │  │ 三级查询（同生产侧F7）  ││
│ │  idValue 末 6 位匹配 → uid + flag     │  │ 键A HMGET/GET + Wtable ││
│ │     ▼                  ▼              │  │ 兜底                    ││
│ │ ┌─────────────┐ ┌─────────────┐       │  │           ▼             ││
│ │ │ isHot=1 热  │ │ isHot=2 冷  │       │  │ transformDetail →      ││
│ │ │ → Redis 离  │ │ → Wtable 标 │       │  │ select() 换 userId     ││
│ │ │   线标签    │ │   签表      │       │  │ 查圈选规则             ││
│ │ └─────────────┘ └─────────────┘       │  └─────────────────────────┘│
│ └───────────────────────────────────────┘                             │
└──────────────┬─────────────────────────────────┬─────────────────────┘
               ▼                                 ▼
     ┌────────────────────┐        ┌───────────────────────────────┐
     │ 圈选中间结果       │        │ 统计回流 · 供外部 idmapping    │
     │ kafka.expression.  │        │ 修复映射                       │
     │ topic              │        │ hdp_teu_dpd_automated_        │
     └────────────────────┘        │ idmapping_service_wmb         │
                                   └───────────────────────────────┘
```

**图 F9** 消费侧双链路。链路 A 查键 B 做"ID → 统一设备号 + 冷热路由"；链路 B 复用与生产侧完全相同的三级查询（图 F7）做实时 ID 转化；统计经侧输出回流给外部 idmapping 服务。

### 5.5 写读关系（关键约束）

> **⚠ 本仓库不生产映射数据，只消费**：全仓没有任何代码写这些映射存储（`IdRelation` / `WtableStroe` 均无写入方）。映射数据由**外部 idmapping 服务**与**离线人群包链路**按天写入；本模块把转化成败经侧输出回流给 idmapping 服务做映射修复。

> **⚠ 4 份 `IdMappingRedisKVServiceImpl` 副本，只有 1 份活着**：只有 `execute-select` 子模块里那份被 `ExpressionSelectProcessFunction` 实例化；`data-accept` / `select-result-update` / 根 `src` 里的副本都是死代码（改它们不生效，见第 7 章）。

## 6. 演进线与关键设计决策

### 6.1 逐条异步 → V1 窗口批查

| | 旧版 IdMappingTransfer（未注册） | V1 IdMappingTransferV1（生产） |
|---|---|---|
| 查询模型 | 逐条 `AsyncDataStream.unorderedWait(100s,10)` | 5s 窗口内 `batch=100` pipeline 批查 |
| Redis 命令 | hGetAll 整 Hash 拉取 | hmget 只取 switchType 列 |
| 统计 | 聚合计数仅 LOGGER.info | 逐条 StatisticsModel → 侧输出落 Kafka，可按 traceId 审计 |
| 吞吐 / RPC | 每条 1 次 RPC，QPS 高 | 批查摊薄 RPC，限流可控 |
| 代价 | — | 引入窗口延迟、批次内存占用 |

### 6.2 rebalanceKey 均匀路由（解决窗口倾斜）

直接按 `brandId` 之类 keyBy 会造成单 subtask 窗口数据倾斜。解决：`AutoMarketingMapFunction` 用 Flink `KeyGroupRangeAssignment` 为每个 subtask 预生成一个落在其 keyGroupRange 内的 key，把 `imei.hashCode() % parallelism` 映射到其中一个 `rebalanceKey`，保证窗口数据**均匀分布**到每个 subtask。

### 6.3 slot 分组 pipeline

JedisCluster 封装不暴露单节点原生 `Pipeline`。通过 `getJedisPoolFromSlot(slot)` 直接拿 slot 对应的 JedisPool，把同 slot 的 key 攒成一条 pipeline——**同一批次内对不同节点并行发、对同一节点合并发**，这是吞吐的关键。

## 7. 已知坑与代码地图

### 7.1 死代码地图

| 代码 | 位置 | 状态 |
|------|------|------|
| `IdMappingRedisKVServiceImpl` | data-accept / select-result-update / 根 src | 副本，无调用方 |
| `IdMappingTransfer`（旧版） | idmaping/jobs | 未注册子命令 |
| `IdMapingTransProcessFn`（非 V1） | idmaping/function | 中间试验版 |
| `CrowdKafkaInfoV2` | idmaping/model | 旧人群包模型残留 |
| `IdMappingRedisKVServiceImpl` | execute-select | **唯一活副本** |

### 7.2 易错点清单

- **键拼接细节**：键 A 是"昨-今"双日期前缀，写错一天就会查不到当天映射；键 B 是 `hash(idType_idValue)%3e8 补零 11 位`，不是明文 ID；命中靠 `idValue 末 6 位` 匹配。
- **flag 分支遗漏**：四分支都有独立降级路径，漏掉 Wtable 兜底会导致"转化失败但没统计"。
- **乱序**：旧版 unorderedWait 输出乱序，V1 靠窗口 + keyBy 保证同设备有序（`hashKey=imei`）。
- **窗口倾斜**：不用 rebalanceKey 路由，单个 subtask 会被头部 brandId 打爆。
- **WMB tag 用错**：延迟投递靠 `MSG_DELAY` 类 tag 区分 subject，tag 写错消息会立即投递（失去延迟）。
- **多副本陷阱**：改映射逻辑时改到死副本，线上不生效。

## 8. 复刻指南

1. **定消息模型** — 定义入站 JSON（含 `idType / switchType / targets / brandId / traceId`）。见 §3
2. **接品牌元数据** — 确认 deviceType 来源与缓存策略（SCF + Caffeine 5min）。见 §4.3
3. **设计键结构** — 先定"昨-今双日期"或"哈希桶"哪种语义，再定字段分隔。见 §3
4. **实现三级查询** — 一次 Redis → 二次 Redis → Wtable 兜底，四分支 flag 全铺开。见 §4.3
5. **封装 slot pipeline** — 按 CRC16 slot 分组批量查询，避免逐条 RPC。见 §4.4
6. **窗口批查** — 5s 窗口 + batch=100 攒批 + 批间限流。见 §4.2
7. **防倾斜** — 用 rebalanceKey 均匀路由到 subtask。见 §6.2
8. **接输出** — 延迟 WMB / 圈选结果 / 统计日志三路分开。见 §4.5
9. **统计回流** — 每步查询成败落统计，供监控与映射修复。见 §4.5
10. **写读分工** — 明确本任务只消费、谁写存储；别自己建第二份映射库。见 §5.5
11. **清死代码** — 同一份逻辑只保留一份活副本，其余删除或标记。见 §7.1
12. **压测** — 用造数工具验证 QPS 与降级路径（MySource 曾记录单轮 10572ms）。见 §4.1

### 最小可行架构 vs 本系统

| 能力 | 最小可行 | 本系统 |
|------|---------|--------|
| 查询 | 只做一次 Redis HMGET + Wtable 兜底 | 二次 Redis + 冷热路由 + 三级降级 |
| 批处理 | 逐条查 | 窗口 batch=100 pipeline |
| 路由 | 直接 keyBy | rebalanceKey 均匀路由 |
| 统计 | 打日志 | 侧输出落 Kafka 可审计回流 |
| 输出 | 直接写目标系统 | 延迟 WMB → 到期第二跳 |

## 9. 附录

### 常量与 topic 汇总

| 名称 | 值 | 说明 |
|------|-----|------|
| `ONESEARCHREIDS` | 1 | 一次查 Redis（设备号 → 目标 ID） |
| `TWOSEARCHREIDS` | 2 | 二次查 Redis（非设备 → 设备 → 目标 ID） |
| `SEARCHWTABLE` | 3 | 查 Wtable 兜底 |
| `NOSEARCHEANYWHERE` | 4 | 无需转化直发 |
| input topic | `hdp_teu_dpd_wxrd_auto_marketing_execute_data` | 生产侧入站 |
| log topic | `hdp_teu_dpd_automated_idmapping_service_wmb` | 统计回流 / 映射修复 |
| label topic | `hdp_teu_dpd_real_online_user_tag` | 消费侧入站（用户标签流） |
| WMB subject 服务端 | 110811 | 短信 / push 触达 |

### 集群清单

| 存储 | 节点 / 标识 | 用途 |
|------|-----------|------|
| Redis · 实时画像 | realtime-portrait-01~10 | 键 A：昨-今双日期 ID 映射 |
| Redis · ID 关系库 | oneservice-idmap121-01~16 | 键 B：ID → 统一设备号 + 冷热 |
| Wtable · ID 映射表 | bid 139132930 | 三级查询兜底 |
| Wtable · 离线标签表 | bid 139132929 | 圈选离线明细 |
| SCF | wanXiangService | 品牌元数据（deviceType） |

---

本文档基于代码走读整理，覆盖 `wanxiang-data-jobs/wanxiang-real-data/wanxiang-automated-market-idmaping`、`wanxiang-data-jobs/wanxiang-real-label/wanxiang-real-label-execute-select` 与 `norman-oneservice-idmapping`。键结构示例：键 A `20221013-20221014-150-wb_imei-abc001`；键 B `10001_00012345678`；Wtable rowKey `150_wb_imei_abc001`。原始 HTML 可视化版归档于仓库根 `raw/` 目录（viewer 不可渲染，仅存档）。

## 10. 服务端与链路闭环（norman-oneservice-idmapping）

> 2026-09-07 补全：读通外部 idmapping 查询服务仓库 `norman-oneservice-idmapping`（norman-oneservice 微服务框架：Guice 注入 + StorageServiceCenter 统一存储 + SCF RPC），并顺藤定位下游消费方 `norman-dataservice-inner` 人群包链路。git 末端 commit「下线wtable、redis、hbase资源」——该服务已下线。

### 10.1 服务接口层（SCF RPC）

```
contract 包：IOneServiceIDMap（@ServiceContract, tcp://OneServiceIDMap/OneServiceIDMap）
  ├─ getIDMapIds(IDMapRequest)          @Deprecated → facade 直接返回空（死代码）
  ├─ getRelationIds(request)            @Deprecated → facade 直接返回空
  ├─ getSecretKey(request)              活接口 · 下发人群包 AES 密钥
  └─ queryIDMapping(IDMappingRequest)   ★ 唯一核心活接口
```

- **异步回包模式**：所有接口 `@OperationAsyn` + `AsynBack.send(SCFContext.getThreadLocalID(), response)`，配合 Guava Stopwatch 手工埋点耗时。
- **校验链**：Guice 注入 `Verification` → `AbstratVerificationHandler` 责任链。
- **请求模型**：`{originIdType, originIdValue, targetIdType, brandId, idMappingType}`——单 ID 进、单 ID 出，与 Flink 批量消费是两种客户端形态。

### 10.2 映射方法（与消费侧双向实锤）

`IDMapServiceImpl.queryIDMapping` 按 `IDMappingType` 三分支，键结构与 dataengine 消费端**逐字节一致**，两个独立仓库互为印证，协议实锤：

```
IDMappingType = OFFLINE(1) / REALTIME(2) / ALL(0)

OFFLINE：Wtable mgetpb({brandId}_{idType}_{id} · tableId=1 · colKey=col1)
         → WtableStroe protobuf map<idType,idValue> → 取 targetIdType 列

REALTIME（只支持品牌 150/151）：
  键 A = {昨yyyyMMdd}-{今yyyyMMdd}-{brandId}-{idType}-{id}
  ├─ origin 是设备号（150→wb_imei / 151→ajk_imei）
  │    → exist(key) + hget(key, targetIdType)          【flag 1 等价】
  ├─ target 是设备号
  │    → exist + getStr(key)                            【直取】
  └─ 否则两跳：getStr 换设备号 → 再拼键 hget            【flag 2 等价】

ALL：先离线，未命中再实时
```

**方向差异**：dataengine 三级查询是 Redis 优先、Wtable 兜底（新鲜数据优先）；服务端 `ALL` 是**离线优先、实时补**——单点任意查询场景下离线全量命中率更高。

### 10.3 OneID 的设计意图

- **`StrategyEnum` 三策略**：`MRU 最近登录` / `MFU 常用关系` / `ONEID 闭合关系`——OneID 归一在接口层的语义设计。`queryRelationIdDTOs4OneId` 注释显示一期设计为"闭合关系查离线 Wtable，key = idType+idValue，value = List<RelationIdDTO>"，**但实现全部被注释，方法返回空列表**——OneID 闭合关系最终没走这个服务。
- **`IDType` 29 种枚举**是归一的全集：ffaid（58统一ID）、wimei/wb_imei/ajk_imei、telep、wuser/wb_uid/ajk_uid、idfa、wbdid（Cookie）、idmdid（中台统一设备）、openid/unionid（微信生态，最后两个功能 commit 加入）等。ffaid/idmdid 是真正的"统一 ID"候选，但在此服务里只是普通可查类型。

### 10.4 优化方案对比

| 维度 | norman-oneservice-idmapping（服务端） | dataengine Flink（消费端） |
|------|------|------|
| 查询方式 | **逐条** `exist` + `hget/getStr`，非设备号两跳 = 最多 4 次 RTT | batch=100 攒批 + slot 分组 pipeline，一轮 RPC |
| 优化重心 | 校验链 + 异步回包 + metric 埋点 | 批查、限流、防倾斜 |

服务端本身**没有做任何查询聚合优化**——单点查询场景靠 exist 短路；真正的查询优化全部在 Flink 消费端。其他工程细节：

- **手机号全程密文**：AES/ECB/PKCS5Padding，密钥硬编码于 `AESEncryptUtil`；入参是 telep 先加密再查（库内统一存密文），`getSecretKey` 下发同一密钥给人群包调用方。
- **Kafka 采集化石**：配置里有 8 个 producer（`hdp_lbg_ectech_norman_oneservice_id_type_{imei,wimei,idfa,wuser,telep,ffaid,muid,wuid}`），代码零使用——早期设计是本服务把各 idType 数据发 Kafka 供下游计算映射，后采集职责移走只剩查询。
- **存储演进**：`RowKeyUtil`（md5 前 10 位 + `_` + idType+id 的 HBase rowKey）+ `IDTypeColumnNameMap`（f:1~f:9 列族）→ 现役 Wtable，**HBase → Wtable 迁移实锤**。

### 10.5 完整链路闭环（证据等级标注）

```
┌─ 采集 ────────────────────────────────────────────┐
│ 埋点/业务日志 → Kafka (hdp_lbg_ectech_norman_      │ ⚠ 化石证据（配置残留，
│ oneservice_id_type_*）                            │   写端任务不在本地仓库)
└──────────────┬────────────────────────────────────┘
               ▼
┌─ 处理 + 入库（外部，反推）──────────────────────────┐
│ 离线链路：按天写键A(昨-今双日期/TTL 2天)·写Wtable   │ ◐ 结构反推（键协议两侧实锤，
│         ·写键B(哈希桶+冷热flag)                     │   计算任务代码未见）
│ 实时链路：事件流实时补写                            │
└──────────────┬────────────────────────────────────┘
               ▼
┌─ 服务层（代码证实）─────────────────────────────────┐
│ norman-oneservice-idmapping · SCF RPC              │
│ queryIDMapping：OFFLINE(Wtable) / REALTIME(键A)    │
│               / ALL(离线→实时)                     │
│ getSecretKey：AES 密钥下发                         │
│ （getRelationIds 的 MRU/MFU/ONEID 三策略已废弃）   │
└──────────────┬────────────────────────────────────┘
               ▼
┌─ 第三方消费（代码证实）─────────────────────────────┐
│ norman-dataservice-inner 人群包链路：              │
│   CrowdPackageProcess / ByClickHouseProcess        │
│   → 调 queryIDMapping 做 ID 转化 → 人群包          │
│ dataengine 两个 Flink 作业（直连存储消费端，       │
│   不走 RPC，自己实现三级查询）                     │
└──────────────┬────────────────────────────────────┘
               ▼
┌─ 回流修复 ─────────────────────────────────────────┐
│ 消费侧统计 → Kafka 统计 topic → idmapping 服务     │
│ 修复映射 → 回到"处理+入库"层                       │
└───────────────────────────────────────────────────┘
```

闭环上唯一没有代码的是**写端计算任务**（真正计算映射关系的 Spark/Hive/实时任务），但其输出结构（三种键）已被两个独立仓库的读端逐字节验证。

## 相关概念

- [[IDMapping — 58 用户 ID 关系映射体系]] — 本文的业务背景与版本演进页
- [[用户-标签 Bitmap 构建：工程实现详解]] — 消费侧圈选结果进入位图构建的下游链路
- [[用户画像系列：从标签体系到 AI 检索]] — ID-Mapping/OneID 是画像链路的第一环
