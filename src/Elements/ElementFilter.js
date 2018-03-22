import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let ElementFilter = ({ dispatch }) => {
  let visibilityFilter
  const handleSelectChange = () => {
    dispatch(setVisibilityFilter(visibilityFilter))
  }

  return (<section>
    <label> aaa </ label>
    <select ref={node => visibilityFilter = node}
      onChange={handleSelectChange}
    />
  </ section>
)
}

ElementFilter = connect()(ElementFilter)

export default ElementFilter