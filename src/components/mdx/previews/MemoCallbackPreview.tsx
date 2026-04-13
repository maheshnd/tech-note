'use client'

import { memo, useCallback, useMemo, useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
}

const catalog: Product[] = [
  { id: 1, name: 'Claims dashboard', category: 'Analytics' },
  { id: 2, name: 'Policy search', category: 'Workflow' },
  { id: 3, name: 'Renewal reminders', category: 'Automation' },
  { id: 4, name: 'Underwriting queue', category: 'Workflow' },
  { id: 5, name: 'Fraud review board', category: 'Analytics' },
  { id: 6, name: 'Document upload', category: 'Automation' },
]

interface ProductListProps {
  products: Product[]
  selectedId: number | null
  onSelect: (productId: number) => void
}

const ProductList = memo(function ProductList({
  products,
  selectedId,
  onSelect,
}: ProductListProps): JSX.Element {
  return (
    <ul className="space-y-2">
      {products.map((product) => {
        const isActive = product.id === selectedId

        return (
          <li key={product.id}>
            <button
              type="button"
              onClick={() => onSelect(product.id)}
              className={`min-h-11 w-full rounded-2xl border px-4 py-3 text-left text-sm transition-colors ${
                isActive
                  ? 'border-accent bg-accent/10 text-ink dark:border-accent-dark dark:bg-accent-dark/15 dark:text-ink-dark'
                  : 'border-border bg-white text-ink hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60'
              }`}
            >
              <span className="block font-semibold">{product.name}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
                {product.category}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
})

export const memoCallbackPreviewSource = `'use client'

import { memo, useCallback, useMemo, useState } from 'react'

const ProductList = memo(function ProductList({
  products,
  selectedId,
  onSelect,
}) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <button onClick={() => onSelect(product.id)}>
            {product.name}
          </button>
        </li>
      ))}
    </ul>
  )
})

export default function MemoCallbackPreview() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return products.filter((product) =>
      product.name.toLowerCase().includes(normalized),
    )
  }, [query])

  const handleSelect = useCallback((productId) => {
    setSelectedId(productId)
  }, [])

  return (
    <ProductList
      products={filteredProducts}
      selectedId={selectedId}
      onSelect={handleSelect}
    />
  )
}
`

export default function MemoCallbackPreview(): JSX.Element {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [theme, setTheme] = useState<'warm' | 'cool'>('warm')

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return catalog
    }

    return catalog.filter((product) =>
      `${product.name} ${product.category}`.toLowerCase().includes(normalized),
    )
  }, [query])

  const handleSelect = useCallback((productId: number) => {
    setSelectedId(productId)
  }, [])

  const handleReset = useCallback(() => {
    setQuery('')
    setSelectedId(null)
  }, [])

  const selectedProduct =
    filteredProducts.find((product) => product.id === selectedId) ?? null

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          `useMemo` keeps the filtered result stable until the search text changes. `useCallback` keeps the select and reset handlers stable so a memoized child can benefit.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter features"
          className="min-h-11 flex-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <button
          type="button"
          onClick={() =>
            setTheme((current) => (current === 'warm' ? 'cool' : 'warm'))
          }
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Toggle theme: {theme}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="min-h-11 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:hover:border-accent-dark/60"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
        <ProductList
          products={filteredProducts}
          selectedId={selectedId}
          onSelect={handleSelect}
        />

        <aside className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]">
          <p className="text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
            Selection
          </p>
          {selectedProduct ? (
            <>
              <p className="mt-3 text-sm font-semibold text-ink dark:text-ink-dark">
                {selectedProduct.name}
              </p>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-dark-muted">
                Category: {selectedProduct.category}
              </p>
            </>
          ) : (
            <p className="mt-3 text-sm text-ink-muted dark:text-ink-dark-muted">
              Select a feature to inspect it.
            </p>
          )}
          <p className="mt-4 text-xs text-ink-muted dark:text-ink-dark-muted">
            Toggling the theme re-renders the parent, but the memoized list can still skip extra work when its props stay stable.
          </p>
        </aside>
      </div>
    </section>
  )
}
