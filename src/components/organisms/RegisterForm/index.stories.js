import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { RegisterForm } from 'components'

storiesOf('RegisterForm', module)
  .add('default', () => (
    <RegisterForm />
  ))
  .add('reverse', () => (
    <RegisterForm reverse />
  ))
