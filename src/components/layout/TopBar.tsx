'use client'

import { useEffect, useState } from 'react'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import { openSidebarDrawer } from '@/lib/layout-events'
import { PROGRESS_UPDATED_EVENT, getProgress } from '@/lib/progress'
import { allTracks } from '@/lib/topics'
import type { Topic, Track } from '@/types'

interface TopBarProps {
  track: Track
  topic: Topic | null
}

export default function TopBar({ track, topic }: TopBarProps): JSX.Element {
  const [progress, setProgress] = useState(() => getProgress(track, allTracks[track]))

  useEffect(() => {
    setProgress(getProgress(track, allTracks[track]))

    function syncProgress(): void {
      setProgress(getProgress(track, allTracks[track]))
    }

    window.addEventListener(PROGRESS_UPDATED_EVENT, syncProgress)
    window.addEventListener('storage', syncProgress)

    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, syncProgress)
      window.removeEventListener('storage', syncProgress)
    }
  }, [track])

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/85 backdrop-blur dark:border-border-dark dark:bg-[#101823]/85">
      <div className="grid h-16 grid-cols-[auto,1fr,auto] items-center gap-3 px-4 md:px-6">
        <button
          type="button"
          onClick={openSidebarDrawer}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-2xl border border-border text-xl text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-panel-dark md:hidden"
          aria-label="Open sidebar"
        >
          ☰
        </button>

        <div className="min-w-0">
          <p className="truncate font-display text-lg text-ink dark:text-ink-dark">
            {topic?.title ?? 'Topic unavailable'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {topic ? (
            <>
              <Badge level={topic.level} className="hidden sm:inline-flex" />
              <span className="text-sm font-medium text-ink-muted dark:text-ink-dark-muted">
                {topic.minutes}m
              </span>
            </>
          ) : null}
        </div>
      </div>

      <ProgressBar
        className="h-px rounded-none bg-border/70 dark:bg-border-dark md:hidden"
        indicatorClassName="bg-accent dark:bg-accent-dark"
        value={progress}
      />
    </header>
  )
}
