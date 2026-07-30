---
pageType: synthesis
id: synthesis.星河开放平台-openapi-技术方案-完整版
title: 星河开放平台 OpenAPI 技术方案（完整版）
sourceIds:
  - resource://meishi-openapi-v2
claims: []
status: active
updatedAt: 2026-07-30T07:09:32.651Z
---

# 星河开放平台 OpenAPI 技术方案（完整版）

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# 星河开放平台 OpenAPI 技术方案（完整版）

## 概述

本文档整合了星河开放平台 OpenAPI 的「技术方案」（设计文档）和「需求分析 v2」（需求文档），完整覆盖了从背景分析、竞品调研、API 分类设计、鉴权流程、表结构到完整 73 个 API 清单的技术方案。

## 一、背景与现状

### 痛点

历史原因，星河对外提供三套 API 并存：
- 云窗开放平台接口
- 旧版 DP 接口
- 新版 DP OpenAPI

**核心问题**：
- 版本多，维护成本高，数据来源不统一
- 接口设计不规范，复用页面接口，不满足原子性
- 基于个人的 apikey 机制存在缺陷：用户离职导致 API 异常
- 缺乏灰度与限流能力，与 dp-webserver 耦合，互相影响

### 设计思路

星河已经完成功能统一整合，在此之上重新设计统一开放平台。核心区分两类 apikey 主体：
- **用户（个人）** — 主体接口，apikey 鉴权 + 数据权限（申请方式）
- **虚拟（项目）** — 超级接口，apikey 只鉴权，数据权限通过参数 OA 判断；也支持主体接口（授权方式）

## 二、API 分类设计

### 按目标用户

| 类型 | 说明 | 场景 |
|------|------|------|
| 项目接口 | 可操作组织内所有资源，人员变动不影响 | 权限绑定到 apikey |
| 个人接口 | 仅操作自己的资源 | apikey 鉴权 + 操作我的数据 |

### 按权限等级

| 类型 | 说明 |
|------|------|
| 管理接口 | 组织内超级账号，可创建/删除表等 |
| 使用接口 | 仅查询有使用权限的数据（如 hive 表查询） |

### 按使用时限

| 类型 | 说明 |
|------|------|
| 长期接口 | apikey 保存在项目配置，长期维护，人员变动不受影响 |
| 临时接口 | 临时调用，可废弃 |

### 主体 vs 超级 vs 公共

| 类型 | 说明 | 举例 |
|------|------|------|
| 主体接口（主体） | 只能操作 apikey 对应用户（组织）的资源 | 设置默认组织、获取我创建的表 |
| 超级接口（虚拟） | 可操作组织内所有用户的资源 | 获取组织内用户、认领表到某人 |
| 公共接口（公共） | 与用户无关 | 获取组织列表、数据地图、表详情 |

### 按访问限制

| 类型 | 说明 |
|------|------|
| 默认开放 | 任何 apikey 均可访问 |
| 需要授权 | 需要给 apikey 单独授权后访问 |

## 三、鉴权体系（最终方案 vs 调研方案对比）

### 最终采用方案（技术方案）

相比调研 v1 的腾讯云/阿里云 sign+hmac-sha1 双向签名方案，最终方案大幅简化：

#### 调用参数

| 参数 | 说明 | 示例 |
|------|------|------|
| client_user | 调用者 OA / 服务名 | zhangsan01 |
| paramN | 业务参数 | 可变 |
| ts | 时间戳（精确到微秒） | 1655212444287 |
| token | 接口校验串 | `md5(client_secret + ts)` |

#### Token 校验 SQL
```sql
select id from open_api_client 
where client_user=#{client_user} 
and md5(concat(#{client_secret},#{ts}))=#{token};
```

鉴权通过查表验证 `md5(secret+ts)` 是否匹配，简单直接。

### 与调研 v1 方案的差异

