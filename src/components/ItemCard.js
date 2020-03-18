import React, { useState, useEffect } from 'react'
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
  isCreateToggled,
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
  const [timeLeft, setTimeLeft] = useState({})

  function calculateTimeLeft() {
    const deadline = new Date(duedate)
    deadline.setDate(deadline.getDate() + 1)
    const now = new Date()
    const difference = deadline - now

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    })
  }
  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft()
    }, 1000)
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
        isCreateToggled={isCreateToggled}
        timeLeft={timeLeft}
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
        isCreateToggled={isCreateToggled}
        timeLeft={timeLeft}
      />

      <ItemCardEdit
        itemState={itemState}
        isEditToggled={isEditToggled}
        handleEdit={handleEdit}
        handleEditToggle={handleEditToggle}
        handleItemChange={handleItemChange}
        isCreateToggled={isCreateToggled}
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
