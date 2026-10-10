'use client'

import { Button } from '@/components/ui/button'
import { PREVIEW_MODE } from '@/lib/enums/preview-mode'
import { cn } from 'cn'
import { Monitor, Smartphone, Tablet } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

type PreviewModes = { value: PREVIEW_MODE; label: string; icon: typeof Monitor }

const PORTFOLIO_PREVIEW_READY = 'PORTFOLIO_PREVIEW_READY'
const PORTFOLIO_CONFIG_UPDATE = 'PORTFOLIO_CONFIG_UPDATE'

interface PortfolioPreviewProps {
  config: unknown
  templateUrl?: string
}

const previewWidths: Record<PREVIEW_MODE, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px'
}

export function PortfolioPreiew({
  config,
  templateUrl = 'http://localhost:5173'
}: PortfolioPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [ready, setReady] = useState(false)
  const [mode, setMode] = useState<PREVIEW_MODE>(PREVIEW_MODE.DESKTOP)

  const sendConfig = useCallback(() => {
    const iframe = iframeRef.current

    if (!ready || !iframe?.contentWindow) return

    iframe.contentWindow.postMessage(
      {
        type: PORTFOLIO_CONFIG_UPDATE,
        payload: config
      },
      new URL(templateUrl).origin
    )
  }, [config, ready, templateUrl])

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== new URL(templateUrl).origin) return
      if (event.source !== iframeRef.current?.contentWindow) return

      if (event.data?.type === PORTFOLIO_PREVIEW_READY) {
        setReady(true)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [templateUrl])

  useEffect(() => {
    sendConfig()
  }, [sendConfig])

  const modes: PreviewModes[] = [
    { value: PREVIEW_MODE.DESKTOP, label: 'Desktop', icon: Monitor },
    { value: PREVIEW_MODE.TABLET, label: 'Tablet', icon: Tablet },
    { value: PREVIEW_MODE.MOBILE, label: 'Mobile', icon: Smartphone }
  ]

  return (
    <div className="relative h-full min-h-[510px] w-full overflow-hidden rounded-lg border">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b bg-card px-3 py-2">
        <span className="text-sm font-medium">Live Preview</span>
        <div className="flex items-center gap-1">
          {modes.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              type="button"
              variant={mode === value ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setMode(value)}
              aria-label={`${label} preview`}
              aria-pressed={mode === value}
              title={label}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 justify-center overflow-auto bg-muted/40">
        {!ready && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
            Loading preview...
          </div>
        )}

        <div
          className={cn(
            'relative h-full min-h-[510px] max-w-full overflow-hidden border bg-white shadow-sm transition-[width] duration-200',
            mode === 'mobile' && 'min-h-[510px]'
          )}
          style={{ width: previewWidths[mode], flexShrink: 0 }}
        >
          <iframe
            ref={iframeRef}
            src={templateUrl}
            title={`${mode} portfolio preview`}
            className="absolute inset-0 h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  )
}
