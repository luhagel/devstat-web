import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { fromUser } from 'store/selectors'

import { TeamAdd } from 'components'

import { TeamAddConfig } from './TeamAddForm'

const TeamAddContainer = props => <TeamAdd {...props} />

TeamAddContainer.propTypes = {
  loading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  auth: fromUser.getAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: () => dispatch(submit(TeamAddConfig))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamAddContainer)
