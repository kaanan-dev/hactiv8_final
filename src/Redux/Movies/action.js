import * as types from '../../Utils/Constants/ActionTypes'
import * as key from '../../Utils/Constants/key'
import * as xhr from '../../Utils/xhr'


const getMovies = (payload) => ({
    type: types.GET_MOVIES,
    payload
})

const getMovieDetail = (payload) => ({
    type: types.GET_MOVIESDETAIL,
    payload
})


export const MoviesAction = {
    searchMovies: (query = '', pages = 1) =>
        async (dispatch) => {
            let result = await xhr.get(`http://www.omdbapi.com/?s=${query}&page=${pages}&apikey=${key.apiKey}`);
            dispatch(getMovies(result));
        },
    getDetail:(id='') => 
        async (dispatch) => {
            let result = await xhr.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${key.apiKey}`);
            dispatch(getMovieDetail(result));
        }
}

