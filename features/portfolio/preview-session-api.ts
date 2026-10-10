import { apiClient } from '@/lib/api-client'
import { HttpMethod } from '@/lib/enums/http-method'
import { PortfolioConfig } from './types'

export interface CreatePreviewSessionInput {
  templateId: string
  config: PortfolioConfig
}

export interface PreviewSession {
  id: string
  templateId: string
  previewToken: string
  expiresAt: string
}

export interface UpdatePreviewConfigInput {
  config: PortfolioConfig
}

export interface UpdatePreviewConfigResponse {
  id: string
  updated: boolean
  expiresAt: string
}

export interface PreviewConfigResponse {
  templateId: string
  config: PortfolioConfig
  expiresAt: string
}

export function createPreviewSession(
  payload: CreatePreviewSessionInput
): Promise<PreviewSession> {
  return apiClient<PreviewSession>('preview-session', {
    method: HttpMethod.POST,
    body: JSON.stringify(payload)
  })
}

export function updatePreviewConfig(
  sessionId: string,
  payload: UpdatePreviewConfigInput
): Promise<UpdatePreviewConfigResponse> {
  return apiClient<UpdatePreviewConfigResponse>(`preview-session/${sessionId}/config`, {
    method: HttpMethod.PATCH,
    body: JSON.stringify(payload)
  })
}

export function deletePreviewSession(sessionId: string): Promise<{ deleted: boolean }> {
  return apiClient<{ deleted: boolean }>(`preview-session/${sessionId}`, {
    method: HttpMethod.DELETE
  })
}

export async function getPreviewConfig(
  previewToken: string
): Promise<PreviewConfigResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${apiUrl}/api/v1/preview-session/config`, {
    headers: {
      'x-preview-token': previewToken
    },
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch preview config (${response.status})`)
  }

  return response.json()
}
