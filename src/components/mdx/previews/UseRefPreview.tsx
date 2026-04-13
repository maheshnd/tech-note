'use client'

import { useRef, useState } from 'react'

export const useRefPreviewSource = `'use client'

import { useRef, useState } from 'react'

export default function UseRefPreview() {
  const inputRef = useRef(null)
  const [focusCount, setFocusCount] = useState(0)

  function handleFocusClick() {
    inputRef.current?.focus()
    setFocusCount((value) => value + 1)
  }

  return null
}
`

export default function UseRefPreview(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [focusCount, setFocusCount] = useState(0)

  function handleFocusClick(): void {
    inputRef.current?.focus()
    setFocusCount((value) => value + 1)
  }

  return (
    <section className="space-y-4">
      <input
        ref={inputRef}
        placeholder="Click the button to focus me"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />
      <button
        type="button"
        onClick={handleFocusClick}
        className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
      >
        Focus input with ref
      </button>
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        Focus button clicked: {focusCount} times
      </p>
    </section>
  )
}
