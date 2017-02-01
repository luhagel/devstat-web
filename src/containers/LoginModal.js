import React from 'react'
import { connect } from 'react-redux'

import { modalHide, devstatLogin } from 'store/actions'
import { fromUser } from 'store/selectors'
import { LoginModal } from 'components'

const LoginModalContainer = (props) => {
  return <LoginModal {...props} />
}

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(modalHide('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
