import styled from 'styled-components/macro'

export const Button = styled.button`
  width: 7rem;
  height: 3rem;
  display: inline-block;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  text-decoration: none;
  background: ${props => props.theme.colors.goldSand};
  font-family: 'Fira Mono', monospace;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const RoundButton = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  margin-right: 1em;
  background-color: ${props => props.theme.colors.goldSand};
  border-radius: 50%;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin: 0.5px; /* Adjusts for spacing */
  }

  > * {
    color: ${props => props.theme.colors.blueDianne};
    font-size: 1em;
    margin: auto;
    text-align: center;
    vertical-align: middle;
  }
`
