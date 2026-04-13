'use client'

import { useState } from 'react'

export const productionReadinessPreviewSource = `'use client'

import { useState } from 'react'

type LaunchCheck = 'env' | 'flags' | 'monitoring' | 'performance'

export default function ProductionReadinessPreview() {
  const [activeCheck, setActiveCheck] = useState<LaunchCheck>('env')

  return null
}
`

type LaunchCheck = 'env' | 'flags' | 'monitoring' | 'performance'

const checkDetails: Record<LaunchCheck, string> = {
  env: 'Environment variables are configured safely and secrets stay server-side.',
  flags: 'Feature flags let the team roll out risky features gradually.',
  monitoring: 'Error tracking and logs help the team see failures after launch.',
  performance:
    'Performance budgets keep bundle size and user-perceived speed under control.',
}

export default function ProductionReadinessPreview(): JSX.Element {
  const [activeCheck, setActiveCheck] = useState<LaunchCheck>('env')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(['env', 'flags', 'monitoring', 'performance'] as LaunchCheck[]).map(
          (option) => {
            const isActive = option === activeCheck

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveCheck(option)}
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
          Current launch check
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {checkDetails[activeCheck]}
        </p>
      </div>
    </section>
  )
}
