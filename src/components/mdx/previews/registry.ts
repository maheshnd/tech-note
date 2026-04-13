import type { ComponentType } from 'react'
import ComponentCommunicationPreview, {
  componentCommunicationPreviewSource,
} from '@/components/mdx/previews/ComponentCommunicationPreview'
import ConditionalUiPreview, {
  conditionalUiPreviewSource,
} from '@/components/mdx/previews/ConditionalUiPreview'
import ComponentComposerPreview, {
  componentComposerPreviewSource,
} from '@/components/mdx/previews/ComponentComposerPreview'
import ControlledInputPreview, {
  controlledInputPreviewSource,
} from '@/components/mdx/previews/ControlledInputPreview'
import CustomHooksPreview, {
  customHooksPreviewSource,
} from '@/components/mdx/previews/CustomHooksPreview'
import DataFetchingPreview, {
  dataFetchingPreviewSource,
} from '@/components/mdx/previews/DataFetchingPreview'
import DesignPatternsPreview, {
  designPatternsPreviewSource,
} from '@/components/mdx/previews/DesignPatternsPreview'
import EnterpriseThinkingPreview, {
  enterpriseThinkingPreviewSource,
} from '@/components/mdx/previews/EnterpriseThinkingPreview'
import EcosystemToolsPreview, {
  ecosystemToolsPreviewSource,
} from '@/components/mdx/previews/EcosystemToolsPreview'
import ExternalStorePreview, {
  externalStorePreviewSource,
} from '@/components/mdx/previews/ExternalStorePreview'
import ErrorHandlingPreview, {
  errorHandlingPreviewSource,
} from '@/components/mdx/previews/ErrorHandlingPreview'
import FormActionsPreview, {
  formActionsPreviewSource,
} from '@/components/mdx/previews/FormActionsPreview'
import FolderStructurePreview, {
  folderStructurePreviewSource,
} from '@/components/mdx/previews/FolderStructurePreview'
import AdvancedRenderingPreview, {
  advancedRenderingPreviewSource,
} from '@/components/mdx/previews/AdvancedRenderingPreview'
import AdvancedFormsPreview, {
  advancedFormsPreviewSource,
} from '@/components/mdx/previews/AdvancedFormsPreview'
import AccessibilityPreview, {
  accessibilityPreviewSource,
} from '@/components/mdx/previews/AccessibilityPreview'
import ApiIntegrationPreview, {
  apiIntegrationPreviewSource,
} from '@/components/mdx/previews/ApiIntegrationPreview'
import AuthenticationPreview, {
  authenticationPreviewSource,
} from '@/components/mdx/previews/AuthenticationPreview'
import CounterPreview, {
  counterPreviewSource,
} from '@/components/mdx/previews/CounterPreview'
import EventsPreview, {
  eventsPreviewSource,
} from '@/components/mdx/previews/EventsPreview'
import HooksOverviewPreview, {
  hooksOverviewPreviewSource,
} from '@/components/mdx/previews/HooksOverviewPreview'
import JsxPreview, {
  jsxPreviewSource,
} from '@/components/mdx/previews/JsxPreview'
import LifecyclePreview, {
  lifecyclePreviewSource,
} from '@/components/mdx/previews/LifecyclePreview'
import LayoutEffectPreview, {
  layoutEffectPreviewSource,
} from '@/components/mdx/previews/LayoutEffectPreview'
import MemoCallbackPreview, {
  memoCallbackPreviewSource,
} from '@/components/mdx/previews/MemoCallbackPreview'
import NextJsConceptsPreview, {
  nextJsConceptsPreviewSource,
} from '@/components/mdx/previews/NextJsConceptsPreview'
import OptimisticUiPreview, {
  optimisticUiPreviewSource,
} from '@/components/mdx/previews/OptimisticUiPreview'
import PropsPreview, {
  propsPreviewSource,
} from '@/components/mdx/previews/PropsPreview'
import RenderingListPreview, {
  renderingListPreviewSource,
} from '@/components/mdx/previews/RenderingListPreview'
import ReactRouterPreview, {
  reactRouterPreviewSource,
} from '@/components/mdx/previews/ReactRouterPreview'
import ReactInternalsPreview, {
  reactInternalsPreviewSource,
} from '@/components/mdx/previews/ReactInternalsPreview'
import RealtimeReactPreview, {
  realtimeReactPreviewSource,
} from '@/components/mdx/previews/RealtimeReactPreview'
import RealWorldFormsPreview, {
  realWorldFormsPreviewSource,
} from '@/components/mdx/previews/RealWorldFormsPreview'
import PerformancePreview, {
  performancePreviewSource,
} from '@/components/mdx/previews/PerformancePreview'
import ProductionReadinessPreview, {
  productionReadinessPreviewSource,
} from '@/components/mdx/previews/ProductionReadinessPreview'
import StateManagementPreview, {
  stateManagementPreviewSource,
} from '@/components/mdx/previews/StateManagementPreview'
import StateLibrariesPreview, {
  stateLibrariesPreviewSource,
} from '@/components/mdx/previews/StateLibrariesPreview'
import ServerComponentsPreview, {
  serverComponentsPreviewSource,
} from '@/components/mdx/previews/ServerComponentsPreview'
import SeniorInterviewPreview, {
  seniorInterviewPreviewSource,
} from '@/components/mdx/previews/SeniorInterviewPreview'
import StylingPreview, {
  stylingPreviewSource,
} from '@/components/mdx/previews/StylingPreview'
import SuspenseLazyPreview, {
  suspenseLazyPreviewSource,
} from '@/components/mdx/previews/SuspenseLazyPreview'
import TypeScriptReactPreview, {
  typeScriptReactPreviewSource,
} from '@/components/mdx/previews/TypeScriptReactPreview'
import TestingPreview, {
  testingPreviewSource,
} from '@/components/mdx/previews/TestingPreview'
import TimerPreview, {
  timerPreviewSource,
} from '@/components/mdx/previews/TimerPreview'
import TransitionsDeferredPreview, {
  transitionsDeferredPreviewSource,
} from '@/components/mdx/previews/TransitionsDeferredPreview'
import TodoListPreview, {
  todoListPreviewSource,
} from '@/components/mdx/previews/TodoListPreview'
import TogglePreview, {
  togglePreviewSource,
} from '@/components/mdx/previews/TogglePreview'
import UseContextPreview, {
  useContextPreviewSource,
} from '@/components/mdx/previews/UseContextPreview'
import UseIdImperativePreview, {
  useIdImperativePreviewSource,
} from '@/components/mdx/previews/UseIdImperativePreview'
import UseReducerPreview, {
  useReducerPreviewSource,
} from '@/components/mdx/previews/UseReducerPreview'
import UseRefPreview, {
  useRefPreviewSource,
} from '@/components/mdx/previews/UseRefPreview'

