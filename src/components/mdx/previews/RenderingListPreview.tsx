'use client'

import { useMemo, useState } from 'react'

const lessonTitles = [
  'Map over arrays',
  'Filter visible items',
  'Render empty states',
  'Show conditional badges',
]

export const renderingListPreviewSource = `'use client'

import { useMemo, useState } from 'react'

const lessonTitles = ['Map over arrays', 'Filter visible items', 'Render empty states']

export default function RenderingListPreview() {
  const [query, setQuery] = useState('')

  const filteredLessons = useMemo(() => {
    return lessonTitles.filter((lesson) =>
      lesson.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query])

  return null
}
`

export default function RenderingListPreview(): JSX.Element {
  const [query, setQuery] = useState('')

  const filteredLessons = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) return lessonTitles

    return lessonTitles.filter((lesson) =>
      lesson.toLowerCase().includes(normalized),
    )
  }, [query])

  return (
    <section className="space-y-4">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter lessons"
        className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
      />
      {filteredLessons.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
          No lessons match this filter.
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredLessons.map((lesson) => (
            <li
              key={lesson}
              className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
            >
              {lesson}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
