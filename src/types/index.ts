export type Level = 'beginner' | 'intermediate' | 'advanced'

export type Track = 'react' | 'nextjs' | 'javascript'

export interface Topic {
  slug: string
  title: string
  level: Level
  minutes: number
  stage: string
}

export interface Progress {
  completedSlugs: string[]
  doneCount: number
  percentage: number
  lastVisited: string | null
}
