import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";


const initialState={
    genres:[],
    genre: null,


}
const getGenres=createAsyncThunk(
    "ganderSlice/getGenres",
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genresService.getGenres()
            return data.genres
        }catch (e) {
            return rejectWithValue(e.response?.data)

        }
    }
)



const genresSlice = createSlice({
    name: 'ganderSlice',
    initialState,
    reducers: {
        setGenre:(state,action)=>{
            state.genre=action.payload
            console.log(state.genre);
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
});


const {reducer: genresReducer,actions:{ setGenre}} = genresSlice;

const genresActions = {
    getGenres,
    setGenre
};

export {
    genresActions,
    genresReducer
}