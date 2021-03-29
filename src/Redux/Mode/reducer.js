import * as types from '../../Utils/Constants/ActionTypes'

let initState = {
    mode: true,
    id:''
}
///true : cards

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_MODE:
            return {...state, ...action.state};
        default:
            return state;
    }
}


export default reducer;