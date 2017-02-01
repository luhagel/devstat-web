import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { devstatLogin } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(devstatLogin.request(data, resolve, reject))
})

const validate = createValidator({
  username: [required],
  password: [required]
})

const mapStateToProps = (state) => ({
})

export const config = {
  form: 'LoginForm',
  fields: ['username', 'password'],
  destroyOnUnmount: false,
  onSubmit,
  validate
}

export default connect(mapStateToProps)(reduxForm(config)(LoginFormContainer))
