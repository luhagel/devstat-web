import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SecondaryNavigation } from 'components'

storiesOf('SecondaryNavigation', module)
  .add('default', () => (
    <SecondaryNavigation />
  ))
  .add('reverse', () => (
    <SecondaryNavigation reverse />
  ))
