"use client"

import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"

/**
 * 日/夜间模式切换按钮，点击在 light/dark 间切换
 * @author 花颜
 * @since 2026-06-25
 */
function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
      aria-label="切换主题"
    >
      <HugeiconsIcon
        icon={Sun02Icon}
        className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">切换主题</span>
    </Button>
  )
}

export { ModeToggle }
