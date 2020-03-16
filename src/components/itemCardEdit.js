import React from 'react'
import { FaReply, FaSave } from 'react-icons/fa'
import { Button } from './Buttons'
import { CardContainer, CardFooter } from './Card'
import { CardForm, Input, Label } from './Form'

export default function ItemCardEdit({
  itemState,
  isEditToggled,
  handleEdit,
  handleEditToggle,
  handleItemChange,
}) {
  return (
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
  )
}
