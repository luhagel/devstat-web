import React from 'react'
import { shallow } from 'enzyme'
import MailinglistModal from '.'

const handleSignup = jest.fn()
const onClose = jest.fn()
const mailinglist = false


const wrap = (props = {}) =>
  shallow(<MailinglistModal {...{ handleSignup, onClose, mailinglist }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('calls onClose when user passed in', () => {
  onClose.mockClear()
  const wrapper = wrap()
  expect(onClose).not.toBeCalled()
  wrapper.setProps({ mailinglist: true })
  expect(onClose).toHaveBeenCalledTimes(1)
  wrapper.setProps({ mailinglist: true })
  expect(onClose).toHaveBeenCalledTimes(1)
})
