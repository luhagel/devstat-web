import React from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { modalHide } from 'store/actions'
import { fromMailinglist } from 'store/selectors'

import { MailinglistModal } from 'components'

import { MailinglistConfig } from './MailingListForm'

const MailinglistModalContainer = (props) => {
  return <MailinglistModal {...props} />
}

const mapStateToProps = (state) => ({
  mailinglist: fromMailinglist.getMailinglist(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleSignup: () => dispatch(submit(MailinglistConfig)),
  onClose: () => dispatch(modalHide('mailinglist')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MailinglistModalContainer)
