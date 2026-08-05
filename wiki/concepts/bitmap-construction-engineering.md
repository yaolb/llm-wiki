---
type: concept
tags: [Bitmap, bitmap, RoaringBitmap, Spark, Hive, ClickHouse, 万象, 标签, 标签生成, 工程实现]
created: 2026-08-03
updated: 2026-08-03
related_sources: 5
source_repos:
  - igit.58corp.com/teu_dm/wanxiang-data-jobs.git
  - igit.58corp.com/teu_dm/data-app-dp-utils.git
  - igit.58corp.com/teu_dm/data_engine_script.git
---

# 用户-标签 Bitmap 构建：工程实现详解

## 概述

本文档基于万象（Wanxiang）实际代码（`wanxiang-data-jobs` 等仓库），以工程可落地粒度详细描述标签数据从原始格式到 ClickHouse Bitmap 的完整构建流程，涵盖数据结构、算法细节、Spark/Hive UDF 实现和并发控制。

---

## 一、整体架构

```
                    ┌─ 基础字符串 (uint32) ──┐
原始标签数据         ──┤ 基础数值 (uint32)     ├──→ RoaringBitmap ──→ Base64 ──→ CK
(userId + JSON tags)  │ KV字符串 (uint64)     │
                    └─ KV数值 (uint64)     ──┘
                    
                    ┌─ 关系数据 ──→ user_code/bitmap ──→ Hive ──→ Redis(反向查询)
```

**核心模块（`wanxiang-data-jobs` 仓库）**：

| 模块 | 路径 | 功能 |
|------|------|------|
| `wanxiang-label-data-etl-multi-components` | `SmartTagKvFormat.java` | 标签值格式化 |
| `wanxiang-label-data-etl-multi-components` | `UserCodeToRoaringBitmap.java` | 用户编码→位图 |
| `wanxiang-label-data-etl-multi-components` | `RoaringBitmapToClickhouse.java` | 位图→Base64→CK |
| `wanxiang-relation-user-code-bitmap` | `CombineBitmapSpark.java` | Bucket 位图构建 |
| `wanxiang-ice-mountain-data-etl` | `CkBitmapMergeMain.java` | 预估位图合并 |
| `wanxiang-data-common` | `RoaringBitMapByteUDAF.java` | Spark 位图 UDAF |
| `wanxiang-data-common` | `BucketRBMUserIds.java` | Bucket 位图 UDTF |
| `wanxiang-data-common` | `RoaringBitMapBase64UDF.java` | 位图序列化 UDF |

---

## 二、阶段一：标签值格式化（`SmartTagKvFormat`）

### 2.1 输入数据格式

```
原始数据: userId\t{"tag1": value1, "tag2": [v1, v2], "tag3": [{"tag_value": "A", "tag_weight": 0.8}]}
```

### 2.2 标签类型枚举

| valueType | 含义 | 示例 |
|-----------|------|------|
| 1 | 字符串（枚举） | `"gender": "男"` |
| 2 | Long 数值 | `"age": 25` |
| 3 | Double 数值 | `"score": 0.85` |
| 4 | 属性标签（带权重） | `[{"tag_value":"A","tag_weight":0.8}]` |
| 5 | KV 多值标签 | `[{"cate":"1","latest":"30"}]` |

### 2.3 格式化逻辑

```java
// SmartTagKvFormat.java — 核心处理逻辑

// 1. 拉取上线标签元数据
List<WXTagSource> tagMetadatas = WXSCFUtil.getTagMetaDatasByProjectShortName(project);

// 2. 按标签类型分流处理
for (String tagKey : tagKeySet) {
    if (isKvTag) {
        // KV标签: 校验每个KV属性的数据类型，数值类解析失败→"-999"
        tagArray = kvTagFormatProcess(kvTags, kvTagTypes);
    } else {
        // 非KV标签: JSONArray→逐个提取; 单值→直接提取
        // 属性标签: 提取 tag_value + tag_weight
        tagArray = nonKvTagFormatProcess(tagValue, tagDataType, isAttrTag);
    }
}

// 3. 输出格式
// userId\t{"tag1":["v1"],"tag2":[{"tag_value":"A","tag_weight":"0.8"}]}
```

