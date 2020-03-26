import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { CardWrapper } from './Card'
import ItemCardDetails from './itemCardDetails'
import ItemCardEdit from './itemCardEdit'
import ItemCardOverView from './itemCardOverview'
import ReminderModal from './ReminderModal'

Modal.setAppElement(document.getElementById('root'))

export default function ItemCard({
  deleteItem,
  item,
  editItem,
  isCreateToggled,
  mailCreds,
}) {
  const [isDetailsToggled, setIsDetailsToggled] = useState(false)
  const [isEditToggled, setIsEditToggled] = useState(false)
  const [itemState, setItemState] = useState({
    title: item.title,
    borrower: item.borrower,
    contact: item.contact,
    borrowdate: item.borrowdate,
    duedate: item.duedate,
    id: item.id,
  })
  const [timeLeft, setTimeLeft] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false)

  function calculateTimeLeft() {
    const deadline = new Date(item.duedate)
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
      <ReminderModal
        item={item}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        shouldCloseOnOverlayClick={false}
        mailCreds={mailCreds}
      />

      <ItemCardOverView
        handleDetailsToggle={handleDetailsToggle}
        isDetailsToggled={isDetailsToggled}
        setIsDetailsToggled={setIsDetailsToggled}
        isEditToggled={isEditToggled}
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
        deleteItem={deleteItem}
        item={item}
        isCreateToggled={isCreateToggled}
        timeLeft={timeLeft}
        openModal={openModal}
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

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

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
