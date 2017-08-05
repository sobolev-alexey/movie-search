import * as types from '../actions/actionTypes'

const defaultState = {
  isFetcing_movie: false,
  item: {},
  error: {},
}

const movieDetail = (state = defaultState, action) => {
  const { type, data } = action
  switch (type) {
    case types.FETCH_MOVIE:
      return { ...state, isFetcing_movie: true }
    case types.FETCH_MOVIE_SUCCESS:
      return { ...state, isFetcing_movie: false, item: data }
    case types.FETCH_MOVIE_FAILURE:
      return { ...state, isFetcing_movie: false, error: data }
    default:
      return state
  }
}

export default movieDetail
