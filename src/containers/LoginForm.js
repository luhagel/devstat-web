import React from 'react'
import { connect } from 'react-redux'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

export default connect()(LoginFormContainer)
