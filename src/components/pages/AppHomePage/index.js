import React from 'react'

import { AppTemplate, Header, SideBar, Footer, Onboarding } from 'components'

const AppHomePage = () => {
  return (
    <AppTemplate header={<Header />} side={<SideBar />} footer={<Footer />}>
      <Onboarding />
    </AppTemplate>
  )
}

export default AppHomePage
