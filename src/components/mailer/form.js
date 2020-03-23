import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { CardForm, Input, Label } from '../Form'
import axios from 'axios'

export function MailForm({ item, borrower, contact }) {
  const [state, setState] = useState({
    name: borrower,
    message: `Hallo ${borrower}, bitte denk daran, mir folgenden Gegenstand wieder
    zurück zu geben: ${item}`,
    email: contact,
    sent: false,
    buttonText: 'Erinnerung senden',
  })

  function formSubmit(e) {
    e.preventDefault()

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
        setState({ sent: true }, resetForm())
      })
      .catch(() => {
        console.log('Message not sent')
      })
  }

  function resetForm() {
    setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent',
    })
  }

  return (
    <>
      <ReminderBody>
        "Hallo <b>{borrower}</b>, bitte denk daran, mir folgenden Gegenstand
        wieder zurück zu geben: <b>{item}"</b>
      </ReminderBody>
      <CardForm onSubmit={e => formSubmit(e)}>
        <Label htmlFor="message-email">Senden an:</Label>
        <Input
          onChange={e => setState({ email: e.target.value })}
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          value={state.email}
        />

        <div>
          <button type="submit">{state.buttonText}</button>
        </div>
      </CardForm>
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
