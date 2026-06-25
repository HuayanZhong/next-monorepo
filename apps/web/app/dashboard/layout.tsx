"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  UserMultiple02Icon,
  BedSingle01Icon,
  UserCircleIcon,
  HeartCheckIcon,
  Stethoscope02Icon,
  Settings02Icon,
  Calendar03Icon,
  Apple01Icon,
  DoorIcon,
  Logout01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { ModeToggle } from "@/components/common/mode-toggle"

/** 导航项定义 */
interface NavItem {
  title: string
  href: string
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
}

/** 导航分组定义 */
interface NavGroup {
  label: string
  items: NavItem[]
}

/** 侧边栏导航配置 */
const navGroups: NavGroup[] = [
  {
    label: "概览",
    items: [{ title: "控制台", href: "/dashboard", icon: Home01Icon }],
  },
  {
    label: "床位管理",
    items: [
      {
        title: "床位一览",
        href: "/dashboard/bed-management/bed",
        icon: BedSingle01Icon,
      },
      {
        title: "床位示意图",
        href: "/dashboard/bed-management/illustration",
        icon: BedSingle01Icon,
      },
    ],
  },
  {
    label: "客户管理",
    items: [
      {
        title: "客户入住",
        href: "/dashboard/customer-management/check-in",
        icon: DoorIcon,
      },
      {
        title: "客户退房",
        href: "/dashboard/customer-management/check-out",
        icon: Logout01Icon,
      },
      {
        title: "外出登记",
        href: "/dashboard/customer-management/go-out",
        icon: DoorIcon,
      },
      {
        title: "饮食管理",
        href: "/dashboard/customer-management/dietary-management",
        icon: Apple01Icon,
      },
      {
        title: "饮食日历",
        href: "/dashboard/customer-management/dietary-calendar",
        icon: Calendar03Icon,
      },
    ],
  },
  {
    label: "健康管理",
    items: [
      {
        title: "服务对象",
        href: "/dashboard/health-manager/subject",
        icon: HeartCheckIcon,
      },
      {
        title: "服务关注",
        href: "/dashboard/health-manager/attention",
        icon: HeartCheckIcon,
      },
    ],
  },
  {
    label: "护理管理",
    items: [
      {
        title: "护理级别",
        href: "/dashboard/nursing-management/level",
        icon: Stethoscope02Icon,
      },
      {
        title: "护理项目",
        href: "/dashboard/nursing-management/project",
        icon: Stethoscope02Icon,
      },
      {
        title: "护理记录",
        href: "/dashboard/nursing-management/record",
        icon: Stethoscope02Icon,
      },
      {
        title: "护理设置",
        href: "/dashboard/nursing-management/settings",
        icon: Settings02Icon,
      },
    ],
  },
  {
    label: "用户管理",
    items: [
      {
        title: "基本信息",
        href: "/dashboard/user-management/basic-data",
        icon: UserMultiple02Icon,
      },
    ],
  },
]

/**
 * 侧边栏导航菜单，根据当前路径高亮活跃项
 * @author 花颜
 * @since 2026-06-25
 */
function DashboardNav() {
  const pathname = usePathname()

  return (
    <>
      {navGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

/**
 * 顶部导航栏：侧边栏开关、面包屑、用户菜单、主题切换
 * @author 花颜
 * @since 2026-06-25
 */
function DashboardHeader() {
  const pathname = usePathname()

  /** 根据路径生成面包屑 */
  const segments = pathname.replace("/dashboard", "").split("/").filter(Boolean)

  const breadcrumbLabel =
    segments.length > 0
      ? navGroups.flatMap((g) => g.items).find((item) => item.href === pathname)
          ?.title
      : "控制台"

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-muted-foreground">控制台</span>
        {breadcrumbLabel && breadcrumbLabel !== "控制台" && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{breadcrumbLabel}</span>
          </>
        )}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <HugeiconsIcon icon={UserCircleIcon} strokeWidth={2} />
              <span className="sr-only">用户菜单</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>个人设置</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/" className="flex w-full items-center">
                退出登录
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

/**
 * Dashboard 后台控制台布局
 * 左侧可折叠侧边栏 + 顶部导航栏 + 内容区
 * @author 花颜
 * @since 2026-06-25
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground"
                style={{ fontFamily: "var(--font-serif-sc)" }}
              >
                颐
              </div>
              <span
                className="truncate text-sm font-medium group-data-[collapsible=icon]:hidden"
                style={{ fontFamily: "var(--font-serif-sc)" }}
              >
                颐养中心
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs text-primary">
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
                    <DropdownMenuItem>个人设置</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/" className="flex w-full items-center">
                        退出登录
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <DashboardHeader />
          <div className="flex-1 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
