'use client'

import { useState } from 'react'

export const enterpriseThinkingPreviewSource = `'use client'

import { useState } from 'react'

type ReviewLens = 'split' | 'state' | 'props' | 'review'

export default function EnterpriseThinkingPreview() {
  const [lens, setLens] = useState<ReviewLens>('split')

  return null
}
`

type ReviewLens = 'split' | 'state' | 'props' | 'review'

const notes: Record<ReviewLens, string> = {
  split:
    'Split components when responsibilities differ, not just because a file gets long.',
  state:
    'Choose local, shared, or server state based on ownership and update frequency.',
  props:
    'Avoid prop drilling when shared state truly crosses many layers, but do not over-centralize too early.',
  review:
    'Review for clarity, behavior risk, testability, and long-term maintainability, not only whether it “works.”',
}

export default function EnterpriseThinkingPreview(): JSX.Element {
  const [lens, setLens] = useState<ReviewLens>('split')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(['split', 'state', 'props', 'review'] as ReviewLens[]).map(
          (option) => {
            const isActive = option === lens

            return (
              <button
                key={option}
                type="button"
                onClick={() => setLens(option)}
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
          Senior lens
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {notes[lens]}
        </p>
      </div>
    </section>
  )
}
