import React from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import CountdownTimer from './CountdownTimer'

export default function ItemCard({ item, borrower, borrowdate, duedate }) {
  const { on, toggle } = useToggle(false)

  return (
    <CardContainer onClick={toggle}>
      <StyledContent style={{ fontWeight: 'bold' }}>{item}</StyledContent>
      {on || (
        <StyledContentSmall>
          an: {borrower} • <CountdownTimer itemDueDate={duedate} />
        </StyledContentSmall>
      )}

      {on && (
        <CardDetails>
          <StyledContent>verliehen an: {borrower}</StyledContent>
          <StyledContent>am: {borrowdate}</StyledContent>
          <StyledContent>zurück am: {duedate}</StyledContent>
        </CardDetails>
      )}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  margin: 10px;
  font-size: 1.2rem;
  color: #151611;
  background: #52b2a9;
  padding: 5px 10px;
  border-radius: 12px;
  box-shadow: 0 10px 10px #0002;
`

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
