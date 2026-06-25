import { notoSerif } from "@/assets/fonts"
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
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <DashboardBrand />
          </SidebarHeader>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          <SidebarFooter>
            <DashboardUserMenu />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className={notoSerif.variable}>
          <DashboardHeader />
          <div className="flex-1 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
