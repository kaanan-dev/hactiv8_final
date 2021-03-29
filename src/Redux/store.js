import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { makeRootReducer } from './reducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState) {
    const history = createBrowserHistory();
    return createStore(
        makeRootReducer(history),
        preloadedState,
        applyMiddleware(thunkMiddleware))
}