| 维度 | 调研 v1（腾讯云/阿里云方案） | 最终方案 |
|------|------|------|
| 签名算法 | hmac-sha1 + base64 + 参数排序 + body MD5 | 直接 md5(secret+ts) |
| 防篡改 | 请求参数排序 → 拼串 → hmac → base64 | 无（文档明确说 less 防篡改） |
| 公共参数 | token, timestamp, nonce, sign 四项 | client_user, ts, token 三项 |
| nonce 随机数 | 需要 | 无（简化实现） |
| 粒度 | 细粒度防重放+防篡改 | 中等粒度防重放 |

之所以简化的原因：文档明确提及 *"为了降低接口复杂性，减少字符编码、调用者参差不齐等客观情况，不对业务参数做数据校验"*。

## 四、网关鉴权流程

### 总体流程

```
请求 → 新老接口判断 → client_user 校验 → token 校验 → 防重放 → API限流 → 业务处理
```

### 4.1 新老接口判断
- 每隔 30s 缓存老接口白名单表（`dw_ex_api_white_list`）至内存 map
- 请求 URL 存在则走老校验逻辑

### 4.2 client_user 校验
- 查表 `yc_user.user_name = {client_user}` 是否存在，不存在返回错误
- 校验 user 和接口类型匹配：
  - **个人 user** → 仅能请求主体接口（`/private/` 前缀）
  - **服务类 user** → 仅能请求超级接口（`/team/` 前缀）

### 4.3 Token 校验
```sql
SELECT id FROM open_api_client 
WHERE client_user = #{client_user} 
  AND MD5(CONCAT(#{client_secret}, #{ts})) = #{token};
```
返回结果不为空 → 有效，否则返回 "token 不合法"

### 4.4 防重放
- ts 大于本机时间戳 30s → "无效的时间戳"
- ts 小于本机时间戳且差值大于 5 分钟 → "请求已过期"

### 4.5 API 限流

三级限流（双层控制）：

| 级别 | 接口 QPS 限制 | 说明 |
|------|------|------|
| 1 级 | < 50 | 大多数常规接口 |
| 2 级 | < 20 | 中等消耗接口 |
| 3 级 | < 5 | 高消耗接口（Hive建表、SQL解析等） |

叠加全局控制：
- **单 client_user**：总 QPS < 50
- **全局**：总 QPS < 500

## 五、client_secret 生成策略

- 16 位，[A-Za-z0-9] 组合
- 写入 `open_api_client` 表，唯一索引冲突时重新生成
- 每个调用方可维护多组 client_secret，支持版本管理和快速回收

## 六、异常状态码

| 错误码 | 说明 |
|------|------|
| 0 | 成功 |
| 1001 | API 未授权 |
| 1002 | token 不合法 |
| 1003 | 请求已过期 |
| 1004 | client_user 无权限访问超级接口 |
| 1005 | client_user 无权限访问主体接口 |
| 1006 | client_user 调用频率超限（QPS < 100） |
| 1007 | API 调用频率超限（分级） |
| 1008 | 缺少 client_user 参数 |
| 1009 | 缺少时间戳参数 |
| 1010 | 缺少 token 参数 |
| 1011 | client_user 不存在 |
| 1012 | 无效的时间戳 |
| 500 | 服务端异常 |

元数据、任务、个人信息、组织信息各自有 11xx / 12xx / 13xx / 14xx 分段错误码。

## 七、数据库表结构

### open_api（API 定义表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int PK | 主键 |
| uri | varchar(255) | 接口 URI |
| api_type | tinyint | 1=公开, 2=授权 |
| api_level | tinyint | 限流级别 1-3 |
| module_type | tinyint | 1=个人信息, 2=组织, 3=平台管理, 4=元数据, 5=血缘关系, 6=任务 |
| name | varchar(64) | API 名称 |
| api_desc | text | 备注 |
| is_delete | tinyint | 0=未删除, 1=已删除 |
| create_user/update_user | varchar(60) | OA |
| create_time/update_time | datetime | 时间戳 |

### open_api_auth（API 权限表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | int PK | 主键 |
| api_id | int | API 主键 |
| client_user | varchar(60) | OA / 服务名 |

### open_api_client（API 客户端表）
唯一索引：`uniq_client_user_client_secret`

