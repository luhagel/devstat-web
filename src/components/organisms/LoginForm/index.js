import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`

`

const LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Heading level={2}>Sign In</Heading>
      <Field name="username" label="Email:" component={ReduxField} />
      <Field name="password" label="Password:" type="password" component={ReduxField} />
      <Button type="submit" disabled={submitting}>Create</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

export default LoginForm