**关键细节**：数值类型标签解析失败时替换为 `-999`（而非 `-1`），用于区分"真正为-1"和"解析失败"。

---

## 三、阶段二：用户编码→RoaringBitmap（`UserCodeToRoaringBitmap` + `RoaringBitMapByteUDAF`）

### 3.1 整体 SQL 流程

```sql
-- Step 1: 分桶 + 用户编码范围过滤
SELECT tag_name, tag_value, user_code, floor(user_code / 65536) AS bucket
FROM {inTable}
WHERE dt = '{date}'
  AND user_code >= {range_start}
  AND user_code < {range_end}

-- Step 2: 按 (tag_name, tag_value, bucket) 聚合用户编码
SELECT tag_name, tag_value, bucket, collect_list(user_code) AS user_list
FROM (step1)
GROUP BY tag_name, tag_value, bucket

-- Step 3: Spark UDAF 构建 RoaringBitmap
SELECT tag_name, tag_value, rbm_merge(user_list) AS user_code
FROM (step2)
GROUP BY tag_name, tag_value
```

### 3.2 分片策略

```java
// UserCodeToRoaringBitmap.java
// 将 user_code 空间分为 4 个 shard 并行处理
private static final List<String> USER_CODE_INTERVAL = Arrays.asList(
    "0,62378484",          // shard-0: [0, ~62M)
    "62378484,124756968",  // shard-1: [~62M, ~124M)
    "124756968,187135452", // shard-2: [~124M, ~187M)
    "187135452"            // shard-3: [~187M, +∞)
);
```

每个 shard 独立运行一个 Spark SQL，4 线程并行，结果写入 Hive 分区表 `{outTable}/dt={date}/id={shard_index}`。

### 3.3 核心 UDAF：`RoaringBitMapByteUDAF`

这是整个系统的核心——将 `List<Long>` 转为 RoaringBitmap 字节数组。

```java
// RoaringBitMapByteUDAF.java
// 关键: bitmapType 决定 uint32 还是 uint64

public RoaringBitMapByteUDAF(DataType dataType) {
    bitmapType = dataType;
    // DataTypes.IntegerType → RoaringBitmap (uint32)
    // DataTypes.LongType    → Roaring64NavigableMap (uint64)
}

// update(): 处理每个 bucket 的 user_code 列表
public void update(MutableAggregationBuffer buffer, Row input) {
    List inputList = input.getList(0);
    
    if (bitmapType.sameType(DataTypes.IntegerType)) {
        // uint32: 基础标签 (string/numeric)
        RoaringBitmap rbm = new RoaringBitmap();
        if (buffer.isNullAt(0)) {
            // 首次写入: 逐个 add
            for (int i = 0; i < inputList.size(); i++) {
                rbm.add(Integer.parseInt(String.valueOf(inputList.get(i))));
            }
        } else {
            // 追加写入: deserialize → add → serialize
            rbm.deserialize(new DataInputStream(new ByteArrayInputStream(bufferBytes)));
            for (int i = 0; i < inputList.size(); i++) {
                rbm.add(Integer.parseInt(String.valueOf(inputList.get(i))));
            }
        }
        rbm.serialize(ndos);
    } else {
        // uint64: KV/nested 标签
        Roaring64NavigableMap rbm64 = new Roaring64NavigableMap();
        // ... 同上逻辑，用 Long 操作
        rbm64.serialize(ndos);
    }
}

// merge(): 跨节点合并两个 partial bitmap
public void merge(MutableAggregationBuffer buffer1, Row buffer2) {
    if (bitmapType.sameType(DataTypes.IntegerType)) {
        RoaringBitmap outRBM = deserialize(buffer1Bytes);
        RoaringBitmap inRBM = deserialize(buffer2Bytes);
        RoaringBitmap rbm = RoaringBitmap.or(outRBM, inRBM); // OR 合并
        rbm.serialize(ndos);
    }
}
```

