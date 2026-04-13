'use client'

import { useState } from 'react'

interface CodeCopyButtonProps {
  code: string
}

export default function CodeCopyButton({
  code,
}: CodeCopyButtonProps): JSX.Element {
  const [copied, setCopied] = useState(false)

  async function handleCopy(): Promise<void> {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return

    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      type="button"
      onClick={() => void handleCopy()}
      className="min-h-11 rounded-xl px-3 text-[13px] font-medium text-slate-200 transition-colors hover:bg-white/10"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
