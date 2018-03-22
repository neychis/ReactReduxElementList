import React from "react"
import { connect } from "react-redux"

let ShowMore = ({ isVisible, toggleShowMore}) => (
  <div>
    <div style={isVisible() ? {} : {display : "none"}} >
      <span>more text</span>
    </div>
    <button onClick={() => toggleShowMore()}>
      {isVisible() ? 'Show less' : 'Show more'}
    </button>
  </div>
)

export default connect()(ShowMore)
