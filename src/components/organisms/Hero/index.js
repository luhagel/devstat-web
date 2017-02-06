import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Paragraph, Button, Heading, Tooltip } from 'components'
import { MailinglistModal } from 'containers'


const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 80vh;
  margin-bottom: 8rem;
  padding: 8rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const MailingWrapper = styled.div`
  width: 100%;
`

const Brand = styled.img`
  margin: 40px 0;
`

const Slug = styled(Heading)`
  font-size: 2.5em;
  color: ${palette('grayscale', 1)};
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
    <div>
      <Wrapper {...props}>
        <Slug level={2}>Hire Top Developers - Without The Hazzle</Slug>
        <Brand src="./branding.svg" />
        <Text>
          <strong>DevStat.io</strong> allows you to quickly evaluate the <strong>skills and experience</strong> of your recruitees - no resume needed!
        </Text>
        <StyledButton
          onClick={props.handleSignup}
          height={50}
        >Sign Up to our Newsletter</StyledButton>
        <Text><strong>- or -</strong></Text>
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
      <MailinglistModal />
    </div>
  )
}

Hero.propTypes = {
  handleSignup: PropTypes.func.isRequired
}

export default Hero
