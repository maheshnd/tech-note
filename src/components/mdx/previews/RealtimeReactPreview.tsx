'use client'

import { useState } from 'react'

export const realtimeReactPreviewSource = `'use client'

import { useState } from 'react'

type Mode = 'polling' | 'sse' | 'websocket'

export default function RealtimeReactPreview() {
  const [mode, setMode] = useState<Mode>('polling')

  return null
}
`

type Mode = 'polling' | 'sse' | 'websocket'

const descriptions: Record<Mode, string> = {
  polling: 'The client asks for updates every few seconds. Simple, but can waste requests.',
  sse: 'The server pushes one-way updates down to the client over a single long-lived connection.',
  websocket:
    'Client and server keep a two-way connection open for low-latency interactive updates.',
}

export default function RealtimeReactPreview(): JSX.Element {
  const [mode, setMode] = useState<Mode>('polling')
  const [messages, setMessages] = useState<string[]>([
    'System: connection ready',
    'Agent: watching for new events',
  ])

  function pushMessage(): void {
    const nextMessage =
      mode === 'polling'
        ? 'Polling tick: fetched latest updates'
        : mode === 'sse'
          ? 'SSE event: server pushed a notification'
          : 'WebSocket event: instant bidirectional update'

    setMessages((currentMessages) => [...currentMessages, nextMessage])
  }

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {(['polling', 'sse', 'websocket'] as Mode[]).map((option) => {
          const isActive = option === mode

          return (
            <button
              key={option}
              type="button"
              onClick={() => setMode(option)}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                isActive
                  ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
              }`}
            >
              <p className="text-sm font-semibold uppercase">{option}</p>
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Active realtime strategy
        </p>
        <p className="mt-2 text-sm text-ink dark:text-ink-dark">
          {descriptions[mode]}
        </p>
      </div>

      <button
        type="button"
        onClick={pushMessage}
        className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
      >
        Simulate incoming update
      </button>

      <ul className="space-y-2">
        {messages.map((message, index) => (
          <li
            key={`${message}-${index}`}
            className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
          >
            {message}
          </li>
        ))}
      </ul>
    </section>
  )
}
