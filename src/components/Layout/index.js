import React from 'react'
import GlobalStyle from '../../styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { TransitionPortal } from 'gatsby-plugin-transition-link'

import { Wrapper, Body } from './styles'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <TransitionPortal level='top'>
        <Header />
      </TransitionPortal>
      <Body>{children}</Body>
      <Footer />
    </Wrapper>
  </>
)

export default Layout
