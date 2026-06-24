---
alwaysApply: false
scene: git_message
description: 自定义提交消息信息的风格
---

## 提交消息格式

使用 Conventional Commits 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 必填部分

- **type**: 提交类型（必填）
- **subject**: 简短描述（必填）

### 可选部分

- **scope**: 影响范围（可选）
- **body**: 详细说明（可选）
- **footer**: 关联信息（可选）

## Type 类型

| 类型       | 说明                     | 示例                           |
| ---------- | ------------------------ | ------------------------------ |
| `feat`     | 新功能                   | `feat(auth): 添加用户登录功能` |
| `fix`      | 修复 bug                 | `fix(api): 修复数据解析错误`   |
| `docs`     | 文档变更                 | `docs: 更新 README 安装说明`   |
| `style`    | 代码格式（不影响逻辑）   | `style: 格式化代码`            |
| `refactor` | 重构（非新功能、非修复） | `refactor: 重构用户模块`       |
| `perf`     | 性能优化                 | `perf: 优化列表渲染性能`       |
| `test`     | 添加或修改测试           | `test: 添加用户模块测试`       |
| `chore`    | 构建/工具/依赖变更       | `chore: 升级依赖版本`          |
| `ci`       | CI/CD 配置变更           | `ci: 添加 GitHub Actions`      |
| `revert`   | 回滚提交                 | `revert: 回滚 feat: 添加登录`  |

## Scope 规则

使用模块名或文件路径作为 scope：

- 模块名：`auth`, `user`, `api`, `ui`, `db`
- 包名：`web`, `ui`, `eslint-config`
- 组件名：`button`, `dialog`, `form`

示例：

- `feat(web): 添加首页`
- `fix(ui): 修复按钮样式`
- `chore(eslint-config): 更新规则`

## Subject 写法

- 使用中文或英文，保持一致
- 不超过 50 个字符
- 不以句号结尾
- 使用祈使语气（如"添加"而非"添加了"）

示例：

- ✅ `feat: 添加用户认证`
- ✅ `fix: 修复登录错误`
- ❌ `feat: 添加了用户认证功能。`

## Body 写法

- 说明"为什么"而非"做了什么"
- 每行不超过 72 个字符
- 使用空行与 subject 分隔

示例：

```
feat(auth): 添加 JWT 认证

实现基于 JWT 的用户认证机制，使用 refresh token
支持长期会话。

Closes #123
```

## Footer 写法

### 关联 Issue

- `Closes #123`
- `Fixes #456`
- `Refs #789`

### Breaking Changes

```
feat(api)!: 修改用户接口返回格式

BREAKING CHANGE: 用户接口现在返回分页结构
```

## 完整示例

```
feat(web): 添加用户登录页面

实现邮箱+密码登录，支持记住我功能。
使用 shadcn/ui 组件库构建表单。

Closes #42
```

```
fix(api): 修复分页参数解析

当 page 参数为 0 时返回第一页而非空数据。

Fixes #123
```

```
chore: 升级依赖版本

- next: 15.0.0 -> 15.0.1
- react: 19.0.0 -> 19.0.1
```
