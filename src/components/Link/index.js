import React from 'react'
import PropTypes from 'prop-types'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Link = ({ children, to }) => (
  <AniLink to={to} cover direction='down' duration={1} bg={'#505050'}>
    {children}
  </AniLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
}

export default Link
