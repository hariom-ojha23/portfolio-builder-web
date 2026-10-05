import { PortfolioEditor } from '@/features/portfolio/components/PortfolioEditor'
import { templatesById } from '@/features/templates/data/templates'
import { notFound } from 'next/navigation'

interface NewPortfolioPageProps {
  searchParams: Promise<{
    template?: string
  }>
}

export default async function NewPortfolioPage({ searchParams }: NewPortfolioPageProps) {
  const { template: templateId } = await searchParams

  if (!templateId) {
    notFound()
  }

  const template = templatesById[templateId]

  if (!template) {
    notFound()
  }

  return <PortfolioEditor template={template} />
}
