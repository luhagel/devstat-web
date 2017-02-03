import React from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { modalHide, modalToggleContent } from 'store/actions'
import { fromUser, fromModal } from 'store/selectors'

import { LoginModal } from 'components'

import { LoginConfig } from './LoginForm'
import { RegisterConfig } from './RegisterForm'

const LoginModalContainer = (props) => {
  return <LoginModal {...props} />
}

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state),
  contentId: fromModal.getContentId(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => dispatch(submit(LoginConfig)),
  handleRegister: () => dispatch(submit(RegisterConfig)),
  onClose: () => dispatch(modalHide('login')),
  toggleRegister: () => dispatch(modalToggleContent(1)),
  toggleLogin: () => dispatch(modalToggleContent(0))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
