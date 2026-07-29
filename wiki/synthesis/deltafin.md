# Deltafin — 在 Apple Silicon Mac 上运行万亿参数大模型的开源项目

Deltafin 是一个开源实验项目（MIT 许可），核心目标是让消费级 Apple Silicon Mac 能够运行远超其内存和存储容量的大语言模型。最突出的成果是在 **64GB 内存的 M1 Max MacBook** 上运行了 **月之暗面（Moonshot AI）的 Kimi K3 模型**——一个 2.8 万亿参数的 MoE（混合专家）模型，总权重约 1.56TB。

## 技术原理

MoE 模型的特点是每次推理只激活一小部分专家。Deltafin 利用这一点：

- **核心权重（Spine）**：非专家部分约 114GB，int8 量化后存于本地磁盘
- **专家权重（Experts）**：896 个专家中每层只激活 16 个，按需从 HuggingFace HTTP 流式拉取并缓存，或下载完整 1.56TB（或 1.45TB）到本地磁盘
- 提供 OpenAI 兼容 API 服务器，支持本地聊天和代码代理交互

## 实测表现

| 硬件 | 性能 |
|------|------|
| M1 Max 64GB | ~16 秒/token（极慢，但可运行） |
| 128GB RAM / M3/M4/M5 | 预计大幅提升 |

虽然速度远非可用，但证明了消费级硬件触碰万亿参数模型的可行性。

## 链接

- GitHub：https://github.com/gavamedia/deltafin
