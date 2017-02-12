import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, AppHomePage, TeamAddPage, NotFoundPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="app" component={AppHomePage} />
    <Route path="app/teams/add" component={TeamAddPage} />


    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
