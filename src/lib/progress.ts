import type { Topic, Track } from '@/types'

export const PROGRESS_UPDATED_EVENT = 'tech-note:progress-updated'

const TOPIC_KEY = (track: Track, slug: string): string => `progress:${track}:${slug}`
const TRACK_KEY = (track: Track): string => `progress:${track}`

interface TrackStorageValue {
  lastVisited?: string
}

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function emitProgressUpdated(track: Track, slug?: string): void {
  if (typeof window === 'undefined') return

  window.dispatchEvent(
    new CustomEvent(PROGRESS_UPDATED_EVENT, {
      detail: {
        track,
        slug: slug ?? null,
      },
    }),
  )
}

function readTrackValue(track: Track): TrackStorageValue {
  if (!canUseStorage()) return {}

  try {
    const raw = window.localStorage.getItem(TRACK_KEY(track))
    return raw ? (JSON.parse(raw) as TrackStorageValue) : {}
  } catch {
    return {}
  }
}

export function markDone(track: Track, slug: string): void {
  if (!canUseStorage()) return

  try {
    window.localStorage.setItem(TOPIC_KEY(track, slug), 'done')
    emitProgressUpdated(track, slug)
  } catch {
    // Silently fail when storage is unavailable.
  }
}

export function isDone(track: Track, slug: string): boolean {
  if (!canUseStorage()) return false

  try {
    return window.localStorage.getItem(TOPIC_KEY(track, slug)) === 'done'
  } catch {
    return false
  }
}

export function getProgress(track: Track, topics: Topic[]): number {
  if (topics.length === 0) return 0

  const doneCount = getDoneCount(track, topics)
  return Math.round((doneCount / topics.length) * 100)
}

export function getDoneCount(track: Track, topics: Topic[]): number {
  return topics.filter((topic) => isDone(track, topic.slug)).length
}

export function saveLastVisited(track: Track, slug: string): void {
  if (!canUseStorage()) return

  try {
    const data = readTrackValue(track)
    window.localStorage.setItem(
      TRACK_KEY(track),
      JSON.stringify({
        ...data,
        lastVisited: slug,
      }),
    )
    emitProgressUpdated(track, slug)
  } catch {
    // Silently fail when storage is unavailable.
  }
}

export function getLastVisited(track: Track): string | null {
  const data = readTrackValue(track)
  return data.lastVisited ?? null
}
