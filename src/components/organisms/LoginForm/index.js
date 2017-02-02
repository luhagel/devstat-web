import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Field, Button } from 'components'

const Form = styled.form`
  border: 1px solid ${palette('primary', 0)};
  border-radius: 3px;
  padding: 1em;
`

const LoginForm = ({ handleSubmit }) => {
  return (
    <Form>
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
