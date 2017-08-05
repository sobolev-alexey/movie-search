import * as types from '../actions/actionTypes'

const defaultStateList = {
  isFetcing_trailers: false,
  items: [],
  error: {},
}

const trailerList = (state = defaultStateList, action) => {
  const { type, data } = action
  switch (type) {
    case types.FETCH_TRAILERS:
      return { ...state, isFetcing_trailers: true }
    case types.FETCH_TRAILERS_SUCCESS:
      return { ...state, isFetcing_trailers: false, items: data }
    case types.FETCH_TRAILERS_FAILURE:
      return { ...state, isFetcing_trailers: false, error: data }
    default:
      return state
  }
}

export default trailerList
