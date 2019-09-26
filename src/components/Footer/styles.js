import styled from 'styled-components'

export const Menu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  background-color: #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }
`

export const Link = styled.a`
  text-decoration: none;
  box-shadow: none;
`

export const Icon = styled.svg`
  fill: #61dafb;
  padding: 10px;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`
export const Container = styled.div``
