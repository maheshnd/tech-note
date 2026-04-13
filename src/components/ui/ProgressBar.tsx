import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  className?: string
  indicatorClassName?: string
}

export default function ProgressBar({
  value,
  className,
  indicatorClassName,
}: ProgressBarProps): JSX.Element {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-2 w-full overflow-hidden rounded-full bg-accent-soft/40 dark:bg-border-dark',
        className,
      )}
    >
      <div
        className={cn(
          'h-full rounded-full bg-accent transition-[width] duration-200 ease-out dark:bg-accent-dark',
          indicatorClassName,
        )}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  )
}
