# 实测｜有了 Vidu 和剪映 AI，HeyGen 为什么还开源了一个代码视频工具？

> 来源：腾讯云开发者社区 · 月鹿造物（2026-09-08）
> 链接（原文）：https://cloud.tencent.com/developer/article/2739500
> 抓取：页面 `__NEXT_DATA__` 内嵌结构化 blocks 重建（117 块），正文 5,278 字
> 原始素材：`assets/heygen-hyperframes-vs-remotion/`（7 张图；正文为块结构，图片与段落的位置对应关系未保留）
> 来源性质：**第三方实测文**（作者「月鹿造物」自测），非厂商稿；结论基于个人主观观感

---
一家 AI 视频公司，反手做了一个代码视频工具。不是因为 AI 视频到顶了——而是它自己内部一直在用代码做视频，用着用着觉得不够好，干脆自己造了一个。

我前两天刷到一个叫 Remotion 的开源项目，47k stars，用 React 写视频。

用代码做视频？听起来很反直觉。AI 生成视频现在这么火——Vidu、可灵、剪映 AI 一键成片——谁还需要写代码做视频？

但我翻了翻发现，不光 Remotion 活得好好的，2026 年 4 月还有新选手入场：HeyGen 开源了一个叫 Hyperframes 的工具，也是用代码做视频。

HeyGen 自己就是做 AI 视频的公司。

一家 AI 视频公司，反手做了一个代码视频工具。不是因为 AI 视频到顶了——而是它自己内部的视频生产管线里一直在用 Remotion，用着用着觉得不够好，干脆自己造了一个。

这让我更好奇了。AI 都能生视频了，代码做视频到底好在哪？好到连 AI 视频公司自己都在用？

我决定自己测一测。

1

## 测试条件

我拿了同一个输入——Lovart 官网，一个 AI 设计工具的产品页面——分别喂给四种方案：

1.Vidu（AI 视频生成）

2.剪映 AI 一键成片

3.Hyperframes（HeyGen 开源，2026 年新工具，纯 HTML）

4.Remotion（2021 年老将，React 组件）

全部做成 15 秒竖屏宣传视频。除了比例，其他都用各自的默认推荐，没有人为干预。

2

## AI 方案：画面好看，但内容跑偏了

### 先说 Vidu

我给了它 Lovart 官网的截图，让它生成一段宣传视频。

第一帧是对的——能看到 Lovart 的界面。

到第 4 秒，画面变成了一堆抽象的金色花纹在旋转。到第 6 秒，变成了一个暗蓝色的同心圆图案。整段视频最后落在 Lovart 的 logo 上——这个倒是对的，但中间那 5 秒跟产品没有任何关系。

好看吗？好看。酷炫吗？酷炫。但你说不出来这是在宣传什么。

（Vidu 生成的 Lovart 宣传视频）

### 再说剪映 AI 一键成片

我输入"AI 设计工具 Lovart 宣传视频"，它给我生成了一段 15 秒的视频：一个穿紫色衬衫的女生坐在电脑前，屏幕上显示着一个 AI 界面，右上角打着"AI赋能创意设计"的字幕。

画面质量很高，光效、构图、人物都很精致。

但那个电脑屏幕上显示的不是 Lovart。那个女生也不是 Lovart 的用户。那段字幕"AI赋能创意设计"——你换成任何一个 AI 工具都能用。

它做了一段"AI 工具宣传片"的通用模板，不是给 Lovart 做的宣传片。

（剪映 AI 生成的"AI 工具通用宣传片"）

3

## 代码方案：没那么惊艳，但每一帧都在讲你的产品

Hyperframes 的结果先出来。

米白色背景，"LOVART 2026"的标题缓慢浮现。下面是"让设计，更简单"。然后一张一张卡片滑入——系统思维设计、点选精准编辑、风格始终如一、文字独立可编。最后落在"LOVART.AI"。

像 PPT 吗？像。

但每个字都是 Lovart 真实的产品功能。配色干净，节奏稳，看完你知道 Lovart 是干嘛的。

（Hyperframes 生成的 Lovart 宣传视频）

Remotion 的结果让我有点惊。

一开场就是暗紫色霓虹光效背景，粒子在飞。"Lovart / DESIGN, REIMAGINED." 带着光晕浮出来。中间展示了一组产品卡片——IMAGE、VIDEO、POSTER、LOGO、3D、ICON——每张都有颜色和动效。"一句话同时生成"的中文文案也出现了。最后是发光的 Lovart logo。

