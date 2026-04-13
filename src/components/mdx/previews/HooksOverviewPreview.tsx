'use client'

import { useEffect, useRef, useState } from 'react'

export const hooksOverviewPreviewSource = `'use client'

import { useEffect, useRef, useState } from 'react'

export default function HooksOverviewPreview() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    document.title = \`Count: \${count}\`
  }, [count])

  return null
}
`

export default function HooksOverviewPreview(): JSX.Element {
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [titleMessage, setTitleMessage] = useState('Count: 0')

  useEffect(() => {
    const nextTitle = `Count: ${count}`
    setTitleMessage(nextTitle)
  }, [count])

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          `useState` stores the count, `useEffect` reacts to count changes, and `useRef` can focus the input.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Increase: {count}
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Focus input
        </button>
      </div>
      <input
        ref={inputRef}
        placeholder="Focused by a ref"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        Effect output: {titleMessage}
      </p>
    </section>
  )
}
