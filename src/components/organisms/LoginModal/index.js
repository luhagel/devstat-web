import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Modal, LoginForm } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

class LoginModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    onClose: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onClose()
    }
  }

  render() {
    const { handleSubmit, ...props } = this.props
    return (
      <Modal title="Login | Register" name="login" closeable {...props}>
        <Wrapper>
          <LoginForm handleSubmit={this.props.handleSubmit} />
        </Wrapper>
      </Modal>
    )
  }
}

export default LoginModal
