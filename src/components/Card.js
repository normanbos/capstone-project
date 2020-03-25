import styled, { keyframes } from 'styled-components/macro'

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 2px;
  font-size: 1.2rem;
`

export const CardHeaderNav = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CardDetails = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`

export const CardContent = styled.div`
  margin: 0;
  padding: 2px;
`

export const CardContentSmall = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 0.9rem;
`

export const CardContainer = styled.div`
  margin: 0;
  padding: 0;
`

const cardCreationAnimation = props => keyframes`
from {
    background-color: ${props.theme.colors.rawSienna};
  }
  to {
    background-color: ${props.theme.colors.tradewind};
  }
`

export const CardWrapper = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 12px;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.rangoonGreen};
  background-color: ${props => props.theme.colors.tradewind};
  animation-name: ${cardCreationAnimation};
  animation-duration: 4s;
`

export const CreateCardContainer = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 12px;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.rangoonGreen};
  background: ${props => props.theme.colors.rawSienna};
`
