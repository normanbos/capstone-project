import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RoundButton } from './Buttons'
import {
  CardDetails,
  CardContent,
  CardContentSmall,
  CardContainer,
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
            <RoundButton onClick={handleEditToggle}>
              <FaEdit />
            </RoundButton>
            <RoundButton onClick={() => deleteItem(item)}>
              <FaTrashAlt />
            </RoundButton>
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
