import styled from 'styled-components'

export const StyledRoundButton = styled.button`
  height: 4rem;
  width: 4rem;
  display: inline-block;
  focus {
    outline: none;
  }
  margin: 0.8rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  text-decoration: none;
  background: #e5c486;
  color: #234653;
  font-size: 65px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
`
