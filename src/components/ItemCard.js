import React, { useState } from 'react'
import ItemCardDetails from './itemCardDetails'
import ItemCardOverView from './itemCardOverview'
import ItemCardEdit from './itemCardEdit'
import { CardWrapper } from './Card'

export default function ItemCard({
  title,
  borrower,
  contact,
  borrowdate,
  duedate,
  deleteItem,
  item,
  editItem,
}) {
  const [isDetailsToggled, setIsDetailsToggled] = useState(false)
  const [isEditToggled, setIsEditToggled] = useState(false)
  const [itemState, setItemState] = useState({
    title,
    borrower,
    contact,
    borrowdate,
    duedate,
    id: item.id,
  })

  return (
    <CardWrapper>
      <ItemCardOverView
        handleDetailsToggle={handleDetailsToggle}
        isDetailsToggled={isDetailsToggled}
        setIsDetailsToggled={setIsDetailsToggled}
        isEditToggled={isEditToggled}
        title={item.title}
        borrower={item.borrower}
        contact={item.contact}
        borrowdate={item.borrowdate}
        duedate={item.duedate}
        item={item}
      />

      <ItemCardDetails
        handleEditToggle={handleEditToggle}
        handleDetailsToggle={handleDetailsToggle}
        isDetailsToggled={isDetailsToggled}
        setIsDetailsToggled={setIsDetailsToggled}
        isEditToggled={isEditToggled}
        title={item.title}
        borrower={item.borrower}
        contact={item.contact}
        borrowdate={item.borrowdate}
        duedate={item.duedate}
        deleteItem={deleteItem}
        item={item}
      />

      <ItemCardEdit
        itemState={itemState}
        isEditToggled={isEditToggled}
        handleEdit={handleEdit}
        handleEditToggle={handleEditToggle}
        handleItemChange={handleItemChange}
      />
    </CardWrapper>
  )

  function handleDetailsToggle() {
    const toggleTrueFalse = () => setIsDetailsToggled(!isDetailsToggled)
    toggleTrueFalse()
  }

  function handleEditToggle(event) {
    const toggleTrueFalse = () => setIsEditToggled(!isEditToggled)
    toggleTrueFalse()
    event.stopPropagation()
  }

  function handleEdit(event) {
    event.preventDefault()
    editItem(itemState, item)
    handleEditToggle(event)
  }

  function handleItemChange(event) {
    setItemState({
      ...itemState,
      [event.target.name]: event.target.value,
    })
  }
}
