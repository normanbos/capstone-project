import React, { useState } from 'react'
import styled from 'styled-components'

export default function Form({ onSubmit }) {
  const [itemState, setItemState] = useState({
    item: '',
    borrower: '',
    contact: '',
    borrowdate: '',
    duedate: '',
  })

  console.log(itemState)

  return (
    <CardForm id="cardForm" onSubmit={handleSubmit}>
      <label htmlFor="item">Item</label>
      <input
        autoFocus
        type="text"
        name="item"
        id="item"
        value={itemState.item}
        onChange={handleItemChange}
      />

      <label htmlFor="borrower">Lent to</label>
      <input
        type="text"
        name="borrower"
        id="borrower"
        value={itemState.borrower}
        onChange={handleItemChange}
      />

      <label htmlFor="contact">Contact</label>
      <input
        type="email"
        name="contact"
        id="contact"
        placeholder="E-Mail"
        value={itemState.contact}
        onChange={handleItemChange}
      />

      <label htmlFor="borrowdate">Borrowed on</label>
      <input
        type="date"
        name="borrowdate"
        id="borrowdate"
        placeholder="TT.MM.JJJ"
        value={itemState.borrowdate}
        onChange={handleItemChange}
      />

      <label htmlFor="duedate">Due on</label>
      <input
        type="date"
        name="duedate"
        id="duedate"
        placeholder="TT.MM.JJJ"
        value={itemState.duedate}
        onChange={handleItemChange}
      />
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
  gap: 10px;
  padding: 0;
`