**为什么分 bucket？** `bucket = floor(user_code / 65536)` 利用了 RoaringBitmap 的内部结构——一个 Container 管理 65536 个 bit。分 bucket 后，同一个 bucket 内的 user_code 落入同一个 Container，按 high 16 bits 分组，low 16 bits 为 container 内偏移——这是 RoaringBitmap 最自然的组织方式。

### 3.4 Bitmap 内部结构

```
RoaringBitmap 内部:
┌─────────────────────────────────────────────┐
│ Container[0]   (high_bits=0)                │
│   → user_codes: 0 ~ 65535                  │
│   → 类型: ArrayContainer (< 4096 个元素)   │
│       或 BitmapContainer (≥ 4096 个元素)   │
├─────────────────────────────────────────────┤
│ Container[952] (high_bits=952)              │
│   → user_codes: 62390272 ~ 62455807        │
│   → 对应 bucket=952 (62390272/65536=952)   │
└─────────────────────────────────────────────┘

user_code 映射:
  high_bits = (int)(user_code >>> 16)   // 前16位 → Container 索引
  low_bits  = (char) user_code          // 后16位 → Container 内 bit 位

user_code = 1000001:
  high = 1000001 >>> 16 = 15           → Container[15]
  low  = 1000001 & 0xFFFF = 16929     → bit 16929 = 1
```

### 3.5 uint64 编码方案（`Roaring64NavigableMap`）

KV 嵌套标签使用 `Roaring64NavigableMap`，支持 64 位 bit 位置：

```
uint64 bit_position 编码（推断）:
  高32位 = hash(tag_sub_key)   或直接用的 user_code
  低32位 = hash(tag_sub_value) 或附加属性编码

Roaring64NavigableMap 内部:
  每个 32-bit 高位索引一个 RoaringBitmap (管理低 32 位)
  等同于嵌套的 RoaringBitmap 结构
```

---

## 四、阶段三：Bitmap→Base64→CK（`RoaringBitmapToClickhouse`）

### 4.1 整体流程

```sql
-- 读取 Hive 位图表，应用 Base64 编码 UDF，写入 CK
SELECT tag_name, tag_value, to_rbm(user_code) AS user, dt
FROM {inTable}
WHERE dt = '{date}' AND id = '{shard_range}'
DISTRIBUTE BY tag_name SORT BY tag_name, tag_value
```

### 4.2 Base64 编码 UDF（`RoaringBitMapBase64UDF`）

```java
// RoaringBitMapBase64UDF.java
private ByteBuffer rbmToBase64Encoder(byte[] bytes) {
    RoaringBitmap rbm = deserialize(bytes);
    int cardinality = rbm.getCardinality();

    if (cardinality <= 32) {
        // 小位图：紧凑格式
        // [0x00][cardinality(1B)][int32_0][int32_1]...[int32_N]
        ByteBuffer buf = ByteBuffer.allocate(2 + 4 * cardinality);
        buf.put((byte)0);  // 标记位: 0 = 紧凑格式
        buf.put((byte)cardinality);
        for (int i : rbm.toArray()) {
            buf.putInt(i);  // 直接存每个 user_code
        }
    } else {
        // 大位图：完整序列化
        // [0x01][varInt(serializedSize)][RoaringBitmap.serialize()]
        int varIntLen = varIntSize(rbm.serializedSizeInBytes());
        ByteBuffer buf = ByteBuffer.allocate(1 + varIntLen + rbm.serializedSizeInBytes());
        buf.put((byte)1);  // 标记位: 1 = 完整序列化
        putVarInt(rbm.serializedSizeInBytes(), buf);
        buf.put(rbm.serialize());  // RoaringBitmap 原生序列化
    }
    // 最终: Base64 编码 → String → 存入 CK
    return buf;
}
```

