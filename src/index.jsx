import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux-flow/configure-store'

const INITIAL_STATE = {}
const store = configureStore(INITIAL_STATE)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)