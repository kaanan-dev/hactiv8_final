import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import combinedReducer from './Reducers/reducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState) {
    const history = createBrowserHistory();
    return createStore(
        combinedReducer(history),
        preloadedState,
        applyMiddleware(thunkMiddleware))
}