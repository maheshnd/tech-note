'use client'

import { useState } from 'react'

function ProfileCard({
  name,
  role,
}: {
  name: string
  role: string
}): JSX.Element {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
      <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">{name}</h3>
      <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">{role}</p>
    </div>
  )
}

export const propsPreviewSource = `'use client'

import { useState } from 'react'

function ProfileCard({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default function PropsPreview() {
  const [person, setPerson] = useState({ name: 'Mahesh', role: 'React learner' })

  return (
    <section>
      <button onClick={() => setPerson({ name: 'Jayashri', role: 'Frontend developer' })}>
        Swap person
      </button>
      <ProfileCard name={person.name} role={person.role} />
    </section>
  )
}
`

export default function PropsPreview(): JSX.Element {
  const [person, setPerson] = useState({
    name: 'Mahesh',
    role: 'React learner',
  })

  function showLearner(): void {
    setPerson({ name: 'Mahesh', role: 'React learner' })
  }

  function showDeveloper(): void {
    setPerson({ name: 'Jayashri', role: 'Frontend developer' })
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={showLearner}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Show learner
        </button>
        <button
          type="button"
          onClick={showDeveloper}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Show developer
        </button>
      </div>
      <ProfileCard name={person.name} role={person.role} />
    </section>
  )
}
