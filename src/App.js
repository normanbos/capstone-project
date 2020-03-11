import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import { IoIosAddCircle } from 'react-icons/io'
import ItemList, { StyledItemList } from './components/ItemList'
import { loadFromLocal, saveToLocal } from './utils/utils'
import { FormCreateItem } from './components/FormCreateCard'
import { StyledRoundButton, StyledFooter } from './components/Footer'
import './styles.css'

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData') || [])
  const { on, toggle } = useToggle(false)
  const [isToggled, setToggled] = useState(false)

  return (
    <AppGrid>
      <StyledItemList style={{ overflowY: isToggled ? 'hidden' : 'auto' }}>
        {on && (
          <FormCreateItem cancelHandle={handleToggle} onSubmit={addItem} />
        )}
        <ItemList items={itemData} />
      </StyledItemList>
      <StyledFooter>
        <StyledRoundButton
          disabled={isToggled ? 'disabled' : ''}
          onClick={handleToggle}
        >
          <IoIosAddCircle />
        </StyledRoundButton>
      </StyledFooter>
    </AppGrid>
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
}

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
