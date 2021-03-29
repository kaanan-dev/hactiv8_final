import * as types from '../../Utils/Constants/ActionTypes'

const initState = 'bat';

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_SEARCH:
            return action.query;

        default:
            return state;
    }
}


export default reducer;