import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Onboarding } from 'components'

storiesOf('Onboarding', module)
  .add('default', () => (
    <Onboarding />
  ))
  .add('mailinglist', () => (
    <Onboarding mailinglist />
  ))

