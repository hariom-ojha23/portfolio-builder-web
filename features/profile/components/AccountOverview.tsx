import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Profile } from '../types'
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import { Shield, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type AccountOverviewProps = {
  profile: Profile
}

export default function AccountOverview({ profile }: AccountOverviewProps) {
  const getDateString = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <Item>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-pink-100">
            <User className="size-4 text-primary" />
          </div>

          <ItemContent>
            <ItemDescription className="text-xs font-medium">
              Member Since
            </ItemDescription>
            <ItemTitle>{getDateString(profile.createdAt)}</ItemTitle>
          </ItemContent>
        </Item>

        <Item>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-pink-100">
            <Shield className="size-4 text-primary" />
          </div>

          <ItemContent>
            <ItemDescription className="text-xs font-medium">
              Account Status
            </ItemDescription>

            <ItemTitle>
              <Badge
                className={cn(
                  profile.isActive
                    ? 'bg-green-200 text-green-800'
                    : 'bg-red-200 text-red-600',
                  'px-3'
                )}
              >
                {profile.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </ItemTitle>
          </ItemContent>
        </Item>
      </CardContent>
    </Card>
  )
}
