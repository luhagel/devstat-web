import React from 'react'
import styled from 'styled-components'

import { IconLink, PrimaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
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
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <StyledIconLink to="/" icon="devstat" height={100} />
      <StyledPrimaryNavigation />
    </Wrapper>
  )
}

export default Header
