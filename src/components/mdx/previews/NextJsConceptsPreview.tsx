'use client'

import { useState } from 'react'

export const nextJsConceptsPreviewSource = `'use client'

import { useState } from 'react'

type ViewMode = 'react' | 'nextjs'

export default function NextJsConceptsPreview() {
  const [viewMode, setViewMode] = useState<ViewMode>('react')

  return null
}
`

type ViewMode = 'react' | 'nextjs'

const comparison = {
  react: {
    title: 'Plain React app',
    points: [
      'Choose and configure routing yourself',
      'Choose your own SSR or CSR architecture',
      'Add SEO and metadata tooling separately',
      'Assemble more production concerns by hand',
    ],
  },
  nextjs: {
    title: 'Next.js app',
    points: [
      'File-based routing is built in',
      'Server rendering patterns and App Router are built in',
      'Caching, metadata, images, and fonts follow conventions',
      'Deployment model is more opinionated and production-oriented',
    ],
  },
} as const

export default function NextJsConceptsPreview(): JSX.Element {
  const [viewMode, setViewMode] = useState<ViewMode>('react')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {(['react', 'nextjs'] as ViewMode[]).map((option) => {
          const isActive = option === viewMode

          return (
            <button
              key={option}
              type="button"
              onClick={() => setViewMode(option)}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                isActive
                  ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
              }`}
            >
              <p className="text-sm font-semibold">
                {comparison[option].title}
              </p>
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <h3 className="text-base font-semibold text-ink dark:text-ink-dark">
          {comparison[viewMode].title}
        </h3>
        <ul className="mt-3 space-y-2">
          {comparison[viewMode].points.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