**两种编码格式的取舍**：
- **紧凑格式**（cardinality ≤ 32）：适合长尾标签（大部分标签值只有少量用户），存储量极小
- **完整格式**（cardinality > 32）：适合热门标签值，保留 RoaringBitmap 的容器结构，查询时反序列化快

### 4.3 CK 写入

```java
// RoaringBitmapToClickhouse.java — 批量 JDBC 写入
String insert = "INSERT INTO {ckTable} VALUES(?,?,?,?)";
// 字段: tag_name(String), tag_value(String), user(String/base64), dt(String)

// 批量写入，50MB 一批
int CK_PART_SIZE = 50 * 1024 * 1024; // 50MB
dfResult.foreachPartition(records -> {
    PreparedStatement psmt = connection.prepareStatement(insert);
    int batchSizes = 0;
    while (records.hasNext()) {
        Row record = records.next();
        int recordSizes = tagValue.getBytes().length + user.getBytes().length;
        if (batchSizes + recordSizes >= CK_PART_SIZE) {
            psmt.executeBatch();  // 达到 50M 阈值，执行批处理
            psmt.clearBatch();
            batchSizes = 0;
        }
        psmt.setString(1, tagValue);
        psmt.setString(2, user); // base64 编码的 bitmap
        psmt.setString(3, dt);
        psmt.addBatch();
    }
    psmt.executeBatch();
});
```

---

## 五、阶段四：预估位图合并（`CkBitmapMergeMain`）

### 5.1 问题背景

当多个数据源并行处理时，A 数据源的位图还未生成完成，B 数据源的合并任务已开始读取，导致合并结果缺失 A 的数据。

### 5.2 解决方案（实际代码）

```java
// CkBitmapMergeMain.java

// 1. 从 Redis 读取已完成的数据源列表
Map<String, String> map = new HashMap<>();
String finishedDatasourceId = CrowdForecastRedisUtil.getFinishedDatasourceId(dt, brandId, idtype, datasourceId);
String allFinishedDatasourceId = CrowdForecastRedisUtil.getAllFinishedDatasourceId(dt, brandId, idtype, datasourceId);

// 2. CK 合并 SQL
"INSERT INTO {crowdForecastAllLocalTable} (brand_id, idtype, shard, ver, usercode, dt, datasource_id)
 SELECT brand_id, idtype, shard, ver,
        base64Encode(toString(groupBitmapMergeState(user_code))) AS usercode,
        dt, targetSource AS datasource_id
 FROM (
     SELECT brand_id, user_code, idtype
     FROM {crowdForecastDtLocalTable}
     WHERE dt = '{dt}'
       AND datasource_id IN ({allFinishedDatasourceIds})  -- 只读已完成的数据源
       AND idtype = '{idtype}' AND brand_id = {brandId}
 ) GROUP BY brand_id, datasource_id, idtype"

// 3. SR 版本（简化）
"INSERT INTO {table}
 SELECT brand_id, idtype, shard, bitmap_union(user_code) AS user_code, dt, datasource_id
 FROM {fromTable}
 WHERE dt = '{dt}' AND datasource_id IN ({finished})
 GROUP BY brand_id, datasource_id, idtype, shard"
```

**关键**：`groupBitmapMergeState`（CK）/ `bitmap_union`（SR）是数据库内置的 Bitmap 聚合函数，效率远高于应用层合并。

---

## 六、阶段五：Bucket 位图（ID Mapping 反向查询）

这是一个**独立流程**，用于人群包反解（user_code → user_id 的批量查询）。

### 6.1 构建流程

```java
// CombineBitmapSpark.java
// SQL：
SELECT
    CAST(usercode / 65536 AS INT) AS bucket,  // 分桶: usercode >>> 16
    CONCAT(usercode, '#', userid) AS userid    // 拼接: "1000001#58app_uid_xxx"
FROM {userCodeIdTypeTableName}_{brand}
WHERE dt = '{date}' AND idtype = '{idtype}'

// GROUP BY bucket, collect_set → List<"usercode#userid">
// LATERAL VIEW bucketRBMUserIds(uuList, '65536') → (base64rbm, userIds)
```

