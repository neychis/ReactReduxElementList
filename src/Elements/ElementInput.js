import React from "react"
import { connect } from "react-redux"
import * as actions from '../actions'
import ShowMore from "./ShowMore"
import "../css/elementInput.css"

const ElementInput = ({ dispatch }) => {
  let input
  const handleKeyPress = event => event.key === "Enter" && addValue()
  const toggleShowMore = event => dispatch(actions.toggleShowMore())
  const getShowMore = () => dispatch(actions.getShowMore())
  const addValue = () => {
    if (input.value.trim()) {
      dispatch(actions.addElement(input.value))
      input.value = ''
    }
  }

  return (
    <section className="elementInput">
      <div>
        <input
          ref={node => (input = node)}
          className="elementInput-elementName"
          placeholder="Please type the name of the element"
          onKeyPress={handleKeyPress}
        />
        <button
          className="elementInput-elementItem-add"
          title="Add element"
          onClick={addValue}
        >
          Add element
        </button>
      </div>
      <div>
        <div style={getShowMore() ? {} : { display: "none" }} >
          <span>more text</span>
        </div>
        <button onClick={toggleShowMore}>
          {getShowMore() ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  )
}

export default connect()(ElementInput)
