'use client'

import { useState } from 'react'

export const controlledInputPreviewSource = `'use client'

import { useState } from 'react'

export default function ControlledInputPreview() {
  const [name, setName] = useState('')

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>Hello, {name || 'friend'}.</p>
    </div>
  )
}
`

export default function ControlledInputPreview(): JSX.Element {
  const [name, setName] = useState('')

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-ink dark:text-ink-dark">
        Your name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type here"
          className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
      </label>
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        Hello, <span className="font-semibold text-ink dark:text-ink-dark">{name || 'friend'}</span>.
      </p>
    </div>
  )
}
