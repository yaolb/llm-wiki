# 豆包图生图颜色适配：Seedream 色差与 Lab 校正方案

> 来源：ChatGPT 会话「豆包图生图颜色适配」（用户自有账号）
> 链接：https://chatgpt.com/c/6acc6d62-c0c8-83ea-9731-3c1e4b160d72
> 抓取：ego lite（ego-browser，spaceId 20）已登录会话渲染后提取正文
> 日期：2026-10-19 抓取
> 来源性质：**ChatGPT 生成的对话内容**，非正式出版物。文中数据、API 参数与结论需以官方文档/实测为准。
> 原始素材：无正文图；未留存页面快照（私有会话，正文已完整提取）

---

你说：
豆包图生图颜色适配不好吗
ChatGPT 说：

是的，豆包图生图（尤其是 Seedream 系列）在颜色精确还原方面确实存在一定局限。但更准确地说，不是它的颜色适配能力差，而是它更擅长视觉自然的颜色融合，不擅长商品颜色的像素级保真。

结合你之前的电商模特换裤子场景，这个问题会比较明显。

一、为什么豆包换装容易出现色差？

主要有四个原因：

原因

	

具体表现

	

影响




生成式重绘

	

模型重新生成裤子纹理与颜色，而非直接复制原始像素

	

原商品颜色发生偏移




光照适配

	

自动根据模特场景调整裤子亮度、色温

	

浅灰变白、米色变黄




参考图理解

	

模型理解的是颜色语义，而非精确 RGB/Lab 数值

	

相近颜色容易混淆




多图参考冲突

	

商品图和模特底图的颜色相互影响

	

最终颜色不稳定

例如，你上传一条浅卡其色裤子，模型可能生成偏米白色的裤子。即使提示词强调“严格保持原始颜色”，也不能保证色值完全一致。

二、不同方案的颜色保真能力

以下是基于技术机制的定性比较，并非统一数据集上的实测排名。

方案

	

颜色保真

	

服装自然度

	

部署成本




豆包 Seedream 直接换装

	

中等

	

高

	

API 调用




GPT Image 图生图

	

中等，需实测

	

高

	

API 调用




FLUX + 局部 Inpainting

	

中高，可控性较强

	

高

	

GPU / API




虚拟试衣专用模型

	

中高，依赖模型

	

高

	

GPU / API




豆包生成 + OpenCV 色彩校正

	

较高，可量化控制

	

高

	

较低

三、针对你的场景，我更推荐混合方案

输入：商品裤子图 + 模特底图

Seedream 图生图

负责版型、姿态、褶皱、遮挡、光照

SAM / 人体解析获取裤子 Mask

只定位需要颜色校正的区域

OpenCV + Lab 色彩校正

匹配商品颜色，尽量保留褶皱明暗和纹理

最终电商换装图片

颜色偏差检测 + 边缘质量检查

这里最重要的是：不要简单地把生成裤子的平均 RGB 调整为商品裤子的平均 RGB。因为商品图和模特图的光照、阴影、材质反射不同，这种处理容易导致裤子看起来像被整体涂了一层颜色。

更合理的是在 Lab 色彩空间中：

以商品图中均匀受光的面料区域提取颜色基准。

主要校正 a*、b* 色度通道。

对 L* 明度通道进行受约束调整，保留原有褶皱。

使用 Mask 羽化处理裤子边缘，避免影响手、鞋和背景。

用 ΔE00 评估可比较面料区域的颜色偏差。

四、我的建议

对于你正在做的电商 AI 换装系统，可以将豆包定位为服装结构与场景融合生成引擎，而不是最终颜色的唯一决定者。

尤其是黑色、深灰、浅灰、米白、卡其等商品颜色，细微偏差都可能影响电商展示的准确性。

我想确认一个关键问题：你目前使用的是 Seedream 4.0、4.5，还是 5.0 系列？

不同版本的图生图能力和 API 参数不同，我可以针对你实际使用的版本，进一步分析能否通过参考图权重、局部编辑、Mask 或后处理来解决颜色偏差。

你说：
5.0
ChatGPT 说：

你使用的是 豆包 Seedream 5.0，那我建议针对这个版本重点解决两个问题：商品颜色保真和生成后的颜色校正。

