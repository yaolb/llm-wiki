---
type: topic
tags: [Pi Agent, 上下文工程, Context, compaction, KV-Cache, Agent-Harness, 长程任务, Prompt]
created: 2026-09-28
updated: 2026-09-28
related_sources: 1
source_url: https://mp.weixin.qq.com/s/Ge5MRAlsqs97MdbINSDSiw
---

# Pi Agent 的 Context 管理：组装、增长、压缩与重建

> 素材分析：微信公众号「大模型智能」（转载「青稞AI」，作者 cecilia）《到底什么是 Context？万字长文谈 Pi Agent context 管理》（2026-09-28），原文归档于 `raw/pi-agent-context-management-wechat.md`。
> Pi 即 [[Pi — 最小化终端编码 Agent]]（earendil-works，MIT）。实体页讲"是什么、怎么用"，**本篇补的是内部机制层**。
> 文章起点是一个争论：**"Skill 到底是 Prompt 还是 Context？"** 作者认为 Prompt 是**相对静态的指令设计**（提前定义"应该怎么做"），Context 是 **Agent 运行中动态形成的信息环境**（决定"此刻基于哪些信息来做"）。

## 一、Context 的五个组成部分

从一次 LLM 调用看，Context 由五部分构成：

| 组成 | 性质 | 内容 |
|------|------|------|
| **System Prompt** | 静态前缀 | 身份、规则、工作方式，也可能含 Memory、环境信息 |
| **Tool Definitions** | 静态前缀 | 可用工具及参数格式 |
| **User Messages** | 动态 | 用户输入，也可能含 RAG 动态检索的外部知识 |
| **Assistant Messages** | 动态 | 模型此前的文本、Reasoning、Tool Calls |
| **Tool Results** | 动态 | 工具执行结果，为下一步决策提供新信息 |

**关键认识：这些信息不是由 Model 自己管理的。** 三者分工：

- **Model** —— 基于当前 Context 决定下一步
- **Harness** —— 组装和管理 Context、校验并执行工具
- **Environment** —— 承载真实状态，产生新的执行结果和观察

三者不断循环，Context 持续变化。

### KV-Cache 友好的三条原则

1. **保持前缀稳定** —— System Prompt、Tool Definitions 等静态内容尽量固定，避免频繁修改导致缓存失效
2. **动态信息向后追加** —— 时间、状态、工具结果放到 Context 尾部，**不要回头修改已有前缀**
3. **使用标准消息结构** —— 优先用 API 原生的 system / user / assistant / tool 格式，避免自行拼接 Prompt

> 这三条和 [[Prompt Caching]] 是同一件事的两面：缓存命中率取决于"前缀有没有被回头改"。

## 二、Pi 的两个基础层次

### Runtime 与 Session 的分工

- **AgentSession** —— 管"**这个会话怎么跑**"：持有核心 Agent，处理 `prompt()` / `abort()` / `continue()`、任务队列、重试、Compaction，以及消息、System Prompt、Tool、扩展事件的管理
- **AgentSessionRuntime** —— 外层**生命周期容器**：持有当前 AgentSession，维护 `cwd`、`settingsManager`、`modelRuntime`、`resourceLoader` 等 Services

> 发一个 Prompt → 主要走 AgentSession 内部流程；切换 Session → 由 Runtime 完成替换和重新绑定。

### Services：被容易忽略的"环境污染"问题

**为什么不能只替换一个 AgentSession 对象？** 因为 Session 与 `cwd` 强绑定，而 `cwd` 决定项目配置、AGENTS.md、Extensions、Skills、Prompt Templates、System Prompt、模型 Provider。

于是会出现这种错配：
> 当前运行的是 repo-b 的 Session，但实际加载的仍然是 repo-a 的配置、Skill 和扩展。

**解法**：引入 `AgentSessionServices`，把与运行环境相关的依赖统一封装。新建/切换/Fork/恢复 Session 时，**先按目标 Session 的 cwd 重建 Services，再创建新的 AgentSession**。

> 一句话：**切换 Session 时，不只切换会话状态，还要同步切换它所依赖的完整运行环境。**

## 三、Context 的标准化表示与 Agent Loop

```
Context = {
  systemPrompt,  // 独立字段，不进 messages 数组，直接传给模型适配层
  messages,      // 当前会话里模型可见的消息历史
  tools          // 当前这轮模型可调用的工具列表
}
```

