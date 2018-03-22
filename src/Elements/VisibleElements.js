import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import * as filters from '../actions/filterNames'
import ElementList from './ElementList'

const getVisibleElements = (elements, filter = filters.SHOW_ALL) => {
  switch (filter) {
    case filters.SHOW_ACTIVE:
      return elements.filter(t => t.active)
    case filters.SHOW_INACTIVE:
      return elements.filter(t => !t.active)
    case filters.SHOW_ALL:
    default:
      return elements
  }
}

const mapStateToProps = state => {
  return {
    elements: getVisibleElements(state.elements, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}
const VisibleElements = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementList)

export default VisibleElements