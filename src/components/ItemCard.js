import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import CountdownTimer from './CountdownTimer'

export default function ItemCard({ title, borrower, borrowdate, duedate }) {
  const { on, toggle } = useToggle(false)
  const [isToggled, setToggled] = useState(false)

  return (
    <div onClick={handleToggle} className="card-container">
      <StyledContent style={{ fontWeight: 'bold' }}>{title}</StyledContent>

      <StyledContentSmall
        style={{ visibility: !isToggled ? 'visible' : 'hidden' }}
      >
        an: {borrower} • <CountdownTimer itemDueDate={duedate} />
      </StyledContentSmall>

      {on && (
        <CardDetails>
          <StyledContent>verliehen an: {borrower}</StyledContent>
          <StyledContent>am: {borrowdate}</StyledContent>
          <StyledContent>zurück am: {duedate}</StyledContent>
        </CardDetails>
      )}
    </div>
  )

  function handleToggle() {
    const toggleTrueFalse = () => setToggled(!isToggled)
    toggleTrueFalse()
    toggle()
  }
}

const CardDetails = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`

const StyledContent = styled.p`
  margin: 0;
  padding: 2px;
`

const StyledContentSmall = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding: 2px;
`
