import { TOGGLE_SHOW_MORE, GET_SHOW_MORE } from '../actions/actionNames'

const ShowMore = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_MORE:
      return !state
    case GET_SHOW_MORE:
      return state
    default:
      return state
  }
}

export default ShowMore