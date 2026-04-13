'use client'

import { useState } from 'react'

export const errorHandlingPreviewSource = `'use client'

import { useState } from 'react'

export default function ErrorHandlingPreview() {
  const [status, setStatus] = useState('idle')

  return (
    <section>
      <button onClick={() => setStatus('loading')}>Retry</button>
      <p>Status: {status}</p>
    </section>
  )
}
`

export default function ErrorHandlingPreview(): JSX.Element {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')
  const [syncCrash, setSyncCrash] = useState(false)
  const [message, setMessage] = useState('')

  if (syncCrash) {
    throw new Error('Widget crashed during render')
  }

  async function simulateAsyncFailure(): Promise<void> {
    setStatus('loading')
    setMessage('')

    await new Promise((resolve) => {
      window.setTimeout(resolve, 500)
    })

    try {
      throw new Error('Request failed while loading data')
    } catch (error) {
      setStatus('error')
      setMessage((error as Error).message)
    }
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview shows the difference between an async handled error and a render-time crash that would need an error boundary.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => void simulateAsyncFailure()}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Trigger async error
        </button>
        <button
          type="button"
          onClick={() => setSyncCrash(true)}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Trigger render crash
        </button>
        <button
          type="button"
          onClick={() => {
            setStatus('idle')
            setMessage('')
            setSyncCrash(false)
          }}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Reset
        </button>
      </div>

      {status === 'loading' ? (
        <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
          Loading...
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
          Async error handled locally: {message}
        </div>
      ) : null}

      {status === 'idle' ? (
        <div className="rounded-2xl border border-border bg-white p-4 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark">
          Idle state. Use reset after a crash to recover.
        </div>
      ) : null}
    </section>
  )
}
