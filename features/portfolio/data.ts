import { TemplateSection } from '../templates/types'

export const sectionMetadata: Record<TemplateSection, { label: string }> = {
  profile: { label: 'Profile' },
  about: { label: 'About' },
  skills: { label: 'Skills' },
  experience: { label: 'Experience' },
  education: { label: 'Education' },
  projects: { label: 'Projects' },
  services: { label: 'Services' },
  certifications: { label: 'Certifications' },
  achievements: { label: 'Achievements' },
  publications: { label: 'Publications' },
  volunteering: { label: 'Volunteering' },
  testimonials: { label: 'Testimonials' },
  contact: { label: 'Contact' }
}
