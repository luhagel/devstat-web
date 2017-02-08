import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  a {
    font-weight: 300;
    color: ${palette('grayscale', 0)};
    font-size: 1.25rem;
    &.active {
      text-decoration: underline;
    }
  }
`

const SecondaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <Link to="/" onlyActiveOnindex>Home</Link>
      <Link to="/app" activeClassName="active">Application</Link>
    </Nav>
  )
}

SecondaryNavigation.propTypes = {
  reverse: PropTypes.bool
}

export default SecondaryNavigation
