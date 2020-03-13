import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'
import { CardForm, Label, Input } from './Form'
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
          <Button onClick={handleEditToggle}>Edit</Button>
          <Button onClick={() => deleteItem(item)}>
            <FaTrashAlt />
          </Button>
        </StyledFooter>
      </BigCardContainer>

      <EditCardForm style={{ display: toggleEdit ? 'block' : 'none' }}>
        <div>
          <CardForm>
            <Label htmlFor="title">Gegenstand</Label>
            <Input
              autoFocus
              type="text"
              name="title"
              id="title"
              value={itemState.title}
              onChange={handleItemChange}
            />

            <Label htmlFor="borrower">verliehen an</Label>
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

            <Label htmlFor="borrowdate">am</Label>
            <Input
              type="date"
              name="borrowdate"
              id="borrowdate"
              placeholder="TT.MM.JJJ"
              value={itemState.borrowdate}
              onChange={handleItemChange}
            />

            <Label htmlFor="duedate">zurück am</Label>
            <Input
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
          <Button onClick={handleEditToggle}>Cancel</Button>
          <Button onClick={handleEdit}>
            <FaSave />
          </Button>
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
