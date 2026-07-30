---
pageType: synthesis
id: synthesis.星河开放平台-openapi-设计方案调研
title: 星河开放平台 OpenAPI 设计方案调研
sourceIds:
  - resource://meishi-openapi-survey
claims: []
status: active
updatedAt: 2026-07-30T06:29:19.449Z
---

# 星河开放平台 OpenAPI 设计方案调研

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# 星河开放平台 OpenAPI 设计方案调研

## 概述

星河开放平台 OpenAPI 是 TEG-大数据部/星河下提供的数据平台开放接口，定位为基于星河现有能力对外提供任务、元数据、用户、组织的 CRUD 操作。本文档为方案调研 v1 版本，包含竞品分析、安全方案、改造设计和接口规划。

## 背景与动机

**原有问题**：DP、云窗开放接口鉴权基于 apikey，与用户 OA 绑定。用户离职/转岗后，使用 apikey 接入的业务系统存在 OA 权限问题（apikey 失效或残留）。

**设计目标**：开放星河现有能力，提供任务、元数据相关的开放 API，满足业务批量操作与系统对接需求。二期支持权限承载，满足项目对接场景。

## 竞品分析

### 星火
（文档中仅提及，无详细分析）

### 腾讯云 & 阿里云

两大云厂商的通用开放接口鉴权均基于 **token 机制**，核心特征：
- 无任何业务属性
- 粒度仅至接口是否可访问
- 数据合法性校验不在开放接口层处理，在业务侧处理

#### 安全措施（取前三项重点关注）

| 安全维度 | 说明 |
|---------|------|
| 用户身份校验 | token 识别用户身份 |
| 防重放攻击 | timestamp + nonce 机制 |
| 防参数篡改 | sign 签名校验 |
| 限流机制 | 可选 |
| 黑名单机制 | 可选 |
| 数据合法性校验 | 业务侧处理 |

## 腾讯云/阿里云 Token 校验方案

### 公共校验参数

| 参数 | 作用 |
|------|------|
| token | 授权给用户的唯一标识 |
| timestamp | 请求时间戳，用于防重放 |
| nonce | 随机数，防止同一时间戳内重放 |
| sign | 签名，防参数篡改 |

### 校验流程

#### 申请 Token
服务方提供：token（身份标识）+ secret（配对秘钥）

#### 请求方计算 sign

**GET 请求**
1. 原始参数 + 公共参数（token, timestamp, nonce）按自然排序
2. 以 KV 格式拼成字符串：`nonce=xxx&param1=a&param2=b&timestamp=xxx&token=xxx`
3. 用 secret 进行 hmac-sha1 加密 → base64 编码 → 得到 sign

**POST 请求**
1. URL 参数 + 表单参数（除 sign 外）按 key 字典升序拼成 s1
2. Body 数据的 MD5 值作为 s2（无 body 用空字符串）
3. 签名字符串 = `请求方法(大写) \n s1 \n s2`
4. 加密 → base64 → sign

#### 服务方校验
1. 校验时间戳是否过期
2. 校验时间戳内随机数是否已使用（Redis 记录，防重放）
3. 校验 token 是否有效
4. 按同样规则计算 sign，比对是否一致

## 技术方案

### 设计思路
保持现有星河 openapi 架构，新增接口访问校验层。业务参数（orgId, oa）等数据合法性校验放在业务侧处理。

### 改动点

1. **权限校验**：在 dp-openapi 服务中基于 `yc_role_resource_relation`（角色-资源关系表）增加 API 访问权限校验

2. **新增角色**：`role = 104`（应用账号）
   - 仅可调用星河 API，不能登录
   - 新接入应用通过申请虚拟账号方式
   - `deptId = 0`，`role = 104`
   - 解决 apikey 绑定 OA 问题

3. **接口扩展**：涉及组织、OA 绑定的接口，增加必填参数 `org_id` & `oa`
   - 组织 ID 权限合法性校验
   - 规则：当前 apikey 仅可操作已有组织的资源（用户相关接口除外）

### 开放接口范围

基于数据开发全流程操作，覆盖从创建数据源 → 创建表 → 任务上线 → 删除任务完整闭环。

### 业务方需求列表

| 业务方 | 需求描述 |
|--------|---------|
| 马建彪 | 认领表到固定 OA |
| 贺海富 | 查询某个表申请过权限的用户 |
| 赖泽阳 | 创建视图表（单张/批量，修改名称和where条件）、认领表、调整视图表审批等级、权限回收、删除表/视图（离职员工）、批量审批 |

## 星河 OpenAPI 在万象调度中的实际应用

万象调度迁移 DP 过程中，基于 DP OpenAPI 构建了运维工具（从马建彪交接文档提取）：

### 使用的 DP OpenAPI 能力

通过 DP OpenAPI 实现以下运维操作：
- **任务执行**：`data_app_execute_handler`
- **拓扑管理**：复制/更新拓扑、创建拓扑任务、修改拓扑 detail
- **任务运维**：批量终止、启动/取消补数
- **任务管理**：group 上下线、删除作业、创建自定义执行器任务

### API 调用方式
万象和 wmda 通过 DP OpenAPI 的标准接口进行操作，使用自定义执行器任务作为工具载体，通过 JSON detail 参数传递执行信号。OpenAPI 的设计解耦了调度运维与业务代码。

## 相关文档

- [方案调研 v1](https://docs.58corp.com/#/space/1523928606890307587)（21KB，本文主要来源）
- [代码编写规范](https://docs.58corp.com/#/space/1518924995169124352)（含 OpenAPI URL 路径规范示例）
- [万象wmda调度功能](https://docs.58corp.com/#/space/1671432159283437568)（DP OpenAPI 在调度的实际应用）
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
