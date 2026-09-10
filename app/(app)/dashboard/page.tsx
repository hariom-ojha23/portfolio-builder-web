import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import DashboardStats from '@/features/dashboard/components/DashboardStats'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
    </div>
  )
}
