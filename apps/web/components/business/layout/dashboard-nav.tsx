"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserMultiple02Icon,
  BedSingle01Icon,
  HeartCheckIcon,
  Stethoscope02Icon,
  Settings02Icon,
  Calendar03Icon,
  Apple01Icon,
  DoorIcon,
  Logout01Icon,
} from "@hugeicons/core-free-icons"
import type { NavGroup } from "@workspace/types"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar"

/** 侧边栏导航配置 */
const navGroups: NavGroup[] = [
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
export function DashboardNav() {
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
