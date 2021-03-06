import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import { LoginModal } from 'containers'

const InnerButton = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  margin-right: 0.5rem;
  border: 1px solid white;
  border-radius: 3px;
`

const UserButton = ({ user, onLogin, onLogout, ...props }) => {
  return (
    <div>
      {user &&
        <Button transparent palette="white" {...props} onClick={onLogout}>
          <InnerButton>
            <Image src={user.picture} width={20} height={20} />
            Sign out {user.name}
          </InnerButton>
        </Button>
      }
      {!user && <Button transparent palette="white" {...props} onClick={onLogin}>Sign in</Button>}
      <LoginModal />
    </div>
  )
}

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string.isRequired
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default UserButton
