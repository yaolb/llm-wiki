---
type: entity
tags: [Hyperframes, HeyGen, 代码视频, HTML, 渲染引擎, Apache-2.0, AgentSkills, FFmpeg, Puppeteer, 确定性渲染, frame.md, Remotion]
created: 2026-11-04
updated: 2026-11-04
related_sources: 1
source_url: https://hyperframes.heygen.com/
---

# HyperFrames：把 HTML 渲染成视频的开源框架

> 官网：https://hyperframes.heygen.com/ ｜ 仓库：heygen-com/hyperframes ｜ Playground：https://hyperframes.studio/
> 核实（2026-11-04）：Apache-2.0，⭐78,566 / fork 7,230，创建 2026-03-10，当日仍在推送；Node ≥ 22；npm 包名 hyperframes
> 来源性质：官方 README 与官网自述（厂商文档），非第三方评测。
> 抓取限制：官网首页 curl 被重置（Connection reset），本文分析基于 README（24 KB）+ GitHub API + 包结构，未做实际渲染实测。

## 一句话

视频 = 一个带时间属性的 HTML 文件；渲染 = 在无头 Chrome 里逐帧 seek 再用 FFmpeg 编码。

> "Write HTML. Render video. Built for agents."

## 它解决什么问题

想用代码做视频，过去主要靠 Remotion（React 组件）。但 React 对 AI 不友好：要打包、要组件树、要处理构建错误。

HyperFrames 的赌注是：HTML 是人和 Agent 都能直接写的通用格式——不需要构建步骤，index.html 打开就能预览。

## 核心机制（README 原文）

### 1. 用 data 属性声明时间线

- data-composition-id / data-width / data-height：定义画布
- data-start / data-duration / data-track-index：定义片段起点、时长、轨道
- 音频额外支持 data-volume

### 2. 动画必须「可 seek」

这是与普通网页动画的关键区别：渲染器要能跳到任意帧取画面，所以动画必须绑定到时间轴对象，而不是墙钟。

README 示例用 GSAP：gsap.timeline({ paused: true })，并把时间轴挂到 window.__timelines[compositionId]。

支持的动画运行时：GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI，或自定义 frame adapter。

### 3. 渲染 = 逐帧截图 + 编码

> "The renderer seeks each frame in headless Chrome and encodes the result with FFmpeg, so the same input produces the same video."

可本地渲染，也可 Docker / AWS Lambda 分布式渲染。

## 工程结构（monorepo 包）

- hyperframes：CLI，脚手架、预览、lint、检查、渲染
- @hyperframes/core：类型、解析器、生成器、linter、运行时、frame adapters
- @hyperframes/engine：基于 Puppeteer + FFmpeg 的可 seek 页面捕获引擎
- @hyperframes/producer：完整流水线，捕获 → 编码 → 音频混音
- @hyperframes/studio：浏览器端合成编辑器
- @hyperframes/player：可嵌入的 hyperframes-player Web Component
- @hyperframes/shader-transitions：WebGL 着色器转场
- @hyperframes/aws-lambda：分布式渲染 SDK

## Agent 层：9 个 skill

核心集（默认安装）：

- /hyperframes —— 先读这个：渲染契约 + 生产流程（plan → 写 HTML → 接动画 → 加媒体 → lint → 预览 → 渲染）
- /hyperframes-cli —— CLI 按任务组织：脚手架、检查、看帧、改时间线、预览、本地/云端渲染、发布、历史与失败恢复
- /hyperframes-registry —— 约 450 个现成块与组件，以可编辑源码形式安装（转场、叠加层、标题、动态字、字幕、图表、地图、3D、镜头运动）
- /media-use —— 取或造媒体：音乐、音效、图片、图标、logo、配音、数字人、生成视频、转录、抠图、调色

按需安装：/slideshow、/remotion-to-hyperframes、/reverse-any-video、/style-sampling、/figma。

