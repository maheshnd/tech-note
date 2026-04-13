'use client'

import { useMemo, useState } from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Read the state categories', done: true },
  { id: 2, text: 'Identify shared state', done: false },
  { id: 3, text: 'Prefer derived values', done: false },
]

export const stateManagementPreviewSource = `'use client'

import { useMemo, useState } from 'react'

const initialTodos = [
  { id: 1, text: 'Read the state categories', done: true },
  { id: 2, text: 'Identify shared state', done: false },
]

export default function StateManagementPreview() {
  const [todos, setTodos] = useState(initialTodos)
  const [showCompleted, setShowCompleted] = useState(true)

  const visibleTodos = useMemo(() => {
    return showCompleted
      ? todos
      : todos.filter((todo) => !todo.done)
  }, [todos, showCompleted])

  return null
}
`

export default function StateManagementPreview(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [draft, setDraft] = useState('')
  const [showCompleted, setShowCompleted] = useState(true)

  const visibleTodos = useMemo(() => {
    return showCompleted ? todos : todos.filter((todo) => !todo.done)
  }, [todos, showCompleted])

  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.done).length
  }, [todos])

  function addTodo(): void {
    const value = draft.trim()

    if (!value) return

    setTodos((current) => [
      ...current,
      { id: Date.now(), text: value, done: false },
    ])
    setDraft('')
  }

  function toggleTodo(id: number): void {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          `todos` and `showCompleted` are stored state. `visibleTodos` and `completedCount` are derived from that state.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add a task"
          className="min-h-11 flex-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <button
          type="button"
          onClick={addTodo}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowCompleted((value) => !value)}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          {showCompleted ? 'Hide completed' : 'Show completed'}
        </button>
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Completed: {completedCount}
        </p>
      </div>

      <ul className="space-y-2">
        {visibleTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded-2xl border border-border bg-white px-4 py-3 dark:border-border-dark dark:bg-[#0d1621]"
          >
            <button
              type="button"
              onClick={() => toggleTodo(todo.id)}
              className="min-h-11 flex-1 text-left text-sm text-ink dark:text-ink-dark"
            >
              <span className={todo.done ? 'line-through opacity-60' : ''}>
                {todo.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
