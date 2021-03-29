import * as types from '../../Utils/Constants/ActionTypes'


const setStatus = (state) => ({
    type: types.SET_LOADING, state
})


export const LoadingAction = {
    setStatus : (state) =>
        (dispatch) => {
            dispatch(setStatus(state));
        }
}