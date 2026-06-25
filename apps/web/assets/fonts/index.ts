/**
 * 全局展示字体配置，统一管理页面级字体
 * @author 花颜
 * @since 2026-06-25
 */
import { Cormorant_Garamond, Noto_Serif_SC } from "next/font/google"

/**
 * 中文展示字体：Noto Serif SC
 */
const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-sc",
  preload: false,
})

/**
 * 英文展示字体：Cormorant Garamond
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

export { notoSerif, cormorant }
