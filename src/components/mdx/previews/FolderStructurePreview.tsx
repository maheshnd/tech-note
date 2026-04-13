'use client'

import { useState } from 'react'

export const folderStructurePreviewSource = `'use client'

import { useState } from 'react'

type StructureMode = 'route-driven' | 'feature-module'

export default function FolderStructurePreview() {
  const [mode, setMode] = useState<StructureMode>('route-driven')

  return null
}
`

type StructureMode = 'route-driven' | 'feature-module'

const structures: Record<StructureMode, string[]> = {
  'route-driven': [
    'app/dashboard/page.tsx',
    'app/dashboard/loading.tsx',
    'app/dashboard/_components/RevenueCard.tsx',
    'app/dashboard/_components/ActivityChart.tsx',
    'app/dashboard/_lib/getDashboardData.ts',
  ],
  'feature-module': [
    'features/billing/components/InvoiceTable.tsx',
    'features/billing/components/InvoiceFilters.tsx',
    'features/billing/lib/getInvoices.ts',
    'features/billing/lib/formatCurrency.ts',
    'features/billing/types.ts',
  ],
}

export default function FolderStructurePreview(): JSX.Element {
  const [mode, setMode] = useState<StructureMode>('route-driven')

  return (
    <section className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {(['route-driven', 'feature-module'] as StructureMode[]).map(
          (option) => {
            const isActive = option === mode

            return (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  isActive
                    ? 'border-accent bg-[#fff2df] text-ink dark:border-accent-dark dark:bg-[#2b2117] dark:text-ink-dark'
                    : 'border-border bg-white text-ink hover:bg-panel dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:bg-[#101a26]'
                }`}
              >
                <p className="text-sm font-semibold capitalize">
                  {option.replace('-', ' ')}
                </p>
              </button>
            )
          },
        )}
      </div>

      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
          Recommended slice
        </p>
        <ul className="mt-3 space-y-2 font-mono text-[13px]">
          {structures[mode].map((line) => (
            <li
              key={line}
              className="overflow-x-auto rounded-2xl border border-border bg-white px-4 py-3 text-ink dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
