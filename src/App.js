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
      { Gegenstand: 'Bohrmaschine', Name: 'Fritz' },
      { Gegenstand: 'Backform', Name: 'Hans' },
      { Gegenstand: 'Fahrrad', Name: 'Klaus' },
      { Gegenstand: 'Buch', Name: 'Anna' },
      { Gegenstand: 'CD', Name: 'Marie' },
      { Gegenstand: 'noch ein Buch', Name: 'Jan' },
    ]
    return (
      <div>
        {items.map(item => {
          return (
            <SingleCard>
              <p style={{ fontWeight: 'bold' }}>{item.Gegenstand}</p>
              <p>ausgeliehen an: {item.Name}</p>
            </SingleCard>
          )
        })}
      </div>
    )
  }
}

const SingleCard = styled.div`
  margin: 5px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const ItemList = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
  autoscroll: true;
  scroll-behavior: smooth;
`

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
