# CLAUDE.md — React Learning Notes App

## Project overview

This is a personal, static learning notes app built with Next.js App Router, MDX, and Tailwind CSS. It covers React (complete core track with a planned modern expansion), Next.js (complete), and JavaScript (complete) as standalone learning tracks. The app is deployed as a fully static site on Vercel or GitHub Pages — no backend, no database, no auth, no API routes.

The goal is to be the single source of truth for learning React, Next.js, and JavaScript — from zero to senior level. Every topic must be so detailed and clear that no other resource is needed.

---

## Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 App Router | Already in Mahesh's stack, static export support |
| Content | MDX (next-mdx-remote or @next/mdx) | Write notes in Markdown, drop React components in |
| Styling | Tailwind CSS | Already in stack, fast utility styling |
| Code highlighting | Shiki | Best-in-class syntax highlighting, theme support |
| Progress tracking | localStorage | Personal use only, no backend needed |
| Deployment | Vercel (primary) / GitHub Pages (fallback) | Free, static, fast |
| Language | TypeScript | Type safety, already in stack |
| Package manager | npm | Keep it simple |

---

## Deployment — static site rules

This app must work as a fully static export. Every decision must respect this constraint.

```js
// next.config.ts
const nextConfig = {
  output: 'export',         // static HTML export
  trailingSlash: true,      // needed for GitHub Pages
  images: {
    unoptimized: true,      // no Next.js image server in static mode
  },
}
```

Rules that follow from this:
- No `getServerSideProps` anywhere
- No API routes
- No server actions
- No dynamic routes that are not statically generated via `generateStaticParams`
- No cookies or server-side sessions
- All data must be read at build time or from localStorage at runtime

---

## Folder structure

