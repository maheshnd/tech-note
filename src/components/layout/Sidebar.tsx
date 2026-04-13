'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import CheckIcon from '@/components/ui/CheckIcon'
import ProgressBar from '@/components/ui/ProgressBar'
import { SIDEBAR_CLOSE_EVENT, SIDEBAR_OPEN_EVENT, closeSidebarDrawer } from '@/lib/layout-events'
import { PROGRESS_UPDATED_EVENT, getDoneCount, getLastVisited, getProgress, isDone } from '@/lib/progress'
import {
  allTracks,
  defaultTopicByTrack,
  isTrack,
  trackLabels,
  trackOrder,
} from '@/lib/topics'
import type { Topic, Track } from '@/types'
import { cn } from '@/lib/utils'

interface ProgressSnapshot {
  doneCount: number
  percentage: number
  doneSlugs: Set<string>
}

function getPathState(pathname: string): { track: Track; slug: string | null } {
  const [trackSegment, slugSegment] = pathname.split('/').filter(Boolean)
  const track = isTrack(trackSegment) ? trackSegment : 'react'

  return {
    track,
    slug: slugSegment ?? defaultTopicByTrack[track],
  }
}

function groupTopics(topics: Topic[]): Array<{ stage: string; topics: Topic[] }> {
  const stages: Array<{ stage: string; topics: Topic[] }> = []

  topics.forEach((topic) => {
    const existing = stages.find((entry) => entry.stage === topic.stage)

    if (existing) {
      existing.topics.push(topic)
      return
    }

    stages.push({ stage: topic.stage, topics: [topic] })
  })

  return stages
}

function readProgress(track: Track): ProgressSnapshot {
  const topics = allTracks[track]
  const doneSlugs = new Set(topics.filter((topic) => isDone(track, topic.slug)).map((topic) => topic.slug))

  return {
    doneCount: getDoneCount(track, topics),
    percentage: getProgress(track, topics),
    doneSlugs,
  }
}

export default function Sidebar(): JSX.Element {
  const pathname = usePathname()
  const router = useRouter()
  const [{ track, slug }, setPathState] = useState(() => getPathState(pathname))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [progress, setProgress] = useState<ProgressSnapshot>(() => readProgress(track))
  const activeItemRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const nextPathState = getPathState(pathname)
    setPathState(nextPathState)
    setProgress(readProgress(nextPathState.track))
    setDrawerOpen(false)
  }, [pathname])

  useEffect(() => {
    function openDrawer(): void {
      setDrawerOpen(true)
    }

    function closeDrawer(): void {
      setDrawerOpen(false)
    }

    function syncProgress(): void {
      setProgress(readProgress(getPathState(window.location.pathname).track))
    }

    window.addEventListener(SIDEBAR_OPEN_EVENT, openDrawer)
    window.addEventListener(SIDEBAR_CLOSE_EVENT, closeDrawer)
    window.addEventListener(PROGRESS_UPDATED_EVENT, syncProgress)
    window.addEventListener('storage', syncProgress)

    return () => {
      window.removeEventListener(SIDEBAR_OPEN_EVENT, openDrawer)
      window.removeEventListener(SIDEBAR_CLOSE_EVENT, closeDrawer)
      window.removeEventListener(PROGRESS_UPDATED_EVENT, syncProgress)
      window.removeEventListener('storage', syncProgress)
    }
  }, [])

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
  }, [slug, track, drawerOpen])

  const topics = allTracks[track]
  const groups = groupTopics(topics)

  function navigateToTopic(nextTrack: Track, nextSlug: string): void {
    router.push(`/${nextTrack}/${nextSlug}`)
    closeSidebarDrawer()
  }

  function navigateToTrack(nextTrack: Track): void {
    const lastVisited = getLastVisited(nextTrack)
    const targetSlug = lastVisited ?? defaultTopicByTrack[nextTrack]
    navigateToTopic(nextTrack, targetSlug)
  }

  function renderContent(): JSX.Element {
    return (
      <div className="flex h-full flex-col bg-panel/95 backdrop-blur dark:bg-panel-dark/95">
        <div className="border-b border-border px-4 py-5 dark:border-border-dark">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
            Progress
          </p>
          <p className="mt-2 font-display text-xl text-ink dark:text-ink-dark">
            {progress.doneCount} of {topics.length} topics done
          </p>
          <ProgressBar className="mt-4" value={progress.percentage} />

          <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-canvas/70 p-2 dark:bg-[#0d1621]">
            {trackOrder.map((item) => {
              const active = item === track

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => navigateToTrack(item)}
                  className={cn(
                    'min-h-11 rounded-xl px-2 py-3 text-xs font-semibold tracking-[0.08em] transition-colors',
                    active
                      ? 'bg-accent text-white shadow-sm dark:bg-accent-dark dark:text-slate-950'
                      : 'text-ink-muted hover:bg-white/70 hover:text-ink dark:text-ink-dark-muted dark:hover:bg-panel-dark dark:hover:text-ink-dark',
                  )}
                >
                  {trackLabels[item]}
                </button>
              )
            })}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
          {groups.map((group) => (
            <section key={group.stage} className="mb-6 last:mb-0">
              <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
                {group.stage}
              </p>
              <div className="mt-2 space-y-1">
                {group.topics.map((topicItem) => {
                  const active = slug === topicItem.slug
                  const completed = progress.doneSlugs.has(topicItem.slug)

                  return (
                    <button
                      key={topicItem.slug}
                      ref={active ? activeItemRef : null}
                      type="button"
                      onClick={() => navigateToTopic(track, topicItem.slug)}
                      className={cn(
                        'flex min-h-11 w-full items-center gap-3 rounded-2xl border-l-4 px-3 py-3 text-left transition-colors',
                        active
                          ? 'border-l-accent bg-accent-soft/35 dark:border-l-accent-dark dark:bg-accent-dark/10'
                          : 'border-l-transparent hover:bg-white/60 dark:hover:bg-[#101a26]',
                      )}
                    >
                      <CheckIcon checked={completed} />
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            'truncate text-sm font-medium',
                            completed
                              ? 'text-ink-muted dark:text-ink-dark-muted'
                              : 'text-ink dark:text-ink-dark',
                          )}
                        >
                          {topicItem.title}
                        </p>
                      </div>
                      <span className="shrink-0 text-[13px] text-ink-muted dark:text-ink-dark-muted">
                        {topicItem.minutes}m
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <aside className="hidden h-screen w-[22rem] shrink-0 border-r border-border bg-panel/80 shadow-panel dark:border-border-dark dark:bg-panel-dark/80 md:block">
        {renderContent()}
      </aside>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-950/45 transition-opacity duration-200 ease-out md:hidden',
          drawerOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[85vw] max-w-[300px] border-r border-border shadow-panel transition-transform duration-200 ease-out dark:border-border-dark md:hidden',
          drawerOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          onClick={() => setDrawerOpen(false)}
          className="absolute right-3 top-3 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-white/80 text-lg text-ink shadow-sm transition-colors hover:bg-white dark:border-border-dark dark:bg-panel-dark dark:text-ink-dark"
          aria-label="Close sidebar"
        >
          ×
        </button>
        {renderContent()}
      </aside>
    </>
  )
}
