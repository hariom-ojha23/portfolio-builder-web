import { apiClient } from '@/lib/api-client'
import {
  CreatePortfolioInput,
  DeletePortfolioResponse,
  Portfolio,
  UpdatePortfolioInput
} from './types'
import { HttpMethod } from '@/lib/enums/http-method'

export function createPortfolio(payload: CreatePortfolioInput): Promise<Portfolio> {
  return apiClient<Portfolio>('portfolio', {
    method: HttpMethod.POST,
    body: JSON.stringify(payload)
  })
}

export function getAllPortfolio(): Promise<Portfolio[]> {
  return apiClient<Portfolio[]>('portfolio')
}

export function getRecentPortfolios(): Promise<Portfolio[]> {
  return apiClient<Portfolio[]>('portfolio/recent')
}

export function getPortfolioById(portfolioId: string): Promise<Portfolio> {
  return apiClient<Portfolio>(`portfolio/${portfolioId}`)
}

export function updatePortfolio(
  portfolioId: string,
  payload: UpdatePortfolioInput
): Promise<Portfolio> {
  return apiClient<Portfolio>(`portfolio/${portfolioId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload)
  })
}

export function deletePortfolio(portfolioId: string): Promise<DeletePortfolioResponse> {
  return apiClient<DeletePortfolioResponse>(`portfolio/${portfolioId}`, {
    method: 'DELETE'
  })
}
