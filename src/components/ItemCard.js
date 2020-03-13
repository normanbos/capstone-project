import React, { useState } from 'react'
import styled from 'styled-components'
import CountdownTimer from './CountdownTimer'
import { FaTrashAlt, FaSave } from 'react-icons/fa'

export default function ItemCard({
  title,
  borrower,
  contact,
  borrowdate,
  duedate,
  deleteItem,
  item,
  editItem,
}) {
  const [isToggled, setToggled] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [itemState, setItemState] = useState({
    title,
    borrower,
    contact,
    borrowdate,
    duedate,
    id: item.id,
  })

  return (
    <div className="card-container">
      <SmallCardContainer
        pointer-events={toggleEdit ? 'none' : 'auto'}
        onClick={handleToggle}
        style={{ display: !isToggled & !toggleEdit ? 'block' : 'none' }}
      >
        <StyledContent style={{ fontWeight: 'bold' }}>{title} </StyledContent>
        <StyledContentSmall>
          an: {borrower} • <CountdownTimer itemDueDate={duedate} />
        </StyledContentSmall>
      </SmallCardContainer>

      <BigCardContainer
        pointer-events={toggleEdit ? 'none' : 'auto'}
        onClick={handleToggle}
        style={{ display: isToggled & !toggleEdit ? 'block' : 'none' }}
      >
        <CardDetails>
          <>
            <StyledContent style={{ fontWeight: 'bold' }}>
              {title}
            </StyledContent>
            <StyledContent>verliehen an {borrower}</StyledContent>
            <StyledContent>am {borrowdate}</StyledContent>
            <StyledContent>zurück am {duedate}</StyledContent>
          </>
        </CardDetails>
        <StyledFooter>
          <StyledButton onClick={handleEditToggle}>Edit</StyledButton>
          <StyledButton onClick={() => deleteItem(item)}>
            <FaTrashAlt />
          </StyledButton>
        </StyledFooter>
      </BigCardContainer>

      <EditCardForm style={{ display: toggleEdit ? 'block' : 'none' }}>
        <div>
          <CardForm>
            <LabelStyled htmlFor="title">Gegenstand</LabelStyled>
            <StyledInput
              autoFocus
              type="text"
              name="title"
              id="title"
              value={itemState.title}
              onChange={handleItemChange}
            />

            <LabelStyled htmlFor="borrower">verliehen an</LabelStyled>
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

            <LabelStyled htmlFor="borrowdate">am</LabelStyled>
            <StyledInput
              type="date"
              name="borrowdate"
              id="borrowdate"
              placeholder="TT.MM.JJJ"
              value={itemState.borrowdate}
              onChange={handleItemChange}
            />

            <LabelStyled htmlFor="duedate">zurück am</LabelStyled>
            <StyledInput
              type="date"
              name="duedate"
              id="duedate"
              placeholder="TT.MM.JJJ"
              value={itemState.duedate}
              onChange={handleItemChange}
            />
          </CardForm>
        </div>
        <StyledFooter>
          <StyledButton onClick={handleEditToggle}>Cancel</StyledButton>
          <StyledButton onClick={handleEdit}>
            <FaSave />
          </StyledButton>
        </StyledFooter>
      </EditCardForm>
    </div>
  )

  function handleToggle() {
    const toggleTrueFalse = () => setToggled(!isToggled)
    toggleTrueFalse()
  }

  function handleEditToggle() {
    const toggleTrueFalse = () => setToggleEdit(!toggleEdit)
    toggleTrueFalse()
  }

  function handleEdit(event) {
    event.preventDefault()
    editItem(itemState, item)
    handleEditToggle()
  }

  function handleItemChange(event) {
    setItemState({
      ...itemState,
      [event.target.name]: event.target.value,
    })
  }
}

const CardDetails = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`

const StyledContent = styled.div`
  margin: 0;
  padding: 5px 10px;
`

const StyledContentSmall = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding: 2px;
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

const LabelStyled = styled.label`
  grid-column: 1 / 2;
  padding: 0.5em 0.5em 0.5em 0;
`

const StyledInput = styled.input`
  grid-column: 2 / 3;
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

const CardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: auto;
`

const SmallCardContainer = styled.div`
  margin: 0;
  padding: 0;
`

const BigCardContainer = styled.div`
  margin: 0;
  padding: 0;
`

const EditCardForm = styled.div`
  margin: 0;
  padding: 0;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
`
