import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Field } from 'redux-form'

import { ReduxField } from 'components'

const Form = styled.form`
`

const MailingListForm = () => {
  return (
    <Form>
      <Field name="email" label="Email:" component={ReduxField} />
    </Form>
  )
}

MailingListForm.propTypes = {
  submitting: PropTypes.bool
}

export default MailingListForm
