import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const Menu = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    max-height: 80px;
    overflow: hidden;
  }
`

export const Logo = styled.svg`
  padding: 10px;
  width: 80px;
  height: 80px;
  transition: 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export const Github = styled(Logo)`
  animation: ${rotate} infinite 20s linear;
  fill: rgb(97, 219, 251);
`

export const Gatsby = styled(Logo)`
  width: 150px;
  fill: #639;
`

export const Link = styled.a``
