import * as types from '../actions/actionTypes'

const input = (state = '', action) => {
  switch (action.type) {
    case types.ENTER_SEARCH_TEXT:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default input
