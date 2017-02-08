import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppHomePage } from 'components'

storiesOf('AppHomePage', module)
  .add('default', () => (
    <AppHomePage />
  ))
