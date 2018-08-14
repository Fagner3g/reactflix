import createReducer from '../create-reducer'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from './actions';

const INITIAL_STATE = {
    isRegisterVideoFormOpened: false
}

const ui = createReducer(INITIAL_STATE, {
    [OPEN_REGISTER_VIDEO]: (state) => ({
        ...state,
        isRegisterVideoFormOpened: true
    }),
    [CLOSE_REGISTER_VIDEO]: (state) => ({
        ...state,
        isRegisterVideoFormOpened: false
    })
})

export default ui