import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('white', 0)};
    font-size: 1.25rem;
    &.active {
      text-decoration: underline;
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/" onlyActiveOnIndex activeClassName="active">Home</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool
}

export default PrimaryNavigation
