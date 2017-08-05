import * as types from '../actions/actionTypes'

const defaultStateList = {
  isFetching_movies: false,
  items: [],
  error: {},
}

const movieList = (state = defaultStateList, action) => {
  const { type, data } = action
  switch (type) {
    case types.FETCH_MOVIES:
    case types.SEARCH_MOVIE:
      return { ...state, isFetching_movies: true }
    case types.FETCH_MOVIES_SUCCESS:
    case types.SEARCH_MOVIE_SUCCESS:
      return { ...state, isFetching_movies: false, items: data }
    case types.FETCH_MOVIES_FAILURE:
    case types.SEARCH_MOVIE_FAILURE:
      return { ...state, isFetching_movies: false, error: data }
    default:
      return state
  }
}

export default movieList