### 6.2 BucketRBMUserIds UDTF 实现

```java
// BucketRBMUserIds.java
public void process(Object[] objects) throws HiveException {
    List<Object> inputList = (List<Object>) objects[0];  // ["1000001#uid1", "1000005#uid2", ...]
    int size = Integer.parseInt(objects[1].toString());   // 65536

    RoaringBitmap rbm = new RoaringBitmap();
    String[] idsStr = new String[size];  // 固定 65536 大小的数组

    for (Object obj : inputList) {
        String idItem = String.valueOf(obj);     // "1000001#58app_uid_xxx"
        int idx = idItem.indexOf("#");
        long userCode = Long.parseLong(idItem.substring(0, idx));
        String userId = idItem.substring(idx + 1);

        rbm.add((int) userCode);                   // bit 位 = user_code 值
        int arrIdx = (int)(userCode % size);       // user_code % 65536 → 数组索引
        idsStr[arrIdx] = userId;                   // 按取模位置存储 userId
    }
    
    rbm.runOptimize();  // 空间优化: ArrayContainer → BitmapContainer 转换
    
    // 序列化 + Base64
    ByteArrayOutputStream bos = new ByteArrayOutputStream();
    DataOutputStream ndos = new DataOutputStream(bos);
    rbm.serialize(ndos);
    String bucketRBMStr = Base64.getEncoder().encodeToString(bos.toByteArray());

    // 输出: (base64rbm, userIds_list)
    forward(new Object[]{bucketRBMStr, Arrays.asList(idsStr)});
}
```

### 6.3 为什么用 `user_code % 65536` 做索引？

```
Bucket 0: user_code 0~65535
  bitmap = RoaringBitmap{bits for users 0,5,100,...}
  idsStr[0] = "userid_for_code_0"
  idsStr[5] = "userid_for_code_5"
  idsStr[100] = "userid_for_code_100"
  ...

反向查询时:
  给定 user_code=100 → bucket=0, index=100
  查 bucket=0 的 bitmap 确认 bit 100 是否为 1
  查 idsStr[100] 获取实际 user_id
```

---

## 七、CK/SR 兼容：`BucketRBMUserIdsSr`

StarRocks 版本使用 `BitmapValue` 替代 `RoaringBitmap`：

```java
// BucketRBMUserIdsSr.java — SR 版本
BitmapValue rbmValue = new BitmapValue();  // SR 自研 Bitmap 类型
for (Object obj : inputList) {
    rbmValue.add((int) userCode);
}
rbmValue.runOptimize();
rbmValue.serialize(ndos);
```

SR 使用自研的 `com.starrocks:starrocks-fe:1.0.0`，支持与 RoaringBitmap 互操作但内部实现不同。

---

## 八、完整数据流时序图

```
Time ─────────────────────────────────────────────────────────────────────►

1. SmartTagKvFormat         ┌─ 拉取元数据(SCF)
   (Spark)                  ├─ 读取原始数据(HDFS LZO)
                            ├─ 标签值类型校验(数值→"-999"兜底)
                            └─ 输出: userId\t{tag_json} → HDFS

2. DataETL2TagsSpark        ┌─ 读取 Hive 源表
   (Spark)                  ├─ JSON 列打平(get_json_object)
                            └─ 输出: ds_smart_per_projdata_format (Hive)

3. UserCodeToRoaringBitmap  ┌─ 关联 user_code 映射表
   (Spark)                  ├─ 4 shard 并行(GROUP BY tag,bucket)
                            ├─ RoaringBitMapByteUDAF 构建位图
                            └─ 输出: {outTable}/dt={date}/id={0,1,2,3} (Hive)

4. RoaringBitmapToClickhouse┌─ 读取 Hive 位图表
   (Spark)                  ├─ RoaringBitMapBase64UDF 编码
                            ├─ JDBC 批量写入 CK (50MB/batch)
                            └─ 输出: {ckTable}(tag_name,tag_value,user,dt) (CK)

5. CkBitmapMergeMain        ┌─ Redis 查询已完成数据源
   (Java)                   ├─ groupBitmapMergeState 合并
                            └─ 输出: crowdForecastAll (CK/SR 预估视图)

6. CombineBitmapSpark       ┌─ 独立流程: user_code → bucket bitmap
   (Spark)                  ├─ BucketRBMUserIds UDTF
                            └─ 输出: {userCodeBitMapTable}_{brand} (Hive)
                              用于人群包反解(user_code→user_id)
```

