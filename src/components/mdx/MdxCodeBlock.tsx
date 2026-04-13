import CodeCopyButton from '@/components/mdx/CodeCopyButton'
import { getShikiHighlighter } from '@/lib/shiki'

interface MdxCodeBlockProps {
  language?: string
  title?: string
  code?: string
}

export default async function MdxCodeBlock({
  code = '',
  language = 'tsx',
  title = 'Example',
}: MdxCodeBlockProps): Promise<JSX.Element> {
  const highlighter = await getShikiHighlighter()
  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: 'github-dark-default',
  })

  return (
    <section className="not-prose my-6 flex min-h-0 flex-col rounded-3xl border border-border bg-[#16181f] text-slate-100 shadow-panel dark:border-border-dark">
      <div className="flex min-h-11 items-center justify-between border-b border-white/10 px-4">
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-[13px] uppercase tracking-[0.18em] text-slate-400">
            {language}
          </p>
        </div>
        <CodeCopyButton code={code} />
      </div>

      <div
        className="shiki-code min-h-0 flex-1 overflow-auto p-4 text-[13px] leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}