文件大小是 Hyperframes 的 8.5 倍——因为它不是简单排了几张卡片，而是真的在"做视频"：写了光效、写了粒子动画、写了场景切换。

（Remotion 生成的 Lovart 宣传视频）

看完两段视频我的第一反应是：一个像 PPT，一个像真·视频。

但两个都在讲 Lovart。每一帧的内容都能对得上产品真实的功能。

4

## 差在哪？根本不是一个赛道

测完之后我一开始觉得，AI 视频好看但不可控，代码视频精准但不好看。

但后来我看到有人用豆包做产品宣传片，把产品图喂进去生成分镜，一致性很强，画面也带产品。AI 视频的能力在快速进步，不能小看。

那代码视频到底好在哪？

我去查了 Remotion 的真实客户案例，一下就明白了——它们根本不在一个赛道。

代码视频最杀手级的应用不是做宣传片，是批量个性化视频。举几个真实的例子：

1.GitHub Unwrapped

给每个 GitHub 用户自动生成一段专属年度回顾视频，类似 Spotify 年度总结。同一套模板，注入不同用户的数据，几百万个视频全自动生成。

2.马拉松赛事视频

给每个参赛者自动生成包含个人成绩、排名、完赛时间的回顾视频。

3.American Express

给客户做个性化交互视频，点击打开率提升了 10 倍。

这种"同一套模板 + 不同数据 = 10 万个各不相同的视频"的事，AI 视频完全做不了。AI 每生成一条视频都是独立的，没法批量套模板。

另外还有数据可视化动画——图表变动画、流程图变视频、代码演示动态化，这些也是代码视频的地盘。

而 AI 视频擅长的是另一类事情：创意画面生成。广告宣传片、短剧、动漫、真人风格——这些需要"凭空造出一个画面"的活，代码做不了。

代码视频是工厂流水线——同一套模板批量生产。
AI 视频是画家画布——每次创作一幅新画。

不是谁好谁差，是干的活完全不一样。

5

## HeyGen 为什么自己造了一个？

回到开头的问题。

我去翻了 Hyperframes 的 GitHub README，找到了一句关键的话：

"Hyperframes is inspired by Remotion — we used Remotion at HeyGen in production, learned a ton from it."

（Hyperframes 的灵感来自 Remotion——我们在 HeyGen 的生产环境中用过 Remotion，从中学到了很多。）

HeyGen 自己在生产环境用 Remotion。用了很久，学了很多。

然后它发现了两个具体的痛点。

第一个：AI 用 Remotion 写视频，创意反而受限。 Remotion 用的是 React，一种专业前端框架。AI 写 React 能写，但不如写 HTML 自在——网上的 HTML 代码比 React 代码多太多了，AI 见过的例子越多，发挥空间就越大。

第二个：HeyGen 想让人也能用拖拽的方式微调视频。 但 Remotion 每次改完代码都要重新打包才能预览，来回很慢。HTML 不用打包，改了就能看，天然适合做可视化编辑器。

所以 Hyperframes 不是"AI 视频做不好才做代码视频"。它是 HeyGen 优化自己内部管线的产物——需要一个 AI 能写得更好、人能用编辑器改的代码视频工具，Remotion 在这两点上都不够顺手，就自己造了一个。

纯 HTML，单文件，不需要打包。AI 天生会写 HTML。配上 14 个 skill 工具链，AI agent 可以一句话走完"写代码→渲染→出视频"全流程。

6

## 两种代码方案，两种赌注

Remotion 赌的是另一件事。

它 2021 年就在了，那时候 AI 还没爆发。它是给前端工程师设计的——React 组件、场景拆分、组件复用，全是前端工程师的思维方式。

但 AI 时代来了之后，Remotion 也没闲着。它出了一个官方 skill——不是像 Hyperframes 那样的 14 个自动化工具链，只是一份"最佳实践文档"，教 AI 怎么写正确的 Remotion 代码。

一个造流水线让 AI 自己跑，一个写说明书让 AI 借力老生态。思路完全不同。

Hyperframes 的赌注

造 AI 原生流水线：14 个 skill 工具链，一句话出片，纯 HTML 单文件

Remotion 的赌注

借力 5 年前端生态：47k stars + 海量训练数据，AI 自己就能写好 React

