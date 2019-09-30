import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Container = styled.div``

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

export const Arrows = styled.div``

export const Link = styled(AniLink)`
  color: rgb(97, 219, 251);
  font-weight: 900;
  opacity: 0.5;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`
