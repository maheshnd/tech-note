'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PROGRESS_UPDATED_EVENT, isDone, markDone } from '@/lib/progress'
import { allTracks, getNextTrack, getTopicIndex, trackLabels } from '@/lib/topics'
import type { Track } from '@/types'
import { cn } from '@/lib/utils'

interface MarkDoneProps {
  track: Track
  slug: string
  nextHref?: string | null
  nextTrackHref?: string | null
  nextTrackLabel?: string | null
  isLastTopic?: boolean
}

export default function MarkDone({
  track,
  slug,
  nextHref,
  nextTrackHref,
  nextTrackLabel,
  isLastTopic,
}: MarkDoneProps): JSX.Element {
  const router = useRouter()
  const [completed, setCompleted] = useState(false)
  const topics = allTracks[track]
  const currentIndex = getTopicIndex(track, slug)
  const fallbackNextTopic = currentIndex >= 0 ? topics[currentIndex + 1] ?? null : null
  const fallbackNextTrack = getNextTrack(track)
  const resolvedNextHref =
    nextHref ?? (fallbackNextTopic ? `/${track}/${fallbackNextTopic.slug}` : null)
  const resolvedIsLastTopic = isLastTopic ?? !fallbackNextTopic
  const resolvedNextTrackHref =
    nextTrackHref ??
    (fallbackNextTrack ? `/${fallbackNextTrack}/${allTracks[fallbackNextTrack][0]?.slug ?? ''}` : null)
  const resolvedNextTrackLabel =
    nextTrackLabel ?? (fallbackNextTrack ? trackLabels[fallbackNextTrack] : null)

  useEffect(() => {
    setCompleted(isDone(track, slug))

    function syncState(): void {
      setCompleted(isDone(track, slug))
    }

    window.addEventListener(PROGRESS_UPDATED_EVENT, syncState)
    window.addEventListener('storage', syncState)

    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, syncState)
      window.removeEventListener('storage', syncState)
    }
  }, [slug, track])

  function handleMarkDone(): void {
    markDone(track, slug)
    setCompleted(true)

    if (resolvedNextHref) {
      router.push(resolvedNextHref)
    }
  }

  return (
    <div className="not-prose space-y-4 rounded-3xl border border-border bg-white/80 p-5 shadow-panel dark:border-border-dark dark:bg-panel-dark/70">
      <button
        type="button"
        onClick={handleMarkDone}
        className={cn(
          'flex min-h-11 w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
          completed
            ? 'bg-success text-white dark:bg-success-dark'
            : 'bg-accent text-white hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]',
        )}
      >
        {completed && !resolvedNextHref ? 'Completed' : 'Mark as done'}
      </button>

      {completed && resolvedIsLastTopic ? (
        <div className="space-y-3 rounded-2xl border border-success/20 bg-success-soft p-4 text-sm dark:border-success/30 dark:bg-success/10">
          <p className="font-semibold text-success dark:text-success-dark">
            Track complete.
          </p>
          <p className="text-ink-muted dark:text-ink-dark-muted">
            You finished every topic in this track.
          </p>
          {resolvedNextTrackHref && resolvedNextTrackLabel ? (
            <button
              type="button"
              onClick={() => router.push(resolvedNextTrackHref)}
              className="min-h-11 rounded-2xl border border-success/20 px-4 py-3 font-semibold text-success transition-colors hover:bg-white/70 dark:border-success/30 dark:text-success-dark dark:hover:bg-success/10"
            >
              Continue with {resolvedNextTrackLabel}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
