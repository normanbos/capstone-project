import { useState, useEffect } from 'react'

export default function useCountdown(start, onTimeUp) {
  const [timeRemaining, setTimeRemaining] = useState(start)

  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)

    return () => clearTimeout(timer)
  }, [timeRemaining])

  timeRemaining === 0 && onTimeUp()

  return timeRemaining
}
