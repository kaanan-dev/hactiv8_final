import * as types from '../../Utils/Constants/ActionTypes'



const reducer = (state = false, action) => {
    switch (action.type) {
        case types.SET_LOADING:
            return action.state;
        default:
            return state;
    }
}


export default reducer;