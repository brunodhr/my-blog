import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: grey;
`
// background-image: linear-gradient(to bottom right, #505050, #81c2de);

export const Body = styled.div`
  padding: 20px 20%;
  height: calc(100vh - 133px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #505050;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: calc(100vh - 130px);
  }
`
