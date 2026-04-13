import type { Level } from '@/types'
import { cn } from '@/lib/utils'

interface BadgeProps {
  level: Level
  className?: string
}

const levelClasses: Record<Level, string> = {
  beginner:
    'border-success/20 bg-success-soft text-success dark:border-success/30 dark:bg-success/10 dark:text-success-dark',
  intermediate:
    'border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300',
  advanced:
    'border-rose-300 bg-rose-100 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300',
}

export default function Badge({ level, className }: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.18em]',
        levelClasses[level],
        className,
      )}
    >
      {level}
    </span>
  )
}
