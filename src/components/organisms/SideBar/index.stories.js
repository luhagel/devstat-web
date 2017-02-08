import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SideBar } from 'components'

storiesOf('SideBar', module)
  .add('default', () => (
    <SideBar />
  ))