messages 主要三种类型：**UserMessage / AssistantMessage / ToolResultMessage**。

**典型 Agent Loop**：
```
UserMessage → AssistantMessage(Tool Call) → ToolResultMessage → AssistantMessage ...
```

### AssistantMessage：工具调用不是独立消息

`content` 可以是混合数组，同时含 text 和 toolCall：
```js
content: [
  { type: "text", text: "我先读取一下文件。" },
  { type: "toolCall", id: "call_123", name: "read", arguments: { path: "src/index.ts" } }
]
```

**Tool Call 本身不是一条独立消息，而是 AssistantMessage.content 的一部分。** 它记录的是"模型决策"；真正把执行结果带回 Context 的是 ToolResultMessage。

### ToolResultMessage 的产生链路

```
AssistantMessage → Tool Call → 串行/并行执行 → beforeToolCall Hook
→ Tool.execute() → afterToolCall Hook → ToolResultMessage → 写回 Context
```
• 执行前完成**工具查找、参数校验**
• **异常会被转换成错误结果，而不是直接中断 Agent Loop**
• 通过 `toolCallId` 与对应的 Tool Call 关联

### Skill 的两阶段进入

Skill **默认不会把完整 SKILL.md 放进 Context**，而是先以**索引**形式出现在 System Prompt：
```
<available_skills>
  <skill>
    <name>qa-expert</name>
    <description>Golang 分布式存储测试专家...</description>
    <location>/path/to/qa-expert/SKILL.md</location>
  </skill>
</available_skills>
```
• **阶段 1**：System Prompt 里只有 name / description / location
• **阶段 2**：任务匹配后，Model 调用 `read` 读取 SKILL.md，正文才进入后续 Context

> 这正好回答了文章开头那个争论：**Skill 索引是 Context 的一部分，Skill 正文是按需加载的 Context，而 SKILL.md 的写法本身是 Prompt 设计。**

## 四、长程任务的 Context 管理

### Run 与 Session 的关系（最容易被误解的一点）

```
_runAgentPrompt(用户输入)
 ├─ agent.prompt() → runLoop
 │   ├─ 模型回复 → 工具执行 → 结果写回 Context（反复）
 │   └─ 模型 stop → agent_end
 ├─ _handlePostAgentRun() → 可能执行 retry / compaction
 └─ finally → 清理本轮临时状态，**不清空消息历史**
```

**`agent_end` 结束的是这一轮 Run 对 Context 的持续更新，而不是 Context 本身。** 已产生的消息沉淀到 Session State，成为下一次 Run 的起点。

新 Prompt 拿到的历史：
• **未发生 compaction**：完整历史 + 新 UserMessage
• **发生过 compaction**：历史摘要 + 压缩后新增消息 + 新 UserMessage

> **只有 compaction 才会真正改变历史的形态。**

### Context 预算管理：工具输出的三步策略

bash 等工具一次可能产生海量日志，容易撑满窗口。Pi 的策略：

1. **预算内，全量保留**
2. **超过预算，只保留预览**（保留有限尾部）
3. **完整输出落盘，按需读取** —— 完整结果写临时文件，把**文件路径返回给模型**，需要细节再 `read`

实现要点：**边产生边处理**，不是等命令结束再截断；清理 ANSI/乱码/换行；内存只维护有限大小的尾部。预算**同时受行数和字节数限制（如 2000 行 / 50KB，任一先到即截断）**——这样既处理大量短行，也防止单行超大 JSON 绕过限制。

> 本质：把工具结果从"**全部推入 Context**"改成"**有限预览 + 按需读取**"。

### Failover 的两个层次

| 层次 | 行为 | Context 影响 |
|------|------|-------------|
| **Provider 层** | 用同一份 Model Input 重新发起请求 | **不修改 Agent Context**（这一轮还没结束） |
| **Session 层** | Agent Loop 已失败，失败消息已进入 Context | **先回滚失败的 AssistantMessage**，从最近有效 Context 重启 Loop |

> 两条路径最终发给模型的 Model Input 可能完全相同，但**状态路径不同**。这说明 Context **不只是持续追加，还需要支持回滚、恢复和重新构建**。

## 五、Compaction：Context 的降维与重建

### 三个触发时机

1. **一次 Agent Run 结束后** —— 检查是否接近上限
2. **新 Prompt 发送前** —— 先压缩，再把新 UserMessage 接到压缩后的历史
3. **用户手动 `/compact`**

