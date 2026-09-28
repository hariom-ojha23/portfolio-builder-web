import { Button } from '@/components/ui/button'
import { PortfolioList } from '@/features/portfolio/components/PortfolioList'
import { Plus } from 'lucide-react'

export default function PortfoliosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Portfolios</h1>

          <p className="text-muted-foreground">Manage and organize your portfolios.</p>
        </div>

        <Button>
          <Plus />
          Create New Portfolio
        </Button>
      </div>

      <PortfolioList />
    </div>
  )
}