对于你之前的模特换裤子场景，Seedream 5.0 可以负责裤子的版型、褶皱、人体姿态和场景融合，但不能仅靠提示词保证商品颜色精确一致。

尤其要区分两种情况：

整体偏色：例如卡其色变成米白色、浅灰色变成偏蓝色。这种情况适合通过 OpenCV 后处理。

局部颜色不一致：例如裤腿颜色正常，但膝盖、裤裆、口袋附近出现明显色差。这种情况需要结合区域分割、光照分析和局部校正。

Seedream 5.0 有一个值得利用的新能力

我查了火山方舟的官方文档，目前 5.0 系列有三个版本：

版本

	

图生图

	

定位编辑

	

图层拆分




5.0 Lite

	

支持

	

不支持 Pro/Flash 的交互定位

	

不支持




5.0 Pro

	

支持

	

支持坐标、框选

	

支持




5.0 Flash

	

支持

	

支持坐标、框选

	

支持

其中 5.0 Pro 和 Flash 支持交互式编辑，可以通过坐标、框选、箭头等方式指定需要修改的位置。
Volcengine Docs
+1

这对换裤子很有价值，因为你可以明确告诉模型修改哪里，而不是完全依赖自然语言理解。

不过需要注意：交互式框选不等于像素级 Mask Inpainting。它能帮助模型定位裤子，但不代表框选区域之外的像素绝对不变，也不能直接解决颜色精度问题。

推荐你先做三项实验

原始方案：商品图 + 模特图 + 换装提示词，测量输出颜色偏差。

交互编辑方案：使用 Pro/Flash 框选裤子区域，保持其他输入不变，比较颜色和结构一致性。

颜色后处理方案：在第二种结果上使用 OpenCV Lab 色彩校正，比较 ΔE00、纹理损失和边缘质量。

如果第三种明显更好，就可以把色彩校正作为生产服务中的独立模块，不必每次都重新调用生图 API。

官方接口文档：火山方舟图片生成 API。

再确认一个细节：你调用的是 doubao-seedream-5-0-260128（Lite），还是 doubao-seedream-5-0-pro-260628（Pro）？

这个决定了能否直接使用 5.0 的交互编辑能力。

你说：
pro
ChatGPT 说：

那就明确了，你使用的是 Doubao Seedream 5.0 Pro（doubao-seedream-5-0-pro-260628）。

我查了火山方舟官方文档，这个版本支持多图生图、交互式框选编辑以及图层拆分。尤其是交互式编辑，可以通过框选、坐标和标注指定修改区域。
Volcengine Docs
+1

针对你的电商换裤子系统，我建议采用以下方案。

一、优先尝试 Pro 原生能力

不要一开始就引入复杂的 GPU 模型。先利用 5.0 Pro 的交互编辑能力：

商品图作为裤子版型、颜色、材质的唯一参考。

模特图作为人物姿态、背景、光照参考。

通过框选或标注，明确指定模特裤子的替换范围。

提示词要求保持商品颜色，不对面料进行自动美化和调色。

输出 PNG，减少有损压缩对后续颜色分析的干扰。

官方还建议中文提示词不超过约 300 字，过长容易分散模型对关键约束的注意力。
Volcengine Docs

二、可以直接测试的提示词
纯文本
任务：将图2模特穿着的裤子替换为图1商品裤子。

图1为商品唯一参考，严格还原裤子的颜色、版型、
材质、纹理、口袋、裤缝、裤脚和结构细节。

图2为模特底图，保持人物身份、姿态、身材比例、
手部动作、鞋子、背景和原有光照不变。

颜色要求：
以图1均匀受光的面料区域作为颜色基准。
不得改变商品固有色相、饱和度和基础明度。
仅允许根据图2环境产生自然的褶皱阴影和高光。
禁止自动美白、提亮、增艳、偏灰或偏黄。

替换范围仅限裤子及必要的手部遮挡衔接区域。
确保最终效果真实自然，适合电商商品展示。
三、如果依然偏色，增加颜色校正模块

推荐服务端流程：

Seedream 5.0 Pro → 裤子分割 → Lab 颜色匹配 → 局部光照保留 → ΔE00 质量检测

其中最重要的是分开处理固有颜色和光照明暗。如果裤子原本是灰色，就不能因为模特环境光较亮，自动变成近乎白色。

