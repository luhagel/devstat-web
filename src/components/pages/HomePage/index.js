import React from 'react'

import { PageTemplate, Header, Footer, FeatureList } from 'components'
import { Hero } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />}footer={<Footer />}>
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
