import React from 'react'
import styled from 'styled-components'

export default function App() {
  return (
    <AppGrid>
      <ItemList autoScroll="true">{Items()}</ItemList>
    </AppGrid>
  )

  function Items() {
    const items = [
      { thing: 'Bohrmaschine', borrower: 'Fritz' },
      { thing: 'Backform', borrower: 'Hans' },
      { thing: 'Fahrrad', borrower: 'Klaus' },
      { thing: 'Buch', borrower: 'Anna' },
      { thing: 'CD', borrower: 'Marie' },
      { thing: 'noch ein Buch', borrower: 'Jan' },
    ]
    return (
      <div>
        {items.map(item => {
          return (
            <ItemCard>
              <p style={{ fontWeight: 'bold' }}>{item.thing}</p>
              <p>ausgeliehen an: {item.borrower}</p>
            </ItemCard>
          )
        })}
      </div>
    )
  }
}

const ItemCard = styled.div`
  margin: 10px;
  background: #fbf9fb;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const ItemList = styled.section`
  background: #263c51;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
  autoscroll: true;
  scroll-behavior: smooth;
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
