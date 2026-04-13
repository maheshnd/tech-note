'use client'

function StatCard({
  label,
  value,
}: {
  label: string
  value: string
}): JSX.Element {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-ink dark:text-ink-dark">{value}</p>
    </div>
  )
}

export const componentComposerPreviewSource = `function StatCard({ label, value }) {
  return (
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  )
}

function Dashboard() {
  return (
    <section>
      <StatCard label="Lessons" value="13" />
      <StatCard label="Completed" value="7" />
      <StatCard label="Current" value="Hooks" />
    </section>
  )
}
`

export default function ComponentComposerPreview(): JSX.Element {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">Dashboard</h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
          This UI is built by composing small reusable `StatCard` components.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <StatCard label="Lessons" value="13" />
        <StatCard label="Completed" value="7" />
        <StatCard label="Current" value="Hooks" />
      </div>
    </section>
  )
}
