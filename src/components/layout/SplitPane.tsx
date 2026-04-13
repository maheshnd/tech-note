'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import LivePreview from '@/components/mdx/LivePreview'
import type { PreviewId } from '@/components/mdx/previews/registry'
import { saveLastVisited } from '@/lib/progress'
import type { PreviewEntryWithId } from '@/lib/mdx'
import type { Topic, Track } from '@/types'
import { cn } from '@/lib/utils'

interface SplitPaneProps {
  track: Track
  topic: Topic | null
  notesContent: ReactNode | null
  lessonPreviews: PreviewEntryWithId[]
  previousHref: string | null
  previousTitle: string | null
  nextHref: string | null
  nextTitle: string | null
  nextTrackHref: string | null
  nextTrackLabel: string | null
}

type MobileTab = 'notes' | 'code'

export default function SplitPane({
  track,
  topic,
  notesContent,
  lessonPreviews,
  previousHref,
  previousTitle,
  nextHref,
  nextTitle,
}: SplitPaneProps): JSX.Element {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<MobileTab>('notes')
  const [activePreviewId, setActivePreviewId] = useState<PreviewId>(
    lessonPreviews[0]?.id ?? 'topic-shell',
  )
  const notesRef = useRef<HTMLDivElement | null>(null)
  const codeRef = useRef<HTMLDivElement | null>(null)
  const activePreview =
    lessonPreviews.find((preview) => preview.id === activePreviewId) ??
    lessonPreviews[0]

  useEffect(() => {
    setActiveTab('notes')
    setActivePreviewId(lessonPreviews[0]?.id ?? 'topic-shell')
    notesRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    codeRef.current?.scrollTo({ top: 0, behavior: 'smooth' })

    if (topic) {
      saveLastVisited(track, topic.slug)
    }
  }, [topic, track, lessonPreviews])

  if (!topic) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-lg rounded-3xl border border-dashed border-border bg-white/70 p-8 text-center dark:border-border-dark dark:bg-panel-dark/70">
          <h2 className="font-display text-2xl text-ink dark:text-ink-dark">
            Topic not found
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-ink-dark-muted">
            The URL does not match a topic in the manifest for the selected track.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="sticky top-16 z-20 border-b border-border bg-canvas/90 backdrop-blur dark:border-border-dark dark:bg-canvas-dark/90 md:hidden">
        <div className="grid grid-cols-2 px-4">
          {(['notes', 'code'] as MobileTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'min-h-11 border-b-2 px-3 py-3 text-sm font-semibold capitalize transition-colors',
                activeTab === tab
                  ? 'border-b-accent text-ink dark:border-b-accent-dark dark:text-ink-dark'
                  : 'border-b-transparent text-ink-muted dark:text-ink-dark-muted',
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div
          ref={notesRef}
          className={cn(
            'min-h-0 flex-1 overflow-y-auto border-r-0 p-4 md:basis-[55%] md:border-r md:border-border md:p-6 dark:md:border-border-dark',
            activeTab === 'notes' ? 'block' : 'hidden md:block',
          )}
        >
          <article className="prose prose-slate mx-auto flex max-w-3xl flex-col gap-5 text-sm leading-7 prose-headings:font-display prose-headings:text-ink prose-p:text-ink-muted prose-strong:text-ink prose-code:text-[13px] prose-pre:p-0 dark:prose-invert dark:prose-headings:text-ink-dark dark:prose-p:text-ink-dark-muted dark:prose-strong:text-ink-dark">
            {notesContent ?? (
              <section className="not-prose rounded-3xl border border-dashed border-border bg-white/70 p-6 dark:border-border-dark dark:bg-panel-dark/70">
                <h2 className="font-display text-2xl text-ink dark:text-ink-dark">
                  Lesson content missing
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-ink-dark-muted">
                  This manifest entry exists, but the MDX lesson file has not been added yet.
                </p>
              </section>
            )}

            <div className="not-prose flex flex-wrap gap-3 border-t border-border pt-2 dark:border-border-dark">
              {previousHref ? (
                <button
                  type="button"
                  onClick={() => router.push(previousHref)}
                  className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/80 dark:border-border-dark dark:text-ink-dark dark:hover:bg-panel-dark"
                >
                  Previous: {previousTitle}
                </button>
              ) : null}

              {nextHref ? (
                <button
                  type="button"
                  onClick={() => router.push(nextHref)}
                  className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
                >
                  Next: {nextTitle}
                </button>
              ) : null}
            </div>
          </article>
        </div>

        <div
          ref={codeRef}
          className={cn(
            'min-h-0 flex-1 overflow-y-auto border-t border-border p-4 md:basis-[45%] md:border-l-0 md:border-t-0 md:p-6 dark:border-border-dark',
            activeTab === 'code' ? 'block' : 'hidden md:block',
          )}
        >
          <div className="flex min-h-full flex-col gap-4">
            <div className="min-h-[280px] flex-1 rounded-3xl border border-border bg-[#16181f] p-5 text-slate-100 shadow-panel dark:border-border-dark">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  {activePreview?.title ?? 'Lesson preview'}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {lessonPreviews.length} demo{lessonPreviews.length === 1 ? '' : 's'}
                </span>
              </div>
              <pre className="mt-4 overflow-auto text-[13px] leading-6">
                <code>{activePreview?.code ?? ''}</code>
              </pre>
            </div>

            <div className="border-t border-border pt-4 dark:border-border-dark">
              {lessonPreviews.length > 1 ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {lessonPreviews.map((preview, index) => (
                    <button
                      key={preview.id}
                      type="button"
                      onClick={() => setActivePreviewId(preview.id)}
                      className={cn(
                        'min-h-11 rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors',
                        activePreviewId === preview.id
                          ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
                          : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-panel-dark dark:text-ink-dark dark:hover:bg-[#1b2735]',
                      )}
                    >
                      Demo {index + 1}
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="min-h-[240px]">
                <LivePreview
                  id={activePreview?.id ?? 'topic-shell'}
                  title={activePreview?.title ?? 'Lesson preview'}
                  description={
                    activePreview?.description ?? 'This lesson does not have a dedicated preview yet.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
