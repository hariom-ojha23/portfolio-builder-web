'use client'

import { Toaster as Sonner, type ToasterProps } from 'sonner'
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon
} from 'lucide-react'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      className="toaster group"
      richColors={true}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4" />
      }}
      style={
        {
          '--border-radius': 'var(--radius)'
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
