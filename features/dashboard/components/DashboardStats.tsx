import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, FileText, LayoutTemplate, Users } from 'lucide-react'

const stats = [
  {
    title: 'Total Portfolios',
    value: '3',
    description: 'Active portfolios',
    icon: FileText
  },
  {
    title: 'Total Views',
    value: '1,284',
    description: 'Across all portfolios',
    icon: Eye
  },
  {
    title: 'Total Visitors',
    value: '856',
    description: 'Unique visitors',
    icon: Users
  },
  {
    title: 'Templates Used',
    value: '2',
    description: 'From your portfolios',
    icon: LayoutTemplate
  }
]

export default function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <Card key={stat.title} className="gap-2 py-3">
            <CardHeader className="flex flex-row items-center justify-between px-4 py-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>

              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="px-4 py-0">
              <div className="text-xl font-semibold">{stat.value}</div>

              <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
