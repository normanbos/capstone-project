import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Button, RoundButton } from './Buttons'
import {
  CardDetails,
  CardContent,
  CardContentSmall,
  CardContainer,
  CardFooter,
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
}) {
  return (
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
        <RoundButton onClick={handleEditToggle}>
          <FaEdit />
        </RoundButton>
        <RoundButton onClick={() => deleteItem(item)}>
          <FaTrashAlt />
        </RoundButton>
      </CardFooter>
    </CardContainer>
  )
}
