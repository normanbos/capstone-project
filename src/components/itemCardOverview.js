import React from 'react'
import { CardContent, CardContentSmall, CardContainer } from './Card'
import { CountdownTimer } from './countdownTimer'

export default function ItemCardOverview({
  handleDetailsToggle,
  isDetailsToggled,
  isEditToggled,
  title,
  borrower,
  duedate,
  isCreateToggled,
}) {
  console.log()
  return (
    <CardContainer
      onClick={isCreateToggled ? null : handleDetailsToggle}
      style={{
        display:
          !isDetailsToggled & !isEditToggled || isCreateToggled
            ? 'block'
            : 'none',
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
  )
}
