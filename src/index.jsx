import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux-flow/configure-store'
import { db } from './config/firebase'

const INITIAL_STATE = {}

const videos = db.ref('videos')

videos.child('123').set({
    id: 123441,
    title: 'Teste add Local'
})

videos.on('value', (snapshot) => {
    console.log('snapshot: ', snapshot.val())
}, (erro) => {
    console.log('Error: ', erro)
})

const store = configureStore(INITIAL_STATE)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)