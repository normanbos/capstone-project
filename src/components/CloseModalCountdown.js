import React from 'react'
import { ReminderButton } from './Buttons'
import useCountdown from '../hooks/UseCountdown'

export default function CloseModalCountdown({ closeModal }) {
  const counter = useCountdown(3, closeModal)

  return <ReminderButton>[schließt in {counter}]</ReminderButton>
}