```
/
├── CLAUDE.md                          ← this file
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
│
├── content/                           ← all MDX topic files live here
│   ├── react/                         ← React track
│   │   ├── 01-introduction.mdx
│   │   ├── 02-jsx.mdx
│   │   ├── 03-components.mdx
│   │   ├── 04-props.mdx
│   │   ├── 05-rendering-ui-dynamically.mdx
│   │   ├── 06-events.mdx
│   │   ├── 07-use-state.mdx
│   │   ├── 08-forms.mdx
│   │   ├── 09-hooks-overview.mdx
│   │   ├── 10-use-effect.mdx
│   │   ├── 11-use-ref.mdx
│   │   ├── 12-component-lifecycle.mdx
│   │   ├── 13-component-communication.mdx
│   │   ├── 14-conditional-ui-patterns.mdx
│   │   ├── 15-state-management-fundamentals.mdx
│   │   ├── 16-use-context.mdx
│   │   ├── 17-use-reducer.mdx
│   │   ├── 18-custom-hooks.mdx
│   │   ├── 19-styling-in-react.mdx
│   │   ├── 20-react-router.mdx
│   │   ├── 21-data-fetching.mdx
│   │   ├── 22-forms-real-world.mdx
│   │   ├── 23-performance-optimization.mdx
│   │   ├── 24-advanced-rendering.mdx
│   │   ├── 25-error-handling.mdx
│   │   ├── 26-design-patterns.mdx
│   │   ├── 27-accessibility.mdx
│   │   ├── 28-testing.mdx
│   │   ├── 29-typescript-with-react.mdx
│   │   ├── 30-state-management-libraries.mdx
│   │   ├── 31-server-components.mdx
│   │   ├── 32-nextjs-concepts.mdx
│   │   ├── 33-folder-structure.mdx
│   │   ├── 34-api-integration.mdx
│   │   ├── 35-authentication.mdx
│   │   ├── 36-realtime-react.mdx
│   │   ├── 37-advanced-form-patterns.mdx
│   │   ├── 38-react-internals.mdx
│   │   ├── 39-production-readiness.mdx
│   │   ├── 40-ecosystem-tools.mdx
│   │   ├── 41-enterprise-thinking.mdx
│   │   └── 42-senior-interview-questions.mdx
│   │   │
│   │   │   // Planned modern React expansion topics
│   │   ├── 43-use-memo-and-use-callback.mdx
│   │   ├── 44-use-layout-effect-and-effect-events.mdx
│   │   ├── 45-use-id-and-imperative-apis.mdx
│   │   ├── 46-transitions-and-deferred-rendering.mdx
│   │   ├── 47-suspense-lazy-and-use.mdx
│   │   ├── 48-modern-form-actions.mdx
│   │   ├── 49-optimistic-ui.mdx
│   │   └── 50-external-stores-and-react-compiler.mdx
│   │
│   ├── nextjs/                        ← Next.js track (after React complete)
│   │   ├── 01-what-is-nextjs.mdx
│   │   ├── 02-installation-setup.mdx
│   │   ├── 03-project-structure.mdx
│   │   ├── 04-app-router-basics.mdx
│   │   ├── 05-pages-and-layouts.mdx
│   │   ├── 06-navigation.mdx
│   │   ├── 07-dynamic-routes.mdx
│   │   ├── 08-loading-ui-streaming.mdx
│   │   ├── 09-error-handling.mdx
│   │   ├── 10-not-found-handling.mdx
│   │   ├── 11-server-components.mdx
│   │   ├── 12-client-components.mdx
│   │   ├── 13-rendering-fundamentals.mdx
│   │   ├── 14-rendering-strategy.mdx
│   │   ├── 15-data-fetching.mdx
│   │   ├── 16-mutating-data.mdx
│   │   ├── 17-server-actions.mdx
│   │   ├── 18-route-handlers.mdx
│   │   ├── 19-caching.mdx
│   │   ├── 20-revalidation.mdx
│   │   ├── 21-client-side-fetching.mdx
│   │   ├── 22-search-params-url-state.mdx
│   │   ├── 23-database-access.mdx
│   │   ├── 24-metadata-seo.mdx
│   │   ├── 25-image-optimization.mdx
│   │   ├── 26-font-optimization.mdx
│   │   ├── 27-styling.mdx
│   │   ├── 28-forms.mdx
│   │   ├── 29-middleware.mdx
│   │   ├── 30-authentication.mdx
│   │   ├── 31-api-integration.mdx
│   │   ├── 32-security-basics.mdx
│   │   ├── 33-performance.mdx
│   │   ├── 34-deployment.mdx
│   │   ├── 35-testing.mdx
│   │   ├── 36-folder-structure-scale.mdx
│   │   ├── 37-reusable-architecture.mdx
│   │   ├── 38-pages-router-awareness.mdx
│   │   ├── 39-upgrading.mdx
│   │   └── 40-enterprise-thinking.mdx
│   │
│   └── javascript/                    ← JavaScript track
│       ├── 01-variables-types.mdx
│       ├── 02-functions.mdx
│       ├── 03-arrays.mdx
│       ├── 04-objects.mdx
│       ├── 05-es6-features.mdx
│       ├── 06-promises-async.mdx
│       ├── 07-closures.mdx
│       ├── 08-prototypes.mdx
│       ├── 09-event-loop.mdx
│       ├── 10-dom.mdx
│       ├── 11-modules.mdx
│       ├── 12-error-handling.mdx
│       ├── 13-functional-programming.mdx
│       ├── 14-design-patterns.mdx
│       └── 15-interview-questions.mdx
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← root layout, sidebar + main
│   │   ├── page.tsx                   ← redirects to /react/01-introduction
│   │   ├── [track]/
│   │   │   └── [slug]/
│   │   │       └── page.tsx           ← renders a topic MDX file
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx            ← topic list, progress, stages
│   │   │   ├── TopBar.tsx             ← topic title, level badge, time
│   │   │   └── SplitPane.tsx          ← left notes / right code layout
│   │   │
│   │   ├── mdx/                       ← components used inside MDX files
│   │   │   ├── Quiz.tsx               ← MCQ quiz at end of each topic
│   │   │   ├── LivePreview.tsx        ← interactive code demo
│   │   │   ├── CodeBlock.tsx          ← syntax highlighted code with copy button
│   │   │   ├── Callout.tsx            ← tip / warning / interview / mistake boxes
│   │   │   ├── ConceptCard.tsx        ← highlighted key concept block
│   │   │   └── MarkDone.tsx           ← "Mark as done" button with progress update
│   │   │
│   │   └── ui/
│   │       ├── ProgressBar.tsx
│   │       ├── Badge.tsx              ← beginner / intermediate / advanced
│   │       └── CheckIcon.tsx
│   │
│   ├── lib/
│   │   ├── mdx.ts                     ← reads and parses MDX files at build time
│   │   ├── topics.ts                  ← topic manifest — all metadata
│   │   ├── progress.ts                ← localStorage read/write helpers
│   │   └── utils.ts                   ← cn() and other small helpers
│   │
│   └── types/
│       └── index.ts                   ← Topic, Track, Progress types
│
└── public/
    └── (static assets if any)
```

---

## Topic manifest — `src/lib/topics.ts`

This is the single source of truth for all topic metadata. The MDX files hold content. This file holds structure.

