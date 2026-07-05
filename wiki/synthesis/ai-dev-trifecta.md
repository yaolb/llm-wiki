---
type: synthesis
tags: [AI增强开发, OpenSpec, Superpowers, gstack, 工程交付, Vibe Coding]
created: 2026-07-04
updated: 2026-07-04
---

# AI增强开发三件套：把Vibe Coding拉回工程交付

## 问题背景

"Vibe Coding"（随性编程）是 AI 编程的常见现象：开发者用自然语言描述需求，AI 生成代码，但没有规范、没有测试、没有交付标准。这种方式在小功能上很快，但在正式项目中不可维护。

## 三件套分工

```
OpenSpec      → 规范驱动 → "做什么"   → 产出 Spec 文档
Superpowers   → 纪律驱动 → "怎么做"   → 约束执行流程
gstack        → 角色化执行 → "谁来做"  → 领域专家 Agent
```

三者配合形成从需求到交付的完整闭环：
```
Spec 定义 → Role 分配 → Skill 执行 → 验证 → 交付
(OpenSpec)  (gstack)   (Superpowers)  (TDD)
```

## 为什么三件套有效

1. **OpenSpec 解决"说不清需求"**：人类用 Spec 而非模糊的自然语言描述需求
2. **Superpowers 解决"执行不规范"**：强制执行 TDD、代码审查、风格检查等纪律
3. **gstack 解决"啥都干的通才不行"**：不同任务用不同角色 Agent，每个角色有领域专长

## 实战效果

将 Vibe Coding（"帮我做个登录页面"）拉回工程交付（"这是 Spec，按前端专家角色，走 TDD 流程实现"），让 AI 编程从"玩具"变成"工具"。

## 相关实体
- [[OpenSpec]]
- [[Superpowers]]
- [[gstack]]

## 相关概念
- [[AI编程]]
- [[Spec驱动开发]]
- [[测试驱动开发 TDD]]
- [[统一开发范式]]
