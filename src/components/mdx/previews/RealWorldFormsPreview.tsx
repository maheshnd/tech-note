'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type FormValues = {
  name: string
  email: string
  skills: string[]
}

export const realWorldFormsPreviewSource = `'use client'

import { useState } from 'react'

export default function RealWorldFormsPreview() {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    name: '',
    email: '',
    skills: ['React'],
  })

  return null
}
`

export default function RealWorldFormsPreview(): JSX.Element {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    skills: ['React'],
  })
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    return {
      name: values.name.trim() ? '' : 'Name is required',
      email: values.email.includes('@') ? '' : 'Email must include @',
    }
  }, [values.email, values.name])

  const canContinue = step === 1 ? !errors.name && !errors.email : true

  function updateSkill(index: number, nextValue: string): void {
    setValues((current) => ({
      ...current,
      skills: current.skills.map((skill, skillIndex) =>
        skillIndex === index ? nextValue : skill,
      ),
    }))
  }

  function addSkill(): void {
    setValues((current) => ({
      ...current,
      skills: [...current.skills, ''],
    }))
  }

  function removeSkill(index: number): void {
    setValues((current) => ({
      ...current,
      skills:
        current.skills.length === 1
          ? current.skills
          : current.skills.filter((_, skillIndex) => skillIndex !== index),
    }))
  }

  function resetForm(): void {
    setValues({
      name: '',
      email: '',
      skills: ['React'],
    })
    setStep(1)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section className="space-y-4">
        <div className="rounded-2xl border border-success bg-success-soft p-4 text-sm text-success dark:border-success-dark/30 dark:bg-success-dark/10 dark:text-success-dark">
          Registration preview submitted successfully.
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Reset form
        </button>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <div className="flex gap-2">
        {[1, 2].map((stepNumber) => (
          <div
            key={stepNumber}
            className={cn(
              'flex-1 rounded-2xl border px-3 py-2 text-center text-sm font-semibold',
              step === stepNumber
                ? 'border-accent bg-accent text-white dark:border-accent-dark dark:bg-accent-dark dark:text-slate-950'
                : 'border-border bg-white text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark',
            )}
          >
            Step {stepNumber}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-ink dark:text-ink-dark">
            Name
            <input
              value={values.name}
              onChange={(event) =>
                setValues((current) => ({ ...current, name: event.target.value }))
              }
              className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
            />
          </label>
          {errors.name ? (
            <p className="text-sm text-rose-600 dark:text-rose-300">{errors.name}</p>
          ) : null}

          <label className="block text-sm font-medium text-ink dark:text-ink-dark">
            Email
            <input
              value={values.email}
              onChange={(event) =>
                setValues((current) => ({ ...current, email: event.target.value }))
              }
              className="mt-2 min-h-11 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
            />
          </label>
          {errors.email ? (
            <p className="text-sm text-rose-600 dark:text-rose-300">{errors.email}</p>
          ) : null}
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm font-medium text-ink dark:text-ink-dark">Skills</p>
          {values.skills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex gap-2">
              <input
                value={skill}
                onChange={(event) => updateSkill(index, event.target.value)}
                className="min-h-11 flex-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="min-h-11 rounded-2xl border border-border px-3 py-2 text-sm font-semibold text-ink dark:border-border-dark dark:text-ink-dark"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
          >
            Add skill
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {step === 2 ? (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
          >
            Back
          </button>
        ) : null}

        {step === 1 ? (
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => setStep(2)}
            className={cn(
              'min-h-11 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
              canContinue
                ? 'bg-accent text-white hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]'
                : 'cursor-not-allowed border border-border bg-white text-ink-muted dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark-muted',
            )}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
          >
            Submit
          </button>
        )}
      </div>
    </section>
  )
}
