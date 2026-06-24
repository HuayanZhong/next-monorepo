---
alwaysApply: false
scene: frontend
description: JSDoc 注释规范。涵盖函数、Hooks、组件的注释格式要求，保持简洁清晰。适用于编写或修改代码时的注释规范。
---

## 注释规范

使用 JSDoc 格式注释，保持简洁，避免冗余。

### 函数/方法

```typescript
/**
 * 计算用户全年订单总额
 * @author 张三
 * @since 2026-06-25
 */
function calculateYearlyTotal(userId: string, year: number): number {
  // ...
}
```

### Hooks

```typescript
/**
 * 管理用户认证状态，自动处理 token 过期
 * @author 李四
 * @since 2026-06-20
 */
export function useAuth() {
  // ...
}
```

### 组件

```typescript
/**
 * 用户信息卡片，展示头像、姓名、邮箱
 * @author 王五
 * @since 2026-06-25
 */
export function UserCard({ user, editable }: UserCardProps) {
  // ...
}
```

### 类型/接口

```typescript
/**
 * 用户信息
 * @author 赵六
 * @since 2026-06-01
 */
export interface User {
  /** 用户唯一标识 */
  id: string
  /** 登录名 */
  username: string
}
```

### 组件内部注释

组件内部使用 `//` 单行注释，说明关键逻辑：

```typescript
export function UserCard({ user, editable }: UserCardProps) {
  // 格式化用户创建时间
  const formattedDate = formatDate(user.createdAt)

  // 检查用户是否有编辑权限
  const canEdit = editable && user.roles.includes("editor")

  return (
    <div>
      {/* 用户头像区域 */}
      <Avatar src={user.avatar} />

      {/* 用户基本信息 */}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>

      {canEdit && <EditButton />}
    </div>
  )
}
```

### 核心要求

1. **顶部注释**：`/** ... */` 格式，包含功能说明、`@author`、`@since`
2. **内部注释**：`//` 格式，说明关键逻辑、复杂计算、业务判断
3. **JSX 注释**：`{/* ... */}` 格式，说明区块作用
4. **简洁**：不要堆砌标签，避免注释过多

### 智能触发

新增或修改函数、Hooks、组件、类型时自动应用。仅修改实现逻辑或修复 bug 时不需要。
