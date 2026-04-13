'use client'

import { useState } from 'react'

export const ecosystemToolsPreviewSource = `'use client'

import { useState } from 'react'

type ToolGroup = 'build' | 'data' | 'forms' | 'motion'

export default function EcosystemToolsPreview() {
  const [toolGroup, setToolGroup] = useState<ToolGroup>('build')

  return null
}
`

type ToolGroup = 'build' | 'data' | 'forms' | 'motion'

const toolNotes: Record<ToolGroup, string> = {
  build: 'Vite, ESLint, Prettier, Storybook, and DevTools improve speed, consistency, and debugging.',
  data: 'TanStack Query and Zustand help with async server state and shared client state.',
  forms: 'React Hook Form and Zod make form state and validation much more manageable.',
  motion: 'Framer Motion helps add expressive animation without hand-rolling every transition.',
}

export default function EcosystemToolsPreview(): JSX.Element {
  const [toolGroup, setToolGroup] = useState<ToolGroup>('build')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(['build', 'data', 'forms', 'motion'] as ToolGroup[]).map(
          (option) => {
            const isActive = option === toolGroup

            return (
              <button
                key={option}
                type="button"
                onClick={() => setToolGroup(option)}
                className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  isActive
                    ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                    : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
                }`}
              >
                <p className="text-sm font-semibold capitalize">{option}</p>
              </button>
            )
          },
        )}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Active tool group
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {toolNotes[toolGroup]}
        </p>
      </div>
    </section>
  )
}
