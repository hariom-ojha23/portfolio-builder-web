'use client'

import { useEffect, useMemo, useState } from 'react'
import TemplateSearch from './TemplateSearch'
import TemplateCategories from './TemplateCategories'
import TemplateGrid from './TemplateGrid'
import { Template, TemplateCategory } from '../types'
import { templates } from '../data/templates'

export default function TemplateBrowser() {
  const [category, setCategory] = useState<TemplateCategory | string>('All')
  const [search, setSearch] = useState<string>('')
  const [templateList, setTemplateList] = useState<Template[]>(templates)

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchedCategory = template.category === category || category === 'All'

      const query = search.trim().toLowerCase()

      const matchedSearch =
        !query ||
        template.name.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query)

      return matchedCategory && matchedSearch
    })
  }, [category, search])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <TemplateSearch value={search} onChange={setSearch} />
        <TemplateCategories value={category} onChange={setCategory} />
      </div>

      <TemplateGrid templates={filteredTemplates} />
    </div>
  )
}
