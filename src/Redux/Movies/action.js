import * as types from '../../Utils/Constants/ActionTypes'
import * as key from '../../Utils/Constants/key'
import * as xhr from '../../Utils/xhr'
import { ErrorAction } from '../../Utils/Error';
import { LoadingAction } from "../Loading/action";


const getMovies = (payload, totalData) => ({
    type: types.GET_MOVIES,
    payload,
    totalData
})

const getMovieDetail = (payload) => ({
    type: types.GET_MOVIESDETAIL,
    payload
})

const addMovies = (payload) => ({
    type: types.ADD_MOVIES, payload
})

const setSize = (payload) => ({
    type: types.SET_PAGES_SIZE, payload
})

const setPage = (payload) => ({
    type: types.SET_PAGES_INDEX, payload
})

export const MoviesAction = {
    getMovies: (query = '') =>
        async (dispatch, getState) => {
            dispatch(LoadingAction.setStatus(true));
            let pages = 1;
            let result = await xhr.get(`http://www.omdbapi.com/?s=${query}&page=${pages}&apikey=${key.apiKey}`);

            if (!result.Search) ErrorAction.setError(result.Error);

            let dataResult = result.Search.map((v, i) => ({ ...v, Index: i }));
            dispatch(getMovies(dataResult, result.totalResults));
            let state = getState().movies;
            for (let i = state.size; i > 0; i--) {
                let currentState = state.item[(state.page * state.size) - i];
                if (currentState && !currentState.Plot) {
                    dispatch(MoviesAction.getDetail(currentState.imdbID))
                }
            }
            dispatch(LoadingAction.setStatus(false));
        },
    addMovies: (query = '', pages = 1) =>
        async (dispatch, getState) => {
            dispatch(LoadingAction.setStatus(true));
            let result = await xhr.get(`http://www.omdbapi.com/?s=${query}&page=${pages}&apikey=${key.apiKey}`);
            if (!result.Search) ErrorAction.setError(result.Error);

            let dataResult = result.Search.map((v, i) => ({ ...v, Index: ((pages - 1) * 10) + i }));
            dispatch(addMovies(dataResult));

            let state = getState().movies;
            for (let i = state.size; i > 0; i--) {
                let currentState = state.item[(state.page * state.size) - i];
                if (currentState && !currentState.Plot) {
                    dispatch(MoviesAction.getDetail(currentState.imdbID))
                }
            }
            dispatch(LoadingAction.setStatus(false));
        },
    getDetail: (id = '') =>
        async (dispatch) => {
            if (id == '') return;
            let result = {};
            result = await xhr.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${key.apiKey}`);
            dispatch(getMovieDetail(result));
        },
    setPageIndex: (pages = 1) =>
        async (dispatch, getState)  => {
            dispatch(setPage(pages));
            let index = (pages * 10) - 5;
            let state = getState().movies;
            let search = getState().search;
            let isNeedData = !state.item.some(v => (v.Index == index))
            if (isNeedData)
                dispatch(MoviesAction.addMovies(search, pages));
        },
    setPageSize: (pageSize = 10) =>
        async (dispatch) => {
            dispatch(setSize(pageSize));
        }
}