---

## 八·五、查询侧 DSL 与人群圈选 SQL

来源：[DSL 文档](/meishi_docs/万象/归档/_来源文档/DSL.md)（美事文档 space/2084884717378842624）

本文档是 bitmap 方案的实际**查询侧** SQL 全集，包含三大类场景：群体画像分析、页面标签圈选、嵌套标签复杂圈选。

### 8.5.1 底层数据表结构

所有圈选 SQL 都基于品牌分库的标签视图（`hdp_teu_dpd_clickhousedb`）：

| 表/视图 | 用途 | 关键字段 |
|---------|------|----------|
| `rpt_wanxiang_{brandId}_string_view` | 基础字符串标签 | tag_name, tag_value, user_code |
| `rpt_wanxiang_{brandId}_numeric_view` | 基础数值标签 | 同上 + 数值比较 |
| `rpt_wanxiang_{brandId}_nested_string_view` | KV 字符串标签 | tag_name, **sub_tag_name**, **sub_tag_value**, user_code |
| `rpt_wanxiang_{brandId}_nested_numeric_view` | KV 数值标签 | 同上 |
| `rpt_wanxiang_{brandId}_{tagtype}_v2` | 新版基础表（如 `_23_string_v2`） | 支持多品牌 union |
| `rpt_wanxiang_user_code_{brandId}_{idtype}_view` | 用户编码过滤视图 | wb_uid / wb_imei / brokerid 等 idtype |
| `rpt_wanxiang_user_package_{brandId}` | 人群包结果表 | package_id, shard, user_code, dt, ver |
| `app_wanxiang_tag_value_dic_d` | 标签值字典（code→name） | tag_en, code, dt |

**人群包写入格式**：
```sql
INSERT INTO rpt_wanxiang_user_package_150 (package_id, shard, user_code, dt, ver)
SELECT package_id, -1 AS shard, user_code, dt, {ver毫秒时间戳} AS ver FROM ...
```
- `shard=-1`：默认分片
- `ver=毫秒时间戳`：版本号，用于更新覆盖

### 8.5.2 场景一：群体画像（标签分布分析）

对指定人群包（package_id），统计每个标签值下的用户数及与基准人群包的对比：

```sql
SELECT tag_name, COALESCE(d.name, t.tag_value) AS tag_value,
       SUM(count0) AS count_analysis, SUM(count1) AS count_base
FROM (
  -- 每个标签值：与人群包A做 bitmap_and 计数 = count0，与人群包B = count1
  SELECT tag_name, tag_value,
         bitmap_count(bitmap_and(t1.user_code,
           (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
            FROM rpt_wanxiang_user_package_150 WHERE dt='...' AND package_id='A'))) AS count0,
         bitmap_count(bitmap_and(t1.user_code,
           (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
            FROM rpt_wanxiang_user_package_150 WHERE dt='...' AND package_id='B'))) AS count1
  FROM (SELECT tag_name, tag_value, user_code
        FROM rpt_wanxiang_23_string_v2 WHERE tag_name IN (...)
        UNION ALL
        SELECT ... FROM rpt_wanxiang_10000_string_v2 WHERE tag_name IN (...)) t1
) g
-- TOP100 截断：每标签只保留 count0 最高的 100 个值
)
LEFT JOIN app_wanxiang_tag_value_dic_d d ON tag_name=tag_en AND tag_value=code
GROUP BY tag_name, tag_value
ORDER BY tag_name, count_analysis DESC;
```

