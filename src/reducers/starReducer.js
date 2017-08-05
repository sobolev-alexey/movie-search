import * as types from '../actions/actionTypes'

const defaultState = {
  isFetching: false,
  item: {},
  error: {},
}

const starDetail = (state = defaultState, action) => {
  const { type, data } = action
  switch (type) {
    case types.FETCH_STAR_SUCCESS:
      return { ...state, isFetching: false, item: data }
    case types.FETCH_STAR_FAILURE:
      return { ...state, isFetching: false, error: data }
    default:
      return state
  }
}

export default starDetail
