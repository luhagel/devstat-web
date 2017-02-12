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
    padding: 5px 10px;
    &.active {
      border: 1px solid ${palette('grayscale', 0)};
      border-radius: 3px;
      color: ${palette('white', 0)};
      background-color: ${palette('grayscale', 3)};
    }
  }
`

const SecondaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <Link to="/">Home</Link>
      <Link to="/app" activeClassName="active">Application</Link>
      <Link to="/app/teams/add" activeClassName="active">New Team</Link>
    </Nav>
  )
}

SecondaryNavigation.propTypes = {
  reverse: PropTypes.bool
}

export default SecondaryNavigation
