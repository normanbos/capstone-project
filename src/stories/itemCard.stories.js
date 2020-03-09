import React from 'react'
import ItemCard from '../components/ItemCard'

export default {
  title: 'Components/Card',
  component: ItemCard,
  decorators: [
    renderItemCard => (
      <div style={{ padding: 20, width: 400 }}>{renderItemCard()}</div>
    ),
  ],
}

export const DefaultCard = () => (
  <ItemCard
    item={'Ding'}
    borrower={'Jemand'}
    borrowdate={'2020-02-02'}
    duedate={'2020-03-15'}
  />
)
