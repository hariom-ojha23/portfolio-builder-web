import { TEMPLATE_CATEGORY } from '@/lib/enums/template-categories'

export type TemplateSection =
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'services'
  | 'certifications'
  | 'achievements'
  | 'publications'
  | 'volunteering'
  | 'testimonials'
  | 'contact'

export interface TemplateFeatures {
  socialLinks: boolean
  avatar: boolean
  resume: boolean
}

export interface Template {
  id: string
  name: string
  description: string
  category: TEMPLATE_CATEGORY

  supportedSections: TemplateSection[]
  features: TemplateFeatures
}
