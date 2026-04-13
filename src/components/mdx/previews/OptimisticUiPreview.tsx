'use client'

import { useMemo, useState } from 'react'

type TodoItem = {
  id: number
  text: string
  pending?: boolean
}

const initialItems: TodoItem[] = [
  { id: 1, text: 'Review renewal reminder copy' },
  { id: 2, text: 'Approve policy document changes' },
]

export const optimisticUiPreviewSource = `'use client'

import { useState } from 'react'

export default function OptimisticUiPreview() {
  const [items, setItems] = useState([
    { id: 1, text: 'Review renewal reminder copy' },
  ])

  return null
}
`

export default function OptimisticUiPreview(): JSX.Element {
  const [items, setItems] = useState<TodoItem[]>(initialItems)
  const [draft, setDraft] = useState('')
  const [mode, setMode] = useState<'success' | 'failure'>('success')
  const [message, setMessage] = useState('')

  const pendingCount = useMemo(
    () => items.filter((item) => item.pending).length,
    [items],
  )

  async function addOptimistically(): Promise<void> {
    const trimmed = draft.trim()

    if (!trimmed) {
      setMessage('Enter a task before adding it.')
      return
    }

    const optimisticId = Date.now()

    const optimisticItem: TodoItem = {
      id: optimisticId,
      text: trimmed,
      pending: true,
    }

    setItems((current) => [optimisticItem, ...current])
    setDraft('')
    setMessage('Added optimistically. Waiting for confirmation...')

    await new Promise((resolve) => setTimeout(resolve, 700))

    if (mode === 'failure') {
      setItems((current) =>
        current.filter((item) => item.id !== optimisticId),
      )
      setMessage('Server rejected the change, so the optimistic item was rolled back.')
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === optimisticId ? { ...item, pending: false } : item,
      ),
    )
    setMessage('Server confirmed the optimistic change.')
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Add a task and decide whether the simulated server should confirm it
          or reject it. The new row appears immediately, then either settles or
          rolls back.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add a task optimistically"
          className="min-h-11 flex-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <button
          type="button"
          onClick={addOptimistically}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Add optimistic task
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setMode('success')}
          className={`min-h-11 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
            mode === 'success'
              ? 'border-success bg-success-soft text-success dark:border-success-dark/30 dark:bg-success-dark/10 dark:text-success-dark'
              : 'border-border bg-white text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark'
          }`}
        >
          Next request succeeds
        </button>
        <button
          type="button"
          onClick={() => setMode('failure')}
          className={`min-h-11 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
            mode === 'failure'
              ? 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-200'
              : 'border-border bg-white text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark'
          }`}
        >
          Next request fails
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <p className="text-sm text-ink dark:text-ink-dark">
          Pending optimistic rows: <span className="font-semibold">{pendingCount}</span>
        </p>
        {message ? (
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            {message}
          </p>
        ) : null}
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`rounded-2xl border px-4 py-3 text-sm ${
              item.pending
                ? 'border-accent/40 bg-accent/10 text-ink dark:border-accent-dark/40 dark:bg-accent-dark/15 dark:text-ink-dark'
                : 'border-border bg-white text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark'
            }`}
          >
            <span className="block font-medium">{item.text}</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
              {item.pending ? 'Pending confirmation' : 'Confirmed'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
