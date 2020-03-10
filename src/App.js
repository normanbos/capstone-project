import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import { IoIosAddCircle } from 'react-icons/io'
// import FormCreateItem from './components/FormCreateItem'
import ItemList, { StyledItemList } from './components/ItemList'
import { loadFromLocal, saveToLocal } from './utils/utils'
import { FormCreateItem } from './components/FormCreateCard'
import { StyledRoundButton, StyledFooter } from './components/Footer'

export default function App() {
  const [itemData, setItemData] = useState(loadFromLocal('itemData') || [])
  const { on, toggle } = useToggle(false)
  const [isToggled, setToggled] = useState(false)

  //TODO: automatic scroll to top when Form is toggled. Background color transition when card is created. Disable "add" button when the form is toggled

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
    //FIXME: scrolling funktioniert noch nicht
    window.scroll(0, 0)
    toggle()
    console.log(isToggled)
    console.log(toggle)
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