```ts
export type Level = 'beginner' | 'intermediate' | 'advanced'

export type Track = 'react' | 'nextjs' | 'javascript'

export interface Topic {
  slug: string          // matches MDX filename without extension
  title: string
  level: Level
  minutes: number       // estimated read time
  stage: string         // grouping label in sidebar
}

export const reactTopics: Topic[] = [
  // Stage 1 — Foundation
  { slug: '01-introduction',              title: 'React introduction',             level: 'beginner',     minutes: 8,  stage: 'Stage 1 — Foundation' },
  { slug: '02-jsx',                       title: 'JSX',                            level: 'beginner',     minutes: 7,  stage: 'Stage 1 — Foundation' },
  { slug: '03-components',               title: 'Components',                     level: 'beginner',     minutes: 8,  stage: 'Stage 1 — Foundation' },

  // Stage 2 — Core React
  { slug: '04-props',                     title: 'Props',                          level: 'beginner',     minutes: 7,  stage: 'Stage 2 — Core React' },
  { slug: '05-rendering-ui-dynamically', title: 'Rendering UI dynamically',       level: 'beginner',     minutes: 8,  stage: 'Stage 2 — Core React' },
  { slug: '06-events',                   title: 'Events in React',                level: 'beginner',     minutes: 6,  stage: 'Stage 2 — Core React' },
  { slug: '07-use-state',                title: 'State with useState',            level: 'beginner',     minutes: 12, stage: 'Stage 2 — Core React' },
  { slug: '08-forms',                    title: 'Forms in React',                 level: 'beginner',     minutes: 10, stage: 'Stage 2 — Core React' },

  // Stage 3 — Hooks & Lifecycle
  { slug: '09-hooks-overview',           title: 'React hooks overview',           level: 'beginner',     minutes: 6,  stage: 'Stage 3 — Hooks' },
  { slug: '10-use-effect',               title: 'useEffect',                      level: 'intermediate', minutes: 14, stage: 'Stage 3 — Hooks' },
  { slug: '11-use-ref',                  title: 'useRef',                         level: 'intermediate', minutes: 8,  stage: 'Stage 3 — Hooks' },
  { slug: '12-component-lifecycle',      title: 'Component lifecycle',            level: 'intermediate', minutes: 8,  stage: 'Stage 3 — Hooks' },
  { slug: '13-component-communication',  title: 'Component communication',        level: 'intermediate', minutes: 9,  stage: 'Stage 3 — Hooks' },
  { slug: '14-conditional-ui-patterns',  title: 'Conditional UI patterns',        level: 'intermediate', minutes: 8,  stage: 'Stage 3 — Hooks' },

  // Stage 4 — Intermediate React
  { slug: '15-state-management-fundamentals', title: 'State management fundamentals', level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '16-use-context',              title: 'useContext',                     level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '17-use-reducer',              title: 'useReducer',                     level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '18-custom-hooks',             title: 'Custom hooks',                   level: 'intermediate', minutes: 12, stage: 'Stage 4 — Intermediate' },
  { slug: '19-styling-in-react',         title: 'Styling in React',               level: 'intermediate', minutes: 10, stage: 'Stage 4 — Intermediate' },
  { slug: '20-react-router',             title: 'React Router',                   level: 'intermediate', minutes: 12, stage: 'Stage 4 — Intermediate' },
  { slug: '21-data-fetching',            title: 'Data fetching',                  level: 'intermediate', minutes: 14, stage: 'Stage 4 — Intermediate' },

  // Stage 5 — Real-World React
  { slug: '22-forms-real-world',         title: 'Forms — real world',             level: 'intermediate', minutes: 12, stage: 'Stage 5 — Real World' },
  { slug: '23-performance-optimization', title: 'Performance optimization',       level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '24-advanced-rendering',       title: 'Advanced rendering concepts',    level: 'advanced',     minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '25-error-handling',           title: 'Error handling',                 level: 'intermediate', minutes: 8,  stage: 'Stage 5 — Real World' },
  { slug: '26-design-patterns',          title: 'React design patterns',          level: 'advanced',     minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '27-accessibility',            title: 'Accessibility in React',         level: 'intermediate', minutes: 10, stage: 'Stage 5 — Real World' },
  { slug: '28-testing',                  title: 'Testing React apps',             level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },
  { slug: '29-typescript-with-react',    title: 'TypeScript with React',          level: 'intermediate', minutes: 14, stage: 'Stage 5 — Real World' },

  // Stage 6 — Advanced / Senior
  { slug: '30-state-management-libraries', title: 'State management libraries',  level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '31-server-components',        title: 'Server components',              level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '32-nextjs-concepts',          title: 'Next.js concepts',               level: 'advanced',     minutes: 14, stage: 'Stage 6 — Advanced' },
  { slug: '33-folder-structure',         title: 'UI architecture & folder structure', level: 'advanced', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '34-api-integration',          title: 'API integration architecture',   level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '35-authentication',           title: 'Authentication in React',        level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '36-realtime-react',           title: 'Real-time React',                level: 'advanced',     minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '37-advanced-form-patterns',   title: 'Advanced form & UI patterns',    level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '38-react-internals',          title: 'React internals awareness',      level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '39-production-readiness',     title: 'Production readiness',           level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '40-ecosystem-tools',          title: 'React ecosystem tools',          level: 'intermediate', minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '41-enterprise-thinking',      title: 'Enterprise & senior-level thinking', level: 'advanced', minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '42-senior-interview-questions', title: 'Senior interview questions',   level: 'advanced',     minutes: 14, stage: 'Stage 6 — Advanced' },
]

export const reactPlannedTopics: Topic[] = [
  // Stage 7 — Modern React
  { slug: '43-use-memo-and-use-callback', title: 'useMemo and useCallback', level: 'intermediate', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '44-use-layout-effect-and-effect-events', title: 'useLayoutEffect and useEffectEvent', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '45-use-id-and-imperative-apis', title: 'useId and imperative React APIs', level: 'intermediate', minutes: 10, stage: 'Stage 7 — Modern React' },
  { slug: '46-transitions-and-deferred-rendering', title: 'Transitions and deferred rendering', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '47-suspense-lazy-and-use', title: 'Suspense, lazy, and use()', level: 'advanced', minutes: 14, stage: 'Stage 7 — Modern React' },
  { slug: '48-modern-form-actions', title: 'Modern React form actions', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
  { slug: '49-optimistic-ui', title: 'Optimistic UI with React', level: 'advanced', minutes: 10, stage: 'Stage 7 — Modern React' },
  { slug: '50-external-stores-and-react-compiler', title: 'External stores and React Compiler awareness', level: 'advanced', minutes: 12, stage: 'Stage 7 — Modern React' },
]

export const nextjsTopics: Topic[] = [
  // Stage 1 — Foundation
  { slug: '01-what-is-nextjs',          title: 'What Next.js is',                   level: 'beginner',     minutes: 8,  stage: 'Stage 1 — Foundation' },
  { slug: '02-installation-setup',      title: 'Installation and project setup',     level: 'beginner',     minutes: 8,  stage: 'Stage 1 — Foundation' },
  { slug: '03-project-structure',       title: 'Project structure',                  level: 'beginner',     minutes: 7,  stage: 'Stage 1 — Foundation' },

  // Stage 2 — App Router Core
  { slug: '04-app-router-basics',       title: 'App Router basics',                  level: 'beginner',     minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '05-pages-and-layouts',       title: 'Pages and layouts',                  level: 'beginner',     minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '06-navigation',              title: 'Navigation',                          level: 'beginner',     minutes: 8,  stage: 'Stage 2 — App Router' },
  { slug: '07-dynamic-routes',          title: 'Dynamic routes',                      level: 'beginner',     minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '08-loading-ui-streaming',    title: 'Loading UI and streaming',            level: 'intermediate', minutes: 10, stage: 'Stage 2 — App Router' },
  { slug: '09-error-handling',          title: 'Error handling',                      level: 'intermediate', minutes: 8,  stage: 'Stage 2 — App Router' },
  { slug: '10-not-found-handling',      title: 'Not found handling',                  level: 'beginner',     minutes: 6,  stage: 'Stage 2 — App Router' },

  // Stage 3 — Server and Client
  { slug: '11-server-components',       title: 'Server components',                   level: 'intermediate', minutes: 12, stage: 'Stage 3 — Server & Client' },
  { slug: '12-client-components',       title: 'Client components',                   level: 'intermediate', minutes: 10, stage: 'Stage 3 — Server & Client' },
  { slug: '13-rendering-fundamentals',  title: 'Rendering fundamentals',              level: 'intermediate', minutes: 12, stage: 'Stage 3 — Server & Client' },
  { slug: '14-rendering-strategy',      title: 'Rendering strategy decisions',         level: 'advanced',     minutes: 12, stage: 'Stage 3 — Server & Client' },

  // Stage 4 — Data
  { slug: '15-data-fetching',           title: 'Data fetching in App Router',         level: 'intermediate', minutes: 12, stage: 'Stage 4 — Data' },
  { slug: '16-mutating-data',           title: 'Mutating data',                       level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '17-server-actions',          title: 'Server actions and server functions',  level: 'intermediate', minutes: 12, stage: 'Stage 4 — Data' },
  { slug: '18-route-handlers',          title: 'Route handlers',                       level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '19-caching',                 title: 'Caching',                              level: 'advanced',     minutes: 14, stage: 'Stage 4 — Data' },
  { slug: '20-revalidation',            title: 'Revalidation',                         level: 'advanced',     minutes: 10, stage: 'Stage 4 — Data' },
  { slug: '21-client-side-fetching',    title: 'Client-side data fetching',            level: 'intermediate', minutes: 8,  stage: 'Stage 4 — Data' },
  { slug: '22-search-params-url-state', title: 'Search params and URL state',          level: 'intermediate', minutes: 8,  stage: 'Stage 4 — Data' },
  { slug: '23-database-access',         title: 'Database access patterns',             level: 'intermediate', minutes: 10, stage: 'Stage 4 — Data' },

  // Stage 5 — UI and Assets
  { slug: '24-metadata-seo',            title: 'Metadata and SEO',                     level: 'intermediate', minutes: 8,  stage: 'Stage 5 — UI & Assets' },
  { slug: '25-image-optimization',      title: 'Image optimization',                   level: 'intermediate', minutes: 8,  stage: 'Stage 5 — UI & Assets' },
  { slug: '26-font-optimization',       title: 'Font optimization',                    level: 'intermediate', minutes: 6,  stage: 'Stage 5 — UI & Assets' },
  { slug: '27-styling',                 title: 'Styling in Next.js',                   level: 'beginner',     minutes: 8,  stage: 'Stage 5 — UI & Assets' },
  { slug: '28-forms',                   title: 'Forms in Next.js',                     level: 'intermediate', minutes: 10, stage: 'Stage 5 — UI & Assets' },

  // Stage 6 — Advanced
  { slug: '29-middleware',              title: 'Middleware',                            level: 'advanced',     minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '30-authentication',          title: 'Authentication in Next.js',            level: 'advanced',     minutes: 14, stage: 'Stage 6 — Advanced' },
  { slug: '31-api-integration',         title: 'API integration architecture',         level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '32-security-basics',         title: 'Security basics',                      level: 'advanced',     minutes: 10, stage: 'Stage 6 — Advanced' },
  { slug: '33-performance',             title: 'Performance optimization',             level: 'advanced',     minutes: 12, stage: 'Stage 6 — Advanced' },
  { slug: '34-deployment',              title: 'Deployment',                            level: 'intermediate', minutes: 8,  stage: 'Stage 6 — Advanced' },

  // Stage 7 — Senior Level
  { slug: '35-testing',                 title: 'Testing Next.js apps',                 level: 'advanced',     minutes: 12, stage: 'Stage 7 — Senior' },
  { slug: '36-folder-structure-scale',  title: 'Folder structure for scale',           level: 'advanced',     minutes: 10, stage: 'Stage 7 — Senior' },
  { slug: '37-reusable-architecture',   title: 'Reusable architecture patterns',       level: 'advanced',     minutes: 12, stage: 'Stage 7 — Senior' },
  { slug: '38-pages-router-awareness',  title: 'Pages Router awareness',               level: 'intermediate', minutes: 10, stage: 'Stage 7 — Senior' },
  { slug: '39-upgrading',               title: 'Upgrading and version awareness',       level: 'advanced',     minutes: 8,  stage: 'Stage 7 — Senior' },
  { slug: '40-enterprise-thinking',     title: 'Enterprise and senior-level thinking', level: 'advanced',     minutes: 14, stage: 'Stage 7 — Senior' },
]

export const javascriptTopics: Topic[] = [
  { slug: '01-variables-types',         title: 'Variables & types',            level: 'beginner',     minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '02-functions',               title: 'Functions',                    level: 'beginner',     minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '03-arrays',                  title: 'Arrays',                       level: 'beginner',     minutes: 12, stage: 'Stage 1 — Fundamentals' },
  { slug: '04-objects',                 title: 'Objects',                      level: 'beginner',     minutes: 10, stage: 'Stage 1 — Fundamentals' },
  { slug: '05-es6-features',            title: 'ES6+ features',                level: 'beginner',     minutes: 12, stage: 'Stage 1 — Fundamentals' },
  { slug: '06-promises-async',          title: 'Promises & async/await',       level: 'intermediate', minutes: 14, stage: 'Stage 2 — Intermediate' },
  { slug: '07-closures',               title: 'Closures',                     level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '08-prototypes',             title: 'Prototypes & inheritance',      level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '09-event-loop',             title: 'Event loop',                   level: 'intermediate', minutes: 12, stage: 'Stage 2 — Intermediate' },
  { slug: '10-dom',                    title: 'DOM manipulation',              level: 'intermediate', minutes: 10, stage: 'Stage 2 — Intermediate' },
  { slug: '11-modules',               title: 'Modules (ESM & CJS)',            level: 'intermediate', minutes: 8,  stage: 'Stage 2 — Intermediate' },
  { slug: '12-error-handling',        title: 'Error handling',                level: 'intermediate', minutes: 8,  stage: 'Stage 3 — Advanced' },
  { slug: '13-functional-programming',title: 'Functional programming',        level: 'advanced',     minutes: 14, stage: 'Stage 3 — Advanced' },
  { slug: '14-design-patterns',       title: 'JS design patterns',            level: 'advanced',     minutes: 14, stage: 'Stage 3 — Advanced' },
  { slug: '15-interview-questions',   title: 'JS interview questions',        level: 'advanced',     minutes: 14, stage: 'Stage 3 — Advanced' },
]

export const allTracks: Record<Track, Topic[]> = {
  react: reactTopics,
  nextjs: nextjsTopics,
  javascript: javascriptTopics,
}
```

