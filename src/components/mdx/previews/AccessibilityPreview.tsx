'use client'

import { useEffect, useRef, useState } from 'react'

export const accessibilityPreviewSource = `'use client'

import { useEffect, useRef, useState } from 'react'

export default function AccessibilityPreview() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus()
    }
  }, [open])

  return null
}
`

export default function AccessibilityPreview(): JSX.Element {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const resultsCount = query.trim() ? 3 : 0

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (!open) return

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <section className="space-y-4">
      <a
        href="#preview-main-content"
        className="inline-flex min-h-11 items-center rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-ink underline-offset-4 hover:underline dark:border-border-dark dark:text-ink-dark"
      >
        Skip to preview content
      </a>

      <label className="block text-sm font-medium text-ink dark:text-ink-dark">
        Search lessons
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby="search-results-live"
          className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
      </label>

      <p
        id="search-results-live"
        aria-live="polite"
        className="text-sm text-ink-muted dark:text-ink-dark-muted"
      >
        {resultsCount === 0
          ? 'No search results yet.'
          : `${resultsCount} results found for ${query}.`}
      </p>

      <main
        id="preview-main-content"
        className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Open accessible modal
        </button>
      </main>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-modal-title"
          className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]"
        >
          <h3
            id="preview-modal-title"
            className="text-lg font-semibold text-ink dark:text-ink-dark"
          >
            Accessible modal preview
          </h3>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            Focus moves into the modal when it opens, and Escape closes it.
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
          >
            Close modal
          </button>
        </div>
      ) : null}
    </section>
  )
}
