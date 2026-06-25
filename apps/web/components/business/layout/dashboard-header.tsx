"use client"

import { usePathname } from "next/navigation"

import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { ModeToggle } from "@/components/common/mode-toggle"

/** 从导航配置反查当前路径的面包屑（大类 + 页面名） */
function useBreadcrumb(): { group: string; page: string } | null {
  const pathname = usePathname()
  // navGroups 在 dashboard-nav 中定义，这里用静态映射避免循环依赖
  const routeMap: Record<string, { group: string; page: string }> = {
    "/dashboard/bed-management/bed": { group: "床位管理", page: "床位管理" },
    "/dashboard/bed-management/illustration": {
      group: "床位管理",
      page: "床位示意图",
    },
    "/dashboard/customer-management/check-in": {
      group: "客户管理",
      page: "入住登记",
    },
    "/dashboard/customer-management/check-out": {
      group: "客户管理",
      page: "退住登记",
    },
    "/dashboard/customer-management/go-out": {
      group: "客户管理",
      page: "外出登记",
    },
    "/dashboard/dietary-management/dietary": {
      group: "膳食管理",
      page: "膳食管理",
    },
    "/dashboard/dietary-management/calendar": {
      group: "膳食管理",
      page: "膳食日历",
    },
    "/dashboard/nursing-management/level": {
      group: "护理管理",
      page: "护理级别",
    },
    "/dashboard/nursing-management/project": {
      group: "护理管理",
      page: "护理项目",
    },
    "/dashboard/nursing-management/settings": {
      group: "护理管理",
      page: "客户护理设置",
    },
    "/dashboard/nursing-management/record": {
      group: "护理管理",
      page: "护理记录",
    },
    "/dashboard/health-manager/subject": {
      group: "健康管理",
      page: "设置服务对象",
    },
    "/dashboard/health-manager/attention": {
      group: "健康管理",
      page: "服务关注",
    },
    "/dashboard/user-management/basic-data": {
      group: "用户管理",
      page: "基础数据维护",
    },
    "/dashboard/caregiver/health-housekeeper/daily-care": {
      group: "健康管家",
      page: "日常护理",
    },
    "/dashboard/caregiver/health-housekeeper/care-records": {
      group: "健康管家",
      page: "服务对象护理记录",
    },
    "/dashboard/caregiver/customer-management/leave-request": {
      group: "客户管理",
      page: "外出申请",
    },
    "/dashboard/caregiver/customer-management/checkout-request": {
      group: "客户管理",
      page: "退住申请",
    },
  }
  return routeMap[pathname] ?? null
}

/**
 * 顶部导航栏：侧边栏开关、面包屑、主题切换
 * 面包屑格式：控制台 / 大类 / 页面名
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardHeader() {
  const breadcrumb = useBreadcrumb()

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-14" />
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-muted-foreground">控制台</span>
        {breadcrumb && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{breadcrumb.group}</span>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{breadcrumb.page}</span>
          </>
        )}
      </nav>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  )
}
