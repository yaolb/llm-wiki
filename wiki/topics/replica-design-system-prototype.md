---
type: topic
tags: [AI原型, 设计系统, Replica, GitHub, GitHubDesign, Copilot, 前端工程, 规范即上下文, 人审门, Agent施工合同, MIT, 自托管]
created: 2026-11-04
updated: 2026-11-04
related_sources: 1
source_url: https://mp.weixin.qq.com/s/dLiDa322Uy2oQWoXnBnXaQ
---

# Replica：给 AI 套上设计规范，生成对齐产品体系的界面原型

> 来源：「梁記士多」《Replica 开源了：给 AI 套上设计规范，生成对齐产品体系的界面原型》（2026-10-29）
> 原文：https://mp.weixin.qq.com/s/dLiDa322Uy2oQWoXnBnXaQ
> 原始素材：`raw/replica-design-system-prototype.md`；快照与 **3 张图**见 `raw/assets/replica-design-system-prototype/`
> **来源性质**：第三方技术解读（基于 GitHub Changelog 与 Replica 官方文档）。
> 仓库核实（2026-11-04）：`github/replica` HTTP 200，**TypeScript**，**MIT**，⭐**163** / fork 23 / open issue 15，创建 **2026-10-15**，最后推送 **2026-11-04**（仍在高频更新）。

## 一句话

**它把「设计系统」从参考资料变成生成约束，再用一道人审门把 AI 产出挡在仓库之外。**

- 设计师先写：组件、模式、文档 → 变成 Copilot 的**指导（guidance）**
- 团队任何人再用**自然语言**在 Copilot 画布里生成可交互原型
- 生成质量的下限，**由团队自己的规范决定**，不由模型训练数据的平均值决定

> 官方定位原文：`an AI-powered prototyping tool created by GitHub Design that helps anyone on your product team turn ideas into interactive prototypes using your own design system.`

## 问题：为什么 AI 出的界面「不像你们家产品」

过去两年 AI 生成 UI 卡在同一个地方：**能看，但不像你家产品**。

原因不复杂——**模型没被喂过你的设计系统**：
- 按钮圆角多少
- 间距是 4 还是 8
- 空状态怎么画
- 文案什么调性

它一概不知道，只能按训练数据的平均值生成。于是每张原型都长得很「AI」。

### 为什么「设计系统」是这类工具的下限

| 通用生成工具 | 真实产品要求 |
| --- | --- |
| 评判标准是「好不好看」 | 必须回答「能不能按我们的方式实现」 |
| 按钮长什么样都行 | 有既定尺寸、状态、禁用样式、加载态、无障碍属性 |

> 模型没被约束时，生成的是一张「**看起来像按钮的图**」；工程师把它翻成代码，**等于从零重写**。

Replica 的做法是**把约束前置**：设计师先把规范写成指导，之后谁都能用自然语言调用。

## 官方公告里三个值得拆的点

- **AI-powered** —— 生成能力来自模型
- **anyone on your product team** —— 目标用户**不只是设计师**
- **using your own design system** —— 约束来自你的规范，**不是模型的默认审美**

官方还专门对比了一句：

> "Unlike generic AI prototyping tools, Replica uses your team's existing components, patterns, and documentation to guide what gets generated."

⚠️ **注意措辞**：官方说的是「**使用团队组件、模式、文档指导生成**」，**不是「逐项精确复用」**。这个区别决定了它是「像」而不是「等于」。

## 它做四件事

1. **用你的设计系统做原型** —— 现有组件、模式、已批准规范作为生成约束
2. **自然语言出可交互结果** —— 描述想探索的交互，结果显示在 Copilot 对话**旁边的画布**上
3. **收反馈** —— 发布到**组织自托管**的 Replica Hub，同事可试用留言
4. **可改造** —— **MIT** 开源，工具链与规范都能按团队习惯改

## 四件套（可拆开用）

| 组成 | 作用 | 是否必需 |
| --- | --- | --- |
| **Starters** | 现成起始应用，带共享的 Copilot skills | 新建仓库时选一个 |
| **Replica 插件** | 给 Copilot 加一块画布，原型跑在对话旁边 | 用画布就需要 |
| **Replica Hub** | 可选、自托管，托管已发布原型与评论 | 只有团队协作才需要 |
| **GitHub build action** | 发布到 Hub 时构建原型 | 本地开发不需要 |

**两个 starter**：
- **Minimal** —— 一个小例子，用来适配你自己的设计系统
- **CoreAI Sandbox** —— 已带导航布局与按钮菜单，用的是**微软 CoreAI** 的设计系统

> 拆开用的意义：**你不用先搭服务器就能开始**。本地原型不需要 Hub、不需要 Docker、不需要域名，**甚至不需要一个 GitHub 仓库**。

## 本地跑起来要什么

- **GitHub Copilot app**（要登录）
- Git，配置好 `user.name` / `user.email`
- **Node.js + npm**（版本对齐 `package.json` 的 `engines.node`）
- `bash`、`curl`、`tar`（下载 starter）
- **macOS 或 Linux**（**Windows 不在支持列表**）
- `lsof`（画布靠它找本地端口）

