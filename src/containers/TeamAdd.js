import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { TeamAdd } from 'components'

import { TeamAddConfig } from './TeamAddForm'

const TeamAddContainer = props => <TeamAdd {...props} />

TeamAddContainer.propTypes = {
  loading: PropTypes.bool
}

const mapDispatchToProps = (dispatch) => ({
  handleAdd: () => dispatch(submit(TeamAddConfig))
})

export default connect(null, mapDispatchToProps)(TeamAddContainer)
