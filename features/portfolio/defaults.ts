import type { PortfolioConfig } from './types'

export const defaultPortfolioConfig: PortfolioConfig = {
  settings: {
    site: {
      title: 'Jordan Avery',
      description: 'Full Stack Developer',
      language: 'en',
      favicon: '/assets/favicon.svg'
    },
    sections: {
      about: { enabled: true, title: 'About', order: 1 },
      skills: { enabled: true, title: 'Technical Focus', order: 2 },
      experience: { enabled: true, title: 'Experience', order: 3 },
      education: { enabled: false, title: 'Education', order: 4 },
      projects: { enabled: true, title: 'Selected Work', order: 5 },
      services: { enabled: false, title: 'Services', order: 6 },
      certifications: {
        enabled: false,
        title: 'Certifications',
        order: 7
      },
      achievements: { enabled: false, title: 'Achievements', order: 8 },
      publications: { enabled: false, title: 'Publications', order: 9 },
      volunteering: {
        enabled: false,
        title: 'Volunteering',
        order: 10
      },
      testimonials: {
        enabled: false,
        title: 'Testimonials',
        order: 11
      },
      contact: { enabled: true, title: 'Contact', order: 12 }
    }
  },
  profile: {
    name: 'Hari Om Ojha',
    title: 'Full Stack Developer',
    bio: 'I design and build resilient, distributed web applications and high-performance design systems.',
    location: 'India',
    availability: 'Available for Select Contracts',
    avatar: '/assets/profile.svg',
    resume: '/assets/resume.pdf'
  },
  about: {
    description:
      'Software engineer focused on bridging the gap between clean product architecture and refined typography. Over the past six years, I have worked across the stack building web applications, developer APIs, and interactive tools.',
    extended:
      'My core philosophy centers on simplicity: writing software that is easy to understand, easy to maintain, and fast for the end user.'
  },
  social: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/example'
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/example'
    },
    {
      platform: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/example'
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:hello@example.com'
    }
  ],
  skills: [
    {
      name: 'TypeScript',
      category: 'Frontend'
    },
    {
      name: 'React',
      category: 'Frontend'
    },
    {
      name: 'Next.js',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      category: 'Backend'
    },
    {
      name: 'GraphQL',
      category: 'Backend'
    },
    {
      name: 'PostgreSQL',
      category: 'Database'
    },
    {
      name: 'Redis',
      category: 'Database'
    },
    {
      name: 'Docker',
      category: 'Tools'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend'
    }
  ],
  experience: [
    {
      company: 'Apex Core Systems',
      role: 'Staff Platform Engineer',
      location: 'Remote',
      startDate: '2023',
      endDate: 'Present',
      description:
        'Leading the core application architecture, standardizing frontend build workflows, and cutting bundle sizes by 35% across all customer-facing interfaces.',
      highlights: [
        'Architected real-time WebSocket state distribution',
        'Mentored a team of 8 full-stack engineers'
      ]
    },
    {
      company: 'Vanguard Studio',
      role: 'Senior Frontend Developer',
      location: 'Bengaluru, India',
      startDate: '2021',
      endDate: '2023',
      description:
        'Spearheaded the design system initiative and built data visualization tooling used by over 120,000 monthly active users.',
      highlights: [
        'Constructed zero-dependency headless component primitives',
        'Reduced initial load times from 2.4s to under 800ms'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      location: 'India',
      startDate: '2017',
      endDate: '2021',
      description:
        'Focused on software engineering, algorithms, distributed systems, and database technologies.'
    }
  ],
  projects: [
    {
      title: 'Portfolio Engine',
      description:
        'A high-performance static site generator and distribution pipeline designed for developer portfolios.',
      image: '/assets/project-1.svg',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js'],
      url: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: true
    },
    {
      title: 'Telemetry Grid',
      description:
        'Minimalist telemetry dashboard providing sub-second latency analytics for microservices.',
      image: '/assets/project-2.svg',
      technologies: ['TypeScript', 'WebSockets', 'Go', 'Canvas API'],
      url: 'https://example.com',
      sourceUrl: 'https://github.com/example',
      featured: true
    }
  ],
  services: [
    {
      title: 'Web Development',
      description:
        'Building modern, scalable web applications with a focus on performance and maintainability.'
    },
    {
      title: 'Frontend Architecture',
      description:
        'Designing scalable frontend architectures, component systems, and development workflows.'
    },
    {
      title: 'Technical Consulting',
      description:
        'Helping teams improve software architecture, performance, and engineering practices.'
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      issueDate: '2025',
      expiryDate: null,
      credentialId: 'ABC123',
      credentialUrl: 'https://example.com'
    }
  ],
  achievements: [
    {
      title: 'Open Source Contributor',
      organization: 'Example Foundation',
      date: '2025',
      description: 'Recognized for meaningful contributions to open source projects.'
    }
  ],
  publications: [
    {
      title: 'Building Scalable React Applications',
      publisher: 'Example Engineering',
      date: '2025',
      description:
        'An article exploring scalable frontend architecture and maintainable React applications.',
      url: 'https://example.com'
    }
  ],
  volunteering: [
    {
      organization: 'Code For Good',
      role: 'Volunteer Developer',
      location: 'India',
      startDate: '2023',
      endDate: 'Present',
      description:
        'Contributing engineering skills to nonprofit and community-focused technology projects.'
    }
  ],
  testimonials: [
    {
      quote:
        "Jordan is one of the strongest engineers I've worked with. He combines excellent technical judgment with a strong product mindset.",
      author: 'Alex Morgan',
      role: 'Engineering Manager',
      company: 'Example Company',
      avatar: '/assets/testimonial-1.jpg'
    },
    {
      quote:
        'Jordan consistently turns complex engineering problems into simple, maintainable solutions.',
      author: 'Sarah Chen',
      role: 'Product Director',
      company: 'Example Studio',
      avatar: '/assets/testimonial-2.jpg'
    }
  ],
  contact: {
    title: "Let's build something lasting.",
    description:
      'Have an engineering initiative or looking to bring a modern digital experience to life? Feel free to reach out directly.',
    email: 'hello@example.com'
  }
}
