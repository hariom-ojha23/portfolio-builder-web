import type { PortfolioConfig } from './types'

export const defaultPortfolioConfig: PortfolioConfig = {
  settings: {
    site: { title: '', description: '', language: 'en', favicon: '' },

    sections: {
      about: { enabled: true, title: 'About', order: 1 },
      skills: { enabled: true, title: 'Skills', order: 2 },
      experience: { enabled: true, title: 'Experience', order: 3 },
      education: { enabled: true, title: 'Education', order: 4 },
      projects: { enabled: true, title: 'Projects', order: 5 },
      services: { enabled: true, title: 'Services', order: 6 },
      certifications: { enabled: true, title: 'Certifications', order: 7 },
      achievements: { enabled: true, title: 'Achievements', order: 8 },
      publications: { enabled: true, title: 'Publications', order: 9 },
      volunteering: { enabled: true, title: 'Volunteering', order: 10 },
      testimonials: { enabled: true, title: 'Testimonials', order: 11 },
      contact: { enabled: true, title: 'Contact', order: 12 }
    }
  },

  profile: {
    name: '',
    title: '',
    bio: '',
    location: '',
    availability: '',
    avatar: '',
    resume: ''
  },

  about: {
    description: '',
    extended: ''
  },

  social: [],

  skills: [],

  experience: [],

  education: [],

  projects: [],

  services: [],

  certifications: [],

  achievements: [],

  publications: [],

  volunteering: [],

  testimonials: [],

  contact: { title: '', description: '', email: '' }
}
