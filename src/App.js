import React, { useState } from 'react'
import styled from 'styled-components'
import ItemList from './components/itemList'
import Modal from 'react-modal'
import { IoIosAddCircle } from 'react-icons/io'
import Form from './components/CreateItemForm'
import { saveToLocal, loadFromLocal } from './utils/utils'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData'))
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

  function addItem(item) {
    const newItems = [item, ...itemData]
    setItemData(newItems)
    closeModal()
  }

  return (
    <AppGrid>
      <StyledItemList autoScroll="true">
        <ItemList items={itemData} />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={false}
          style={StyledModal}
        >
          <Form onSubmit={addItem} />
          <StyledFooter>
            <StyledButton onClick={closeModal}>Cancel</StyledButton>
            <StyledButton type="submit" form="cardForm">
              Save
            </StyledButton>
          </StyledFooter>
        </Modal>
      </StyledItemList>
      <StyledFooter>
        <StyledRoundButton onClick={openModal}>
          <IoIosAddCircle />
        </StyledRoundButton>
      </StyledFooter>
    </AppGrid>
  )
}

const StyledModal = {
  content: {
    borderRadius: '12px',
    background: '#52b2a9',
    top: '36%',
    left: '50%',
    minWidth: '19em',
    right: 'auto',
    bottom: 'auto',
    padding: '0.5rem',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    gridTemplateRows: 'auto auto',
  },
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

const StyledRoundButton = styled.button`
  height: 4rem;
  width: 4rem;
  display: inline-block;
  margin: 0.8rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  text-decoration: none;
  background: #e5c486;
  color: #234653;
  font-size: 65px;
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
