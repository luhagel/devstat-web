import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamAddPage } from 'components'

storiesOf('TeamAddPage', module)
  .add('default', () => (
    <TeamAddPage />
  ))
