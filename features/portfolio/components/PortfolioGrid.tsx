import { PortfolioCard } from './PortfolioCard'
import { PortfolioSummary } from '../types'

type PortfolioGridProps = {
  portfolios: PortfolioSummary[]
}

export function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {portfolios?.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  )
}
