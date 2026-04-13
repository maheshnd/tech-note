'use client'

import { useState } from 'react'

export const eventsPreviewSource = `'use client'

import { useState } from 'react'

export default function EventsPreview() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('No submission yet')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(\`Submitted: \${name || 'Anonymous'}\`)
  }

  return null
}
`

export default function EventsPreview(): JSX.Element {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('No submission yet')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    setMessage(`Submitted: ${name || 'Anonymous'}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Submit event
        </button>
        <button
          type="button"
          onClick={() => setMessage('Quick click handler fired')}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Fire click event
        </button>
      </div>
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">{message}</p>
    </form>
  )
}
