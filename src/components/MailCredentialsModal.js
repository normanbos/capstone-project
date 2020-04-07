import React from 'react'
import Modal from 'react-modal'
import { CardContainer, CardHeader, CardHeaderNav } from './Card'
import { CancelButton, SaveButton } from './Buttons'
import { CardForm, Input, FormLabel } from './Form'

export default function MailCredentialsModal({
  setMailCreds,
  mailCreds,
  saveCreds,
  modalIsOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={StyledModal}
    >
      <CardContainer>
        <CardHeader>
          <div></div>
          <CardHeaderNav>
            <CancelButton onClick={closeModal} />
            <SaveButton type="submit" form="cardForm" onClick={handleSave} />
          </CardHeaderNav>
        </CardHeader>
        <p>
          Um die Benachrichtungsfunktion verwenden zu können, trage deine
          E-Mail-Zugangsdaten hier ein:
        </p>
        <CardForm id="cardForm">
          <FormLabel htmlFor="host" content="SMTP-Host" />
          <Input
            type="text"
            name="host"
            id="host"
            value={mailCreds.host}
            onChange={handleItemChange}
          />

          <FormLabel htmlFor="port" content="Port" />
          <Input
            type="text"
            name="port"
            id="port"
            value={mailCreds.port}
            onChange={handleItemChange}
          />

          <FormLabel htmlFor="username" content="Benutzername" />
          <Input
            type="text"
            name="user"
            id="user"
            value={mailCreds.user}
            onChange={handleItemChange}
          />

          <FormLabel htmlFor="password" content="Passwort" />
          <Input
            type="pass"
            name="pass"
            id="pass"
            value={mailCreds.pass}
            onChange={handleItemChange}
          />
        </CardForm>
      </CardContainer>
    </Modal>
  )

  function handleSave(event) {
    event.preventDefault()
    saveCreds(mailCreds)
  }

  function handleItemChange(event) {
    setMailCreds({
      ...mailCreds,
      [event.target.name]: event.target.value,
    })
  }
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
