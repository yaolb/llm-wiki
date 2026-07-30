---
pageType: synthesis
id: synthesis.万象调度方案-wmda-dp迁移与中台dp调度框架
title: 万象调度方案 — wmda→DP迁移与中台DP调度框架
sourceIds:
  - resource://meishi-scheduling-survey
claims: []
status: active
updatedAt: 2026-07-30T06:27:11.872Z
---

# 万象调度方案 — wmda→DP迁移与中台DP调度框架

## Notes
<!-- openclaw:human:start -->
<!-- openclaw:human:end -->

## Summary
<!-- openclaw:wiki:generated:start -->
# 万象调度方案 — wmda→DP迁移与中台DP调度框架

## 概述

万象调度经历了从 wmda 自建调度 → DP 平台调度的架构迁移。同时 DP 平台本身也由统一调度系统（dp-duolong）提供中台化调度能力。本文梳理这两条线的调度实现。

## 一、万象调度迁移：wmda → DP

### 背景

wmda 调度与业务代码高度耦合，运维复杂度高、扩展性差。项目组决定将 wmda 离线调度统一迁移至 DP 平台。

### 迁移方案

#### 架构图
采用 DP 管理拓扑关系，通过**自定义执行器**执行具体任务。支持两种任务类型：
- **shell 类型**
- **SQL 类型**

#### 代码管理
通过 igit（自建 Git）管理物理机上的代码。一次修改全部拓扑生效。

#### 运维方式
基于 DP OpenAPI 构建运维工具（6.2 ~ 6.4 章节）

### 自定义执行器

#### 任务参数结构
```json
{
  "gitUri": "git@igit.58corp.com:teu_dm/test-script-self-worker.git",
  "gitBranch": "master",
  "systemName": "wanxiang",      // wanxiang / wmda / realtag / relation
  "group": "${brandId}_${dsId}",  // 万象或wmda项目
  "projectPath": "",              // 工程目录上一级
  "programVersion": "",           // 程序版本（igit拉取目录）
  "scriptName": "",               // 脚本名称
  "hadoopAccount": "",
  "sparkVersion": "2.3",
  "scriptType": 0,                // 0=shell, 1=sql
  "bizArgs": [                    // shell 顺序传递，SQL 按名替换
    { "argValue": "TASK_COMPLETED", "argType": 2 },
    { "argValue": "${startDate}", "argType": 0 }
  ],
  "sparkSqlEnv": { "queue": "", "driver-memory": "", "executor-memory": "" },
  "sparkSqlConf": { "spark.dynamicAllocation.maxExecutors": "30" }
}
```

#### 内置变量
- **万象执行器**：${ifRedis}, ${ifHbase}, ${ifWtable}, ${ifEs}, ${ifCk}, ${brandId}, ${dbName}, ${tableName}, ${executeBatchId} 等30+变量
- **通用内置**：${_group}, ${_systemName}, ${_executeBatchId}, ${_projectId}, ${_projectCycle}, ${_brandId}, ${_dsId}

#### 执行流程
1. 检查代码存储目录是否存在（不存在则拉取）
2. 根据执行 ID 创建临时目录
3. 处理 shell / sql 参数（DP时间变量替换、内置变量替换）
4. 生成可执行的临时 shell 脚本
5. 启动 shell 脚本执行具体任务

### DP运维管理工具

#### 任务管理

| 功能 | 说明 |
|------|------|
| 创建自定义执行器任务 | 创建任意类型任务，归属 xn_offline_data_utils |
| 复制/更新拓扑任务 | 基于模版 group 批量复制拓扑（自动替换 group、动态依赖、补数流程） |
| 修改拓扑任务参数 | 修改指定 group 中任务的 detail 信息（如 spark env） |
| group 上下线 | 动态上下线数据源（标签治理后下线） |
| 删除作业 | 按 job ID 批量删除 |

#### 运维操作

| 功能 | 说明 |
|------|------|
| 终止任务 | 按标签/时间范围批量 kill 运行中任务 |
| 启动补数 | 按标签+日期范围启动补数（支持串行/并行） |
| 终止补数 | 按 flow_inst_id 取消补数 |

#### 代码管理/上线
- 通过 igit 管理 shell/sql/脚本/jar 包
- **灰度上线**：通过修改 `projectPath` + `programVersion` 引用不同目录，灰度粒度为 group

#### Handler 清单
- `data_app_execute_handler` — 核心任务执行
- `data_app_create_work_task` — 创建任务
- `data_app_create_update_topo` — 复制/更新拓扑
- `data_app_alter_topo_detail` — 修改 detail 参数
- `data_app_topo_on_or_offline` — 拓扑上下线
- `data_app_run_groups_flows` — 启动补数
- `data_app_cancel_groups_flows` — 取消补数
- `data_app_kill_groups_tasks` — 批量终止
- `data_app_batch_remove_jobs` — 删除任务

