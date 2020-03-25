import React from 'react'
import { CardContainer, CardContent, CardContentSmall } from './Card'
import DueTime from './dueTime'

export default function ItemCardOverview({
  handleDetailsToggle,
  isDetailsToggled,
  isEditToggled,
  title,
  borrower,
  isCreateToggled,
  timeLeft,
}) {
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
        {borrower} • <i>fällig: </i>
        <DueTime timeLeft={timeLeft} />
      </CardContentSmall>
    </CardContainer>
  )
}
