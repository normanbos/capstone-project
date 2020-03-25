import React from 'react'
import { ReminderButton } from './buttons'
import useCountdown from '../hooks/useCountdown'

export default function CloseModalCountdown({ closeModal }) {
  const counter = useCountdown(3, closeModal)

  return <ReminderButton>[schließt in {counter}]</ReminderButton>
}
