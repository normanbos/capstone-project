import React, { useEffect, useState } from 'react'
import { ReminderButton } from './buttons'

export default function CloseModalCountdown({ closeModal }) {
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  counter === 0 && closeModal()

  return <ReminderButton>[schließt in {counter}]</ReminderButton>
}
