'use client'

import { useEffect, useState } from 'react'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  function toggle() {
    setValue((current) => !current)
  }

  function turnOn() {
    setValue(true)
  }

  function turnOff() {
    setValue(false)
  }

  return { value, toggle, turnOn, turnOff }
}

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value, delay])

  return debouncedValue
}

export const customHooksPreviewSource = `'use client'

import { useEffect, useState } from 'react'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    toggle() {
      setValue((current) => !current)
    },
  }
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}
`

export default function CustomHooksPreview(): JSX.Element {
  const modal = useToggle(false)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          These hooks extract reusable behavior. The component stays focused on UI.
        </p>
      </div>

      <div className="space-y-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type to debounce"
          className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Live query: {query || 'empty'}
        </p>
        <p className="text-sm font-semibold text-ink dark:text-ink-dark">
          Debounced query: {debouncedQuery || 'empty'}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={modal.toggle}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          {modal.value ? 'Hide' : 'Show'} panel
        </button>
        <button
          type="button"
          onClick={modal.turnOn}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Turn on
        </button>
        <button
          type="button"
          onClick={modal.turnOff}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Turn off
        </button>
      </div>

      {modal.value ? (
        <div className="rounded-2xl border border-border bg-white p-4 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark">
          This panel is controlled by a reusable <code>useToggle</code> hook.
        </div>
      ) : null}
    </section>
  )
}
