import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ReminderButton } from './buttons'
import { CardFooter } from './Card'
import CloseModalCountdown from './closeModalCountdown'

export function ReminderMailer({ item, borrower, contact, closeModal }) {
  const [startCountdown, setStartCountdown] = useState(false)
  const [state, setState] = useState({
    name: borrower,
    message: `Hallo ${borrower}, bitte denk daran, mir folgenden Gegenstand wieder
    zurück zu geben: ${item}`,
    email: contact,
    sent: false,
    buttonText: 'Erinnerung senden',
  })

  function onSend(event) {
    event.preventDefault()

    setState({
      name: borrower,
      message: `Hallo ${borrower}, bitte denk daran, mir folgenden Gegenstand wieder
          zurück zu geben: ${item}`,
      email: contact,
      sent: false,
      buttonText: '...wird gesendet',
    })

    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
    }

    axios
      .post('/api/v1', data)
      .then(res => {
        setStartCountdown(true)
        setState({
          name: borrower,
          message: `Hallo ${borrower}, bitte denk daran, mir folgenden Gegenstand wieder
          zurück zu geben: ${item}`,
          email: contact,
          sent: true,
          buttonText: 'Erinnerung gesendet',
        })
      })
      .catch(() => {
        console.log('Erinnerung nicht gesendet')
      })
  }

  return (
    <>
      <ReminderBody>{state.message}</ReminderBody>
      <CardFooter>
        <ReminderButton onClick={onSend}>{state.buttonText}</ReminderButton>
        {startCountdown ? (
          <CloseModalCountdown closeModal={closeModal} />
        ) : (
          <ReminderButton onClick={closeModal}>schließen</ReminderButton>
        )}
      </CardFooter>
    </>
  )
}

const ReminderBody = styled.p`
  margin: 0.4em;
  font-size: 0.9rem;
  padding: 0.5em;
  background-color: white;
  border-radius: 4px;
`
