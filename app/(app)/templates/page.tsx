import { Item, ItemDescription, ItemTitle } from '@/components/ui/item'
import TemplateBrowser from '@/features/templates/components/TemplateBrowser'
import { Palette } from 'lucide-react'

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Templates</h1>

          <p className="text-muted-foreground">
            Choose a template to get started.
          </p>
        </div>
        <Item variant="outline" className="w-max bg-muted/50">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Palette className="size-4 text-primary" />
          </div>

          <div>
            <ItemTitle>Can't find what you are looking for?</ItemTitle>
            <ItemDescription>More templates coming soon.</ItemDescription>
          </div>
        </Item>
      </div>

      <TemplateBrowser />
    </div>
  )
}