这里也可以利用 Pro 的图层拆分功能，但需要注意：模型拆出的裤子图层不一定具有像素级准确边缘，仍需检查和必要的 Mask 修正。

四、我更想确认你的实际问题

目前最明显的颜色问题是？

裤子整体颜色与商品图不一致
受模特光照影响，颜色变亮或变暗
裤子不同部位颜色不一致
以上问题都有

目前怎么调用模型？

火山方舟 API
网页 / 控制台
生成针对性解决方案

我会根据你的实际情况，优先选择不增加额外生图次数、尽量通过 Java + OpenCV 完成颜色保真的实现方式。

你说：
我使用 Seedream 5.0 Pro，主要问题是：换装后裤子整体颜色与商品图不一致；调用方式：火山方舟 API。请给我具体可落地的技术方案和接口调用示例。
ChatGPT 说：

针对你的场景——Seedream 5.0 Pro + 火山方舟 API + 电商模特换裤子 + 商品颜色必须一致——我推荐采用：

Seedream 负责换装生成，OpenCV 负责颜色保真，SAM 负责区域定位。

不要继续单纯依赖提示词解决色差。生成式模型通常会根据模特底图的光照、场景和自身的视觉偏好重新生成面料颜色，因此即使提示词明确要求颜色一致，也不能保证输出色值一致。

一、推荐的生产级架构

输入层

商品裤子图 + 模特原图

商品颜色提取

OpenCV / Lab

Seedream 5.0 Pro

生成换装图片

裤子区域分割

SAM / 人体解析 / Mask

颜色校正引擎

Lab 色度迁移 + 明度保护 + 边缘融合

质量检测

ΔE00 色差 + 纹理 + Mask 边缘

输出最终电商图片

颜色更接近商品图，保留自然褶皱

这套架构可以分阶段落地。第一阶段不必部署 SAM，直接使用人工或已有分割服务生成 Mask，就能验证颜色校正是否有效。

二、Seedream 5.0 Pro API 调用

官方接口确认使用：

POST https://ark.cn-beijing.volces.com/api/v3/images/generations

支持传入多张参考图，5.0 Pro 最多 10 张，普通生成模式返回单张图片。
Volcengine Docs

1. cURL 示例

下面采用图1为商品图、图2为模特图的顺序。

Bash

export ARK_API_KEY="你的火山方舟API_KEY"

curl --max-time 300 \
  "https://ark.cn-beijing.volces.com/api/v3/images/generations" \
  -H "Authorization: Bearer ${ARK_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "doubao-seedream-5-0-pro-260628",
    "image": [
      "https://your-domain.com/product-pants.png",
      "https://your-domain.com/model.png"
    ],
    "prompt": "图1是商品裤子，图2是模特底图。将图2模特原有裤子替换为图1商品裤子。图1是裤子固有颜色、面料、版型和细节的唯一参考。严格保持商品面料的原始色相、饱和度和基础明度，不要自动美白、增艳或改变色温。仅根据图2环境生成合理的褶皱、高光和阴影。保持模特身体、手部、鞋子、背景不变。输出真实自然的电商换装照片。",
    "size": "2K",
    "output_format": "png",
    "response_format": "url",
    "watermark": false
  }'


建议首先使用 PNG 输出，并保持参考图顺序固定，方便批量测试。注意 PNG 只能避免输出编码引入的有损压缩，不能保证模型生成的颜色准确。

2. Java 17 调用示例

以下使用 JDK 自带 HttpClient 和 Jackson，不依赖火山专用 SDK。

Java

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.net.http.*;
import java.time.Duration;
import java.util.*;

public class SeedreamClient {
    static final String API =
        "https://ark.cn-beijing.volces.com/api/v3/images/generations";

    static final ObjectMapper JSON = new ObjectMapper();

    public static String generate(
        String productUrl,
        String modelUrl
    ) throws Exception {

        String apiKey = System.getenv("ARK_API_KEY");
        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException("ARK_API_KEY is missing");
        }

