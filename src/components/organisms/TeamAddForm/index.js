import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Field } from 'redux-form'

import { ReduxField } from 'components'

const Form = styled.form`
`

const TeamAddForm = () => {
  return (
    <Form>
      <Field name="name" label="Team Name:" component={ReduxField} />
    </Form>
  )
}

TeamAddForm.propTypes = {
  submitting: PropTypes.bool
}

export default TeamAddForm
