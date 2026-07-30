# Claude Code并行Agent效果

> **来源**: 美事文档 · AI > Claude Code分析
> **页面 ID**: 1999467101328363520
> **作者**: 高礼强(gaoliqiang)

---

⏺ 我来探索代码库，了解当前代码的实现方式，找出性能瓶颈。
⏺ Running 2 Explore agents… (ctrl+o to expand)
   ├─ 探索加法的实现 · 16 tool uses · 66.6k tokens
   │  ⎿  Bash: Show recent commit history
   └─ 探索减法处理流程 · 28 tool uses · 66.5k tokens
      ⎿  Bash: Find sub constants
     ctrl+b to run in background

[这里其他任务也直接在进行，上面两个并行并不影响]

其中灰色的Running前面的 ⏺ 在闪烁，代表运行中，然后Bash这里也在一直变化。最终会变成Done