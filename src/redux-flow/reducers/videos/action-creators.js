import { ADD_VIDEO } from "./actions";
import { db } from '../../../config/firebase'
import 'babel-polyfill'

export const registerVideo = ({ id, title }) => async (dispatch) => {
    console.log('cadastrando')
    const date = Date.now()
    await db.ref('videos').child(id).update({ id, title, date })

    console.log('video cadastrado')
    dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
    type: ADD_VIDEO,
    payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
    db.ref('videos').on('value', (snapshot) => {
        const videos = snapshot.val()
        Object.keys(videos)
            .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
            .forEach((id) => dispatch(addVideo({
                id,
                title: videos[id].title
            })))
    })

    // db.ref('videos').orderByChild('title').on('child_added', (child) => {
    //     console.log(child.val())
    //     dispatch(addVideo(child.val()))
    // })

    // db.ref('videos').on('value', (snapshot) => {
    //     snapshot.forEach((child) => {
    //         console.log(child.val())
    //         dispatch(addVideo(child.val()))
    //     })
    // })
}