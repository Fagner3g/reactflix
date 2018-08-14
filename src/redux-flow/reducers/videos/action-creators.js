import { ADD_VIDEO } from "./actions";
import { db } from '../../../config/firebase'
import 'babel-polyfill'

export const registerVideo = ({ id, title }) => async (dispatch) => {
    console.log('cadastrando')
    await db.ref('videos').child(id).update({ id, title })

    console.log('video cadastrado')
    dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
    type: ADD_VIDEO,
    payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
    db.ref('videos').on('value', (snapshot) => {
        snapshot.forEach((child) => {
            dispatch(addVideo(child.val()))
        })
    })
}