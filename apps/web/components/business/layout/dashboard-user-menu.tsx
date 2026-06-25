"use client"

import Link from "next/link"
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
 * 侧边栏底部用户菜单，折叠态只显示头像，展开态显示姓名和邮箱
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardUserMenu() {
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
                管
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium">管理员</span>
                <span className="truncate text-xs text-muted-foreground">
                  admin@neusoft.com
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
