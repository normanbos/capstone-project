import React from 'react'
import { FaEdit, FaTrashAlt, FaReply, FaSave } from 'react-icons/fa'
import { ReactComponent as Icon } from '../img/mailalertplaceholder.svg'
import styled from 'styled-components/macro'

export function MailAlertButton() {
  return (
    <RoundButton
      css={`
        background: ${props => props.theme.colors.rawSienna};
      `}
    >
      <Icon
        fill="#151611"
        width="60%"
        height="auto"
        strokeWidth="15"
        name="mailalert"
      />
    </RoundButton>
  )
}

export function EditButton({ onClick }) {
  return (
    <RoundButton onClick={onClick}>
      <FaEdit />
    </RoundButton>
  )
}

export function DeleteButton({ onClick }) {
  return (
    <RoundButton onClick={onClick}>
      <FaTrashAlt />
    </RoundButton>
  )
}

export function CancelButton({ onClick }) {
  return (
    <RoundButton onClick={onClick}>
      <FaReply />
    </RoundButton>
  )
}

export function SaveButton({ onClick }) {
  return (
    <RoundButton onClick={onClick}>
      <FaSave />
    </RoundButton>
  )
}

const Button = styled.button`
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

const RoundButton = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  margin-left: 0.5em;
  background-color: ${props => props.theme.colors.goldSand};
  border-radius: 50%;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin: 0.4px; /* Adjusts for spacing */
  }

  > * {
    color: ${props => props.theme.colors.blueDianne};
    font-size: 1em;
    margin: auto;
    text-align: center;
    vertical-align: middle;
  }
`