**关键技巧**：
- `bitmap_count(bitmap_and(tag_bitmap, package_bitmap))` — 一次调用完成交集计数
- 多品牌标签 `UNION ALL` 合并（如 `_23_string_v2` + `_10000_string_v2`）
- `array_agg(... ORDER BY count0 DESC)` + `array_slice(..., 1, 100)` 每标签截断 TOP100
- `CROSS JOIN unnest(...)` 解包聚合数组
- 字典表 `tag_value_dic_d` 把 code 映射为中文名

### 8.5.3 场景二：页面标签圈选（基础标签 AND）

万象页面上用户勾选多个标签值 → 生成多重 `bitmap_and` 圈选 SQL：

```sql
WITH conditions AS (
  SELECT bitmap_and(bitmap_and(bitmap_and(bitmap_and(bitmap_and(
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10000_string_view WHERE tag_name='visit_active' AND tag_value IN ('30')),
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10000_string_view WHERE tag_name='t_dispcate_2_30d' AND tag_value IN ('70134','8'))),
    -- ... 每个条件一层 bitmap_and 嵌套 ...
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_user_code_150_wb_imei_view))  -- 最后 AND 上用户编码过滤视图
  ) AS usercode
)
SELECT package_id, -1 AS shard, user_code, dt, 1785906619367 AS ver
FROM (SELECT usercode AS user_code, '2026-08-05' AS dt, 7930782 AS package_id FROM conditions);
```

**规则**：
- 同一标签多值 = `tag_value IN (...)` → `bitmap_union` 合并（OR 语义）
- 不同标签 = `bitmap_and` 嵌套（AND 语义）
- 最后 AND 上 `user_code_{brandId}_{idtype}_view` — 编码空间过滤（确保只含该 idtype 的合法用户）
- 结果直接 INSERT 人群包表（生成新 package_id + ver）

### 8.5.4 场景三：嵌套标签复杂圈选（KV 标签）

嵌套标签（KV）圈选是整个 bitmap 方案中最复杂的部分，跨多个 `sub_tag_name` 条件且需聚合子标签值：

**Step 1 — 同标签跨 sub_tag AND**：
```sql
WITH nestagg_node1_tmp AS (
  SELECT bitmap_and(
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10343_nested_string_view
     WHERE tag_name='zp_consume_amount_sum' AND sub_tag_name='latest_days' AND sub_tag_value IN ('7')),
    (SELECT IFNULL(bitmap_union(user_code), bitmap_empty())
     FROM rpt_wanxiang_10343_nested_string_view
     WHERE tag_name='zp_consume_amount_sum' AND sub_tag_name='mer_id' AND sub_tag_value IN ('8'))) AS user_code
)
```

**Step 2 — 子标签值聚合（内层 userCode 提取）**：
```sql
-- 关键：从嵌套 uint64 bitmap 中恢复 userId
SELECT bitxor(bit_shift_right_logical(bitand(140737488355327, unnest_bitmap),
       bit_shift_right_logical(unnest_bitmap, 48)), 4294967296) AS userId
FROM (SELECT bm FROM nestagg_node1_tmp2), unnest_bitmap(bm)
```

**uint64 嵌套编码解码原理（据实际 SQL 推断，有待查证）**：
```
140737488355327 = 2^47 - 1        (低47位掩码)
bitand(x, 2^47-1)                 → 取低 47 位
bit_shift_right_logical(x, 48)    → 取高 16 位以上部分
bitxor(低47位, 高部分, 2^32)      → 恢复为 userId

推断: 嵌套 bitmap 的值 = f(userCode, subTagValue) 复合编码,
      通过位移/掩码/异或运算还原 userCode
```

