'use client'

import { useEffect, useState } from 'react'

export const timerPreviewSource = `'use client'

import { useEffect, useState } from 'react'

export default function TimerPreview() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((value) => value + 1)
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  return <p>Timer: {seconds}s</p>
}
`

export default function TimerPreview(): JSX.Element {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((value) => value + 1)
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        Timer: <span className="font-semibold text-ink dark:text-ink-dark">{seconds}s</span>
      </p>
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
        This preview demonstrates an effect with cleanup.
      </p>
    </div>
  )
}
