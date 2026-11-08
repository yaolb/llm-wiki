---
type: entity
tags: [ArtCraft, AI视频, 图像生成, IDE, Rust, Tauri, egui, 3D合成, 高斯泼溅, 多模型聚合, Apache-2.0]
created: 2026-11-08
updated: 2026-11-08
related_sources: 0
source_url: https://github.com/storytold/artcraft
---

# ArtCraft：给艺术家用的 AI 图像/视频「IDE」

> 仓库：https://github.com/storytold/artcraft ｜ 官网：https://getartcraft.com
> 核实（2026-11-08）：**Rust**（+ React/TS 前端），**Apache-2.0**（README 写 MIT OR Apache-2.0 双许可），
> ⭐**39,773** / fork 6,242 / open issue **682**，创建 2022-03-31，最后推送 2026-11-07，仓库体积约 **1.37 GB**。
> 最新版本 **v0.41.1**（2026-11-07）。

## 一句话

**它不做模型，做的是「在生成之前先把画面搭出来」的工作台**——2D 排版 + 3D 布景 + 62 个模型可选。

> 官方定位：**The IDE for artists.**  Compose in 2D, stage scenes in 3D, and choose the models that fit your work.

## 它解决什么问题

直接用 Midjourney / Sora 的痛点是**不可控**：构图靠运气、角色换一张就变脸、机位没法指定、同一场景拍不了第二个镜头。

ArtCraft 的思路是**把「先搭景、再生成」产品化**：

- **2D 合成**：图层、抠图、绘制
- **3D 合成**：背景、前景、道具分层布置，带景深
- **Image to Location**：把虚拟演员放进一致的环境，同一房间规划多个镜头
- **Image to 3D Mesh**：图片转可旋转、可摆位的 3D 物体
- **角色一致性与机位控制**：生成前先定构图

> 一句话：**它把 prompt 变成可编辑的场景图**。

## 模型与供应商（62 个模型的目录）

| 类别 | 数量 | 代表模型 |
| --- | --- | --- |
| 图像 | 16 | Nano Banana 1/2/Pro、GPT Image 1.5/2/2.5、FLUX 1.1/2、**Seedream 4–5.0 Pro Ultra** |
| 视频 | 25 | Seedance 1.5/2.0、Kling 2.5–3.0、Veo 3/3.1、Sora 2、Vidu Q3、MiniMax H3、Flux 3 |
| 音乐音效 | 5 | Suno Music/Remix/Sounds/Sample、Seed Audio 1.0 |
| 3D 网格 | 11 | Hunyuan 3D 2.0–3.1、Tripo3D、Meshy 6、Rodin 2.5 |
| 世界/高斯泼溅 | 5 | Marble 1.0/1.1、TripoSplat |

**外部供应商**：ArtCraft 自家、**Grok**（Imagine/Video）、**Midjourney**、**Sora**、**World Labs**（Marble）。

> README 注明部分模型「当前禁用」或「受限」，且计划接入 Kling、Google、Runway、Luma，以及 OpenArt / Freepik 这类聚合订阅。

## 技术实现（读代码确认）

### 双 UI 并存，正在往纯 Rust 迁

- **正式版**：`crates/desktop/artcraft` = **Tauri 2.6.2** + React 前端（Radix UI、dnd-kit、preact signals、`@sparkjsdev/spark` 做高斯泼溅）
- **实验版**：`artcraft-native` = **纯 Rust egui 0.36**，包描述明写 "**no Tauri, no webview**"

> 两者共用同一套 API 客户端 crate——说明这是在**把 Tauri 外壳替换成原生 egui**，而不是两个产品。

### 代码规模

- **7,327** 个文件；**3,261** 个 `.rs`；**1,659** 个 `.ts/.tsx`
- crates 分四组：`api_clients`（9 个供应商客户端）、`desktop`、`lib`（约 20 个细小工具 crate）、`schema`
- 细到 `cookie_store`、`jwt_light`、`url_utils`、`files/mimetypes` 都单独成 crate——**Rust 社区的「小 crate」风格**

