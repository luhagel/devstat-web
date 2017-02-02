import React from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { modalHide } from 'store/actions'
import { fromUser } from 'store/selectors'

import { LoginModal } from 'components'

import { config } from './LoginForm'

const LoginModalContainer = (props) => {
  return <LoginModal {...props} />
}

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: () => dispatch(submit(config)),
  onClose: () => dispatch(modalHide('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
