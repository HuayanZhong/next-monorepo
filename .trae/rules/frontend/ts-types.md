---
alwaysApply: false
scene: frontend
description: TypeScript 类型集中管理规范。所有 TS 类型定义统一存放在 @workspace/types 子包中，按领域分文件夹组织并导出。适用于新增或修改 interface、type、zod schema、API 响应类型等场景。
---

## 类型集中管理

所有 TypeScript 类型定义必须集中在 `@workspace/types` 包（`packages/types/`）中，禁止在 apps 或其他 packages 里散落类型定义。

### 目录结构

```
packages/types/src/
├── index.ts          # 统一导出入口
├── auth/
│   └── index.ts      # 认证相关类型
├── user/
│   └── index.ts      # 用户相关类型
├── api/
│   └── index.ts      # 通用 API 类型
└── ...               # 按领域继续扩展
```

### 规则

1. **新增类型时** — 在 `packages/types/src/` 下找到或新建对应领域文件夹，将类型写入该文件夹的 `index.ts`
2. **导出约定** — 每个领域文件夹的 `index.ts` 导出该领域所有类型；`src/index.ts` 统一 re-export 所有领域
3. **引用方式** — 其他包通过 `import { XxxType } from "@workspace/types"` 引用，不要直接引用子路径
4. **Zod Schema** — 与类型放在同一领域文件夹中，用 `z.infer` 派生 payload 类型
5. **命名约定** — 文件夹名用小写领域名（`auth`、`user`、`order`），类型名用 PascalCase

### 智能触发

当任务涉及以下情况时自动应用此规则：

- 新增或修改 `interface`、`type`、`enum`
- 新增或修改 Zod schema
- 定义 API 请求/响应类型
- 在组件或页面中内联了复杂类型定义（应提取到 types 包）

不需要触发的情况：

- 仅修改已有类型的引用路径
- 纯运行时逻辑改动，不涉及类型定义变更
