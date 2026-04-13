'use client'

import { Suspense, lazy, useState } from 'react'

const LazyClaimsPanel = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 450))

  return {
    default: function LazyClaimsPanel(): JSX.Element {
      return (
        <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <h4 className="text-sm font-semibold text-ink dark:text-ink-dark">
            Claims summary loaded
          </h4>
          <ul className="mt-3 space-y-2">
            {['Open claims', 'Escalated reviews', 'Approved payouts'].map(
              (item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-panel px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      )
    },
  }
})

const LazyInsightsPanel = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    default: function LazyInsightsPanel(): JSX.Element {
      return (
        <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <h4 className="text-sm font-semibold text-ink dark:text-ink-dark">
            Insights panel loaded
          </h4>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            A slower section can have its own nested fallback instead of blocking
            the rest of the UI.
          </p>
        </div>
      )
    },
  }
})

export const suspenseLazyPreviewSource = `'use client'

import { Suspense, lazy, useState } from 'react'

const LazyClaimsPanel = lazy(() => import('./ClaimsPanel'))

export default function SuspenseLazyPreview() {
  const [showPanel, setShowPanel] = useState(false)

  return (
    <Suspense fallback={<p>Loading panel...</p>}>
      {showPanel ? <LazyClaimsPanel /> : null}
    </Suspense>
  )
}
`

export default function SuspenseLazyPreview(): JSX.Element {
  const [showPanels, setShowPanels] = useState(false)

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview focuses on <code>lazy()</code> and nested{' '}
          <code>Suspense</code> boundaries. The top boundary reveals the main
          panel first, while the nested boundary lets a slower section continue
          loading independently.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowPanels((value) => !value)}
        className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
      >
        {showPanels ? 'Hide lazy panels' : 'Load lazy panels'}
      </button>

      {showPanels ? (
        <Suspense
          fallback={
            <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
              Loading claims panel...
            </div>
          }
        >
          <LazyClaimsPanel />

          <Suspense
            fallback={
              <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
                Loading deeper insights...
              </div>
            }
          >
            <LazyInsightsPanel />
          </Suspense>
        </Suspense>
      ) : (
        <div className="rounded-2xl border border-border bg-white p-4 text-sm text-ink-muted dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark-muted">
          Panels are idle until the user asks for them.
        </div>
      )}
    </section>
  )
}
