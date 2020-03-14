import React from 'react'
import ItemCard from './ItemCard'

export default function ItemList({ items, deleteItem, editItem }) {
  return (
    <>
      {items.map(item => (
        <ItemCard
          title={item.title}
          borrower={item.borrower}
          contact={item.contact}
          borrowdate={item.borrowdate}
          duedate={item.duedate}
          key={item.id}
          deleteItem={deleteItem}
          editItem={editItem}
          item={item}
        ></ItemCard>
      ))}
    </>
  )
}
