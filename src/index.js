import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.scss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '@/redux'
import Routers from './router/index'
import Login from '@/views/login'

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <Login>
      <Routers />
    </Login>
  </Provider>,
  document.getElementById('root')
)
