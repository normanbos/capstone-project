import styled from 'styled-components/macro'

export const RoundButton = styled.button`
  display: inline-block;
  height: 4rem;
  width: 4rem;
  focus {
    outline: none;
  }
  margin: 0.8rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${props => props.theme.colors.goldSand};
  color: ${props => props.theme.colors.blueDianne};
  font-size: 65px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const AppFooter = styled.footer`
  position: relative;
  text-align: center;
  width: 100%;
`

export const FooterRoundButton = styled.div`
  display: inline-block;
  width: 4em;
  height: 4em;
  margin-top: 0.5em;
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
    font-size: 3.9em;
    margin: auto;
    text-align: center;
    vertical-align: middle;
  }
`
