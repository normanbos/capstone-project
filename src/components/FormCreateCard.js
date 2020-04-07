import React, { useState } from 'react'
import { v4 } from 'uuid'
import { CancelButton, SaveButton } from './Buttons'
import { CardHeader, CardHeaderNav, CreateCardContainer } from './Card'
import { CardForm, Input, FormLabel } from './Form'

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
    <CreateCardContainer>
      <CardHeader>
        <div></div>
        <CardHeaderNav>
          <CancelButton onClick={cancelHandle} />
          <SaveButton type="submit" form="cardForm" onClick={handleSubmit} />
        </CardHeaderNav>
      </CardHeader>
      <CardForm id="cardForm" onSubmit={handleSubmit}>
        <FormLabel htmlFor="title" content="Gegenstand" />
        <Input
          autoFocus
          type="text"
          name="title"
          id="title"
          value={itemState.title}
          onChange={handleItemChange}
        />

        <FormLabel htmlFor="borrower" content="verliehen an" />
        <Input
          type="text"
          name="borrower"
          id="borrower"
          value={itemState.borrower}
          onChange={handleItemChange}
        />

        <FormLabel htmlFor="contact" content="Kontakt" />
        <Input
          type="email"
          name="contact"
          id="contact"
          placeholder="E-Mail"
          value={itemState.contact}
          onChange={handleItemChange}
        />

        <FormLabel htmlFor="borrowdate" content="am" />
        <Input
          type="date"
          name="borrowdate"
          id="borrowdate"
          placeholder="TT.MM.JJJ"
          value={itemState.borrowdate}
          onChange={handleItemChange}
        />

        <FormLabel htmlFor="duedate" content="zurück am" />
        <Input
          type="date"
          name="duedate"
          id="duedate"
          placeholder="TT.MM.JJJ"
          value={itemState.duedate}
          onChange={handleItemChange}
        />
      </CardForm>
    </CreateCardContainer>
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
