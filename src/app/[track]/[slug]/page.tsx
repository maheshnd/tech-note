import ContentErrorBoundary from '@/components/layout/ContentErrorBoundary'
import SplitPane from '@/components/layout/SplitPane'
import TopBar from '@/components/layout/TopBar'
import { loadTopicDocument } from '@/lib/mdx'
import {
  allTopicEntries,
  allTracks,
  getTopic,
  getTopicIndex,
  isTrack,
} from '@/lib/topics'
import type { Topic, Track } from '@/types'
import { redirect } from 'next/navigation'

function buildTopicHref(track: Track, slug: string): string {
  return `/${track}/${slug}`
}

function getNavigationTopic(
  topics: Topic[],
  currentIndex: number,
  direction: 'previous' | 'next',
): Topic | null {
  if (currentIndex < 0) return null

  const offset = direction === 'previous' ? -1 : 1
  return topics[currentIndex + offset] ?? null
}

interface TopicPageProps {
  params: {
    track: string
    slug: string
  }
}

export function generateStaticParams(): Array<{ track: Track; slug: string }> {
  return allTopicEntries.map(({ track, slug }) => ({
    track,
    slug,
  }))
}

export default async function TopicPage({
  params,
}: TopicPageProps): Promise<JSX.Element> {
  if (!isTrack(params.track)) {
    redirect('/react/01-introduction')
  }

  const track = params.track
  const topics = allTracks[track]
  const topic = getTopic(track, params.slug)
  const currentIndex = topic ? getTopicIndex(track, params.slug) : -1
  const previousTopic = getNavigationTopic(topics, currentIndex, 'previous')
  const nextTopic = getNavigationTopic(topics, currentIndex, 'next')
  const document = topic ? await loadTopicDocument(track, topic.slug) : null

  return (
    <div className="flex min-h-screen flex-1 flex-col md:min-h-0">
      <TopBar track={track} topic={topic} />
      <ContentErrorBoundary>
        <SplitPane
          track={track}
          topic={topic}
          notesContent={document?.content ?? null}
          lessonPreviews={
            document?.lessonPreviews ?? [
              {
                id: 'topic-shell',
                title: 'Lesson preview',
                description: 'This lesson does not have MDX content yet.',
                code: `export default function MissingTopicNote() {\n  return <p>Content coming soon.</p>\n}`,
              },
            ]
          }
          previousHref={previousTopic ? buildTopicHref(track, previousTopic.slug) : null}
          previousTitle={previousTopic?.title ?? null}
          nextHref={nextTopic ? buildTopicHref(track, nextTopic.slug) : null}
          nextTitle={nextTopic?.title ?? null}
          nextTrackHref={null}
          nextTrackLabel={null}
        />
      </ContentErrorBoundary>
    </div>
  )
}
