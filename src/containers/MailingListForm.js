import React from 'react'

import { reduxForm } from 'redux-form'
import { MailingListForm } from 'components'

import { userLogin } from 'store/actions'

const MailingListFormContainer = props => <MailingListForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.email) {
    throw new Error({ email: 'Please enter your email address' })
  } else {
    dispatch(userLogin.request(values))
  }
}

export const LoginConfig = {
  form: 'MailingListForm',
  onSubmit
}

export default reduxForm(LoginConfig)(MailingListFormContainer)
