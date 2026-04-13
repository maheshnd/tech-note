'use client'

import { useState } from 'react'

export const advancedFormsPreviewSource = `'use client'

import { useState } from 'react'

export default function AdvancedFormsPreview() {
  const [step, setStep] = useState(1)

  return null
}
`

type Draft = {
  name: string
  email: string
  plan: string
}

const initialDraft: Draft = {
  name: '',
  email: '',
  plan: 'starter',
}

export default function AdvancedFormsPreview(): JSX.Element {
  const [step, setStep] = useState(1)
  const [draft, setDraft] = useState<Draft>(initialDraft)
  const [, setHistory] = useState<Draft[]>([])
  const [autosaveMessage, setAutosaveMessage] = useState('No autosave yet.')

  function updateDraft(nextDraft: Draft): void {
    setHistory((currentHistory) => [...currentHistory, draft])
    setDraft(nextDraft)
    setAutosaveMessage('Draft autosaved just now.')
  }

  function undoLastChange(): void {
    setHistory((currentHistory) => {
      const previousDraft = currentHistory.at(-1)

      if (!previousDraft) {
        return currentHistory
      }

      setDraft(previousDraft)
      setAutosaveMessage('Reverted to previous draft snapshot.')
      return currentHistory.slice(0, -1)
    })
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((stepNumber) => (
          <button
            key={stepNumber}
            type="button"
            onClick={() => setStep(stepNumber)}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              step === stepNumber
                ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                : 'border-border bg-white text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark'
            }`}
          >
            Step {stepNumber}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        {step === 1 ? (
          <label className="block text-sm font-medium text-ink dark:text-ink-dark">
            Full name
            <input
              value={draft.name}
              onChange={(event) =>
                updateDraft({ ...draft, name: event.target.value })
              }
              className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
            />
          </label>
        ) : null}

        {step === 2 ? (
          <label className="block text-sm font-medium text-ink dark:text-ink-dark">
            Email
            <input
              value={draft.email}
              onChange={(event) =>
                updateDraft({ ...draft, email: event.target.value })
              }
              className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
            />
          </label>
        ) : null}

        {step === 3 ? (
          <label className="block text-sm font-medium text-ink dark:text-ink-dark">
            Plan
            <select
              value={draft.plan}
              onChange={(event) =>
                updateDraft({ ...draft, plan: event.target.value })
              }
              className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
            >
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </label>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={undoLastChange}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#101a26]"
        >
          Undo last change
        </button>
        <p className="self-center text-sm text-ink-muted dark:text-ink-dark-muted">
          {autosaveMessage}
        </p>
      </div>
    </section>
  )
}
