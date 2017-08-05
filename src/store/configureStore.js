import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
// import createLogger from 'redux-logger'

const routeMiddleware = routerMiddleware(hashHistory)
const configureStoreProd = initialState => {
  const middlewares = [thunkMiddleware, routeMiddleware]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}

const configureStoreDev = initialState => {
  // const loggerMiddleware = createLogger()
  const middlewares = [thunkMiddleware, routeMiddleware]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
