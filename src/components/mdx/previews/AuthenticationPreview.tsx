'use client'

import { useState } from 'react'

export const authenticationPreviewSource = `'use client'

import { useState } from 'react'

type Role = 'guest' | 'user' | 'admin'

export default function AuthenticationPreview() {
  const [role, setRole] = useState<Role>('guest')

  return null
}
`

type Role = 'guest' | 'user' | 'admin'

const roleLabels: Record<Role, string> = {
  guest: 'Guest session',
  user: 'Signed-in user',
  admin: 'Administrator',
}

export default function AuthenticationPreview(): JSX.Element {
  const [role, setRole] = useState<Role>('guest')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {(['guest', 'user', 'admin'] as Role[]).map((option) => {
          const isActive = option === role

          return (
            <button
              key={option}
              type="button"
              onClick={() => setRole(option)}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                isActive
                  ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
              }`}
            >
              <p className="text-sm font-semibold">{roleLabels[option]}</p>
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Visible auth state
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {role === 'guest' &&
            'Protected data stays hidden. The UI can show a sign-in call to action.'}
          {role === 'user' &&
            'The user sees their dashboard and account actions, but not admin controls.'}
          {role === 'admin' &&
            'The admin sees elevated tools, but only because the server would verify the role first.'}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <h3 className="text-base font-semibold text-ink dark:text-ink-dark">
          Protected panel
        </h3>
        <div className="mt-3 space-y-2 text-sm text-ink dark:text-ink-dark">
          {role === 'guest' ? (
            <p>Please sign in to view account data.</p>
          ) : (
            <p>Billing history and profile settings are available.</p>
          )}

          {role === 'admin' ? (
            <p className="font-semibold text-red-700 dark:text-red-300">
              Admin-only controls are visible.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
