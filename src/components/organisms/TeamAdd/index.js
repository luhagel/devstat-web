import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Button, Heading, Tooltip } from 'components'
import { TeamAddForm } from 'containers'


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

const StyledButton = styled(Button)`
  flex: none;
`

const TeamAdd = (props) => {
  return (
    <Wrapper {...props}>
      <Slug level={2}> Add a new Team</Slug>
      <TeamAddForm />
      <Tooltip data-title="Wohooo!">
        <StyledButton
          height={50}
          href="{props.handleAdd}"
        >Create!</StyledButton>
      </Tooltip>
    </Wrapper>
  )
}

TeamAdd.propType = {
  handleAdd: PropTypes.func.isRequired
}

export default TeamAdd
