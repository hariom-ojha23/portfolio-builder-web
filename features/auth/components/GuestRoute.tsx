'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/context/AuthContext'

type GuestRouteType = {
  children: ReactNode
}

export function GuestRoute({ children }: GuestRouteType) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (mounted && !loading && isAuthenticated) {
      router.replace('/dashboard')
    }
  }, [mounted, loading, isAuthenticated, router])

  if (!mounted || loading) return null

  if (isAuthenticated) return null

  return children
}
