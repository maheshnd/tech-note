'use client'

import { useMemo, useState } from 'react'

type FormState = {
  status: 'idle' | 'error' | 'success'
  message: string
  fieldErrors: {
    name: string
    email: string
  }
}

const initialState: FormState = {
  status: 'idle',
  message: '',
  fieldErrors: {
    name: '',
    email: '',
  },
}

export const formActionsPreviewSource = `'use client'

import { useState } from 'react'

export default function FormActionsPreview() {
  const [pending, setPending] = useState(false)
  const [state, setState] = useState({
    status: 'idle',
    message: '',
    fieldErrors: { name: '', email: '' },
  })

  return null
}
`

export default function FormActionsPreview(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pending, setPending] = useState(false)
  const [state, setState] = useState<FormState>(initialState)

  const canSubmit = useMemo(() => {
    return !pending
  }, [pending])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)

    const nextFieldErrors = {
      name: name.trim() ? '' : 'Name is required.',
      email: email.includes('@') ? '' : 'Email must include @.',
    }

    await new Promise((resolve) => setTimeout(resolve, 650))

    if (nextFieldErrors.name || nextFieldErrors.email) {
      setState({
        status: 'error',
        message: 'Fix the highlighted fields and try again.',
        fieldErrors: nextFieldErrors,
      })
      setPending(false)
      return
    }

    setState({
      status: 'success',
      message: `Saved ${name} successfully.`,
      fieldErrors: {
        name: '',
        email: '',
      },
    })
    setPending(false)
  }

  function resetForm(): void {
    setName('')
    setEmail('')
    setState(initialState)
    setPending(false)
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          This preview mirrors the modern form-actions mental model: submit,
          pending state, returned field errors, and a success message. The lesson
          content explains how React&apos;s newer <code>useActionState</code> and{' '}
          <code>useFormStatus</code> APIs formalize this pattern.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-ink dark:text-ink-dark">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
          />
        </label>
        {state.fieldErrors.name ? (
          <p className="text-sm text-rose-600 dark:text-rose-300">
            {state.fieldErrors.name}
          </p>
        ) : null}

        <label className="block text-sm font-medium text-ink dark:text-ink-dark">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
          />
        </label>
        {state.fieldErrors.email ? (
          <p className="text-sm text-rose-600 dark:text-rose-300">
            {state.fieldErrors.email}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={!canSubmit}
            className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
          >
            {pending ? 'Saving...' : 'Save contact'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
          >
            Reset
          </button>
        </div>
      </form>

      {state.message ? (
        <div
          className={`rounded-2xl border p-4 text-sm ${
            state.status === 'success'
              ? 'border-success bg-success-soft text-success dark:border-success-dark/30 dark:bg-success-dark/10 dark:text-success-dark'
              : 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-200'
          }`}
        >
          {state.message}
        </div>
      ) : null}
    </section>
  )
}
