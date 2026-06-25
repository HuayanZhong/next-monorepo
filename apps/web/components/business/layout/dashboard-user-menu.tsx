"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Logout01Icon, Settings02Icon } from "@hugeicons/core-free-icons"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

/**
 * 侧边栏底部用户菜单，根据当前路由显示对应角色信息
 * 护工路由（/dashboard/caregiver/）显示护工角色，其余显示管理员
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardUserMenu() {
  const pathname = usePathname()
  const isCaregiver = pathname.startsWith("/dashboard/caregiver")

  const role = isCaregiver
    ? { label: "护工", avatar: "护", email: "caregiver@neusoft.com" }
    : { label: "管理员", avatar: "管", email: "admin@neusoft.com" }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-medium text-primary">
                {role.avatar}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium">{role.label}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {role.email}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            align="start"
            className="w-(--radix-dropdown-menu-trigger-width)"
          >
            <DropdownMenuItem>
              <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
              个人设置
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
              <Link href="/" className="flex w-full items-center">
                退出登录
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
