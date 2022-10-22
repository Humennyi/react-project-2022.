import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    error: null,
    loading: false,
}

const getAll = createAsyncThunk(
    "movieSlice/getAll",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const searchMovie = createAsyncThunk(
    "movieSlice/ searchMovie",
    async ({movieName}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(movieName);
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });
let getMovieInfo = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            state.page += 1
        },
        prevPage: (state, action) => {
            state.page -= 1
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })

            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false
            })


});

const {reducer: movieReducer, actions: {nextPage, prevPage}} = movieSlice;

const movieActions = {
    getAll,
    searchMovie,
    getMovieInfo,
    nextPage,
    prevPage,


};

export {
    movieActions,
    movieReducer
}