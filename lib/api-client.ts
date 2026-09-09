const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}/api/v1/${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)

    const message = Array.isArray(error?.message)
      ? error.message.join(', ')
      : error?.message || `API error: ${response.status}`

    throw new Error(message)
  }

  return response.json()
}
