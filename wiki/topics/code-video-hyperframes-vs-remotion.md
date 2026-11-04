---
type: topic
tags: [代码视频, Remotion, Hyperframes, HeyGen, Vidu, 剪映AI, AI视频, 批量个性化, HTML, React, AgentSkills, Apache-2.0]
created: 2026-11-04
updated: 2026-11-04
related_sources: 1
source_url: https://cloud.tencent.com/developer/article/2739500
---

# 代码视频 vs AI 视频：Hyperframes 与 Remotion 实测

> 来源：腾讯云开发者社区 · 月鹿造物《实测｜有了 Vidu 和剪映 AI，HeyGen 为什么还开源了一个代码视频工具？》（2026-09-08）
> 原文：https://cloud.tencent.com/developer/article/2739500
> 原始素材：`raw/heygen-hyperframes-vs-remotion.md`；7 张图见 `raw/assets/heygen-hyperframes-vs-remotion/`
> **来源性质**：第三方**个人实测**，结论基于作者主观观感，无量化评分。
> **重要**：原文的星数与时间线已过时，详见下方「核实与纠正」。

## 一句话

**AI 视频和代码视频不在一个赛道：一个是画家画布，一个是工厂流水线。**

> 代码视频的杀手级场景不是「做一支宣传片」，而是「**同一套模板 + 不同数据 = 十万个各不相同的视频**」。

## 实测设计

同一输入（Lovart 官网产品页），四种方案，统一做成 **15 秒竖屏**，除比例外全用默认推荐：

1. **Vidu**（AI 视频生成）
2. **剪映 AI 一键成片**
3. **Hyperframes**（HeyGen 开源，纯 HTML）
4. **Remotion**（2020 年老将，React 组件）

## 四组结果

### Vidu：画面好看，内容跑偏

- 第一帧能看到 Lovart 界面
- **第 4 秒变成抽象金色花纹旋转**，第 6 秒变成暗蓝同心圆
- 最后落在 Lovart logo

> 中间 5 秒与产品无关——**好看、酷炫，但说不清在宣传什么**。

### 剪映 AI：通用模板，不是给你的

输入「AI 设计工具 Lovart 宣传视频」，得到：紫衬衫女生 + 电脑 + 字幕「AI赋能创意设计」。

> 屏幕上不是 Lovart，人物不是 Lovart 用户，字幕**换成任何 AI 工具都能用**——它做的是「AI 工具宣传片」模板。

### Hyperframes：像 PPT，但每帧都在讲产品

米白背景 → 「LOVART 2026」→ 「让设计，更简单」→ 卡片依次滑入（系统思维设计 / 点选精准编辑 / 风格始终如一 / 文字独立可编）→ 「LOVART.AI」。

> 像 PPT，但**每个字都是真实产品功能**，看完知道 Lovart 是干嘛的。

### Remotion：真正的「视频感」

暗紫霓虹 + 粒子 + 光晕 → 「DESIGN, REIMAGINED」→ 产品卡片（IMAGE/VIDEO/POSTER/LOGO/3D/ICON）→ 发光 logo。

- **文件大小是 Hyperframes 的 8.5 倍**
- 因为它真的在「做视频」：光效、粒子动画、场景切换

## 核心洞察：根本不是一个赛道

作者一开始以为「AI 好看但不可控，代码精准但不好看」，查了 Remotion 真实客户案例后改观：

- **GitHub Unwrapped**：给每个用户生成专属年度回顾（类似 Spotify 年度总结），几百万条全自动
- **马拉松赛事视频**：每个参赛者一条，含个人成绩、排名、完赛时间
- **American Express**：个性化交互视频，**点击打开率提升 10 倍**
- **数据可视化动画**：图表变动画、流程图变视频、代码演示动态化

> 「同一套模板 + 不同数据 = 10 万个视频」，**AI 视频做不了**——每次生成都是独立的，没法批量套模板。

| 类型 | 擅长 |
| --- | --- |
| 代码视频 | 批量个性化、数据驱动、品牌一致性 |
| AI 视频 | 凭空造画面：广告片、短剧、动漫、真人风格 |

## HeyGen 为什么自造 Hyperframes

README 原话：

> "Hyperframes is inspired by Remotion — we used Remotion at HeyGen in production, learned a ton from it."

两个具体痛点：

