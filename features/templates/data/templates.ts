import { TEMPLATE_CATEGORY } from '@/lib/enums/template-categories'
import { Template } from '../types'

export const templates: Template[] = [
  {
    id: 'minimal-001',
    name: 'Minimal',
    description: 'A clean and simple portfolio focused on your work.',
    category: TEMPLATE_CATEGORY.MINIMAL
  },
  {
    id: 'developer-001',
    name: 'Developer',
    description: 'A technical portfolio designed for developers.',
    category: TEMPLATE_CATEGORY.DEVELOPER
  },
  {
    id: 'creative-001',
    name: 'Creative',
    description: 'A bold and modern portfolio for creative professionals.',
    category: TEMPLATE_CATEGORY.CREATIVE
  }
]
