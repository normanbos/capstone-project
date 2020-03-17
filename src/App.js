import React, { useState } from 'react'
import Theme from './components/Theme'
import { useToggle } from 'react-hooks-lib'
import { IoIosAddCircle } from 'react-icons/io'
import styled from 'styled-components'
import { AppFooter, FooterRoundButton } from './components/AppFooter'
import { FormCreateCard } from './components/formCreateCard'
import ItemList from './components/itemList'
import { loadFromLocal, saveToLocal } from './utils/utils'

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData') || [])
  const { on, toggle } = useToggle(false)
  const [isToggled, setToggled] = useState(false)

  return (
    <Theme>
      <AppGrid>
        <ItemListContainer style={{ overflowY: isToggled ? 'hidden' : 'auto' }}>
          {on && (
            <FormCreateCard cancelHandle={handleToggle} onSubmit={addItem} />
          )}
          <ItemList
            items={itemData}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </ItemListContainer>
        <AppFooter>
          <FooterRoundButton
            disabled={isToggled ? 'disabled' : ''}
            onClick={handleToggle}
          >
            <IoIosAddCircle />
          </FooterRoundButton>
        </AppFooter>
      </AppGrid>
    </Theme>
  )
  function handleToggle() {
    const toggleTrueFalse = () => setToggled(!isToggled)
    toggleTrueFalse()
    window.scroll(0, 0)
    toggle()
  }

  function addItem(item) {
    const newItems = [item, ...itemData]
    setItemData(newItems)
    saveToLocal('itemData', newItems)
    handleToggle()
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
  background: ${props => props.theme.colors.blueDianne};
  grid-template-rows: auto 90px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

const ItemListContainer = styled.section`
  background: ${props => props.theme.colors.rangoonGreen};
  padding: 20px;
`
