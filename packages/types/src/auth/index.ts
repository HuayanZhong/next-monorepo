import { z } from "zod"

// ============================================================
// Auth Schemas
// ============================================================

export const LoginSchema = z.object({
  username: z.string().min(1, "用户名不能为空"),
  password: z.string().min(6, "密码至少 6 位"),
})

export const RegisterSchema = z.object({
  username: z.string().min(3, "用户名至少 3 个字符"),
  password: z.string().min(6, "密码至少 6 位"),
  email: z.string().email("邮箱格式不正确"),
})

// ============================================================
// Auth Types
// ============================================================

export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  roles: string[]
  createdAt: string
  updatedAt: string
}

export interface Session {
  token: string
  refreshToken: string
  expiresAt: number
}

export interface AuthState {
  user: User | null
  session: Session | null
  isAuthenticated: boolean
}

// ============================================================
// Auth API Payloads
// ============================================================

export type LoginPayload = z.infer<typeof LoginSchema>
export type RegisterPayload = z.infer<typeof RegisterSchema>

export interface LoginResponse {
  user: User
  session: Session
}

export interface RefreshTokenResponse {
  session: Session
}
