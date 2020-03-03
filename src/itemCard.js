import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-hooks-lib'

export default function ItemCard({ item }) {
  const { on, toggle } = useToggle(false)

  return (
    <CardContainer onClick={toggle}>
      <p style={{ fontWeight: 'bold' }}>{item.thing}</p>
      <p>ausgeliehen an: {item.borrower}</p>
      {on && <p>zurück am: {item.duedate}</p>}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  margin: 10px;
  background: #fbf9fb;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
