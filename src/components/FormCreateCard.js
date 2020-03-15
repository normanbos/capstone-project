import React, { useState } from 'react'
import { FaReply, FaSave } from 'react-icons/fa'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { Button } from './Buttons'
import { CardFooter } from './Card'
import { CardForm, Input, Label } from './Form'

export function FormCreateCard({ onSubmit, cancelHandle }) {
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
        <Label htmlFor="title">
          <small>
            <i>Gegenstand</i>
          </small>
        </Label>
        <Input
          autoFocus
          type="text"
          name="title"
          id="title"
          value={itemState.title}
          onChange={handleItemChange}
        />

        <Label htmlFor="borrower">
          <small>
            <i>verliehen an</i>
          </small>
        </Label>
        <Input
          type="text"
          name="borrower"
          id="borrower"
          value={itemState.borrower}
          onChange={handleItemChange}
        />

        <Label htmlFor="contact">
          <small>
            <i>Kontakt</i>
          </small>
        </Label>
        <Input
          type="email"
          name="contact"
          id="contact"
          placeholder="E-Mail"
          value={itemState.contact}
          onChange={handleItemChange}
        />

        <Label htmlFor="borrowdate">
          <small>
            <i>am</i>
          </small>
        </Label>
        <Input
          type="date"
          name="borrowdate"
          id="borrowdate"
          placeholder="TT.MM.JJJ"
          value={itemState.borrowdate}
          onChange={handleItemChange}
        />

        <Label htmlFor="duedate">
          <small>
            <i>zurück am</i>
          </small>
        </Label>
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
