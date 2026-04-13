'use client'

import { useRef, useState } from 'react'

export const testingPreviewSource = `'use client'

import { useRef, useState } from 'react'

type TodoItem = {
  id: number
  title: string
}

export default function TestingPreview() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<TodoItem[]>([
    { id: 1, title: 'Write first test' },
  ])
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      setMessage('Please enter a task title before saving.')
      inputRef.current?.focus()
      return
    }

    setItems((currentItems) => [
      ...currentItems,
      { id: Date.now(), title: trimmedTitle },
    ])
    setTitle('')
    setMessage(\`Added "\${trimmedTitle}" to the list.\`)
    inputRef.current?.focus()
  }

  return null
}
`

type TodoItem = {
  id: number
  title: string
}

export default function TestingPreview(): JSX.Element {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<TodoItem[]>([
    { id: 1, title: 'Write first test' },
  ])
  const [message, setMessage] = useState('Ready for behavior-driven testing.')
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      setMessage('Please enter a task title before saving.')
      inputRef.current?.focus()
      return
    }

    setItems((currentItems) => [
      ...currentItems,
      { id: Date.now(), title: trimmedTitle },
    ])
    setTitle('')
    setMessage(`Added "${trimmedTitle}" to the list.`)
    inputRef.current?.focus()
  }

  return (
    <section className="space-y-4">
      <form
        onSubmit={handleSubmit}
        aria-label="Testing preview form"
        className="space-y-3 rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]"
      >
        <label className="block text-sm font-medium text-ink dark:text-ink-dark">
          Task title
          <input
            ref={inputRef}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add a test case"
            className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
          />
        </label>

        <button
          type="submit"
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Add task
        </button>
      </form>

      <p
        aria-live="polite"
        className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink-muted dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark-muted"
      >
        {message}
      </p>

      <section
        aria-labelledby="testing-preview-list-title"
        className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]"
      >
        <div className="flex items-center justify-between gap-3">
          <h3
            id="testing-preview-list-title"
            className="text-base font-semibold text-ink dark:text-ink-dark"
          >
            Todo list under test
          </h3>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
            {items.length} items
          </span>
        </div>

        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
