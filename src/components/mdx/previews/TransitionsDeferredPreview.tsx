'use client'

import {
  startTransition,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from 'react'

const allPolicies = Array.from({ length: 400 }, (_, index) => ({
  id: index + 1,
  title: `Policy ${index + 1}`,
  status: index % 3 === 0 ? 'Pending review' : index % 2 === 0 ? 'Active' : 'Renewal due',
}))

export const transitionsDeferredPreviewSource = `'use client'

import {
  startTransition,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from 'react'

export default function TransitionsDeferredPreview() {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [isPending, runTransition] = useTransition()

  const filteredPolicies = useMemo(() => {
    return policies.filter((policy) =>
      policy.title.toLowerCase().includes(deferredQuery.toLowerCase()),
    )
  }, [deferredQuery])

  return null
}
`

export default function TransitionsDeferredPreview(): JSX.Element {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [isPending, runTransition] = useTransition()

  const filteredPolicies = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return allPolicies
    }

    return allPolicies.filter((policy) =>
      `${policy.title} ${policy.status}`.toLowerCase().includes(normalized),
    )
  }, [deferredQuery])

  function applyWithHookTransition(): void {
    runTransition(() => {
      setQuery(input)
    })
  }

  function applyWithStartTransition(): void {
    startTransition(() => {
      setQuery(input)
    })
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Typing updates the input immediately. Applying the query as a
          transition lets React treat the heavy list update as non-urgent, and
          <code>useDeferredValue</code> keeps the list one beat behind the latest
          text when needed.
        </p>
      </div>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search policies"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={applyWithHookTransition}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Apply with useTransition
        </button>
        <button
          type="button"
          onClick={applyWithStartTransition}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Apply with startTransition
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <p className="text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
            Render state
          </p>
          <p className="mt-3 text-sm text-ink dark:text-ink-dark">
            Input text: <span className="font-semibold">{input || 'empty'}</span>
          </p>
          <p className="mt-2 text-sm text-ink dark:text-ink-dark">
            Active query:{' '}
            <span className="font-semibold">{query || 'empty'}</span>
          </p>
          <p className="mt-2 text-sm text-ink dark:text-ink-dark">
            Deferred query:{' '}
            <span className="font-semibold">
              {deferredQuery || 'empty'}
            </span>
          </p>
          <p className="mt-3 text-sm text-ink-muted dark:text-ink-dark-muted">
            {isPending
              ? 'Transition pending...'
              : 'No transition is pending right now.'}
          </p>
        </aside>

        <div className="max-h-64 overflow-y-auto rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <ul className="space-y-2">
            {filteredPolicies.slice(0, 18).map((policy) => (
              <li
                key={policy.id}
                className="rounded-xl border border-border bg-panel px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
              >
                <span className="block font-semibold">{policy.title}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
                  {policy.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-muted dark:text-ink-dark-muted">
            Showing first 18 of {filteredPolicies.length} matches.
          </p>
        </div>
      </div>
    </section>
  )
}
