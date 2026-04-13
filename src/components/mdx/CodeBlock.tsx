'use client'

import { useEffect, useState } from 'react'
import CodeCopyButton from '@/components/mdx/CodeCopyButton'
import { getShikiHighlighter } from '@/lib/shiki'

interface CodeBlockProps {
  language?: string
  title?: string
  code?: string
}

export default function CodeBlock({
  code = '',
  language = 'tsx',
  title = 'Example',
}: CodeBlockProps): JSX.Element {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function highlight(): Promise<void> {
      const highlighter = await getShikiHighlighter()
      const nextHtml = highlighter.codeToHtml(code, {
        lang: language,
        theme: 'github-dark-default',
      })

      if (active) {
        setHtml(nextHtml)
      }
    }

    void highlight()

    return () => {
      active = false
    }
  }, [code, language])

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-border bg-[#16181f] text-slate-100 shadow-panel dark:border-border-dark">
      <div className="flex min-h-11 items-center justify-between border-b border-white/10 px-4">
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-[13px] uppercase tracking-[0.18em] text-slate-400">
            {language}
          </p>
        </div>
        <CodeCopyButton code={code} />
      </div>

      {html ? (
        <div
          className="shiki-code min-h-0 flex-1 overflow-auto p-4 text-[13px] leading-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="min-h-0 flex-1 overflow-auto p-4 text-[13px] leading-6">
          <code>{code}</code>
        </pre>
      )}
    </section>
  )
}
