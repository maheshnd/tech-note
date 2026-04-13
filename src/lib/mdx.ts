import { readFile } from 'node:fs/promises'
import path from 'node:path'
import Callout from '@/components/mdx/Callout'
import ConceptCard from '@/components/mdx/ConceptCard'
import MdxCodeBlock from '@/components/mdx/MdxCodeBlock'
import MdxLivePreview from '@/components/mdx/MdxLivePreview'
import MdxMarkDone from '@/components/mdx/MdxMarkDone'
import MdxQuiz from '@/components/mdx/MdxQuiz'
import {
  previewRegistry,
  type PreviewId,
} from '@/components/mdx/previews/registry'
import { remarkCodeBlocks } from '@/lib/remark-code-blocks'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { ReactElement } from 'react'
import type { Level, Track } from '@/types'

export interface TopicFrontmatter {
  title: string
  description: string
  level: Level
  minutes: number
  stage: string
  slug: string
  track: Track
}

export interface TopicDocument {
  frontmatter: TopicFrontmatter
  content: ReactElement
  lessonPreviews: PreviewEntryWithId[]
}

export interface PreviewEntryWithId {
  id: PreviewId
  title: string
  description: string
  code: string
}

const contentRoot = path.join(process.cwd(), 'content')

const mdxComponents = {
  Callout,
  ConceptCard,
  LivePreview: MdxLivePreview,
  MarkDone: MdxMarkDone,
  MdxCodeBlock,
  Quiz: MdxQuiz,
}

export function getTopicContentPath(track: Track, slug: string): string {
  return path.join(contentRoot, track, `${slug}.mdx`)
}

function getPreviewIds(source: string): PreviewId[] {
  const matches = source.matchAll(/<LivePreview\s+id="([^"]+)"/g)
  const previewIds: PreviewId[] = []

  for (const match of matches) {
    const previewId = match[1]

    if (previewId in previewRegistry) {
      const typedPreviewId = previewId as PreviewId

      if (!previewIds.includes(typedPreviewId)) {
        previewIds.push(typedPreviewId)
      }
    }
  }

  return previewIds.length > 0 ? previewIds : ['topic-shell']
}

export async function loadTopicDocument(track: Track, slug: string): Promise<TopicDocument | null> {
  try {
    const source = await readFile(getTopicContentPath(track, slug), 'utf8')
    const { content, frontmatter } = await compileMDX<TopicFrontmatter>({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkCodeBlocks],
        },
      },
    })

    const lessonPreviews = getPreviewIds(source).map((id) => {
      const preview = previewRegistry[id]

      return {
        id,
        title: preview.title,
        description: preview.description,
        code: preview.code,
      }
    })

    return {
      frontmatter,
      content,
      lessonPreviews,
    }
  } catch {
    return null
  }
}
