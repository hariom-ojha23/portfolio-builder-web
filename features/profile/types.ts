export interface Profile {
  id: string
  name: string
  email: string
  avatarUrl?: string
  createdAt: Date
  isActive: boolean
}

export interface UpdateProfileInput {
  name: string
}
