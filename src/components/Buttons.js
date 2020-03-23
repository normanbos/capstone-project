import React from 'react'
import { FaEdit, FaReply, FaSave, FaTrashAlt } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import styled from 'styled-components/macro'
import { ReactComponent as Icon } from '../img/mailalertplaceholder.svg'

export function MailAlertButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      css={`
        background: ${props => props.theme.colors.rawSienna};
      `}
    >
      <Icon
        stroke="currentColor"
        fill="#151611"
        height="1em"
        width="1em"
        strokeWidth="0"
        name="mailalert"
      />
    </Button>
  )
}

export function EditButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaEdit />
    </Button>
  )
}

export function DeleteButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaTrashAlt />
    </Button>
  )
}

export function CancelButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaReply />
    </Button>
  )
}

export function SaveButton({ onClick }) {
  return (
    <Button name="save" onClick={onClick}>
      <FaSave />
    </Button>
  )
}

export function FooterButton({ onClick, style }) {
  return (
    <LargeButton style={style} name="footerButton" onClick={onClick}>
      <IoIosAddCircle />
    </LargeButton>
  )
}

const Button = styled.button`
  border: 0;
  text-decoration: none;
  cursor: pointer;
  width: 2em;
  height: 2em;
  display: inline-block;
  border-radius: 50%;
  font-size: 1em;
  margin-left: 0.5em;
  text-decoration: none;
  background: ${props => props.theme.colors.goldSand};
  color: ${props => props.theme.colors.blueDianne};
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const LargeButton = styled.div`
  width: 1em;
  height: 1em;

  display: inline-block;
  justify-content: center;
  vertical-align: middle;

  border: 0;
  border-radius: 50%;
  margin-top: 0.12em;

  font-size: 3.9em;
  line-height: 1;
  text-decoration: none;

  background: ${props => props.theme.colors.goldSand};
  color: ${props => props.theme.colors.blueDianne};
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`
