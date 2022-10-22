import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";
import {MovieInfo} from "../../components/movieInfo/MovieInfo";

const MovieInfoPage = () => {
    let {state: id} = useLocation();
    let dispatch = useDispatch();
    let {movie} = useSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(movieActions.getMovieInfo({id}));
    }, [id, dispatch]);
    return (
        <div>
            {movie ? <MovieInfo movie={movie}/>:false}
        </div>
    );
};

export  {MovieInfoPage};