import { PortfolioCard } from './PortfolioCard'
import { PortfolioSummary } from '../types'
import { Skeleton } from '@/components/ui/skeleton'

type PortfolioGridProps = {
  portfolios: PortfolioSummary[]
  isLoading: boolean
}

export function PortfolioGrid({ portfolios, isLoading }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="h-72 w-full rounded-xl" />
          </div>
        ))
      ) : (
        portfolios?.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))
      )}
    </div>
  )
}
