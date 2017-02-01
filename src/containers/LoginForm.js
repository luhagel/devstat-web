import React from 'react'
import { connect } from 'react-redux'
import { devstatLogin } from 'store/actions'

import { LoginForm } from 'components'

const LoginFormContainer = props => { return <LoginForm {...props} /> }

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data) => dispatch(devstatLogin.request(data))
})

export default connect(mapDispatchToProps)(LoginFormContainer)
