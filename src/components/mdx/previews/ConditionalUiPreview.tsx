'use client'

import { useState } from 'react'

type ScreenState = 'idle' | 'loading' | 'error' | 'success'

const profiles = {
  idle: null,
  loading: null,
  error: null,
  success: {
    name: 'Mahesh',
    role: 'Frontend developer',
    bio: 'Builds learning apps with React and Next.js.',
  },
} as const

export const conditionalUiPreviewSource = `'use client'

import { useState } from 'react'

type ScreenState = 'idle' | 'loading' | 'error' | 'success'

export default function ConditionalUiPreview() {
  const [state, setState] = useState<ScreenState>('idle')

  if (state === 'idle') return <button>Load profile</button>
  if (state === 'loading') return <p>Loading profile...</p>
  if (state === 'error') return <p>Could not load profile.</p>

  return <p>Profile loaded.</p>
}
`

export default function ConditionalUiPreview(): JSX.Element {
  const [state, setState] = useState<ScreenState>('idle')

  function renderContent(): JSX.Element {
    if (state === 'idle') {
      return (
        <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
          Nothing is loaded yet. Choose a state to preview the UI.
        </div>
      )
    }

    if (state === 'loading') {
      return (
        <div className="space-y-3">
          <div className="h-5 w-32 animate-pulse rounded bg-border/70 dark:bg-border-dark" />
          <div className="h-4 w-full animate-pulse rounded bg-border/60 dark:bg-border-dark" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-border/60 dark:bg-border-dark" />
        </div>
      )
    }

    if (state === 'error') {
      return (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
          Could not load this profile. Try again.
        </div>
      )
    }

    const profile = profiles.success

    return (
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">{profile.name}</h3>
        <p className="mt-1 text-sm text-ink-muted dark:text-ink-dark-muted">{profile.role}</p>
        <p className="mt-3 text-sm text-ink dark:text-ink-dark">{profile.bio}</p>
      </div>
    )
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['idle', 'loading', 'error', 'success'] as ScreenState[]).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setState(value)}
            className={
              state === value
                ? 'min-h-11 rounded-2xl bg-accent px-4 py-2 text-sm font-semibold text-white dark:bg-accent-dark dark:text-slate-950'
                : 'min-h-11 rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-ink hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]'
            }
          >
            {value}
          </button>
        ))}
      </div>
      {renderContent()}
    </section>
  )
}
