export interface User {
  id: string
  name: string
  email: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface RegisterInput {
  name: string
  email: string
  password: string
}

export interface LogoutResponse {
  message: string
}

export interface AuthResponse {
  user: User
}
