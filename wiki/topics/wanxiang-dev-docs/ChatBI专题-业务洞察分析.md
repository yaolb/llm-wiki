# ChatBI专题-业务洞察分析

> **来源**: 美事文档 · TEG-大数据部 > 万象 > 1-技术文档 > 万象开发设计文档
> **页面 ID**: 2056559821523628033

---


## 业务用户交叉分析


当前自定义交叉分析

![图片](https://docs.58corp.com/page/attachment/alias/6ce3bd2f011247778e38fd8fe1162a67.png/download?pageId=2056559821523628033&width=2234&height=630)

底层基础数据Hive表：

C端：hdp_teu_dpd_feature_db.dws_crossover_analysis_imei_overall_date

[https://dp.58corp.com/data-map/detail-page/865897](#table-865897)

![图片](https://docs.58corp.com/page/attachment/alias/b273215a42a1480597e1e18a9218d966.png/download?pageId=2056559821523628033&width=2668&height=1286)

B端：hdp_teu_dpd_feature_db.dws_crossover_analysis_b_log_overall_date

[https://dp.58corp.com/data-map/detail-page/900506](#table-900506)

![图片](https://docs.58corp.com/page/attachment/alias/16149316535245b6b6aa696678ca4e54.png/download?pageId=2056559821523628033&width=2684&height=1224)

-- C端 每天约 19949397
select count(*) from hdp_teu_dpd_feature_db.dws_crossover_analysis_imei_overall_date 
where dt = '20260513' 

-- B端 每天约 1928609
select count(*) from hdp_teu_dpd_feature_db.dws_crossover_analysis_b_log_overall_date 
where dt = '20260513'

星火数据集：

select crowd_type,bu,cate_name,imei,userid,event_type,city_name,dt
from (
select 'C' as crowd_type,bu,cate_name,imei,userid,event_type,city_name,dt
from hdp_teu_dpd_feature_db.dws_crossover_analysis_imei_overall_date
where dt='${#date(0,0,-1):yyyyMMdd#}' AND imei IS NOT NULL AND imei <> ''
union 
select 'B' as crowd_type,bu,cate_name,imei,userid,event_type,city_name,dt
from hdp_teu_dpd_feature_db.dws_crossover_analysis_b_log_overall_date
where dt='${#date(0,0,-1):yyyyMMdd#}' AND imei IS NOT NULL AND imei <> ''
) t

StarRocks表：

# C端业务用户行为表：hdp_teu_dpd_starrocksdb.hdp_teu_dpd_dws_crossover_analysis_imei_overall_date
## 字段：bg（业务BG）, bu（业务BU）, cate_name（业务二级类目）, city_name（城市）, imei（设备ID）, userid（登录用户ID）, event_type（事件类型 1：访问 2：有效连接或有订单 3：访问详情页 4：有连接或线索）,dt（日期）
## 应用场景：C端业务用户行为分析，比如分析单业务的城市、二级类目等分布情况，或分析业务与业务直接交叉情况，人数及比例等。

# B端业务客户行为表：hdp_teu_dpd_starrocksdb.hdp_teu_dpd_dws_crossover_analysis_b_log_overall_date
## 字段：bu（业务BU）, cate_name（行业/类目/类别名称）, city_name（城市）, imei（设备ID）, userid（登录用户ID）, event_type（事件类型 1：活跃访问 2：有发帖 3：有付费）,dt（日期）
## 应用场景：B端业务客户行为分析，比如分析单业务的城市、二级类目等分布情况，或分析业务与业务直接交叉情况，人数及比例等。

StarRocks查询性能测试：

-- 租房整体人群 vs 其他 BU / cate_name 交叉分析
-- 日期：2026-04-01 ~ 2026-05-01
-- 交叉比例口径：cross_imei_cnt / 租房整体 imei 数

WITH base AS (
    SELECT
        bu,
        cate_name,
        imei
    FROM hdp_teu_dpd_starrocksdb.hdp_teu_dpd_dws_crossover_analysis_imei_overall_date
    WHERE dt >= '2026-04-01'
      AND dt <= '2026-05-01'
			AND event_type=1
      AND imei IS NOT NULL
      AND imei <> ''
    GROUP BY bu, cate_name, imei
),

-- 租房整体业务人群（去重 imei）
zufang_imei AS (
    SELECT DISTINCT imei
    FROM base
    WHERE bu = '租房'
),

zufang_cnt AS (
    SELECT COUNT(*) AS zufang_imei_cnt
    FROM zufang_imei
),

-- 租房 × 其他各 BU
cross_by_bu AS (
    SELECT
        'bu' AS dim_type,
        b.bu AS dim_value,
        COUNT(DISTINCT b.imei) AS cross_imei_cnt
    FROM base b
    INNER JOIN zufang_imei z ON b.imei = z.imei
    WHERE b.bu <> '租房'
    GROUP BY b.bu
),

-- 租房 × 其他 BU 下的各 cate_name（非租房业务线内的类目行为）
cross_by_cate AS (
    SELECT
        'cate_name' AS dim_type,
        b.cate_name AS dim_value,
        COUNT(DISTINCT b.imei) AS cross_imei_cnt
    FROM base b
    INNER JOIN zufang_imei z ON b.imei = z.imei
    WHERE b.bu <> '租房'
    GROUP BY b.cate_name
)

SELECT
    t.dim_type,
    t.dim_value,
    zc.zufang_imei_cnt,
    t.cross_imei_cnt,
    ROUND(t.cross_imei_cnt * 1.0 / zc.zufang_imei_cnt, 6) AS cross_ratio_in_zufang
FROM (
    SELECT * FROM cross_by_bu
    UNION ALL
    SELECT * FROM cross_by_cate
) t
CROSS JOIN zufang_cnt zc
ORDER BY t.dim_type, t.cross_imei_cnt DESC;

查询30天，统计计算约9s

查询90天，统计计算约18s

待补充

-- 租房(观察) × 其他 BU/类目(交叉目标)
-- 观察：租房 + 访问(event_type=1) + dt [2026-02-01, 2026-03-01]
-- 目标：非租房 + 访问(event_type=1) + dt [2026-02-01, 2026-05-01]
-- 交叉比例 = cross_imei_cnt / 租房观察人群 imei 数

WITH zufang_imei AS (
    -- 观察人群：先窄过滤、再去重，结果集通常较小，适合作为 build 端
    SELECT imei
    FROM hdp_teu_dpd_starrocksdb.hdp_teu_dpd_dws_crossover_analysis_imei_overall_date
    WHERE bu = '租房'
      AND event_type = 1
      AND dt >= DATE '2026-02-01'
      AND dt <= DATE '2026-03-01'
      AND imei IS NOT NULL
      AND imei <> ''
    GROUP BY imei
),

zufang_cnt AS (
    SELECT COUNT(*) AS zufang_imei_cnt
    FROM zufang_imei
),

-- 交叉目标：一次扫描，同时产出 bu 维度和 cate 维度（避免扫两遍大表）
target_imei AS (
    SELECT
        bu,
        cate_name,
        imei
    FROM hdp_teu_dpd_starrocksdb.hdp_teu_dpd_dws_crossover_analysis_imei_overall_date
    WHERE bu <> '租房'
      AND event_type = 1
      AND dt >= DATE '2026-02-01'
      AND dt <= DATE '2026-05-01'
      AND imei IS NOT NULL
      AND imei <> ''
    GROUP BY bu, cate_name, imei
),

target_bu_imei AS (
    SELECT bu, imei
    FROM target_imei
    GROUP BY bu, imei
),

target_cate_imei AS (
    SELECT cate_name, imei
    FROM target_imei
    GROUP BY cate_name, imei
),

cross_by_bu AS (
    SELECT
        t.bu AS dim_value,
        COUNT(*) AS cross_imei_cnt
    FROM target_bu_imei t
    INNER JOIN zufang_imei z ON t.imei = z.imei
    GROUP BY t.bu
),

cross_by_cate AS (
    SELECT
        t.cate_name AS dim_value,
        COUNT(*) AS cross_imei_cnt
    FROM target_cate_imei t
    INNER JOIN zufang_imei z ON t.imei = z.imei
    GROUP BY t.cate_name
)

SELECT
    x.dim_type,
    x.dim_value,
    zc.zufang_imei_cnt,
    x.cross_imei_cnt,
    ROUND(x.cross_imei_cnt * 1.0 / zc.zufang_imei_cnt, 6) AS cross_ratio_in_zufang
FROM (
    SELECT 'bu' AS dim_type, dim_value, cross_imei_cnt FROM cross_by_bu
    UNION ALL
    SELECT 'cate_name' AS dim_type, dim_value, cross_imei_cnt FROM cross_by_cate
) x
CROSS JOIN zufang_cnt zc
ORDER BY x.dim_type, x.cross_imei_cnt DESC;

30d租房 vs 90d 其他bu+cate  13s

90d租房 vs 90d 其他bu+cate  17s

30d招聘 vs 90d 其他bu+cate  12s

90d租房 vs 90d 其他bu+cate  17s

Agent实现流程：