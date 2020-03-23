import React, { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

export function MailForm({ item, borrower, contact }) {
  const [state, setState] = useState({
    name: borrower,
    message: `Hallo ${borrower}, bitte denk daran, mir folgenden Gegenstand wieder
    zurück zu geben: ${item}`,
    email: contact,
    sent: false,
    buttonText: 'Erinnerung senden an',
  })

  function onSend(event) {
    event.preventDefault()

    setState({
      buttonText: '...sending',
    })

    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
    }

    axios
      .post('http://localhost:4000', data)
      .then(res => {
        setState({ sent: true, buttonText: 'Message Sent' })
      })
      .catch(() => {
        console.log('Message not sent')
      })
  }

  return (
    <>
      <ReminderBody>
        "Hallo <b>{borrower}</b>, bitte denk daran, mir folgenden Gegenstand
        wieder zurück zu geben: <b>{item}"</b>
      </ReminderBody>
      <div>
        <button onClick={onSend}>{state.buttonText}</button>
        <span> {state.email}</span>
      </div>
    </>
  )
}

export const ReminderBody = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding: 5px;
  background-color: white;
  border-radius: 4px;
`
