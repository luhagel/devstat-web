import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Field } from 'redux-form'

import { ReduxField } from 'components'

const Form = styled.form`
`

const LoginForm = () => {
  return (
    <Form>
      <Field name="username" label="Email:" component={ReduxField} />
      <Field name="password" label="Password:" type="password" component={ReduxField} />
    </Form>
  )
}

LoginForm.propTypes = {
  submitting: PropTypes.bool
}

export default LoginForm
