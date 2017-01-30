import React, { PropTypes } from 'react'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Atomic React"
        titleTemplate="ARc - %s"
        meta={[
          { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' },
          { property: 'og:site_name', content: 'ARc' },
          { property: 'og:image', content: 'https://diegohaz.github.io/arc/thumbnail.png' },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' }
        ]}
        link={[
          { rel: 'icon', href: 'https://diegohaz.github.io/arc/icon.png' }
        ]}
      />
      {children}
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
