'use client'

import { getCurrentUser, login as loginApi, register as registerApi, logout as logoutApi } from '@/features/auth/api'
import { LoginInput, RegisterInput } from '@/features/auth/schemas'
import { User } from '@/features/auth/types'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  setUser: (user: User | null) => void
  login: (payload: LoginInput) => Promise<void>
  register: (payload: RegisterInput) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await getCurrentUser()
        setUser(response.user)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    restoreSession()
  }, [])

  const login = async (payload: LoginInput) => {
    const response = await loginApi(payload)
    setUser(response.user)
  }

  const register = async (payload: RegisterInput) => {
    const response = await registerApi(payload)
    setUser(response.user)
  }

  const logout = async () => {
    try {
      await logoutApi()
    } finally {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        setUser,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must me used within a AuthProvide')
  }

  return context
}
