---
alwaysApply: false
scene: frontend
description: CSS 样式与类名规范。涵盖 Tailwind utility classes 使用、CSS 变量主题系统、深色模式、响应式设计、字体加载、间距与尺寸约定。适用于编写样式、调整布局、修改主题颜色、处理深色模式。
---

## 样式方案

Tailwind CSS 4 + CSS 变量主题。

### 类名组织

- 使用 Tailwind utility classes，不写自定义 CSS（除非主题变量需要）
- 用 `cn()` 合并动态类名，避免字符串拼接
- 响应式优先：先写移动端，再用 `md:` `lg:` 扩展

### 主题变量

- 颜色通过 CSS 变量（`--primary`、`--secondary`、`--destructive` 等）
- 组件引用语义变量，不硬编码颜色值
- 深色模式通过 `dark:` 前缀或 `next-themes` 切换

### 字体

- 通过 `next/font/google` 加载，挂载为 CSS variable
- 在 `layout.tsx` 中统一配置，子组件通过 `font-sans` `font-mono` 等引用

### 间距与尺寸

- 使用 Tailwind 默认间距系统（`p-4`、`gap-2` 等）
- 组件尺寸用 `size-*`（如 `size-9`）
- 避免硬编码像素值
