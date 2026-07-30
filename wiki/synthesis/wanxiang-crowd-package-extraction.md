---
type: synthesis
tags: [万象, 人群包, 冰山项目, Clickhouse, RoaringBitmap, 数据引擎]
created: 2026-07-30
updated: 2026-07-30
---

# 万象人群包提取方案

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# 万象人群包提取方案 — 冰山项目核心模块

## 概述

人群包提取是万象平台（冰山项目）的核心模块，数据引擎组负责在 Clickhouse + Spark Thrift Server + Redis 三层架构上实现标签圈选、人群包导出、人群包限制/分包等能力。整个提取链路从传统 ES 引擎演进至 CK 原生位图架构。

## 技术演进

| 阶段 | 引擎 | 小包吞吐量 | 大包吞吐量 | 说明 |
|------|------|-----------|-----------|------|
| 旧引擎 | ES + Parquet | ≈8000个/h（5w-） | — | ES可达到8000/h，Parquet不稳定 |
| 冰山一期 | CK + Spark UDTF | 14400个/h（5s内） | 10w包 16s/10个（≈4.5w/h） | CK覆盖查询1s返回，位图存储避免宽表 |
| 二期 | + 页面功能升级 | — | — | 标签市场、标签码表 |
| 三期 | 待解决事项 | — | — | 组件失败阻塞、反压、报警 |

## 整体架构

```
业务层 ──── DSL协议 ──── 执行计划生成 ──── 包大小判断
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
5w- 小包        5w+ 大包      人群限制/分包
Redis反解      Spark UDTF     RoaringBitmap limit
               HDFS位图导出
```

### 四层模型

| 层级 | 说明 | 技术栈 |
|------|------|--------|
| 数据层 | 画像标签、转换关系、人群包 | HDFS / HBase |
| 计算层 | 用户编码生成、标签/人群包位图构造 | Spark + Redis Lua |
| 存储层 | 人群包 bitmap(UINT32)、标签 bitmap(UINT32)、KV标签 bitmap(UINT64) | Clickhouse / Redis |
| 逻辑层 | DSL解析 → CK查询语句 → 编码反解 | Spark Thrift Server + Redis |
| 服务层 | 小包(5w-)秒级、大包(5w+)多秒级 | HTTP API |

## 用户编码

### 编码策略
- 全品牌用户在 **UINT32 (0~2³²-1)** 范围内顺序编码
- 按高 16 位划分为 **16384 个分桶（bucket）**，桶内顺序递增
- 采用 **Redis Lua 脚本 + 集群 Slot 特性**保证分布式原子性

### Redis 编码表结构
```
RowKey = {品牌ID}_hash(idtype_编码code) % 300000000
SubKey = idtype_编码code
存储结构 = hash（支持多数据源并发写）
```

### 用户唯一编码使用年限（2023-10 数据）
| 品牌 | 每天新增 | 最大桶占比 | 预估年限 |
|------|---------|-----------|---------|
| 150 | 657,534 | 0.59 | 约7年 |
| 151 | 128,924 | 0.57 | 约8年 |

结论：当前编码新增速率下，暂不用考虑分桶占满。

## 存储层：Clickhouse RoaringBitmap

### 基础标签存储
**字符串类型：** 字段包括 tag_value(string)、userids(string 位图base64加密)、user_code(bitmap 物化列)、tag_name(string)、dt(日期分区)。
**数值类型：** 同上，tag_value 为 bigint。

### KV 嵌套标签：UINT64 高维映射
- **背景**：JSON nested 查询（first=John AND last=Smith）若做暴力倒排会维度爆炸
- **方案**：参考 ES nested 存储，用 UINT64 高维空间
  - A 位（高11位）：保留位
  - B 位（5位）：编码左移位数 = log2(length(kvTags))
  - C 位（32位）：用户唯一编码（先 + Int.MAX_VALUE）
  - D 位（最多16位）：子序列编码
- **优势**：相邻用户的高维编码落入同一个 RoaringBitmap 桶，可用 runContainer 压缩

