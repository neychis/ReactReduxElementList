import React from 'react'
import ElementListItem from './ElementListItem'

let ElementList = ({
  elements,
  actions
}) => (
 <section>
    <ul className='elementList'> {
        elements.map(element => (
          <ElementListItem
            key={element.id}
            name={element.name}
            onElementClick={() => actions.toggleElement(element.id)}
            onRemoveClick={() => actions.removeElement(element.id)}
            active={element.active}
          />
        ))
      }
    </ul>
  </section>
)

export default ElementList