import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Paragraph, Button, Heading, Tooltip } from 'components'


const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 700px;
  padding: 2rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 0)}
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

const Hero = (props) => {
  return (
    <Wrapper {...props}>
      <Heading>DevStat.io</Heading>
      <Heading level={2}>Hire Top Developers - Without The Hazzle</Heading>
      <Text>
        <strong>DevStat.io</strong> allows you to quickly evaluate the <strong>skills and experience</strong> of your recruitees - no resume needed!
      </Text>
      <Tooltip data-title="This will open a new tab">
        <StyledButton
          href="http://demo.devstat.io"
          height={50}
          target="_blank"
        >
          Access Demo
        </StyledButton>
      </Tooltip>
    </Wrapper>
  )
}

export default Hero
