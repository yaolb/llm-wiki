---
type: topic
tags: [编程语言理论, Effect-Systems, 动态组合, Agent-Harness, Cordis, DeepSeek, PL]
created: 2026-09-09
updated: 2026-09-09
related_sources: 1
---

# 时空可组合性编程范式 — Cordis 与动态组合演算

> 论文分析：**A Programming Paradigm for Spatiotemporal Composability**（arXiv 2608.25512，92 页，Yifan Shi / Wei Zhang / Tianyi Cui，北京大学 + DeepSeek-AI，2026-08）。原始 PDF 归档于仓库根 `raw/arxiv-2608.25512-spatiotemporal-composability.pdf`。

## 概述

把类型理论里的 **effect（副作用）和 coeffect（环境依赖）** 从编译期静态分析"下沉"为**运行时一等机制**，给"运行中动态装卸组件"一个形式化基础——最终目标指向**自我演化的 Agent Harness**（模型自己修改自己的组件：不停机、不丢状态、依赖自动重连）。论文同时交付三样东西：一套形式模型（revertible effects + reactive coeffects + context paradigm）、一个操作语义演算（含 Preservation / Progress / Confluence 等元定理）、一个生产实现（Cordis 元框架 + Koishi 4000+ 插件生态案例）。

## 1. 问题：动态组合缺理论

现代软件（插件系统、自演化 agent harness）要求运行时动态加载/卸载组件，但其理论基础远落后于静态组合。论文识别出两个正交维度：

| 维度 | 含义 | 静态世界的对应物 |
|------|------|------|
| **时间可组合性**（temporal） | 组件卸载时，它对共享环境的一切修改（资源分配、事件注册、状态变更）被**完整、安全地逆转** | 词法作用域 / RAII / bracket pattern |
| **空间可组合性**（spatial） | 组件能**声明、发现、响应式管理**彼此的依赖 | 模块 import 解析 |

**动机证据扎实**：VSCode 前 100 插件中 **87 个含可执行代码**，卸载任一个都需重启整个 extension host（deactivate 只是宿主进程终止时的优雅关闭回调）；`extensionDependencies` 几乎无人使用（仅 7 个），因为扩展点 API 扁平、`exports` 无类型（`any`）。OS 进程重启 / K8s 容器编排只是**粗粒度替代品**：重启丢掉全部缓存/连接/半成品计算；容器级编排表达不了同地址空间内的组件依赖。

**Agent harness 是真正的靶子**：未来的 harness 会持续生成并部署自己的组件修改（工具、权限、记忆、子代理编排），且几乎没有人工监督——没有时间可组合性，每次自我修改都强制重启、中断 in-flight 任务，坏修改甚至能杀死负责恢复的进程；没有空间可组合性，依赖变更只能靠各模块 ad hoc 适应。

## 2. 方法：三个核心机制 + 一个演算

### 2.1 可逆效应（Revertible Effects）→ 局部时间可组合性

每个副作用建模为**携带显式逆变换的函数**：

```
effect : Γ → Γ × (Γ → Γ)
         输入上下文 → (新状态, 逆函数)   ← 逆函数交给运行时保存
```

- **effect context**：`∂Γ := Γ × (Γ→Γ)`，第二分量 φ 是"迄今所有逆函数的复合"（恢复累加器），卸载组件 = 应用 φ；
- 逆函数复合用 **twisted composition**（逆序累积）：`(f₁,g₁)∘(f₂,g₂) = (f₁∘f₂, g₂∘g₁)`——数学上是变换幺半群与其反幺半群的积 `M × Mᵒᵖ`，卸载天然 LIFO；
- `track` 是幺半群同态（逐个跟踪 = 一次跟踪复合，Theorem 5），`recover` 只依赖不变量 `φ(γ)=γ₀`；
- 升级为 **effect iterator**（每次 yield 一个逆函数，等效于物化的 delimited continuation，直接映射到主流语言的 `yield`/生成器）：解决"逆函数依赖应用时状态"与"选择性撤销单个效应"两个问题。

### 2.2 响应式余效应（Reactive Coeffects）→ 局部空间可组合性

把 IoC 容器形式化为**依赖类型化的偏函数表** `Σ = (k:K) ⇀ V k`（key 绑定 value type，静态类型安全）：

- 组件声明 **coeffect specification** `d ⊆ K`；满足性 `σ ⊨ d` 可判定；
- **每次上下文变更都被按规格分类**为 `activating / deactivating / neutral`（notify），驱动组件激活与停用——依赖消失时组件安静下线而不是报错，依赖恢复时自动重启；
- 关键协同：`set(k,v)` 本身就是 Σ 上的 effect function——**余效应操作就是效应，效应自动可逆**（依赖注册的撤销不需要额外机制）；
- 扩展 **isolation**（同一 key 在不同 realm 解析到不同绑定）与 **interception**（访问时横切修改，如外层上下文约束子组件权限）。

### 2.3 上下文范式（Context Paradigm）→ 从局部到全局的桥

