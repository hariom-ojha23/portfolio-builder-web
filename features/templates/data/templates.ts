import { TEMPLATE_CATEGORY } from '@/lib/enums/template-categories'
import { Template } from '../types'

export const templates: Template[] = [
  {
    id: 'minimal-001',
    name: 'Minimal',
    description: 'A clean and simple portfolio focused on your work.',
    category: TEMPLATE_CATEGORY.MINIMAL,
    supportedSections: ['about', 'skills', 'experience', 'projects', 'contact'],
    features: {
      socialLinks: true,
      avatar: true,
      resume: true
    }
  },
  {
    id: 'developer-001',
    name: 'Developer',
    description: 'A technical portfolio designed for developers.',
    category: TEMPLATE_CATEGORY.DEVELOPER,
    supportedSections: [
      'about',
      'skills',
      'experience',
      'education',
      'projects',
      'certifications',
      'contact'
    ],
    features: {
      socialLinks: true,
      avatar: true,
      resume: true
    }
  },
  {
    id: 'creative-001',
    name: 'Creative',
    description: 'A bold and modern portfolio for creative professionals.',
    category: TEMPLATE_CATEGORY.CREATIVE,
    supportedSections: [
      'about',
      'skills',
      'projects',
      'services',
      'testimonials',
      'contact'
    ],

    features: {
      socialLinks: true,
      avatar: true,
      resume: false
    }
  }
]

export const templatesById: Record<string, Template> = Object.fromEntries(
  templates.map((template) => [template.id, template])
)
