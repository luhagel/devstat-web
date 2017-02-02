import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { useScroll } from 'react-router-scroll'
import configureStore from 'store/configure'

import routes from 'routes'

// setup google analytics
import ReactGA from 'react-ga'

ReactGA.initialize('UA-74056616-6')
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <Router history={history} routes={routes} onUpdate={logPageView} render={applyRouterMiddleware(useScroll())} />
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
