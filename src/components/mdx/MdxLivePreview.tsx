import LivePreview from '@/components/mdx/LivePreview'

interface MdxLivePreviewProps {
  id: string
  title?: string
  description?: string
}

export default function MdxLivePreview(props: MdxLivePreviewProps): JSX.Element {
  return <LivePreview {...props} />
}
