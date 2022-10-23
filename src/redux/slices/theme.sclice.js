import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    background: '#18171B', color: 'Silver',
}

const themePicker = createSlice({
    name: 'themePicker', initialState, reducers: {
        setLightTheme: (state, action) => {
            state.background = '#C0C0C0'
            state.color = 'black'

        }, setDarkTheme: (state, action) => {
            state.background = '#18171B'
            state.color = 'Silver'
        }
    }
})

const {reducer: themeReducer, actions: {setLightTheme, setDarkTheme}} = themePicker

const themeAction = {
    setLightTheme, setDarkTheme
}
export {themeAction, themeReducer, themePicker}