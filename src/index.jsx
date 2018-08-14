import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux-flow/configure-store'

const INITIAL_STATE = {}

const db = firebase.database()
const videos = db.ref('videos')


//o set sobrescreve a base, deve-se utilizar uma váriavel com método push()
// videos.set({
//     id: 'OM5p7AZVJy0',
//     title: 'Aprenda React'
// })

const videosJs = videos.push()

videosJs.set({
    id: '123',
    title: 'Teste de Adição no Firebase'
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