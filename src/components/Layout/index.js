import React from 'react'
import GlobalStyle from '../../styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { Wrapper, Body } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
