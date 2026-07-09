---
type: concept
pageType: concept
tags: [Git, 版本控制, 工作流]
created: 2026-07-09
updated: 2026-07-09
---

# 已 Push 代码撤回：Git revert vs reset

## 一句话

已推送的提交需要撤回时，**公共分支用 `revert`，私有分支可用 `reset`**。

## 核心对比

| | `git revert` | `git reset` |
|---|---|---|
| **动作** | 创建⼀个新的反向提交 | 移动分支指针，丢弃提交 |
| **历史** | 不改写，保留完整记录 | 改写历史，提交消失 |
| **安全性** | ✅ 多人协作安全 | ⚠️ 强制推送会破坏他人本地历史 |
| **推送** | 普通 `git push` 即可 | 需 `git push --force-with-lease` |
| **适用** | 公共分支（main/release） | 私有特性分支 |

## 用法

```bash
# revert — 安全撤回（推荐）
git revert <commit-hash>
git push

# reset — 回退本地 + 强制推送（小心）
git reset --hard <目标commit>
git push --force-with-lease
```

## 原理

```
revert:
  A → B → C → D (revert B) → A' ∩ C ∩ D
  └─ 新增一个提交 D，内容是把 B 的改动撤销

reset:
  A → B → C
  └─ 指针直接回到 A，B 和 C 从历史消失
```

## 面试回答模板

1. 先问分支类型：公共分支还是私有分支？
2. 公共分支 → `git revert`，产生回滚提交，不影响他人
3. 私有分支 → `git reset --hard` + `--force-with-lease`
4. 补充：多人协作时禁用 `--force`，必须用 `--force-with-lease`

## 相关概念
- [[Git 工作流]]
- [[版本控制]]