统一 `Γ∞ := μΓ. Γ × (Γ→Γ) × Σ`（递归不动点类型），效应与余效应**全部经由同一个 context 中介**：

- 每个 key 携带 `(值类型, 操作集)`，操作集诱导该 key 上的**观察等价** `≃ₖ`（两个值不可区分 = 没有任何操作序列能区分它们）——诚实面对"物理状态恢复不了"（malloc 后 free 不还原堆布局、生成名不复原），所有等式改为 **up to ≃** 读；
- 由此定义**独立性**：不交叉声明/提供任何 key 的组件效应天然独立；交叉的 key 需要操作**可交换性**证明（作为 witness 由提供者随 key 发布）。trace theory 式论证：独立操作可重排，端点不变。

### 2.4 动态组合演算（§4）+ 元定理

组件 = 三元组 `(d 依赖声明, p 提供声明, e 见证过的效应函数)`；实例化为 **fiber**（生命周期状态机 `Inactive → Reloading → Active → Unloading`，带 parent 树、retirement 标志、committed view ω 记录每个依赖由哪个 fiber 提供）。编排规则（插入/退役）+ 生命周期规则（自主激活/停用）。元定理把单组件保证提升到任意交错系统：

> **Preservation · Temporal Composability · Spatial Composability · Progress · Confluence**（§4.3）

空间可组合性的全局形式最见功力：**停用一个 fiber 前，依赖它的所有 fiber 已先停用**（L-Unload 的 guard），且重载后依赖方自动重新激活。

## 3. 实现：Cordis 元框架 + Koishi 生产案例

- **Cordis**（TypeScript）三层：核心库（`ctx.effect` 是唯一的上下文变更原语，逆函数折叠成 dispose 链；`@@store` / `@@isolate` / `@@intercept` 三个 symbol 槽实现余效应）→ 组件加载器（配置调和 + **HMR 热替换**：修订运行中的 fiber = 复合规则"退役→停用→重插同名"）→ 应用框架。
- **Koishi 案例研究**：基于 Cordis 的聊天机器人框架，**四年、4000+ 社区插件**的生产验证——控制台禁用插件即原地逆转效应；切换数据库后端只重启依赖方。作者诚实标注：这是**存在性/采用性证据，不是定量对照**（开销、开发效率 vs 基线未测）。
- 表 2 给出理论与实现的逐条对应（θ 状态机 ↔ fiber.state、累加器 ↔ fiber.dispose、ω ↔ fiber.committed…），工程与形式化贴合度高。

## 4. 局限

1. **系统边界是纪律不是保证**（§6.1）：只有"能独占修改且能还原"的位置在 Γ 内可逆；跨边界的 **emission**（写文件、发网络包）本质不可逆，只能靠 withholding（延迟提交）或 compensation（补偿事务，如退款）——补偿的交换性需对更粗的等价重新证明。
2. **witness 不校验**：逆函数真能逆转、操作真能交换，是**组件作者的义务**，运行时不验证——Theorem 68 直接诉诸它。
3. **无定量评估**：单生态、单语言（TypeScript）、观察性研究。
4. "语言无关"是主张：只在 JS/TS 生成器上落地，对 JVM/系统级语言的可移植性未验证。

## 5. 评价与定位

**真正的新东西**：效应/余效应系统（Koka、OCaml 5、Granule 做编译期）此前都绑定词法作用域，没人把它们做成**运行时一阶机制**支撑动态装卸。"twisted composition 幺半群 + 观察等价 + trace theory 交换性"这条数学路线干净且定理完整，92 页形式化密度极高。

**DeepSeek 为什么发这篇**：结论明说 future work——把 Cordis 用到**自演化 agent harness**。当 agent 频繁自我修改（装新工具、换记忆模块、改子代理编排）时，"热替换 + 完整回滚 + 依赖自动重连"正是缺失的基础设施。Cordis 不是新东西（Koishi 社区已在用 v3），**新的是给它补齐了元理论**——典型的"生产系统先行、理论补位"论文形态，也是 DeepSeek 做 infra 纵深的一贯风格。

**Agent 基础设施拼图**：[[LoopArena：把模型的 Loop 调度能力单独拎出来考]] 考的是"调度能力"，[[J-Space 插件让 DeepSeek V4 Pro 0813 全面超越 Fable 5]] 做的是"推理时控制"，本文补第三个拼图——**harness 自身的热可组合性**。凡做长时运行、可热更新工具/记忆/子代理的 agent 平台，可直接借用其词汇表：`ctx.effect` 单原语、LIFO dispose 链、规格驱动的激活/停用、realm 隔离。落地成本低（TS 生成器即可），Cordis/Koishi 是现成开源实现。

## 相关概念

- [[AI Agent（智能体）]] — 自演化 harness 的宿主语境
- [[Agent记忆系统]] — 可被热替换的 harness 组件之一
- [[Loop Engineering]] — 同属 agent harness 工程化的相邻方向
- [[DeepSeek]] — 本文作者机构之一，infra 纵深布局
