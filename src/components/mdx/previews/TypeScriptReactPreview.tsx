'use client'

import { useMemo, useState } from 'react'

export const typeScriptReactPreviewSource = `'use client'

import { useMemo, useState } from 'react'

type BadgeVariant = 'primary' | 'danger'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
}

type Lesson = {
  id: number
  title: string
  level: 'beginner' | 'intermediate'
}

function Badge({ label, variant = 'primary' }: BadgeProps) {
  return <span>{label} - {variant}</span>
}

function LessonList<T extends { id: number; title: string }>({
  items,
}: {
  items: T[]
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default function TypeScriptReactPreview() {
  const [query, setQuery] = useState('')

  const lessons = useMemo<Lesson[]>(
    () => [
      { id: 1, title: 'Type props safely', level: 'beginner' },
      { id: 2, title: 'Use discriminated unions', level: 'intermediate' },
    ],
    [],
  )

  return null
}
`

type BadgeVariant = 'primary' | 'danger'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
}

type Lesson = {
  id: number
  title: string
  level: 'beginner' | 'intermediate'
}

function Badge({ label, variant = 'primary' }: BadgeProps): JSX.Element {
  const toneClassName =
    variant === 'danger'
      ? 'border-red-300 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200'
      : 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200'

  return (
    <span
      className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold ${toneClassName}`}
    >
      {label}
    </span>
  )
}

function LessonList<T extends { id: number; title: string }>({
  items,
}: {
  items: T[]
}): JSX.Element {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default function TypeScriptReactPreview(): JSX.Element {
  const [query, setQuery] = useState('')

  const lessons = useMemo<Lesson[]>(
    () => [
      { id: 1, title: 'Type props safely', level: 'beginner' },
      { id: 2, title: 'Use discriminated unions', level: 'intermediate' },
      { id: 3, title: 'Type events and forms', level: 'beginner' },
    ],
    [],
  )

  const filteredLessons = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase()

    if (!trimmedQuery) {
      return lessons
    }

    return lessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(trimmedQuery),
    )
  }, [lessons, query])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(event.target.value)
  }

  const statusVariant: BadgeVariant =
    filteredLessons.length === 0 ? 'danger' : 'primary'

  return (
    <section className="space-y-4">
      <label className="block text-sm font-medium text-ink dark:text-ink-dark">
        Search typed lessons
        <input
          value={query}
          onChange={handleChange}
          placeholder="Try: props"
          className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Badge
          label={
            filteredLessons.length === 0
              ? 'No typed matches'
              : `${filteredLessons.length} typed results`
          }
          variant={statusVariant}
        />
        <span className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Props, events, and generics all have explicit types here.
        </span>
      </div>

      <LessonList items={filteredLessons} />
    </section>
  )
}
