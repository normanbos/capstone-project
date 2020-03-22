import React, { useState } from 'react'
import { CardForm, Input, Label } from '../Form'
import axios from 'axios'

export function MailForm({ borrower, contact }) {
  const [state, setState] = useState({
    name: borrower,
    message: '',
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
    <CardForm className="contact-form" onSubmit={e => formSubmit(e)}>
      <Label class="message" htmlFor="message-input">
        Deine Nachricht
      </Label>
      <textarea
        onChange={e => setState({ message: e.target.value })}
        name="message"
        type="text"
        placeholder="Gib deine Nachricht hier ein"
        value={state.message}
        required
      />

      <Label class="message-name" htmlFor="message-name">
        An
      </Label>
      <Input
        onChange={e => setState({ name: e.target.value })}
        name="name"
        type="text"
        placeholder="Your Name"
        value={state.name}
      />

      <Label class="message-email" htmlFor="message-email">
        Email
      </Label>
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
  )
}
