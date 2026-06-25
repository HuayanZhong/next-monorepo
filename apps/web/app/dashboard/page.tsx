import { redirect } from "next/navigation"

/** /dashboard 默认重定向到床位一览 */
export default function DashboardPage() {
  redirect("/dashboard/bed-management/bed")
}