> 安装方式三选一：Claude Code 插件市场、npx skills add heygen-com/hyperframes、npx hyperframes skills update（按 CLI 版本对应的 release tag 安装，避免 skills.sh 缓存滞后）。

## frame.md：把设计系统「翻转」给镜头

这一段是全项目最值得注意的设计：

> Every brand has a design.md. None of them were written for a camera. frame.md is the missing translation layer… the same tokens, the same rules, but rewritten so an AI agent can compose a promo video without guessing at scale or reaching for web chrome.

- 输出是 DESIGN.md 的超集，整套工具链都能读
- Atoms stay sacred. Composition stays free. Numbers come from the script.（原子不变，构图自由，数字来自脚本）
- 已提供多套模板：Biennale Yellow、BlockFrame、Bold Poster、Cartesian、Cobalt Grid、Coral 等

> 这与 [[Replica：给 AI 套上设计规范，生成对齐产品体系的界面原型]] 是同一个思路的两个战场：Replica 把设计系统编译成界面生成约束，HyperFrames 把设计系统改写成视频构图约束。

## 官方对比 Remotion

- 创作模型：HTML + CSS + 可 seek 动画 ｜ React 组件
- 构建步骤：无（index.html 直接可播）｜ 需要打包器
- Agent 交接：纯 HTML 文件 ｜ JSX / React 工程
- 库时钟动画：adapter 做到帧精确 seek ｜ 墙钟动画需特别处理
- 分布式渲染：本地 + AWS Lambda ｜ Remotion Lambda（更成熟）
- 许可：Apache 2.0 ｜ Source-available Remotion License

> 两者都用 headless Chrome + FFmpeg，差别在创作模型：React 组件 vs 纯 HTML。

## 值得注意的工程判断

1. 确定性是一等公民：同输入同输出，明确面向 CI、回归测试、自动化渲染——这是它和 AI 视频最根本的分野
2. 无构建步骤：省掉 bundler 往返，Agent 改完即可预览，迭代成本低
3. Catalog 以源码安装：450 个块不是黑盒组件，而是可改的源码，方便 Agent 二次加工
4. 非交互 CLI 优先：README 明说 CLI 默认非交互，明显是为 Agent 调用设计
5. 许可差异是商业关键：Remotion 是源码可见但带商业条款，HyperFrames 是 Apache-2.0

## 谁在用

- HeyGen 生产环境在用
- 社区案例：tldraw、TanStack（见 ADOPTERS.md）

## 风险与局限

- 可 seek 动画有门槛：墙钟动画、第三方库的默认交互模式不能直接用于渲染，需改写或 adapter
- 450 个块的维护成本：块越多，与核心 API 的漂移风险越大
- Studio 仍在演化（README 标注 evolving）
- 官网首页抓取失败：无法核实定价、托管服务与企业版边界
- 分布式渲染成熟度：官方自认 Remotion Lambda 更成熟

## 与库内线索的关系

- [[HTML 视频（HTML Video）]] —— 本页是其具体实现，且确认 Hyperframes 与 HeyGen HyperFrames 为同一项目
- [[代码视频 vs AI 视频：Hyperframes 与 Remotion 实测]] —— 第三方实测：HyperFrames 快、像 PPT 但内容精准；Remotion 视觉更强但轮次与 token 成本高
- [[Replica：给 AI 套上设计规范，生成对齐产品体系的界面原型]] —— 同为「把设计系统变成生成约束」，一个面向界面，一个面向视频
- [[AI 编程 (AI Programming)]] —— 让 Agent 写代码而不是写像素，是本项目的核心前提

## 待验证

- 官网/文档站首页连接被重置，未读到产品介绍与定价页
- 未实际执行渲染：逐帧 seek 的真实帧率、长视频内存占用、音频同步精度均未实测
- npm 下载量与版本节奏未核实
- 「450 个块」为 README 自述，未逐个验证可用性
- 与 Remotion 的对比表由官方提供，立场不完全中立（尤其许可与动画模式两行）
