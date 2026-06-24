# Next Monorepo

基于 Next.js 的全栈 monorepo 项目。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| UI | React 19 |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 |
| 组件 | shadcn/ui (radix-ui + cva) |
| 包管理 | pnpm 10 + workspaces |
| 构建 | Turbo |
| Node | >= 20 |

## 项目结构

```
apps/
  web/              # Next.js 主应用
packages/
  ui/               # 共享 UI 组件库 (@workspace/ui)
  eslint-config/    # 共享 ESLint 配置
  typescript-config/# 共享 TypeScript 配置
```

## 快速开始

```bash
pnpm install          # 安装依赖
pnpm dev              # 启动开发服务器
pnpm build            # 生产构建
pnpm lint             # ESLint 检查
pnpm format           # Prettier 格式化
pnpm typecheck        # TypeScript 类型检查
```

## 添加 UI 组件

```bash
pnpm --filter @workspace/ui dlx shadcn@latest add <component-name>
```
