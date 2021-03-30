import * as types from '../../Utils/Constants/ActionTypes'
import {history} from '../../index'


const setMode = (state) => ({
    type: types.SET_MODE, state
})


export const ModeAction = {
    setMode : (mode, id = '') =>
        (dispatch) => {
            let state = {mode, id};
            dispatch(setMode(state));
            if (mode) {
                history.push('/cards');
                return;
            }
            history.push('/carousel');
        }
}