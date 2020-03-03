import React from 'react'
import itemData from './itemData'
import ItemCard from './itemCard'

export default function Items() {
  return (
    <>
      <div>
        {itemData.map(item => (
          <ItemCard item={item}></ItemCard>
        ))}
      </div>
    </>
  )
}
