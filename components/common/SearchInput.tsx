'use client'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Search } from 'lucide-react'

type SearchInputProps = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>

      <InputGroupInput
        type="search"
        placeholder={placeholder ?? 'Search...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}
