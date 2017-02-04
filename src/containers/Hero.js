import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import submit from 'redux-form-submit'

import { fromMailinglist } from 'store/selectors'
import { MailinglistConfig } from './MailingListForm'

import { Hero } from 'components'

const HeroContainer = props => <Hero {...props} />

HeroContainer.propTypes = {
  loading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  mailinglist: fromMailinglist.getMailinglist(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleSignup: () => dispatch(submit(MailinglistConfig))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
