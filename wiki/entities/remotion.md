---
type: entity
tags: [Remotion, 代码视频, React, 许可证, source-available, 商业授权, Hyperframes, 对比]
created: 2026-11-04
updated: 2026-11-04
related_sources: 1
source_url: https://github.com/remotion-dev/remotion
---

# Remotion：用 React 写视频（但**不是开源软件**）

> 仓库：`remotion-dev/remotion`｜ 官网：https://www.remotion.dev ｜ 许可页：https://www.remotion.pro/license
> 核实（2026-11-04）：**TypeScript**，⭐**70,573** / fork 5,809，创建 **2020-06-23**，当日仍在推送；GitHub license 字段为 **NOASSERTION**

## 一句话

代码视频领域的事实标准，生态最成熟；但它是 **source-available**，不是 OSI 开源软件。

## 许可证：两个层级（原文核实）

许可证文件名 `LICENSE.md`，标题就是 **Remotion License**（自定义）。原文关键句：

> Individuals and small companies are allowed to use Remotion to create videos for free (even commercial), while a company license is required for for-profit organizations of a certain size.

### Free License 的适用对象

- 个人
- **营利组织，员工不超过 3 人**
- 非营利 / 非盈利组织
- 仅在评估、尚未商业使用

免费许可**允许商业使用**，也允许修改源码以适配自己的场景。

### 明确禁止的事

> It is not allowed to copy or modify Remotion code for the purpose of selling, renting, licensing, relicensing, or sublicensing your own derivate of Remotion.

即：**不能拿它做一个衍生品去卖/租/再授权**。这挡住了「基于 Remotion 做 SaaS 卖给别人」。

### Company License

不符合 Free License 的组织必须购买公司许可，价格见 remotion.pro/license；附带优先支持。

### 5.0 会改许可

LICENSE.md 开头注明：Remotion 5.0 将小幅调整许可条款（PR #3750），届时需重新评估。

## 它是什么

- 用 **React 组件**描述视频：每一帧就是一个 React 渲染结果
- 底层同样是 **headless Chrome + FFmpeg**（与 HyperFrames 同源思路）
- 生态：官方 Lambda 云端渲染、Player、Studio、大量第三方组件与教程
- 2020 年开源（创建 2020-06-23），比 HyperFrames 早 6 年

## 与 HyperFrames 的关键差异

- **许可**：Remotion 源码可见 + 规模收费 ｜ HyperFrames Apache-2.0
- **创作模型**：React 组件 ｜ 纯 HTML + data 属性
- **构建**：需要打包器 ｜ 无构建，index.html 直接可播
- **Agent 友好度**：依靠 React 语料 ｜ 9 个 skill + 450 块 + frame.md
- **分布式渲染**：Remotion Lambda 更成熟 ｜ AWS Lambda 可用但较新
- **星数**：70,573 ｜ 78,566（后者已反超）

## 商用判断

- 个人 / 3 人以内小公司：**免费可商用**，性价比极高
- 4 人以上营利公司：**必须买公司许可**，需纳入预算与法务评审
- 想做视频生成 SaaS 对外售卖：**Remotion 许可不允许**，应选 Apache-2.0 方案
- 只想内部出片、团队小：Remotion 生态更省事

## 待验证

- 公司许可的具体价格与计费口径（未读定价页）
- Remotion 5.0 的许可变更细节（仅见 PR 链接）
- Lambda 渲染的费用构成（AWS 资源 + 是否有额外授权要求）
- 「员工数」如何界定（全职/外包/集团合并）需查 FAQ
