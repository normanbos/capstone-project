import React, { useState } from 'react'
import styled from 'styled-components'

export default function FormCreateItem({ onSubmit }) {
  const [itemState, setItemState] = useState({
    title: '',
    borrower: '',
    contact: '',
    borrowdate: '',
    duedate: '',
  })

  console.log(itemState)

  return (
    <CardForm id="cardForm" onSubmit={handleSubmit}>
      <LabelStyled htmlFor="title">
        Item
        <input
          autoFocus
          type="text"
          name="title"
          id="title"
          value={itemState.title}
          onChange={handleItemChange}
        />
      </LabelStyled>

      <LabelStyled htmlFor="borrower">
        Lent to
        <input
          type="text"
          name="borrower"
          id="borrower"
          value={itemState.borrower}
          onChange={handleItemChange}
        />
      </LabelStyled>

      <LabelStyled htmlFor="contact">
        Contact
        <input
          type="email"
          name="contact"
          id="contact"
          placeholder="E-Mail"
          value={itemState.contact}
          onChange={handleItemChange}
        />
      </LabelStyled>

      <LabelStyled htmlFor="borrowdate">
        Borrowed on
        <input
          type="date"
          name="borrowdate"
          id="borrowdate"
          placeholder="TT.MM.JJJ"
          value={itemState.borrowdate}
          onChange={handleItemChange}
        />
      </LabelStyled>

      <LabelStyled htmlFor="duedate">
        Due on
        <input
          type="date"
          name="duedate"
          id="duedate"
          placeholder="TT.MM.JJJ"
          value={itemState.duedate}
          onChange={handleItemChange}
        />
      </LabelStyled>
    </CardForm>
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

const CardForm = styled.form`
  display: grid;
  gap: 5px;
  padding: 0;
`
const LabelStyled = styled.label`
  display: flex;
  gap: 8px;
`
