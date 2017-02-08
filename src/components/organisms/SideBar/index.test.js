import React from 'react'
import { shallow } from 'enzyme'
import SideBar from '.'

const wrap = (props = {}) => shallow(<SideBar {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
