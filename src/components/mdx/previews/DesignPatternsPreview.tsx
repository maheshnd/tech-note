'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TabsContextValue {
  activeTab: string
  setActiveTab: (id: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext(): TabsContextValue {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('Tabs components must be used inside Tabs')
  }

  return context
}

function Tabs({
  defaultTab,
  children,
}: {
  defaultTab: string
  children: ReactNode
}): JSX.Element {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="space-y-4">{children}</div>
    </TabsContext.Provider>
  )
}

function TabList({ children }: { children: ReactNode }): JSX.Element {
  return <div className="flex flex-wrap gap-2">{children}</div>
}

function Tab({
  id,
  children,
}: {
  id: string
  children: ReactNode
}): JSX.Element {
  const { activeTab, setActiveTab } = useTabsContext()

  return (
    <button
      type="button"
      onClick={() => setActiveTab(id)}
      className={cn(
        'min-h-11 rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors',
        activeTab === id
          ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
          : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#1b2735]',
      )}
    >
      {children}
    </button>
  )
}

function TabPanel({
  whenActive,
  children,
}: {
  whenActive: string
  children: ReactNode
}): JSX.Element | null {
  const { activeTab } = useTabsContext()

  if (activeTab !== whenActive) return null

  return (
    <div className="rounded-2xl border border-border bg-white p-4 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark">
      {children}
    </div>
  )
}

export const designPatternsPreviewSource = `'use client'

import { createContext, useContext, useState } from 'react'

const TabsContext = createContext(null)

function Tabs({ defaultTab, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
}
`

export default function DesignPatternsPreview(): JSX.Element {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview shows the compound components pattern: one parent controls shared state, and nested child components coordinate through context.
        </p>
      </div>

      <Tabs defaultTab="composition">
        <TabList>
          <Tab id="composition">Composition</Tab>
          <Tab id="compound">Compound</Tab>
          <Tab id="headless">Headless</Tab>
        </TabList>

        <TabPanel whenActive="composition">
          Build complex UI from smaller focused pieces instead of inheritance.
        </TabPanel>
        <TabPanel whenActive="compound">
          Tabs, Accordion, and Select families often use this pattern.
        </TabPanel>
        <TabPanel whenActive="headless">
          Logic and state can live in one place while consumers fully control the markup.
        </TabPanel>
      </Tabs>
    </section>
  )
}
