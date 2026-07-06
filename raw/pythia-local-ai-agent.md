# PYTHIA：本地无密钥 AI Agent，全球实时感知 + 预测

来源：Reddit (r/SelfHostedAI) + GitHub
日期：2026-07-06

## 核心信息

- PYTHIA = Osiris（实时情报仪表盘）+ MiroFish（多智能体预测引擎）
- 本地运行（Ollama），无云端依赖，零 API key
- MIT 协议开源

## 要点

1. 解决 AI Agent "对现实世界盲目" 的问题
2. 聚合 30+ 免费、无密钥的数据源：
   - 冲突与安全：GDELT、乌克兰前线、网络威胁、GPS 干扰、核基础设施
   - 自然灾害：USGS 地震、NWS 风暴/洪水、FIRMS 野火、EONET 灾害、辐射
   - 市场：石油、指数、大宗商品、加密货币、Polymarket 赔率
   - 人道主义：UNHCR 流离失所、WHO 疾病、WFP 粮食安全、世界银行数据
   - 动向：航班（民用/军用/私人）、卫星、海事、实时新闻/CCTV
3. MiroFish：下一代 AI 预测引擎，构建高保真数字平行世界
   - 数千个智能体，各有不同性格、记忆和行为逻辑
   - 模拟集体人类行为，预测事件走向
   - 支持本地离线版（MiroFish-Offline，Neo4j + Ollama）
4. 预测范围：24 小时 / 一周 / 一月 / 一年
5. "委员会"评分机制：策略师、经济学家、自然主义者、怀疑论者多视角
6. 单次 API 调用即可向 Agent 提供 "整个实时世界" 的信息
