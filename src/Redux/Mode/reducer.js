import * as types from '../../Utils/Constants/ActionTypes'

let initState = {
    mode: true,
    id: ''
}
///true : cards

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_MODE:
            if (action.state.id === '')
                return { ...state, mode: action.state.mode };
            return { ...state, ...action.state };
        default:
            return state;
    }
}


export default reducer;