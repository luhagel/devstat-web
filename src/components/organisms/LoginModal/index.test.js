import React from 'react'
import { shallow } from 'enzyme'
import LoginModal from '.'

const handleLogin = jest.fn()
const handleRegister = jest.fn()
const toggleLogin = jest.fn()
const toggleRegister = jest.fn()
const onClose = jest.fn()
const contentId = 1


const wrap = (props = {}) =>
  shallow(<LoginModal {...{ handleLogin, handleRegister, toggleLogin, toggleRegister, onClose, contentId }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('calls onClose when user passed in', () => {
  onClose.mockClear()
  const wrapper = wrap()
  expect(onClose).not.toBeCalled()
  wrapper.setProps({ user: {} })
  expect(onClose).toHaveBeenCalledTimes(1)
  wrapper.setProps({ user: null })
  expect(onClose).toHaveBeenCalledTimes(1)
})