**模型两条路**：Copilot 套餐里的托管模型，或 **BYOK** 接自己的供应商（公开预览，费用按你自己的供应商算）。

> 只是**查看和评论**原型的话，**不需要 Copilot 订阅**。

## 最关键的一步：先把规范喂进去

这是 Replica 和「让 ChatGPT 画个页面」的**真正区别**。

装好 starter 后，在 Copilot 对话里跑一条命令：

```
/setup-skills
```

然后交给它**三类已批准的来源**：
- 产品文档
- 设计系统文档
- 团队在用的组件包或 token 包

Copilot 读完会**起草**一份构建原型的指导 → **先给你看** → 你按团队流程**审核、提修改** → **再单独授权**它落盘。

> 官方文档写得很直白：**没有经过审核的指导，你只能探索 starter**，等于还没验证 Replica 会不会遵守你的设计系统。

### 这条门为什么值得抄

**「先起草、再审核、再授权」**——它把 AI 的产出变成了**要走审批的产物**，而不是直接进仓库的改动。

> 对比大多数 agent 工具：生成即写入，出错靠事后 review。Replica 把审批**前移到写入之前**。

## 写 prompt 的姿势：一份「施工合同」

文档给了示例 prompt，写法值得学：

> Build a searchable project list using our approved design-system guidance and sample data. Include an empty result state and a way to clear the search. Keep it separate from our live product. Show it in the Replica canvas. Before editing, check that the reviewed app and guidance are committed. If guidance or starting pages changed after setup, ask for my approval to save those changes in a local commit before creating the prototype branch. Use a separate branch for this prototype. Leave the default branch unchanged. Ask for approval before making any commits. Do not push or publish anything.

**五个要点**：

1. **先说清要什么交互和边界状态**（空结果、清除搜索）
2. **约束隔离**：单独分支、不动默认分支
3. **禁止外溢**：不推送、不发布
4. **动手前确认基线已提交**
5. **任何提交前都要问**

> 这其实是一份「**给 agent 的施工合同**」，跟 Replica 关系不大，**换成任何写代码的 agent 都适用**。

## 团队协作：Hub 是自托管的

Hub **不是 GitHub 提供的服务**，是你们自己部署。要求：

- 一台 **Linux 服务器**，支持 Docker 与 Docker Compose，数据可持久化、有备份
- **一个独立域名**，含**通配子域名**的 DNS 与 HTTPS（每个原型有自己的预览地址，**共用子域不行**）
- 组织下能安装 Replica 的 **GitHub App**，并运行它的构建 workflow
- **有人负责这台机器**：密码、访问密钥、备份

**数据这块别想当然**：
- Hub 把发布与评论活动记在自己的数据库，**保留 90 天**
- 可配置导出到 **Segment / Mixpanel / 自建 HTTPS 端点**
- **不会自动回传 GitHub**
- 官方明说：**自托管不等于数据不出组织**——GitHub 服务和你的模型供应商各有各的条款

> 官方也提醒：**用样例数据做原型，不要放真实客户数据或线上系统密钥**。

## 现状与局限（作者自己列的）

- **很新**：仓库 10-15 创建、10-28 公告；写稿时（10-29）**43 star、29 个 open issue**
- **强依赖 Copilot**：官方工作流围绕 GitHub Copilot app 设计，没有 Copilot 或没登录，**画布这条路走不通**
- **只支持 macOS / Linux**：Windows 未提支持
- **「像你们家产品」是概率不是保证**：官方措辞是「指导生成」，结果仍可能用错组件或漏规范细节
- **Hub 运维成本是真的**：服务器、域名、通配 HTTPS、GitHub App 审批、备份，对小团队不算轻
- **MIT 是好事，但边界要看清**：代码开源、Hub 自托管，但**模型调用、Copilot 订阅、设计文档分发**各有成本与条款

## 落地三个坑

**坑一：规范没写好，生成质量照样差**
如果设计文档只有一张 Figma 图，没有组件命名、状态说明、使用边界，模型只能猜。
→ **用 Replica 之前，先把规范写成文本**。这件事本来就该做。

**坑二：把原型当成「可以直接上线的东西」**
它产出的是**可交互实验**，不是产品代码。官方自己提示用样例数据、别放真实数据。
→ 越界使用等于给自己埋事故。

**坑三：以为 Hub 装完就完事**
服务器、独立域名、通配 HTTPS、GitHub App 审批、备份与保留策略，**是持续运维**。
→ 小团队先只用本地路径，把 Hub 留到确实需要收反馈时再上。

## 谁值得试

| 角色 | 建议 |
| --- | --- |
| 被「AI 出的图不能用」折磨的设计师 | 花半小时走本地路径：装 starter → `/setup-skills` → 喂设计规范 → 看第一张生成页 |
| 做内部工具平台的团队 | 读它的**文档结构**：起草 → 审核 → 授权 → 分支与审批隔离，**这套流程跟工具无关，可直接搬** |
| 只想「让 AI 画个界面看看」 | Replica **有点重**——它假设你有设计系统、有规范、有审批流程 |

