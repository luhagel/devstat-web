import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('primary', 3, true)};
  padding: 1.5rem;
`

const Credits = styled(Paragraph)`
  color: ${palette('white', 2)};
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Copyright 2017, DevStat.io
      </Credits>
    </Wrapper>
  )
}

export default Footer
