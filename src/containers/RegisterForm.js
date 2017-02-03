import React from 'react'

import { reduxForm } from 'redux-form'
import { RegisterForm } from 'components'

import { userRegister } from 'store/actions'

const RegisterFormContainer = props => <RegisterForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.username) {
    throw new Error({ username: 'Please enter your email address' })
  } else if (!values.password) {
    throw new Error({ password: 'Please enter your password' })
  } else {
    console.log('dispatching register...')
    dispatch(userRegister.request(values))
  }
}

export const RegisterConfig = {
  form: 'RegisterForm',
  onSubmit
}

export default reduxForm(RegisterConfig)(RegisterFormContainer)