### 规范体系

**任务命名**：`{system}-{group}-{taskName}`
**标签规范**：system / group（全局唯一） / first（首任务）/ end（结束任务）
**告警规范**：`{alertType}-{system}-{group}`，含 ExecuteError / DependDelay / CompleteDelay 三类
**补数规范**：`auto-flow-{system}-{group}`

### 命名与告警规范
- **任务命名**：`{system}-{group}-{taskName}`
- **标签规范**：system / group / first（首任务）/ end（结束任务）
- **告警规范**：`{alertType}-{system}-{group}`，含 ExecuteError / DependDelay / CompleteDelay
- **补数规范**：`auto-flow-{system}-{group}`

## 二、新业务接入流程

1. 确认是否接入 DP 调度
2. 创建模板 group：配置好完整拓扑链路
3. 通过运维工具复制拓扑到目标 group
4. 配置告警规则
5. 配置补数流程
6. 上线验证

## 三、DP 统一调度系统设计方案（dp-duolong）

DP 调度属于中台能力，位于 **星河 > 58DP数据开发平台 > dp-duolong** 目录下。

### 解决的问题
- 业务代码和调度代码耦合高
- 扩展能力差，不支持任务编排
- 无上下文传递
- 不支持触发式调度、发布/订阅
- 中心化调度带来的服务暂停/灰度问题
- 资源控制缺乏、任务优先级、依赖检查效率、跨周期回收
- worker 跨环境部署
- 调度 master 无法提供高并发 API

### 模块架构

| 模块 | 功能 |
|------|------|
| Scheduler | 调度核心，负责触发、分派、优先级管理 |
| Worker | 执行器，无中心分布式架构 |
| Resource Management | 机群管理、资源监控、弹性伸缩 |
| Topology Management | DAG 拓扑创建、依赖管理、任务提交 |
| Task Management | 任务流状态、上下文、生命周期管理 |
| Job Management | Job 实例管理 |
| Pub/Sub | 结果推送，与用户系统打通 |
| Log Service | 统一日志（HBase / ELK） |
| Rule Engine | 拓扑编排规则（groovy / drools） |

#### Scheduler — 虚中心分布式
- master 只负责收集 scheduler 节点状态，对外提供集群 API
- 支持丰富的触发模式：quartz 固定调度、接口触发等
- 在线灰度升级：jar 包与框架剥离，refresh 热加载

#### Worker — 无中心分布式
- 统一的 API 编程模型（参考 xxl-job 执行器模式）
- **插拔式执行组件**：细化组件粒度、可随意组合
- 执行器与 worker 解耦：worker 构建容器、限制内存、异步调用获取结果
- 节点 failover：失联时任务存本地，重连恢复
- 任务 redo：执行完→发结果到订阅服务→任务管理根据结果决定重试

#### 优先级队列设计（通道设计）
- 将优先级转化为**通道**，不同通道对应不同优先级
- 高峰时可打开/关闭通道控制流量
- 队列实现可切换：redis / mysql / 内存(ringbuffer) / kafka
- master 和 worker 拉取可用统一负载均衡策略

#### 负载均衡策略
支持轮询、加权轮询、随机、Hash、最小连接数、加权最小连接数、最短响应时间、一致性 hash

#### 资源管理
- 机群资源统一 API
- 监控预警
- 节点扩容/缩容
- 多租户流控（部门/个人）

#### 拓扑管理
- DAG 创建 → 拓扑构建 → 拓扑解析 → 拓扑修改
- 任务提交：软连接方式（不强行调起）
- 依赖检查：check 方式
- 图查询：基于 BFS/DFS 实现，或基于图数据库 neo4j

### 对比分析
文档参考了 LTS、scheduler（苍穹）、dp-duolong、DolphinScheduler（易观）、xxl-job。

## 相关文档

- [万象wmda调度迁移](https://docs.58corp.com/#/space/1666034589757386752)（入口页）
- [万象wmda离线调度任务迁移DP方案](https://docs.58corp.com/#/space/1671432159283437568)（20KB, 主要方案来源）
- [新的业务接入](https://docs.58corp.com/#/space/1716300603388375042)（接入模板）
- [新节点部署方案](https://docs.58corp.com/#/space/1684164943680696321)（节点部署）
- [DP统一调度系统设计方案](https://docs.58corp.com/#/space/1518790320429522944)（43KB, DP调度中台方案）
<!-- openclaw:wiki:generated:end -->

## Related
<!-- openclaw:wiki:related:start -->
- No related pages yet.
<!-- openclaw:wiki:related:end -->
