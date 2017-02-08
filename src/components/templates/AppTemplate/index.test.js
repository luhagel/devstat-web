import React from 'react'
import { mount, shallow } from 'enzyme'
import AppTemplate from '.'

const wrap = (props = {}) => shallow(
  <AppTemplate header="header" footer="footer" {...props}>test</AppTemplate>
)

it('mounts', () => {
  mount(<AppTemplate header="header" footer="footer">test</AppTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders header', () => {
  const wrapper = wrap()
  expect(wrapper.contains('header')).toBe(true)
})

it('renders side', () => {
  const wrapper = wrap({ side: 'side' })
  expect(wrapper.contains('side')).toBe(true)
})

it('renders footer', () => {
  const wrapper = wrap()
  expect(wrapper.contains('footer')).toBe(true)
})
