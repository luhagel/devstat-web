import React from 'react'

import { AppTemplate, Header, SideBar, Footer, FeatureList } from 'components'

const AppHomePage = () => {
  return (
    <AppTemplate header={<Header />} side={<SideBar />} footer={<Footer />}>
      <FeatureList />
    </AppTemplate>
  )
}

export default AppHomePage
