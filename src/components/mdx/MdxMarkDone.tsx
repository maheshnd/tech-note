import MarkDone from '@/components/mdx/MarkDone'
import type { Track } from '@/types'

interface MdxMarkDoneProps {
  track: Track
  slug: string
  nextHref?: string | null
  nextTrackHref?: string | null
  nextTrackLabel?: string | null
  isLastTopic?: boolean
}

export default function MdxMarkDone(props: MdxMarkDoneProps): JSX.Element {
  return <MarkDone {...props} />
}
