# 全文首发deepseek harness背后的秘密，Cordis的设计哲学深度解读

- 来源：https://zhuanlan.zhihu.com/p/2071345388896924946
- 作者：苏迟但到（知乎）
- 编辑于 2026-08-13，229 赞同
- 作者自注：内容全部由 AI 生成
- 对应论文：A Programming Paradigm for Spatiotemporal Composability（arXiv 2608.25512）

---

注：以下内容全部由ai生成。btw，我相信没人愿意看原作者的88页英文论文。

DeepSeek 团队这篇 88 页论文，想解决一个很现实的问题：一个运行中的 Agent，能不能"换零件"而不重启？

这篇论文叫 《A Programming Paradigm for Spatiotemporal Composability》，作者来自北京大学和 DeepSeek-AI。论文很长，正文接近 80 页，形式化证明占了相当大的比重，但如果暂时绕开 category theory、effect/coeffect calculus 那套符号，它实际上在讨论一个非常工程化的问题：

当一个软件系统由大量可以动态加入、移除、替换的组件组成时，我们能不能做到：删掉一个组件时，把它留下的副作用完整撤销；它依赖的组件发生变化时，又能自动、安全地重新组织依赖关系，而不需要重启整个进程？

作者把前者叫 Temporal Composability（时间可组合性），后者叫 Spatial Composability（空间可组合性）。这两个概念是整篇论文真正的主线。

这件事为什么现在值得单独拿出来研究？因为传统软件的"组合"大多是静态的：函数调用、模块 import、类继承，在程序启动甚至编译时就确定了。但插件系统和 Agent Harness 正在把软件推向完全不同的方向：组件运行时出现、消失、重新配置甚至被程序自己生成。作者专门把 self-evolving agent harnesses 作为 motivation：未来 Agent 可能自己生成工具、替换 memory 模块、修改 sandbox、调整 subagent orchestrator，并且整个过程中持续处理用户请求。如果每换一个模块都必须重启进程，那么 session state、cache、连接、正在执行的任务都会受到影响；更麻烦的是，如果 Agent 自己生成了一个坏模块，甚至可能把负责"修复自己"的进程一起弄挂。

所以这篇论文研究的其实不是"怎么写插件"，而是更底层的问题：有没有一种 programming model，能让动态组件本身具备类似进程那样的生命周期隔离？

今天我们解决这个问题最常见的方法其实非常粗暴：把组件做成进程或者容器。进程天然有一种很强的 temporal composability——进程退出以后，操作系统回收它的地址空间、文件描述符等资源；Kubernetes 则提供 service 级别的 spatial composability——一个服务没了，可以重新调度另一个。但作者指出，这实际上是在用"进程/容器"这个大锤解决"模块"级问题。代价也很直接：重启丢掉进程内 cache、connection、partial computation；为了保持 availability 还需要 replicas；两个本来可以直接函数调用的模块，因为要获得生命周期隔离，被拆成服务后反而变成 RPC。论文因此认为，当前动态软件存在明显的 granularity mismatch：组件在函数/模块粒度组合，但生命周期管理却常常只能在 process/container 粒度完成。

作者提出的 Cordis，本质上就是试图把这种"可撤销、可依赖、可替换"的语义下降到组件级。

先说时间可组合性。最容易理解的例子是一个插件加载以后做了三件事：注册 HTTP route、注册 event listener、启动一个 timer。如果后来卸载插件，通常要另外写：

addRoute()       → removeRoute()
addListener()    → removeListener()
setInterval()    → clearInterval()

传统插件架构的问题不是这些 cleanup API 不存在，而是"做事情"和"撤销事情"是两套分离的代码。开发者必须记住自己曾经做过什么，再手工保证 deactivate/unload 中一项不漏。VSCode 就被论文拿来当例子：extension 的 activate 与 cleanup 本质上分离，作者认为这种结构让完整恢复很难验证。

Cordis 的核心想法非常像事务 undo log：每做一个 effect，同时返回这个 effect 的 inverse。

论文把一个 effect 抽象为：

当前 Context
    ↓ effect
新 Context + inverse

形式上是：

Γ → Γ × (Γ → Γ)

也就是说，不只是"把状态从 A 改成 B"，而是执行以后同时告诉 runtime：

我刚刚把 A → B，
如果将来要撤销，请执行这个 inverse。

runtime 自动把这些 inverse 收集起来。假设组件依次执行：

E1
E2
E3

那么卸载时自动执行：

E3⁻¹
E2⁻¹
E1⁻¹

也就是 LIFO rollback。论文把这套机制称为 revertible effects。关键不只是"支持 undo"，而是 inverse 和 effect 在执行位置绑定，之后复合 effect 的 inverse 可以由 runtime 自动组合出来。

Cordis 最终提供的接口非常直观：

ctx.effect(callback)

