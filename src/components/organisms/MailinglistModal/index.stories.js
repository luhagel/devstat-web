import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { MailinglistModal } from 'components'

storiesOf('MailinglistModal', module)
  .add('default', () => (
    <MailinglistModal
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
