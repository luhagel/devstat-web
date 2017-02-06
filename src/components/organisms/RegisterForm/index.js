import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Field } from 'redux-form'

import { ReduxField } from 'components'

const Form = styled.form`
`

const RegisterForm = () => {
  return (
    <Form>
      <Field name="name" label="Name:" component={ReduxField} />
      <Field name="username" label="Email:" component={ReduxField} />
      <Field name="password" label="Password:" type="password" component={ReduxField} />
      <Field name="passwordConfirmation" label="Password Confirmation:" type="password" component={ReduxField} />
    </Form>
  )
}

RegisterForm.propTypes = {
  submitting: PropTypes.bool
}

export default RegisterForm
