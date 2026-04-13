# CONTENT-SPEC.md — Exhaustive Content Requirements

## How to use this file

This file works alongside CLAUDE.md. CLAUDE.md tells you the structure and template.
This file tells you exactly what content must be inside every topic — every sub-concept,
every code example, every mistake, every interview question.

When writing any MDX topic file, open this file and treat every item under that topic
as a checklist. Do not submit a topic file unless every item is covered.

This is the single source of truth for content depth. If it is listed here, it must be
in the MDX file. No exceptions. No "I'll cover this later". Cover it now.

---

## How to read each topic spec

Each topic has:
- **Must explain** — concepts that must be explained in prose, not just shown in code
- **Code examples required** — every example that must exist, in order from simple to complex
- **Callouts required** — mistakes, tips, warnings that must appear as Callout components
- **Interview questions required** — questions with full answers, not just the question
- **Quiz questions required** — MCQ questions for the Quiz component

---

# REACT TRACK

---

## 01 — React Introduction

### Must explain
- What React is — a UI library, not a framework
- Why React was created — the problem with manually updating the DOM
- What a Single Page Application is vs a traditional multi-page website
- What the Virtual DOM is — what problem it solves, how it works conceptually
- What declarative UI means — vs imperative (jQuery style)
- What component-based architecture means — why it matters
- What reusable UI pieces are and why they reduce duplication
- How React fits into the bigger picture — it only handles the view layer

### Code examples required
1. Traditional DOM manipulation vs React — show both doing the same thing
2. Your first React component — the absolute minimal HelloWorld
3. Rendering a component into the DOM with createRoot
4. What the compiled output of JSX looks like (React.createElement)
5. A simple component tree — App → Header → Main → Footer
6. Vite project setup — the exact commands, what each file does
7. Folder structure explanation — what main.jsx, App.jsx, index.html each do
8. The development server — what happens when you run npm run dev

### Callouts required
- Tip: React is just JavaScript — there is no magic, only functions and objects
- Note: React does not handle routing, data fetching, or state management globally — those are separate tools
- Tip: Virtual DOM does not mean faster — it means more predictable updates
- Interview: What is the difference between React and a framework like Angular?
- Interview: What problem does the Virtual DOM solve?

### Interview questions required
1. What is React and why was it created?
2. What is the Virtual DOM and how does it work?
3. What is the difference between declarative and imperative programming in UI?
4. What is a Single Page Application and how is it different from a traditional website?
5. Is React a framework or a library? What is the difference?

### Quiz questions required
1. What does React use to avoid updating the real DOM directly? (Virtual DOM)
2. Which of these is React responsible for? (Rendering UI / not routing or data fetching)
3. What does declarative UI mean? (You describe what the UI should look like, React figures out how)

---

## 02 — JSX

### Must explain
- What JSX is — syntactic sugar over React.createElement
- Why JSX exists — readability, writing UI that looks like what it produces
- How JSX is different from HTML — it is JavaScript, not HTML
- How JSX compiles — show the before and after with Babel/tsc
- What expressions in JSX are — the {} syntax and what can go inside
- What cannot go inside {} — statements like if, for, while
- Every JSX rule — single root element, className, htmlFor, self-closing tags, case sensitivity
- Fragments — why they exist, both syntaxes (<React.Fragment> and <>)
- Rendering variables in JSX
- Rendering function call results in JSX
- Conditional rendering in JSX — ternary and && and variables
- How to render nothing — returning null
- JSX and whitespace — how it differs from HTML

### Code examples required
1. JSX vs what it compiles to — side by side React.createElement
2. Embedding a variable in JSX
3. Calling a function inside JSX
4. Ternary operator for conditional rendering
5. && operator for conditional rendering — and why 0 && <X/> is a bug
6. Rendering null to show nothing
7. Fragment — both syntaxes
8. className vs class, htmlFor vs for
9. Self-closing tags — input, img, br
10. Multiple JSX expressions — wrapping in a parent
11. Inline style as an object — double curly braces explained
12. Rendering a list inline with map (preview of lists topic)
13. JSX spread attributes — {...props}
14. Multiline JSX — parentheses for readability

### Callouts required
- Mistake: Using class instead of className
- Mistake: Using for instead of htmlFor on labels
- Mistake: 0 && <Component /> — 0 renders as text, use !!count or count > 0
- Mistake: Forgetting to close self-closing tags
- Tip: JSX is just JavaScript — you can store it in variables, return it from functions, pass it as props
- Warning: Expressions only inside {} — not statements. Extract if/for logic above the return
- Interview: What is JSX and does the browser understand it?
- Interview: Why do we use className instead of class?

### Interview questions required
1. What is JSX? Does the browser understand it directly?
2. What is the difference between JSX and HTML?
3. Why do we use className instead of class in JSX?
4. What can and cannot go inside {} in JSX?
5. What are fragments and why do we need them?
6. What does JSX compile to?

### Quiz questions required
1. Which attribute do you use instead of class in JSX? (className)
2. What does <></> mean in React? (A Fragment — renders no extra DOM node)
3. Which of these renders nothing? (return null)

---

## 03 — Components

### Must explain
- What a component is — a function that returns JSX
- Why components exist — reusability, separation of concerns, maintainability
- Component naming rules — must start with capital letter, why
- How React knows the difference between HTML tags and components (capital vs lowercase)
- Functional components — the modern standard
- How to import and export components — named vs default exports
- How to nest components — component trees
- Splitting UI into small focused components — the mindset
- Presentational vs container components — what each means, when to use each
- Keeping components focused — single responsibility
- What props are at a high level (detailed in props topic)
- Component files — one component per file convention
- How React renders a component tree

### Code examples required
1. The simplest possible functional component
2. A component that renders another component (nesting)
3. Default export vs named export — both patterns
4. Importing a component from another file
5. A component tree — App renders Header, Main, Footer, Sidebar
6. Breaking a complex UI into components — before and after
7. A presentational component — only receives props and renders
8. A container component — has logic, passes data to presentational
9. Component returning multiple elements using Fragment
10. A component that conditionally renders different things
11. Passing JSX as children (preview of children prop)
12. A real-world example — a Card component used multiple times with different data

### Callouts required
- Mistake: Naming a component with lowercase — React treats it as an HTML tag
- Mistake: Defining a component inside another component — causes performance issues
- Tip: One component per file — easier to find, test, and reuse
- Tip: If a component is getting long, break it into smaller components
- Interview: Why must component names start with a capital letter?
- Interview: What is the difference between a presentational and container component?

### Interview questions required
1. What is a React component?
2. Why must component names start with a capital letter?
3. What is the difference between a presentational and container component?
4. Why do we split UI into small components?
5. What is the difference between default and named exports?

### Quiz questions required
1. What happens if you name a component with lowercase? (React treats it as an HTML tag)
2. Where should you define a component? (Outside other components, in its own scope)
3. What does a functional component return? (JSX)

---

## 04 — Props

### Must explain
- What props are — data passed from parent to child
- Why props exist — making components reusable and configurable
- How to pass props — like HTML attributes
- How to receive props — the props object, destructuring
- Props are read-only — why this is a rule, what happens if you break it
- The children prop — what it is, when to use it
- Passing functions as props — callback pattern
- Passing any JavaScript value as a prop — strings, numbers, booleans, objects, arrays, functions, JSX
- Default prop values — using default parameters
- Prop spreading — {...props} pattern and when to use it carefully
- PropTypes concept (even though TypeScript is preferred — mention it)
- The difference between props and state — props come from outside, state lives inside
- Prop drilling — what it is, why it becomes a problem (solution is context, covered later)

### Code examples required
1. Passing a string prop and rendering it
2. Passing a number prop
3. Passing a boolean prop — shorthand {isActive} vs {isActive={true}}
4. Passing an object as a prop
5. Passing an array as a prop and mapping it
6. Passing a function as a prop — callback from child to parent
7. The children prop — wrapping content between tags
8. Default prop values using destructuring defaults
9. Prop spreading — {...buttonProps}
10. A reusable Card component with multiple props
11. A Button component that accepts onClick, label, disabled, variant
12. Lifting state — parent owns state, passes value and setter down as props
13. Prop drilling problem — 3 levels deep, showing why it gets messy
14. A complete example — configurable Avatar component with image, name, size, fallback

### Callouts required
- Mistake: Trying to modify props inside the child component
- Mistake: Forgetting that boolean props shorthand — just writing disabled means disabled={true}
- Tip: Destructure props in the function signature for cleaner code
- Tip: Use default values in destructuring for optional props
- Warning: Spreading props blindly {...props} can pass invalid attributes to DOM elements
- Interview: What is prop drilling and why is it a problem?
- Interview: What is the difference between props and state?

### Interview questions required
1. What are props in React?
2. Why are props read-only?
3. What is the children prop?
4. What is prop drilling and why is it a problem?
5. How do you pass a function as a prop and why would you?
6. What is the difference between props and state?