1. **AI 写 React 不如写 HTML 自在**：网上 HTML 代码远多于 React 代码，训练样本多 → 发挥空间大
2. **想做拖拽微调，但 Remotion 每次改完要重新打包**；HTML 不用打包，改完即可预览，天然适合可视化编辑器

> 结论：不是「AI 视频做不好才做代码视频」，而是**优化自家生产管线的产物**。

## 两条路线，两种赌注

- **Hyperframes**：造 **AI 原生流水线**——纯 HTML 单文件、**14 个 skill 工具链**、一句话走完「写代码→渲染→出视频」
- **Remotion**：**借力 5 年前端生态**——React 组件、组件复用、海量训练数据；官方只给了一份「最佳实践文档」式的 skill

> 一个造流水线让 AI 自己跑，一个写说明书让 AI 借力老生态。

## 第二轮测试：换成作者自己的内容

输入换成作者公众号《红黑榜》的**成品 HTML**，而不是官网。

- **Hyperframes**：直接继承设计风格（莫兰迪绿灰、橘棕点缀、米白背景、留白节奏），「每一帧都像从公众号里走出来的」
- **Remotion**：同样还原配色，还多了数据卡片、页码导航、删除线等细节，**信息层次更丰富**

> 关键发现：**HTML 同时携带「内容」和「风格」两份信息**——AI 读到配色、字体、间距，不用额外描述就知道该做成什么样。

## 工程取舍（作者结论）

- **Hyperframes 快**：单文件，AI 改完几秒生效；适合把存量图文（公众号文章、产品页）快速转短视频
- **Remotion 精致但慢**：多文件互相关联，改一处可能连带多处；与 AI 来回轮次多，**时间和 token 成本更高**

## ⚠️ 核实与纠正（我的增量，2026-11-04 查 GitHub API）

原文有几处数字与时间线**已经过时或不准**：

| 项目 | 原文说法 | 实际核实 |
| --- | --- | --- |
| Remotion stars | 47k | **70,571** |
| Remotion 创建 | 2021 年 | **2020-06-23** |
| Hyperframes 仓库 | 未给全名 | **heygen-com/hyperframes** |
| Hyperframes stars | 未提 | **78,566**（**高于 Remotion**） |
| Hyperframes 开源时间 | 「2026 年 4 月」「满打满算一个多月」 | 仓库创建 **2026-03-10**，至发文已约 6 个月 |
| 许可 | 未提 | **Apache-2.0** |

**这直接动摇了原文的一个论点**：

> 原文说「Remotion 靠 5 年生态和 47k stars 取胜，Hyperframes 才一个多月」。
> 但实测 Hyperframes **星数已超过 Remotion**（78.5k vs 70.6k），且已存在半年以上。

所以「Remotion 生态碾压」这个解释**站不住**——更可能的原因是**React 的训练语料确实更利于模型产出复杂动效**，而不是「Hyperframes 太新」。

> ⚠️ 星数不等于质量，但至少说明：Hyperframes 并不是一个刚出生的小项目。

## 与库内线索的关系

- [[HTML 视频（HTML Video）]] —— 该页此前对 `Hyperframes` 与 HeyGen `HyperFrames` 是否同一项目存疑；**本篇确认：`heygen-com/hyperframes`，Apache-2.0，描述为 "Write HTML. Render video. Built for agents."**
- [[Replica：给 AI 套上设计规范，生成对齐产品体系的界面原型]] —— 同一类「AI 生成产物 + 约束」问题：Replica 用设计系统约束界面，Hyperframes 用单文件 HTML 约束视频结构
- [[AI 编程 (AI Programming)]] —— 代码视频的本质是「让 agent 写代码而不是写像素」，可复用于其他生成任务

## 待验证 / 证据边界

- 全文为**个人实测**，无量化指标（画面一致性、品牌符合度、生成耗时均为主观描述）
- 「文件大小 8.5 倍」为作者自测，未给具体数值
- 「Amex 打开率提升 10 倍」「GitHub Unwrapped 几百万条」为作者转述，未给原始来源
- 14 个 skill 与 Remotion 官方 skill 的能力差异**未实测**
- 星数与仓库元数据由我核实（2026-11-04），但**星数会变**，引用时请注明日期
- 原文的「2026 年 4 月开源」与「一个多月」自相矛盾，我已按仓库创建时间 2026-03-10 修正
