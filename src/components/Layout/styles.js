import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: grey;
`
// background-image: linear-gradient(to bottom right, #505050, #81c2de);

export const Body = styled.div`
  padding: 100px 20%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #505050;
  }
`
