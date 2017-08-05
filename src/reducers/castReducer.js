import * as types from '../actions/actionTypes'

const defaultStateList = {
  isFetcing_casts: false,
  items: [],
  error: {},
}

const castList = (state = defaultStateList, action) => {
  const { type, data } = action
  switch (type) {
    case types.FETCH_CASTS:
      return { ...state, isFetcing_casts: true }
    case types.FETCH_CASTS_SUCCESS:
      return { ...state, isFetcing_casts: false, items: data }
    case types.FETCH_CASTS_FAILURE:
      return { ...state, isFetcing_casts: false, error: data }
    default:
      return state
  }
}

export default castList
