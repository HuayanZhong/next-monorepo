/**
 * 侧边栏顶部品牌标识，显示颐养中心 logo 和名称
 * 展开态显示图标+文字，折叠态只显示图标且与导航项对齐居中
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardBrand() {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:self-center group-data-[collapsible=icon]:overflow-hidden group-data-[collapsible=icon]:rounded-lg group-data-[collapsible=icon]:p-0">
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-sm font-medium text-primary"
        style={{ fontFamily: "var(--font-serif-sc)" }}
      >
        颐
      </div>
      <span
        className="truncate text-sm font-medium tracking-wide text-foreground group-data-[collapsible=icon]:hidden"
        style={{ fontFamily: "var(--font-serif-sc)" }}
      >
        颐养中心
      </span>
    </div>
  )
}
