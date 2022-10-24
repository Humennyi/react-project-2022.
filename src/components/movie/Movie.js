import React from 'react';
import {useNavigate} from "react-router-dom";

import {StarRating} from "../starRatihg/StarRating";
import {starUrl} from "../../config";
import css from './Movie.module.css'

const Movie = ({movie}) => {


    const navigate = useNavigate();

    function click() {
        navigate('/movieInfo', {state: movie.id});
    }

    return (
        <div className={css.card}>
            <div onClick={() => click()}>

                <h2>{movie.original_title}</h2>
                <img className={css.img} src={`${starUrl}${movie.poster_path}`} alt={'poster'}/>
                <StarRating rating={movie.vote_average}/>
            </div>
        </div>
    );
};

export {Movie};