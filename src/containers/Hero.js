import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Hero } from 'components'

import { modalShow } from 'store/actions'

const HeroContainer = props => <Hero {...props} />

HeroContainer.propTypes = {
  loading: PropTypes.bool
}

const mapDispatchToProps = (dispatch) => ({
  handleSignup: () => dispatch(modalShow('mailinglist'))
})

export default connect(null, mapDispatchToProps)(HeroContainer)
