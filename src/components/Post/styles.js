import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px;
  width: 25%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 50%;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    width: 33%;
  }
`

export const Container = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
  }
`

export const Title = styled.span`
  font-size: 20px;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
`
