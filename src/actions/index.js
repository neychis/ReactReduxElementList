import * as actions from './actionNames'

const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

let nextElementId = 0
export const addElement = text => {
  return {
    type: actions.ADD_ELEMENT,
    id: nextElementId++,
    name: text,
    active: true,
  }
}

export const toggleElement = makeActionCreator(actions.TOGGLE_ELEMENT,'id')
export const removeElement = makeActionCreator(actions.REMOVE_ELEMENT,'id')
export const setVisibilityFilter = makeActionCreator(actions.SET_VISIBILITY_FILTER, 'filter')
export const toggleShowMore = makeActionCreator(actions.TOGGLE_SHOW_MORE, 'ShowMore')
export const getShowMore = makeActionCreator(actions.GET_SHOW_MORE, 'ShowMore')
