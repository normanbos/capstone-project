import React from 'react'
import { ReminderMailer } from './reminderMailer'
import Modal from 'react-modal'

export default function ReminderModal({
  item,
  modalIsOpen,
  closeModal,
  StyledModal,
  mailCreds,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={StyledModal}
    >
      <div>
        <p>
          Sende eine freundliche Erinnerung an <b>{item.borrower}</b>{' '}
          <small>&#40;{item.contact}&#41;</small>:
        </p>
        <ReminderMailer
          item={item.title}
          borrower={item.borrower}
          contact={item.contact}
          closeModal={closeModal}
          mailCreds={mailCreds}
        />
      </div>
    </Modal>
  )
}

export const StyledModal = {
  content: {
    display: 'grid',
    gridTemplateRows: 'auto 70px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    minWidth: '19em',
    marginRight: '-40%',
    borderRadius: '12px',
    background: '#cb7350',
    transform: 'translate(-50%, -50%)',
  },
}
