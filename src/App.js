import React, { useState } from 'react'
import styled from 'styled-components'
import ItemList from './components/itemList'
import CreateItemCard from './components/createItemCard'
import Modal from 'react-modal'

const StyledModal = {
  content: {
    borderRadius: '12px',
    background: '#52b2a9',
    top: '50%',
    left: '50%',
    minWidth: '19em',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    gridTemplateRows: 'auto 70px',
  },
}

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <AppGrid>
      <StyledItemList autoScroll="true">
        <>{ItemList()}</>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={false}
          style={StyledModal}
        >
          {CreateItemCard()}
          <div>
            <StyledButton onClick={closeModal}>Cancel</StyledButton>
            <StyledButton onClick={closeModal}>Save</StyledButton>
          </div>
        </Modal>
      </StyledItemList>
      <StyledFooter>
        <StyledButton onClick={openModal}>+</StyledButton>
      </StyledFooter>
    </AppGrid>
  )
}

const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;
  display: inline-block;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  text-decoration: none;
  background: #e5c486;
  font-family: 'Fira Mono', monospace;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const StyledItemList = styled.section`
  background: #151611;
  padding: 20px;
  overflow-y: auto;
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
`

const AppGrid = styled.div`
  display: grid;
  background: #234653;
  grid-template-rows: auto 90px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
