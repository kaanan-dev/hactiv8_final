import * as types from '../../Utils/Constants/ActionTypes'

let initialState =
{
    page: 1,
    size: 10,
    item:
        [
            {
                "Index": 0,
                "Title": "Casey at the Bat",
                "Year": "1946",
                "imdbID": "tt0038399",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MTc5MDg3OV5BMl5BanBnXkFtZTcwMDI1NTQzMQ@@._V1_SX300.jpg"
            },
            {
                "Index": 1,
                "Title": "Classic Albums: Meat Loaf - Bat Out of Hell",
                "Year": "1999",
                "imdbID": "tt0235298",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0OTI5NzAxNV5BMl5BanBnXkFtZTcwMzE2MTAzMQ@@._V1_SX300.jpg"
            },
            {
                "Index": 2,
                "Title": "The Bat Man of Shanghai",
                "Year": "2012",
                "imdbID": "tt2273962",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDNhYmFjZGQtNjE3ZC00N2VmLWI0MWItODkxMmE2MWNiM2M5XkEyXkFqcGdeQXVyNzU1OTYxNzU@._V1_SX300.jpg"
            }, {
                "Index": 3,
                "Title": "The Golden Bat",
                "Year": "1966",
                "imdbID": "tt0167320",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNWJhZDRjZTctMGU5MC00OGMzLThiZTYtNjllZmUwNzNjOWM1XkEyXkFqcGdeQXVyMjExMzEyNTM@._V1_SX300.jpg"
            },
            {
                "Index": 4,
                "Title": "The Sea Bat",
                "Year": "1930",
                "imdbID": "tt0021345",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BM2JmYjU3ODYtZWFhOS00ZWFhLWIwMWQtMWZmYTgyM2MwNjUxXkEyXkFqcGdeQXVyNDAzOTcxOTE@._V1_SX300.jpg"
            },
            {
                "Index": 5,
                "Title": "Meat Loaf: Bat Out of Hell II - Picture Show",
                "Year": "1994",
                "imdbID": "tt0364980",
                "Type": "movie",
                "Poster": "N/A"
            },
            {
                "Index": 6,
                "Title": "Crimson Bat, the Blind Swordswoman",
                "Year": "1969",
                "imdbID": "tt0165379",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzE5OWU1ZTctZjk5Zi00MTE3LThkZWEtMzBiZDBjODU1ODhhXkEyXkFqcGdeQXVyNjUzNzQ4NDQ@._V1_SX300.jpg"
            },
            {
                "Index": 7,
                "Title": "Legend of the Bat",
                "Year": "1978",
                "imdbID": "tt0079454",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTJjMjA1ZDAtZmVmNC00YmNhLThkODItNDI0NzM3YWM4YjI1XkEyXkFqcGdeQXVyMjcwNDczMjY@._V1_SX300.jpg"
            },
            {
                "Index": 7,
                "Title": "Bat sei ching mai",
                "Year": "2001",
                "imdbID": "tt0306522",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMzIwOTk2OF5BMl5BanBnXkFtZTcwNzMzMjAyMQ@@._V1_SX300.jpg"
            },
            {
                "Index": 9,
                "Title": "Bat Without Wings",
                "Year": "1980",
                "imdbID": "tt0080420",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZjFhNzlhMDctM2VkYy00OTA2LWEzN2MtZjYwZWUzZThiMWYwXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
            }
        ],
    totalData: 1230
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES:
            return { page: 1, size: 10, item: action.payload, totalData:action.totalData };
        case types.ADD_MOVIES:
            return { ...state, item: [... new Set([...state.item, ...action.payload]) ] };
        case types.GET_MOVIESDETAIL:
            let changes = state.item.map(v => { if (v.imdbID == action.payload.imdbID) return { ...v, ...action.payload }; return v; });
            return { ...state, item: [...changes] };
        case types.SET_PAGES_SIZE:
            return { ...state, size: action.payload };
        case types.SET_PAGES_INDEX:
            return { ...state, page: action.payload };
        default:
            return state;
    }
}


export default reducer;