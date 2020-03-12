import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components'
import CountdownTimer from './CountdownTimer'

export default function ItemCard({
  title,
  borrower,
  borrowdate,
  duedate,
  deleteItem,
  item,
}) {
  const { on, toggle } = useToggle(false)
  const [isToggled, setToggled] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  return (
    <>
      <StyledButton
        style={{ visibility: isToggled ? 'visible' : 'hidden' }}
        onClick={handleEditToggle}
      >
        Edit
      </StyledButton>
      <StyledButton
        style={{ visibility: isToggled ? 'visible' : 'hidden' }}
        onClick={() => deleteItem(item)}
      >
        &times;
      </StyledButton>
      <div onClick={handleToggle} className="card-container">
        {toggleEdit ? (
          <input
            autoFocus
            type="text"
            name="title"
            id="title"
            value={title}
            //onChange={handleItemChange}
          />
        ) : (
          <StyledContent style={{ fontWeight: 'bold' }}>{title} </StyledContent>
        )}

        <StyledContentSmall
          style={{ visibility: !isToggled ? 'visible' : 'hidden' }}
        >
          an: {borrower} • <CountdownTimer itemDueDate={duedate} />
        </StyledContentSmall>

        {on && (
          <CardDetails>
            {toggleEdit ? (
              <>
                <StyledContent>
                  <label htmlFor="borrower">
                    verliehen an:
                    <input
                      type="text"
                      name="borrower"
                      id="borrower"
                      value={borrower}
                      //onChange={handleItemChange}
                    />
                  </label>
                </StyledContent>
                <StyledContent>
                  <label htmlFor="borrowdate">
                    am:
                    <input
                      type="date"
                      name="borrowdate"
                      id="borrowdate"
                      placeholder="TT.MM.JJJ"
                      value={borrowdate}
                      //onChange={handleItemChange}
                    />
                  </label>
                </StyledContent>
                <StyledContent>
                  <label htmlFor="duedate">
                    zurück am:
                    <input
                      type="date"
                      name="duedate"
                      id="duedate"
                      placeholder="TT.MM.JJJ"
                      value={duedate}
                      //onChange={handleItemChange}
                    />
                  </label>
                </StyledContent>
              </>
            ) : (
              <>
                <StyledContent>verliehen an: {borrower}</StyledContent>
                <StyledContent>am: {borrowdate}</StyledContent>
                <StyledContent>zurück am: {duedate}</StyledContent>
              </>
            )}
          </CardDetails>
        )}
      </div>
    </>
  )

  function handleToggle() {
    const toggleTrueFalse = () => setToggled(!isToggled)
    toggleTrueFalse()
    toggle()
  }

  function handleEditToggle() {
    const toggleTrueFalse = () => setToggleEdit(!toggleEdit)
    toggleTrueFalse()
  }
}

const CardDetails = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`

const StyledContent = styled.p`
  margin: 0;
  padding: 2px;
`

const StyledContentSmall = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding: 2px;
`

const StyledButton = styled.button`
  display: block;
  float: right;
  font-size: 1.2rem;
`