### 构建与分发

- 开发需 Rust + Node 24 + Tauri CLI 2.10
- 发布：macOS dmg（95 MB）、Windows exe（42 MB）、Linux AppImage（177 MB）/ deb（50 MB）
- 产物带 **.asc 签名**

### 真实采用度（下载量）

- Windows `x64-setup.exe`：**818,687** 次
- macOS universal dmg：**272,422** 次
- MSI：11,116 次

> 4 万星 + 80 万次下载，说明它**不是玩具**，已经有真实用户盘子。

## Roadmap 透露的野心

摘自 ROADMAP.md（2026 目标）：

- **产品**：做得比「模型聚合网站」更好（明确把自己和聚合站区分）；把所有模型和供应商都接进来；做**专用图像模型**（重打光、角色重摆姿）
- **Studio**：自建内容工作室，年底前做**至少一部长片 AI 电影**，并做院线发行 + 社媒内容；办影展与线下放映
- **架构**：**去掉对 ArtCraft 托管服务的依赖**；more Rust, more speed
- **社区**：建立一个「没有反 AI 偏见」的创作者社区
- **更大目标**：做一个 **Open 的 OpenAI / Google / Anthropic**（开放模型、开放平台、开放硬件）

> 「去掉托管服务依赖」这条很关键：**说明当前版本仍然依赖官方云端**，不是纯本地工具。

## 判断：它的护城河在哪

**① 不是模型，是「可控性」**
模型会不断被新版本替代，但「怎么把场景搭对、角色怎么保持一致、机位怎么定」这套工作流是**可积累的资产**。

**② 3D 预演是差异化**
大多数 AI 视频工具是「文生视频 + 抽卡」，ArtCraft 是「先搭 3D 场景，再让模型填充」。这更接近传统影视的 previs 流程。

**③ 多模型聚合 + 统一控制层**
62 个模型不是堆数量，而是**让用户按镜头选模型**（这个镜头要 Kling 的运镜、那个要 Veo 的质感）。

**④ 开源 + 双许可**
MIT/Apache 双许可，可商用、可改、可自建分发——对比闭源的同类工具是明显优势。

## 风险与问题

- **682 个 open issue**：功能扩张快于维护，问题积压明显
- **双 UI 过渡期**：Tauri + egui 两套界面同时存在，**重复实现与回归风险**
- **依赖官方云服务**：Roadmap 自己承认要去掉，说明当前不是「下载即完全本地」
- **模型 API 成本与条款**：62 个模型的计费、限流、商用授权各不相同，用户实际成本不透明
- **1.37 GB 仓库**：含大量测试素材，克隆与 CI 都重
- **62 个模型的长期维护**：每接一个新模型就是一条适配链，长尾成本高
- **「Open OpenAI」目标过大**：从桌面工具到基础设施，跨度极大，需观察是否只是愿景

## 与库内线索的关系

- [[代码视频 vs AI 视频：Hyperframes 与 Remotion 实测]] —— **正面对照**：那边是「代码编排、确定性渲染」，这边是「模型生成、场景可控」；ArtCraft 属于 AI 视频一侧，但用 3D 预演补了可控性
- [[豆包 Seedream 图生图颜色校正：Lab 色度迁移 + ΔE00 质检]] —— 它的模型目录包含 Seedream 4–5.0 Pro Ultra，可与颜色保真问题对照
- [[Seedream 5.0 Pro 清晰度差异与 1.5K 图生图质量评测]] —— 同一批模型的质量评测侧

## 待验证 / 证据边界

- 星数、许可、版本、下载量均已核实；**但功能效果（3D 合成、角色一致性）仅来自官方 README 演示，未实测**
- 「62 个模型」中部分标注为禁用/受限，**实际可用数量少于 62**
- 免费额度、订阅价格、各模型的计费口径**未核实**
- 「年底前做一部长片 AI 电影」是 Roadmap 表述，**无进度证据**
- 未验证：离线可用程度、本地模型支持、导出格式与工作流兼容性（Nuke/AE/DaVinci）
