import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux-flow/configure-store'

const INITIAL_STATE = {}

const db = firebase.database()
const videos = db.ref('videos')

// videos.on('value', (snapshot) => {
//     console.log('snapshot: ', snapshot.val())
// }, (erro) => {
//     console.log('Error: ', erro)
// })
videos.once('value').then((snapshot) => {
    console.log('Snapshot:', snapshot.val())
})

const store = configureStore(INITIAL_STATE)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)