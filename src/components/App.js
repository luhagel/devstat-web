import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
    background-color: #470068;
  }
`

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="DevStat.io"
        titleTemplate="DevStat - %s"
        meta={[
          { name: 'description', content: 'Identify and Hire top developers - without the hazzle.' },
          { property: 'og:site_name', content: 'DevStat' },
          { property: 'og:image', content: 'http://devstat.io/Thumbnail.png' },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' }
        ]}
        link={[
          { rel: 'icon', href: '/icon.png' }
        ]}
      />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default App
