
import * as types from '../../Utils/Constants/ActionTypes'

const setSearch = (query) => ({
    type: types.SET_SEARCH, query
})


export const SearchAction = {
    setQuery : (query = '') =>
        (dispatch) => {
            dispatch(setSearch(query));
        }
}