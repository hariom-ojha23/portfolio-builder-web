'use client'

import SearchInput from '@/components/common/SearchInput'
import { PortfolioGrid } from './PortfolioGrid'
import { useMemo, useState } from 'react'

export function PortfolioList() {
  const [search, setSearch] = useState<string>('')

  const portfolios = [
    {
      id: '1234567896544',
      name: 'My Developer Portfolio',
      templateId: 'Minimal-001',
      createdAt: '2026-09-28',
      updatedAt: '2026-09-28'
    },
    {
      id: '1234567896545',
      name: 'My Portfolio 2.0',
      templateId: 'Minimal-002',
      createdAt: '2026-09-27',
      updatedAt: '2026-09-27'
    },
    {
      id: '1234567896546',
      name: 'My Portfolio 3.0',
      templateId: 'Minimal-003',
      createdAt: '2026-09-27',
      updatedAt: '2026-09-27'
    },
    {
      id: '1234567896547',
      name: 'My Portfolio 4.0',
      templateId: 'Minimal-004',
      createdAt: '2026-09-27',
      updatedAt: '2026-09-27'
    }
  ]

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

      <PortfolioGrid portfolios={filteredPortfolios} />
    </div>
  )
}
