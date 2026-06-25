import { notoSerif, cormorant } from "@/assets/fonts"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
} from "@workspace/ui/components/sidebar"

import { DashboardBrand } from "@/components/business/layout/dashboard-brand"
import { DashboardNav } from "@/components/business/layout/dashboard-nav"
import { DashboardHeader } from "@/components/business/layout/dashboard-header"
import { DashboardUserMenu } from "@/components/business/layout/dashboard-user-menu"

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
        {/* 左侧可折叠侧边栏，支持 icon 折叠模式 */}
        <Sidebar collapsible="icon">
          {/* 侧边栏顶部：颐养中心品牌标识 */}
          <SidebarHeader>
            <DashboardBrand />
          </SidebarHeader>
          {/* 侧边栏中部：按业务模块分组的导航菜单 */}
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          {/* 侧边栏底部：当前用户信息与操作菜单 */}
          <SidebarFooter>
            <DashboardUserMenu />
          </SidebarFooter>
        </Sidebar>
        {/* 右侧主内容区：顶部导航栏 + 页面内容 */}
        <SidebarInset className={`${notoSerif.variable} ${cormorant.variable}`}>
          <DashboardHeader />
          <div className="flex-1 p-6">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
