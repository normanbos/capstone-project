import React from 'react'
import { CardContent, CardContentSmall, CardContainer } from './Card'
import DueTimer from './dueTimer'

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
        <DueTimer timeLeft={timeLeft} />
      </CardContentSmall>
    </CardContainer>
  )
}
