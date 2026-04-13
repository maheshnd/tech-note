'use client'

import ControlledInputPreview from '@/components/mdx/previews/ControlledInputPreview'
import CounterPreview from '@/components/mdx/previews/CounterPreview'
import TimerPreview from '@/components/mdx/previews/TimerPreview'
import TodoListPreview from '@/components/mdx/previews/TodoListPreview'
import TogglePreview from '@/components/mdx/previews/TogglePreview'
import { previewRegistry, type PreviewId } from '@/components/mdx/previews/registry'

interface LivePreviewClientProps {
  id: string
  title?: string
  description?: string
}

export default function LivePreviewClient({
  id,
  title,
  description,
}: LivePreviewClientProps): JSX.Element {
  const previewId = (id in previewRegistry ? id : 'topic-shell') as PreviewId
  const preview = previewRegistry[previewId]

  function renderPreview(): JSX.Element {
    if (previewId === 'counter-basic' || previewId === 'topic-shell') {
      return <CounterPreview />
    }

    if (previewId === 'toggle-panel') {
      return <TogglePreview />
    }

    if (previewId === 'timer-basic') {
      return <TimerPreview />
    }

    if (previewId === 'controlled-input') {
      return <ControlledInputPreview />
    }

    return <TodoListPreview />
  }

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-border bg-white/80 p-5 shadow-panel dark:border-border-dark dark:bg-panel-dark/70">
      <div className="rounded-2xl border border-border/70 bg-panel px-4 py-3 dark:border-border-dark dark:bg-[#0d1621]">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Live preview
        </p>
        <h3 className="mt-2 font-display text-xl text-ink dark:text-ink-dark">
          {title ?? preview.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-ink-dark-muted">
          {description ?? preview.description}
        </p>
      </div>
      <div className="mt-4 flex-1 rounded-2xl border border-dashed border-border p-4 dark:border-border-dark">
        {renderPreview()}
      </div>
    </section>
  )
}
