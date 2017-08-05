import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
import {
  MovieContainer,
  MovieDetailContainer,
  StarDetailContainer,
} from './containers'
import { DisplayMsg } from './components'

const Root = ({ store, history }) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path="/movie/:id" component={MovieDetailContainer} />
        <Route path="/star/:id" component={StarDetailContainer} />
        <Route path="/search/:keyword" component={MovieContainer} />
        <Route path="*" component={DisplayMsg} />
      </Route>
    </Router>
  </Provider>

export default Root
