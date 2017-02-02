import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { IconLink, PrimaryNavigation, Block } from 'components'
import { UserButton } from 'containers'

const Wrapper = styled(Block)`
  background-color: ${palette('primary', 0)};
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: -1px 0px 2px 2px #666;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block; 
  transform-origin: center;
  padding: -3rem 0 -3rem 0;
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <StyledIconLink to="/" icon="logo" height={100} reverse />
      <StyledPrimaryNavigation />
      {!process.env.LOGIN_DISABLED && <UserButton />}
    </Wrapper>
  )
}

export default Header
