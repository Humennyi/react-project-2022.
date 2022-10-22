import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";


const initialState={
    genres:[],


}
const getGenres=createAsyncThunk(
    "ganderSlice/getGenres",
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genresService.getGenres()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
)

const genderSlice = createSlice({
    name: 'ganderSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
});


const {reducer: gendersReducer} = genderSlice;

const genderActions = {
    getGenres
};

export {
    genderActions,
    gendersReducer
}