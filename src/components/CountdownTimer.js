import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

export default function CountdownTimer({ itemDueDate }) {
  const dueDate = itemDueDate
  const calculateTimeLeft = () => {
    const difference = +new Date(dueDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
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
      <span>fällig: </span>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <StyledSpan>überfällig!</StyledSpan>
      )}
    </>
  )
}

const StyledSpan = styled.span`
  color: #c73903;
`
