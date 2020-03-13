import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'
import { CardForm, Label, Input } from './Form'
import { CardFooter } from './Card'
import { FaSave, FaReply } from 'react-icons/fa'
import { v4 } from 'uuid'

export function FormCreateItem({ onSubmit, cancelHandle }) {
  const [itemState, setItemState] = useState({
    title: '',
    borrower: '',
    contact: '',
    borrowdate: '',
    duedate: '',
    id: v4(),
  })

  return (
    <CardContainer>
      <CardForm id="cardForm" onSubmit={handleSubmit}>
        <Label htmlFor="title">Item</Label>
        <Input
          autoFocus
          type="text"
          name="title"
          id="title"
          value={itemState.title}
          onChange={handleItemChange}
        />

        <Label htmlFor="borrower">Lent to</Label>
        <Input
          type="text"
          name="borrower"
          id="borrower"
          value={itemState.borrower}
          onChange={handleItemChange}
        />

        <Label htmlFor="contact">Contact</Label>
        <Input
          type="email"
          name="contact"
          id="contact"
          placeholder="E-Mail"
          value={itemState.contact}
          onChange={handleItemChange}
        />

        <Label htmlFor="borrowdate">Borrowed on</Label>
        <Input
          type="date"
          name="borrowdate"
          id="borrowdate"
          placeholder="TT.MM.JJJ"
          value={itemState.borrowdate}
          onChange={handleItemChange}
        />

        <Label htmlFor="duedate">Due on</Label>
        <Input
          type="date"
          name="duedate"
          id="duedate"
          placeholder="TT.MM.JJJ"
          value={itemState.duedate}
          onChange={handleItemChange}
        />
      </CardForm>
      <CardFooter>
        <Button onClick={cancelHandle}>
          <FaReply />
        </Button>
        <Button type="submit" form="cardForm">
          <FaSave />
        </Button>
      </CardFooter>
    </CardContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(itemState)
  }

  function handleItemChange(event) {
    setItemState({
      ...itemState,
      [event.target.name]: event.target.value,
    })
  }
}

const CardContainer = styled.div`
  margin: 10px;
  font-size: 1.2rem;
  color: #151611;
  background: #cb7350;
  padding: 5px;
  border-radius: 12px;
`
