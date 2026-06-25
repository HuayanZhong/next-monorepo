import { Cormorant_Garamond, Noto_Serif_SC } from "next/font/google"

import { ModeToggle } from "@/components/common/mode-toggle"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

/**
 * 中文展示字体：Noto Serif SC
 */
const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-sc",
  preload: false,
})

/**
 * 英文展示字体：Cormorant Garamond
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

/**
 * 东软颐养中心登录页，左侧品牌展示 + 右侧登录表单
 * @author 花颜
 * @since 2026-06-25
 */
export default function Page() {
  return (
    <div
      className={`${notoSerif.variable} ${cormorant.variable} grid min-h-svh lg:grid-cols-[1.1fr_1fr]`}
    >
      {/* 左侧品牌展示区 */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-primary p-12 text-primary-foreground lg:flex">
        {/* 装饰：月窗同心圆 */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-48 size-136 -translate-y-1/2 animate-in rounded-full border border-primary-foreground/20 duration-1000 fade-in"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-32 size-96 -translate-y-1/2 animate-in rounded-full border border-primary-foreground/15 duration-1000 fade-in"
          style={{ animationDelay: "200ms" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -right-16 size-56 -translate-y-1/2 animate-in rounded-full bg-primary-foreground/10 blur-2xl duration-1000 fade-in"
          style={{ animationDelay: "400ms" }}
        />
        {/* 装饰：细线纹理 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          }}
        />

        {/* 顶部 logo */}
        <div className="relative flex animate-in items-center gap-3 duration-700 fade-in slide-in-from-top-4">
          <div
            className="flex size-10 items-center justify-center rounded-xl border border-primary-foreground/40 text-lg"
            style={{ fontFamily: "var(--font-serif-sc)" }}
          >
            颐
          </div>
          <span
            className="text-sm tracking-[0.3em] text-primary-foreground/80"
            style={{ fontFamily: "var(--font-serif-sc)" }}
          >
            颐养中心
          </span>
        </div>

        {/* 中部品牌标语 */}
        <div className="relative space-y-7">
          <h1
            className="animate-in text-5xl leading-tight font-medium duration-700 fade-in slide-in-from-bottom-6"
            style={{ fontFamily: "var(--font-serif-sc)" }}
          >
            东软颐养中心
          </h1>
          <p
            className="animate-in text-2xl text-primary-foreground/70 italic duration-700 fade-in slide-in-from-bottom-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              letterSpacing: "0.02em",
            }}
          >
            Neusoft Wellness Center
          </p>
          <div className="h-px w-16 animate-in bg-primary-foreground/40 duration-1000 fade-in" />
          <p
            className="max-w-sm animate-in text-sm leading-loose text-primary-foreground/75 duration-700 fade-in slide-in-from-bottom-6"
            style={{ fontFamily: "var(--font-serif-sc)" }}
          >
            以专业守护健康
            <br />
            以温情陪伴岁月
            <br />
            让每一位长者，安享从容时光
          </p>
        </div>

        {/* 底部 */}
        <div className="relative flex animate-in items-center justify-between text-xs text-primary-foreground/60 duration-1000 fade-in">
          <span style={{ fontFamily: "var(--font-serif-sc)" }}>
            © 2026 东软颐养中心
          </span>
          <span
            className="italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Est. 2026
          </span>
        </div>
      </aside>

      {/* 右侧登录表单区 */}
      <main className="relative flex items-center justify-center bg-background p-6 sm:p-12">
        <div className="absolute top-6 right-6 sm:top-12 sm:right-12">
          <ModeToggle />
        </div>
        <div className="w-full max-w-sm animate-in space-y-8 duration-700 fade-in slide-in-from-bottom-8">
          {/* 移动端品牌 */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <div
              className="flex size-12 items-center justify-center rounded-2xl bg-primary text-xl text-primary-foreground"
              style={{ fontFamily: "var(--font-serif-sc)" }}
            >
              颐
            </div>
            <h1
              className="text-xl font-medium"
              style={{ fontFamily: "var(--font-serif-sc)" }}
            >
              东软颐养中心
            </h1>
          </div>

          {/* 标题 */}
          <div className="space-y-2">
            <h2
              className="text-3xl font-medium tracking-tight"
              style={{ fontFamily: "var(--font-serif-sc)" }}
            >
              欢迎回来
            </h2>
            <p className="text-sm text-muted-foreground">
              请登录您的账号以继续
            </p>
          </div>

          {/* 表单 */}
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground/80">
                用户名
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="请输入用户名"
                autoComplete="username"
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/80">
                密码
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="请输入密码"
                autoComplete="current-password"
                required
                className="rounded-xl"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-xl">
              登录
            </Button>
          </form>

          {/* 分隔线 */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">或</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* 辅助入口 */}
          <p
            className="text-center text-xs leading-relaxed text-muted-foreground"
            style={{ fontFamily: "var(--font-serif-sc)" }}
          >
            首次使用？请联系管理员开通账号
          </p>
        </div>
      </main>
    </div>
  )
}
