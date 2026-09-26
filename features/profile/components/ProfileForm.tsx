'use Client'

import { useRef, useState } from 'react'
import type { Profile } from '../types'
import { updateProfile, uploadAvatar } from '../api'
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
import { Camera, Loader2 } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'sonner'
import { getErrorMessage } from '@/lib/get-error-message'
import { getInitials } from '@/lib/get-name-initials'

type ProfileFormProps = {
  profile: Profile
  setProfile: (value: Profile) => void
}

export default function ProfileForm({ profile, setProfile }: ProfileFormProps) {
  const { setUser, user } = useAuth()

  const [name, setName] = useState<string>(profile.name)
  const [saving, setSaving] = useState<boolean>(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: React.SubmitEvent) => {
    try {
      event.preventDefault()

      setSaving(true)

      const result = await updateProfile({ name })
      toast.success('Profile updated successfully')

      setProfile(result)

      // update user in auth context
      if (user) setUser({ ...user, name })
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Failed to update. Please try again.'
      toast.error(message)
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const file = files[0]

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image size must be less than 2MB')
      return
    }

    try {
      setUploadingAvatar(true)

      const result = await uploadAvatar(file)
      setProfile({ ...profile, avatarUrl: result.url })

      if (user) setUser({ ...user, avatarUrl: result.url })

      toast.success('Avatar uploaded successfully')
    } catch (error) {
      const message =
        getErrorMessage(error) ?? 'Failed to upload photo. Please try again.'
      toast.error(message)
    } finally {
      setUploadingAvatar(false)

      // Allows selecting the sae file again
      event.target.value = ''
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
          <div className="overflow-hidden relative rounded-full w-36 h-36 bg-gray-200">
            {uploadingAvatar && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-white" />
              </div>
            )}

            {profile.avatarUrl && !uploadingAvatar && (
              <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full" />
            )}

            {!profile.avatarUrl && !uploadingAvatar && (
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-6xl text-primary">{getInitials(name)}</p>
              </div>
            )}
          </div>

          <div className="space-y-2 flex flex-col items-center md:block">
            <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
              <Camera /> Change Photo
            </Button>
            <p className="text-xs text-muted-foreground">
              JPG, PNG, or WebP. Max size 2MB.
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleAvatarChange}
            />
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
