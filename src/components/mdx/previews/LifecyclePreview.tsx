'use client'

import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

function Logger({
  count,
  setLogs,
}: {
  count: number
  setLogs: Dispatch<SetStateAction<string[]>>
}): JSX.Element {
  useEffect(() => {
    setLogs((current) => ['Mounted child', ...current].slice(0, 6))

    return () => {
      setLogs((current) => ['Unmounted child', ...current].slice(0, 6))
    }
  }, [setLogs])

  useEffect(() => {
    setLogs((current) => [`Updated count to ${count}`, ...current].slice(0, 6))
  }, [count, setLogs])

  return <p className="text-sm text-ink-muted dark:text-ink-dark-muted">Child count: {count}</p>
}

export const lifecyclePreviewSource = `'use client'

import { useEffect, useState } from 'react'

function Logger({ count, onLog }) {
  useEffect(() => {
    onLog('Mounted child')

    return () => onLog('Unmounted child')
  }, [onLog])

  useEffect(() => {
    onLog(\`Updated count to \${count}\`)
  }, [count, onLog])

  return <p>Child count: {count}</p>
}
`

export default function LifecyclePreview(): JSX.Element {
  const [count, setCount] = useState(0)
  const [showChild, setShowChild] = useState(true)
  const [logs, setLogs] = useState<string[]>([])

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Update count
        </button>
        <button
          type="button"
          onClick={() => setShowChild((value) => !value)}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          {showChild ? 'Unmount child' : 'Mount child'}
        </button>
      </div>
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        {showChild ? <Logger count={count} setLogs={setLogs} /> : <p className="text-sm text-ink-muted dark:text-ink-dark-muted">Child removed</p>}
      </div>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <p
            key={`${log}-${index}`}
            className="rounded-xl border border-border bg-white px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
          >
            {log}
          </p>
        ))}
      </div>
    </section>
  )
}
