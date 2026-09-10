import { GuestRoute } from '@/features/auth/components/GuestRoute'
import React from 'react'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-dvh flex justify-center items-center">
      <GuestRoute>{children}</GuestRoute>
    </main>
  )
}
