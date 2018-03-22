import * as actionNames from "../actions/actionNames"
import * as filterNames from "../actions/filterNames"

const VisibilityFilter = (state = filterNames.SHOW_ALL, action) => {
  switch (action.type) {
    case actionNames.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
};

export default VisibilityFilter