而实际效果呢？AI 虽然不是 Remotion 的目标用户，但 AI 写 React 写得还不错。5 年的生态积累、47k stars、海量的训练数据——通用 AI 借力这些积累，反而做出了比 Hyperframes 更有"视频感"的东西。

我亲手测出来的结果就是这样：同样的输入，Remotion 做得比 Hyperframes 更好。

但这么比其实没什么意义。

Remotion 2021 年上线，到现在积累了 5 年的生态和训练数据。Hyperframes 2026 年 4 月才开源，满打满算一个多月。AI 能写好 Remotion，靠的是这 5 年里无数开发者写过的代码、教程、问答——这些东西不是短时间能追上的。

不过 AI 时代一两年就大变化。现在下结论太早。

7

## 我后来又做了一组测试

第一轮用的是 Lovart 官网，一个外部网站。

第二轮我换了自己的东西——公众号《红黑榜》第二期的成品 HTML。

Hyperframes 的结果让我很意外。它直接继承了我的设计风格——莫兰迪绿灰色系、橘棕色点缀、米白背景、留白节奏。"AI SKILLS 红黑榜""5 款一天测完，2 封神 · 2 翻车"——每一帧都像是从我的公众号里走出来的。

我给它的不是一段文案，是一份排版好的 HTML 文件。HTML 同时带着"内容"和"风格"两份信息。AI 读到了配色、字体、间距，不用我额外描述，它就知道该做成什么样子。

（Hyperframes 用公众号 HTML 生成的视频，继承了月鹿的设计风格）

Remotion 那边也不错，同样还原了我的配色和风格，还多做了一步——加了数据卡片、页码导航、删除线这种小细节，信息层次更丰富。

（Remotion 用公众号 HTML 生成的视频，配色风格一致，信息层次更丰富）

两个都好。莫兰迪绿灰、橘棕点缀、米白背景，一眼就能认出是"月鹿造物"的东西。

8

## 所以，代码视频为什么没死？

因为它干的活跟 AI 视频根本不重叠。

批量个性化、数据驱动、品牌一致性——这些场景 AI 视频接不住。而这些场景的需求还在变大——个性化营销视频、自动化数据报告、千人千面的内容分发——都是"同一套模板批量出片"的活。

代码视频没死，不是因为它比 AI 好。是因为它们各管各的地盘，谁也替代不了谁。

9

## 可以带走的东西

如果你也想试试用代码做视频，这两个工具都是免费开源的：

Hyperframes

HeyGen 出品，纯 HTML 写视频，对 AI 最友好，适合快速出量。搜"Hyperframes HeyGen"就能找到。

安装命令：npx skills add heygen-com/hyperframes

Remotion

2021 年老将，React 写视频，生态成熟，适合做精致视频。GitHub 搜"Remotion"，47k stars 那个就是。

安装命令：git clone https://github.com/remotion-dev/template-helloworld.git
然后：npm install && npx skills add remotion-dev/skills

两个都需要搭配 AI 编程工具（Claude Code、Cursor 之类的）使用——你不用自己写代码，跟 AI 描述你想要什么视频就行。缺什么环境 AI 会帮你装。

简单说：Hyperframes 快，一句话就能出片，改起来也快——就一个文件，AI 改完几秒钟搞定。适合把已有的图文内容快速变成短视频，公众号文章转视频号、产品介绍页转宣传片这种场景。Remotion 精致，视觉效果好，但代价是慢——好几个文件互相关联，改一个地方可能要连带改好几个，跟 AI 来回沟通的轮数多，消耗的时间和 token 都更大。

我测完之后一直在想一件事：HeyGen 用了 Remotion，觉得不够，造了 Hyperframes。Remotion 团队不可能看不到 Hyperframes 在干什么。

一个在补 AI 的短板，一个在借 AI 的力量。

这两条路最后会合到一起，还是越走越远？

---

## 原文配图（按抓取顺序，未逐张对应段落）

![img-01](assets/heygen-hyperframes-vs-remotion/img-01.png)
![img-02](assets/heygen-hyperframes-vs-remotion/img-02.jpg)
![img-03](assets/heygen-hyperframes-vs-remotion/img-03.png)
![img-04](assets/heygen-hyperframes-vs-remotion/img-04.jpg)
![img-05](assets/heygen-hyperframes-vs-remotion/img-05.jpg)
![img-06](assets/heygen-hyperframes-vs-remotion/img-06.png)
![img-07](assets/heygen-hyperframes-vs-remotion/img-07.png)
