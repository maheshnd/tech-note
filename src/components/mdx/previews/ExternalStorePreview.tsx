'use client'

import { useDebugValue, useSyncExternalStore } from 'react'

type StoreState = {
  count: number
}

let storeState: StoreState = {
  count: 2,
}

const listeners = new Set<() => void>()

function emitChange(): void {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot(): StoreState {
  return storeState
}

function getServerSnapshot(): StoreState {
  return {
    count: 2,
  }
}

function incrementStore(): void {
  storeState = {
    count: storeState.count + 1,
  }
  emitChange()
}

function resetStore(): void {
  storeState = {
    count: 0,
  }
  emitChange()
}

function useSharedCounter(): StoreState {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  useDebugValue(`shared-count:${snapshot.count}`)

  return snapshot
}

export const externalStorePreviewSource = `'use client'

import { useDebugValue, useSyncExternalStore } from 'react'

function useSharedCounter() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  useDebugValue(\`shared-count:\${snapshot.count}\`)

  return snapshot
}

export default function ExternalStorePreview() {
  const { count } = useSharedCounter()

  return <p>{count}</p>
}
`

function CounterCard({
  title,
  description,
}: {
  title: string
  description: string
}): JSX.Element {
  const { count } = useSharedCounter()

  return (
    <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
      <p className="text-sm font-semibold text-ink dark:text-ink-dark">
        {title}
      </p>
      <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
        {description}
      </p>
      <p className="mt-4 text-lg font-semibold text-ink dark:text-ink-dark">
        Shared count: {count}
      </p>
    </div>
  )
}

export default function ExternalStorePreview(): JSX.Element {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Two separate components subscribe to the same external store through
          <code>useSyncExternalStore</code>. The lesson explains why this hook is
          safer than ad hoc subscriptions and how React Compiler awareness
          changes the memoization conversation around code like this.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <CounterCard
          title="Toolbar badge"
          description="This could be a shared unread count in a shell component."
        />
        <CounterCard
          title="Sidebar summary"
          description="A second subscriber stays in sync from the same external source."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={incrementStore}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Increment shared store
        </button>
        <button
          type="button"
          onClick={resetStore}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Reset store
        </button>
      </div>
    </section>
  )
}
