import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle
} from '@/components/ui/item'
import { cn } from 'cn'
import { ArrowRight, Eye, MoreHorizontal } from 'lucide-react'

const portfolios = [
  {
    id: 1,
    name: 'My Developer Portfolio',
    template: 'Modern Developer',
    status: 'Published',
    views: 1240,
    updatedAt: '2 hours ago'
  },
  {
    id: 2,
    name: 'Personal Portfolio',
    template: 'Minimal',
    status: 'Draft',
    views: 0,
    updatedAt: 'Yesterday'
  },
  {
    id: 3,
    name: 'Full Stack Developer',
    template: 'Professional',
    status: 'Published',
    views: 842,
    updatedAt: '3 days ago'
  }
]

export default function RecentPortfolios() {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Recent Portfolios</CardTitle>
        <Button variant="ghost" size="sm">
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent>
        {portfolios.map((portfolio) => {
          return (
            <Item key={portfolio.id} variant="outline" className="hover:bg-muted/50">
              <ItemContent>
                <ItemTitle>{portfolio.name}</ItemTitle>
                <ItemDescription>Updated {portfolio.updatedAt}</ItemDescription>
              </ItemContent>

              <ItemActions className="flex gap-3">
                <Badge
                  className={cn(
                    'font-semibold',
                    portfolio.status === 'Published'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  )}
                >
                  {portfolio.status}
                </Badge>

                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </ItemActions>
            </Item>
          )
        })}
      </CardContent>
    </Card>
  )
}
