/**
 * 侧边栏顶部品牌标识
 * 东方禅意风格：衬线字 "颐" 作为品牌印记，不加多余边框和背景
 * 展开态显示完整品牌，折叠态只保留印记且与导航项居中对齐
 * @author 花颜
 * @since 2026-06-25
 */
export function DashboardBrand() {
  return (
    <div className="flex items-center gap-2 overflow-hidden px-2 py-1.5 transition-[width,height,padding] duration-200 ease-linear group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
      {/* 品牌印记 */}
      <span
        className="flex size-7 shrink-0 items-center justify-center text-base font-semibold text-primary/80"
        style={{ fontFamily: "var(--font-serif-sc)" }}
      >
        颐
      </span>
      {/* 品牌全称 */}
      <span
        className="truncate text-sm tracking-[0.25em] text-foreground/60 transition-opacity duration-200 ease-linear group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0"
        style={{ fontFamily: "var(--font-serif-sc)" }}
      >
        颐养中心
      </span>
    </div>
  )
}
