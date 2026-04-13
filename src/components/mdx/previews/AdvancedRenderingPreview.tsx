'use client'

import { Suspense, lazy, useDeferredValue, useMemo, useState, useTransition } from 'react'

const DeferredResults = lazy(async () => ({
  default: function DeferredResults({
    items,
  }: {
    items: string[]
  }): JSX.Element {
    return (
      <ul className="space-y-2">
        {items.slice(0, 12).map((item) => (
          <li
            key={item}
            className="rounded-xl border border-border bg-white px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
          >
            {item}
          </li>
        ))}
      </ul>
    )
  },
}))

const allResults = Array.from({ length: 300 }, (_, index) => `Result ${index + 1}`)

export const advancedRenderingPreviewSource = `'use client'

import { Suspense, lazy, useDeferredValue, useMemo, useState, useTransition } from 'react'

export default function AdvancedRenderingPreview() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [isPending, startTransition] = useTransition()

  const results = useMemo(() => {
    return Array.from({ length: 300 }, (_, index) => \`Result \${index + 1}\`).filter(
      (item) => item.toLowerCase().includes(deferredQuery.toLowerCase()),
    )
  }, [deferredQuery])

  return null
}
`

export default function AdvancedRenderingPreview(): JSX.Element {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()
  const deferredQuery = useDeferredValue(query)

  const filteredResults = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return allResults
    }

    return allResults.filter((item) =>
      item.toLowerCase().includes(normalized),
    )
  }, [deferredQuery])

  function updateBothCounts(): void {
    setCount((current) => current + 1)
    setCount((current) => current + 1)
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview combines batching, `useTransition`, `useDeferredValue`, and `Suspense` in one focused UI.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={updateBothCounts}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Batched count: {count}
        </button>
        <button
          type="button"
          onClick={() =>
            startTransition(() => {
              setQuery(input)
            })
          }
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Apply transition
        </button>
      </div>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Type a query, then apply transition"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />

      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        {isPending ? 'Transition pending...' : `Deferred query: ${deferredQuery || 'none'}`}
      </p>

      <Suspense
        fallback={
          <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
            Loading deferred results...
          </div>
        }
      >
        <DeferredResults items={filteredResults} />
      </Suspense>
    </section>
  )
}
