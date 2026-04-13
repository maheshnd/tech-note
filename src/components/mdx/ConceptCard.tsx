import type { ReactNode } from 'react'

interface ConceptCardProps {
  title: string
  children: ReactNode
}

export default function ConceptCard({
  title,
  children,
}: ConceptCardProps): JSX.Element {
  return (
    <section className="rounded-3xl border border-accent/20 bg-accent-soft/30 p-5 shadow-panel dark:border-accent-dark/25 dark:bg-accent-dark/10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
        Key concept
      </p>
      <h3 className="mt-2 font-display text-xl text-ink dark:text-ink-dark">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-7 text-ink-muted dark:text-ink-dark-muted">
        {children}
      </div>
    </section>
  )
}
