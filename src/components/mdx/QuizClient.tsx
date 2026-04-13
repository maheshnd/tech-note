'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface QuizClientProps {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export default function QuizClient({
  question,
  options,
  correct,
  explanation,
}: QuizClientProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null)
  const safeOptions = Array.isArray(options) ? options : []

  return (
    <section className="not-prose rounded-3xl border border-border bg-white/80 p-5 shadow-panel dark:border-border-dark dark:bg-panel-dark/70">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
        Quick check
      </p>
      <h3 className="mt-2 font-display text-xl text-ink dark:text-ink-dark">
        {question}
      </h3>
      <div className="mt-4 grid gap-3">
        {safeOptions.map((option, index) => {
          const isSelected = selected === index
          const isCorrect = index === correct
          const showResult = selected !== null

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(index)}
              className={cn(
                'min-h-11 rounded-2xl border px-4 py-3 text-left text-sm transition-colors',
                showResult && isCorrect
                  ? 'border-success bg-success-soft text-success dark:border-success/30 dark:bg-success/10 dark:text-success-dark'
                  : showResult && isSelected
                    ? 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200'
                    : 'border-border bg-panel hover:border-accent hover:bg-accent-soft/20 dark:border-border-dark dark:bg-panel-dark dark:hover:border-accent-dark dark:hover:bg-accent-dark/10',
              )}
            >
              {option}
            </button>
          )
        })}
      </div>
      {selected !== null ? (
        <p className="mt-4 text-sm leading-6 text-ink-muted dark:text-ink-dark-muted">
          {explanation}
        </p>
      ) : null}
    </section>
  )
}
