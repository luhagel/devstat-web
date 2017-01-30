import React from 'react'

import { PageTemplate, Header, Footer, Heading, Paragraph } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Hello DevStat</Heading>
      <Paragraph>Welcome to Dev-Stat.us!</Paragraph>
      <Paragraph>Please beware, this site is currently under construction. Check back later!</Paragraph>
    </PageTemplate>
  )
}

export default HomePage