callback 执行副作用，同时返回 cleanup；Cordis 将 cleanup 自动加入当前组件的 disposer。论文实现里甚至允许 callback 是 generator/iterator，每执行一步都 yield 一个 inverse，于是一个长初始化过程也可以部分完成、部分 rollback。

这个细节对 Agent 很重要。假设 Agent 动态安装一个工具，初始化过程是：

创建目录
→ 注册 tool schema
→ 建立数据库连接
→ 启动后台任务
→ 注册到 Agent tool registry

如果做到第四步时发现依赖已经变化，传统模式往往需要开发者自己处理"初始化到一半"的异常路径。Cordis 的 effect iterator 则把每一步 inverse 累积起来，此时可以把已经执行的部分逆序撤销。这就是论文花大量篇幅形式化 iterator、failure 和 asynchronous transition 的原因，而不是单纯为了数学复杂化。

第二条主线是空间可组合性，也就是组件之间的依赖关系。作者借用了 coeffect 这个 programming language 理论里的概念。effects 描述的是：

我对环境做了什么？

coeffects 描述的是：

我需要环境给我什么？

比如组件 B 声明：

inject:
- database
- logger

意思不是它自己去全局 registry 找 database，而是：

我只有在 database 和 logger 都存在的时候才应该运行。

于是 Cordis 保存一个 dependency context。每次 provider 增加或删除，runtime 重新计算组件依赖是否满足，并把变化分成三种：

原来不满足 → 现在满足：activating
原来满足   → 现在不满足：deactivating
其他情况：neutral

这意味着组件生命周期不再主要由用户直接调用 start() / stop() 控制，而是由依赖满足关系驱动。

举一个数据库插件的例子：

MySQL Provider
      ↓ database
User Service
      ↓ user-service
REST API

启动的时候自然形成：

MySQL → User Service → REST API

如果 MySQL provider 被卸载，变化则反向传播：

REST API deactivate
User Service deactivate
MySQL finally unload

这里有一个容易被忽略但非常重要的问题：User Service 在执行自己的 teardown 时可能仍然需要 database。

比如它必须先：

flush pending transaction
close prepared statement
return connection

然后 database provider 才能真正销毁。

因此论文没有简单规定"provider 没了 → consumer 立刻断开引用"，而是在 lifecycle 中专门加入了一个 UNLOADING 状态。provider 准备退出时，先停止向新的组件提供服务，让 dependents 开始 teardown；但是旧 dependents 已经 commit 的 dependency view 暂时还保留。provider 必须等所有 dependents 完成 deactivation，才能真正执行自己的 inverse。

Cordis 实现里这甚至直接变成一行：

await all(notify(...dependents).map(f => f.await()))

先 drain dependents，再执行自己的 fiber.dispose()。论文因此证明了 provider/consumer 生命周期的 ordering：consumer 的 episode 一定完整包含在 provider 的 episode 之中，也就是说 provider 先活，consumer 后活；consumer 先死，provider 后死。

如果只看到这里，Cordis 很容易被理解成一个"加强版 DI container"。但这篇论文真正有意思的地方，是作者试图进一步回答一个更困难的问题：

如果十几个组件的 effect 同时交错执行，卸载其中某一个以后，怎么证明不会把其他组件的状态一起撤销？

例如两个插件：

A: register route /foo
B: register route /bar

A、B 显然可以独立卸载，因为它们操作不同 entry。

但如果：

A: middleware.push(auth)
B: middleware.push(cache)

那么：

auth → cache

和：

cache → auth

很可能根本不是同一个系统，而且删除中间一个 middleware 也可能影响另一个。

于是论文引入了 effect independence。简单理解就是：两个组件的 effect 以及 inverse 必须"可以交换顺序而不改变可观察结果"。形式化语言里就是 commutation，再加上一个 effect 不能改变另一个 effect 将来生成什么 inverse。

这里又出现论文另一个值得注意的思想：作者并不要求物理状态严格恢复成 bit-by-bit 一模一样，而是引入 observational equivalence。

例如：

malloc → free

之后 heap 内部布局未必和 malloc 之前完全相同；生成一个随机 handle 再删除它，下次生成出来的 handle 也未必相同。但如果系统暴露出来的接口无法观察这些差异，那么从组件角度看，它们应该算"同一个状态"。

所以论文真正要求的是：

卸载以后，系统回到一个与原状态不可区分的状态。

这一点使得"可恢复"这个定义比简单 snapshot rollback 实际得多，否则大量资源系统根本无法满足严格 equality。

把 effect 和 coeffect 合起来以后，作者得到整篇论文所谓的 Context Paradigm：

Context
├── 当前环境状态
├── effect inverse accumulator
└── coeffect / dependency context

组件不再随便碰全局环境，而是通过 Context 与环境交互。于是 Context 同时知道：

