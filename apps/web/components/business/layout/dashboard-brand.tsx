/**
 * 侧边栏顶部品牌标识，显示颐养中心 logo 和名称
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardBrand() {
  return (
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
  )
}
