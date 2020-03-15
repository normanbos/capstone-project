import React, { useState } from 'react'
import { FaEdit, FaReply, FaSave, FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from './Buttons'
import { CardFooter } from './Card'
import CountdownTimer from './countdownTimer'
import { CardForm, Input, Label } from './Form'

export default function ItemCard({
  title,
  borrower,
  contact,
  borrowdate,
  duedate,
  deleteItem,
  item,
  editItem,
  handleDetailsToggle,
}) {
  const [toggle, setToggle] = useDetailsToggler()
  const [isDetailsToggled, setIsDetailsToggled] = useState(false)
  const [isEditToggled, setIsEditToggled] = useState(false)
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
        pointer-events={isEditToggled ? 'none' : 'auto'}
        onClick={handleDetailsToggle}
        style={{
          display: !isDetailsToggled & !isEditToggled ? 'block' : 'none',
        }}
      >
        <CardContent>
          <b>{title}</b>
        </CardContent>
        <CardContentSmall>
          <i>bei: </i>
          {borrower} • <CountdownTimer itemDueDate={duedate} />
        </CardContentSmall>
      </CardContainer>

      <CardContainer
        pointer-events={isEditToggled ? 'none' : 'auto'}
        onClick={handleDetailsToggle}
        style={{
          display: isDetailsToggled & !isEditToggled ? 'block' : 'none',
        }}
      >
        <CardDetails>
          <>
            <CardContent>
              <b>{title}</b>
            </CardContent>
            <CardContent>
              <small>
                <i>verliehen an </i>
              </small>
              {borrower}
            </CardContent>
            <CardContentSmall>
              <sup>&#40;{contact}&#41;</sup>
            </CardContentSmall>
            <CardContent>
              <small>
                <i>am </i>
              </small>
              {borrowdate}
            </CardContent>
            <CardContent>
              <small>
                <i>zurück am </i>
              </small>
              {duedate}
            </CardContent>
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

      <CardContainer style={{ display: isEditToggled ? 'block' : 'none' }}>
        <CardForm>
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

  function handleDetailsToggle() {
    const toggleTrueFalse = () => setIsDetailsToggled(!isDetailsToggled)
    toggleTrueFalse()
  }

  function handleEditToggle() {
    const toggleTrueFalse = () => setIsEditToggled(!isEditToggled)
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
