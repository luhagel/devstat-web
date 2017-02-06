import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'

import { Modal, MailingListForm } from 'containers'
import { Button } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  > * {
    margin-bottom: 0.5rem;
  }
`

class MailinglistModal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    handleSignup: PropTypes.func.isRequired,
    mailinglist: PropTypes.bool.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.mailinglist && nextProps.mailinglist) {
      this.props.onClose()
    }
  }

  render() {
    const { handleSignup, ...props } = this.props
    return (
      <Modal title="Newsletter" name="mailinglist" closeable {...props}>
        <Wrapper>
          <MailingListForm />
          <Button transparent onClick={handleSignup}>Get Updates!</Button>
        </Wrapper>
      </Modal>
    )
  }
}

export default MailinglistModal