**Step 3 — 子标签值聚合过滤**（如"金额类目求和"）：
```sql
SELECT IFNULL(bitmap_union(user_code), bitmap_empty()) AS user_code
FROM (SELECT bitmap_union(to_bitmap(userId)) AS user_code
      FROM (SELECT userId FROM (
        SELECT sub_tag_value,
               bitxor(bit_shift_right_logical(bitand(140737488355327, unnest_bitmap),
                 bit_shift_right_logical(unnest_bitmap, 48)), 4294967296) AS userId
        FROM (SELECT bm, sub_tag_value FROM nestagg_node1_tmp2) t, unnest_bitmap(t.bm)
      ) a1 GROUP BY userId HAVING SUM(sub_tag_value) IN ('0')) a) t2
```

**Step 4 — 数值范围 + 排除条件**：
```sql
-- 数值范围: tag_value <= 'x' AND tag_value >= 'y' AND tag_value <> -99999
SELECT ... FROM rpt_wanxiang_10343_numeric_view
WHERE tag_name='zp_total_blc' AND tag_value <= '100000000000'
  AND tag_value >= '150000' AND tag_value <> -99999
```

**Step 5 — sub_bitmap 截断**（性能优化）：
```sql
SELECT sub_bitmap(bitmap_and(user_code, (SELECT user_code FROM nestagg_node1_tmp)), 0, 10000000) AS bm
```
- 先做条件 AND，再 `sub_bitmap` 截取前 1000 万用户，限制 unnest 规模

### 8.5.5 与构建侧的对应关系

| 构建侧（前八章） | 查询侧（DSL） |
|------------------|---------------|
| `rbm_wanxiang_{datasource}_string/numeric` | `rpt_wanxiang_{brand}_string_view / _v2` |
| uint32 RoaringBitmap | `bitmap_union` / `bitmap_and` / `bitmap_count` |
| uint64 Roaring64NavigableMap | nested 视图 + unnest_bitmap 解码 |
| 用户编码表 | `rpt_wanxiang_user_code_{brand}_{idtype}_view` |
| — | 人群包落库：`rpt_wanxiang_user_package_{brand}` + ver 版本 |

---

## 九、关键技术决策总结

| 决策 | 选择 | 原因 |
|------|------|------|
| Bitmap 库 | 58 定制 RoaringBitmap | 特殊人群限制逻辑，Hive/CK/SR 互操作 |
| uint32 vs uint64 | 基础标签 uint32，KV 标签 uint64 | KV 标签需要更大编码空间 |
| 分桶大小 | 65536 (2^16) | 对齐 RoaringBitmap Container 大小 |
| Shard 策略 | 4 shard by user_code 范围 | user_code 大致均匀分布 |
| CK 写入 | 逐 partition JDBC 批量 | 50MB/batch，平衡内存和吞吐 |
| Base64 编码 | 紧凑/完整 双格式 | ≤32 用户用紧凑格式节省存储 |
| 并发控制 | Redis 记录完成状态 | 避免位图合并时读取未生成的数据 |
| SR 兼容 | `BitmapValue` 替代 `RoaringBitmap` | SR 自研 Bitmap 类型 |

## 相关页面

- [[user-tag-bitmap-construction]] — 用户-标签 Bitmap 概念与原理
- [[wanxiang-tag-ck-pipeline]] — 万象标签处理 CK 流水线
- [[wanxiang]] — 万象数据资产管理平台

## 代码参考

- `wanxiang-data-jobs/wanxiang-label-data-etl/wanxiang-label-data-etl-multi-components/` — 核心 ETL 流程
- `wanxiang-data-jobs/wanxiang-data-common/` — Bitmap UDF/UDAF/UDTF 实现
- `wanxiang-data-jobs/wanxiang-relation-user-code-bitmap/` — Bucket 位图构建
- [DSL 文档](/meishi_docs/万象/归档/_来源文档/DSL.md) — 查询侧圈选 SQL 全集（群体画像/标签圈选/嵌套圈选）
- `wanxiang-data-jobs/wanxiang-ice-mountain-data-etl/` — 预估位图合并与视图切换
