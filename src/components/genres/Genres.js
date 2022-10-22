import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genderActions} from "../../redux/slices";
import {Genre} from "../genre/Genre";


const Genres = () => {
    const {genres} = useSelector(state => state.gendersReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genderActions.getGenres());
    }, []);
    return (
        <div>
            { genres?.genres?.map (genre=> < Genre key={genre.id} genre={genre}/>)}




        </div>
    );
};

export {Genres};