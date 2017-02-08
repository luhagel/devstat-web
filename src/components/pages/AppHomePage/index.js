import React from 'react'

import { AppTemplate, Header, Footer, FeatureList } from 'components'

const AppHomePage = () => {
  return (
    <AppTemplate header={<Header />} footer={<Footer />}>
      <FeatureList />
    </AppTemplate>
  )
}

export default AppHomePage
