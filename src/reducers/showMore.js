import { TOGGLE_SHOW_MORE } from '../actions/actionNames'

const ShowMore = (showMore = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_MORE:
      return !showMore
    default:
      return showMore
  }
}

export default ShowMore