import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Paragraph, Button, Heading, Tooltip } from 'components'


const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 80vh;
  margin-bottom: 16rem;
  padding: 8rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Slug = styled(Heading)`
  font-size: 2.5em;
  color: ${palette('grayscale', 1)};
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 0)};
  margin: 3rem auto;
  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const StyledButton = styled(Button)`
  flex: none;
`

const Onboarding = (props) => {
  return (
    <Wrapper {...props}>
      <Slug level={2}> You don&#x27;t have any Teams yet!</Slug>
      <Text>
        Why not change that?
      </Text>
      <Tooltip data-title="Wohooo!">
        <StyledButton
          height={60}
        >Create your first Team!</StyledButton>
      </Tooltip>
    </Wrapper>
  )
}

export default Onboarding
