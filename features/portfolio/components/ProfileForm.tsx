import { Label } from '@/components/ui/label'
import { PortfolioConfig } from '../types'
import { InputGroup, InputGroupInput } from '@/components/ui/input-group'
import { useAuth } from '@/context/AuthContext'
import { useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'

interface ProfileFormProps {
  config: PortfolioConfig
  onConfigChange: (config: PortfolioConfig) => void
}

export function ProfileForm({ config, onConfigChange }: ProfileFormProps) {
  const { user } = useAuth()

  const defaultAvatar = '/assets/profile.svg'

  useEffect(() => {
    // if default update with user avatar
    if (config.profile.avatar === defaultAvatar) {
      onConfigChange({
        ...config,
        profile: { ...config.profile, avatar: user?.avatarUrl ?? defaultAvatar }
      })
    }
  }, [])

  const updateDetails = (field: keyof PortfolioConfig['profile'], value: string) => {
    onConfigChange({
      ...config,
      profile: { ...config.profile, [field]: value }
    })
  }

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-semibold">Profile Details</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Manage your personal and professional information.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-name">Full Name</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-name"
            type="text"
            value={config.profile.name ?? ''}
            onChange={(e) => updateDetails('name', e.target.value)}
            placeholder="Your Full Name"
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-title">Professional Title</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-title"
            type="text"
            value={config.profile.title ?? ''}
            onChange={(e) => updateDetails('title', e.target.value)}
            placeholder="Full Stack Developer"
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-bio">Short Bio</Label>
        <InputGroup>
          <Textarea
            id="profile-bio"
            value={config.profile.bio ?? ''}
            onChange={(e) => updateDetails('bio', e.target.value)}
            placeholder="Full Stack Developer"
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-location">Location</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-location"
            type="text"
            value={config.profile.location ?? ''}
            onChange={(e) => updateDetails('location', e.target.value)}
            placeholder="India"
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-availability">Availability</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-availability"
            type="text"
            value={config.profile.availability ?? ''}
            onChange={(e) => updateDetails('availability', e.target.value)}
            placeholder="Available for opportunities"
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-avatar">Avatar URL</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-avatar"
            type="text"
            value={config.profile.avatar ?? ''}
            onChange={(e) => updateDetails('avatar', e.target.value)}
            placeholder={defaultAvatar}
          />
        </InputGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile-resume">Resume URL</Label>
        <InputGroup>
          <InputGroupInput
            id="profile-resume"
            type="text"
            value={config.profile.resume ?? ''}
            onChange={(e) => updateDetails('resume', e.target.value)}
            placeholder="/assets/resume.pdf"
          />
        </InputGroup>
      </div>
    </div>
  )
}
