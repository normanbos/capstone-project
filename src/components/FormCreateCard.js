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
    <CardContainer>
      <CardForm id="cardForm" onSubmit={handleSubmit}>
        <LabelStyled htmlFor="title">Item</LabelStyled>
        <StyledInput
          autoFocus
          type="text"
          name="title"
          id="title"
          value={itemState.title}
          onChange={handleItemChange}
        />

        <LabelStyled htmlFor="borrower">Lent to</LabelStyled>
        <StyledInput
          type="text"
          name="borrower"
          id="borrower"
          value={itemState.borrower}
          onChange={handleItemChange}
        />

        <LabelStyled htmlFor="contact">Contact</LabelStyled>
        <StyledInput
          type="email"
          name="contact"
          id="contact"
          placeholder="E-Mail"
          value={itemState.contact}
          onChange={handleItemChange}
        />

        <LabelStyled htmlFor="borrowdate">Borrowed on</LabelStyled>
        <StyledInput
          type="date"
          name="borrowdate"
          id="borrowdate"
          placeholder="TT.MM.JJJ"
          value={itemState.borrowdate}
          onChange={handleItemChange}
        />

        <LabelStyled htmlFor="duedate">Due on</LabelStyled>
        <StyledInput
          type="date"
          name="duedate"
          id="duedate"
          placeholder="TT.MM.JJJ"
          value={itemState.duedate}
          onChange={handleItemChange}
        />
      </CardForm>
      <StyledFooter>
        <StyledButton onClick={cancelHandle}>Cancel</StyledButton>
        <StyledButton type="submit" form="cardForm">
          Save
        </StyledButton>
      </StyledFooter>
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

const CardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: auto;
`
const LabelStyled = styled.label`
  grid-column: 1 / 2;
  padding: 0.5em 0.5em 0.5em 0;
`

const CardContainer = styled.div`
  margin: 10px;
  font-size: 1.2rem;
  color: #151611;
  background: #cb7350;
  padding: 5px;
  border-radius: 12px;
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

const StyledInput = styled.input`
  grid-column: 2 / 3;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  width: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  margin: 5px;
  padding: 5px 10px;
  overflow: auto;
`
