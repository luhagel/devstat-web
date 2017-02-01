import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Field, Heading, Button } from 'components'

const Form = styled.form`

`

const LoginForm = ({ handleSubmit }) => {
  return (
    <Form>
      <Heading level={2}>Sign In</Heading>
      <Field name="username" label="Email:" />
      <Field name="password" label="Password:" type="password" />
      <Button onClick={handleSubmit}>Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

export default LoginForm
