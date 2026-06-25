import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserMultiple02Icon,
  BedSingle01Icon,
  Stethoscope02Icon,
  HeartCheckIcon,
} from "@hugeicons/core-free-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

/**
 * 仪表盘概览页，展示关键运营指标
 * @author 花颜
 * @since 2026-06-25
 */
export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 欢迎区域 */}
      <div>
        <h1
          className="text-2xl font-medium"
          style={{ fontFamily: "var(--font-serif-sc)" }}
        >
          控制台
        </h1>
        <p className="text-sm text-muted-foreground">东软颐养中心运营概览</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>在住客户</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-medium">128</CardTitle>
              <HugeiconsIcon
                icon={UserMultiple02Icon}
                strokeWidth={1.5}
                className="size-8 text-muted-foreground"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-primary">+12</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>床位使用</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-medium">156/200</CardTitle>
              <HugeiconsIcon
                icon={BedSingle01Icon}
                strokeWidth={1.5}
                className="size-8 text-muted-foreground"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              使用率 <span className="text-primary">78%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>护理服务</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-medium">56</CardTitle>
              <HugeiconsIcon
                icon={Stethoscope02Icon}
                strokeWidth={1.5}
                className="size-8 text-muted-foreground"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              今日待执行 <span className="text-primary">23</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>健康关注</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-medium">8</CardTitle>
              <HugeiconsIcon
                icon={HeartCheckIcon}
                strokeWidth={1.5}
                className="size-8 text-muted-foreground"
              />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              需重点关注 <span className="text-destructive">3</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