这个组件依赖谁；
这个组件提供什么；
这个组件修改了什么；
这些修改怎么撤销。

作者认为这构成了一种独立的 programming paradigm：既不像函数式编程那样把所有 state 显式在线程间传来传去，也不像传统 imperative/OOP 那样允许组件任意修改 ambient state，而是让 effect/coeffect 经由显式 context 中介。

论文第四章那三十页左右的 calculus，主要就是在证明这套直觉放进真正的并发运行环境以后不会散架。作者最后证明的性质可以浓缩成四件事。

第一是 Preservation：组件不断加入、退出以后，registry 仍然保持合法，不会出现 dependency 指向已经消失 fiber 之类的悬空结构。

第二是 Temporal Composability / Recovery Exactness：只要组件满足 independence 等假设，A 的 effect 与 B、C 的 effect 交错执行以后，执行 A 的 accumulator，结果等价于"这个执行历史里 A 从来没有出现过"。这比"inverse 能 undo 自己"强很多，因为这里允许其他组件在 A 创建和 A 被删除之间修改过整个系统。

第三是 Spatial Composability：组件只有在 dependency 满足时才 activation，并且 provider 在 consumer 完成 teardown 之前不会真正回收依赖。

第四个，也是我认为这篇论文最值得注意的性质，是 Confluence。

论文想证明：

系统动态运行期间经历过怎样的 load/unload/reload 历史并不重要；最终进入稳定状态以后，得到的结果应该等价于"直接从头加载最终配置"。

比如：

启动 A
启动 B
删除 A
安装 C
重新安装 A
替换 B
最后删除 C

最终配置只剩：

A + B'

那么稳定后的状态应该等价于：

进程启动
→ 直接加载 A
→ 直接加载 B'

而不是因为过去曾经运行过 C、旧版 B 或第一次 A，就留下某些 ghost state。

论文把这个性质叫 canonical form / confluence，并证明在 pairwise independence、无 failure、dependency graph 满足条件、组件完整提供其声明 provision 等假设下，生命周期系统有唯一 normal form。

如果把它放到 self-evolving Agent 上，这个性质的意义其实很明显。假设 Agent 在运行中不断改自己的 Harness：

Memory V1
→ Memory V2
→ Tool Router V2
→ rollback Memory V1
→ Router V3

理想状态不是"现在这些模块看起来都能用"，而是：

最后的 Agent 状态只由最终组件配置决定，而不应该由它曾经怎么修改自己决定。

否则 self-evolution 很容易变成一种 state drift：表面代码已经回滚，旧 event listener、tool registration、permission、cache entry、background task 还残留在系统里。Cordis 试图把"修改历史不可观察"变成结构性保证，而不是靠 Agent 或程序员记得 cleanup。

不过这篇论文有一个很重要的边界，不能因为形式化证明很多就忽略：Cordis 并不能撤销世界上所有副作用。

论文第 6.1 节非常明确地区分 system boundary 内外。比如：

open file       → close
malloc          → free
register route  → unregister
start child     → kill

这些属于 acquisition，可以通过 inverse 回收。

但：

send network packet
write external file
发一封邮件
扣一笔钱
调用外部 API

这些一旦进入外部世界，就无法简单"inverse"。论文把它们称为 emission。处理这种 effect 只能采用两种更传统的方法：要么在确认状态 commit 以后才发送，要么提供 compensation，例如退款、删除文件等。

所以 Cordis 保证的并不是：

Agent 做过的所有事情都能撤销。

而是：

在被 Context 纳入可恢复边界的状态空间内，组件 effect 可以得到系统性恢复。

这是读这篇论文时最应该保持的边界意识。

安全上也一样。论文确实指出 coeffect declaration 很像 capability request：组件只声明自己需要 filesystem、database、network 中的哪些依赖，Context proxy 可以拒绝 undeclared access，interception 还可以进一步携带"filesystem 只允许访问哪些路径"之类的 metadata。

但作者明确没有说这能替代 sandbox。如果组件本身是恶意代码，而它还能直接调用 Node.js fs、process API 或 native runtime，那么它完全可以绕过 Context。论文因此把真正的不可信组件隔离交给外部 sandbox、独立进程、SFI、VM/Wasm 等执行边界。

换句话说：

Cordis：管理"守规矩组件"的能力和生命周期
Sandbox：限制"不守规矩代码"能不能绕过规则

这是两个不同问题。

工程实现部分也值得看。论文最终实现的是 Cordis v4，TypeScript meta-framework，提供 ctx.effect、ctx.set/get、ctx.use、dependency isolation/interception、component loader、configuration reconciliation 和 HMR。

它的 HMR 与 Webpack/Vite 的思路也有差异。传统 HMR 通常依赖模块作者声明 acceptance boundary，以及自己处理旧模块留下的状态；Cordis 因为 component effect 本来就有 disposer，所以换模块可以直接：