        Map<String, Object> body = new LinkedHashMap<>();
        body.put("model", "doubao-seedream-5-0-pro-260628");
        body.put("image", List.of(productUrl, modelUrl));
        body.put("prompt",
            "图1为商品裤子，图2为模特底图。" +
            "将图2裤子替换为图1商品裤子。" +
            "图1是商品颜色、材质、版型唯一参考。" +
            "严格保持商品固有色，不自动美白、提亮、偏色。" +
            "保持模特姿态、手部、鞋子、背景不变。" +
            "只生成合理的自然褶皱与光照。");
        body.put("size", "2K");
        body.put("output_format", "png");
        body.put("response_format", "url");
        body.put("watermark", false);

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(20))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(API))
            .timeout(Duration.ofMinutes(5))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(
                JSON.writeValueAsString(body)))
            .build();

        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );

        if (response.statusCode() != 200) {
            throw new RuntimeException(
                "Seedream API error: " + response.statusCode()
                + " " + response.body());
        }

        JsonNode result = JSON.readTree(response.body());
        JsonNode data = result.path("data");

        if (!data.isArray() || data.isEmpty()
            || !data.get(0).hasNonNull("url")) {
            throw new RuntimeException(
                "No image URL returned: " + response.body());
        }

        return data.get(0).get("url").asText();
    }
}


生产环境建议额外增加 429/5xx 有限重试、请求幂等控制、返回图片持久化，以及对参考图 URL 的有效性检查。

三、颜色校正算法：推荐 Lab 色度迁移

这是整个方案中最关键的部分。

首先从商品图中提取可信的面料颜色。不要使用整张商品图的平均色，因为它包含背景、口袋阴影、折痕甚至吊牌。

推荐使用商品裤子主体中均匀受光的区域，计算 Lab 色彩空间的中位数：

𝐶
ref
=
(
𝐿
𝑟
,
𝑎
𝑟
,
𝑏
𝑟
)
C
ref
	​

=(L
r
	​

,a
r
	​

,b
r
	​

)

再从生成图的裤子区域提取对应的可信面料色：

𝐶
gen
=
(
𝐿
𝑔
,
𝑎
𝑔
,
𝑏
𝑔
)
C
gen
	​

=(L
g
	​

,a
g
	​

,b
g
	​

)

计算色度偏移：

Δ
𝑎
=
𝑎
𝑟
−
𝑎
𝑔
,
Δ
𝑏
=
𝑏
𝑟
−
𝑏
𝑔
Δa=a
r
	​

−a
g
	​

,Δb=b
r
	​

−b
g
	​


对生成图的裤子像素进行受约束调整：

𝑎
′
=
𝑎
+
𝛼
Δ
𝑎
a
′
=a+αΔa
𝑏
′
=
𝑏
+
𝛼
Δ
𝑏
b
′
=b+αΔb

其中 
𝛼
α 是校正强度，可以先从 0.7 开始实验，再逐步调整。

对于明度 L，不要直接全部替换为商品图明度，否则容易破坏裤子自然的立体感。可以只修正中间调，尽量保留阴影和高光。

可运行的 Python + OpenCV 验证代码

先用 Python 验证效果，再决定是否迁移到 Java。以下代码使用标准 CIELAB 浮点表示，而不是 OpenCV 8 位 Lab 的偏移编码。

输入三张图片：

product.png：商品图

generated.png：Seedream 输出图

pants_mask.png：与生成图同尺寸的裤子蒙版，白色表示裤子区域

另外需要分别指定商品图和生成图中的均匀受光面料 ROI。

Python
运行


import cv2
import numpy as np


def read_rgb(path):
    bgr = cv2.imread(path)
    if bgr is None:
        raise ValueError(f"Cannot read {path}")
    return cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)


def to_lab(rgb):
    return cv2.cvtColor(
        rgb.astype(np.float32) / 255.0,
        cv2.COLOR_RGB2LAB
    )


def median_lab(lab, roi):
    x1, y1, x2, y2 = roi
    patch = lab[y1:y2, x1:x2]
    if patch.size == 0:
        raise ValueError("Empty ROI")
    return np.median(
        patch.reshape(-1, 3), axis=0
    )


product = read_rgb("product.png")
generated = read_rgb("generated.png")


mask = cv2.imread(
    "pants_mask.png", cv2.IMREAD_GRAYSCALE
)


if mask is None or mask.shape != generated.shape[:2]:
    raise ValueError("Invalid pants mask")


product_lab = to_lab(product)

这段代码适合验证整体偏色、单一主色面料的情况。对于渐变色、拼接色、牛仔水洗、花纹裤子，需要使用局部颜色映射，而不是一个全局色度偏移。

