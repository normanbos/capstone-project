import React from 'react'
import styled from 'styled-components'
import Items from './itemList'

export default function App() {
  return (
    <AppGrid>
      <ItemList autoScroll="true">{Items()}</ItemList>
    </AppGrid>
  )
}

const ItemList = styled.section`
  background: #263c51;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
`

const AppGrid = styled.div`
  display: grid;
  background: #7fb8b6;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
