import { apiClient } from '@/lib/api-client'
import { AuthResponse, LoginInput } from './types'
import { RegisterInput } from './schemas'
import { HttpMethod } from '@/lib/enums/http-method'

export function login(payload: LoginInput) {
  return apiClient<AuthResponse>('/auth/login', {
    method: HttpMethod.POST,
    body: JSON.stringify(payload)
  })
}

export function register(payload: RegisterInput) {
  return apiClient<AuthResponse>('/auth/register', {
    method: HttpMethod.POST,
    body: JSON.stringify(payload)
  })
}

export function logout() {
  return apiClient<AuthResponse>('/auth/logout', {
    method: HttpMethod.POST
  })
}

export function getCurrentUser() {
  return apiClient<AuthResponse>('/auth/me')
}
