---
alwaysApply: false
scene: frontend
description: 编写样式或调整布局时，必须使用 Tailwind utility classes，不写自定义 CSS。颜色只用语义变量（如 bg-primary、text-muted-foreground），禁止硬编码 oklch/hsl/rgb 值。适用于编写样式、调整布局、修改主题颜色、处理深色模式。
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
- 装饰元素也必须用语义变量 + 透明度修饰符（如 `bg-primary-foreground/10`），禁止 `oklch()` / `hsl()` / `rgb()` 字面量
- 深色模式通过 `dark:` 前缀或 `next-themes` 切换

### 字体

- 正文用 `font-sans`（Geist）、代码用 `font-mono`（Geist Mono），在 layout.tsx 统一配置
- 展示字体（衬线等）通过 `assets/fonts` 统一管理，页面按需引入
  ```tsx
  import { notoSerif, cormorant } from "@/assets/fonts"
  ```
- 展示字体不挂全局，仅在需要的元素上用 `style={{ fontFamily: "var(--font-xxx)" }}` 引用

### 间距与尺寸

- 使用 Tailwind 默认间距系统（`p-4`、`gap-2` 等）
- 组件尺寸用 `size-*`（如 `size-9`）
- 避免硬编码像素值
