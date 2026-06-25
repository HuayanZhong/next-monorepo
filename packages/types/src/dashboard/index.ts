import type { IconSvgElement } from "@hugeicons/react"

/**
 * 侧边栏导航项定义
 * @author 花颜
 * @since 2026-06-25
 */
export interface NavItem {
  /** 导航标题 */
  title: string
  /** 路由路径 */
  href: string
  /** hugeicons 图标 */
  icon: IconSvgElement
}

/**
 * 侧边栏导航分组定义
 * @author 花颜
 * @since 2026-06-25
 */
export interface NavGroup {
  /** 分组标签 */
  label: string
  /** 分组下的导航项 */
  items: NavItem[]
}