| 字段 | 类型 | 说明 |
|------|------|------|
| id | int PK | 主键 |
| client_user | varchar(60) | OA/服务名 |
| client_secret | varchar(6) | 客户端密码 |
| client_desc | varchar(60) | 描述 |
| last_used_time | datetime | 最近调用时间 |
| is_delete | tinyint | 0/1 |
| create_user | varchar(60) | 创建人 |
| create_time / update_time | datetime | 时间戳 |

### yc_user 新增字段
| 字段 | 类型 | 说明 |
|------|------|------|
| is_service | tinyint(1) | 0=个人, 1=服务类用户（用于服务列表筛选） |
| create_oa | varchar(30) | 创建人 |

### open_api_access_log（访问日志）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | bigint PK | 主键 |
| client_user | varchar(60) | OA/服务名 |
| client_id | int | client 主键 |
| request_ip | varchar(64) | 请求 IP |
| uri | varchar(255) | 请求 URI |
| access_time | datetime | 请求时间 |

## 八、完整 API 清单（73 个，初始化 SQL 数据）

### 组织模块（module_type=2）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 1 | /openapi/team/org/list-members | 授权 | 1 | 获取组织所有用户 |
| 2 | /openapi/team/org/list-yarn-queues | 授权 | 1 | 获取组织所有yarn队列 |
| 3 | /openapi/team/org/get-hadoop-user | 授权 | 1 | 获取组织的hadoop账号 |
| 4 | /openapi/team/org/add-member | 授权 | 1 | 给组织添加成员 |

### 平台管理（module_type=3）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 5 | /openapi/public/system/list-orgs | 公开 | 1 | 获取全部组织列表 |
| 6 | /openapi/public/system/list-groups | 公开 | 1 | 获取全部事业群列表 |

### 元数据模块（module_type=4）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 7 | /openapi/team/meta/remove-user-authorize | 授权 | 1 | 移除用户的表查询权限 |
| 8 | /openapi/team/meta/list-queryable-servers | 授权 | 1 | 获取组织下的数据源列表 |
| 9 | /openapi/team/meta/list-writable-databases | 授权 | 1 | 组织有写权限的数据库 |
| 10 | /openapi/team/meta/list-queryable-databases | 授权 | 1 | 组织有查询权限的所有库 |
| 11 | /openapi/team/meta/check-auth | 授权 | 1 | 批量检查表查询权限 |
| 12 | /openapi/team/meta/list-queryable-tables | 授权 | 1 | 组织内的所有表 |
| 13 | /openapi/team/meta/list-authorized-tables | 授权 | 1 | 某个用户申请通过的表 |
| 14 | /openapi/team/meta/list-authorized-users | 授权 | 1 | 申请了表权限的用户列表 |
| 15 | /openapi/team/meta/list-views | 授权 | 1 | 表的所有视图 |
| 16 | /openapi/team/meta/list-tables | 授权 | 1 | 库下表列表 |
| 17 | /openapi/team/meta/list-designed-table | 授权 | 1 | 用户创建的所有表 |
| 18 | /openapi/team/meta/create-hive-table | 授权 | 3 | 新建Hive表 |
| 19 | /openapi/team/meta/create-view-table | 授权 | 3 | 新建视图表 |
| 20 | /openapi/team/meta/claim-batch | 授权 | 1 | 批量认领表到组织 |
| 21 | /openapi/team/meta/add-iceberg | 授权 | 1 | 新建数据湖元数据 |
| 22 | /openapi/team/meta/delete-iceberg | 授权 | 1 | 删除数据湖元数据 |
| 23 | /openapi/team/meta/set-keepdays | 授权 | 1 | 设置生命周期 |
| 24 | /openapi/team/meta/set-permission-level | 授权 | 1 | 设置安全信息 |
| 25 | /openapi/team/meta/rename-table | 授权 | 1 | 元数据改表名 |
| 26 | /openapi/public/table/get-info | 授权 | 1 | 获取表详情信息 |
| 27 | /openapi/public/table/check-hive-view | 公开 | 1 | 批量检查表是否为视图 |
| 28 | /openapi/public/table/list-columns | 公开 | 1 | 获取表字段信息 |
| 29 | /openapi/public/table/list-partitions | 公开 | 1 | 获取表分区信息 |
| 30 | /openapi/public/datamap/search | 公开 | 1 | 表通用搜索 |
| 66 | /openapi/private/meta/list-authorized-tables | 授权 | 1 | 我申请通过的表 |
| 67 | /openapi/private/meta/list-queryable-databases | 授权 | 1 | 我有查询权限的所有库 |
| 68 | /openapi/private/meta/list-writable-databases | 授权 | 1 | 我有写权限的数据库 |
| 69 | /openapi/private/meta/list-authorized-users | 授权 | 1 | 申请了表查询权限的用户 |
| 70 | /openapi/private/meta/list-favorite-tables | 授权 | 1 | 我收藏的表 |
| 71 | /openapi/private/meta/list-designed-tables | 授权 | 1 | 我创建的所有表 |
| 72 | /openapi/private/meta/claim-batch | 授权 | 1 | 批量认领表给我 |

