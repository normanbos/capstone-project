import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { CardFooter } from './Card'

export function ReminderMailer({ item, borrower, contact, closeModal }) {
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
        <ReminderButton onClick={closeModal}>schließen</ReminderButton>
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

const ReminderButton = styled.button`
  border: 0;
  text-decoration: none;
  cursor: pointer;
  width: 50%;
  height: auto;
  display: inline-block;
  border-radius: 4px;
  font-size: 0.9em;
  margin: 0.4em;
  padding: 0.5em;
  text-decoration: none;
  background: ${props => props.theme.colors.goldSand};
  color: ${props => props.theme.colors.blueDianne};
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`
