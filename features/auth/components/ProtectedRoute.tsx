'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/context/AuthContext'

type ProtectedRouteProps = {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) return null

  if (!isAuthenticated) return null

  return children
}