Note: `reactTopics` is the active in-app curriculum. `reactPlannedTopics` is the approved modernization backlog. Keep planned topics out of the live sidebar until their MDX lessons and lesson previews are written to the same quality bar as the existing React track.

---

## MDX topic file format — strict template

Every single MDX file must follow this exact structure. No exceptions. This consistency is what makes the app feel like a proper course.

```mdx
---
title: "useState — state management"
description: "Learn how useState works, when to use it, common mistakes, and every pattern you need."
level: "beginner"
minutes: 12
stage: "Stage 2 — Core React"
slug: "07-use-state"
track: "react"
---

## Why this exists

[Plain English explanation. No jargon. Explain the PROBLEM first, then the solution.
Minimum 3-4 sentences. A complete beginner must understand this section alone.]

## How it works

[Step by step explanation of the concept. Explain the mental model, not just the API.
Use analogies where helpful.]

## Syntax

```tsx
// minimal syntax reference — just the shape, no logic yet
const [value, setValue] = useState(initialValue)
```

## Code examples

### Example 1 — [simplest possible case]
[1-2 sentence intro before code]

```tsx
// full working example with comments
```

[1-2 sentence explanation after code — what to notice]

### Example 2 — [next level of complexity]

```tsx
// full working example
```

### Example 3 — [real world / advanced usage]

```tsx
// full working example
```

[Continue adding examples until the topic is truly exhausted.
useState needs at minimum: string state, number state, boolean state,
array state, object state, multiple states, derived state, functional update,
controlled input, lifted state.]

## Common mistakes

<Callout type="mistake">
**Mistake:** [What beginners do wrong]
**Fix:** [What to do instead]
**Why:** [Brief reason]
</Callout>

[Add a Callout for every common mistake. At least 3-4 per topic.]

## How this is used in real projects

[2-3 paragraphs describing real usage. Not toy examples — actual patterns
you would see in a production codebase like Mahesh's insurance SaaS projects.]

## Interview questions

<Callout type="interview">
**Q:** [Question interviewers actually ask]
**A:** [Solid, complete answer — 3-5 sentences minimum]
</Callout>

[Add at least 3-5 interview Q&As per topic]

## Quick check

<Quiz
  question="[question]"
  options={["option a", "option b", "option c", "option d"]}
  correct={1}
  explanation="[why that answer is correct — this is important for learning]"
/>

[Add 2-3 quizzes per topic]

<MarkDone slug="07-use-state" track="react" />
```

