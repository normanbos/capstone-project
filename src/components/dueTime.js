import React from 'react'
import styled from 'styled-components'

export default function DueTime({ timeLeft }) {
  return (
    <>
      {timeLeft.days > 0 && <span>{timeLeft.days} Tage und </span>}
      {timeLeft.hours > 0 && <span>{timeLeft.hours} Stunden</span>}
      {timeLeft.hours <= 0 && timeLeft.days <= 0 && (
        <StyledSpan>Überfällig</StyledSpan>
      )}
    </>
  )
}

const StyledSpan = styled.span`
  color: #c73903;
`
