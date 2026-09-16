import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeProvider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portfolio Builder',
  description: 'Create, customize, and showcase your professional portfolio.'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn('h-full', 'font-sans', inter.variable)}>
      <AuthProvider>
        <body
          className={cn(
            'h-full',
            'antialiased',
            geistSans.variable,
            geistMono.variable,
            'font-sans',
            inter.variable
          )}
        >
          <ThemeProvider>
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
