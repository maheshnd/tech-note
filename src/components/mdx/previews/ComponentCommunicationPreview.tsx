'use client'

import { useMemo, useState } from 'react'

const teamMembers = ['Jayashri', 'Mahesh', 'Nina', 'Ravi']

function SearchInput({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (value: string) => void
}): JSX.Element {
  return (
    <input
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
      placeholder="Search names"
      className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
    />
  )
}

function Results({
  items,
}: {
  items: string[]
}): JSX.Element {
  if (items.length === 0) {
    return (
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        No matching names.
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-border bg-panel px-3 py-2 text-sm text-ink dark:border-border-dark dark:bg-[#101a26] dark:text-ink-dark"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export const componentCommunicationPreviewSource = `'use client'

import { useMemo, useState } from 'react'

const teamMembers = ['Jayashri', 'Mahesh', 'Nina', 'Ravi']

export default function ComponentCommunicationPreview() {
  const [query, setQuery] = useState('')

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) =>
      member.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query])

  return null
}
`

export default function ComponentCommunicationPreview(): JSX.Element {
  const [query, setQuery] = useState('')

  const filteredMembers = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) return teamMembers

    return teamMembers.filter((member) =>
      member.toLowerCase().includes(normalized),
    )
  }, [query])

  return (
    <section className="space-y-4">
      <SearchInput query={query} onQueryChange={setQuery} />
      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <p className="mb-3 text-sm text-ink-muted dark:text-ink-dark-muted">
          The parent owns `query`, the input changes it, and the results sibling reads it.
        </p>
        <Results items={filteredMembers} />
      </div>
    </section>
  )
}
