import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Template } from '../types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type TemplateCardProps = {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card>
      <div className="px-4 overflow-hidden">
        <div className="relative aspect-16/10 bg-muted rounded-md">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">{template.name} Preview</span>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle>{template.name}</CardTitle>

        <CardDescription>{template.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-row justify-between items-center">
        <Badge variant="secondary" className="p-2 px-3 rounded-sm">
          {template.category}
        </Badge>
        <Button size="sm">
          Use template <ArrowRight />
        </Button>
      </CardContent>
    </Card>
  )
}
