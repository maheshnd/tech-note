import Quiz from '@/components/mdx/Quiz'

interface MdxQuizProps {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export default function MdxQuiz(props: MdxQuizProps): JSX.Element {
  return <Quiz {...props} />
}
