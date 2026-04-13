'use client'

import { useState } from 'react'

export const togglePreviewSource = `'use client'

import { useState } from 'react'

export default function TogglePreview() {
  const [open, setOpen] = useState(false)

  return (
    <section>
      <button onClick={() => setOpen((value) => !value)}>
        {open ? 'Hide' : 'Show'} details
      </button>
      {open ? <p>React makes it easy to switch UI on and off.</p> : null}
    </section>
  )
}
`

export default function TogglePreview(): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
      >
        {open ? 'Hide' : 'Show'} details
      </button>
      {open ? (
        <div className="rounded-2xl border border-border bg-panel p-4 text-sm text-ink-muted dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark-muted">
          React renders this panel only when the boolean state says it should exist.
        </div>
      ) : null}
    </section>
  )
}
