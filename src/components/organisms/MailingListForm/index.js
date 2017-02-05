import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Field } from 'redux-form'

import { ReduxField } from 'components'


const Form = styled.form`
  width: 400px;
  margin: 0 auto;
`

const MailingListForm = () => {
  return (
    <Form>
      <Field name="name" label="Name:" component={ReduxField} />
      <Field name="email" label="Email:" component={ReduxField} />
    </Form>
  )
}

MailingListForm.propTypes = {
  submitting: PropTypes.bool
}

export default MailingListForm
