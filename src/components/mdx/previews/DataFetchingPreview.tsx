'use client'

import { useEffect, useRef, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

type Post = {
  id: number
  title: string
}

const initialPosts: Post[] = [
  { id: 1, title: 'React basics' },
  { id: 2, title: 'React Query concepts' },
]

export const dataFetchingPreviewSource = `'use client'

import { useEffect, useState } from 'react'

export default function DataFetchingPreview() {
  const [status, setStatus] = useState('loading')
  const [data, setData] = useState([])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setData([{ id: 1, title: 'React basics' }])
      setStatus('success')
    }, 700)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return null
}
`

export default function DataFetchingPreview(): JSX.Element {
  const [status, setStatus] = useState<Status>('idle')
  const [posts, setPosts] = useState<Post[]>([])
  const nextIdRef = useRef(3)

  function loadPosts(shouldFail = false): void {
    setStatus('loading')

    window.setTimeout(() => {
      if (shouldFail) {
        setStatus('error')
        return
      }

      setPosts(initialPosts)
      setStatus('success')
    }, 700)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  function addOptimisticPost(): void {
    const optimisticPost: Post = {
      id: nextIdRef.current,
      title: `Optimistic post ${nextIdRef.current}`,
    }

    nextIdRef.current += 1
    setPosts((current) => [optimisticPost, ...current])
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview simulates loading, error, refetching, and optimistic UI updates.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => loadPosts(false)}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Refetch success
        </button>
        <button
          type="button"
          onClick={() => loadPosts(true)}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Refetch error
        </button>
        <button
          type="button"
          onClick={addOptimisticPost}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Optimistic add
        </button>
      </div>

      {status === 'loading' ? (
        <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
          Loading posts...
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
          Could not load posts.
        </div>
      ) : null}

      {status === 'success' ? (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
            >
              {post.title}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
