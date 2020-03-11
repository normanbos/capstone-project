import React, { useState } from 'react'
import styled from 'styled-components'
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
    <FormContainer>
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
      <StyledFooter>
        <StyledButton onClick={cancelHandle}>Cancel</StyledButton>
        <StyledButton type="submit" form="cardForm">
          Save
        </StyledButton>
      </StyledFooter>
    </FormContainer>
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

const FormContainer = styled.div`
  margin: 10px;
  font-size: 1.2rem;
  color: #151611;
  background: #cb7350;
  padding: 5px 10px;
  border-radius: 12px;
  box-shadow: 0 10px 10px #0002;
`

const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;
  display: inline-block;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  text-decoration: none;
  background: #e5c486;
  font-family: 'Fira Mono', monospace;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
`
