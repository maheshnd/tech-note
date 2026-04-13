'use client'

import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'

interface ContentErrorBoundaryProps {
  children: ReactNode
}

interface ContentErrorBoundaryState {
  hasError: boolean
}

export default class ContentErrorBoundary extends Component<
  ContentErrorBoundaryProps,
  ContentErrorBoundaryState
> {
  public constructor(props: ContentErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(): ContentErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    void error
    void info
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="max-w-md rounded-3xl border border-border bg-white/90 p-6 text-center shadow-panel dark:border-border-dark dark:bg-panel-dark/80">
            <h2 className="font-display text-2xl text-ink dark:text-ink-dark">
              Content area unavailable
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-ink-dark-muted">
              Something in this topic view failed. Reload to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 min-h-11 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ab4f23] dark:bg-accent-dark dark:text-slate-950 dark:hover:bg-[#f3aa63]"
            >
              Reload topic
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
