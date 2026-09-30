'use client'

import SearchInput from '@/components/common/SearchInput'
import { PortfolioGrid } from './PortfolioGrid'
import { useEffect, useMemo, useState } from 'react'
import { getAllPortfolio } from '../api'
import { PortfolioSummary } from '../types'

export function PortfolioList() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [portfolios, setPortfolios] = useState<PortfolioSummary[]>([])

  useEffect(() => {
    setIsLoading(true)
    getAllPortfolio()
      .then((res) => setPortfolios(res))
      .catch(() => setPortfolios([]))
      .finally(() => setIsLoading(false))
  }, [])

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((portfolio) => {
      const query = search.trim().toLowerCase()

      const matchedSearch =
        !query ||
        portfolio.name.toLowerCase().includes(query) ||
        portfolio.templateId.toLowerCase().includes(query)

      return matchedSearch
    })
  }, [search])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search portfolios..."
        />
      </div>

      <PortfolioGrid isLoading={isLoading} portfolios={filteredPortfolios} />
    </div>
  )
}
