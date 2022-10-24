import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, movieReducer, themeReducer} from "./slices";

const rootReducer=combineReducers({
    movieReducer,
    genresReducer,
    themeReducer
});

const setupStore=()=>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}