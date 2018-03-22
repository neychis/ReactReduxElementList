import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ElementInput from './src/Elements/ElementInput'
import VisibleElements from './src/Elements/VisibleElements'
import elementsApp from './src/reducers'
import './src/css/index.css'

let store = createStore(elementsApp);

render(
  <Provider store={store}>
    <div>
      <h1>Element list</ h1>
      <ElementInput />
      <VisibleElements />
    </div>
  </Provider>,
  document.getElementById('root')
)