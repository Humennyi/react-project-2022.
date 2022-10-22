import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {gendersReducer, movieReducer} from "./slices";
import {themeReducer} from "./slices/theme.sclice";



const rootReducer=combineReducers({
    movieReducer,
    gendersReducer,
    themeReducer
});

const setupStore=()=>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}