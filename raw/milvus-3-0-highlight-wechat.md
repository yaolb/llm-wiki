# Milvus 3.0 开源解读｜词法+语义高亮，如何解决 Agent 的搜索噪音？

> 来源：微信公众号「Zilliz」（作者：岳志澄，Senior Software Engineer at Zilliz）
> 链接：https://mp.weixin.qq.com/s/LLOT7O4fbmGh2nmMA3s-Jg
> 发布日期：2026-08（Milvus 3.0 开源解读系列）

## 问题背景：RAG/Agent 检索噪音

RAG 与 Agent 用到深水区一定会遇到：检索结果没什么问题，但模型输出总是差点意思，上下文成本居高不下。

根本原因：为了完整召回相关内容，一次 query 常打捞出三五段甚至十段文档给 LLM。每篇文档几千字时，一个 query 消耗几万 token；而 10 篇文档里真正有用的句子可能只有几十句，其余全是噪音。大量噪音灌入不仅浪费 token，也分散 LLM 注意力。

对人类用户同样如此：电商、客服 RAG 中常有几千字技术文档、几十页合同或很长客服记录，逐段寻找"重点"很麻烦。

## Milvus 3.0 的 Highlight 能力

对与查询相关的文本进行**词法**（BM25 搜索文本或显式 TextMatch 查询匹配 token）或**语义**层面的高亮：短文本直接展示匹配内容，长文本截取重点及附近上下文，降低大模型上下文长度，让电商、知识库等场景检索更高效直观。

## 01 词法高亮（Lexical Highlighting）

通过 Token 匹配高亮，是最基础、最常用的方案。

- **逻辑**：与 BM25、Text Match 搜索一脉相承，复用同一套分词规则（analyzer）处理查询和结果文本；匹配命中词汇后按原文位置插入高亮标记，保证边界完全一致、无错位偏差
- **流程**：查询与结果文本 → analyzer → token 匹配 → 原文位置 → 高亮结果

### 两种配置方式

1. **配合 BM25 搜索**：开启 `highlight_search_text=True`，系统直接用当前搜索关键词生成高亮。如搜索"BM25 混合搜索"，返回标题"BM25 与混合搜索的配置方法"自动标注命中关键词。

```python
from pymilvus import LexicalHighlighter, MilvusClient
client = MilvusClient(uri="http://localhost:19530")
highlighter = LexicalHighlighter(
    pre_tags=["<mark>"],
    post_tags=["</mark>"],
    highlight_search_text=True,
)
results = client.search(
    collection_name="document_titles",
    data=["BM25 混合搜索"],
    anns_field="title_sparse",
    search_params={"metric_type": "BM25"},
    limit=10,
    output_fields=["title"],
    highlighter=highlighter,
)
```

2. **显式 TextMatch**：自定义匹配规则，或给向量搜索结果补充关键词匹配证据，通过 `highlight_query` 指定目标字段和匹配文本。只在已返回结果中查找标记 token，不扩大候选集、不重新排序。

```python
highlighter = LexicalHighlighter(
    highlight_search_text=False,
    highlight_query=[{
        "type": "TextMatch",
        "field": "title",
        "text": "BM25 混合搜索",
    }],
    pre_tags=["<mark>"],
    post_tags=["</mark>"],
)
```

### Fragment 片段组织

目标字段为长正文时，词法高亮以 fragment 片段输出匹配内容，而非完整文本：

- 默认 `fragment_size` = 100 字符、`num_of_fragments` = 5
- 多个匹配落在同一 fragment 范围则合并；分布在不同位置则按原文顺序生成多个 fragment，直到达到数量限制
- 可调 `fragment_offset`（上下文偏移）、`fragment_size`（片段大小）、`num_of_fragments`（最多返回段数）
- fragment 按匹配内容在原文中的先后顺序返回，**不按 BM25 分数重新排序**
- 片段随每个搜索结果的 `highlight` 字段返回；即使正文未作为普通输出字段返回，Milvus 也能取得高亮所需文本生成片段，避免为展示少量重点返回完整正文

## 02 语义高亮（Semantic Highlighting）

词法高亮的边界：查询和文档必须共享相同词汇。当二者语义相关但表述完全不同时——如搜"账号登不上怎么恢复"，文档写"连续验证失败后可由管理员解除账户锁定"——词法匹配难以精准定位。

语义高亮在搜索结果返回后，通过**独立的语义模型对文本做二次解读**，独立判断查询与各文本片段的语义关联度，筛选最相关内容标记。查询和文档没有重合关键词也能准确识别。

### 开源 Semantic Highlight 模型

构建时发现市面已有语义高亮模型要么只支持英文、要么上下文窗口太小（512 token）、要么协议不友好（不允许商业使用），没有一个能同时满足：中英文都强、窗口够大、泛化能力好、协议友好。

因此 Zilliz 构建并开源了内部最新的 **Semantic Highlight（语义高亮）模型**，作为 Milvus 3.0 能力的一环：

- 支持中英文双语处理
- **与 Context Pruning 上下文剪枝本质是同一技术的一体两面**，可用于 Context Pruning 场景，在 Agent 应用中精准裁剪上下文，降低大模型 token 成本
- 官方称可帮 RAG/agent **剪枝 80% 上下文**

### 使用方式

```python
from pymilvus import SemanticHighlighter
highlighter = SemanticHighlighter(
    queries=["怎样恢复无法登录的账号"],
    input_fields=["content"],
    pre_tags=["<mark>"],
    post_tags=["</mark>"],
    model_deployment_id="your-model-deployment",
)
results = client.search(
    collection_name="support_articles",
    data=[query_embedding],
    anns_field="embedding",
    search_params={"metric_type": "COSINE"},
    limit=10,
    output_fields=["title"],
    highlighter=highlighter,
)
```

`queries` 提供需要理解的问题，`input_fields` 指定需分析的文本字段；返回结果除相关片段外，还可包含片段分数。

**适用场景**：长文档问答、RAG 引用、客服知识库、查询改写较多的场景——寻找语义关联，不要求查询和文档共享相同 token。

## 03 使用须知

- 词法高亮与语义高亮均为**基于搜索结果的后处理能力**：不参与召回与排序，不影响结果顺序与分数，也不能完整解释相关性分数的计算过程
- 当前 Milvus 实现中的语义高亮依赖配置好的**外部高亮服务或模型部署**，不是通用的本地离线能力；具体可用性取决于产品、部署方式和版本

---

**作者**：岳志澄，Senior Software Engineer at Zilliz

**系列相关**：官宣开源｜Milvus 3.0 正式发布；backfill（亿级 AI 数据高效特征回填）；Kafka/Pulsar → Woodpecker 低延迟低成本写入；Manifest（AI 数据管理放弃文件中心架构）；数据库原生聚合排序取代应用侧 Pandas 胶水代码；Regex 从 =~ 到 NGRAM 的正则过滤；Snapshot（无需复制 embedding 数据的 Collection 视图）；自定义词典优化 BM25 与 Text Match 专业词理解；原生 TEXT 类型和 LOB 管理原始文本
