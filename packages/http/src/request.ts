import ky, { HTTPError } from "ky"
import { z, type ZodType } from "zod"

// 基础响应结构
export interface ApiResponse<T> {
  code: number
  data: T
  msg: string
}

// 请求配置（扩展 ky 的选项）
export interface RequestConfig {
  schema?: ZodType
  headers?: Record<string, string>
  timeout?: number | false
  retry?:
    | number
    | {
        limit?: number
        methods?: string[]
        statusCodes?: number[]
      }
}

// 创建基础 ky 实例
const createBaseInstance = () => {
  return ky.create({
    prefix: "/api",
    timeout: 10000,
    retry: {
      limit: 2,
      methods: ["get", "put", "head", "delete", "options", "trace"],
      statusCodes: [408, 413, 429, 500, 502, 503, 504],
    },
    hooks: {
      beforeRequest: [
        ({ request }) => {
          if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
              request.headers.set("Authorization", `Bearer ${token}`)
            }
          }
        },
      ],
    },
  })
}

// 默认实例
let instance = createBaseInstance()

// 响应解析
async function parseResponse<T>(
  response: Response,
  schema?: ZodType
): Promise<ApiResponse<T>> {
  const result = (await response.json()) as ApiResponse<T>

  if (schema) {
    const parseResult = schema.safeParse(result.data)
    if (!parseResult.success) {
      throw new Error(`响应数据验证失败: ${parseResult.error.message}`)
    }
    return { ...result, data: parseResult.data as T }
  }

  return result
}

// 构建请求选项
function buildOptions(config?: RequestConfig) {
  if (!config) return {}
  const { schema: _schema, ...options } = config
  return options
}

// 请求方法封装
export const request = {
  async get<T>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response = await instance.get(url, buildOptions(config))
    return parseResponse<T>(response, config?.schema)
  },

  async post<T>(
    url: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await instance.post(url, {
      json: body,
      ...buildOptions(config),
    })
    return parseResponse<T>(response, config?.schema)
  },

  async put<T>(
    url: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await instance.put(url, {
      json: body,
      ...buildOptions(config),
    })
    return parseResponse<T>(response, config?.schema)
  },

  async patch<T>(
    url: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await instance.patch(url, {
      json: body,
      ...buildOptions(config),
    })
    return parseResponse<T>(response, config?.schema)
  },

  async delete<T>(
    url: string,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await instance.delete(url, buildOptions(config))
    return parseResponse<T>(response, config?.schema)
  },
}

// 配置实例
export function configure(options?: {
  prefixUrl?: string
  timeout?: number
}): void {
  instance = ky.create({
    prefix: options?.prefixUrl || "/api",
    timeout: options?.timeout || 10000,
    retry: {
      limit: 2,
      methods: ["get", "put", "head", "delete", "options", "trace"],
      statusCodes: [408, 413, 429, 500, 502, 503, 504],
    },
    hooks: {
      beforeRequest: [
        ({ request }) => {
          if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
              request.headers.set("Authorization", `Bearer ${token}`)
            }
          }
        },
      ],
    },
  })
}

// 导出
export { instance, z, HTTPError }
