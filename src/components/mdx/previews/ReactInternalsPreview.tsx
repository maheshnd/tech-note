'use client'

import { useEffect, useState } from 'react'

export const reactInternalsPreviewSource = `'use client'

import { useEffect, useState } from 'react'

export default function ReactInternalsPreview() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Effect ran')
  }, [count])

  return null
}
`

export default function ReactInternalsPreview(): JSX.Element {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([
    'Render phase: component function ran',
  ])

  useEffect(() => {
    setLogs((currentLogs) => [
      ...currentLogs,
      `Commit phase: effect ran for count ${count}`,
    ])
  }, [count])

  function triggerUpdate(): void {
    setLogs((currentLogs) => [
      ...currentLogs,
      'Render scheduled: state update requested',
    ])
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink dark:text-ink-dark">
          Count state slot: <span className="font-semibold">{count}</span>
        </p>
        <button
          type="button"
          onClick={triggerUpdate}
          className="mt-3 min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Trigger rerender
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <h3 className="text-base font-semibold text-ink dark:text-ink-dark">
          Render and commit log
        </h3>
        <ul className="mt-3 space-y-2">
          {logs.slice(-5).map((log, index) => (
            <li
              key={`${log}-${index}`}
              className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
            >
              {log}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
