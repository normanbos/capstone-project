import React from 'react'
import ItemCard from './ItemCard'

export default function ItemList({
  items,
  deleteItem,
  editItem,
  isCreateToggled,
  mailCreds,
}) {
  return (
    <>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          deleteItem={deleteItem}
          editItem={editItem}
          item={item}
          isCreateToggled={isCreateToggled}
          mailCreds={mailCreds}
        ></ItemCard>
      ))}
    </>
  )
}
