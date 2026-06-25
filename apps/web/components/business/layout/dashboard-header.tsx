"use client"

import { usePathname } from "next/navigation"

import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { ModeToggle } from "@/components/common/mode-toggle"

/**
 * 根据当前路径生成面包屑标签
 * @author 花颜
 * @since 2026-06-25
 */
function useBreadcrumbLabel(): string {
  const pathname = usePathname()
  const segment = pathname.replace("/dashboard/", "").split("/").pop()
  return segment ? decodeURIComponent(segment) : ""
}

/**
 * 顶部导航栏：侧边栏开关、面包屑、主题切换
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardHeader() {
  const label = useBreadcrumbLabel()

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-muted-foreground">控制台</span>
        {label && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{label}</span>
          </>
        )}
      </nav>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  )
}
