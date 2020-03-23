import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import { AppFooter } from './components/AppFooter'
import { FooterButton } from './components/buttons'
import { FormCreateCard } from './components/formCreateCard'
import ItemList from './components/itemList'
import Theme from './components/Theme'
import { loadFromLocal, saveToLocal } from './utils/utils'

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData') || [])
  const { on, toggle } = useToggle(false)
  const [isCreateToggled, setCreateToggled] = useState(false)

  return (
    <Theme>
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
          />
        </ItemListContainer>
        <AppFooter>
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
        </AppFooter>
      </AppGrid>
    </Theme>
  )
  function handleCreateToggle() {
    const toggleTrueFalse = () => setCreateToggled(!isCreateToggled)
    toggleTrueFalse()
    window.scroll(0, 0)
    toggle()
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
