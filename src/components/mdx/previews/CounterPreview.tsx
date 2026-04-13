'use client'

import { useState } from 'react'

export const counterPreviewSource = `'use client'

import { useState } from 'react'

export default function CounterPreview() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">Current count: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount((value) => value - 1)}>Decrease</button>
        <button onClick={() => setCount((value) => value + 1)}>Increase</button>
      </div>
    </div>
  )
}
`

export default function CounterPreview(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        Current count: <span className="font-semibold text-ink dark:text-ink-dark">{count}</span>
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value - 1)}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Increase
        </button>
      </div>
    </div>
  )
}
