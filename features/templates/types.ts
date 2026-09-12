import { TEMPLATE_CATEGORY } from '@/lib/enums/template-categories'

export type TemplateCategory =
  | TEMPLATE_CATEGORY.MINIMAL
  | TEMPLATE_CATEGORY.DEVELOPER
  | TEMPLATE_CATEGORY.CREATIVE

export type Template = {
  id: string
  name: string
  description: string
  category: TemplateCategory
}
