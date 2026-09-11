import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import DashboardStats from '@/features/dashboard/components/DashboardStats'
import QuickActions from '@/features/dashboard/components/QuickActions'
import RecentPortfolios from '@/features/dashboard/components/RecentPortfolios'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="flex flex-col gap-5 lg:flex-row">
        <RecentPortfolios />
        <QuickActions />
      </div>
    </div>
  )
}
