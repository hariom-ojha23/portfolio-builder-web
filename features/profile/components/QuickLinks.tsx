import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Item, ItemActions, ItemContent, ItemTitle } from '@/components/ui/item'
import { ChevronRight, Settings, Wrench } from 'lucide-react'
import Link from 'next/link'

const actions = [
  { title: 'Change Password', icon: Wrench, href: '/profile' },
  { title: 'Notification Preferences', icon: Settings, href: '/settings' }
]

export default function QuickLinks() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
        <CardDescription>Manage other parts of your account.</CardDescription>
      </CardHeader>

      <CardContent>
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
