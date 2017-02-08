import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { SecondaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
  background-color: ${palette('grayscale', 6)};
  border-right: 2px solid ${palette('primary', 1)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
`

const StyledSecondaryNavigation = styled(SecondaryNavigation)`
  flex-direction: column;
`

const SideBar = (props) => {
  return (
    <Wrapper {...props}>
      <StyledSecondaryNavigation />
    </Wrapper>
  )
}

export default SideBar
