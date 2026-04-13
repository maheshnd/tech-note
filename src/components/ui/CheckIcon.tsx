import { cn } from '@/lib/utils'

interface CheckIconProps {
  checked: boolean
  className?: string
}

export default function CheckIcon({
  checked,
  className,
}: CheckIconProps): JSX.Element {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-colors',
        checked
          ? 'border-success bg-success text-white dark:border-success-dark dark:bg-success-dark'
          : 'border-border bg-transparent text-transparent dark:border-border-dark',
        className,
      )}
    >
      ✓
    </span>
  )
}
