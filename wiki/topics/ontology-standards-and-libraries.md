---
type: topic
tags: [Ontology, 本体论, 顶层本体, 行业本体, 语义层, 开源标准, OWL, RDF, 知识图谱, 参考资料]
created: 2026-10-04
updated: 2026-10-04
related_sources: 1
source_url: https://mp.weixin.qq.com/s/5HsGQlZAn4VVq-hel8iiKQ
---

# 顶层本体与行业本体库整理（含开源）

> 素材：微信公众号「基线沉思」《顶层本体、行业本体库整理（含开源）》（2026-09-03），原文归档于 `raw/ontology-standards-and-libraries.md`。
> **来源性质：链接清单（资源汇编）**，非技术分析稿；作者自建「本体建模知识星球」，清单为人工整理，**覆盖面与时效未做第三方核验**。

## 一句话

这是一份**可直接下载/访问的本体（Ontology）标准清单**，从 5 个顶层本体锚点，铺开 W3C 基础设施与 16 个行业的本体/词表（绝大多数有 GitHub 上的 OWL/RDF 开源实现）——是「本体建模 / 语义层」落地的**选型起点**。

## 结构总览

- **顶层本体（5）**：BFO 2.0（ISO 21838-2）、DOLCE、UFO/OntoUML、SUMO、GFO —— 行业本体挂靠的「上位骨架」
- **W3C 跨行业基础设施（8）**：OWL 2、RDF 1.1、SKOS、PROV-O、DCAT 3、SSN/SOSA、Schema.org、SPARQL 1.1 —— 语言/查询/元数据底座
- **行业本体（16 域）**：制造/工业 4.0、能源/电力、油气/流程工业、金融/监管、医疗/生命科学、建筑/BIM、供应链/零售、智慧城市/IoT、数字孪生、法律/合规、农业/食品、交通/物流……

完整链接清单见归档：`raw/ontology-standards-and-libraries.md`（18 张分组表）。

## 值得留意的代表项

- **制造**：IOF（工业本体联盟，GitHub 开源）、ISO 10303 (STEP) 与 OntoSTEP(OWL)、AAS 资产管理壳（IDTA，GitHub `admin-shell-io/aas-specs`）
- **能源**：IEC CIM（61970/61968）OWL 化实现（`griddigit-ci/CIM-OWL`）、ETSI SAREF4ENER
- **金融**：**FIBO**（EDM Council，GitHub OWL + 在线浏览器）、OMG Commons Ontology Library、ACTUS
- **医疗/生命科学**：SNOMED CT、HL7 FHIR（含 RDF 版）、**OBO Foundry**（含 GO / ChEBI / UBERON）、LOINC、RxNorm、ICD-11、MeSH
- **建筑/BIM**：IFC 与 **ifcOWL**、BOT、CityGML 3.0
- **数字孪生**：DTDL（微软）、W3C WoT Thing Description、ISO/IEC 30173
- **智慧城市/IoT**：**ETSI SAREF 全系列**（CITY/BLDG/WATR/ENER/AGRI/INMA 等按域拆分）

## 作者的实用提示

- **部分 ISO 正式标准需付费**（iso.org），但**对应的 OWL/RDF 实现版本通常可在 GitHub 免费获取** —— 先用开源实现建模，再按需对齐正式标准
- 分层选用：顶层本体做上位约束 → W3C 基础设施定语言/查询 → 行业本体落业务概念

## 相关概念

- [[本体论 (Ontology)]] — 概念页：本体是什么、为什么需要
- [[本体建模五步法：本体论+AI如何进入复杂工业场景]] — 怎么建：业务梳理 → 本体建模 → 数智化融合
- [[EvoOntology：让 Data Agent 自己维护本体层（自进化 Ontology）]] — 建完以后谁维护：Agent 运行时自进化
- [[Datastrato 2.0：Agent Context 的三重支柱（统一元数据 → 开放语义层 → Ontology）]] — Ontology 在企业 Agent 上下文里的位置
- [[Apache Ossie 实战：给 AI 取数系统搭一层业务语义地基]] — 语义层落地：指标口径与取数链路

## 延展阅读

- 原文（微信）：https://mp.weixin.qq.com/s/5HsGQlZAn4VVq-hel8iiKQ
