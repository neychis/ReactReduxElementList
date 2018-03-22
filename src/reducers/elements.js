import * as actionNames from '../actions/actionNames'

const Elements = (state = [], action) => {
  switch (action.type) {
    case actionNames.ADD_ELEMENT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          active: action.active
        }
      ]
    case actionNames.TOGGLE_ELEMENT:
      return state.map(element =>
        (element.id === action.id)
          ? { ...element, active: !element.active }
          : element
      )
    case actionNames.REMOVE_ELEMENT:
      return state.filter(element => element.id !== action.id)
    default:
      return state
  }
}

export default Elements
