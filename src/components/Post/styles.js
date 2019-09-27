import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px;
  width: 50%;
  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100%;
  }
`

export const Container = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: inset 0 0 0 2px #2d2d2d;
  position: relative;
  transition: 0.5s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
  &:hover {
    color: #0eb7da;
    &::before,
    &::after {
      width: 100%;
      height: 100%;
    }
    &::before {
      border-top-color: #0eb7da;
      border-right-color: #0eb7da;
      transition: width 0.25s, height 0.25s 0.25s;
    }
    &::after {
      border-bottom-color: #0eb7da;
      border-left-color: #0eb7da;
      transition: border-color 0s 0.5s, width 0.25s 0.5s, height 0.25s 0.75s;
    }
  }
`

export const Title = styled.span`
  font-size: 20px;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
`
