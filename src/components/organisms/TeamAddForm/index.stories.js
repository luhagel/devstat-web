import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamAddForm } from 'components'

storiesOf('TeamAddForm', module)
  .add('default', () => (
    <TeamAddForm />
  ))
  .add('reverse', () => (
    <TeamAddForm reverse />
  ))
