import createReducer from '../create-reducer'
import { ADD_VIDEO } from './actions';

const INITIAL_STATE = {}

const videos = createReducer(INITIAL_STATE, {
    [ADD_VIDEO]: (state, action) => ({
        ...state,
        [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title
        }
    })
})

export default videos