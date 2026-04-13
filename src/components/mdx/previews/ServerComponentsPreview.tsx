'use client'

import { useState } from 'react'

export const serverComponentsPreviewSource = `'use client'

import { useState } from 'react'

type RenderMode = 'ssg' | 'ssr' | 'isr' | 'csr'

export default function ServerComponentsPreview() {
  const [mode, setMode] = useState<RenderMode>('ssr')
  const [likes, setLikes] = useState(24)

  return null
}
`

type RenderMode = 'ssg' | 'ssr' | 'isr' | 'csr'

type ModeMeta = {
  title: string
  serverOutput: string
  hydrationNote: string
}

const modeMeta: Record<RenderMode, ModeMeta> = {
  ssg: {
    title: 'SSG',
    serverOutput: 'HTML is generated at build time and served quickly from static output.',
    hydrationNote: 'The browser hydrates interactive client islands after the static HTML arrives.',
  },
  ssr: {
    title: 'SSR',
    serverOutput: 'HTML is generated on the server for each request with current data.',
    hydrationNote: 'Hydration attaches event handlers so client widgets become interactive.',
  },
  isr: {
    title: 'ISR',
    serverOutput: 'A cached page is reused until the revalidation window expires, then rebuilt in the background.',
    hydrationNote: 'Users get fast HTML now and fresher HTML after revalidation happens.',
  },
  csr: {
    title: 'CSR',
    serverOutput: 'The server sends a lightweight shell and the browser builds the UI after JavaScript loads.',
    hydrationNote: 'There is little or no useful server HTML to hydrate because most rendering happens in the browser.',
  },
}

const modeOrder: RenderMode[] = ['ssg', 'ssr', 'isr', 'csr']

export default function ServerComponentsPreview(): JSX.Element {
  const [mode, setMode] = useState<RenderMode>('ssr')
  const [likes, setLikes] = useState(24)

  const activeMode = modeMeta[mode]

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-4">
        {modeOrder.map((modeOption) => {
          const isActive = modeOption === mode

          return (
            <button
              key={modeOption}
              type="button"
              onClick={() => setMode(modeOption)}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
              }`}
            >
              {modeMeta[modeOption].title}
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Server prepares
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {activeMode.serverOutput}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Hydration and client work
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {activeMode.hydrationNote}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-ink dark:text-ink-dark">
              Client widget inside the page
            </h3>
            <p className="mt-1 text-sm text-ink-muted dark:text-ink-dark-muted">
              This part represents a Client Component that hydrates and handles interaction.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLikes((currentLikes) => currentLikes + 1)}
            className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
          >
            Like {likes}
          </button>
        </div>
      </div>
    </section>
  )
}
