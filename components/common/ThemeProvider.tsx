'use client'

import { STORAGE_KEYS } from '@/lib/enums/storage-keys'
import { THEME } from '@/lib/enums/theme'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Theme = THEME.LIGHT | THEME.DARK

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// Provides theme state and actions to the application
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

// Applies the selected theme to the root HTML element
const applyThemeToDocument = (newTheme: Theme) => {
  document.documentElement.classList.toggle(THEME.DARK, newTheme === THEME.DARK)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Light theme is used as the initial SSR-safe value
  const [theme, setThemeState] = useState<Theme>(THEME.LIGHT)

  // Restore the user's previously selected theme
  useEffect(() => {
    const selectedTheme = localStorage.getItem(STORAGE_KEYS.THEME)

    if (selectedTheme === THEME.DARK || selectedTheme === THEME.LIGHT) {
      setThemeState(selectedTheme)
      applyThemeToDocument(selectedTheme)
    } else {
      setThemeState(THEME.LIGHT)
      applyThemeToDocument(THEME.LIGHT)
    }
  }, [])

  // Update state, persist preference, and apply theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme)
    applyThemeToDocument(newTheme)
  }

  // Switch between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Provides access to the theme context
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be inside ThemeProvider')
  }

  return context
}
