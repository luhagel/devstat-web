import React from 'react'

import { reduxForm } from 'redux-form'
import { TeamAddForm } from 'components'

import { teamAdd } from 'store/actions'

const TeamAddFormContainer = props => <TeamAddForm {...props} />

const onSubmit = (values, dispatch) => {
  if (!values.username) {
    throw new Error({ username: 'Please enter your email address' })
  } else if (!values.password) {
    throw new Error({ password: 'Please enter your password' })
  } else {
    dispatch(teamAdd.request(values))
  }
}

export const TeamAddConfig = {
  form: 'TeamAddForm',
  onSubmit
}

export default reduxForm(TeamAddConfig)(TeamAddFormContainer)
