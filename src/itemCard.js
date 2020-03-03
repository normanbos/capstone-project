import React, { useState } from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'

export default function ItemCard({ item }) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const { on, toggle } = useToggle(false)

  return (
    <CardContainer onClick={toggleDetails}>
      <p style={{ fontWeight: 'bold' }}>{item.thing}</p>
      <p>ausgeliehen an: {item.borrower}</p>
      <CardDetails>
        {on && (
          <>
            <p>am: {item.borrowdate}</p>
            <p>kommt zurück am: {item.duedate}</p>
          </>
        )}
      </CardDetails>
    </CardContainer>
  )
  function toggleDetails() {
    setIsDetailsVisible && setIsDetailsVisible(!isDetailsVisible)
    toggle()
  }
}

const CardContainer = styled.div`
  margin: 10px;
  background: #fbf9fb;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const CardDetails = styled.div`
  margin: 10px;
  background: #fbf9fb;
  padding: 10px 20px;
`
