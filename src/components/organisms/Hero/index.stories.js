import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Hero } from 'components'

storiesOf('Hero', module)
  .add('default', () => (
    <Hero />
  ))
  .add('mailinglist', () => (
    <Hero mailinglist />
  ))

