'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export const layoutEffectPreviewSource = `'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function LayoutEffectPreview() {
  const anchorRef = useRef(null)
  const [useLayoutMode, setUseLayoutMode] = useState(true)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const syncPosition = () => {
    const rect = anchorRef.current?.getBoundingClientRect()

    if (!rect) {
      return
    }

    setPosition({
      top: rect.height + 12,
      left: Math.max(12, rect.width / 2 - 80),
    })
  }

  useLayoutEffect(() => {
    if (!useLayoutMode) {
      return
    }

    syncPosition()
  }, [useLayoutMode])

  useEffect(() => {
    if (useLayoutMode) {
      return
    }

    syncPosition()
  }, [useLayoutMode])

  return null
}
`

export default function LayoutEffectPreview(): JSX.Element {
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const [useLayoutMode, setUseLayoutMode] = useState(true)
  const [isWide, setIsWide] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  function syncPosition(): void {
    const rect = anchorRef.current?.getBoundingClientRect()

    if (!rect) {
      return
    }

    setPosition({
      top: rect.height + 12,
      left: Math.max(12, rect.width / 2 - 84),
    })
  }

  useLayoutEffect(() => {
    if (!useLayoutMode) {
      return
    }

    syncPosition()
  }, [useLayoutMode, isWide])

  useEffect(() => {
    if (useLayoutMode) {
      return
    }

    syncPosition()
  }, [useLayoutMode, isWide])

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Switch between `useLayoutEffect` and `useEffect`. The tooltip position is measured from the anchor box. `useLayoutEffect` synchronizes before paint, while `useEffect` waits until after paint.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setUseLayoutMode(true)}
          className={`min-h-11 rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
            useLayoutMode
              ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
              : 'border-border bg-white text-ink hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60'
          }`}
        >
          useLayoutEffect mode
        </button>

        <button
          type="button"
          onClick={() => setUseLayoutMode(false)}
          className={`min-h-11 rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
            !useLayoutMode
              ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
              : 'border-border bg-white text-ink hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60'
          }`}
        >
          useEffect mode
        </button>

        <button
          type="button"
          onClick={() => setIsWide((value) => !value)}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Toggle anchor size
        </button>
      </div>

      <div className="relative min-h-[220px] rounded-3xl border border-border bg-white p-6 dark:border-border-dark dark:bg-[#0d1621]">
        <div
          ref={anchorRef}
          className={`rounded-3xl border border-border bg-panel px-5 py-6 transition-all duration-200 dark:border-border-dark dark:bg-[#101a26] ${
            isWide ? 'w-full max-w-[320px]' : 'w-[180px]'
          }`}
        >
          <p className="text-sm font-semibold text-ink dark:text-ink-dark">
            Anchor card
          </p>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
            Resize me to trigger a new measurement.
          </p>
        </div>

        <div
          className="absolute w-[168px] rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-ink shadow-sm dark:border-accent-dark/40 dark:bg-accent-dark/15 dark:text-ink-dark"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          Positioned from measured layout
        </div>
      </div>
    </section>
  )
}
