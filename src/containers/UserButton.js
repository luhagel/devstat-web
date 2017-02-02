import React from 'react'
import { connect } from 'react-redux'

import { modalShow, devstatLogout } from 'store/actions'
import { fromUser } from 'store/selectors'

import { UserButton } from 'components'

const UserButtonContainer = props => <UserButton {...props} />

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(modalShow('login')),
  onLogout: () => dispatch(devstatLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)