### 血缘关系（module_type=5）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 31 | /openapi/public/linage/parse-tables | 公开 | 3 | 解析SQL输出表名 |
| 32 | /openapi/public/linage/parse-columns | 公开 | 3 | 解析SQL输出字段信息 |
| 33 | /openapi/public/linage/list-upstream-job | 公开 | 1 | 表的上游任务 |

### 任务模块（module_type=6）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 34 | /openapi/public/job/list-job-types | 公开 | 1 | 任务类型列表 |
| 35 | /openapi/public/job/check-name | 公开 | 1 | 校验任务名称 |
| 36 | /openapi/public/flow/check-name | 公开 | 1 | 校验任务名称（补数据） |
| 37 | /openapi/team/job/list-jobs | 授权 | 1 | 某人的所有任务 |
| 38 | /openapi/team/job/search-jobs | 授权 | 1 | 任务名搜索 |
| 39 | /openapi/team/job/list-exec-logs | 授权 | 1 | 任务执行记录 |
| 40 | /openapi/team/job/run | 授权 | 1 | 运行任务 |
| 41 | /openapi/team/job/kill | 授权 | 1 | 终止任务 |
| 42 | /openapi/team/job/list-yarn-applications | 授权 | 1 | 执行记录的ApplicationId |
| 43 | /openapi/team/job/create-flow | 授权 | 1 | 新建补数据 |
| 44 | /openapi/team/job/remove-flow | 授权 | 1 | 删除补数据 |
| 45 | /openapi/team/job/search-flows | 授权 | 1 | 搜索补数据 |
| 46 | /openapi/team/job/add-flow-jobs | 授权 | 1 | 添加补数据任务 |
| 47 | /openapi/team/job/run-flow | 授权 | 1 | 启动补数据作业 |
| 48 | /openapi/team/job/cancel-flow | 授权 | 1 | 取消补数据作业 |
| 49 | /openapi/team/job/list-flow-insts | 授权 | 1 | 补数据执行记录 |
| 50 | /openapi/team/job/list-downstream-jobs | 授权 | 1 | 下游任务 |
| 51 | /openapi/team/job/add-relation | 授权 | 1 | 添加依赖任务 |
| 52 | /openapi/team/job/remove-relation | 授权 | 1 | 删除依赖任务 |
| 53 | /openapi/team/job/upload | 授权 | 3 | 上传文件 |
| 54 | /openapi/team/job/upload-dependent | 授权 | 3 | 上传依赖文件 |
| 55 | /openapi/team/job/batch-online-offline | 授权 | 1 | 任务上下线 |
| 56 | /openapi/team/job/create-job-alert | 授权 | 1 | 设置报警人 |
| 57 | /openapi/team/job/get-info | 授权 | 1 | 任务详情 |
| 58 | /openapi/team/job/create | 授权 | 1 | 新建任务 |
| 73 | /openapi/private/job/list-jobs | 授权 | 1 | 我的任务列表 |