### Croaringbitmap 生成流程
1. Spark 聚合生成 RoaringBitmap
2. 自定义序列化/反序列化逻辑
3. 生成 base64 加密串
4. Clickhouse 物化视图列反解析
5. 实测：数据录入从 3h 降至 40min

## 圈选 DSL 协议

### 集合运算
and（交集，多条件）、or（并集，多条件）、sub（差集，有序第一个被减数）、not（补集，仅一个条件）

### 标签类型支持
普通枚举标签、普通数值标签、KV 枚举子标签、KV 数值子标签

### 圈选请求协议示例
```json
{
  "brandId": 150,
  "crowdPackageId": "1646663",
  "crowdPackageCountLimit": 2000000,
  "limitType": 1,
  "tagMsg": {
    "and": [{
      "tagNested": [{ "subTagName": "vest_city_name", "subTagValue": ["北京","上海"] }],
      "kvTagObtainAgg": { "aggSubOp": "be", "subTagName": "buyer_fee" },
      "tagType": "5", "tagName": "yxp_publish_order_detail"
    }]
  }
}
```

## 执行计划与大小包分流

### 执行计划生成
根据查询请求、元数据和规则覆盖人数动态决定：
- **小包路径（<5w 人）**：CK 圈选 → 直接获取用户编码 → Redis 编码反解（5s 内，1h ≈ 14,400 个包）
- **大包路径（≥5w 人）**：CK 导出位图到 HDFS → Spark SQL + UDTF 批量反解

### 大包反解数据格式
按 RoaringBitmap 高位桶存储：每行 `bucket | bucketbitmap(base64) | idlist(最多65536个)`

### 大包性能（task=32）
| 包量级 | 10个包耗时 | 1h吞吐 |
|--------|-----------|--------|
| 10w | 16s | ≈4.5w |
| 200w | 36s | ≈2w |
| 1000w | 50s | ≈1.08w |

## 人群包限制（万象 4.7）

### 背景
- 圈选的大包无法按需限制量级；商业圈选固定 200w 用户
- 旧方案：本地下载 → split → 取第一个文件（性能差、浪费存储）

### 三种位图限制策略
| 策略 | 描述 | 实现 |
|------|------|------|
| 顺序（1） | ≈最早注册 | 分桶 0→16383 顺序取 |
| 倒序（2） | ≈最新注册 | 步长4多轮遍历 |
| 随机（3） | 按顺序取 | 随机生成分桶号提取 |

### UDTF 扩展
新增参数 `MapLimit`：key=人群包ID, value=${count}_${limitWay}，兼容新老协议。取消本地split，直接 HDFS → WOS。

## 人群包分包（万象 3.9.5）
- **均分**：等量划分
- **自定义比例**：按权重切分
- UDTF + Kettle 脚本组装 SQL
- 开发排期：协议解析1d + 分包逻辑2d + SQL 1d + Kettle 1d + 联调2d

## 待解决问题（冰山三期）

### 性能问题
- 实时程序反压；人群包最后批次未正常提交（临时用定时小人群包推动）

### 可用性问题
- **CK连接失败**：缺少重试机制
- **视图切换报错**：人群包提取时底层视图切换失败（理论上原子操作，需排查元数据一致性）
- **位图导出DSL优化**：减少导出后回写再查询的往返

### 数据折损
- 上传人群包：原始 ID 匹配率仅约 30%（100w → 30w 左右）
- 品牌隔离加剧折损（58app 1.7亿 vs 商业 2.8亿）

### 资源回收
冰山一期后冗余多套存储（ES、Redis、HBase、CK、Parquet、HDFS），待群体洞察上线后统一回收。

## 升级阶段

| 阶段 | 内容 |
|------|------|
| 一·数据准备 | 品牌关系 + 数据接入 |
| 二·应用模块 | DSL解析 + 人群包提取 + 上传 + 标签接口 |
| 三·引擎统一 | 下掉ES（召回以外）、统一CK |
| 四·标签接入升级 | 品牌接入上线 |
| 五·下线 | 清理Parquet、ES、旧CK、旧HBase |
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
