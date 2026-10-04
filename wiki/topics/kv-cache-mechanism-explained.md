---
type: topic
tags: [KV Cache, 推理优化, Attention, 显存, DeepSeek, MLA, GQA, 线性注意力, 长上下文, Transformer]
created: 2026-10-04
updated: 2026-10-04
related_sources: 1
source_url: https://mp.weixin.qq.com/s/zQ0KFPa_8tqG-H1CAy8Jig
---

# KV Cache 机制详解：从 Attention 到四大开源模型架构

> 素材：微信公众号「亦行学社」（原文「小H无记」）《KV Cache 机制详解》（2026-09-29），原文归档于 `raw/kv-cache-mechanism-explained.md`（约 1.5 万字 + 28 张图）。
> **来源性质：科普长文**，结构完整、推导清晰；模型配置与收益数字为作者整理，**未见官方文档逐条核验**。

## 一句话本质

**KV cache = 用显存换计算**：把「历史 token 的 K/V」存进显存，自回归生成时新 token 只算自己的 Q/K/V，避免 O(n²) 的冗余重算。

## 全文脉络（七章）

**一、Attention 从哪来**：RNN 的两大死穴（串行无法并行 → 长距离梯度消失）催生 Attention（2014-2015）→ Transformer 自注意力（2017）；Q/K/V 是三个不同投影矩阵的产物，名字来自信息检索的「查询-键-值」隐喻。

**二、Attention 流程 + 自回归**：一次一个 token；**因果掩码**（只能看前面）是 KV cache 成立的前提；`lm_head` 把输出向量变回 token。

**三、缓存什么**：**缓存 K/V，不缓存 Q**（历史 Q 后续用不上）。推理因此分两阶段：
- **Prefill**：并行处理整个 prompt，算力密集，决定 TTFT
- **Decode**：逐 token，**带宽敏感而非算力敏感**（每步只算 1 个新 token，却要读全部 KV cache）——这是后面所有优化的关键分界

**四、显存代价**：
```
KV = 2 × batch × 层数 × KV头数 × 头维度 × token数 × 字节/元素
```
- 根因：每层有独立 W_Q/W_K/W_V，所以 KV 要 **× 层数**
- 算例 **Llama2-7B**：32 层 × 32 头 × 128 维 × FP16 → **每 token 512KB**；4096 ctx ≈ **2GB**
- **MHA vs GQA**：GQA（4 KV 头 vs 32 Q 头）省 **8 倍**；MQA 省 32 倍
- 长上下文爆炸：256K ctx ≈ **128GB**，超过单卡显存

**五、优化六维度**：架构（MHA→MQA→GQA）、量化（FP16→INT8/FP8/FP4）、内存管理（PagedAttention）、计算（FlashAttention O(n²)→O(n)）、驱逐（StreamingLLM/H2O/SnapKV）、层级存储（InfiniGen/InfLLM）。

**六、国内四大开源模型实战**（本篇重点）：

- **DeepSeek — MLA**：把多头 K/V **压缩成每 token 一个低维潜向量**，缓存潜向量而非完整 K/V；**KV cache 减少 93.3%，生成吞吐提升 5.76 倍**；cache 规模 ≈「2.25 组 GQA」但表达力可超 MHA。关键：压缩矩阵是**训练中学出来的**，丢的是冗余不是有效信息
- **Qwen**：Qwen3 走 **GQA**（32 Q 头 / 4 KV 头，≈96KB/token，仍 O(n²)）→ Qwen3.5+ 转 **Gated DeltaNet 线性注意力**（核函数近似 softmax，复杂度 O(n²)→O(n)，delta rule 先擦后写 + 门控智能遗忘）
- **GLM**：GLM-4.7 MHA（≈962KB/token，Qwen3 的 10 倍）→ GLM-5 **MLA + DSA**（两层正交压缩：MLA 压维度省存储、DSA 压数量省计算）→ GLM-5.3 转 KDA
  - **重要澄清**：DSA 省「计算」不省「存储」（动态稀疏，KV 仍需全量存），存储靠 MLA
- **Kimi**：**KDA**（Kimi Delta Attention，通道级门控）+ MLA 的 **3:1 混合**；K2 支持 1M 上下文，KV cache 减 75%、解码吞吐提升 6 倍；K3 为 93 层（69 KDA + 24 Gated MLA）

**收敛趋势**：四家都趋同「**线性注意力混合（3:1）+ 稀疏 + 长上下文**」——因为纯线性注意力有**记忆饱和**（MiniMax 实测 32K+ 多跳推理有缺陷），只能靠混合折中。

## 对系统设计的启示

- 推理引擎的存储层级设计要**区分 Prefill（算力）与 Decode（带宽）**——稀疏/驱逐都只在 Decode 阶段划算
- **缓存对象本身在变**：从「多头 K/V」→「低维潜向量」（MLA）→「固定大小循环状态」（线性注意力）；如果目标模型走线性注意力，存储层级要从「KV 分层」转向「**循环状态管理**」
- 新架构要兼容「**混合架构 + 超长上下文**」
- 硬件/生态是现实障碍：现有 GPU 与 FlashAttention 都为 softmax 注意力优化，线性注意力的循环状态更新需全新 kernel；训练也更难（需 Muon 等优化器）

## 参考论文（作者整理）

- 系统/内核：PagedAttention（vLLM）、FlashAttention / FA-2 / FA-3
- 驱逐/稀疏：StreamingLLM、H2O、SnapKV、Longformer、BigBird
- 层级存储：InfiniGen、InfLLM
- 国产模型架构：MLA（DeepSeek-V2）、Gated DeltaNet（Qwen3.5）、KDA（Kimi）、GLM-5 的 MLA+DSA

## 相关概念

- [[各大模型厂商 KV-Cache 处理方式全景对比]] — 厂商机制/定价视角的横向对比，本篇补上「原理推导 + 架构演进」的纵切面
- [[DeepSeek V4 Pro (0813) · J-Space]] — DeepSeek 侧的最新进展
- [[Pi Agent 的 Context 管理：组装、增长、压缩与重建]] — 应用侧的「上下文压缩」问题，与本篇的「KV 显存」是两个不同层面的成本

## 延展阅读

- 原文（微信）：https://mp.weixin.qq.com/s/zQ0KFPa_8tqG-H1CAy8Jig
