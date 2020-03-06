import React from 'react'
import ItemCard from './itemCard'

export default function ItemList({ items }) {
  return (
    <>
      {items.map(item => (
        <ItemCard item={item}></ItemCard>
      ))}
    </>
  )
}
