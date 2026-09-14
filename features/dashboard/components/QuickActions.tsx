import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle
} from '@/components/ui/item'
import { ChevronRight, FilePlus2, LayoutTemplate, UserRoundPen } from 'lucide-react'
import Link from 'next/link'

const actions = [
  {
    title: 'Create Portfolio',
    description: 'Start building a new portfolio',
    icon: FilePlus2,
    href: '/dashboard'
  },
  {
    title: 'Browse Templates',
    description: 'Choose portfolio template.',
    icon: LayoutTemplate,
    href: '/dashboard'
  },
  {
    title: 'Edit Profile',
    description: 'Update your personal information',
    icon: UserRoundPen,
    href: '/profile'
  }
]

export default function QuickActions() {
  return (
    <Card className="w-full lg:w-96">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="mt-2">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <Item
              key={action.title}
              variant="outline"
              className="hover:bg-muted/50"
              render={<Link href={action.href} />}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                <Icon className="size-4 text-primary" />
              </div>

              <ItemContent>
                <ItemTitle>{action.title}</ItemTitle>
                <ItemDescription>{action.description}</ItemDescription>
              </ItemContent>

              <ItemActions>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </ItemActions>
            </Item>
          )
        })}
      </CardContent>
    </Card>
  )
}
