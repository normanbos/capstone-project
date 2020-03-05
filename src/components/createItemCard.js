import React, { useState } from 'react'
import styled from 'styled-components'
import itemData from '../itemData'

import { saveToLocal, loadFromLocal } from '../utils/utils'

export default function CreateItemCard() {
  const [item, setItem] = useState({})
  return (
    <>
      <CreateCard>
        <FormStyled onSubmit={addItem}>
          <LabelStyled>
            Gegenstand
            <textarea
              autoFocus
              name="item"
              placeholder="Was willst du verleihen?"
            />
          </LabelStyled>
          <LabelStyled>
            An wen
            <textarea name="borrower" placeholder="Wer leiht aus?" />
          </LabelStyled>
          <LabelStyled>
            Kontakt
            <input type="email" name="contact" placeholder="E-Mail" />
          </LabelStyled>
          <LabelStyled>
            ausgeliehen am
            <input type="date" name="date" />
          </LabelStyled>
          <LabelStyled>
            zurück am
            <input type="date" name="duedate" />
          </LabelStyled>
          <button>Create item</button>
        </FormStyled>
      </CreateCard>
    </>
  )

  function addItem() {
    const newItem = {
      thing: '{item.value}',
      borrower: '{borrower.value}',
      email: '{email.value}',
      borrowdate: '{date.value}',
      duedate: '{duedate.value}',
    }
    itemData = [newItem, ...itemData]
    console.log(newItem)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    //onSubmit(item)
    form.reset()
    setItem({})
    form[0] && form[0].focus()
  }
}

const CreateCard = styled.div`
  height: 400px;
`

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 8px;
`
