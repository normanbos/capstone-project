import React from 'react'
import { DeleteButton, EditButton, MailAlertButton } from './buttons'
import {
  CardContainer,
  CardContent,
  CardContentSmall,
  CardDetails,
  CardHeader,
  CardHeaderNav,
} from './Card'

export default function ItemCardDetails({
  title,
  borrower,
  contact,
  borrowdate,
  duedate,
  deleteItem,
  item,
  isEditToggled,
  isDetailsToggled,
  handleDetailsToggle,
  handleEditToggle,
  isCreateToggled,
  timeLeft,
  openModal,
}) {
  console.log('isEditToggled is ' + isEditToggled)
  return (
    <CardContainer
      onClick={isCreateToggled ? null : handleDetailsToggle}
      style={{
        display:
          isDetailsToggled & !isEditToggled & !isCreateToggled
            ? 'block'
            : 'none',
      }}
    >
      <CardDetails>
        <CardHeader>
          <b>{title}</b>
          <CardHeaderNav>
            {timeLeft.hours <= 0 && timeLeft.days <= 0 && (
              <MailAlertButton onClick={openModal} />
            )}
            <EditButton onClick={handleEditToggle} />
            <DeleteButton onClick={() => deleteItem(item)} />
          </CardHeaderNav>
        </CardHeader>

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
      </CardDetails>
    </CardContainer>
  )
}
