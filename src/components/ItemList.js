import React from 'react'
import ItemCard from './ItemCard'

export default function ItemList({ items }) {
  return (
    <>
      {items.map(item => (
        <ItemCard
          title={item.title}
          borrower={item.borrower}
          borrowdate={item.borrowdate}
          duedate={item.duedate}
        ></ItemCard>
      ))}
    </>
  )
}
