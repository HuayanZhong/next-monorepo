"use client"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

/**
 * 登录表单组件
 * @author 花颜
 * @since 2026-06-25
 */
export function LoginForm() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="username" className="text-foreground/80">
          用户名
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="请输入用户名"
          autoComplete="username"
          required
          className="rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground/80">
          密码
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="请输入密码"
          autoComplete="current-password"
          required
          className="rounded-xl"
        />
      </div>
      <Button size="lg" className="w-full rounded-xl">
        登录
      </Button>
    </div>
  )
}
