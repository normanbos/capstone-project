import React, { useState } from 'react'
import styled from 'styled-components'
import itemData from '../itemData'

import { saveToLocal, loadFromLocal } from '../utils/utils'

export default function CreateItemCard() {
  const [item, setItem] = useState({})
  return (
    <>
      <CardForm onChange={handleChange}>
        <LabelStyled htmlFor="item">
          Item
          <textarea
            autoFocus
            type="text"
            name="item"
            id="item"
            value={itemState.item}
            onChange={handleItemChange}
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
      </CardForm>
    </>
  )

  function handleChange(event) {
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.item = Array.from(
      new Set(
        data.item
          .split(',')
          .map(t => t.trim())
          .filter(t => t.length)
          .sort()
      )
    )
    setItem(data)
    console.log(setItem)
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

const CardForm = styled.form`
  display: grid;
  gap: 10px;
  padding: 0;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 8px;
`
