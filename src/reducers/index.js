import { combineReducers } from 'redux'
import elements from './elements'
import visibilityFilter from './visibilityFilter'
import showMore from './showMore'

const elementsApp = combineReducers({
  elements,
  showMore,
  visibilityFilter,
})

export default elementsApp