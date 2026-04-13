'use client'

import { useState } from 'react'

interface TodoItem {
  id: number
  text: string
  done: boolean
}

const initialTodos: TodoItem[] = [
  { id: 1, text: 'Read the explanation', done: true },
  { id: 2, text: 'Try the example', done: false },
]

export const todoListPreviewSource = `'use client'

import { useState } from 'react'

const initialTodos = [
  { id: 1, text: 'Read the explanation', done: true },
  { id: 2, text: 'Try the example', done: false },
]

export default function TodoListPreview() {
  const [todos, setTodos] = useState(initialTodos)
  const [draft, setDraft] = useState('')

  function addTodo() {
    if (!draft.trim()) return

    setTodos((items) => [
      ...items,
      { id: Date.now(), text: draft.trim(), done: false },
    ])
    setDraft('')
  }

  return null
}
`

export default function TodoListPreview(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)
  const [draft, setDraft] = useState('')

  function addTodo(): void {
    const value = draft.trim()

    if (!value) return

    setTodos((items) => [
      ...items,
      { id: Date.now(), text: value, done: false },
    ])
    setDraft('')
  }

  function toggleTodo(id: number): void {
    setTodos((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )
  }

  function removeTodo(id: number): void {
    setTodos((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-4">
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

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between rounded-2xl border border-border bg-panel px-4 py-3 dark:border-border-dark dark:bg-[#101a26]"
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
            <button
              type="button"
              onClick={() => removeTodo(todo.id)}
              className="min-h-11 rounded-xl px-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-500/10"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
