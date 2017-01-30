import React from 'react'

import { PageTemplate, Header, Footer, Heading } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Hello DevStat</Heading>
    </PageTemplate>
  )
}

export default HomePage
