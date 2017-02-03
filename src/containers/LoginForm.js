import React from 'react'

import { reduxForm } from 'redux-form'
import { LoginForm } from 'components'

import { userLogin } from 'store/actions'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.username) {
    throw new Error({ username: 'Please enter your email address' })
  } else if (!values.password) {
    throw new Error({ password: 'Please enter your password' })
  } else {
    dispatch(userLogin.request(values))
  }
}

export const LoginConfig = {
  form: 'LoginForm',
  onSubmit
}

export default reduxForm(LoginConfig)(LoginFormContainer)
