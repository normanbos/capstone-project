import React from 'react'
import { CardContainer, CardContent, CardContentSmall } from './Card'
import DueTime from './dueTime'

export default function ItemCardOverview({
  item,
  handleDetailsToggle,
  isDetailsToggled,
  isEditToggled,
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
        <b>{item.title}</b>
      </CardContent>
      <CardContentSmall>
        <i>bei: </i>
        {item.borrower} • <i>fällig: </i>
        <DueTime timeLeft={timeLeft} />
      </CardContentSmall>
    </CardContainer>
  )
}
