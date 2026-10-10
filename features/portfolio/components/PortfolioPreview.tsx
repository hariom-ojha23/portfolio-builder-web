'use client'

import { Button } from '@/components/ui/button'
import { PREVIEW_MODE } from '@/lib/enums/preview-mode'
import { cn } from '@/lib/utils'
import { Monitor, Smartphone, Tablet } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  createPreviewSession,
  updatePreviewConfig,
  type PreviewSession
} from '@/features/portfolio/preview-session-api'
import { PortfolioConfig } from '../types'

const PORTFOLIO_PREVIEW_READY = 'PORTFOLIO_PREVIEW_READY'
const PORTFOLIO_CONFIG_UPDATE = 'PORTFOLIO_CONFIG_UPDATE'
const PORTFOLIO_PREVIEW_SESSION = 'PORTFOLIO_PREVIEW_SESSION'

type PreviewModes = {
  value: PREVIEW_MODE
  label: string
  icon: typeof Monitor
}

interface PortfolioPreviewProps {
  config: PortfolioConfig
  templateId: string
  templateUrl?: string
}

const previewWidths: Record<PREVIEW_MODE, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px'
}

export function PortfolioPreiew({
  config,
  templateId,
  templateUrl = 'http://localhost:5173'
}: PortfolioPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const configRef = useRef(config)
  const readyRef = useRef(false)

  const [session, setSession] = useState<PreviewSession | null>(null)
  const [ready, setReady] = useState(false)
  const [mode, setMode] = useState<PREVIEW_MODE>(PREVIEW_MODE.DESKTOP)
  const [sessionLoading, setSessionLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const templateOrigin = new URL(templateUrl).origin

  useEffect(() => {
    configRef.current = config
  }, [config])

  const sendConfigToIframe = useCallback(
    (nextConfig: unknown) => {
      const iframe = iframeRef.current

      if (!readyRef.current || !iframe?.contentWindow) return

      iframe.contentWindow.postMessage(
        {
          type: PORTFOLIO_CONFIG_UPDATE,
          payload: nextConfig
        },
        templateOrigin
      )
    },
    [templateOrigin]
  )

  const sendPreviewSessionToIframe = useCallback(() => {
    const iframe = iframeRef.current

    if (!readyRef.current || !iframe?.contentWindow || !session) return

    iframe.contentWindow.postMessage(
      {
        type: PORTFOLIO_PREVIEW_SESSION,
        payload: {
          apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
          previewToken: session.previewToken
        }
      },
      templateOrigin
    )
  }, [session, templateOrigin])

  // Create a preview session.
  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function createSession() {
      try {
        setSessionLoading(true)
        setError(null)
        setSession(null)

        const createdSession = await createPreviewSession({
          templateId,
          config: configRef.current
        })

        if (!active || controller.signal.aborted) return

        setSession(createdSession)
      } catch (err) {
        if (!active || controller.signal.aborted) return

        setError(err instanceof Error ? err.message : 'Could not create preview session')
      } finally {
        if (active && !controller.signal.aborted) {
          setSessionLoading(false)
        }
      }
    }

    void createSession()

    return () => {
      active = false
      controller.abort()
    }
  }, [templateId])

  // Persist configuration changes and update the iframe.
  useEffect(() => {
    if (!session) return

    const controller = new AbortController()

    const timeout = setTimeout(async () => {
      try {
        await updatePreviewConfig(session.id, { config })

        if (controller.signal.aborted) return

        setError(null)
        sendConfigToIframe(config)
      } catch (err) {
        if (controller.signal.aborted) return

        setError(err instanceof Error ? err.message : 'Could not update preview')
      }
    }, 1000)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [config, session, sendConfigToIframe])

  // Handle messages from the iframe.
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== templateOrigin) return

      if (event.source !== iframeRef.current?.contentWindow) return

      if (event.data?.type !== PORTFOLIO_PREVIEW_READY) return

      readyRef.current = true
      setReady(true)

      // Send the session first so the template can fetch its config.
      sendPreviewSessionToIframe()

      // Also send the latest config for immediate editor updates.
      sendConfigToIframe(configRef.current)
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [templateOrigin, sendPreviewSessionToIframe, sendConfigToIframe])

  // If the session arrives after the iframe is ready, send it now.
  useEffect(() => {
    sendPreviewSessionToIframe()
  }, [sendPreviewSessionToIframe])

  const modes: PreviewModes[] = [
    { value: PREVIEW_MODE.DESKTOP, label: 'Desktop', icon: Monitor },
    { value: PREVIEW_MODE.TABLET, label: 'Tablet', icon: Tablet },
    { value: PREVIEW_MODE.MOBILE, label: 'Mobile', icon: Smartphone }
  ]

  return (
    <div className="relative flex min-h-127.5 min-w-0 flex-col overflow-hidden rounded-lg border">
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
        {(sessionLoading || !ready || !!error) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/90 p-4 text-sm">
            {error ?? 'Preparing preview...'}
          </div>
        )}

        <div
          className={cn(
            'relative min-h-127.5 max-w-full shrink-0 overflow-hidden border bg-white shadow-sm transition-[width] duration-200',
            mode === PREVIEW_MODE.MOBILE && 'min-h-127.5'
          )}
          style={{ width: previewWidths[mode] }}
        >
          <iframe
            ref={iframeRef}
            src={templateUrl}
            title={`${mode} portfolio preview`}
            className="absolute inset-0 h-full w-full border-0 bg-white"
            onLoad={() => {
              readyRef.current = false
              setReady(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}
