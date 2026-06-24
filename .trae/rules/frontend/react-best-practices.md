---
alwaysApply: false
scene: frontend
description: React 组件开发规范。涵盖函数组件定义、Props 类型设计、cva 变体管理、cn() 类名合并、data-slot 属性约定、文件命名规则。适用于创建或修改 React 组件、UI 组件库开发、shadcn/ui 风格组件。
---

## React 组件模式

参考 `packages/ui/src/components/button.tsx` 作为标准模式。

### 组件定义

- 函数组件，不用 class 组件
- 使用 `React.ComponentProps<"element">` 继承原生属性
- 用 `cva` 管理变体（variant / size）
- 用 `cn()` 合并 className（来自 `@workspace/ui/lib/utils`）
- 添加 `data-slot` 标识组件用途
- 添加 `data-variant` 和 `data-size` 便于样式选择器

### Props 设计

- 用 `VariantProps<typeof xxxVariants>` 提取变体类型
- 用交叉类型 `&` 组合多种 props
- 可选 prop 给默认值，不在组件内做复杂校验

### 文件命名

- kebab-case：`login-form.tsx`、`user-avatar.tsx`
- 一个文件一个组件（变体除外）