### Quiz questions required
1. Can a child component modify the props it receives? (No, props are read-only)
2. What is props.children? (The JSX content placed between a component's opening and closing tags)
3. How do you set a default value for a prop? (Default parameter in destructuring)

---

## 05 — Rendering UI Dynamically

### Must explain
- Why dynamic rendering matters — real apps show different data every time
- Rendering arrays with .map() — why map and not forEach
- The key prop — what it is, why React needs it, what makes a good key
- Why index as key is usually wrong — reorder/delete scenarios
- Conditional rendering — all patterns
- Guard clause pattern — early return
- Ternary for inline conditional
- && for simple show/hide
- Null to render nothing
- Empty state UI — what to show when there is no data
- Dynamic class names — based on state or props
- Dynamic inline styles — when acceptable
- Rendering based on fetched data — loading, error, success states

### Code examples required
1. Basic .map() over an array of strings
2. .map() over an array of objects — rendering a list of cards
3. Key prop — correct (id from data) vs incorrect (index)
4. Nested lists — map inside map with nested keys
5. Conditional rendering with if statement above return
6. Conditional rendering with ternary inside JSX
7. Conditional rendering with && — and the 0 bug fix
8. Rendering null — show nothing
9. Empty state — array is empty, show a message
10. Loading state — show spinner while fetching
11. Error state — show error message
12. Success state — show data
13. Dynamic className — active/inactive tab
14. Dynamic inline style — progress bar width
15. Filtering before rendering — show only completed todos
16. Sorting before rendering — alphabetical list
17. A complete example — a todo list with empty state, active items, completed items

### Callouts required
- Mistake: Using array index as key — breaks on reorder and delete
- Mistake: Forgetting to return inside .map()
- Mistake: 0 && <Component /> — renders 0 as text
- Tip: Filter and sort the array before .map() — do not do it inside JSX
- Tip: Extract the empty state, loading state, error state into named components
- Warning: Keys must be stable, unique among siblings, and not change between renders
- Interview: Why does React need a key prop for lists?

### Interview questions required
1. Why does React need a key prop when rendering lists?
2. Why should you not use array index as a key?
3. What are all the ways to do conditional rendering in React?
4. What is an empty state and why is it important in UI?
5. What is the difference between .map() and .forEach() for rendering?

### Quiz questions required
1. What is the problem with using array index as a key? (Breaks on reorder/delete)
2. Which method do you use to render a list in React? (.map())
3. What does rendering null do? (Renders nothing, no DOM element)

---

## 06 — Events in React

### Must explain
- How React events work — synthetic events, not native DOM events
- Event naming convention — camelCase (onClick not onclick)
- How to attach an event handler — passing a function reference, not a call
- The event object — what it contains, how to use it
- Preventing default behavior — e.preventDefault() and when you need it
- Stopping propagation — e.stopPropagation() and event bubbling
- Passing arguments to event handlers — the arrow function wrapper pattern
- Inline handlers vs named handler functions — when to use each
- Mouse events — onClick, onDoubleClick, onMouseEnter, onMouseLeave, onMouseMove
- Keyboard events — onKeyDown, onKeyUp, onKeyPress (deprecated)
- Form events — onChange, onSubmit, onBlur, onFocus
- Pointer events overview
- The difference between controlled and uncontrolled input change events

### Code examples required
1. Basic onClick — button click handler
2. Common mistake — calling the function instead of passing it: onClick={handleClick()} vs onClick={handleClick}
3. Inline arrow function handler
4. Named handler function — defined outside JSX
5. Accessing the event object — e.target.value
6. Preventing form submission default — e.preventDefault()
7. Passing arguments with arrow function wrapper — onClick={() => handleDelete(id)}
8. onMouseEnter and onMouseLeave — hover effect
9. onKeyDown — detecting Enter key press
10. onChange on text input — reading the value
11. onBlur — validation on field blur
12. onFocus — highlight input on focus
13. Event bubbling — child click triggers parent click, stopPropagation fix
14. Double click — onDoubleClick
15. A complete example — a form with multiple event types

### Callouts required
- Mistake: onClick={handleClick()} — this calls the function immediately on render
- Mistake: Forgetting e.preventDefault() on form submit — page reloads
- Tip: For passing arguments use () => handleDelete(id) not handleDelete(id)
- Note: React's synthetic events wrap native events for cross-browser consistency
- Interview: What is event bubbling and how do you stop it?

### Interview questions required
1. What is a synthetic event in React?
2. What is the difference between onClick={handleClick} and onClick={handleClick()}?
3. What is event bubbling and how do you stop it in React?
4. How do you pass arguments to an event handler?
5. What does e.preventDefault() do?

### Quiz questions required
1. What is wrong with onClick={handleClick()}? (It calls the function immediately on render)
2. How do you stop an event from bubbling up? (e.stopPropagation())
3. Which event fires when an input value changes? (onChange)

---

## 07 — State with useState

### Must explain
- What state is — memory that persists between renders
- Why normal variables do not work — React does not know they changed
- What useState returns — [currentValue, setterFunction]
- How calling the setter triggers a re-render
- State is a snapshot — the value inside a render does not change mid-render
- State batching — multiple setters in one event handler batch into one render
- Functional update form — why prev => prev + 1 is sometimes required
- When to use functional form — when new state depends on old state
- Initializer function for expensive initial state — useState(() => expensiveCalc())
- What NOT to store in state — derived values, redundant data
- State with primitive types — strings, numbers, booleans
- State with arrays — correct immutable update patterns
- State with objects — correct immutable update patterns
- Multiple state values vs one object — how to decide
- Controlled inputs — the pattern and why it matters
- Derived state — computing from existing state instead of storing
- Lifting state up — when siblings need to share state
- State colocation — keep state as close to where it is used as possible

### Code examples required
1. Counter — the simplest useState example
2. String state — a name that changes
3. Boolean state — show/hide toggle
4. Functional update form — why setCount(prev => prev + 1) over setCount(count + 1)
5. State batching — multiple setters, only one re-render
6. Array state — add an item (spread pattern)
7. Array state — remove an item (filter pattern)
8. Array state — update an item (map pattern)
9. Object state — updating one field with spread: {...user, name: 'new'}
10. Object state — nested object update (flat is better — explain why)
11. Multiple independent state values
12. When to use one object vs multiple — the decision
13. Controlled text input — value + onChange
14. Controlled select dropdown
15. Controlled checkbox
16. Derived state — do not store what you can compute (filtered list example)
17. Expensive initial state — initializer function lazy init
18. Lifting state — two sibling components sharing state through parent
19. A full mini feature — a todo app with add, complete, delete using all array patterns
20. A full form — multiple fields, one or multiple state values, submit handling

### Callouts required
- Mistake: Mutating state directly — state.push(), obj.name = 'x' — React does not detect this
- Mistake: Reading state immediately after setting it — state is a snapshot
- Mistake: setCount(count + 1) three times in one handler — only increments once
- Mistake: Storing derived data in state — if you can compute it, do not store it
- Mistake: Putting everything in one giant state object — hard to update
- Tip: Use functional form prev => when new state depends on old state
- Tip: Treat state as immutable — always create new arrays/objects
- Tip: Keep state minimal — only store what you cannot compute
- Warning: Never mutate arrays or objects in state — always return new ones
- Interview: What is the difference between state and a regular variable?
- Interview: Why does React batch state updates?

### Interview questions required
1. What is state in React and why do we need it?
2. What is the difference between state and a regular variable?
3. What is state batching and why does React do it?
4. When should you use the functional update form prev => ?
5. How do you correctly update an array in state?
6. How do you correctly update an object in state?
7. What is derived state and why should you prefer it over storing redundant state?
8. What does lifting state up mean?

### Quiz questions required
1. Which of these correctly adds an item to an array in state? ([...items, newItem])
2. What is wrong with doing state.push(item)? (Mutates state directly, React does not detect the change)
3. When should you use setCount(prev => prev + 1)? (When new state depends on old state)

---

## 08 — Forms in React

### Must explain
- Controlled vs uncontrolled components — the fundamental difference
- Why controlled components are preferred in React
- Handling text input — value + onChange pattern
- Handling textarea — same as input
- Handling select — value on select element not option
- Handling checkbox — checked + onChange, e.target.checked
- Handling radio buttons — group of radios with same name
- Handling multiple inputs with one onChange handler — e.target.name
- Form submission — onSubmit, e.preventDefault()
- Resetting a form after submit
- Basic validation — required fields, length, format
- Showing error messages — when to show (on blur or on submit)
- Touched fields concept — only show error after user has interacted
- Form state structure — one object for all fields
- File input — why it is always uncontrolled
- Later: React Hook Form, Zod/Yup — just introduce the concept, full coverage in topic 22

### Code examples required
1. Controlled text input — the minimal pattern
2. Controlled textarea
3. Controlled select dropdown
4. Controlled checkbox — single checkbox
5. Controlled checkbox group — multiple checkboxes, array of selected values
6. Controlled radio button group
7. Multiple inputs with one handler using e.target.name and e.target.type
8. Form submission with e.preventDefault()
9. Form state as one object — all fields in one useState
10. Resetting the form after submit — setting state back to initial values
11. Basic validation — checking required fields before submit
12. Showing error messages per field
13. Touched state — only show error after blur
14. Email format validation with regex
15. A complete login form — email, password, submit, validation, error messages
16. A complete registration form — name, email, password, confirm password, checkbox for terms

### Callouts required
- Mistake: Forgetting e.preventDefault() on form submit
- Mistake: Using e.target.value for checkboxes — use e.target.checked
- Tip: Use e.target.name to handle all inputs with one onChange
- Tip: Keep form state as one object when fields are related
- Note: File inputs are always uncontrolled — you cannot set their value in React
- Interview: What is the difference between controlled and uncontrolled components?

### Interview questions required
1. What is a controlled component in React?
2. What is the difference between controlled and uncontrolled components?
3. How do you handle a checkbox in React?
4. How do you handle multiple inputs with one onChange handler?
5. What is the touched fields concept in form validation?

### Quiz questions required
1. How do you read a checkbox value in onChange? (e.target.checked)
2. What makes a component controlled? (Its value is driven by React state)
3. Why do we call e.preventDefault() on form submit? (Prevents the browser from reloading the page)

---

## 09 — React Hooks Overview

### Must explain
- What hooks are — functions that let you use React features in functional components
- Why hooks exist — the problem with class components (verbose, confusing this)
- The Rules of Hooks — two rules, why they exist, what breaks if you violate them
- Rule 1: Only call hooks at the top level — not inside if, loops, nested functions
- Rule 2: Only call hooks from React functions — not regular JS functions
- Why these rules exist — React relies on hook call order to track state
- Overview of every built-in hook and one-line description of each
- When to use which hook — decision guide

### Code examples required
1. What hooks look like vs what class components looked like — side by side
2. Correct hook usage — at top level
3. Wrong hook usage — inside an if statement — and why it breaks
4. Wrong hook usage — inside a loop
5. The eslint-plugin-react-hooks — show the config, explain what it catches
6. A component using multiple hooks together

### Built-in hooks to describe (one-liner + when to use each)
- useState — local component state
- useEffect — side effects after render
- useContext — reading context value
- useRef — mutable ref, DOM access
- useMemo — memoize expensive computation
- useCallback — memoize function reference
- useReducer — complex state with actions
- useLayoutEffect — effect before browser paint (rare)
- useId — stable unique ID for accessibility
- useTransition — mark updates as non-urgent
- useDeferredValue — defer a value update
- useImperativeHandle — customize ref exposed to parent
- useDebugValue — label in DevTools
- useSyncExternalStore — subscribe to external store

### Callouts required
- Warning: Never call hooks inside if statements, loops, or nested functions
- Mistake: Calling a hook from a regular JavaScript function, not a component or custom hook
- Tip: Install eslint-plugin-react-hooks — it catches rule violations automatically
- Interview: What are the rules of hooks and why do they exist?

### Interview questions required
1. What are React hooks?
2. What are the two rules of hooks?
3. Why must hooks be called at the top level?
4. Why were hooks introduced — what problem did they solve?

### Quiz questions required
1. Can you call a hook inside an if statement? (No — breaks hook call order)
2. Where can you call hooks? (Only inside React components or custom hooks)

---

## 10 — useEffect

### Must explain
- What a side effect is — anything that reaches outside React's rendering
- Why useEffect exists — to run side effects after render safely
- Effect lifecycle — when it runs, in what order
- The dependency array — three cases in full detail
  - No array: runs after every render
  - Empty array []: runs once after mount
  - [dep1, dep2]: runs when those values change
- The cleanup function — what it is, when it runs, why it matters
- Common use cases: API fetch, timers, event listeners, localStorage, subscriptions
- Fetching data inside useEffect — the correct pattern
- Race conditions in fetching — what they are, how to fix with cleanup/abort
- AbortController for cancelling fetch requests
- Stale closure problem — what it is, how dependency array causes it, how to fix
- Infinite loop — when it happens, how to avoid
- When NOT to use useEffect — derived state, event-based updates, user interactions
- The difference between mount, update, unmount effects

### Code examples required
1. Basic useEffect — logs after every render (no dependency array)
2. useEffect with empty array — runs once on mount
3. useEffect with dependency — runs when a specific value changes
4. Cleanup function — clearInterval example
5. Cleanup function — removeEventListener example
6. Fetching data on mount — loading, data, error state pattern
7. Fetching data when a dependency changes — search with query param
8. Race condition problem — two fetches, second resolves first
9. AbortController — cancelling previous fetch on dependency change
10. Stale closure — counter that always logs 0, why it happens
11. Stale closure fix — adding to dependency array
12. Infinite loop — setState inside effect without dependency array
13. Infinite loop fix — correct dependency array
14. localStorage sync — read on mount, write on state change
15. Window resize event listener — add on mount, remove on unmount
16. setInterval with cleanup — timer that cleans up
17. Subscription pattern — subscribe on mount, unsubscribe on cleanup
18. Async function inside useEffect — correct pattern (define inside, call immediately)
19. When NOT to use useEffect — show the wrong way and the right way for derived state
20. A complete real example — a search component that fetches on query change with debounce and abort

### Callouts required
- Mistake: Making the effect callback async directly — async useEffect(() => {}) does not work
- Mistake: Missing cleanup for setInterval — memory leak
- Mistake: Missing cleanup for event listeners — memory leak
- Mistake: Object or array in dependency array — new reference every render causes infinite loop
- Mistake: Missing dependencies in the array — stale closure bugs
- Mistake: Putting too much in one useEffect — split by concern
- Tip: If eslint warns about missing dependencies, fix the dependencies not the lint rule
- Tip: Think of effects as synchronization, not lifecycle events
- Warning: setState inside an effect without a dependency array causes infinite loops
- Interview: What is a stale closure in useEffect?
- Interview: What is a race condition in data fetching?

### Interview questions required
1. What is a side effect in React?
2. What are the three forms of the dependency array and what does each do?
3. What is the cleanup function and when does it run?
4. What is a stale closure in the context of useEffect?
5. What is a race condition in data fetching and how do you prevent it?
6. When should you NOT use useEffect?
7. How do you correctly write async code inside useEffect?
8. Why does putting an object in the dependency array cause an infinite loop?

### Quiz questions required
1. What does an empty [] dependency array mean? (Run once on mount)
2. When does the cleanup function run? (Before the next effect runs and on unmount)
3. What is wrong with async useEffect(() => {})? (useEffect callback cannot be async directly)

---

## 11 — useRef

### Must explain
- What useRef returns — {current: initialValue} object
- Why changing .current does NOT trigger a re-render — the key difference from state
- Two main uses — DOM access and persistent mutable values
- DOM access pattern — ref={myRef}, then myRef.current is the DOM node
- Focus management — programmatic focus on inputs
- Scroll control — scrollIntoView
- Reading DOM measurements — width, height, position
- Storing mutable values — interval IDs, previous values, flags
- Why useRef for interval IDs is better than useState
- Previous value pattern — storing last render's value
- The difference between useRef and useState in detail
- The difference between useRef and a module-level variable
- forwardRef — when a parent needs to access a child's DOM node
- useImperativeHandle — briefly (advanced)

### Code examples required
1. Basic useRef — accessing and focusing an input
2. Scroll to element — scrollIntoView
3. Measuring DOM element — getBoundingClientRect
4. Storing interval ID — clearInterval without state
5. Tracking render count — useRef as a counter that does not cause re-renders
6. Previous value pattern — store last render's value
7. Flag to prevent effect on first mount — isMounted ref
8. Comparing ref vs state — same counter, one with ref one with state, show re-render difference
9. forwardRef — parent focusing child's input
10. Video player control — play/pause via ref
11. A complete example — auto-focus on modal open, trap focus inside modal

### Callouts required
- Mistake: Using useRef to store UI-affecting data — changes are invisible to React
- Tip: useRef is perfect for storing interval and timeout IDs
- Tip: Use useRef when you need a value that persists but changing it should not re-render
- Note: Unlike state, reading ref.current during render gives you the current value, not a snapshot
- Interview: What is the difference between useRef and useState?
- Interview: When would you use useRef instead of state?

### Interview questions required
1. What does useRef return and what is it used for?
2. What is the difference between useRef and useState?
3. Why does changing ref.current not trigger a re-render?
4. What is forwardRef and when do you need it?
5. What is the previous value pattern using useRef?

### Quiz questions required
1. Does changing ref.current trigger a re-render? (No)
2. What is the main use of attaching a ref to a JSX element? (Accessing the real DOM node)
3. Where should you read/write ref.current? (Inside effects and event handlers, not during render)

---

## 12 — Component Lifecycle in Functional React

### Must explain
- The three lifecycle phases — mount, update, unmount
- Mount — when a component appears in the DOM for the first time
- Update — when props or state change, component re-renders
- Unmount — when a component is removed from the DOM
- How useEffect maps to lifecycle
  - [] = componentDidMount
  - [dep] = componentDidUpdate (for that dep)
  - cleanup = componentWillUnmount
- Why understanding lifecycle matters — memory leaks, timing bugs, cleanup
- Strict mode double invocation — why React mounts, unmounts, and remounts in dev
- What happens step by step when a component renders
- Render phase vs commit phase — what React does in each

### Code examples required
1. Mount effect — log when component appears
2. Unmount cleanup — log when component is removed, shown with a toggle
3. Update effect — log when a specific prop changes
4. All three together — one component showing mount, update, unmount with logs
5. Strict mode double invocation — why you see logs twice in development
6. A real example — a modal that adds keyboard listener on open, removes on close
7. A timer component — starts on mount, clears on unmount
8. An API subscription — connects on mount, disconnects on unmount

### Callouts required
- Note: Class component lifecycle methods still exist but functional components with hooks are the modern standard
- Tip: Think of useEffect as synchronization — keep this thing in sync with that
- Warning: Strict mode intentionally mounts and unmounts twice in development — this is not a bug
- Interview: How do you replicate componentDidMount with hooks?

### Interview questions required
1. What are the three phases of a React component lifecycle?
2. How do you replicate componentDidMount, componentDidUpdate, and componentWillUnmount with hooks?
3. What is the React Strict Mode double invocation and why does it happen?
4. What is the difference between the render phase and the commit phase?

### Quiz questions required
1. Which useEffect pattern runs only on mount? (useEffect(() => {}, []))
2. When does the cleanup function act like componentWillUnmount? (When the component unmounts)

---

## 13 — Component Communication

### Must explain
- Parent to child — props (already covered, reinforce here with communication framing)
- Child to parent — callback props pattern
- Sibling communication — lifting state to common parent
- Lifting state up — when to do it, how to identify the right level
- Shared state patterns — one source of truth
- Why you cannot directly communicate between siblings without a parent
- The flow of data in React — always top down
- When lifting state gets painful — leads into context (next topic)

### Code examples required
1. Parent passes data to child via props — basic
2. Child calls parent function to report something — callback prop pattern
3. Sibling communication — two siblings, parent holds state, passes down
4. Lifting state — before (each component has own state) and after (parent owns state)
5. A controlled input where parent holds the value
6. A list and a detail view — selecting an item in list, showing detail in sibling
7. A form in child that submits data to parent's state
8. A counter in child that reports its value to parent
9. A complete example — search input component + results list component, parent coordinates

### Callouts required
- Tip: If two components need the same data, lift it to their closest common ancestor
- Tip: Identify who owns the state by asking: who needs to read it and who needs to change it
- Warning: Do not lift state higher than needed — it causes unnecessary re-renders
- Interview: How do you pass data from a child component to a parent?

### Interview questions required
1. How do you pass data from a parent to a child in React?
2. How do you pass data from a child to a parent?
3. How do siblings communicate in React?
4. What does lifting state up mean and when do you do it?

### Quiz questions required
1. How does a child component send data to its parent? (By calling a callback function passed as a prop)
2. Where should shared state live? (In the closest common ancestor of the components that need it)

---

## 14 — Conditional UI Patterns

### Must explain
- Guard clauses — early return to simplify nested conditions
- Conditional wrappers — wrapping content conditionally
- Render functions — extracting conditional rendering into named functions
- When to use inline vs extracted helpers
- Loading state UI — what to show while data is loading
- Empty state UI — what to show when there is no data
- Error state UI — what to show when something failed
- Success state UI — what to show when everything worked
- Skeleton UI — what it is, when to use it vs spinner
- The four-state pattern — idle, loading, error, success

### Code examples required
1. Guard clause — early return for loading
2. Guard clause — early return for error
3. Guard clause — early return for empty
4. Ternary for simple two-state UI
5. && for single condition
6. Multiple conditions with if/else outside JSX
7. A render function — extracted conditional rendering
8. Skeleton UI — placeholder that matches the shape of the content
9. Spinner vs skeleton — when each is appropriate
10. Four-state pattern — idle, loading, error, success all handled
11. Error boundary concept preview — component crash fallback
12. A complete example — a user profile that handles all four states cleanly

### Callouts required
- Tip: Use guard clauses to flatten deeply nested conditionals
- Tip: Name your states — idle, loading, error, success — instead of just isLoading boolean
- Tip: Skeleton UI feels faster than spinners because it sets expectations
- Interview: How do you handle loading, error, and success states in React?

### Interview questions required
1. What is a guard clause and when do you use it in React?
2. What is skeleton UI and when would you use it instead of a spinner?
3. What is the four-state pattern for async data?

### Quiz questions required
1. What is a guard clause? (An early return that handles an edge case before the main logic)
2. Which is generally better UX — skeleton or spinner? (Skeleton — sets expectations about content shape)

---

## 15 — State Management Fundamentals

### Must explain
- Types of state — every category explained clearly
  - Local state — lives in one component
  - Shared state — lifted to parent, used by children
  - Global state — needed across many unrelated components
  - Server state — data from an API, has its own lifecycle
  - Derived state — computed from other state
  - UI state — modals open, active tabs, hover states
  - Form state — input values, touched, errors, submitting
  - URL state — filters, pagination, selected item in the URL
- Single source of truth — why duplicating state causes bugs
- Immutable updates — why you never mutate
- Avoid duplicated state — the rule and examples
- Derived values instead of storing everything — the rule and examples
- How to decide where state should live — decision tree
- When local state is enough — most of the time
- When you need global state — the bar is higher than people think

### Code examples required
1. Local state — counter only one component cares about
2. Shared state — lifted to parent
3. Derived state — filtering a list without storing the filtered list
4. Derived state — computed total from cart items
5. UI state — modal open/closed
6. Form state — all fields in one object
7. URL state — reading filter from query param
8. Single source of truth — wrong (duplicate state) vs right (one source)
9. Immutable update — wrong (push/mutate) vs right (spread/filter/map)
10. Decision — should this be local, shared, or global? Walk through examples

### Callouts required
- Tip: Default to local state. Only lift when you need to.
- Tip: If you can compute it, do not store it
- Warning: Duplicating state is the most common source of bugs in React apps
- Interview: What are the different types of state in a React application?

### Interview questions required
1. What are the different types of state in a React application?
2. What is the single source of truth principle?
3. What is derived state and why should you prefer it?
4. How do you decide where state should live?

### Quiz questions required
1. What is derived state? (State that is computed from other state rather than stored separately)
2. What type of state is an open/closed modal? (UI state)

---

## 16 — useContext

### Must explain
- The problem — prop drilling gets painful beyond 2-3 levels
- What context is — a way to share values without passing props at every level
- When to use context — global, low-frequency data: theme, user, language, locale
- When NOT to use context — high-frequency updates, everything
- How to create context — createContext with a default value
- The default value — only used when there is no Provider above in the tree
- The Provider component — wrapping the tree that needs access
- Consuming context — useContext hook
- Context with a custom hook — the clean pattern
- Re-render issue — every consumer re-renders when context value changes
- How to fix re-render issues — splitting context, memoization
- Context + state — the common pattern for global state
- Multiple contexts — separate concerns into separate contexts
- Context vs prop drilling — knowing when each is appropriate

### Code examples required
1. The prop drilling problem — 4 levels deep, passing a prop through every level
2. Creating a context with createContext
3. Providing context with Provider
4. Consuming context with useContext
5. Default value — what happens without a Provider
6. Context with state — ThemeContext that holds theme + toggle function
7. Custom hook wrapping useContext — useTheme(), useUser()
8. Multiple contexts — ThemeContext + UserContext + separate providers
9. Context re-render problem — all consumers re-render on any change
10. Splitting context to minimize re-renders
11. Context for auth — user, login, logout
12. A complete example — dark/light theme toggle with context throughout an app

### Callouts required
- Tip: Always create a custom hook for consuming context — useTheme() not useContext(ThemeContext)
- Warning: Do not put everything in one context — split by concern and update frequency
- Warning: Every component consuming a context re-renders when the context value changes
- Mistake: Putting high-frequency updates like mouse position in context — will destroy performance
- Interview: What is prop drilling and how does context solve it?
- Interview: What is the performance issue with context?

### Interview questions required
1. What problem does useContext solve?
2. What is prop drilling?
3. What is the re-render problem with context and how do you minimize it?
4. When should you NOT use context?
5. What is the pattern of wrapping useContext in a custom hook?

### Quiz questions required
1. When does the default value of createContext get used? (When there is no Provider above in the tree)
2. What triggers a re-render in a context consumer? (Any change to the context value)
3. What is the best practice for consuming context? (Wrap it in a custom hook)

---

## 17 — useReducer

### Must explain
- What useReducer is — state + action = new state
- When to use it over useState — complex state, many related fields, many actions
- The reducer function — pure function, takes state and action, returns new state
- Actions — objects with a type field and optional payload
- Dispatch — how you trigger state changes
- The reducer pattern — why it keeps state logic in one place
- Switching on action types — the switch statement pattern
- Why reducers must be pure — no side effects, no mutations
- Combining useReducer with useContext — the Redux-lite pattern
- The difference between useState and useReducer — when each is better
- Action creators — functions that create action objects (optional but common)
- useReducer for multi-step forms
- useReducer for complex UI state

### Code examples required
1. Simple counter with useReducer — increment, decrement, reset
2. The same counter with useState — comparison showing when reducer is better
3. useReducer with multiple action types
4. useReducer with payload — adding a specific amount
5. Todo list with useReducer — add, toggle, delete, clear completed
6. Form state with useReducer — all fields, validation flags, submitted state
7. Multi-step form — next step, previous step, update field, submit
8. useReducer + useContext — global state without a library
9. Action creators — wrapping dispatch calls
10. A complete example — a shopping cart with add, remove, update quantity, clear

### Callouts required
- Tip: Use useReducer when you have 3+ state values that change together
- Tip: Reducers are easy to test — they are just pure functions
- Warning: Never mutate state inside the reducer — always return a new object
- Interview: What is the difference between useState and useReducer?
- Interview: Why must reducers be pure functions?

### Interview questions required
1. What is useReducer and when would you use it over useState?
2. What is the reducer pattern?
3. Why must reducer functions be pure?
4. How do you combine useReducer with useContext for global state?
5. What is an action and what does it typically look like?

### Quiz questions required
1. What does dispatch do? (Sends an action to the reducer to update state)
2. What must a reducer always do? (Return a new state object without mutating the old one)
3. When should you prefer useReducer over useState? (When state has multiple sub-values or complex update logic)

---

## 18 — Custom Hooks

### Must explain
- What a custom hook is — a function starting with use that calls other hooks
- Why custom hooks are useful — extract and reuse stateful logic
- What they share — behavior and logic, not UI
- The naming convention — must start with use
- How React treats custom hooks — applies the rules of hooks to them
- Hook composition — custom hooks calling other custom hooks
- When to extract a custom hook — when logic is repeated in multiple components
- The difference between a custom hook and a utility function
- Custom hooks vs HOCs and render props for sharing logic

### Required custom hooks — must write each fully
Every custom hook must have: explanation, full code, usage example, edge cases

1. **useFetch(url)** — fetches data, returns {data, loading, error}, handles cleanup with abort
2. **useLocalStorage(key, initialValue)** — reads/writes localStorage, syncs across tabs
3. **useDebounce(value, delay)** — delays a value update, useful for search
4. **useToggle(initialValue)** — boolean toggle with on/off/toggle functions
5. **usePrevious(value)** — stores previous render's value
6. **useMediaQuery(query)** — returns true/false for a CSS media query
7. **useClickOutside(ref, handler)** — calls handler when clicking outside a ref element
8. **useWindowSize()** — returns {width, height}, updates on resize with cleanup
9. **useOnlineStatus()** — returns true/false for network status
10. **useInterval(callback, delay)** — declarative setInterval with cleanup
11. **useForm(initialValues)** — form state, onChange handler, reset, touched

### Callouts required
- Tip: Extract a custom hook when the same useState + useEffect combination appears in more than one component
- Tip: Custom hooks make components much cleaner — the component focuses on UI, the hook on logic
- Note: Custom hooks are not components — they do not render anything
- Interview: What is a custom hook and how is it different from a regular function?

### Interview questions required
1. What is a custom hook?
2. What is the difference between a custom hook and a regular utility function?
3. Why must custom hooks start with use?
4. How do you share stateful logic between components without custom hooks (and why hooks are better)?
5. Write a custom useFetch hook.

### Quiz questions required
1. Can a custom hook render JSX? (No — hooks are not components)
2. What naming rule must custom hooks follow? (Must start with use)
3. What can a custom hook do that a regular function cannot? (Call other hooks)

---

## 19 — Styling in React

### Must explain
- Plain CSS — importing a CSS file, global styles, the cascade
- CSS Modules — scoped styles, how they work, the .module.css naming
- Inline styles — the object syntax, when appropriate, limitations (no hover, no media queries)
- Styled-components / Emotion — CSS-in-JS concept, pros and cons
- Tailwind CSS — utility-first, class composition, responsive, dark mode
- Dynamic class composition — building class names based on state/props
- The clsx/classnames library — for clean conditional classes
- Theming basics — CSS custom properties, Tailwind theme config
- Conditional styling — active states, disabled, error states
- Design system thinking — consistent spacing, colors, typography

### Code examples required
1. Plain CSS import — global stylesheet
2. CSS Modules — .module.css file, using styles.className
3. CSS Modules — composes keyword
4. Inline styles — the object syntax
5. Inline styles — dynamic style (progress bar width)
6. Tailwind — basic utility classes
7. Tailwind — responsive classes (sm: md: lg:)
8. Tailwind — dark mode classes
9. Tailwind — conditional classes with template literals (bad) vs clsx (good)
10. clsx / classnames library — clean conditional class composition
11. Dynamic Tailwind — variant-based component (Button with primary/secondary/danger)
12. Styled-components — basic example
13. CSS custom properties for theming
14. A complete example — a Button component with variants using Tailwind and clsx

### Callouts required
- Tip: Use CSS Modules for component styles to avoid class name collisions
- Tip: Use clsx or cn() for conditional Tailwind classes — not string concatenation
- Warning: Do not construct Tailwind class names dynamically like `text-${color}-500` — Tailwind cannot detect them
- Note: Inline styles cannot handle hover, focus, media queries — use CSS for those

### Interview questions required
1. What is the difference between CSS Modules and plain CSS?
2. What is CSS-in-JS?
3. Why should you use clsx for conditional Tailwind classes?
4. What is the utility-first approach in Tailwind?

### Quiz questions required
1. Can you use :hover with inline styles in React? (No — inline styles do not support pseudo-selectors)
2. What does CSS Modules do? (Scopes class names to the component to avoid collisions)

---

## 20 — React Router

### Must explain
- What client-side routing is — URL changes without full page reload
- How React Router works — matches URL to components
- Installation and setup — BrowserRouter, RouterProvider
- Route definitions — path, element
- Nested routes — parent/child layout routes
- Layout routes — shared UI (nav, sidebar) across multiple routes
- Route parameters — /users/:id, useParams
- Query parameters — ?filter=active, useSearchParams
- Navigation — Link, NavLink, useNavigate
- The difference between Link and <a> — no page reload
- NavLink — active styling
- useNavigate — programmatic navigation
- useLocation — reading current location
- 404 pages — catch-all route
- Protected routes — redirect if not authenticated
- Lazy route loading — dynamic import for code splitting
- Data loading with React Router loaders (v6.4+)

### Code examples required
1. Basic router setup
2. Defining routes — multiple pages
3. Link for navigation
4. NavLink with active styling
5. Nested routes — layout route with Outlet
6. Route params — /users/:id page, useParams to read id
7. Query params — useSearchParams for filters
8. useNavigate — programmatic redirect after form submit
9. useLocation — reading current path
10. 404 page — no match route
11. Protected route — redirect to login if not authed
12. Lazy loading a route — React.lazy + Suspense
13. A complete example — a multi-page app with nav, nested routes, protected routes

### Callouts required
- Tip: Use NavLink instead of Link when you need to style the active route
- Tip: Use useNavigate for redirect after form submit or after login
- Warning: Always use <Link> not <a> inside a React Router app — <a> causes a full page reload
- Interview: What is client-side routing?

### Interview questions required
1. What is client-side routing and how does React Router implement it?
2. What is the difference between Link and a regular anchor tag?
3. How do you create a protected route in React Router?
4. What are nested routes and layout routes?
5. How do you read URL parameters?

### Quiz questions required
1. What hook do you use to read URL params like /users/:id? (useParams)
2. What is the difference between Link and NavLink? (NavLink adds an active class when its route matches)
3. How do you programmatically navigate? (useNavigate hook)

---

## 21 — Data Fetching

### Must explain
- Fetch API — the native way to make HTTP requests
- The pattern — loading state, error state, data state
- Data fetching inside useEffect — the basic pattern
- Why you should not fetch in useEffect in real apps — waterfall, duplication, caching
- Race conditions — parallel fetches, which resolves last
- Cleanup and aborting — AbortController
- React Query / TanStack Query — why it exists, what it solves
- Core concepts: queries, mutations, query keys
- Caching — what it means, stale time, gc time
- Background refetching — data stays fresh automatically
- Retry logic — automatic retry on failure
- Loading and error states with React Query
- Mutations — POST/PUT/DELETE with useMutation
- Optimistic updates — updating UI before server confirms
- Pagination — useInfiniteQuery
- Query invalidation — refetch after mutation
- Server state vs client state — the fundamental distinction

### Code examples required
1. Basic fetch in useEffect — loading, data, error states
2. Race condition — the problem with multiple fetches
3. AbortController — cancelling fetch on cleanup
4. The same fetch with React Query — how much simpler it is
5. useQuery — basic data fetching
6. Query keys — how they work, nesting, dependencies
7. Dependent queries — fetch B only after A succeeds
8. useMutation — POST request
9. Invalidating query after mutation — refetch list after adding item
10. Optimistic update — add item to UI before server responds
11. Pagination — page-based
12. Infinite scroll — useInfiniteQuery
13. Global error handling with React Query
14. Prefetching — load data before user navigates
15. A complete example — a CRUD list with React Query: list, add, edit, delete

### Callouts required
- Tip: Use React Query instead of raw useEffect for data fetching in real apps
- Warning: Never ignore the race condition problem in useEffect fetching
- Tip: Query keys are like dependency arrays — include everything the query depends on
- Interview: What is the difference between server state and client state?
- Interview: What is an optimistic update?

### Interview questions required
1. What is the difference between server state and client state?
2. What is a race condition in data fetching and how do you prevent it?
3. What does React Query give you over a raw useEffect fetch?
4. What is an optimistic update?
5. What is query invalidation?

### Quiz questions required
1. What does React Query cache? (Server responses, associated with query keys)
2. What is an optimistic update? (Updating the UI before the server responds)

---

## 22 — Forms at Real-World Level

### Must explain
- React Hook Form — why it exists, uncontrolled inputs under the hood, performance
- register — connecting inputs to React Hook Form
- handleSubmit — validation + submit handling
- formState — errors, isSubmitting, isDirty, isValid
- watch — watching field values
- setValue, getValues, reset — programmatic control
- Controller — for controlled third-party inputs (Select, DatePicker)
- Field arrays — useFieldArray for dynamic list of inputs
- Zod for schema validation — define schema, infer TypeScript types
- zodResolver — connecting Zod to React Hook Form
- Async validation — checking if username exists in DB
- Multi-step forms — one form across multiple screens
- File upload handling — preview, progress
- Error summary — show all errors at top of form
- Accessibility in forms — labels, aria-describedby for errors

### Code examples required
1. React Hook Form — basic login form
2. Validation rules inline — required, minLength, pattern
3. Zod schema + zodResolver — the full setup
4. Zod with TypeScript type inference — z.infer<typeof schema>
5. formState errors — showing error messages
6. watch — real-time field preview
7. Controller — wrapping a custom Select component
8. useFieldArray — dynamic list of inputs (add/remove row)
9. Async validation — checking username availability
10. Multi-step form — wizard with back/next
11. File input with preview
12. Resetting the form after success
13. isDirty — warn user before leaving with unsaved changes
14. A complete example — a full registration form with Zod, all field types, errors, submit

### Callouts required
- Tip: React Hook Form uses uncontrolled inputs under the hood — much better performance than controlled for large forms
- Tip: Define your Zod schema first, infer the TypeScript type from it
- Interview: What is the difference between React Hook Form and controlled form state?

### Interview questions required
1. Why is React Hook Form more performant than controlled form state?
2. What is Zod and why do you use it with React Hook Form?
3. What is a field array?
4. How do you handle async validation?

### Quiz questions required
1. What does React Hook Form use under the hood? (Uncontrolled inputs with refs)
2. What does zodResolver do? (Connects Zod schema validation to React Hook Form)

---

## 23 — Performance Optimization

### Must explain
- Why components re-render — state change, prop change, parent re-render
- The re-render chain — parent re-renders → all children re-render by default
- When re-renders are actually a problem — not always, measure first
- React.memo — prevents re-render if props did not change
- useMemo — caches expensive computed value
- useCallback — caches function reference to prevent child re-renders
- The relationship — React.memo + useCallback work together
- When NOT to memoize — the cost of over-optimization
- Key stability — unstable keys cause unnecessary unmount/remount
- Avoiding state too high — lifting state too high causes too many re-renders
- Large list rendering — why rendering 10,000 items kills performance
- Virtualization — react-window, react-virtual — only render visible items
- Code splitting — React.lazy + Suspense, dynamic imports
- Lazy loading components — load only when needed
- Bundle size awareness — what goes into the bundle
- Profiling — React DevTools Profiler, what to look for
- The mindset — measure first, optimize only bottlenecks

### Code examples required
1. The re-render chain — parent renders, child re-renders unnecessarily
2. React.memo — wrapping a child to prevent unnecessary re-renders
3. React.memo failing — because of an unstable function prop
4. useCallback — stabilizing the function prop
5. useMemo — caching an expensive sort/filter calculation
6. The React.memo + useCallback pair — the complete pattern
7. When useMemo is NOT needed — cheap computation
8. Unstable key causing remount — wrong and right
9. State too high — causing too many re-renders
10. Code splitting — React.lazy + Suspense
11. Dynamic import — loading a component only when a button is clicked
12. react-window — virtualizing a long list
13. Using React DevTools Profiler — what a flame graph tells you
14. A complete example — an optimized dashboard with memo, lazy routes, virtualized list

### Callouts required
- Tip: Profile before optimizing. Most re-renders are not actually slow.
- Warning: Overusing useMemo and useCallback adds complexity without benefit in most cases
- Tip: React.memo only helps if the memoized child is expensive to render
- Tip: useMemo for computation, useCallback for function identity, React.memo for component
- Interview: What is the difference between useMemo and useCallback?

### Interview questions required
1. Why do components re-render in React?
2. What is React.memo and when should you use it?
3. What is the difference between useMemo and useCallback?
4. What is virtualization and when do you need it?
5. What is code splitting?
6. When should you NOT optimize?

### Quiz questions required
1. What does React.memo do? (Prevents re-render if props did not change)
2. What is the difference between useMemo and useCallback? (useMemo caches a value, useCallback caches a function)
3. When should you add memoization? (After measuring — not by default)

---

## 24 — Advanced Rendering Concepts

### Must explain
- Reconciliation — how React compares old and new virtual DOM
- The diffing algorithm — same type = update, different type = replace
- Keys and identity — how keys help reconciliation
- Render phase — pure, no side effects, can be interrupted
- Commit phase — applies changes to DOM, runs effects
- Batching — React groups multiple setState calls into one render
- Automatic batching in React 18 — even async events batch
- Concurrent rendering — React can pause and resume rendering
- Transitions — marking updates as non-urgent with useTransition
- useDeferredValue — defer a value to keep UI responsive
- Suspense — showing fallback while something is loading
- Streaming UI — sending HTML in chunks (server-side concept)
- Strict mode double rendering — why it happens

### Code examples required
1. Reconciliation — same component type vs different type, what happens
2. Key importance — list reorder with and without stable keys
3. Batching — multiple state updates in one event handler
4. Automatic batching — in setTimeout, promises (React 18)
5. useTransition — marking a slow state update as non-urgent
6. useDeferredValue — keeping input responsive while list filters
7. Suspense — wrapping a lazy component
8. Suspense — wrapping data fetching (with React Query or use())
9. A complete example — a search with deferred value so typing stays fast

### Callouts required
- Note: Concurrent rendering does not mean multi-threaded — JavaScript is still single-threaded
- Tip: Use useTransition when a state update is slow and you want the UI to stay responsive
- Interview: What is reconciliation?
- Interview: What is the difference between render phase and commit phase?

### Interview questions required
1. What is reconciliation in React?
2. What is the difference between the render phase and commit phase?
3. What is automatic batching in React 18?
4. What is useTransition and when do you use it?
5. What is Suspense?

### Quiz questions required
1. What does React use to efficiently update the DOM? (Reconciliation / Virtual DOM diffing)
2. What does useTransition do? (Marks a state update as non-urgent so UI stays responsive)

---

## 25 — Error Handling

### Must explain
- Error boundaries — what they catch, what they do not catch
- Class component requirement for error boundaries (getDerivedStateFromError)
- Using react-error-boundary library — the practical approach
- What errors error boundaries do NOT catch — async errors, event handlers
- Handling async errors — try/catch, error state
- API failure handling — show user-friendly messages
- Fallback UI — what to show when something crashes
- Retry flows — let user try again
- Error logging — sending errors to a service like Sentry
- Error parsing — reading error shape from API responses
- Global vs local error boundaries — where to place them

### Code examples required
1. Error boundary — wrapping a component that might crash
2. react-error-boundary — ErrorBoundary component with fallback
3. useErrorBoundary — triggering error boundary from async code
4. try/catch in event handler — handling non-render errors
5. API error state — catch fetch errors, show message
6. Retry button — reset error boundary and try again
7. Error parsing — reading error.message vs error.data.message
8. Error boundary placement — multiple boundaries for different sections
9. A complete example — a dashboard where one widget can fail without crashing the page

### Callouts required
- Warning: Error boundaries do not catch errors in async code or event handlers
- Tip: Use react-error-boundary library instead of writing class components
- Tip: Place error boundaries around independent sections — not just one at the top
- Interview: What is an error boundary and what does it not catch?

### Interview questions required
1. What is an error boundary?
2. What errors does an error boundary NOT catch?
3. How do you handle async errors in React?
4. What is the fallback UI pattern?

### Quiz questions required
1. What does an error boundary catch? (Errors during rendering of child components)
2. What does it NOT catch? (Async errors, event handler errors)

---

## 26 — React Design Patterns

### Must explain and show each pattern fully with code
- Composition over inheritance — build complex from simple, not extend
- Compound components — components that work together (Select + Option, Tabs + Tab)
- Render props — passing a function as a child or prop
- Higher-order components — function that takes a component, returns enhanced component
- Controlled/uncontrolled component pattern — let parent control or let component manage itself
- Headless component pattern — logic without UI, let consumer provide UI
- Provider pattern — context-based dependency injection
- Container/presentational pattern — separate logic from rendering

### Code examples required — one complete example per pattern
1. Composition — building a Card from Header, Body, Footer pieces
2. Compound components — Tabs component (Tabs, TabList, Tab, TabPanel)
3. Compound components — Accordion (same idea, different UI)
4. Render props — Mouse tracker passing position to child
5. HOC — withAuth HOC that redirects if not authenticated
6. HOC — withLogging HOC
7. Controlled component pattern — Calendar that works both ways
8. Headless component — useCombobox logic hook, consumer provides UI
9. Provider pattern — ThemeProvider
10. Container/presentational — UserList (container) + UserCard (presentational)

### Interview questions required
1. What is composition over inheritance?
2. What are compound components?
3. What is a higher-order component?
4. What is the headless component pattern?
5. What is the difference between render props and custom hooks for sharing logic?

---

## 27 — Accessibility in React

### Must explain
- Why accessibility matters — legal, moral, practical
- Semantic HTML in React — using the right element for the right purpose
- Keyboard navigation — every interactive element must be keyboard accessible
- Focus management — where focus goes after actions (modal open/close)
- ARIA basics — role, aria-label, aria-labelledby, aria-describedby
- Accessible forms — label for every input, error messages linked with aria-describedby
- Accessible modals — focus trap, aria-modal, role=dialog, Escape to close
- Screen reader support — testing with VoiceOver/NVDA
- Color contrast awareness — 4.5:1 ratio for normal text
- Announcements for dynamic content — aria-live regions
- Skip to content link

### Code examples required
1. Semantic HTML — wrong (div soup) vs right (header, main, nav, button)
2. Button vs div for click — why button is right
3. Keyboard accessible custom component — onKeyDown for Enter and Space
4. Focus trap in modal — keeping focus inside
5. aria-label and aria-labelledby — icon buttons
6. Accessible form — every input has a label, errors linked with aria-describedby
7. aria-live region — announcing search results count
8. Skip to content link
9. A complete accessible modal

### Interview questions required
1. What is ARIA and when should you use it?
2. What is focus management and why does it matter?
3. What is a focus trap?
4. How do you make a custom button accessible?

---

## 28 — Testing React Apps

### Must explain
- Why testing matters — confidence to change code
- Unit vs integration vs E2E — what each tests, when each is appropriate
- React Testing Library — test behavior not implementation
- Key queries — getByRole, getByLabelText, getByText, findBy (async), queryBy (might not exist)
- userEvent — simulating user interactions
- Mocking API requests — MSW (Mock Service Worker)
- Testing hooks — renderHook
- Accessible queries — why getByRole is preferred
- Vitest / Jest — test runner setup
- What to test and what not to test
- Testing forms — fill, submit, assert
- Testing async — waitFor, findBy
- Testing routing
- Accessibility assertions — toBeVisible, toHaveFocus

### Code examples required
1. Basic render test — component renders without crashing
2. getByRole — finding elements by ARIA role
3. userEvent.click — simulating click
4. userEvent.type — filling an input
5. Testing a form — fill all fields, submit, assert success
6. Async test — waitFor an element to appear after fetch
7. Mocking fetch with MSW — intercept request, return fake data
8. Testing a custom hook with renderHook
9. Testing error state — mock API failure
10. A complete test file for a todo list component

### Interview questions required
1. What is the difference between unit, integration, and E2E tests?
2. Why does React Testing Library recommend testing behavior not implementation?
3. What is MSW and why do you use it for testing?
4. Why is getByRole preferred over getByTestId?

---

## 29 — TypeScript with React

### Must explain
- Typing props — interface vs type, when each
- Typing state — inferred vs explicit
- Event types — React.ChangeEvent, React.MouseEvent, React.FormEvent
- Children types — React.ReactNode, React.PropsWithChildren
- Refs typing — useRef<HTMLInputElement>(null)
- Generic components — components that work with any type
- Utility types — Partial, Required, Pick, Omit, ReturnType
- Discriminated unions — for variant props
- Typing context — createContext with TypeScript
- Typing reducers — action type unions
- Typing custom hooks
- Type-safe forms with Zod inference
- Type-safe API responses

### Code examples required
1. Typing props with interface
2. Typing props with type
3. Optional props — the ? modifier
4. Typing children prop
5. React.ChangeEvent for input onChange
6. React.FormEvent for form onSubmit
7. useRef with type — HTMLInputElement
8. Generic component — List<T> that works with any item type
9. Discriminated union — Button with variant: 'primary' | 'danger'
10. Typing context with TypeScript
11. Typing useReducer — State type + Action union type
12. Partial, Pick, Omit utility types with real examples
13. Zod schema type inference — z.infer<typeof schema>
14. Typing an API response

### Interview questions required
1. What is the difference between interface and type in TypeScript?
2. What is a discriminated union and when do you use it in React?
3. How do you type the children prop?
4. What is a generic component?

---

## 30 — State Management Libraries

### Must explain
- When context is enough — low-frequency, low-complexity global state
- When to reach for a library — complex async state, DevTools, large team
- Redux Toolkit — the modern Redux, createSlice, configureStore, useSelector, useDispatch
- Zustand — minimal, simple, no boilerplate
- Jotai — atomic state, fine-grained reactivity
- The concepts that apply to all — store, actions, selectors, middleware
- Async state — thunks in Redux Toolkit
- DevTools — Redux DevTools, Zustand DevTools
- Normalized state — avoid duplicating data
- When to use which — decision guide

### Code examples required
1. Zustand — basic store, reading, updating
2. Zustand — async action (fetch and store)
3. Zustand — devtools middleware
4. Redux Toolkit — createSlice
5. Redux Toolkit — configureStore
6. Redux Toolkit — useSelector and useDispatch
7. Redux Toolkit — async thunk
8. Jotai — atom, useAtom
9. Same feature in all three — counter with async fetch — side by side comparison

### Interview questions required
1. When would you use Redux over Zustand?
2. What is a selector?
3. What is normalized state?
4. What is a thunk?

---

## 31-42 — Remaining Advanced Topics

Each of these topics must follow the same depth standard. They are not listed here in exhaustive detail but must cover everything in the original topic list shared in this project. Key emphasis:

- **31 Server Components** — CSR/SSR/SSG/ISR clearly explained, hydration, RSC vs client components, data fetching on server
- **32 Next.js Concepts** — covered fully in Next.js track
- **33 Folder Structure** — feature-based structure with real file tree examples
- **34 API Integration** — axios wrapper, error parsing, token handling, refresh flow, abort, debounced search
- **35 Authentication** — JWT, token storage tradeoffs, protected routes, role-based UI, OAuth flow
- **36 Real-time** — polling vs WebSocket vs SSE, when each, chat UI pattern
- **37 Advanced Forms** — multi-step wizard, autosave, undo/redo, schema-driven
- **38 React Internals** — Fiber basics, hook ordering, strict mode double render, why hooks must be consistent
- **39 Production Readiness** — env config, error tracking, feature flags, analytics, performance budgets
- **40 Ecosystem Tools** — Vite, ESLint, Prettier, Storybook, DevTools, TanStack Query, RHF, Zod, Zustand, Framer Motion
- **41 Enterprise Thinking** — how to split components, avoid prop drilling, choose state type, review React code
- **42 Senior Interview Questions** — full answers to all 15 questions listed in the original topic document

---

## React Track Expansion — Modern React Additions

These topics are approved additions to the React architecture. They are not part of the original 42-topic core, but they should be written next if the goal is to keep the React track aligned with the current official React docs and modern production patterns.

### 43 — useMemo and useCallback

#### Must explain
- What `useMemo` does — memoizing a calculated value
- What `useCallback` does — memoizing a function reference
- The difference between caching a value and caching a function
- Why these hooks are optimization tools, not default coding style
- When they help and when they add unnecessary complexity
- How they interact with `React.memo`
- Common anti-patterns — wrapping everything in memoization
- How to reason about dependency arrays for both hooks

#### Code examples required
1. Expensive filtered list with `useMemo`
2. Stable callback passed to a memoized child with `useCallback`
3. `useMemo` used incorrectly for cheap work, then simplified
4. `useCallback` used correctly in a list item action example
5. `React.memo` + `useCallback` together in a realistic parent/child flow

### 44 — useLayoutEffect and useEffectEvent

#### Must explain
- The difference between `useEffect` and `useLayoutEffect`
- When layout measurement needs to happen before paint
- Why `useLayoutEffect` should stay rare
- What `useEffectEvent` solves in modern React
- The stale-closure problem in effects
- Separating reactive dependencies from event-like logic
- Performance and flicker tradeoffs

#### Code examples required
1. DOM measurement with `useLayoutEffect`
2. Tooltip or popover positioning before paint
3. A bad `useLayoutEffect` example that should be `useEffect`
4. A stale closure problem in an effect
5. The same effect improved with `useEffectEvent`

### 45 — useId and imperative React APIs

#### Must explain
- What `useId` is and why it matters for accessibility
- Why generated IDs should be stable across renders
- Linking labels, hints, and error text accessibly
- When imperative APIs are needed in React
- `useImperativeHandle` mental model
- Parent-to-child imperative control as an escape hatch, not the default pattern
- When refs are appropriate and when state/props are better

#### Code examples required
1. Accessible input with label and help text using `useId`
2. Field group with shared generated IDs
3. Exposing `focus()` with `useImperativeHandle`
4. Parent controlling a child input via an imperative handle
5. Example showing when imperative code should be replaced with declarative state

### 46 — Transitions and deferred rendering

#### Must explain
- What transitions are in React
- The difference between urgent updates and non-urgent updates
- `useTransition` and `startTransition`
- `useDeferredValue` and how it helps with slow rendering
- Why transitions improve perceived responsiveness
- What transitions do not solve
- How these APIs fit into search, filters, and large lists

#### Code examples required
1. Search input with urgent text update and non-urgent results update
2. `startTransition` in an event handler
3. `useTransition` with pending UI
4. `useDeferredValue` for a large filtered list
5. Comparison of no transition vs transition behavior

### 47 — Suspense, lazy, and use()

#### Must explain
- What Suspense does conceptually
- What `lazy()` does and when code splitting helps
- Fallback UI and loading boundaries
- Why Suspense is about coordinating async rendering, not just spinners
- What `use()` is at a high level and where it appears in modern React patterns
- The difference between component lazy loading and data waiting
- Boundary placement tradeoffs

#### Code examples required
1. Lazy-loaded component with `lazy()` and `<Suspense>`
2. Route-level or section-level fallback boundary
3. Nested Suspense boundaries
4. Bad boundary placement vs better boundary placement
5. A simple conceptual `use()` example explained carefully

### 48 — Modern React form actions

#### Must explain
- What changed in modern React form handling
- `useActionState` mental model
- `useFormStatus` mental model
- Pending state, success state, and validation state
- How action-based form flows differ from old submit handlers
- Where this pattern fits best
- When a normal controlled form is still simpler

#### Code examples required
1. Basic form with `useActionState`
2. Submit button using `useFormStatus`
3. Form returning field error messages
4. Success message after action completion
5. Comparison between classic submit handler and action-based flow

### 49 — Optimistic UI with React

#### Must explain
- What optimistic UI means
- Why optimistic updates improve perceived speed
- `useOptimistic` mental model
- How to rollback when the server fails
- Which actions are safe or risky to make optimistic
- Temporary IDs and pending states
- The difference between optimistic UI and simply showing a spinner

#### Code examples required
1. Like button with optimistic count update
2. Todo item added optimistically, then confirmed
3. Failed optimistic update with rollback
4. Pending row style for optimistic items
5. Comparison of pessimistic vs optimistic UX

### 50 — External stores and React Compiler awareness

#### Must explain
- What `useSyncExternalStore` solves
- Why external subscriptions need a consistent React integration path
- When app state belongs outside component state
- How React Compiler changes the conversation around manual memoization
- Why compiler awareness matters even if the app is not using it yet
- What should still stay true with or without the compiler — pure rendering, stable ownership, avoiding premature optimization
- Where `useDebugValue` belongs — custom hooks and debugging visibility

#### Code examples required
1. Minimal external store with `useSyncExternalStore`
2. Derived selector from an external store snapshot
3. Shared browser event source exposed through an external store
4. Custom hook with `useDebugValue`
5. Before/after example showing code that benefits more from purity than manual memoization

---

# NEXT.JS TRACK

---

## 01 — What Next.js Is

### Must explain
- What Next.js is — a React framework, not a library
- The difference between a library (React) and a framework (Next.js)
- What Next.js adds on top of React — routing, server rendering, data fetching patterns, caching, image/font optimization, metadata, deployment conventions
- Why people use Next.js over plain React for production apps
- Server rendering vs client rendering — the core difference and why it matters
- Performance and SEO advantages of server rendering
- Why Next.js is popular in real production jobs
- The core idea — Next.js is opinionated React with batteries included

### Code examples required
1. A plain React app vs a Next.js app — what you have to build yourself vs what Next.js gives you
2. The simplest possible Next.js page — just a file that exports a component
3. How routing works out of the box — no react-router needed
4. Fetching data directly in a server component — no useEffect needed
5. What the browser receives from a server-rendered page vs a client-rendered page (HTML source comparison)

### Callouts required
- Note: React is a library — you assemble the pieces. Next.js is a framework — conventions are built in
- Tip: If you are building a production app with SEO requirements, Next.js is the standard choice in the React ecosystem
- Interview: What does Next.js add on top of React?

### Interview questions required
1. What is Next.js and why would you use it instead of plain React?
2. What is the difference between a library and a framework?
3. What are the main features Next.js provides out of the box?
4. What are the SEO advantages of server-side rendering?

### Quiz questions required
1. What does Next.js add that plain React does not have? (Routing, server rendering, data fetching patterns, image optimization, and more)
2. Is Next.js a library or a framework? (Framework)

---

## 02 — Installation and Project Setup

### Must explain
- create-next-app — the official way to start
- TypeScript option — always use it
- ESLint setup — included by default
- Tailwind option — how to enable during setup
- App Router vs Pages Router choice — always choose App Router for new projects
- Import aliases — what @/* means and how it works
- Running the dev server — npm run dev
- Node.js version requirement — 20.9+ minimum
- What each generated file and folder does
- Turbopack — what it is, why it makes dev faster

### Code examples required
1. The exact create-next-app command with all recommended options
2. What each file in the generated project does — annotated file tree
3. Running dev server and what you see
4. The tsconfig.json paths setup for @/* aliases
5. Adding a dependency — npm install example
6. The difference between dev, build, and start commands

### Callouts required
- Tip: Always choose TypeScript and ESLint during setup — retrofitting them is painful
- Tip: App Router is the modern default — use it for all new projects
- Note: Node.js 20.9+ is required — check your version with node -v

### Interview questions required
1. What is the minimum Node.js version for Next.js?
2. What does the @/* import alias do?
3. What is the difference between npm run dev and npm run build?

### Quiz questions required
1. Which router should you use for new Next.js projects? (App Router)
2. What command creates a new Next.js project? (npx create-next-app@latest)

---

## 03 — Project Structure

### Must explain
- The app/ directory — the heart of the App Router
- The public/ folder — static assets, served at root URL
- The src/ optional wrapper — why some projects use it
- next.config.ts — configuration file
- package.json — scripts, dependencies
- tsconfig.json — TypeScript config, path aliases
- Where components live — no fixed convention, but patterns exist
- Where utils, hooks, lib, types folders go
- Why file conventions in Next.js matter — the framework reads your file names
- Co-location — keeping component files near their routes

### Code examples required
1. Full annotated project structure — every folder and file explained
2. A feature-based folder structure inside app/
3. Where to put shared components — components/ folder
4. Where server-only utilities go — lib/ folder
5. Route grouping with (groups) — organizing routes without affecting URL

### Callouts required
- Tip: Next.js reads your file names — page.tsx, layout.tsx, loading.tsx are not suggestions, they are conventions
- Tip: Co-locate component files with their routes when they are only used there
- Note: The public/ folder is served at / — public/logo.png is accessible at /logo.png

### Interview questions required
1. What is the purpose of the app/ directory in Next.js?
2. What is the public/ folder used for?
3. What is route grouping and how does it work?

### Quiz questions required
1. Where do static assets go in Next.js? (public/ folder)
2. What does a (groupName) folder do to the URL? (Nothing — route groups do not affect the URL)

---

## 04 — App Router Basics

### Must explain
- What App Router is — the modern routing system introduced in Next.js 13
- Why it replaced the older Pages Router as the recommended approach
- File-system routing — folder structure = URL structure
- Route segments — each folder is a segment
- Nested routes — folders inside folders
- Route grouping — (group) folders that do not affect URLs
- Special route files — what each does
  - page.tsx — the UI for that route
  - layout.tsx — shared UI that wraps pages
  - loading.tsx — loading UI
  - error.tsx — error UI
  - not-found.tsx — 404 UI
  - template.tsx — re-renders on navigation (unlike layout)
  - default.tsx — parallel routes default
- How the App Router composes these files together

### Code examples required
1. Basic route setup — folder structure and the page.tsx file
2. Creating a new route — /about, /contact, /dashboard
3. Nested routes — /dashboard/settings, /dashboard/profile
4. Route grouping — (auth)/login and (auth)/register without (auth) in URL
5. All special files in one route — page, layout, loading, error, not-found
6. How Next.js composes layouts and pages together
7. A realistic app folder structure with multiple routes

### Callouts required
- Tip: Only page.tsx makes a route publicly accessible — other files in a route folder are not routes
- Note: App Router and Pages Router can coexist during migration but should not be mixed intentionally
- Interview: What is the difference between layout.tsx and template.tsx?

### Interview questions required
1. What is the App Router and how does it differ from Pages Router?
2. What is the difference between page.tsx and layout.tsx?
3. What is route grouping and when would you use it?
4. What is the difference between layout.tsx and template.tsx?
5. What special files does the App Router recognize?

### Quiz questions required
1. What file makes a folder a public route in App Router? (page.tsx)
2. What does a route group folder (groupName) affect? (Nothing in the URL — only file organization)

---

## 05 — Pages and Layouts

### Must explain
- What page.tsx does — the unique UI for a route
- What layout.tsx does — shared UI that wraps child routes
- Root layout — required, wraps entire app, must include html and body tags
- Nested layouts — layout at /dashboard wraps all /dashboard/* routes
- Why layouts do not re-render on navigation — persistent UI
- When to use layout vs page
- Route-level composition — how Next.js nests layouts and pages
- Passing data to layouts — limitations (layouts do not get search params)
- Parallel routes basics — showing two routes at the same time
- Intercepting routes basics — showing a modal over the current page

### Code examples required
1. Root layout — the required app/layout.tsx with html and body
2. A nested layout — app/dashboard/layout.tsx wrapping dashboard pages
3. A page component — app/dashboard/page.tsx
4. How layout and page compose — the visual nesting
5. Persistent UI in layout — nav and sidebar that stay on navigation
6. Multiple nested layouts — root → dashboard → settings
7. Layout with its own data fetching
8. A complete example — root layout with nav, dashboard layout with sidebar, dashboard page with content

### Callouts required
- Tip: The root layout is required and must include html and body tags — Next.js will not add them automatically
- Tip: Layouts are the right place for nav, sidebars, and any UI that should not re-render on page change
- Warning: Layouts do not receive searchParams — only pages do
- Interview: Why do layouts not re-render when navigating between child routes?

### Interview questions required
1. What is the difference between a layout and a page in Next.js?
2. Why must the root layout include html and body tags?
3. Why do layouts not re-render on navigation?
4. Can a layout fetch data?

### Quiz questions required
1. Which file must include the html and body tags? (Root layout — app/layout.tsx)
2. Do layouts re-render when navigating between their child pages? (No — layouts persist)

---

## 06 — Navigation

### Must explain
- Link component — client-side transitions, no full page reload
- Why Link is better than anchor tag in a Next.js app
- Prefetching — Next.js prefetches linked routes automatically in production
- Active navigation patterns — how to style the active link
- useRouter — programmatic navigation
- usePathname — reading current path
- useSearchParams — reading query params on client
- redirect() — server-side redirect function
- Dynamic route navigation — constructing URLs with params
- Navigation performance — how prefetching keeps navigation instant
- Scroll behavior — Next.js scrolls to top on navigation by default

### Code examples required
1. Basic Link usage
2. Link vs anchor tag — what happens with each
3. NavLink pattern — styling active links with usePathname
4. Programmatic navigation — useRouter().push() after form submit
5. Replacing history — router.replace() vs router.push()
6. Back navigation — router.back()
7. redirect() in a server component or server action
8. Link with dynamic route — href={`/users/${id}`}
9. Prefetching behavior — how to disable it
10. A complete nav component with active state

### Callouts required
- Warning: Never use anchor tag <a> inside a Next.js app for internal links — it causes a full page reload
- Tip: Use usePathname to determine the active route for styling
- Tip: Prefetching happens automatically for Link components in the viewport — no code needed
- Interview: How does navigation work in Next.js without a full page reload?

### Interview questions required
1. What is the difference between Link and an anchor tag in Next.js?
2. What is prefetching and how does Next.js handle it?
3. How do you navigate programmatically in Next.js?
4. What is the difference between router.push() and router.replace()?

### Quiz questions required
1. What triggers a full page reload in Next.js navigation? (Using anchor tag instead of Link)
2. Which hook do you use to read the current pathname? (usePathname)

---

## 07 — Dynamic Routes

### Must explain
- What dynamic routes are — routes with variable segments
- Folder naming — [slug], [id], [username]
- Reading route params — params prop in page component
- Nested dynamic routes — /users/[id]/posts/[postId]
- Catch-all routes — [...slug] for any number of segments
- Optional catch-all — [[...slug]]
- generateStaticParams — pre-generating dynamic routes at build time
- Dynamic vs static rendering for dynamic routes
- Content-driven routes — blog posts, product pages, user profiles
- notFound() — returning 404 for invalid slugs

### Code examples required
1. Basic dynamic route — /users/[id]/page.tsx
2. Reading the id param from params
3. Nested dynamic route — /users/[userId]/posts/[postId]
4. Catch-all route — /docs/[...slug]
5. Optional catch-all — /[[...slug]]
6. generateStaticParams for a blog — pre-generating post pages
7. generateStaticParams for nested routes
8. notFound() — showing 404 for missing data
9. A complete example — a blog with /posts/[slug] including generateStaticParams and notFound

### Callouts required
- Tip: Use generateStaticParams to pre-generate dynamic routes for static export
- Tip: Always call notFound() when the data for a slug does not exist
- Interview: What is the difference between [slug] and [...slug]?

### Interview questions required
1. How do you create a dynamic route in Next.js?
2. What is generateStaticParams and why do you need it for static export?
3. What is the difference between [slug], [...slug], and [[...slug]]?
4. How do you handle a dynamic route where the data does not exist?

### Quiz questions required
1. What folder name creates a dynamic route segment? ([slug] or [id] or any [param])
2. What does generateStaticParams do? (Pre-generates all possible paths for a dynamic route at build time)

---

## 08 — Loading UI and Streaming

### Must explain
- loading.tsx — the file convention for route-level loading UI
- How loading.tsx works — automatic Suspense boundary wrapping the page
- What streaming is — sending HTML in chunks as it becomes ready
- Why streaming improves perceived performance
- Suspense — wrapping slow components to show fallback while they load
- Splitting slow and fast parts of UI — show fast content immediately
- The difference between loading.tsx (route-level) and Suspense (component-level)
- Skeleton UI in loading states — matching shape of real content

### Code examples required
1. Basic loading.tsx — a simple spinner for a route
2. Skeleton loading.tsx — matching the shape of the real content
3. Suspense around a slow component inside a page
4. Page with multiple Suspense boundaries — fast and slow parts
5. Streaming data — async component wrapped in Suspense
6. A complete example — dashboard where analytics load slowly but the shell appears immediately

### Callouts required
- Tip: loading.tsx automatically wraps your page in a Suspense boundary — you do not have to write it
- Tip: Use Suspense at the component level when only part of the page is slow
- Tip: Skeleton UI feels faster than a spinner — it sets expectations about what is coming

### Interview questions required
1. What does loading.tsx do in Next.js App Router?
2. What is streaming and how does it improve UX?
3. What is the difference between loading.tsx and Suspense?

### Quiz questions required
1. What does loading.tsx automatically create? (A Suspense boundary around the page)
2. What is streaming? (Sending HTML in chunks as content becomes ready, rather than waiting for everything)

---

## 09 — Error Handling

### Must explain
- error.tsx — the file convention for route-level error boundaries
- Must be a Client Component — why (needs to use hooks for reset)
- What error.tsx catches — rendering errors in that route segment
- The reset function — letting users try again without full reload
- Segment-level error isolation — one section crashes, rest of app works
- global-error.tsx — catching errors in the root layout
- Expected errors vs unexpected errors — different handling strategies
- API error handling — checking response status, parsing error shapes
- User-friendly error messages — not showing raw error text
- Logging errors — sending to a service like Sentry

### Code examples required
1. Basic error.tsx — showing an error message with a retry button
2. error.tsx with the reset function
3. Nested error boundaries — /dashboard/error.tsx vs /error.tsx
4. global-error.tsx for root layout errors
5. API error handling — fetch with error status check
6. Custom error classes
7. A complete example — a page that can fail with a nice recovery UI

### Callouts required
- Warning: error.tsx must be a Client Component — add 'use client' at the top
- Tip: Use segment-level error.tsx files so one failure does not crash the whole app
- Interview: What is the difference between error.tsx and global-error.tsx?

### Interview questions required
1. What does error.tsx do in Next.js?
2. Why must error.tsx be a Client Component?
3. What is the reset function in error.tsx?
4. What is global-error.tsx and when do you need it?

### Quiz questions required
1. What directive must error.tsx have? ('use client')
2. What does the reset function do? (Attempts to re-render the route segment without a full page reload)

---

## 10 — Not Found Handling

### Must explain
- not-found.tsx — the file convention for 404 UI
- How Next.js serves it automatically for unmatched routes
- Calling notFound() manually from a page or server action
- Route-level not-found — /dashboard/not-found.tsx vs root not-found.tsx
- Invalid slugs — fetching data and calling notFound() if null
- Clean production 404 UX — helpful message, navigation back

### Code examples required
1. Root not-found.tsx — the global 404 page
2. Calling notFound() in a dynamic route when data is missing
3. Route-level not-found.tsx — custom 404 for a specific section
4. A complete example — blog post page that shows 404 for missing slugs

### Callouts required
- Tip: Always call notFound() when data for a dynamic route does not exist — never render a broken page
- Note: notFound() throws internally — code after it does not run

### Interview questions required
1. How do you handle a missing resource in a dynamic Next.js route?
2. What is the difference between root not-found.tsx and a route-level one?

### Quiz questions required
1. What function do you call to trigger a 404 in a Next.js page? (notFound())

---

## 11 — Server Components

### Must explain
- What Server Components are — React components that render only on the server
- Default behavior — all components in App Router are Server Components unless marked otherwise
- What you can do in Server Components that you cannot in Client Components
  - async/await directly in the component
  - access databases, file system, environment secrets
  - import server-only packages
- What you cannot do in Server Components
  - useState, useEffect, or any hooks
  - event handlers (onClick etc.)
  - browser APIs (window, localStorage)
- Why Server Components exist — reduce client JavaScript, better performance, simpler data fetching
- How Server Components and Client Components compose — passing server data to client components
- server-only package — preventing server code from leaking to client
- The mental model — Server Components are like async templates that run on the server

### Code examples required
1. A basic async Server Component — fetching data directly
2. Server Component accessing an environment variable safely
3. Server Component importing a server-only database module
4. Passing Server Component data down to a Client Component as props
5. server-only package — preventing accidental client import
6. A Server Component that fetches user data and passes to a Client Component for interaction
7. Composing Server and Client Components — interleaving them correctly
8. A complete example — a dashboard page where layout is server, interactive widgets are client

### Callouts required
- Tip: Server Components can be async — just add async to the function and await inside
- Warning: You cannot use useState, useEffect, or any hooks in a Server Component
- Warning: Never access secrets or database in a Client Component
- Interview: What is the difference between a Server Component and a Client Component?

### Interview questions required
1. What is a React Server Component?
2. What can you do in a Server Component that you cannot in a Client Component?
3. Why do Server Components improve performance?
4. How do you pass data from a Server Component to a Client Component?
5. What is the server-only package?

### Quiz questions required
1. Are components Server or Client Components by default in App Router? (Server Components)
2. Can you use useState in a Server Component? (No)

---

## 12 — Client Components

### Must explain
- What Client Components are — components that run in the browser
- The 'use client' directive — how to mark a component as client
- When you need a Client Component
  - useState, useReducer, useEffect
  - Event handlers
  - Browser APIs
  - Third-party client libraries
- The 'use client' boundary — marks the component and all its imports as client
- Minimizing Client Components — keep them as leaf nodes in the tree
- Client Components can still receive Server Component props — serializable only
- What cannot be passed as props across the boundary — functions, class instances, non-serializable data
- The composition pattern — Server Component renders Client Component, passes data as props

### Code examples required
1. Basic 'use client' component with useState
2. A Client Component receiving props from a Server Component
3. Wrong pattern — making a layout Client just for one interactive piece
4. Right pattern — keeping layout server, only the interactive part is client
5. Client Component with event handlers
6. Using browser API in Client Component — localStorage, window
7. A Client Component that wraps a third-party library
8. A complete example — server layout with client interactive sidebar toggle

### Callouts required
- Tip: Place 'use client' as close to the leaf of the component tree as possible
- Warning: 'use client' makes the component AND all its imports client-side — import carefully
- Tip: If a component only needs data and has no interactivity, keep it as a Server Component
- Interview: When do you need to use 'use client'?

### Interview questions required
1. When do you need to add 'use client' to a component?
2. What does the 'use client' boundary mean for imports?
3. Why should you minimize Client Components?
4. What data can be passed as props across the server/client boundary?

### Quiz questions required
1. What directive marks a Client Component? ('use client')
2. Which of these requires a Client Component? (useState / onClick handler / useEffect — all of these)

---

## 13 — Rendering Fundamentals

### Must explain
- Server-side rendering (SSR) — HTML generated on server per request
- Static generation (SSG) — HTML generated at build time
- Dynamic rendering — page generated on every request (when dynamic data needed)
- Prerendering — generating HTML ahead of time
- Hydration — attaching React interactivity to server-rendered HTML
- Client-side rendering (CSR) — React renders in browser, server sends empty HTML
- Streaming — sending HTML in chunks as it becomes available
- Partial rendering — only re-rendering the parts that change
- How Next.js decides what to render statically vs dynamically
- The difference in what the browser receives in each mode

### Code examples required
1. Static page — no dynamic data, renders at build time
2. Dynamic page — using dynamic data, headers(), cookies() forces dynamic
3. The HTML difference — show what the browser receives from SSR vs CSR
4. Forcing dynamic rendering — export const dynamic = 'force-dynamic'
5. Forcing static rendering — export const dynamic = 'force-static'
6. A page with mixed static and dynamic parts using Suspense
7. How hydration works — server HTML + client React takeover

### Callouts required
- Note: In App Router, pages are static by default unless they use dynamic data sources like cookies(), headers(), or uncached fetch
- Tip: Static pages are faster — only use dynamic rendering when you need per-request data
- Interview: What is hydration?
- Interview: What is the difference between SSR and SSG?

### Interview questions required
1. What is the difference between SSR and SSG?
2. What is hydration?
3. What triggers dynamic rendering in Next.js App Router?
4. What is the difference between server-side rendering and client-side rendering?
5. What is streaming?

### Quiz questions required
1. What is hydration? (Attaching React event handlers and state to server-rendered HTML)
2. What triggers dynamic rendering in App Router? (Using cookies(), headers(), or uncached fetch)

---

## 14 — Rendering Strategy Decisions

### Must explain
- When to render on server — SEO-critical content, data-heavy pages, personalized content
- When to render on client — highly interactive UIs, user-specific live data
- When to use static generation — marketing pages, blogs, docs, anything that does not change per user
- When to use dynamic rendering — dashboards, user profiles, real-time data
- When to cache — stable data that many users share
- When to revalidate — data that changes but not per request
- When to stream — pages with slow parts and fast parts
- How SEO requirements change the strategy
- How authentication changes the strategy
- The decision matrix — a clear framework for making rendering decisions

### Code examples required
1. Marketing page — fully static, no dynamic data
2. Blog post — static with generateStaticParams
3. Dashboard — dynamic, per-user data
4. Product page — static shell with dynamic price/inventory streamed in
5. Search results — dynamic based on query params
6. The decision process — walking through a real feature and choosing the right strategy

### Callouts required
- Tip: Default to static. Add dynamism only when required.
- Tip: SEO-critical content should be server-rendered — not loaded client-side after the page
- Interview: How do you decide between static and dynamic rendering?

### Interview questions required
1. When would you choose static generation over SSR?
2. How does the need for SEO affect rendering strategy?
3. When is client-side rendering appropriate?
4. How do you handle pages that are mostly static but have one dynamic section?

### Quiz questions required
1. Which rendering strategy is fastest for the user? (Static — HTML is pre-generated)
2. When is dynamic rendering required? (When content changes per request or per user)

---

## 15 — Data Fetching in App Router

### Must explain
- Fetching in Server Components — async components, direct await fetch()
- Database access directly in server components — no API layer needed
- Caching behavior of fetch — by default Next.js caches fetch responses
- Opting out of caching — cache: 'no-store'
- Revalidation with fetch — next: { revalidate: 60 }
- Parallel data fetching — Promise.all for multiple fetches
- Sequential vs parallel fetching — when each is appropriate
- Waterfall problem — components waiting for each other
- Loading states with Suspense — show UI while data loads
- Error handling with async server components

### Code examples required
1. Async Server Component fetching data — the simplest pattern
2. Cached fetch — default behavior
3. Uncached fetch — cache: 'no-store' for real-time data
4. Revalidating fetch — next: { revalidate: 3600 }
5. Parallel fetch — Promise.all([fetchUser(), fetchPosts()])
6. Sequential fetch — fetching post then fetching comments for that post
7. Avoiding waterfall — prefetch in parent, pass to children
8. Database access in a Server Component — Drizzle/Prisma example
9. fetch with error handling — try/catch
10. A complete example — a user profile page fetching user + posts + stats in parallel

### Callouts required
- Tip: Fetch in Server Components is simpler than useEffect — just async/await the component
- Warning: Parallel fetching with Promise.all is almost always better than sequential for independent data
- Tip: Use cache: 'no-store' for data that must be fresh on every request
- Interview: How is data fetching different in App Router vs using useEffect?

### Interview questions required
1. How do you fetch data in a Next.js Server Component?
2. What is the difference between cached and uncached fetches?
3. What is the waterfall problem in data fetching?
4. When would you use sequential vs parallel data fetching?

### Quiz questions required
1. Can a Server Component be async? (Yes)
2. How do you fetch data without caching in App Router? (fetch(url, { cache: 'no-store' }))

---

## 16 — Mutating Data

### Must explain
- What data mutation means — creating, updating, deleting records
- The mutation workflow in Next.js — form or button → server logic → revalidate → update UI
- Optimistic UI concept — updating UI before server confirms
- Revalidating after mutation — revalidatePath, revalidateTag
- Error handling during mutation
- Pending states — showing loading while mutation is in progress
- The difference between mutation and data fetching

### Code examples required
1. A basic mutation — form submission that creates a record
2. Optimistic update — marking a todo done before server responds
3. Revalidating a path after mutation
4. Error handling during mutation — showing error to user
5. Pending state with useTransition
6. A complete example — a todo list with add, complete, delete — all with proper pending and error states

### Callouts required
- Tip: Always revalidate the relevant path after a mutation so the UI shows fresh data
- Tip: Use useTransition or useOptimistic for smooth pending states
- Interview: How do you handle data mutation in Next.js App Router?

### Interview questions required
1. What is data mutation in the context of Next.js?
2. What is revalidatePath and when do you call it?
3. What is an optimistic update?

### Quiz questions required
1. What do you call after a mutation to refresh the data? (revalidatePath or revalidateTag)

---

## 17 — Server Actions and Server Functions

### Must explain
- What Server Actions are — async functions that run on the server, called from client
- The 'use server' directive — at function level or file level
- Why Server Actions exist — eliminate the need for manual API routes for mutations
- Form actions — using a Server Action as a form's action prop
- Calling Server Actions from event handlers
- Keeping secrets on the server — no API keys in client code
- Input validation before executing
- Returning data from Server Actions
- Error handling in Server Actions
- revalidatePath and revalidateTag inside Server Actions
- Progressive enhancement — forms work without JavaScript

### Code examples required
1. Basic Server Action — a function with 'use server'
2. Server Action as a form action — the HTML form pattern
3. Server Action called from a button onClick
4. Server Action with validation — checking inputs before DB write
5. Server Action returning success/error to client
6. Server Action with revalidatePath
7. File-level 'use server' — actions file
8. Server Action with authentication check
9. useFormStatus — showing pending state during form submission
10. useActionState — managing form state with a Server Action
11. A complete example — a contact form with Server Action, validation, error display, success message

### Callouts required
- Tip: Server Actions replace the need for API routes in many CRUD scenarios
- Warning: Always validate and sanitize inputs in Server Actions — they are server code but called from client
- Note: Server Actions can only be called from Client Components or form action props
- Interview: What are Server Actions and why are they useful?

### Interview questions required
1. What are Server Actions?
2. What is the difference between a Server Action and an API route?
3. How do you show a pending state during a Server Action?
4. Why must you validate inputs in a Server Action?

### Quiz questions required
1. What directive marks a Server Action? ('use server')
2. What happens to secrets used inside a Server Action? (They stay on the server — never sent to client)

---

## 18 — Route Handlers

### Must explain
- What route handlers are — backend API endpoints inside Next.js
- File convention — route.ts in the app directory
- HTTP methods — GET, POST, PUT, PATCH, DELETE
- Request and Response objects — NextRequest, NextResponse
- Reading request body, headers, query params
- Returning JSON responses
- When to use route handlers vs Server Actions
- Authentication in route handlers
- CORS configuration
- Connecting to DB or external APIs from route handlers
- Streaming responses from route handlers

### Code examples required
1. Basic GET route handler — returning JSON
2. POST route handler — reading body, creating a record
3. Route handler with URL params — /api/users/[id]/route.ts
4. Reading query params from request URL
5. Reading request headers
6. Authentication check in route handler
7. Error responses — 400, 401, 404, 500
8. CORS headers
9. Route handler calling an external API
10. A complete example — a REST-style CRUD API for a resource

### Callouts required
- Tip: Use Server Actions for form mutations triggered by UI. Use route handlers for external API access, webhooks, and programmatic API endpoints
- Note: Route handlers replace the pages/api directory from Pages Router
- Interview: When would you use a route handler instead of a Server Action?

### Interview questions required
1. What is a route handler in Next.js?
2. When would you use a route handler vs a Server Action?
3. How do you handle different HTTP methods in one route.ts file?

### Quiz questions required
1. What file convention creates an API route in App Router? (route.ts or route.js in the app directory)
2. What replaces pages/api in App Router? (Route handlers)

---

## 19 — Caching

### Must explain
- The four caching layers in Next.js App Router
  - Request memoization — deduplicating fetch calls in one render
  - Data cache — persisting fetch results across requests
  - Full route cache — storing rendered HTML and RSC payload
  - Router cache — client-side cache of visited routes
- Default caching behavior — what is cached automatically
- When data cache is used — fetch with default options
- Opting out of data cache — cache: 'no-store'
- Time-based revalidation — next: { revalidate: seconds }
- Tag-based revalidation — next: { tags: ['posts'] }
- The difference between the four layers
- Why caching matters — performance and cost
- When caching hurts freshness — stale data problems

### Code examples required
1. Default cached fetch — show it only hits the network once
2. Request memoization — same fetch URL called multiple times in one render, deduplicated
3. Opting out of data cache — cache: 'no-store'
4. Time-based revalidation — revalidate: 60
5. Tag-based revalidation — tags: ['users']
6. revalidateTag in a Server Action — after mutation
7. unstable_cache for caching non-fetch async functions (DB queries)
8. A complete example — a blog where posts are cached, comments are fresh

### Callouts required
- Warning: Caching is automatic — you can get stale data without realizing it if you do not configure it
- Tip: Use tags to invalidate related data across the entire cache at once
- Interview: What are the four caching layers in Next.js?

### Interview questions required
1. What are the four caching layers in Next.js App Router?
2. What is request memoization?
3. What is the difference between time-based and tag-based revalidation?
4. How do you opt out of caching for a fetch request?

### Quiz questions required
1. What is request memoization? (Deduplicating identical fetch calls within a single render pass)
2. How do you make a fetch request never cache? (cache: 'no-store')

---

## 20 — Revalidation

### Must explain
- What revalidation is — refreshing cached data without a full rebuild
- Time-based revalidation — revalidate every N seconds
- On-demand revalidation — manually trigger cache invalidation
- revalidatePath — invalidate cache for a specific URL path
- revalidateTag — invalidate all cache entries with a specific tag
- Stale-while-revalidate behavior — show stale data while fetching fresh
- When to revalidate — after mutations, on schedule, on webhook
- Webhook-based revalidation — CMS updates triggering revalidation

### Code examples required
1. Time-based revalidation in fetch
2. revalidatePath in a Server Action after mutation
3. revalidateTag in a Server Action
4. On-demand revalidation via a route handler — webhook pattern
5. Revalidating multiple paths after one mutation
6. A complete example — a blog CMS where publishing a post revalidates the blog index and the post page

### Callouts required
- Tip: Prefer tag-based revalidation over path-based — easier to manage when multiple paths show the same data
- Tip: Use webhooks + revalidateTag for CMS-driven content
- Interview: What is the difference between revalidatePath and revalidateTag?

### Interview questions required
1. What is revalidation in Next.js?
2. What is the difference between revalidatePath and revalidateTag?
3. How do you implement on-demand revalidation via a webhook?

### Quiz questions required
1. Which function invalidates all cache entries with a specific tag? (revalidateTag)

---

## 21 — Client-Side Data Fetching

### Must explain
- When client-side fetching is appropriate — user-specific live data, data that changes after interaction
- useEffect fetch pattern — the basic approach
- SWR — stale-while-revalidate library from Vercel
- TanStack Query in a Next.js context
- When client fetching beats server fetching — highly personalized, live-updating, behind auth
- Performance tradeoffs — data loads after page, not before
- The hybrid approach — server renders shell, client fetches user-specific data
- Avoiding double fetching — not fetching on server AND client for same data

### Code examples required
1. useEffect fetch in a Client Component
2. SWR basic usage — useSWR hook
3. TanStack Query in Next.js — QueryClientProvider setup + useQuery
4. Hybrid pattern — server renders layout, client fetches user-specific widget
5. Polling with SWR — auto-refresh every 5 seconds
6. Optimistic update with SWR mutate
7. A complete example — a dashboard where static layout is server-rendered, live metrics are client-fetched

### Callouts required
- Tip: Use TanStack Query or SWR instead of raw useEffect for client-side fetching in real apps
- Note: Client-side fetching means the user sees a loading state — server fetching means data is ready before the page reaches the browser
- Interview: When should you fetch data on the client instead of the server?

### Interview questions required
1. When is client-side fetching more appropriate than server-side?
2. What does SWR stand for and what does it do?
3. What is the hybrid rendering pattern?

### Quiz questions required
1. What does SWR stand for? (Stale-While-Revalidate)
2. When does client-side fetching show a loading state? (After the page loads — data arrives after HTML)

---

## 22 — Search Params and URL State

### Must explain
- What URL state is — storing UI state in the URL for shareability
- useSearchParams — reading query params client-side
- searchParams prop — reading query params server-side in a page
- Updating search params — useRouter + URLSearchParams
- Common URL state patterns — filters, pagination, search, sorting, tabs
- Why URL state is better than component state for filters/search — shareable, bookmarkable, SEO
- Keeping URL state in sync with UI
- Multiple params — combining filters

### Code examples required
1. Reading searchParams in a Server Component page
2. Reading searchParams with useSearchParams in a Client Component
3. Updating a search param — push new URL without reload
4. Search input that updates URL — debounced
5. Pagination via URL — ?page=2
6. Filter via URL — ?status=active&sort=date
7. Tab state in URL — ?tab=settings
8. Clearing search params — reset filters
9. A complete example — a filterable, sortable, paginated list with all state in URL

### Callouts required
- Tip: Store filter, sort, pagination, and search state in the URL — users can share and bookmark their view
- Tip: Use useRouter().push() with URLSearchParams to update query params without losing other params
- Interview: Why would you store UI state in the URL?

### Interview questions required
1. Why would you store filter state in the URL instead of component state?
2. How do you update search params without a full page reload?
3. How do you read search params in a Server Component?

### Quiz questions required
1. Which hook reads query params on the client in Next.js? (useSearchParams)
2. What is the advantage of URL state over component state for filters? (Shareable, bookmarkable, survives page refresh)

---

## 23 — Database Access Patterns

### Must explain
- DB access in Server Components — async component calls ORM directly
- DB access in Route Handlers — handler function calls ORM
- DB access in Server Actions — action calls ORM after validation
- Why you never access DB in Client Components
- ORM choice — Drizzle, Prisma, others
- Connection management — connection pooling, singleton pattern
- Validation before writes — never trust input
- Transactions — multiple writes that must succeed together
- Error handling for DB operations
- The data layer pattern — separating DB logic from route logic

### Code examples required
1. Drizzle query in a Server Component
2. Drizzle insert in a Server Action with validation
3. Drizzle query in a Route Handler
4. Singleton DB connection — preventing multiple connections in dev
5. Transaction — create user and their default settings atomically
6. Error handling — DB failure showing friendly message
7. A data access layer — separate file with all DB functions
8. A complete example — a CRUD feature using Server Components + Server Actions + Drizzle

### Callouts required
- Warning: Never put database credentials or DB calls in Client Components
- Tip: Create a data access layer — functions like getUser(id), createPost(data) — keep route files clean
- Tip: Always validate input before writing to the database

### Interview questions required
1. Where in Next.js can you safely access a database?
2. What is a data access layer and why is it useful?
3. Why must you validate inputs before DB writes?

### Quiz questions required
1. Can you access a database in a Client Component? (No — never)
2. Where should database access logic live? (Server Components, Route Handlers, Server Actions — with a data access layer)

---

## 24 — Metadata and SEO

### Must explain
- The metadata export — static metadata object in page or layout
- Dynamic metadata — generateMetadata async function
- Title — string and template object
- Description
- Open Graph — og:title, og:description, og:image
- Twitter card metadata
- Canonical URLs
- Robots metadata
- Favicon and app icons
- Dynamic OG images — ImageResponse
- Why server-rendered metadata matters for SEO — crawlers see it immediately

### Code examples required
1. Static metadata export — title and description
2. Title template — site name appended automatically
3. Dynamic metadata with generateMetadata — reading params to fetch title
4. Open Graph metadata — image, title, description
5. Twitter card metadata
6. Dynamic OG image — ImageResponse
7. Robots metadata — noindex for private pages
8. Favicon setup
9. A complete example — a blog where each post has unique metadata generated from its content

### Callouts required
- Tip: Use generateMetadata for dynamic routes — each page gets unique title and description
- Note: Next.js renders metadata on the server so crawlers see it in the HTML source
- Interview: How does Next.js handle metadata?

### Interview questions required
1. How do you add metadata to a Next.js page?
2. What is the difference between static and dynamic metadata?
3. What is an OG image and how do you generate it dynamically?

### Quiz questions required
1. Which function generates dynamic metadata in Next.js? (generateMetadata)
2. Why is server-rendered metadata important for SEO? (Search engine crawlers see it in the HTML without running JavaScript)

---

## 25 — Image Optimization

### Must explain
- The next/image component — drop-in Image with optimization
- What it does automatically — resizing, format conversion (WebP/AVIF), lazy loading
- Required width and height props — or fill prop
- fill layout — image fills its container
- Remote images — configuring allowed domains in next.config
- priority prop — eager loading for above-the-fold images
- Placeholder — blur placeholder while image loads
- Sizes prop — responsive image hints
- Why next/image beats a plain img tag for performance

### Code examples required
1. Basic Image usage — local image
2. Image with fill — inside a relative container
3. Remote image — with domain config in next.config
4. Priority image — hero image above fold
5. Blur placeholder — using blurDataURL or placeholder='blur'
6. Responsive image — sizes prop
7. A complete example — a product listing with optimized images

### Callouts required
- Tip: Always use priority on your hero/banner image — it prevents LCP (Largest Contentful Paint) delay
- Warning: Remote images require configuring the domain in next.config — otherwise they will be blocked
- Tip: Use fill for images in containers where you do not know the exact dimensions

### Interview questions required
1. What does the Next.js Image component do that a plain img tag does not?
2. What is the priority prop and when do you use it?
3. How do you use remote images with next/image?

### Quiz questions required
1. What does next/image automatically convert images to? (WebP or AVIF for better compression)
2. When should you use the priority prop? (For above-the-fold images like hero images)

---

## 26 — Font Optimization

### Must explain
- next/font — built-in font optimization
- Google Fonts — next/font/google, no external network request at runtime
- Local fonts — next/font/local
- How it works — fonts are downloaded at build time, self-hosted
- Zero layout shift — size-adjust and font-display handled automatically
- Applying fonts — CSS variable pattern
- Tailwind integration — using font as a Tailwind class
- Performance impact — no render-blocking font requests

### Code examples required
1. Google Font setup with next/font/google
2. Local font setup with next/font/local
3. Applying font to root layout — CSS variable
4. Tailwind integration — fontFamily in tailwind.config
5. Multiple fonts — heading font + body font
6. A complete example — Inter for body, custom heading font

### Callouts required
- Tip: next/font eliminates layout shift from font loading — always use it over a manual Google Fonts link tag
- Note: Fonts are downloaded at build time and self-hosted — no request to Google's servers at runtime

### Interview questions required
1. What does next/font do for performance?
2. What is layout shift in the context of fonts?

### Quiz questions required
1. Where are fonts downloaded when using next/font? (At build time — self-hosted, not from Google at runtime)

---

## 27 — Styling in Next.js

### Must explain
- Global CSS — app/globals.css, imported in root layout
- CSS Modules — scoped per component
- Tailwind CSS — how it integrates with Next.js (included in create-next-app)
- Inline styles — when appropriate
- CSS-in-JS considerations — server component limitations
- Conditional styling with Tailwind and clsx
- Styling layouts vs pages vs components
- Design system structure in a Next.js app

### Code examples required
1. Global CSS in root layout
2. CSS Module — component-scoped styles
3. Tailwind in Next.js — just works after setup
4. clsx for conditional Tailwind classes
5. Styling a layout — persistent nav and sidebar
6. Dark mode with Tailwind in Next.js
7. A complete example — a page with Tailwind, CSS Module for a specific component, global reset

### Callouts required
- Warning: Many CSS-in-JS libraries (styled-components, Emotion) require extra configuration to work with Server Components
- Tip: Tailwind is the recommended styling approach for Next.js apps because it works seamlessly with Server Components

### Interview questions required
1. What CSS approaches work with Server Components?
2. Why do some CSS-in-JS libraries have issues with Next.js Server Components?

### Quiz questions required
1. Which styling approach works without extra configuration in Next.js Server Components? (CSS Modules and Tailwind)

---

## 28 — Forms in Next.js

### Must explain
- Client forms — controlled inputs, useState, client submission
- Server-submitted forms — form action pointing to Server Action
- Validation — client-side for UX, server-side for security
- Form state — React Hook Form in Client Components
- Pending states — useFormStatus, useTransition
- Submission UX — disable button, show spinner, redirect on success
- File uploads — multipart form data handling
- Progressive enhancement — forms that work without JavaScript
- Combining React Hook Form + Server Actions

### Code examples required
1. Client-side controlled form with useState
2. Form with Server Action as action prop
3. React Hook Form with Server Action
4. Zod validation in a Server Action
5. useFormStatus — pending state during submission
6. File upload form — reading FormData file
7. Multi-step form in Next.js
8. A complete example — a sign-up form with RHF, Zod, Server Action, pending state, success redirect

### Callouts required
- Tip: Always validate on the server even if you validate on the client — client validation can be bypassed
- Tip: useFormStatus must be used inside the form component, not outside

### Interview questions required
1. What is the difference between a client form and a server form in Next.js?
2. How do you show a pending state during form submission?
3. Why do you always validate on the server?

### Quiz questions required
1. Where must useFormStatus be called? (Inside a component that is a child of the form with a Server Action)

---

## 29 — Middleware

### Must explain
- What middleware is — code that runs before a request is processed
- The middleware.ts file — where it lives (root of project)
- What you can do in middleware — redirect, rewrite, set headers, read cookies
- The matcher config — which routes middleware runs on
- Auth checks in middleware — redirect to login if not authenticated
- Locale/internationalization routing
- A/B testing
- Edge runtime — middleware runs at the edge, close to user
- Limitations — no Node.js APIs, no DB access, keep it fast

### Code examples required
1. Basic middleware.ts — logging every request
2. Auth redirect — check cookie, redirect to login if missing
3. matcher config — running middleware only on specific paths
4. Rewriting a URL — serving different content at same URL
5. Setting a response header
6. Reading cookies in middleware
7. A/B testing — assigning variant via cookie
8. A complete example — auth middleware protecting all /dashboard/* routes

### Callouts required
- Warning: Middleware runs on the Edge — no database access, no Node.js APIs
- Tip: Use middleware for fast checks like auth cookies — not for heavy computation
- Interview: What can you do in Next.js middleware?

### Interview questions required
1. What is middleware in Next.js?
2. What are the limitations of middleware?
3. How do you protect routes with middleware?
4. What is the Edge runtime?

### Quiz questions required
1. Can you access a database in Next.js middleware? (No — middleware runs on Edge runtime without Node.js APIs)
2. Where does the middleware.ts file live? (Root of the project, same level as app/)

---

## 30 — Authentication in Next.js

### Must explain
- Login and logout flow — the full sequence
- Auth.js (NextAuth) — the standard library for Next.js auth
- Session handling — how sessions work, JWT vs database sessions
- Protected routes — middleware approach vs layout approach
- Token and cookie basics — where auth state is stored
- Server-side auth checks — getServerSession, auth()
- Auth-aware layouts — showing different UI based on auth state
- Role-based UI rendering — admin vs user views
- OAuth integration — GitHub, Google, etc.
- Secure patterns — never trust client-side auth alone

### Code examples required
1. Auth.js setup — next-auth configuration
2. OAuth provider — GitHub login
3. Credentials provider — email/password
4. Protected route with middleware — redirect if no session
5. Protected route in a layout — server-side session check
6. Getting session in a Server Component
7. Getting session in a Client Component — SessionProvider + useSession
8. Sign in and sign out buttons
9. Role-based rendering — admin-only content
10. A complete example — app with login, protected dashboard, user menu with logout

### Callouts required
- Warning: Never rely on client-side session checks for security — always verify on the server
- Tip: Use middleware for route-level protection, Server Components for data-level protection
- Interview: How do you protect a route in Next.js?

### Interview questions required
1. How do you implement authentication in a Next.js app?
2. What is the difference between JWT sessions and database sessions?
3. How do you protect routes using middleware?
4. What is Auth.js and what does it handle?

### Quiz questions required
1. Where should auth checks be done for real security? (On the server — middleware or Server Components)

---

## 31 — API Integration Architecture

### Must explain
- Calling external APIs from Server Components — secrets stay on server
- Calling external APIs from Client Components — only when necessary
- API abstraction layer — wrapping fetch in typed functions
- Request/response normalization — consistent shape
- Error normalization — consistent error handling
- Secure secrets handling — environment variables, server-only
- Pagination patterns — cursor vs offset
- Retry logic
- Rate limiting awareness
- Typed API responses — TypeScript + Zod validation

### Code examples required
1. API call in Server Component — fetch with auth header from env
2. API abstraction — lib/api.ts with typed functions
3. Error normalization — consistent ApiError type
4. Typed response with Zod — validate what the API returns
5. Pagination — fetching paginated data
6. Retry wrapper — simple retry on failure
7. A complete example — a typed API client for an external service

### Interview questions required
1. Why do you call external APIs from Server Components instead of Client Components?
2. What is API abstraction and why is it useful?
3. How do you keep API keys secure in Next.js?

---

## 32 — Security Basics

### Must explain
- Environment variables — keeping secrets in .env.local, never exposing to client
- NEXT_PUBLIC_ prefix — what it means (exposed to browser)
- Server-only code boundary — server-only package
- Input validation — never trust user input
- SQL injection prevention — parameterized queries via ORM
- XSS — React escapes by default, dangerouslySetInnerHTML risks
- CSRF — how Server Actions handle it, token patterns for route handlers
- Auth checks in server code — always verify before returning data
- Safe redirects — avoiding open redirect vulnerabilities
- Rate limiting basics

### Code examples required
1. .env.local setup — public vs private variables
2. server-only package — preventing secret leakage
3. Input validation with Zod in a Server Action
4. dangerouslySetInnerHTML — wrong and safe usage
5. Auth check before returning data in a Server Component
6. Safe redirect — validating redirect destination

### Callouts required
- Warning: Any env variable prefixed with NEXT_PUBLIC_ is sent to the browser — never put secrets there
- Warning: dangerouslySetInnerHTML is an XSS risk — sanitize content before using it

### Interview questions required
1. What is the difference between NEXT_PUBLIC_ and private environment variables?
2. How does Next.js prevent XSS by default?
3. How do you prevent SQL injection in Next.js?

---

## 33 — Performance Optimization

### Must explain
- Route-level loading optimization — Suspense, streaming
- Prefetching — Link component prefetches on hover in production
- Image optimization — next/image
- Font optimization — next/font
- Reducing client bundle size — fewer Client Components, smaller dependencies
- Moving heavy logic to server — computation in Server Components
- Code splitting — automatic per route
- Bundle analyzer — seeing what is in the bundle
- Measuring before optimizing — Core Web Vitals, Lighthouse
- Performance budget mindset

### Code examples required
1. Adding Suspense to stream a slow section
2. Reducing client bundle — moving logic to server
3. Bundle analyzer setup
4. Lighthouse audit — what to look at
5. A complete example — optimizing a slow dashboard page

### Interview questions required
1. How does Next.js automatically optimize performance?
2. What are Core Web Vitals?
3. How do you reduce client bundle size in Next.js?

---

## 34 — Deployment

### Must explain
- Build process — npm run build and what it produces
- Production vs development behavior — caching, optimization, error handling
- Vercel deployment — the easiest path, GitHub integration
- Static export — output: 'export', when to use
- Environment variables in deployment — Vercel env setup
- Self-hosting — Node.js server, Docker
- Deployment checklist — before going live
- Logs and monitoring — Vercel logs, error tracking
- Performance checks after deploy — Lighthouse on production URL

### Code examples required
1. next.config.ts for static export
2. Vercel deployment — the exact steps
3. Environment variable setup on Vercel
4. Docker deployment basics — Dockerfile for Next.js
5. Deployment checklist — the items to verify

### Interview questions required
1. What is the difference between Vercel deployment and static export?
2. How do you manage environment variables in production?
3. What is a deployment checklist and what should it include?

---

## 35 — Testing Next.js Apps

### Must explain
- Component testing — React Testing Library
- Server Component testing — limitations and workarounds
- Route handler testing — direct function calls
- Server Action testing — direct function calls with mocked DB
- Integration tests — testing a page end-to-end
- E2E tests — Playwright or Cypress
- Auth flow tests
- Form submission tests
- Mocking — MSW for API mocking

### Code examples required
1. Testing a Client Component with user interaction
2. Testing a Server Component — rendering and asserting output
3. Testing a route handler — direct invocation
4. Testing a Server Action — call and assert DB state
5. E2E test with Playwright — login flow
6. Form submission test

### Interview questions required
1. How do you test Server Components?
2. What is the difference between integration tests and E2E tests?
3. How do you test authentication flows?

---

## 36 — Folder Structure for Scale

### Must explain
- Route-driven structure — features co-located with their routes
- Feature-driven modules — grouping by feature not by file type
- Shared UI components — components/ folder
- Server utilities vs client utilities — lib/ split
- Data layer separation — all DB logic in one place
- Co-location vs centralized — when each is better
- Keeping server-only code isolated — import discipline
- The structure that scales to 50+ routes without confusion

### Code examples required
1. Route-driven structure — full file tree
2. Feature module — everything for a feature co-located
3. Shared components folder structure
4. Server lib vs client lib separation
5. Data access layer — all queries in one place

### Interview questions required
1. How do you structure a large Next.js app?
2. What is co-location and when do you use it?
3. How do you keep server-only code from leaking to the client?

---

## 37 — Reusable Architecture Patterns

### Must explain
- Shared layout patterns — consistent shells across routes
- Dashboard shell pattern — nav + sidebar + content area
- Reusable form systems — form components + Server Actions
- Reusable table/filter/search patterns
- Mutation + revalidation flow patterns — consistent CRUD pattern
- Auth boundary patterns — protecting sections of UI
- Component library integration — shadcn/ui, Radix
- Server/client split discipline — a team-level rule

### Code examples required
1. Dashboard shell layout — the reusable wrapper
2. Reusable data table with filter and sort
3. Generic mutation hook — useMutation pattern for client
4. Reusable form system — form component + action + Zod schema
5. Auth boundary component — show/hide based on role

### Interview questions required
1. What is a dashboard shell pattern?
2. How do you build a reusable CRUD pattern in Next.js?
3. How do you enforce server/client boundaries across a team?

---

## 38 — Pages Router Awareness

### Must explain
- What the Pages Router is — the original Next.js routing system
- The pages/ directory — how it works
- getServerSideProps — fetch data on every request
- getStaticProps — fetch data at build time
- getStaticPaths — generate dynamic routes at build time
- API routes in pages/api/
- The difference from App Router — no Server Components, different data fetching
- Why many real jobs still have Pages Router codebases
- Migration awareness — how to move from Pages Router to App Router
- What interview questions still appear about Pages Router

### Code examples required
1. A pages/ route — pages/about.tsx
2. getServerSideProps — fetching per request
3. getStaticProps — fetching at build time
4. getStaticPaths — for dynamic routes
5. API route in pages/api/
6. Side-by-side comparison — same feature in Pages Router vs App Router
7. Migration steps — converting a Pages Router page to App Router

### Callouts required
- Note: Many real production codebases still use Pages Router — you will encounter it in jobs
- Note: Interview questions about getServerSideProps and getStaticProps are still very common

### Interview questions required
1. What is getServerSideProps and when do you use it?
2. What is getStaticProps and how does it differ from getServerSideProps?
3. What is the difference between Pages Router and App Router?
4. How do you migrate from Pages Router to App Router?

### Quiz questions required
1. What is the Pages Router equivalent of a Server Component data fetch? (getServerSideProps or getStaticProps)

---

## 39 — Upgrading and Version Awareness

### Must explain
- How to read the Next.js changelog and release notes
- Breaking changes — what they are, how to find them
- Codemods — automated migration tools Next.js provides
- Testing before upgrading — importance of test coverage
- Major vs minor version changes
- Canary versions — what they are, when to use
- Staying current — why it matters for security and features
- Upgrading Pages Router apps to App Router

### Code examples required
1. The upgrade command — npx @next/codemod
2. Checking current version
3. Reading the changelog — what to look for
4. A migration checklist

### Interview questions required
1. How do you safely upgrade a Next.js app?
2. What is a codemod?
3. What is a canary release?

---

## 40 — Enterprise and Senior-Level Next.js Thinking

### Must explain — all of these as discussion points with explanations
- Why a component should be server or client — the decision process
- How much JavaScript is really needed on the browser
- Whether caching is helping or hurting freshness — tradeoffs
- Which data should be fetched at route level vs component level
- How to structure route handlers and actions cleanly
- How to protect secrets and auth logic
- How to keep navigation fast — prefetching, streaming, minimal client JS
- How to build SEO-friendly pages without overengineering
- How to upgrade older Next.js apps safely
- How to make app structure easy for teams to understand

### Full answers required for every interview question from the original topic document
1. What does Next.js add on top of React?
2. What is App Router?
3. What is the difference between page and layout?
4. What is a Server Component?
5. When do you need 'use client'?
6. How does data fetching work in App Router?
7. What is streaming?
8. What is loading.js used for?
9. What are Server Actions?
10. How does caching work at a high level?
11. When should you revalidate?
12. When should you fetch on the client instead of server?
13. How do route handlers fit into a full-stack app?
14. How do you choose between App Router and Pages Router patterns in legacy code?

---

# JAVASCRIPT TRACK

Each JavaScript topic must be equally exhaustive. Key emphasis:

- **Variables and types** — var/let/const differences, hoisting, TDZ, type coercion, typeof, equality
- **Functions** — declarations vs expressions, arrow functions, IIFE, default params, rest/spread, arguments object
- **Arrays** — every array method with example: map, filter, reduce, find, findIndex, some, every, flat, flatMap, sort
- **Objects** — dot vs bracket notation, computed keys, shorthand, destructuring, spread, Object.keys/values/entries, freeze/seal
- **ES6+** — template literals, destructuring, spread/rest, default params, optional chaining, nullish coalescing, logical assignment
- **Promises and async/await** — callback hell, Promise, then/catch/finally, Promise.all, Promise.race, Promise.allSettled, async/await, error handling
- **Closures** — what a closure is, practical uses, closure in loops bug, memoization with closure, module pattern
- **Prototypes** — prototype chain, Object.create, class syntax sugar, instanceof, hasOwnProperty
- **Event loop** — call stack, heap, queue, microtasks vs macrotasks, why setTimeout(fn, 0) runs after promises
- **DOM** — querySelector, createElement, appendChild, event delegation, dataset, classList
- **Modules** — ESM vs CJS, import/export, dynamic import, tree shaking
- **Error handling** — try/catch/finally, custom error classes, error types
- **Functional programming** — pure functions, immutability, map/filter/reduce, function composition, currying
- **Design patterns** — module, singleton, observer, factory, strategy patterns in JS

---

## Final rule

If you are writing a topic and you think "I can skip this example because it is obvious" — do not skip it. Write it. This app is for learning from zero. What is obvious to you is not obvious to a beginner. Every example in this spec exists because someone got confused without it.
