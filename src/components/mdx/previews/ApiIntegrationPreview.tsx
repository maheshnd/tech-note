'use client'

import { useMemo, useState } from 'react'

export const apiIntegrationPreviewSource = `'use client'

import { useMemo, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ApiIntegrationPreview() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  return null
}
`

type Status = 'idle' | 'loading' | 'success' | 'error'

type SearchResult = {
  id: number
  title: string
}

const allResults: SearchResult[] = [
  { id: 1, title: 'Debounced search request' },
  { id: 2, title: 'Abort stale request safely' },
  { id: 3, title: 'Normalize API errors' },
]

export default function ApiIntegrationPreview(): JSX.Element {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const filteredResults = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase()

    if (!trimmedQuery) {
      return allResults
    }

    return allResults.filter((result) =>
      result.title.toLowerCase().includes(trimmedQuery),
    )
  }, [query])

  function runRequest(): void {
    setStatus('loading')
    setErrorMessage('')

    window.setTimeout(() => {
      if (query.trim().toLowerCase() === 'fail') {
        setStatus('error')
        setErrorMessage('Normalized API error: request failed after retry.')
        return
      }

      setStatus('success')
    }, 500)
  }

  return (
    <section className="space-y-4">
      <label className="block text-sm font-medium text-ink dark:text-ink-dark">
        Search API examples
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: search or fail"
          className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
      </label>

      <button
        type="button"
        onClick={runRequest}
        className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
      >
        Run typed request
      </button>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Request status
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {status === 'idle' && 'Idle — ready to call the API client.'}
          {status === 'loading' && 'Loading — imagine a debounced request with an AbortController.'}
          {status === 'success' && 'Success — typed results returned in a normalized shape.'}
          {status === 'error' && errorMessage}
        </p>
      </div>

      <ul className="space-y-2">
        {filteredResults.map((result) => (
          <li
            key={result.id}
            className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
          >
            {result.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
