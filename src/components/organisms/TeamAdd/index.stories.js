import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamAdd } from 'components'

storiesOf('TeamAdd', module)
  .add('default', () => (
    <TeamAdd />
  ))
  .add('mailinglist', () => (
    <TeamAdd mailinglist />
  ))