export type PreviewId =
  | 'counter-basic'
  | 'toggle-panel'
  | 'timer-basic'
  | 'controlled-input'
  | 'todo-list'
  | 'jsx-basics'
  | 'component-composer'
  | 'props-card'
  | 'rendering-list'
  | 'events-playground'
  | 'hooks-overview'
  | 'use-ref-focus'
  | 'lifecycle-logger'
  | 'layout-effect'
  | 'memo-callback'
  | 'use-id-imperative'
  | 'transitions-deferred'
  | 'suspense-lazy'
  | 'form-actions'
  | 'optimistic-ui'
  | 'external-store'
  | 'component-communication'
  | 'conditional-ui'
  | 'state-management'
  | 'use-context'
  | 'use-reducer'
  | 'custom-hooks'
  | 'styling-react'
  | 'react-router'
  | 'data-fetching'
  | 'forms-real-world'
  | 'performance-react'
  | 'advanced-rendering'
  | 'error-handling'
  | 'design-patterns'
  | 'accessibility'
  | 'testing-react'
  | 'typescript-react'
  | 'state-libraries'
  | 'server-components'
  | 'nextjs-concepts'
  | 'folder-structure'
  | 'api-integration'
  | 'authentication'
  | 'realtime-react'
  | 'advanced-forms'
  | 'react-internals'
  | 'production-readiness'
  | 'ecosystem-tools'
  | 'enterprise-thinking'
  | 'senior-interview'
  | 'topic-shell'

export interface PreviewEntry {
  title: string
  description: string
  code: string
  component: ComponentType
}