---

## MDX components reference

These are the React components available inside every MDX file.

### `<Callout type="..." />`

```tsx
// types: "tip" | "warning" | "mistake" | "interview" | "note"
<Callout type="tip">
  Always use the functional form setCount(prev => prev + 1) when new state
  depends on old state. This avoids stale closure bugs.
</Callout>

<Callout type="warning">
  Never mutate state directly. React will not detect the change and the UI
  will not update.
</Callout>

<Callout type="mistake">
  **Mistake:** count = count + 1
  **Fix:** setCount(count + 1) or setCount(prev => prev + 1)
</Callout>

<Callout type="interview">
  **Q:** What is the difference between state and a regular variable?
  **A:** A regular variable change is invisible to React — no re-render happens.
  Calling the state setter function signals React to re-render the component
  with the new value.
</Callout>
```

### `<Quiz />`

```tsx
<Quiz
  question="Which of these correctly updates state based on the previous value?"
  options={[
    "setCount(count + 1)",
    "setCount(prev => prev + 1)",
    "count = count + 1",
    "setState(count++)"
  ]}
  correct={1}
  explanation="Option B is correct. When new state depends on old state, always use
  the functional form. This ensures you always get the latest state value,
  not a stale closure snapshot."
/>
```

### `<LivePreview />`

