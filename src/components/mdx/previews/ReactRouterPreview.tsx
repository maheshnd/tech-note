'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type RouteKey = '/' | '/dashboard' | '/users/42' | '/admin' | '/missing'

const navItems: Array<{ label: string; href: RouteKey }> = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'User 42', href: '/users/42' },
  { label: 'Admin', href: '/admin' },
  { label: 'Missing', href: '/missing' },
]

export const reactRouterPreviewSource = `'use client'

import { useState } from 'react'

export default function ReactRouterPreview() {
  const [path, setPath] = useState('/')

  return (
    <nav>
      <button onClick={() => setPath('/dashboard')}>Dashboard</button>
      <p>Current path: {path}</p>
    </nav>
  )
}
`

export default function ReactRouterPreview(): JSX.Element {
  const [path, setPath] = useState<RouteKey>('/')
  const [isAuthed, setIsAuthed] = useState(false)

  const routeContent = useMemo(() => {
    if (path === '/') {
      return {
        title: 'Home route',
        description: 'This is the default route.',
      }
    }

    if (path === '/dashboard') {
      return {
        title: 'Dashboard route',
        description: 'A nested layout route could render a shared sidebar and top bar here.',
      }
    }

    if (path === '/users/42') {
      return {
        title: 'User detail route',
        description: 'Route param id = 42',
      }
    }

    if (path === '/admin') {
      return isAuthed
        ? {
            title: 'Protected route',
            description: 'You are authenticated, so the protected content renders.',
          }
        : {
            title: 'Redirected to login',
            description: 'Protected routes redirect when the user is not authenticated.',
          }
    }

    return {
      title: '404 route',
      description: 'No route matched this path, so a not-found page would render.',
    }
  }, [isAuthed, path])

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview simulates client-side navigation, active links, route params, protected routes, and a 404 screen.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <button
            key={item.href}
            type="button"
            onClick={() => setPath(item.href)}
            className={cn(
              'min-h-11 rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors',
              path === item.href
                ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
                : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#1b2735]',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <label className="flex min-h-11 items-center gap-3 text-sm text-ink dark:text-ink-dark">
        <input
          type="checkbox"
          checked={isAuthed}
          onChange={(event) => setIsAuthed(event.target.checked)}
        />
        Authenticated
      </label>

      <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Current path
        </p>
        <p className="mt-2 text-sm font-semibold text-ink dark:text-ink-dark">{path}</p>
        <h3 className="mt-4 text-lg font-semibold text-ink dark:text-ink-dark">
          {routeContent.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
          {routeContent.description}
        </p>
      </div>
    </section>
  )
}
