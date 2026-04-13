import type { Topic, Track, Level } from '@/types'

export type { Topic, Track, Level }

export const trackOrder: Track[] = ['react', 'nextjs', 'javascript']

export const trackLabels: Record<Track, string> = {
  react: 'React',
  nextjs: 'Next.js',
  javascript: 'JavaScript',
}

export const reactTopics: Topic[] = [
  { slug: '01-introduction', title: 'React introduction', level: 'beginner', minutes: 8, stage: 'Stage 1 — Foundation' },
  { slug: '02-jsx', title: 'JSX', level: 'beginner', minutes: 7, stage: 'Stage 1 — Foundation' },
  { slug: '03-components', title: 'Components', level: 'beginner', minutes: 8, stage: 'Stage 1 — Foundation' },
  { slug: '04-props', title: 'Props', level: 'beginner', minutes: 7, stage: 'Stage 2 — Core React' },
  { slug: '05-rendering-ui-dynamically', title: 'Rendering UI dynamically', level: 'beginner', minutes: 8, stage: 'Stage 2 — Core React' },
  { slug: '06-events', title: 'Events in React', level: 'beginner', minutes: 6, stage: 'Stage 2 — Core React' },
  { slug: '07-use-state', title: 'State with useState', level: 'beginner', minutes: 12, stage: 'Stage 2 — Core React' },
  { slug: '08-forms', title: 'Forms in React', level: 'beginner', minutes: 10, stage: 'Stage 2 — Core React' },
  { slug: '09-hooks-overview', title: 'React hooks overview', level: 'beginner', minutes: 6, stage: 'Stage 3 — Hooks' },
  { slug: '10-use-effect', title: 'useEffect', level: 'intermediate', minutes: 14, stage: 'Stage 3 — Hooks' },
  { slug: '11-use-ref', title: 'useRef', level: 'intermediate', minutes: 8, stage: 'Stage 3 — Hooks' },
  { slug: '12-component-lifecycle', title: 'Component lifecycle', level: 'intermediate', minutes: 8, stage: 'Stage 3 — Hooks' },
  { slug: '13-component-communication', title: 'Component communication', level: 'intermediate', minutes: 9, stage: 'Stage 3 — Hooks' },
  { slug: '14-conditional-ui-patterns', title: 'Conditional UI patterns', level: 'intermediate', minutes: 8, stage: 'Stage 3 — Hooks' },
  { slug: '15-state-management-fundamentals', title: 'State management fundamentals', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '16-use-context', title: 'useContext', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '17-use-reducer', title: 'useReducer', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '18-custom-hooks', title: 'Custom hooks', level: 'intermediate', minutes: 12, stage: 'Stage 4 — Intermediate' },
  { slug: '19-styling-in-react', title: 'Styling in React', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '20-react-router', title: 'React Router', level: 'intermediate', minutes: 12, stage: 'Stage 4 — Intermediate' },
  { slug: '21-data-fetching', title: 'Data fetching', level: 'intermediate', minutes: 14, stage: 'Stage 4 — Intermediate' },
  { slug: '22-forms-real-world', title: 'Forms — real world', level: 'intermediate', minutes: 12, stage: 'Stage 5 — Real World' },
  { slug: '23-performance-optimization', title: 'Performance optimization', level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '24-advanced-rendering', title: 'Advanced rendering concepts', level: 'advanced', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '25-error-handling', title: 'Error handling', level: 'intermediate', minutes: 8, stage: 'Stage 5 — Real World' },
  { slug: '26-design-patterns', title: 'React design patterns', level: 'advanced', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '27-accessibility', title: 'Accessibility in React', level: 'intermediate', minutes: 10, stage: 'Stage 5 — Real World' },
  { slug: '28-testing', title: 'Testing React apps', level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '29-typescript-with-react', title: 'TypeScript with React', level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '30-state-management-libraries', title: 'State management libraries', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '31-server-components', title: 'Server components', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '32-nextjs-concepts', title: 'Next.js concepts', level: 'advanced', minutes: 14, stage: 'Stage 6 — Advanced' },
  { slug: '33-folder-structure', title: 'UI architecture & folder structure', level: 'advanced', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '34-api-integration', title: 'API integration architecture', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '35-authentication', title: 'Authentication in React', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '36-realtime-react', title: 'Real-time React', level: 'advanced', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '37-advanced-form-patterns', title: 'Advanced form & UI patterns', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '38-react-internals', title: 'React internals awareness', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '39-production-readiness', title: 'Production readiness', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '40-ecosystem-tools', title: 'React ecosystem tools', level: 'intermediate', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '41-enterprise-thinking', title: 'Enterprise & senior-level thinking', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '42-senior-interview-questions', title: 'Senior interview questions', level: 'advanced', minutes: 14, stage: 'Stage 6 — Advanced' },
  { slug: '43-use-memo-and-use-callback', title: 'useMemo and useCallback', level: 'intermediate', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '44-use-layout-effect-and-effect-events', title: 'useLayoutEffect and useEffectEvent', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '45-use-id-and-imperative-apis', title: 'useId and imperative React APIs', level: 'intermediate', minutes: 10, stage: 'Stage 7 — Modern React' },
  { slug: '46-transitions-and-deferred-rendering', title: 'Transitions and deferred rendering', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '47-suspense-lazy-and-use', title: 'Suspense, lazy, and use()', level: 'advanced', minutes: 14, stage: 'Stage 7 — Modern React' },
  { slug: '48-modern-form-actions', title: 'Modern React form actions', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '49-optimistic-ui', title: 'Optimistic UI with React', level: 'advanced', minutes: 10, stage: 'Stage 7 — Modern React' },
  { slug: '50-external-stores-and-react-compiler', title: 'External stores and React Compiler awareness', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
]

// Planned React curriculum expansion. These topics stay out of the active
// in-app sidebar until their MDX lessons and lesson previews are written.
export const reactPlannedTopics: Topic[] = []

export const nextjsTopics: Topic[] = [
  { slug: '01-what-is-nextjs', title: 'What Next.js is', level: 'beginner', minutes: 8, stage: 'Stage 1 — Foundation' },
  { slug: '02-installation-setup', title: 'Installation and project setup', level: 'beginner', minutes: 8, stage: 'Stage 1 — Foundation' },
  { slug: '03-project-structure', title: 'Project structure', level: 'beginner', minutes: 7, stage: 'Stage 1 — Foundation' },
  { slug: '04-app-router-basics', title: 'App Router basics', level: 'beginner', minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '05-pages-and-layouts', title: 'Pages and layouts', level: 'beginner', minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '06-navigation', title: 'Navigation', level: 'beginner', minutes: 8, stage: 'Stage 2 — App Router' },
  { slug: '07-dynamic-routes', title: 'Dynamic routes', level: 'beginner', minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '08-loading-ui-streaming', title: 'Loading UI and streaming', level: 'intermediate', minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '09-error-handling', title: 'Error handling', level: 'intermediate', minutes: 8, stage: 'Stage 2 — App Router' },
  { slug: '10-not-found-handling', title: 'Not found handling', level: 'beginner', minutes: 6, stage: 'Stage 2 — App Router' },
  { slug: '11-server-components', title: 'Server components', level: 'intermediate', minutes: 12, stage: 'Stage 3 — Server & Client' },
  { slug: '12-client-components', title: 'Client components', level: 'intermediate', minutes: 10, stage: 'Stage 3 — Server & Client' },
  { slug: '13-rendering-fundamentals', title: 'Rendering fundamentals', level: 'intermediate', minutes: 12, stage: 'Stage 3 — Server & Client' },
  { slug: '14-rendering-strategy', title: 'Rendering strategy decisions', level: 'advanced', minutes: 12, stage: 'Stage 3 — Server & Client' },
  { slug: '15-data-fetching', title: 'Data fetching in App Router', level: 'intermediate', minutes: 12, stage: 'Stage 4 — Data' },
  { slug: '16-mutating-data', title: 'Mutating data', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '17-server-actions', title: 'Server actions and server functions', level: 'intermediate', minutes: 12, stage: 'Stage 4 — Data' },
  { slug: '18-route-handlers', title: 'Route handlers', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '19-caching', title: 'Caching', level: 'advanced', minutes: 14, stage: 'Stage 4 — Data' },
  { slug: '20-revalidation', title: 'Revalidation', level: 'advanced', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '21-client-side-fetching', title: 'Client-side data fetching', level: 'intermediate', minutes: 8, stage: 'Stage 4 — Data' },
  { slug: '22-search-params-url-state', title: 'Search params and URL state', level: 'intermediate', minutes: 8, stage: 'Stage 4 — Data' },
  { slug: '23-database-access', title: 'Database access patterns', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '24-metadata-seo', title: 'Metadata and SEO', level: 'intermediate', minutes: 8, stage: 'Stage 5 — UI & Assets' },
  { slug: '25-image-optimization', title: 'Image optimization', level: 'intermediate', minutes: 8, stage: 'Stage 5 — UI & Assets' },
  { slug: '26-font-optimization', title: 'Font optimization', level: 'intermediate', minutes: 6, stage: 'Stage 5 — UI & Assets' },
  { slug: '27-styling', title: 'Styling in Next.js', level: 'beginner', minutes: 8, stage: 'Stage 5 — UI & Assets' },
  { slug: '28-forms', title: 'Forms in Next.js', level: 'intermediate', minutes: 10, stage: 'Stage 5 — UI & Assets' },
  { slug: '29-middleware', title: 'Middleware', level: 'advanced', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '30-authentication', title: 'Authentication in Next.js', level: 'advanced', minutes: 14, stage: 'Stage 6 — Advanced' },
  { slug: '31-api-integration', title: 'API integration architecture', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '32-security-basics', title: 'Security basics', level: 'advanced', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '33-performance', title: 'Performance optimization', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '34-deployment', title: 'Deployment', level: 'intermediate', minutes: 8, stage: 'Stage 6 — Advanced' },
  { slug: '35-testing', title: 'Testing Next.js apps', level: 'advanced', minutes: 12, stage: 'Stage 7 — Senior' },
  { slug: '36-folder-structure-scale', title: 'Folder structure for scale', level: 'advanced', minutes: 10, stage: 'Stage 7 — Senior' },
  { slug: '37-reusable-architecture', title: 'Reusable architecture patterns', level: 'advanced', minutes: 12, stage: 'Stage 7 — Senior' },
  { slug: '38-pages-router-awareness', title: 'Pages Router awareness', level: 'intermediate', minutes: 10, stage: 'Stage 7 — Senior' },
  { slug: '39-upgrading', title: 'Upgrading and version awareness', level: 'advanced', minutes: 8, stage: 'Stage 7 — Senior' },
  { slug: '40-enterprise-thinking', title: 'Enterprise and senior-level thinking', level: 'advanced', minutes: 14, stage: 'Stage 7 — Senior' },
]

export const javascriptTopics: Topic[] = [
  { slug: '01-variables-types', title: 'Variables & types', level: 'beginner', minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '02-functions', title: 'Functions', level: 'beginner', minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '03-arrays', title: 'Arrays', level: 'beginner', minutes: 12, stage: 'Stage 1 — Fundamentals' },
  { slug: '04-objects', title: 'Objects', level: 'beginner', minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '05-es6-features', title: 'ES6+ features', level: 'beginner', minutes: 12, stage: 'Stage 1 — Fundamentals' },
  { slug: '06-promises-async', title: 'Promises & async/await', level: 'intermediate', minutes: 14, stage: 'Stage 2 — Intermediate' },
  { slug: '07-closures', title: 'Closures', level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '08-prototypes', title: 'Prototypes & inheritance', level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '09-event-loop', title: 'Event loop', level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '10-dom', title: 'DOM manipulation', level: 'intermediate', minutes: 10, stage: 'Stage 2 — Intermediate' },
  { slug: '11-modules', title: 'Modules (ESM & CJS)', level: 'intermediate', minutes: 8, stage: 'Stage 2 — Intermediate' },
  { slug: '12-error-handling', title: 'Error handling', level: 'intermediate', minutes: 8, stage: 'Stage 3 — Advanced' },
  { slug: '13-functional-programming', title: 'Functional programming', level: 'advanced', minutes: 14, stage: 'Stage 3 — Advanced' },
  { slug: '14-design-patterns', title: 'JS design patterns', level: 'advanced', minutes: 14, stage: 'Stage 3 — Advanced' },
  { slug: '15-interview-questions', title: 'JS interview questions', level: 'advanced', minutes: 14, stage: 'Stage 3 — Advanced' },
]

export const allTracks: Record<Track, Topic[]> = {
  react: reactTopics,
  nextjs: nextjsTopics,
  javascript: javascriptTopics,
}

export const allTopicEntries = trackOrder.flatMap((track) =>
  allTracks[track].map((topic) => ({
    track,
    ...topic,
  })),
)

export const defaultTopicByTrack: Record<Track, string> = {
  react: reactTopics[0]?.slug ?? '',
  nextjs: nextjsTopics[0]?.slug ?? '',
  javascript: javascriptTopics[0]?.slug ?? '',
}

export function isTrack(value: string): value is Track {
  return value === 'react' || value === 'nextjs' || value === 'javascript'
}

export function getTopic(track: Track, slug: string): Topic | null {
  return allTracks[track].find((topic) => topic.slug === slug) ?? null
}

export function getTopicIndex(track: Track, slug: string): number {
  return allTracks[track].findIndex((topic) => topic.slug === slug)
}

export function getNextTrack(track: Track): Track | null {
  const currentIndex = trackOrder.indexOf(track)

  if (currentIndex === -1 || currentIndex === trackOrder.length - 1) {
    return null
  }

  return trackOrder[currentIndex + 1] ?? null
}

export function getTrackLevelAccent(level: Level): string {
  if (level === 'beginner') return 'green'
  if (level === 'intermediate') return 'amber'
  return 'red'
}
