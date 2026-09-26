import { apiClient } from '@/lib/api-client'
import { Profile, UpdateProfileInput } from './types'
import { HttpMethod } from '@/lib/enums/http-method'

export function getProfile(): Promise<Profile> {
  return apiClient<Profile>('user/profile')
}

export function updateProfile(payload: UpdateProfileInput): Promise<Profile> {
  return apiClient<Profile>('user/profile', {
    method: HttpMethod.PATCH,
    body: JSON.stringify(payload)
  })
}

export function uploadAvatar(file: File): Promise<{ url: string }> {
  const formData = new FormData()
  formData.append('file', file)

  return apiClient<{ url: string }>('user/avatar', {
    method: HttpMethod.POST,
    body: formData
  })
}