### 个人信息（module_type=1）

| ID | URI | 类型 | 级别 | 名称 |
|----|-----|------|------|------|
| 59 | /openapi/private/info/get-profile | 授权 | 1 | 获取我的信息 |
| 60 | /openapi/private/info/set-defaultorg | 授权 | 1 | 切换默认组织 |
| 61 | /openapi/private/info/set-currentorg | 授权 | 1 | 切换当前组织 |
| 62 | /openapi/private/info/list-queues | 授权 | 1 | 组织yarn队列 |
| 63 | /openapi/private/info/get-hadoop-user | 授权 | 1 | 组织hadoop账号 |
| 64 | /openapi/private/info/list-joined-orgs | 授权 | 1 | 已加入的组织 |
| 65 | /openapi/private/info/get-org-detail | 授权 | 1 | 组织信息 |

## 九、URI 路径规范

```
/openapi/{type}/{module}/{action}
```

- `type`：`public`（公开）、`team`（团队/超级接口）、`private`（个人/主体接口）
- `module`：`org`, `meta`, `job`, `flow`, `info`, `table`, `linage`, `datamap`, `system`
- `action`：动词语义，如 `list-members`, `create-hive-table`, `run`, `kill`

## 十、工作项拆分

- 服务管理 — API 管理，增删改 API 信息、列表
- 服务管理 — 服务增改、服务授权 API 调用
- 调用管理 — 增删调用方、统计信息
- 网关层框架 — 接口鉴权、防重放、限流支持
- 开放接口定义 & 开发（一期）
  - 接口定义（复杂入参拆分接口，重点：元数据、任务配置）
  - 公共接口开发
  - 元数据相关接口
  - 任务配置相关接口

## 十一、历史接口迁移覆盖

新 OpenAPI 规划覆盖以下老接口来源（57+ 个接口）：

| 来源 | 说明 |
|------|------|
| DP 旧接口 | `/openapi/user-info/*`, `/openapi/yarn/*`, `/openapi/task-info/*`, `/openapi/schedule-exec/*`, `/openapi/flows/*`, `/openapi/alert/*` 等 |
| 云窗开放平台 | `/accounts/*`, `/authorizations`, `/servers/*`, `/databases/*`, `/table-mapping`, `/table-perms` 等 |
| Bakery | `/dev/task/ex-api/*`, `/scheduler/task/ex-api/*` 等 |
| 数据地图 | `/openapi/public/datamap/search` 等 |

**不在新 API 范围**：云窗文档（documents）、报备埋点等非核心功能。

## 十二、与方案调研 v1 的对比演进

| 维度 | 方案调研 v1 | 方案技术方案 |
|------|------------|------------|
| 鉴权 | token + secret + sign(hmac-sha1+参数排序+bodyMD5) | token = md5(secret+ts)，极简 |
| nonce | 需要，redis 记录 | 不需要 |
| 防篡改 | sign 校验参数完整性 | 不防（简化实现） |
| 防重放 | timestamp + nonce + sign | timestamp（+/-5min窗口） |
| 适配 | 原有 dp-openapi 加权限层 | 全新网关层+新表设计 |
| 类型 | 角色-资源关系 | client_user + api_type + 前缀路由(/private/team/public) |
| URI | 沿用旧规范 | 全新 `/openapi/{type}/{module}/{action}` |

核心设计哲学变化：**从「安全完备优先」转向「可用性优先」**，用极简的 token=md5(secret+ts) 替代完整的签名体系，将数据合法性校验完全交给业务侧，降低对接门槛。

## 相关文档

- [技术方案](https://docs.58corp.com/#/space/1535932097804423168)（105KB，本文主要来源）
- [需求分析 v2](https://docs.58corp.com/#/space/1525049052041891841)（184KB，需求背景和 API 分类）
- [公共错误码](https://docs.58corp.com/#/space/1534122845330780160)（33KB）
- [方案调研 v1](https://docs.58corp.com/#/space/1523928606890307587)（21KB，前期竞品分析）
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
