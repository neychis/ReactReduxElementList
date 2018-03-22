import React from 'react'
import PropTypes from 'prop-types'
import '../css/elementList.css'

const ElementListItem = ({
  name,
  onElementClick,
  onRemoveClick,
  active
}) => (
    <li className='elementList-item'>
      <a onClick={onElementClick}
        className={active ? '' : 'active'}
        title={active ? '': 'inactive'}
        >{name}</a>
    <button
      className='elementList-item-remove'
      title='Remove element from list'
      onClick={onRemoveClick}>
      X
    </button>
  </li>)

ElementListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default ElementListItem
