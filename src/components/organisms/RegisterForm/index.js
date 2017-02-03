import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Field } from 'redux-form'

import { ReduxField } from 'components'

const Form = styled.form`
  border: 1px solid ${palette('primary', 0)};
  border-radius: 3px;
  padding: 1em;
`

const RegisterForm = () => {
  return (
    <Form>
      <Field name="name" label="Name:" component={ReduxField} />
      <Field name="username" label="Email:" component={ReduxField} />
      <Field name="password" label="Password:" type="password" component={ReduxField} />
      <Field name="password-confirmation" label="Password Confirmation:" type="password" component={ReduxField} />
    </Form>
  )
}

RegisterForm.propTypes = {
  submitting: PropTypes.bool
}

export default RegisterForm
