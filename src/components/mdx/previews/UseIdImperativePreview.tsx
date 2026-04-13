'use client'

import {
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

interface SearchFieldHandle {
  focus: () => void
  clear: () => void
}

const SearchField = forwardRef<SearchFieldHandle, { label: string }>(
  function SearchField({ label }, ref): JSX.Element {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const baseId = useId()
    const helpId = `${baseId}-help`
    const errorId = `${baseId}-error`
    const [value, setValue] = useState('')
    const hasError = value.trim().length > 0 && value.trim().length < 3

    useImperativeHandle(
      ref,
      () => ({
        focus() {
          inputRef.current?.focus()
        },
        clear() {
          setValue('')
          inputRef.current?.focus()
        },
      }),
      [],
    )

    return (
      <div className="space-y-2">
        <label
          htmlFor={baseId}
          className="block text-sm font-semibold text-ink dark:text-ink-dark"
        >
          {label}
        </label>
        <input
          id={baseId}
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-describedby={hasError ? `${helpId} ${errorId}` : helpId}
          aria-invalid={hasError}
          placeholder="Type at least 3 characters"
          className="min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <p
          id={helpId}
          className="text-sm text-ink-muted dark:text-ink-dark-muted"
        >
          This help text is linked to the field with a stable React-generated ID.
        </p>
        {hasError ? (
          <p
            id={errorId}
            className="text-sm font-medium text-[#9f3a1a] dark:text-[#ffb086]"
          >
            Enter at least 3 characters before submitting.
          </p>
        ) : null}
      </div>
    )
  },
)

export const useIdImperativePreviewSource = `'use client'

import { forwardRef, useId, useImperativeHandle, useRef, useState } from 'react'

const SearchField = forwardRef(function SearchField(props, ref) {
  const baseId = useId()
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus()
    },
  }))

  return (
    <>
      <label htmlFor={baseId}>Search policies</label>
      <input id={baseId} ref={inputRef} />
    </>
  )
})

export default function UseIdImperativePreview() {
  const fieldRef = useRef(null)

  return (
    <button onClick={() => fieldRef.current?.focus()}>
      Focus field
    </button>
  )
}
`

export default function UseIdImperativePreview(): JSX.Element {
  const policyFieldRef = useRef<SearchFieldHandle | null>(null)
  const customerFieldRef = useRef<SearchFieldHandle | null>(null)

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          Each field gets stable accessible IDs from <code>useId</code>, and
          the parent can use a tiny imperative API to focus or clear a field
          when it really needs escape-hatch control.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SearchField ref={policyFieldRef} label="Search policies" />
        <SearchField ref={customerFieldRef} label="Search customers" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => policyFieldRef.current?.focus()}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Focus policy field
        </button>
        <button
          type="button"
          onClick={() => customerFieldRef.current?.focus()}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Focus customer field
        </button>
        <button
          type="button"
          onClick={() => customerFieldRef.current?.clear()}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Clear customer field
        </button>
      </div>
    </section>
  )
}
