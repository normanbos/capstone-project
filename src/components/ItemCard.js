import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'
import { CardForm, Label, Input } from './Form'
import { CardFooter } from './Card'
import CountdownTimer from './CountdownTimer'
import { FaTrashAlt, FaSave, FaEdit, FaReply } from 'react-icons/fa'

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
      <CardContainer
        pointer-events={toggleEdit ? 'none' : 'auto'}
        onClick={handleToggle}
        style={{ display: !isToggled & !toggleEdit ? 'block' : 'none' }}
      >
        <CardContent style={{ fontWeight: 'bold' }}>{title} </CardContent>
        <CardContentSmall>
          an: {borrower} • <CountdownTimer itemDueDate={duedate} />
        </CardContentSmall>
      </CardContainer>

      <CardContainer
        pointer-events={toggleEdit ? 'none' : 'auto'}
        onClick={handleToggle}
        style={{ display: isToggled & !toggleEdit ? 'block' : 'none' }}
      >
        <CardDetails>
          <>
            <CardContent style={{ fontWeight: 'bold' }}>{title}</CardContent>
            <CardContent>verliehen an {borrower}</CardContent>
            <CardContentSmall>&#40;{contact}&#41;</CardContentSmall>
            <CardContent>am {borrowdate}</CardContent>
            <CardContent>zurück am {duedate}</CardContent>
          </>
        </CardDetails>
        <CardFooter>
          <Button onClick={handleEditToggle}>
            <FaEdit />
          </Button>
          <Button onClick={() => deleteItem(item)}>
            <FaTrashAlt />
          </Button>
        </CardFooter>
      </CardContainer>

      <CardContainer style={{ display: toggleEdit ? 'block' : 'none' }}>
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

          <Label htmlFor="contact">Kontakt</Label>
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

        <CardFooter>
          <Button onClick={handleEditToggle}>
            <FaReply />
          </Button>
          <Button onClick={handleEdit}>
            <FaSave />
          </Button>
        </CardFooter>
      </CardContainer>
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

const CardContent = styled.div`
  margin: 0;
  padding: 2px;
`

const CardContentSmall = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding: 2px;
`

const CardContainer = styled.div`
  margin: 0;
  padding: 0;
`