dispose old fiber
→ recover old effects
→ reload module
→ instantiate new fiber

如果新模块 import 失败，则恢复 module cache backup，再重新建立旧 fiber，实现 transactional reload。

作者拿 Koishi 做 case study。Koishi 是构建在 Cordis 上的 chatbot framework，已经有超过 4000 个社区插件；服务端和 Web Console 都使用相同的 Cordis component model。论文把它作为"这套抽象至少能支持真实大型插件生态"的存在性证据。

但这里也恰好暴露了论文实验部分最明显的弱项：它几乎没有传统系统论文意义上的 quantitative evaluation。

作者自己在 threats to validity 中承认：case study 只有一个 ecosystem、一个 host language；没有和其他 architecture 做 controlled comparison；没有测 runtime overhead，也没有测 developer productivity。因此 Koishi 证明的是：

这套 abstraction 确实能在生产系统里用，而且有人长期这么用。

而不是：

Cordis 比 OSGi / DI / process isolation / 其他动态组件架构性能更好。

这一点我觉得很重要，因为这篇论文形式化部分非常强，很容易给人一种"工程问题已经完全解决"的错觉。实际上它证明的是：在作者定义的 component discipline 与若干 assumptions 下，这套 operational semantics 具有那些性质。 至于真实开发者能不能稳定满足这些 assumptions，是另一件事。

例如 runtime 并不会验证你返回的 inverse 真的正确。Cordis 的 ctx.effect 接收一个 cleanup，但"这个 cleanup 是否真的恢复了刚才的 effect"，仍然是 component author 的 obligation。论文自己明确说明 runtime 不检查这个 witness。

这意味着：

ctx.effect(() => {
    registerRoute("/admin")

    return () => {
        // 忘了 unregister
    }
})

形式化模型要求 inverse 正确，但现实 Cordis runtime 并没有魔法自动证明这件事。

第二个比较强的假设是 effect independence。很多简单 registry 操作很自然满足，例如两个插件注册不同 route；但涉及 ordered middleware、共享数据结构、全局配置、复杂 mutable state 时，commutativity 并不是天然存在的。论文其实自己举了 middleware chain 作为 non-commutative key 的例子。

第三个问题是 dependency cycle。Cordis 的 reactive model 下，如果 A 依赖 B、B 又依赖 A，两者都会一直 inactive。论文认为这种循环因为 dependency 是显式声明的，所以可以在加载时发现；一种解决办法是把 A/B 进一步拆成 core component 和 integration component。但作者也承认，最坏情况下这种拆分可能让 integration component 数量按 O(n²) 增长，降低开发体验。

第四个现实问题是 interface versioning。形式化模型主要按 key 判断 dependency：

database

存在就算满足。

但真实插件生态里，同一个 database key 的 interface 可能发生 breaking change；不同插件甚至可能意外使用同名 key 表示完全不同东西。论文把这分别称为 interface drift 和 key collision，并承认当前模型还缺少完整的 structural/versioned dependency linking。Cordis 目前主要借助 npm peer dependency 缓解版本兼容问题。

所以如果要给这篇论文一个比较准确的定位，我不会把它理解成"DeepSeek 做了一个新的 Agent 框架"，甚至也不只是"做了一个插件框架"。它做的是一件更偏 Programming Languages + Software Systems 的工作：

把 effect recovery 和 dependency reactivity 提升成组件运行时的一等语义，然后尝试证明：只要组件遵循这套纪律，动态加载/卸载的历史最终可以被消掉。

它最有价值的地方不是某一个 API，而是给动态 Agent Harness 提出了一个比较清晰的设计目标：未来 Agent 如果真的能修改自己的工具、memory、permission、subagent、runtime module，那么"能修改"只是第一步，更重要的是必须知道自己改了什么、如何完整撤销、谁依赖这个修改、撤销时先让谁退出，以及一系列修改以后能否重新回到一个由最终配置唯一决定的稳定状态。

作者在 conclusion 里也没有声称 Cordis 已经验证了 self-evolving Agent。恰恰相反，他们把这列为未来验证方向：目前验证主要来自 Koishi 插件生态，而未来希望放进"AI agent continuously generates and replaces its own harness components"的环境，验证高频组件替换下的 complete recovery 和 dependency coordination。

如果把整篇 88 页压缩成一句话，我认为最准确的是：

今天的软件擅长"装一个模块"，却不擅长回答"这个模块到底给整个运行时留下了什么"；Cordis 想让每个组件的副作用和依赖都变成 Runtime 能理解、能追踪、能撤销的对象，从而让动态软件最终具备一种"组件级进程隔离"的生命周期语义。

而这件事在传统插件时代可能只是工程便利性问题，在 self-evolving Agent 时代，可能会逐渐变成一个基础设施问题。

编辑于 2026-08-13 21:42・广东
