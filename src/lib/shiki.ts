import { createHighlighter, type Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

export function getShikiHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark-default'],
      langs: ['tsx', 'ts', 'jsx', 'js', 'bash', 'html', 'css', 'json', 'md'],
    })
  }

  return highlighterPromise
}
