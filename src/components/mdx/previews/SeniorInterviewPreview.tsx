'use client'

import { useState } from 'react'

export const seniorInterviewPreviewSource = `'use client'

import { useState } from 'react'

type InterviewArea = 'architecture' | 'state' | 'performance' | 'internals'

export default function SeniorInterviewPreview() {
  const [area, setArea] = useState<InterviewArea>('architecture')

  return null
}
`

type InterviewArea = 'architecture' | 'state' | 'performance' | 'internals'

const areaNotes: Record<InterviewArea, string> = {
  architecture:
    'Senior interviews often test how you choose boundaries, not just whether you know APIs.',
  state:
    'You are expected to explain state ownership, derived state, and the difference between client and server state clearly.',
  performance:
    'Interviewers usually care more about how you diagnose bottlenecks than memorized optimization buzzwords.',
  internals:
    'Hook ordering, render vs commit, and Strict Mode behavior are common deeper React questions.',
}

export default function SeniorInterviewPreview(): JSX.Element {
  const [area, setArea] = useState<InterviewArea>('architecture')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(['architecture', 'state', 'performance', 'internals'] as InterviewArea[]).map(
          (option) => {
            const isActive = option === area

            return (
              <button
                key={option}
                type="button"
                onClick={() => setArea(option)}
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
          Interview lens
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {areaNotes[area]}
        </p>
      </div>
    </section>
  )
}