```tsx
// For interactive demos embedded in the note
<LivePreview id="counter-basic" />
<LivePreview id="form-controlled" />
<LivePreview id="todo-list" />
```

Live preview IDs are registered in `src/components/mdx/LivePreview.tsx` as a map of id → component.

### `<MarkDone />`

```tsx
// Always at the very bottom of every MDX file
<MarkDone slug="07-use-state" track="react" />
```

### `<CodeBlock />` (auto — used by MDX code fences)

Code fences (triple backtick) are automatically rendered through the CodeBlock component which uses Shiki for syntax highlighting and adds a copy button.

---

## Progress system — `src/lib/progress.ts`

```ts
// localStorage key structure
// "progress:react:07-use-state" = "done"
// "progress:react" = { lastVisited: "07-use-state" }

const KEY = (track: string, slug: string) => `progress:${track}:${slug}`
const TRACK_KEY = (track: string) => `progress:${track}`

export function markDone(track: string, slug: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY(track, slug), 'done')
}

export function isDone(track: string, slug: string): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(KEY(track, slug)) === 'done'
}

export function getProgress(track: string, topics: Topic[]): number {
  const done = topics.filter(t => isDone(track, t.slug)).length
  return Math.round((done / topics.length) * 100)
}

export function saveLastVisited(track: string, slug: string): void {
  if (typeof window === 'undefined') return
  const data = JSON.parse(localStorage.getItem(TRACK_KEY(track)) || '{}')
  localStorage.setItem(TRACK_KEY(track), JSON.stringify({ ...data, lastVisited: slug }))
}

export function getLastVisited(track: string): string | null {
  if (typeof window === 'undefined') return null
  const data = JSON.parse(localStorage.getItem(TRACK_KEY(track)) || '{}')
  return data.lastVisited || null
}
```

