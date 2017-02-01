import React from 'react'

import { PageTemplate, Header, Footer, Hero } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />}footer={<Footer />} />
  )
}

export default HomePage
