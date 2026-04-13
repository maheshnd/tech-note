'use client'

import { memo, useDeferredValue, useMemo, useState } from 'react'

const allItems = Array.from({ length: 250 }, (_, index) => `Item ${index + 1}`)

interface StatsPanelProps {
  itemCount: number
}

const StatsPanel = memo(function StatsPanel({
  itemCount,
}: StatsPanelProps): JSX.Element {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
      <p className="text-sm font-semibold text-ink dark:text-ink-dark">
        Visible items: {itemCount}
      </p>
      <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
        This child is memoized, so it only re-renders when `itemCount` changes.
      </p>
    </div>
  )
})

export const performancePreviewSource = `'use client'

import { memo, useDeferredValue, useMemo, useState } from 'react'

const StatsPanel = memo(function StatsPanel({ itemCount }) {
  return <p>Visible items: {itemCount}</p>
})

export default function PerformancePreview() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredItems = useMemo(() => {
    return Array.from({ length: 250 }, (_, index) => \`Item \${index + 1}\`).filter(
      (item) => item.toLowerCase().includes(deferredQuery.toLowerCase()),
    )
  }, [deferredQuery])

  return null
}
`

export default function PerformancePreview(): JSX.Element {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredItems = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return allItems
    }

    return allItems.filter((item) =>
      item.toLowerCase().includes(normalized),
    )
  }, [deferredQuery])

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          `useDeferredValue` keeps typing responsive while a large filtered list updates slightly later.
        </p>
      </div>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter a large list"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />

      <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <StatsPanel itemCount={filteredItems.length} />
        <div className="max-h-56 overflow-y-auto rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <ul className="space-y-2">
            {filteredItems.slice(0, 20).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-panel px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
              >
                {item}
              </li>
            ))}
          </ul>
          {filteredItems.length > 20 ? (
            <p className="mt-3 text-sm text-ink-muted dark:text-ink-dark-muted">
              Showing first 20 of {filteredItems.length} items.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
