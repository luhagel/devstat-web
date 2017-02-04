import React from 'react'

import { reduxForm } from 'redux-form'
import { MailingListForm } from 'components'

import { mailinglistRegister } from 'store/actions'

const MailingListFormContainer = props => <MailingListForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.email) {
    throw new Error({ email: 'Please enter your email address' })
  } else {
    dispatch(mailinglistRegister.request(values))
  }
}

export const MailinglistConfig = {
  form: 'MailingListForm',
  onSubmit
}

export default reduxForm(MailinglistConfig)(MailingListFormContainer)
