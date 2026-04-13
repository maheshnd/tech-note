'use client'

import { useState } from 'react'

const lessons = ['JSX expressions', 'Conditional rendering', 'List rendering']

export const jsxPreviewSource = `'use client'

import { useState } from 'react'

const lessons = ['JSX expressions', 'Conditional rendering', 'List rendering']

export default function JsxPreview() {
  const [name, setName] = useState('Mahesh')
  const hasName = name.trim().length > 0

  return (
    <section>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <h3>Hello, {hasName ? name : 'friend'}</h3>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson}>{lesson}</li>
        ))}
      </ul>
    </section>
  )
}
`

export default function JsxPreview(): JSX.Element {
  const [name, setName] = useState('Mahesh')
  const hasName = name.trim().length > 0

  return (
    <section className="space-y-4">
      <label className="block text-sm font-medium text-ink dark:text-ink-dark">
        Learner name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type a name"
          className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
      </label>
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">
          Hello, {hasName ? name : 'friend'}
        </h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
          JSX combines JavaScript expressions, conditions, and lists into one UI description.
        </p>
      </div>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li
            key={lesson}
            className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
          >
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  )
}
