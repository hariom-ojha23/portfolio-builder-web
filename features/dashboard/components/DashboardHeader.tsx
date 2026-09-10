'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { Plus } from 'lucide-react'

export function DashboardHeader() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back, {user?.name ?? 'there'}!
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your portfolios and showcase your work.
        </p>
      </div>

      <Button>
        <Plus />
        Create New Portfolio
      </Button>
    </div>
  )
}
