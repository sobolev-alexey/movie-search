import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import movieList from './movieListReducer'
import castList from './castReducer'
import trailerList from './trailerReducer'
import movieDetail from './movieDetailReducer'
import starDetail from './starReducer'
import input from './inputReducer'

const rootReducer = combineReducers({
  movieList,
  castList,
  trailerList,
  movieDetail,
  starDetail,
  input,
  routing: routerReducer,
})

export default rootReducer