触发条件两种：接近 context window 上限（提前压缩）/ 已经溢出（压缩后重试）。

> **RunLoop 负责 Context 的增长，Compaction 负责 Context 的降维与重建。**

### 九个实现细节（文章精华）

1. **切点选择**：从最近消息向前按 token 计算，用固定 **recent-message 预算**保留较新 Context。
   ⚠️ **硬约束：不能直接切在 Tool Result 上**——Tool Result 依赖前面的 Tool Call，只留结果会明显断裂。

2. **split-turn 摘要**：token 预算是硬约束，切点不一定落在完整交互边界上。若切断了执行过程，**额外对被切掉的部分生成一份摘要**（独立 LLM 调用，最后与主摘要拼接）。
   > 压缩可以切断原始消息，**但不能切断后续推理所依赖的因果关系**。

3. **摘要增量合并**：第二次起不重新喂最早消息，而是把 `<previous-summary>` + `<conversation>` 交给模型合并成新摘要。形成 `Summary₁ → Summary₂ → Summary₃` 的持续演进。

4. **摘要本身也有预算**：从预留 Context 预算中划出 summary budget，否则多轮压缩后摘要自己又会撑满。

5. **摘要是结构化任务记忆，而非聊天总结**：重点保留——当前任务目标／用户约束和偏好／已完成进行中受阻的工作／关键决策／已发现的问题和错误／下一步／关键文件函数路径。
   → 生成的不是 conversation summary，而更接近 **task continuation state**。

6. **关键事实不依赖 LLM 摘要**：程序化扫描历史 Tool Call，提取 `read → 读过哪些文件`、`write → 新写了哪些`、`edit → 改过哪些`，整理成 `<read-files>` / `<modified-files>` 追加进摘要。
   → **语义信息交给 LLM 蒸馏，确定性事实由程序直接保留。**

7. **摘要生成本身不走 Agent Loop**：只是一次独立 LLM 调用（待压缩历史 + 摘要指令 → Summary），不执行工具、不进 Tool Loop。
   → 避免"为压缩 Context 又产生更多 Context"的递归问题。

8. **压缩后 Context 被真正重建**：不是给现有 messages 打个标记，而是重构成 `[CompactionSummary, ...RecentMessages]`，其中 CompactionSummary 是**专门的消息类型**。渲染给模型时转成 `<summary>...</summary>` + 最近几轮原文。
   → **最近的事情保留高保真原文，较远历史降级成摘要表示。**

9. **Compaction 记录被持久化**：保存摘要、压缩边界、压缩前 token 信息、时间等元数据。作用有二——告诉下一次压缩"上次压到哪、previous summary 是什么"；让压缩**可追踪而非悄悄删历史**。

## 六、一句话总结

> **Compaction 本质上不是简单的"截断历史"，而是一种 Context representation transformation：把远端历史从高成本的原始消息表示，转换成低成本的结构化摘要表示，同时尽可能保留继续完成任务所需要的状态。**

## 相关概念

- [[Pi — 最小化终端编码 Agent]] — 本文分析对象的实体页（架构/安装/Extension/Session 树）
- [[上下文工程 (Context Engineering)]] — 本文是其**机制层**：实体页讲原则，本篇讲 Pi 的具体实现
- [[Prompt Caching]] — "保持前缀稳定 / 动态信息向后追加"正是缓存友好的工程约束
- [[Agent记忆系统]] — Compaction 的"结构化任务记忆 + 确定性事实程序化保留"与记忆分层同构
- [[Datastrato 2.0：Agent Context 的三重支柱（统一元数据 → 开放语义层 → Ontology）]] — 另一条路线：Datastrato 讲**企业上下文该怎么搭**（治理视角），Pi 讲 **Context 在运行中怎么被管**（运行时视角）；两者都强调"上下文会变化/过期，需要持续维护"
- [[AI Agent（智能体）]] — Model / Harness / Environment 三分法

## 原文配图（本地留存）

下列配图与原始网页快照（`original.html`）已全部落到本地 `raw/assets/pi-agent-context-management-wechat/`，随时可查看；原文链接见文首 `source_url`。

![img-01](../../raw/assets/pi-agent-context-management-wechat/img-01.gif)

![img-02](../../raw/assets/pi-agent-context-management-wechat/img-02.png)

## 外部链接

- Pi 官网：https://pi.dev
- Pi GitHub：https://github.com/earendil-works/pi
