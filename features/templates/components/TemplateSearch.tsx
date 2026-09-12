'use client'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Search } from 'lucide-react'

type TemplateSearchProps = {
  value: string
  onChange: (value: string) => void
}

export default function TemplateSearch({ value, onChange }: TemplateSearchProps) {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>

      <InputGroupInput
        type="search"
        placeholder="Search templates..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}
