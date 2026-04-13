import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CalloutType = 'tip' | 'warning' | 'mistake' | 'interview' | 'note'

interface CalloutProps {
  type: CalloutType
  children: ReactNode
}

const calloutStyles: Record<CalloutType, string> = {
  tip: 'border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-100',
  warning:
    'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100',
  mistake:
    'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-100',
  interview:
    'border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-100',
  note: 'border-border bg-white/70 text-ink dark:border-border-dark dark:bg-panel-dark/60 dark:text-ink-dark',
}

export default function Callout({ type, children }: CalloutProps): JSX.Element {
  return (
    <aside
      className={cn(
        'not-prose rounded-2xl border px-4 py-4 text-sm leading-6 shadow-sm',
        calloutStyles[type],
      )}
    >
      {children}
    </aside>
  )
}
