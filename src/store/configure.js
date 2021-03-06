import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()

  const finalCreateStore = compose(
    applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
    autoRehydrate(),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  persistStore(store, { blacklist: ['someTransientReducer'] }, () => {
  })

  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}

export default configureStore
