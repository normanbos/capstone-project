import React from 'react'
import { CancelButton, SaveButton } from './buttons'
import { CardContainer, CardHeader, CardHeaderNav } from './Card'
import { CardForm, Input, FormLabel } from './Form'

export default function ItemCardEdit({
  itemState,
  isEditToggled,
  handleEdit,
  handleEditToggle,
  handleItemChange,
  isCreateToggled,
}) {
  return (
    <CardContainer
      style={{
        display: isEditToggled & !isCreateToggled ? 'block' : 'none',
      }}
    >
      <CardHeader>
        <div></div>
        <CardHeaderNav>
          <CancelButton onClick={handleEditToggle} />
          <SaveButton onClick={handleEdit} />
        </CardHeaderNav>
      </CardHeader>

      <CardForm>
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
    </CardContainer>
  )
}
