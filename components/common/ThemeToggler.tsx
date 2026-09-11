'use client'

import { useTheme } from '@/context/ThemeProvider'
import { Button } from '../ui/button'
import { THEME } from '@/lib/enums/theme'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle Theme" onClick={toggleTheme}>
      {theme === THEME.DARK ? <Sun /> : <Moon />}
    </Button>
  )
}
