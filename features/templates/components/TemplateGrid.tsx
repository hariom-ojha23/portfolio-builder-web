import { Template } from '../types'
import TemplateCard from './TemplateCard'

type TemplateGridProps = {
  templates: Template[]
}

export default function TemplateGrid({ templates }: TemplateGridProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {templates.map((template) => {
          return <TemplateCard key={template.id} template={template} />
        })}
      </div>
    </div>
  )
}
