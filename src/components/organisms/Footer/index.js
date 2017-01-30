import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 1.5rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Copyright 2017, <Link href="https://github.com/luhagel">DevStat</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
