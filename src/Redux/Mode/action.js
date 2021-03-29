import * as types from '../../Utils/Constants/ActionTypes'


const setMode = (state) => ({
    type: types.SET_MODE, state
})


export const ModeAction = {
    setMode : (mode, id = '') =>
        (dispatch) => {
            let state = {mode, id};
            console.log('modestate', state);
            dispatch(setMode(state));
        }
}