> 反过来说：**它值钱的地方恰恰是这个假设。**

## 附：用 DeepSeek 替换 Copilot 的可行性（2026-11-04 代码核实）

### 结论

**可行，而且不需要改 Replica 一行代码——前提是接受「宿主仍是 Copilot app，只换模型」。**

两条官方证据：

1. **Replica 自己的文档**（`docs/local-prototyping.md`）写明：
   > Copilot requires GitHub sign-in… You can use a Copilot plan or **connect your own model provider**.
2. **GitHub BYOK 文档**支持列表含 **“Any OpenAI-compatible HTTP endpoint”**，配置项为 **显示名 / Base URL / API Key**。DeepSeek 的 `/v1/chat/completions` 正是 OpenAI 兼容格式。

### 配置路径（零改码）

```
Copilot app → 设置 → Add LLM models (BYOK) → 选择 OpenAI-compatible
  Base URL: https://api.deepseek.com/v1
  Model:    deepseek-chat
  API Key:  <你的 key>
→ 模型选择器里选 DeepSeek → Replica 插件与画布照常使用
```

### 但要注意五个硬约束

| 约束 | 说明 |
| --- | --- |
| **宿主换不掉** | BYOK 只替换模型，Copilot app + GitHub 登录仍是必需项；Replica 是**Copilot 扩展**（`.github/extensions/replica-prototype/`，manifest 仅 `{"name":"replica-prototype","version":1}`） |
| **工具调用可靠性** | 画布命令走 `agent-commands/index.mjs`（invoke + 5s 超时 + 队列）；模型必须稳定产出合法工具调用，否则画布不动 |
| **视觉能力** | 仓库有 `capture-review-revision` 截图链路；DeepSeek 主力对话模型是纯文本，需 DeepSeek-VL 或放弃图像评审 |
| **长上下文与规范遵守** | Replica 的价值就是「按你的设计系统生成」；模型指令跟随弱，就退化成普通 AI 生成 |
| **数据出境** | 设计系统文档与代码会发往 DeepSeek 服务器；企业合规可能是硬阻断点 |

### 如果连 Copilot 也不想要（三条路）

- **A 换模型（推荐先做）**：Copilot BYOK + DeepSeek，**0 改码**，1 小时可验证
- **B 换宿主**：保留 `starters/` 与画布渲染资源，把 `agent-commands` 的 invoke 协议改写成 MCP Server / CLI，再接入 Claude Code、Codex、OpenClaw——**中等工作量**（需复刻画布桥接与插件安装流程）
- **C 重做产品**：把 Replica 当参考实现重写，**大工程**，不建议

### 最小验证（约 1–2 小时）

1. 申请 DeepSeek key，先用 `curl` 验证 `/v1/chat/completions` 与 function calling 可用
2. Copilot app 里加 BYOK provider，选中 DeepSeek
3. 建 Replica starter 仓库 → 开画布 → 跑 `/setup-skills` → 喂一份小型设计规范
4. 同一 prompt 分别用 DeepSeek 与 Copilot 原生模型生成，比较四项：**组件复用、规范符合、工具调用成功率、单页成本**

> ⚠️ 待实测：`deepseek-reasoner` 历史版本不支持 function calling，画布链路应优先用 `deepseek-chat`；BYOK 对 Copilot 高级功能（云会话、hooks、计费）的支持范围官方未逐项说明。

## 与库内已有线索的关系

- [[上下文工程 (Context Engineering)]] —— Replica 是「**规范即上下文**」的工程样本：不是把设计系统塞进提示词，而是编译成 Copilot 可调用的 skills，并留下审核痕迹
- [[AI 编程 (AI Programming)]] —— 同一问题的界面侧：代码侧靠测试与类型约束，界面侧靠**设计系统约束 + 人审门**
- [[应用开发三件套]] —— 可对照「规范/工具/验收」三段式在本例中的落法
- [[Pi Agent 的 Context 管理：组装、增长、压缩与重建]] —— 同属「上下文不是静态资产」：guidance 变更要重新审核，而不是一次注入永久有效

## 待验证 / 证据边界

- 本篇为**第三方解读**，官方原文（Changelog）未逐句核对；引用的两段英文均出自文章转录
- 仓库元数据经 API 核实：⭐163 / fork 23 / issue 15（**文章写稿时为 ⭐43 / 29 issue**）——一周内 star 近 4 倍，**issue 从 29 降到 15**，说明维护在跟
- **生成质量无任何量化指标**：没有「组件复用率」「规范符合率」之类的数据，官方口径也只是「指导生成」
- 「不需要 GitHub 仓库、不需要 Docker」为文章对官方文档的归纳，**未逐项实测**
- Hub 的 90 天保留期、导出端点行为**未实测**；「不回传 GitHub」是官方声明
- BYOK 的实际可用性、支持哪些供应商，文章未展开
- ⚠️ **不要把它当生产工具**：官方定位就是原型与实验，且强制依赖 Copilot 生态
