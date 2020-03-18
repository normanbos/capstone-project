import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MailAlertButton } from './buttons'
import { v4 } from 'uuid'

export function CountdownTimer({ itemDueDate }) {
  const Interval = () => {
    const deadline = new Date(itemDueDate)
    deadline.setDate(deadline.getDate() + 1)
    const now = new Date()
    const difference = deadline - now

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(Interval())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(Interval())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={v4()}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <>
      <RenderTimer timerComponents={timerComponents} />
      <MailAlert timerComponents={timerComponents} />
    </>
  )
}

function RenderTimer({ timerComponents }) {
  return (
    <>
      <span>
        <i>fällig: </i>
      </span>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <StyledSpan>überfällig!</StyledSpan>
      )}
    </>
  )
}

export function MailAlert({ timerComponents }) {
  return <>{timerComponents.length ? '' : <MailAlertButton />}</>
}

const StyledSpan = styled.span`
  color: #c73903;
`
