import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer} from "./slices";
import {themeReducer} from "./slices/theme.sclice";



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