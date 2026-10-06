'use client'

import { Template, TemplateSection } from '@/features/templates/types'
import { useMemo, useState } from 'react'
import { defaultPortfolioConfig } from '../defaults'
import { PortfolioConfig } from '../types'
import { sectionMetadata } from '../data'
import { Button } from '@/components/ui/button'
import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Eye,
  FileText,
  FolderKanban,
  GraduationCap,
  HeartHandshake,
  LucideIcon,
  Mail,
  MessageSquareQuote,
  Newspaper,
  Save,
  Trophy,
  Wrench
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { PortfolioFormSheet } from './PortfolioFormSheet'

interface PortfolioEditorProps {
  template: Template
}

export const sectionIcons: Record<TemplateSection, LucideIcon> = {
  about: FileText,
  skills: Code2,
  experience: BriefcaseBusiness,
  education: GraduationCap,
  projects: FolderKanban,
  services: Wrench,
  certifications: BadgeCheck,
  achievements: Trophy,
  publications: Newspaper,
  volunteering: HeartHandshake,
  testimonials: MessageSquareQuote,
  contact: Mail
}
export function PortfolioEditor({ template }: PortfolioEditorProps) {
  const [config, setConfig] = useState<PortfolioConfig>(defaultPortfolioConfig)
  const [activeSection, setActiveSection] = useState<TemplateSection | null>(null)
  const [sheetOpen, setSheetOpen] = useState<boolean>(false)

  const editorSections = useMemo<{ key: TemplateSection; label: string }[]>(
    () => [
      ...template.supportedSections.map((section) => ({
        key: section,
        label: sectionMetadata[section].label
      }))
    ],
    [template.supportedSections]
  )

  const handleSectionClick = (section: TemplateSection) => {
    setActiveSection(section)
    setSheetOpen(true)
  }

  const handleSavePortfolio = () => {
    console.log({
      templateId: template.id,
      config
    })
  }

  return (
    <div className="flex min-h-0 flex-col gap-6">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Create Portfolio</h1>

          <p className="text-sm text-muted-foreground">
            Customize your portfolio using the{' '}
            <span className="font-medium text-foreground">{template.name}</span> template.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            <Eye />
            Preview
          </Button>

          <Button type="button" onClick={handleSavePortfolio}>
            <Save />
            Save Portfolio
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Sidebar */}
        <Card className="min-h-0 overflow-hidden">
          <div className="border-b px-4 py-3">
            <h2 className="font-semibold">Sections</h2>

            <p className="mt-1 text-xs text-muted-foreground">{template.name} template</p>
          </div>

          <div className="overflow-y-auto p-2">
            {editorSections.map((section) => {
              const active = activeSection === section.key
              const Icon = sectionIcons[section.key]

              return (
                <button
                  key={section.key}
                  type="button"
                  onClick={() => handleSectionClick(section.key)}
                  className={[
                    'flex w-full items-center gap-3 rounded-md px-3 py-2 my-2 text-left text-sm transition-colors cursor-pointer',
                    active ? 'bg-pink-100 text-primary' : 'hover:bg-muted'
                  ].join(' ')}
                >
                  <Icon className="size-4" />
                  <span className="truncate">{section.label}</span>
                </button>
              )
            })}
          </div>
        </Card>

        {/* Preview */}
        <Card className="min-h-0 overflow-hidden">
          <div className="flex h-full min-h-[600px] items-center justify-center bg-muted/30">
            <div className="text-center">
              <p className="text-lg font-medium">Portfolio Preview</p>

              <p className="mt-1 text-sm text-muted-foreground">{template.name}</p>

              <p className="mt-2 text-xs text-muted-foreground">
                Live preview will be connected here.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <PortfolioFormSheet
        section={activeSection}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        config={config}
        onConfigChange={setConfig}
      />
    </div>
  )
}
