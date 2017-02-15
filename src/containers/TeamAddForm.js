import React from 'react'

import { reduxForm } from 'redux-form'
import { TeamAddForm } from 'components'

import { teamAdd } from 'store/actions'

const TeamAddFormContainer = props => <TeamAddForm {...props} />

const onSubmit = (values, dispatch) => {
  dispatch(teamAdd.request(values))
}

export const TeamAddConfig = {
  form: 'TeamAddForm',
  onSubmit
}

export default reduxForm(TeamAddConfig)(TeamAddFormContainer)
