'use client'

import { useMemo, useReducer, useState } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'add'; payload: { id: number; name: string; price: number } }
  | { type: 'updateQuantity'; payload: { id: number; quantity: number } }
  | { type: 'remove'; payload: { id: number } }
  | { type: 'clear' }

const initialState: CartState = {
  items: [],
}

const catalog = [
  { id: 1, name: 'Keyboard', price: 100 },
  { id: 2, name: 'Mouse', price: 40 },
]

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        items: [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      }
    }

    case 'updateQuantity':
      return {
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }

    case 'remove':
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      }

    case 'clear':
      return {
        items: [],
      }

    default:
      return state
  }
}

export const useReducerPreviewSource = `'use client'

import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function UseReducerPreview() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      {state.count}
    </button>
  )
}
`

export default function UseReducerPreview(): JSX.Element {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [amount, setAmount] = useState(1)

  const total = useMemo(() => {
    return state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
  }, [state.items])

  function addKeyboard(): void {
    for (let index = 0; index < amount; index += 1) {
      dispatch({
        type: 'add',
        payload: catalog[0],
      })
    }
  }

  function addMouse(): void {
    dispatch({
      type: 'add',
      payload: catalog[1],
    })
  }

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
          One reducer handles multiple cart actions: add, update quantity, remove, and clear.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value) || 1)}
          className="min-h-11 w-24 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-border-dark dark:bg-[#0d1621] dark:text-ink-dark dark:focus:border-accent-dark"
        />
        <button
          type="button"
          onClick={addKeyboard}
          className="min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
        >
          Add keyboard
        </button>
        <button
          type="button"
          onClick={addMouse}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Add mouse
        </button>
      </div>

      <ul className="space-y-2">
        {state.items.length === 0 ? (
          <li className="rounded-2xl border border-dashed border-border px-4 py-3 text-sm text-ink-muted dark:border-border-dark dark:text-ink-dark-muted">
            Cart is empty.
          </li>
        ) : (
          state.items.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-border bg-white p-4 dark:border-border-dark dark:bg-[#0d1621]"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-ink-dark">{item.name}</p>
                  <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
                    ${item.price} each
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: 'remove', payload: { id: item.id } })
                  }
                  className="min-h-11 rounded-xl px-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-500/10"
                >
                  Remove
                </button>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: 'updateQuantity',
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                  className="min-h-11 rounded-xl border border-border px-3 text-sm font-semibold text-ink dark:border-border-dark dark:text-ink-dark"
                >
                  -
                </button>
                <span className="text-sm text-ink dark:text-ink-dark">
                  Qty: {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: 'updateQuantity',
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                  className="min-h-11 rounded-xl border border-border px-3 text-sm font-semibold text-ink dark:border-border-dark dark:text-ink-dark"
                >
                  +
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-panel p-4 dark:border-border-dark dark:bg-[#101a26]">
        <p className="text-sm font-semibold text-ink dark:text-ink-dark">Total: ${total}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'clear' })}
          className="min-h-11 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white dark:border-border-dark dark:text-ink-dark dark:hover:bg-[#1b2735]"
        >
          Clear cart
        </button>
      </div>
    </section>
  )
}
