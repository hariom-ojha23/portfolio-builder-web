'use client'

import { useEffect, useState } from 'react'
import type { Profile } from '../types'
import { getProfile } from '../api'
import ProfileForm from './ProfileForm'
import AccountOverview from './AccountOverview'
import QuickLinks from './QuickLinks'

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true)

        const data = await getProfile()
        setProfile(data)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!profile) {
    return <div>Unable to load profile</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">View and manage your profile details.</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <ProfileForm profile={profile} setProfile={setProfile} />

        <div className="flex flex-col gap-5 w-full lg:w-96">
          <AccountOverview profile={profile} />
          <QuickLinks />
        </div>
      </div>
    </div>
  )
}
