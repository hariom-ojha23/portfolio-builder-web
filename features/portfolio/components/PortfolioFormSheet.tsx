import { EditorSection, PortfolioConfig } from '../types'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { TemplateSection } from '@/features/templates/types'
import { ProfileForm } from './ProfileForm'

interface PortfolioFormSheetProps {
  section: EditorSection | null
  open: boolean
  onOpenChange: (open: boolean) => void
  config: PortfolioConfig
  onConfigChange: (config: PortfolioConfig) => void
}

export function PortfolioFormSheet({
  section,
  open,
  onOpenChange,
  config,
  onConfigChange
}: PortfolioFormSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-xl">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle>Edit Portfolio</SheetTitle>
        </SheetHeader>

        <main className="min-w-0 flex-1 overflow-y-auto py-2 px-6">
          {section === 'profile' && (
            <ProfileForm config={config} onConfigChange={onConfigChange} />
          )}

          {section === 'about' && <div>About Form</div>}

          {section === 'skills' && <div>Skills Form</div>}

          {section === 'experience' && <div>Experience Form</div>}

          {section === 'education' && <div>Education Form</div>}

          {section === 'projects' && <div>Projects Form</div>}

          {section === 'services' && <div>Services Form</div>}

          {section === 'certifications' && <div>Certifications Form</div>}

          {section === 'achievements' && <div>Achievements Form</div>}

          {section === 'publications' && <div>Publications Form</div>}

          {section === 'volunteering' && <div>Volunteering Form</div>}

          {section === 'testimonials' && <div>Testimonials Form</div>}

          {section === 'contact' && <div>Contact Form</div>}
        </main>
      </SheetContent>
    </Sheet>
  )
}
