import React from 'react'
import styled from 'styled-components'
import ItemList from './components/itemList'

export default function App() {
  return (
    <AppGrid>
      <StyledItemList autoScroll="true">{ItemList()}</StyledItemList>
      <footer>
        <button>Create new item</button>
      </footer>
    </AppGrid>
  )
}

const StyledItemList = styled.section`
  background: #151611;
  padding: 20px;
  overflow-y: auto;
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
