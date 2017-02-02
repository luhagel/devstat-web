import React from 'react'

import { reduxForm } from 'redux-form'
import { LoginForm } from 'components'

import { devstatLogin } from 'store/actions'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (values, dispatch) => {
  console.log('submitted')
  if (!values.username) {
    throw { username: 'please provide input' }
  } else {
    dispatch(devstatLogin.request(values))
  }
}

export const config = {
  form: 'Loginform',
  onSubmit
}

export default reduxForm(config)(LoginFormContainer)
