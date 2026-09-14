'use Client'

import { useState } from 'react'
import type { Profile } from '../types'
import { updateProfile } from '../api'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { InputGroup, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

type ProfileFormProps = {
  profile: Profile
  setProfile: (value: Profile) => void
}

export default function ProfileForm({ profile, setProfile }: ProfileFormProps) {
  const { setUser, user } = useAuth()

  const [name, setName] = useState<string>(profile.name)
  const [saving, setSaving] = useState<boolean>(false)

  const getInitials = () => {
    return name
      .toUpperCase()
      .split(' ')
      .map((word) => word.charAt(0))
      .slice(0, 2)
  }

  const handleSubmit = async (event: React.SubmitEvent) => {
    try {
      event.preventDefault()

      setSaving(true)

      const result = await updateProfile({ name })
      setProfile(result)

      // update user in auth context
      if (user) setUser({ ...user, name })
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your personal information. This information will be used as default in
          your portfolios.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="overflow-hidden rounded-full w-36 h-36 bg-gray-200">
            {profile.avatarUrl ? (
              <img className="w-full h-full" />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-6xl text-primary">{getInitials()}</p>
              </div>
            )}
          </div>

          <div className="space-y-2 flex flex-col items-center md:block">
            <Button variant="secondary">
              <Camera /> Change Photo
            </Button>
            <p className="text-xs text-muted-foreground">
              JPG, PNG, or WebP. Max size 2MB.
            </p>
          </div>
        </div>

        <form id="profile-form" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <InputGroup>
                <InputGroupInput
                  id="name"
                  type="text"
                  required
                  disabled={saving}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <InputGroup>
                <InputGroupInput
                  id="email"
                  type="email"
                  required
                  disabled
                  value={profile.email}
                />
              </InputGroup>
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button type="submit" form="profile-form" disabled={saving}>
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </CardFooter>
    </Card>
  )
}
