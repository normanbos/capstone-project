import React from 'react'
import itemData from '../itemData'
import ItemCard from './itemCard'

export default function ItemList() {
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
