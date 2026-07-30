# ide Claude Code 连接IDE后抓包

> **来源**: 美事文档 · AI > Claude Code分析
> **页面 ID**: 2009550126112067585
> **作者**: 高礼强(gaoliqiang)

---


## 用户选择了几行内容 - 提示语



### 界面显示


![图片](https://docs.58corp.com/page/attachment/alias/ab5bd1d1f5b645778748413c2b1c9e40.png/download?pageId=2009550126112067585&width=985&height=173)


### 使用 role: user 发送在用户问题的前面


![图片](https://docs.58corp.com/page/attachment/alias/9f1d47fa98614c3d96394ed32dd74244.png/download?pageId=2009550126112067585&width=1386&height=767)

其中text内容为：

<system-reminder>
The user selected the lines 4 to 7 from /Users/finn/.virtualenvs/chatling-openai-proxy/chatling-openai-proxy/index.html:

set="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Ant Design UI示例</title>
    <!-- Ant De

This may or may not be related to the current task.
</system-reminder>

@前端：注意给的行内容是用户真实选择的内容，而不是整行（第5行的set开始，第8行的De结束）。

@后端：注意CC的行号好像是从0开始的。我编辑器是5~8，但是提示语发送的是4~7。咱们的Read工具是从1开始的，故咱们不采用CC的从0开始，即前端传递的数字是和编辑器中看到的行号一致的。

![图片](https://docs.58corp.com/page/attachment/alias/8f6eca9e242f4136ad060c07bde9c8a9.png/download?pageId=2009550126112067585&width=1607&height=514)


## 用户打开某个文档，但是没选择行


![图片](https://docs.58corp.com/page/attachment/alias/40f01cedcddc4744a2cb14a0c2b41370.png/download?pageId=2009550126112067585&width=410&height=189)

其中text为：

<system-reminder>
The user opened the file /Users/finn/.virtualenvs/chatling-openai-proxy/chatling-openai-proxy/index.html in the IDE. This may or may not be related to the current task.
</system-reminder>