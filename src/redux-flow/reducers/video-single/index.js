import createReducer from '../create-reducer'
import { SELECT_VIDEO_SINGLE } from './actions';

const INITIAL_STATE = ''

const videoSingle = createReducer(INITIAL_STATE, {
    [SELECT_VIDEO_SINGLE]: (state, action) => action.payload.id
})

export default videoSingle