export const previewRegistry: Record<PreviewId, PreviewEntry> = {
  'counter-basic': {
    title: 'Counter preview',
    description: 'A tiny stateful counter that shows how event handlers update React state.',
    code: counterPreviewSource,
    component: CounterPreview,
  },
  'toggle-panel': {
    title: 'Toggle preview',
    description: 'A boolean flag decides whether extra UI is rendered.',
    code: togglePreviewSource,
    component: TogglePreview,
  },
  'timer-basic': {
    title: 'Timer preview',
    description: 'An effect starts an interval and cleans it up when the component unmounts.',
    code: timerPreviewSource,
    component: TimerPreview,
  },
  'controlled-input': {
    title: 'Controlled input preview',
    description: 'State drives the value of the input, and the input updates that same state.',
    code: controlledInputPreviewSource,
    component: ControlledInputPreview,
  },
  'todo-list': {
    title: 'Todo list preview',
    description: 'This demo combines array state, immutable updates, and controlled form input.',
    code: todoListPreviewSource,
    component: TodoListPreview,
  },
  'jsx-basics': {
    title: 'JSX preview',
    description: 'Expressions, conditional content, and list rendering working together inside JSX.',
    code: jsxPreviewSource,
    component: JsxPreview,
  },
  'component-composer': {
    title: 'Component composition preview',
    description: 'A parent component composes smaller child components into one reusable UI block.',
    code: componentComposerPreviewSource,
    component: ComponentComposerPreview,
  },
  'props-card': {
    title: 'Props preview',
    description: 'Parent data flows into a child card through props, and the child updates when the parent changes them.',
    code: propsPreviewSource,
    component: PropsPreview,
  },
  'rendering-list': {
    title: 'Dynamic rendering preview',
    description: 'List filtering and conditional UI show how data drives what gets rendered.',
    code: renderingListPreviewSource,
    component: RenderingListPreview,
  },
  'events-playground': {
    title: 'Events preview',
    description: 'User events trigger handlers that update state and respond to form submission.',
    code: eventsPreviewSource,
    component: EventsPreview,
  },
  'hooks-overview': {
    title: 'Hooks overview preview',
    description: 'A compact demo showing state, effects, and refs solving different problems together.',
    code: hooksOverviewPreviewSource,
    component: HooksOverviewPreview,
  },
  'use-ref-focus': {
    title: 'useRef preview',
    description: 'A ref gives direct access to a DOM node so the component can focus it on demand.',
    code: useRefPreviewSource,
    component: UseRefPreview,
  },
  'lifecycle-logger': {
    title: 'Lifecycle preview',
    description: 'Mount, update, and unmount messages show how effects and cleanup line up with component lifecycle.',
    code: lifecyclePreviewSource,
    component: LifecyclePreview,
  },
  'layout-effect': {
    title: 'Layout sync preview',
    description: 'Compare before-paint layout measurement with after-paint effects in a tooltip-style positioning flow.',
    code: layoutEffectPreviewSource,
    component: LayoutEffectPreview,
  },
  'memo-callback': {
    title: 'Memoization preview',
    description: 'A memoized list uses useMemo for filtered data and useCallback for stable handler props.',
    code: memoCallbackPreviewSource,
    component: MemoCallbackPreview,
  },
  'use-id-imperative': {
    title: 'Accessible IDs and imperative API preview',
    description: 'useId links labels, help text, and errors, while useImperativeHandle exposes a tiny focus and clear API to the parent.',
    code: useIdImperativePreviewSource,
    component: UseIdImperativePreview,
  },
  'transitions-deferred': {
    title: 'Transitions preview',
    description: 'Compare urgent input updates with non-urgent list rendering using useTransition, startTransition, and useDeferredValue.',
    code: transitionsDeferredPreviewSource,
    component: TransitionsDeferredPreview,
  },
  'suspense-lazy': {
    title: 'Suspense and lazy preview',
    description: 'Lazy-loaded panels render behind Suspense boundaries so slower sections can load without blocking the rest of the screen.',
    code: suspenseLazyPreviewSource,
    component: SuspenseLazyPreview,
  },
  'form-actions': {
    title: 'Modern form actions preview',
    description: 'A submit flow returns pending, success, and field-error states in the same shape that modern React form actions formalize.',
    code: formActionsPreviewSource,
    component: FormActionsPreview,
  },
  'optimistic-ui': {
    title: 'Optimistic UI preview',
    description: 'A new row appears immediately, then either settles into confirmed state or rolls back when the simulated request fails.',
    code: optimisticUiPreviewSource,
    component: OptimisticUiPreview,
  },
  'external-store': {
    title: 'External store preview',
    description: 'Two separate subscribers stay in sync through useSyncExternalStore and a shared external source.',
    code: externalStorePreviewSource,
    component: ExternalStorePreview,
  },
  'component-communication': {
    title: 'Component communication preview',
    description: 'A parent coordinates sibling components by owning shared state and passing callbacks through props.',
    code: componentCommunicationPreviewSource,
    component: ComponentCommunicationPreview,
  },
  'conditional-ui': {
    title: 'Conditional UI preview',
    description: 'Switch between idle, loading, error, and success states to see how one component renders different UI shapes cleanly.',
    code: conditionalUiPreviewSource,
    component: ConditionalUiPreview,
  },
  'state-management': {
    title: 'State management preview',
    description: 'Local state drives the todo list while visible items and counts are derived instead of stored separately.',
    code: stateManagementPreviewSource,
    component: StateManagementPreview,
  },
  'use-context': {
    title: 'useContext preview',
    description: 'A theme value is shared through context so nested components can read and update it without prop drilling.',
    code: useContextPreviewSource,
    component: UseContextPreview,
  },
  'use-reducer': {
    title: 'useReducer preview',
    description: 'A reducer centralizes shopping cart actions like add, remove, update quantity, and clear in one predictable state machine.',
    code: useReducerPreviewSource,
    component: UseReducerPreview,
  },
  'custom-hooks': {
    title: 'Custom hooks preview',
    description: 'Reusable hooks extract debounce and toggle behavior so the component stays focused on rendering the UI.',
    code: customHooksPreviewSource,
    component: CustomHooksPreview,
  },
  'styling-react': {
    title: 'Styling preview',
    description: 'A single button component switches visual variants and disabled states using Tailwind utilities plus `cn()` composition.',
    code: stylingPreviewSource,
    component: StylingPreview,
  },
  'react-router': {
    title: 'React Router preview',
    description: 'A lightweight route simulator shows active links, route params, protected routes, and not-found behavior.',
    code: reactRouterPreviewSource,
    component: ReactRouterPreview,
  },
  'data-fetching': {
    title: 'Data fetching preview',
    description: 'A lightweight async demo shows loading, error, refetching, and optimistic updates without relying on a real backend.',
    code: dataFetchingPreviewSource,
    component: DataFetchingPreview,
  },
  'forms-real-world': {
    title: 'Real-world forms preview',
    description: 'A multi-step form preview demonstrates validation, step navigation, repeatable fields, and reset behavior in one focused UI.',
    code: realWorldFormsPreviewSource,
    component: RealWorldFormsPreview,
  },
  'performance-react': {
    title: 'Performance preview',
    description: 'A deferred list filter and memoized child show how React can keep input responsive and avoid unnecessary expensive work.',
    code: performancePreviewSource,
    component: PerformancePreview,
  },
  'advanced-rendering': {
    title: 'Advanced rendering preview',
    description: 'A single demo shows batching, transitions, deferred values, and Suspense working together to keep the UI responsive.',
    code: advancedRenderingPreviewSource,
    component: AdvancedRenderingPreview,
  },
  'error-handling': {
    title: 'Error handling preview',
    description: 'A focused preview contrasts locally handled async errors with a render crash that would need an error boundary and retry flow.',
    code: errorHandlingPreviewSource,
    component: ErrorHandlingPreview,
  },
  'design-patterns': {
    title: 'Design patterns preview',
    description: 'A compact compound-components demo makes composition, shared state, and headless-style coordination easier to see.',
    code: designPatternsPreviewSource,
    component: DesignPatternsPreview,
  },
  accessibility: {
    title: 'Accessibility preview',
    description: 'A focused preview demonstrates skip links, labels, aria-live announcements, and modal focus behavior in one accessible flow.',
    code: accessibilityPreviewSource,
    component: AccessibilityPreview,
  },
  'testing-react': {
    title: 'Testing preview',
    description: 'A small accessible todo form gives us realistic behavior to test with role queries, typing, submission, validation, and focus assertions.',
    code: testingPreviewSource,
    component: TestingPreview,
  },
  'typescript-react': {
    title: 'TypeScript preview',
    description: 'Typed props, a discriminated badge variant, a generic list, and a typed input change event all work together in one small React example.',
    code: typeScriptReactPreviewSource,
    component: TypeScriptReactPreview,
  },
  'state-libraries': {
    title: 'State libraries preview',
    description: 'A shared feature is viewed through Zustand, Redux Toolkit, and Jotai tradeoffs so the differences feel concrete instead of theoretical.',
    code: stateLibrariesPreviewSource,
    component: StateLibrariesPreview,
  },
  'server-components': {
    title: 'Server components preview',
    description: 'Switch between SSR, SSG, ISR, and CSR while a small client widget hydrates inside the page to make the server-client boundary easier to see.',
    code: serverComponentsPreviewSource,
    component: ServerComponentsPreview,
  },
  'nextjs-concepts': {
    title: 'Next.js concepts preview',
    description: 'A side-by-side comparison makes the shift from plain React to a full React framework concrete and easier to reason about.',
    code: nextJsConceptsPreviewSource,
    component: NextJsConceptsPreview,
  },
  'folder-structure': {
    title: 'Folder structure preview',
    description: 'Switch between route-driven and feature-module organization to see how scalable structure decisions change the shape of the codebase.',
    code: folderStructurePreviewSource,
    component: FolderStructurePreview,
  },
  'api-integration': {
    title: 'API integration preview',
    description: 'A typed request flow demonstrates debounced search, normalized errors, and a clearer client-to-API boundary.',
    code: apiIntegrationPreviewSource,
    component: ApiIntegrationPreview,
  },
  authentication: {
    title: 'Authentication preview',
    description: 'Switch between guest, user, and admin states to see protected UI, role-aware rendering, and the client-side side of auth flow clearly.',
    code: authenticationPreviewSource,
    component: AuthenticationPreview,
  },
  'realtime-react': {
    title: 'Real-time preview',
    description: 'Switch between polling, SSE, and WebSocket strategies while a live-style feed updates so the transport tradeoffs stay concrete.',
    code: realtimeReactPreviewSource,
    component: RealtimeReactPreview,
  },
  'advanced-forms': {
    title: 'Advanced forms preview',
    description: 'A multi-step draft with autosave messaging and undo support makes advanced form patterns easier to see in action.',
    code: advancedFormsPreviewSource,
    component: AdvancedFormsPreview,
  },
  'react-internals': {
    title: 'React internals preview',
    description: 'A tiny render-and-effect log makes render phase, commit phase, rerenders, and hook-driven updates easier to visualize.',
    code: reactInternalsPreviewSource,
    component: ReactInternalsPreview,
  },
  'production-readiness': {
    title: 'Production readiness preview',
    description: 'A launch-readiness checklist focuses attention on env safety, flags, monitoring, and performance before shipping.',
    code: productionReadinessPreviewSource,
    component: ProductionReadinessPreview,
  },
  'ecosystem-tools': {
    title: 'Ecosystem tools preview',
    description: 'Switch between tool groups to see how build tooling, data libraries, form tooling, and motion solve different layers of React work.',
    code: ecosystemToolsPreviewSource,
    component: EcosystemToolsPreview,
  },
  'enterprise-thinking': {
    title: 'Enterprise thinking preview',
    description: 'Switch between architecture lenses to see how senior React decisions focus on boundaries, ownership, and review quality.',
    code: enterpriseThinkingPreviewSource,
    component: EnterpriseThinkingPreview,
  },
  'senior-interview': {
    title: 'Senior interview preview',
    description: 'A small set of interview lenses keeps the final review focused on architecture, state, performance, and internals thinking.',
    code: seniorInterviewPreviewSource,
    component: SeniorInterviewPreview,
  },
  'topic-shell': {
    title: 'Preview placeholder',
    description: 'This topic does not have a dedicated live demo yet.',
    code: counterPreviewSource,
    component: CounterPreview,
  },
}
