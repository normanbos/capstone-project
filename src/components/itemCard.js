import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { CardWrapper } from './Card'
import ItemCardDetails from './itemCardDetails'
import ItemCardEdit from './itemCardEdit'
import ItemCardOverView from './itemCardOverview'
import { ReminderMailer } from './reminderMailer'
import { StyledModal } from './ReminderModal'

Modal.setAppElement(document.getElementById('root'))

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

  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <CardWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={StyledModal}
      >
        <div>
          <p>
            Sende eine freundliche Erinnerung an <b>{item.borrower}</b>{' '}
            <small>&#40;{contact}&#41;</small>:
          </p>
          <ReminderMailer
            item={item.title}
            borrower={item.borrower}
            contact={item.contact}
            closeModal={closeModal}
          />
        </div>
      </Modal>

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
