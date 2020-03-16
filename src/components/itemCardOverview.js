import React from 'react'
import { CardContent, CardContentSmall, CardContainer } from './Card'
import CountdownTimer from './countdownTimer'

export default function ItemCardOverview({
  handleDetailsToggle,
  isDetailsToggled,
  isEditToggled,
  title,
  borrower,
  duedate,
}) {
  return (
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
  )
}
