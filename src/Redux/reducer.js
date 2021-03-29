import { combineReducers } from "redux";
import movieReducer from "./Movies/reducer";
import searchReducer from "./Search/reducer";
import loadingReducer from "./Loading/reducer";
import modeReducer from "./Mode/reducer";


export const makeRootReducer = () => (
    combineReducers({
        movies: movieReducer,
        search: searchReducer,
        mode: modeReducer,
        loading: loadingReducer
    })
)