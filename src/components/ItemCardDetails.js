import React from 'react'
import { DeleteButton, EditButton, MailAlertButton } from './Buttons'
import {
  CardContainer,
  CardContent,
  CardContentSmall,
  CardDetails,
  CardHeader,
  CardHeaderNav,
} from './Card'

export default function ItemCardDetails({
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
          <b>{item.title}</b>
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
          {item.borrower}
        </CardContent>
        <CardContentSmall>
          <sup>&#40;{item.contact}&#41;</sup>
        </CardContentSmall>
        <CardContent>
          <small>
            <i>am </i>
          </small>
          {item.borrowdate}
        </CardContent>
        <CardContent>
          <small>
            <i>zurück am </i>
          </small>
          {item.duedate}
        </CardContent>
      </CardDetails>
    </CardContainer>
  )
}
