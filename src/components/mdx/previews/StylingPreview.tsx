'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

function buttonClasses(variant: ButtonVariant, disabled: boolean): string {
  return cn(
    'min-h-11 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
    disabled && 'cursor-not-allowed opacity-60',
    variant === 'primary' &&
      'bg-accent text-white hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]',
    variant === 'secondary' &&
      'border border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#1b2735]',
    variant === 'danger' &&
      'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:text-white dark:hover:bg-rose-400',
  )
}

export const stylingPreviewSource = `'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

function buttonClasses(variant, disabled) {
  return cn(
    'rounded-xl px-4 py-2 font-semibold',
    disabled && 'opacity-60',
    variant === 'primary' && 'bg-accent text-white',
    variant === 'secondary' && 'border border-border bg-white text-ink',
    variant === 'danger' && 'bg-rose-600 text-white',
  )
}
`

export default function StylingPreview(): JSX.Element {
  const [activeVariant, setActiveVariant] = useState<ButtonVariant>('primary')
  const [disabled, setDisabled] = useState(false)

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          One component can support multiple visual variants with Tailwind utilities and `cn()`.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(['primary', 'secondary', 'danger'] as ButtonVariant[]).map((variant) => (
          <button
            key={variant}
            type="button"
            onClick={() => setActiveVariant(variant)}
            className={cn(
              'min-h-11 rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors',
              activeVariant === variant
                ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
                : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#1b2735]',
            )}
          >
            {variant}
          </button>
        ))}
      </div>

      <label className="flex min-h-11 items-center gap-3 text-sm text-ink dark:text-ink-dark">
        <input
          type="checkbox"
          checked={disabled}
          onChange={(event) => setDisabled(event.target.checked)}
        />
        Disabled state
      </label>

      <button
        type="button"
        disabled={disabled}
        className={buttonClasses(activeVariant, disabled)}
      >
        Preview button
      </button>
    </section>
  )
}