还有一个关键前提：两个 ROI 必须来自可比较的面料区域。否则测量到的可能是光照差异，而不是固有颜色差异。

四、Java 生产环境如何落地

考虑到你主要使用 Java 后端，我建议第一版不引入额外 Python 服务。

模块

	

推荐实现

	

是否需要 GPU




图生图

	

Seedream 5.0 Pro API

	

否，本地不需要




图片读取

	

OpenCV Java

	

否




裤子区域定位

	

人工 Mask / 现有分割 API

	

取决于服务




颜色空间转换

	

OpenCV cvtColor

	

否




颜色统计

	

OpenCV + Java

	

否




色度校正

	

OpenCV Mat 运算

	

否




质量检测

	

CIEDE2000 + 规则检查

	

否

Java 中的关键转换：

Java
// BGR 8-bit -> float [0,1] -> Lab
Mat bgr = Imgcodecs.imread("generated.png");

Mat rgb = new Mat();
Imgproc.cvtColor(bgr, rgb, Imgproc.COLOR_BGR2RGB);

Mat rgbFloat = new Mat();
rgb.convertTo(rgbFloat, CvType.CV_32FC3, 1.0 / 255.0);

Mat lab = new Mat();
Imgproc.cvtColor(rgbFloat, lab, Imgproc.COLOR_RGB2Lab);

随后通过 Core.split() 拆分 L、a、b 通道，对 a、b 执行校正，再合并和转换回 RGB。

注意 OpenCV 的 8 位 Lab 与 32 位浮点 Lab 取值范围不同，不能混用校正参数。

五、质量验收建议

不要只看生成图片是否漂亮，应该增加量化指标。

指标

	

建议验收方式




商品颜色偏差

	

可比较面料区域的 ΔE00




色彩均匀性

	

同类面料区域的色度离散程度




褶皱保留

	

校正前后明度结构变化




人物保真

	

Mask 外像素差异




边缘质量

	

裤子边缘、手部遮挡人工抽检

ΔE00 可以作为核心颜色指标，但不建议直接把两张整图计算出的平均 ΔE00 当成商品色差。需要先排除阴影、高光和非面料区域，并确保色彩管理一致。

六、推荐的实施顺序

第一阶段：低成本验证

选择 20～50 组不同颜色的裤子，使用现有 Seedream API 生成图片，人工制作 Mask，测试 Lab 校正前后的效果。

第二阶段：自动化

接入裤子分割模型，自动提取商品面料参考色、生成图面料色，完成颜色迁移和质量检测。

第三阶段：生产优化

建立颜色偏差阈值、失败重试机制和人工复核流程，支持批量电商换装。

最终建议：先做 Seedream 5.0 Pro + OpenCV Lab 校正的 MVP。 这一步无需增加生成模型调用次数，也无需额外 GPU。只有当实际测试表明 Mask 质量或复杂材质处理成为瓶颈时，再引入 SAM 或更复杂的颜色迁移模型。

你可以直接拿之前那组“商品裤子图 + 换装后明显偏色的模特图”来测试上述算法。这样能够判断究竟是简单色度偏移，还是模型已经改变了材质纹理与颜色分布；这两种问题需要不同的处理策略。

你说：
opencv颜色校正需要什么样的部署条件
ChatGPT 说：

针对你目前的 Seedream 5.0 Pro 电商换裤子场景，OpenCV 颜色校正的部署成本很低，不需要 GPU，普通 CPU 服务器就能完成生产部署。

而且可以直接集成到现有 Java / Spring Boot 服务中，无需单独部署 Python 服务。

一、服务器配置建议

以下按单张 2K 图片、Lab 色彩校正、Mask 羽化、PNG 输出估算。性能是初步工程预估，不是实测基准。

配置

	

最低可运行

	

推荐生产

	

较高并发




CPU

	

2 核

	

4 核

	

8～16 核




内存

	

2 GB

	

8 GB

	

16～32 GB




GPU

	

不需要

	

不需要

	

不需要




磁盘

	

10 GB

	

20 GB SSD

	

50 GB SSD




系统

	

Linux / Windows

	

Linux

	

Linux




Java

	

JDK 17

	

JDK 17/21

	

JDK 17/21




OpenCV

	

