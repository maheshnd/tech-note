'use client'

import { useMemo, useState } from 'react'

export const stateLibrariesPreviewSource = `'use client'

import { useMemo, useState } from 'react'

type LibraryName = 'zustand' | 'redux-toolkit' | 'jotai'

type LibraryCard = {
  id: LibraryName
  title: string
  strength: string
}

export default function StateLibrariesPreview() {
  const [selectedLibrary, setSelectedLibrary] =
    useState<LibraryName>('zustand')
  const [serverCount, setServerCount] = useState(4)

  const cards = useMemo<LibraryCard[]>(
    () => [
      { id: 'zustand', title: 'Zustand', strength: 'Low boilerplate' },
      { id: 'redux-toolkit', title: 'Redux Toolkit', strength: 'Large-scale patterns' },
      { id: 'jotai', title: 'Jotai', strength: 'Atomic updates' },
    ],
    [],
  )

  return null
}
`

type LibraryName = 'zustand' | 'redux-toolkit' | 'jotai'

type LibraryCard = {
  id: LibraryName
  title: string
  strength: string
}

const libraryNotes: Record<LibraryName, string> = {
  zustand: 'Great when you want a simple store with minimal ceremony.',
  'redux-toolkit':
    'Best when a large team needs explicit actions, middleware, and DevTools.',
  jotai: 'Useful when fine-grained atomic state keeps updates very local.',
}

export default function StateLibrariesPreview(): JSX.Element {
  const [selectedLibrary, setSelectedLibrary] =
    useState<LibraryName>('zustand')
  const [serverCount, setServerCount] = useState(4)

  const cards = useMemo<LibraryCard[]>(
    () => [
      { id: 'zustand', title: 'Zustand', strength: 'Low boilerplate' },
      {
        id: 'redux-toolkit',
        title: 'Redux Toolkit',
        strength: 'Large-scale patterns',
      },
      { id: 'jotai', title: 'Jotai', strength: 'Atomic updates' },
    ],
    [],
  )

  function syncFromServer(): void {
    setServerCount((currentCount) => currentCount + 3)
  }

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((card) => {
          const isActive = card.id === selectedLibrary

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setSelectedLibrary(card.id)}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                isActive
                  ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
              }`}
            >
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="mt-1 text-xs text-ink-muted dark:text-ink-dark-muted">
                {card.strength}
              </p>
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-ink dark:text-ink-dark">
              Shared counter feature
            </h3>
            <p className="mt-1 text-sm text-ink-muted dark:text-ink-dark-muted">
              Same feature, different tradeoffs depending on the state library.
            </p>
          </div>
          <button
            type="button"
            onClick={syncFromServer}
            className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
          >
            Simulate async sync
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
            Active library
          </p>
          <p className="mt-2 text-lg font-semibold text-ink dark:text-ink-dark">
            {cards.find((card) => card.id === selectedLibrary)?.title}
          </p>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            {libraryNotes[selectedLibrary]}
          </p>
          <p className="mt-4 text-sm text-ink dark:text-ink-dark">
            Synced server count: <span className="font-semibold">{serverCount}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
