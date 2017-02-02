import React from 'react'

import { reduxForm } from 'redux-form'
import { RegisterForm } from 'components'

import { userLogin } from 'store/actions'

const RegisterFormContainer = props => <RegisterForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.username) {
    throw new Error({ username: 'Please enter your email address' })
  } else if (!values.password) {
    throw new Error({ password: 'Please enter your password' })
  } else {
    dispatch(userLogin.request(values))
  }
}

export const config = {
  form: 'Loginform',
  onSubmit
}

export default reduxForm(config)(RegisterFormContainer)