---

## Route structure

```
/                              → redirects to /react/01-introduction
/react/[slug]                  → React topic page
/nextjs/[slug]                 → Next.js topic page
/javascript/[slug]             → JavaScript topic page
```

Static params generated at build time:

```ts
// src/app/[track]/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    ...reactTopics.map(t => ({ track: 'react', slug: t.slug })),
    ...nextjsTopics.map(t => ({ track: 'nextjs', slug: t.slug })),
    ...javascriptTopics.map(t => ({ track: 'javascript', slug: t.slug })),
  ]
}
```

---

## UI layout rules

The app has one layout used everywhere:

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR — track switcher (React / Next.js / JS) + topic title + level badge + time │
├───────────────────┬─────────────────────────────────────┤
│                   │                                     │
│  SIDEBAR          │  SPLIT PANE                         │
│  - progress bar   │  LEFT (55%): MDX notes              │
│  - stage groups   │  ┌───────────────────────────────┐  │
│  - topic list     │  │ Why / How / Examples /         │  │
│  - checkmarks     │  │ Mistakes / Interview / Quiz    │  │
│  - time per topic │  └───────────────────────────────┘  │
│                   │  RIGHT (45%): Code + Live Preview   │
│                   │  ┌───────────────────────────────┐  │
│                   │  │ Shiki code block + copy btn   │  │
│                   │  ├───────────────────────────────┤  │
│                   │  │ Live preview iframe           │  │
│                   │  └───────────────────────────────┘  │
└───────────────────┴─────────────────────────────────────┘
```

On mobile (< 768px): sidebar collapses to a drawer. Split pane becomes stacked — notes on top, code below as a tab.

---

## Content rules — non-negotiable

These rules apply to every MDX file written for this app. This is what makes it the single source of truth.

**1. Explain the problem before the solution.**
Never start with "useState is a hook that...". Start with "When you write `let count = 0` inside a component, React forgets that value after every render. That's the problem useState solves."

**2. Every concept needs multiple code examples.**
- Minimum 3 examples per topic
- Start with the absolute simplest case
- Each example adds one new thing
- Examples must be complete and runnable — no `...` placeholders that skip important parts
- Add inline comments to every non-obvious line

**3. useState specifically needs these examples (minimum):**
- Single number state (counter)
- Single string state (input)
- Boolean state (show/hide toggle)
- Array state (todo list — add, remove, update item)
- Object state (form with multiple fields)
- Multiple independent state values
- Functional update form (`prev =>`)
- Derived values (don't store what you can compute)
- Lifted state (shared between siblings)
- Controlled input pattern
- Real-world example (a complete mini feature)

**4. Every topic must have interview questions.**
Minimum 3, maximum 8. Write the full answer — not just the question. Answers must be 3-5 sentences. These are the questions that come up in actual React interviews.

**5. Callouts are mandatory for:**
- Common mistakes (at least 3 per topic)
- Tips that are not obvious
- Warnings about dangerous patterns
- Interview angles

**6. Language must be simple.**
Write like a senior developer explaining to a smart junior. No academic language. No "it is important to note that". Just clear, direct sentences. Short paragraphs. Use "you" not "the developer".

**7. Real-world context is required.**
After every concept, add a paragraph about where you actually see this in production. Reference patterns from insurance SaaS, dashboards, form-heavy apps — the kind of work Mahesh does at Synechron.

---

## Build and deploy commands

```bash
# install
npm install

