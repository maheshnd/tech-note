'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme(): void {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}

function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}

function ThemeCard(): JSX.Element {
  const { theme } = useTheme()

  return (
    <div
      className={
        theme === 'dark'
          ? 'rounded-2xl border border-border-dark bg-[#0d1621] p-4 text-ink-dark'
          : 'rounded-2xl border border-border bg-white p-4 text-ink'
      }
    >
      <h3 className="text-lg font-semibold">Theme from context</h3>
      <p className="mt-2 text-sm opacity-80">
        This nested component reads the same value without props being passed through every level.
      </p>
      <p className="mt-3 text-sm font-semibold">Current theme: {theme}</p>
    </div>
  )
}

function DeepTree(): JSX.Element {
  return (
    <section className="space-y-4">
      <ThemeToggle />
      <ThemeCard />
    </section>
  )
}

export const useContextPreviewSource = `'use client'

import { createContext, useContext, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const value = useMemo(() => ({
    theme,
    toggleTheme() {
      setTheme((current) => (current === 'light' ? 'dark' : 'light'))
    },
  }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
`

export default function UseContextPreview(): JSX.Element {
  return (
    <ThemeProvider>
      <DeepTree />
    </ThemeProvider>
  )
}
