import { TEMPLATE_CATEGORY } from '@/lib/enums/template-categories'
import { TemplateCategory } from '../types'
import { Button } from '@/components/ui/button'

const categories: ('All' | TemplateCategory)[] = [
  'All',
  TEMPLATE_CATEGORY.MINIMAL,
  TEMPLATE_CATEGORY.DEVELOPER,
  TEMPLATE_CATEGORY.CREATIVE
]

type TemplateCategoriesProps = {
  value: string | TEMPLATE_CATEGORY
  onChange: (value: string | TEMPLATE_CATEGORY) => void
}

export default function TemplateCategories({ value, onChange }: TemplateCategoriesProps) {
  return (
    <div className="flex items-center gap-2">
      {categories.map((category) => {
        return (
          <Button
            key={category}
            variant={value === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(category)}
          >
            {category}
          </Button>
        )
      })}
    </div>
  )
}