# dev server
npm run dev

# build static site
npm run build        # outputs to /out folder

# deploy to Vercel
vercel --prod        # just push to main branch if connected

# deploy to GitHub Pages (if needed)
# set output: 'export' and trailingSlash: true in next.config.ts
# push /out to gh-pages branch
```

---

## Phase plan

### Phase 1 — App shell (2-3 days)
- Next.js project setup with TypeScript and Tailwind
- Static export config
- Layout: sidebar + topbar + split pane
- Topic manifest wired to sidebar
- Progress bar and localStorage progress
- Navigation between topics
- No real MDX yet — use placeholder content

### Phase 2 — MDX pipeline (1-2 days)
- Install and configure @next/mdx or next-mdx-remote
- Build CodeBlock with Shiki highlighting + copy button
- Build Callout component (all types)
- Build Quiz component with answer reveal and explanation
- Build MarkDone button
- Build LivePreview with first 3-4 demos
- Write first 5 real MDX topics to test pipeline end to end

### Phase 3 — React content (2-3 weeks)
- Write all 42 React MDX topics
- Follow content rules strictly — every topic fully exhausted
- Add LivePreview demos for key topics
- Use Claude to draft each topic, then review and edit
- After the core 42 are complete, add the modern React expansion backlog:
  - useMemo and useCallback
  - useLayoutEffect and useEffectEvent
  - useId and imperative React APIs
  - transitions and deferred rendering
  - Suspense, lazy, and use()
  - modern form actions
  - optimistic UI
  - external stores and React Compiler awareness

### Phase 4 — Next.js content (1 week)
- Write all 16 Next.js MDX topics
- Same quality bar as React

### Phase 5 — JavaScript content (1 week)
- Write all 15 JavaScript MDX topics
- Same quality bar

### Phase 6 — Polish
- Mobile layout (sidebar drawer, stacked pane)
- Search across topics
- Keyboard navigation (j/k for prev/next topic)
- Print / PDF export per topic
- Dark mode (Tailwind dark: classes)

---

## Key decisions and why

| Decision | Reason |
|---|---|
| Static export | No backend needed for personal use. Deploy anywhere for free. |
| MDX for content | Content and code in one file. Easy to add topics. No database. |
| localStorage for progress | Single user, single device. Simple. Zero backend. |
| No auth | Personal use only. No need. |
| Shiki for code highlighting | Best quality. Works at build time. No client JS cost. |
| One layout for all tracks | Consistent experience. Less code to maintain. |
| Topic manifest in TypeScript | Type-safe. Auto-complete. Single source of truth for metadata. |
| Numbered MDX filenames | Natural sort order. Easy to see sequence at a glance. |

---

## What Claude should do when asked to write a topic

When asked to write content for a topic (e.g. "write the useState MDX file"):

1. Follow the MDX template exactly — every section in order
2. Start with the problem, not the API
3. Write minimum 3 code examples, building in complexity
4. For useState: cover all 11 example types listed in content rules
5. Write all Callouts — mistakes, tips, warnings, interview
6. Write minimum 3 Quiz questions with full explanations
7. End with MarkDone component
8. Keep language simple and direct
9. Add real-world context — insurance SaaS, dashboards, forms
10. Do not skip any section. Do not use placeholder text.
