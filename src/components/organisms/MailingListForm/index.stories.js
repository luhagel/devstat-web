import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MailingListForm } from 'components'

storiesOf('MailingListForm', module)
  .add('default', () => (
    <MailingListForm />
  ))
  .add('reverse', () => (
    <MailingListForm reverse />
  ))
