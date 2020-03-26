import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import { AppFooter, FooterGridItem } from './components/AppFooter'
import { FooterButton, SettingsButton } from './components/buttons'
import { FormCreateCard } from './components/formCreateCard'
import Modal from 'react-modal'
import MailCredentialsModal from './components/MailCredentialsModal'
import ItemList from './components/itemList'
import Theme from './components/Theme'
import { loadFromLocal, saveToLocal } from './utils/utils'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData') || [])
  const [mailCreds, setMailCreds] = useState(loadFromLocal('mailCreds') || {})
  const { on, toggle } = useToggle(false)
  const [isCreateToggled, setCreateToggled] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <Theme>
      <MailCredentialsModal
        mailCreds={mailCreds}
        setMailCreds={setMailCreds}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        shouldCloseOnOverlayClick={false}
        saveCreds={saveCreds}
      />
      <AppGrid>
        <ItemListContainer
          style={{ overflowY: isCreateToggled ? 'hidden' : 'auto' }}
        >
          {on && (
            <FormCreateCard
              cancelHandle={handleCreateToggle}
              onSubmit={addItem}
            />
          )}
          <ItemList
            isCreateToggled={isCreateToggled}
            items={itemData}
            deleteItem={deleteItem}
            editItem={editItem}
            mailCreds={mailCreds}
          />
        </ItemListContainer>
        <AppFooter>
          <FooterGridItem />
          <div>
            <FooterButton
              style={{
                display: !isCreateToggled ? 'inline-block' : 'none',
                cursor: !isCreateToggled ? 'pointer' : 'auto',
              }}
              onClick={handleCreateToggle}
            />

            <FooterButton
              style={{
                display: isCreateToggled ? 'inline-block' : 'none',
                cursor: isCreateToggled ? 'auto' : 'pointer',
              }}
            />
          </div>
          <FooterGridItem>
            <SettingsButton onClick={openModal} />
          </FooterGridItem>
        </AppFooter>
      </AppGrid>
    </Theme>
  )

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleCreateToggle() {
    const toggleTrueFalse = () => setCreateToggled(!isCreateToggled)
    toggleTrueFalse()
    window.scroll(0, 0)
    toggle()
  }

  function saveCreds(item) {
    const newCreds = item
    saveToLocal('mailCreds', newCreds)
    closeModal()
  }

  function addItem(item) {
    const newItems = [item, ...itemData]
    setItemData(newItems)
    saveToLocal('itemData', newItems)
    handleCreateToggle()
  }

  function deleteItem(item) {
    const index = itemData.indexOf(item)
    const updateItem = [
      ...itemData.slice(0, index),
      ...itemData.slice(index + 1),
    ]
    setItemData(updateItem)
    saveToLocal('itemData', updateItem)
  }

  function editItem(itemState, item) {
    const index = itemData.indexOf(item)
    const updateItem = [
      ...itemData.slice(0, index),
      itemState,
      ...itemData.slice(index + 1),
    ]
    setItemData(updateItem)
    saveToLocal('itemData', updateItem)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 90px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background: ${props => props.theme.colors.blueDianne};
`

const ItemListContainer = styled.section`
  padding: 20px;
  background: ${props => props.theme.colors.rangoonGreen};
`
