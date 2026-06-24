---
alwaysApply: false
scene: frontend
description: 页面级 UI 设计规范。涵盖设计调性、字体配对、装饰元素、布局构图、入场动画、需求边界。适用于创建或重构页面级界面（登录页、落地页、仪表盘等）。
---

## 设计前先定调性

写代码前先明确页面的美学方向，不要默认走"居中卡片 + 灰白背景"的通用 AI 风格。

- 结合项目主题定调性：医疗/养老 → 东方禅意或温和自然色；科技 → 几何冷感；儿童 → 圆润高饱和
- 调性要贯穿字体、配色、装饰、布局，不能只改一个维度
- 参考 `.trae/skills/frontend-design` 的方法论，但执行时遵守本仓库的组件库约束

## 字体配对

- 中文展示字用衬线体（如 Noto Serif SC），英文展示字用配套衬线体（如 Cormorant Garamond）
- 正文仍用 `font-sans`（Geist），不替换全局字体
- 展示字体通过 `next/font/google` 加载为 CSS variable，仅在需要的元素上用 `style={{ fontFamily: "var(--font-xxx)" }}` 引用
- 字体声明放在使用它的页面文件顶部，不污染全局 layout

## 装饰元素也必须用语义变量

这是 `css-naming.md` "不硬编码颜色"的延伸，装饰元素最容易违规。

- 月窗、光晕、纹理、分隔线等装饰，全部用语义变量 + 透明度修饰符
  - 正确：`bg-primary-foreground/10`、`border-primary-foreground/20`、`text-muted-foreground/60`
  - 错误：`bg-[oklch(0.32_0.05_165_/_0.4)]`、`text-[oklch(0.82_0.03_120)]`
- 纹理图案需要前景色时用 `currentColor`，让父级文字色决定，不硬编码
- 装饰元素加 `aria-hidden` 和 `pointer-events-none`，避免影响无障碍和交互

## 布局构图

- 重要页面（登录、落地页）优先用分屏布局，左侧品牌区 + 右侧功能区，避免单卡片居中
- 品牌区在 `lg` 以下隐藏，移动端只保留功能区 + 简化品牌标识
- 用 `grid lg:grid-cols-[1.1fr_1fr]` 而非 `flex`，响应式切换更干净
- 留白要慷慨：品牌区 `p-12`，功能区 `p-6 sm:p-12`

## 入场动画

- 用 `tailwindcss-animate` 的 `animate-in fade-in slide-in-from-*` 工具类，不写自定义 keyframes
- 同一页面多个元素入场时，用 `style={{ animationDelay: "200ms" }}` 做错峰，间隔 150-250ms
- 装饰元素动画时长长一些（`duration-1000`），内容元素短一些（`duration-700`）

## 不添加需求外的 UI 元素

这是硬性规则，违反即返工。

- 用户要"用户名 + 密码登录"，就只做这两个输入框 + 登录按钮
- 不要自作主张加：忘记密码链接、注册入口、第三方登录、分隔线、"或"提示、联系方式引导
- 需求外的元素即使视觉上"更完整"，也属于越界。要加先问用户
- 装饰性元素（品牌标语、logo、版权）可以加，但功能元素必须由需求驱动

## 组件库优先

- 用 `@workspace/ui` 已有组件构建，不手写原生元素替代
- 缺组件时用 `pnpm dlx shadcn@latest add <name>` 在 `packages/ui` 目录下添加
- Button 不覆盖默认颜色，用 `variant` 和 `size` 控制外观
- Input / Label / Card 等保持组件默认样式，只通过 `className` 微调圆角等
