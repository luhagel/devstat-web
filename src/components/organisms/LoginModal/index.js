import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Modal, LoginForm, RegisterForm } from 'containers'
import { Button } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  > * {
    margin-bottom: 0.5rem;
  }
`

class LoginModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    contentId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    toggleRegister: PropTypes.func.isRequired,
    toggleLogin: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      this.props.onClose()
    }
  }

  render() {
    const { handleSubmit, toggleRegister, toggleLogin, contentId, ...props } = this.props
    return (
      <Modal title="Login | Register" name="login" closeable {...props}>
        {contentId === 0 && <Wrapper>
          <LoginForm />
          <Button transparent onClick={handleSubmit}>Login</Button>
          <Button onClick={toggleRegister}>Create a New Account</Button>
        </Wrapper>
          }
        {contentId === 1 && <Wrapper>
          <RegisterForm />
          <Button transparent onClick={handleSubmit}>Register</Button>
          <Button onClick={toggleLogin}>Login Instead</Button>
        </Wrapper>
          }
      </Modal>
    )
  }
}

export default LoginModal
