import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { IconLink, PrimaryNavigation, Block, Tooltip } from 'components'
import { UserButton } from 'containers'

const Wrapper = styled(Block)`
  background-color: ${palette('primary', 0)};
  display: flex;
  align-items: center;
  padding: 1rem;

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
      {!process.env.LOGIN_DISABLED &&
        <Tooltip data-title="In Development" position="left">
          <UserButton />
        </Tooltip>
      }
    </Wrapper>
  )
}

export default Header
