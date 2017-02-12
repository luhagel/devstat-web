import React from 'react'

import { AppTemplate, Header, SideBar, Footer } from 'components'
import { TeamAdd } from 'containers'

const TeamAddPage = () => {
  return (
    <AppTemplate header={<Header />} side={<SideBar />} footer={<Footer />}>
      <TeamAdd />
    </AppTemplate>
  )
}

export default TeamAddPage