4.x

	

4.x

	

4.x




适用场景

	

开发测试

	

约 5～10 个并发任务

	

约 20～50 个并发任务

这里的并发是建议的初始容量规划，并不代表已经验证的吞吐量。实际能力需要结合图片分辨率、PNG 编码、Mask 处理和服务器 CPU 性能压测。

二、处理性能预估

单张图片 CPU 颜色校正耗时（工程估算，不含 Seedream API）

1K（1024×1024）

30–120 ms

2K（2048×2048）

100–400 ms

4K（4096×4096）

400–1500 ms

以现代服务器 CPU、优化后的内存操作为假设。复杂颜色迁移、自动分割及图片网络传输不在估算范围内。

你的完整处理流程大致是：

Seedream API 生成 → 下载图片 → OpenCV 颜色校正 → 上传结果

一般来说，OpenCV 校正的耗时会明显小于远程图生图的耗时。

三、推荐的 Java 部署架构

Spring Boot 图片处理服务

Seedream API

云端生成换装图片

OpenCV Java

本地 CPU 颜色校正

图片存储 / OSS

存储校正后的 PNG / WebP

OpenCV Java 可以使用预编译原生库，不需要自己编译 OpenCV 源码。

例如，使用 Maven 引入带有原生库的 OpenCV Java 封装：

XML

<dependency>
    <groupId>org.openpnp</groupId>
    <artifactId>opencv</artifactId>
    <version>4.9.0-0</version>
</dependency>


启动时加载：

Java

import nu.pattern.OpenCV;

public class ImageService {
    static {
        OpenCV.loadLocally();
    }
}


这只是一个依赖版本示例，正式部署前需要验证与你的 Linux 架构、JDK 和原生库版本的兼容性。

四、内存要特别注意

虽然颜色校正计算量不大，但 OpenCV 处理过程中会同时存在多份图片矩阵。

以 2048×2048 图片为例：

数据

	

近似内存




原始 RGB 图片（8-bit）

	

12 MB




Lab 浮点图片（32-bit）

	

48 MB




校正后 Lab 图片

	

48 MB




Mask 和中间矩阵

	

20～80 MB




单任务工作内存

	

约 130～250 MB

如果同时处理 10 张 2K 图片，可能需要约 1.3～2.5 GB 的图片处理工作内存，另外还要考虑 JVM 堆、OpenCV 原生内存、网络缓冲和其他服务开销。

因此，4 核 8 GB 服务器是一个比较合理的生产起点。

Java 侧还需要特别注意 Mat.release()，避免 OpenCV 原生内存长期占用。

五、哪些情况下才需要 GPU？

功能

	

是否需要 GPU




RGB / Lab 转换

	

否




色度迁移

	

否




亮度校正

	

否




Mask 羽化

	

否




色差计算

	

否




使用已有 Mask 合成

	

否




SAM 自动生成裤子 Mask

	

推荐 GPU




人体解析深度学习模型

	

GPU 可显著加速

你需要特别关注的是 Mask 从哪里来。

如果目前只有商品图和生成图，OpenCV 并不能可靠地自动识别哪部分是裤子。它需要一个准确的裤子区域 Mask，才能确保只调整裤子而不改变人物皮肤、鞋子和背景。

可以先通过已有图像分割服务获取 Mask，后续再考虑部署 SAM。

六、推荐你使用的服务器规格
4 核 CPU / 8 GB 内存

Linux + JDK 17 + Spring Boot + OpenCV

推荐起点
4 vCPU
普通 CPU 即可
8 GB
预留原生内存

建议先限制 4～8 个并发校正任务，监控 CPU、RSS 内存、P95 延迟和失败率，再逐步增加并发。

结论： 你的场景不需要为 OpenCV 单独购买 GPU 服务器，甚至可以直接部署在现有 Spring Boot 应用服务器上。

不过我建议把系统拆成两个逻辑模块：ImageGenerationService 负责调用 Seedream，ColorCorrectionService 负责本地颜色校正。这样后续更换生成模型、升级 Mask 分割算法，都不需要重构整个换装系统。

如果你计划支持之前提到的 10 个并发换装任务，4 核 8 GB 可以作为初始测试配置；但是否能稳定满足吞吐要求，还取决于 Seedream API 的限流和图片处理链路的实际压测结果。
