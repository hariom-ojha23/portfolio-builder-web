import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { PortfolioSummary } from '../types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, MoreHorizontal, Pencil } from 'lucide-react'

type PortfolioCardProps = {
  portfolio: PortfolioSummary
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <Card>
      <div className="px-4 overflow-hidden">
        <div className="relative aspect-16/10 bg-muted rounded-md">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">Portfolio Preview</span>
          </div>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>{portfolio.name}</CardTitle>
            <CardDescription className="text-xs mt-1">
              Updated {new Date(portfolio.updatedAt).toLocaleDateString()}
            </CardDescription>
          </div>

          <Button variant="ghost" size="sm" className="shrink-0">
            <Pencil />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex flex-row justify-between items-center">
        <Badge variant="secondary" className="p-2 px-3 rounded-sm">
          {portfolio.templateId}
        </Badge>
        <Button size="xs" variant="outline">
          <Eye /> View Portfolio
        </Button>
      </CardContent>
    </Card>
  )
}
