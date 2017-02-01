import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Dev-Stat.us"
        titleTemplate="DevStat - %s"
        meta={[
          { name: 'description', content: 'Identify and Hire top developers - without the hazzle.' },
          { property: 'og:site_name', content: 'DevStat' },
        ]}
        link={[
          { rel: 'icon', href: '/public/icon.png' }
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
