import React from 'react';

import css from './MovieInfo.module.css'
import {StarRating} from "../starRatihg/StarRating";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {starUrl} from "../../config";

const MovieInfo = ({movie}) => {


    return (
        <div className={css.card}>

            <div className={css.inform}>
                <div className={css.picture}>
                    <h3> {movie.title}</h3>
                    <img className={css.img} src={`${starUrl}${movie.poster_path}`} alt={'poster'}/>
                </div>

                <div className={css.title}>

                    <div className={css.name}>
                        <h1>{movie.original_title}</h1>
                        <p>release date: ({movie.release_date})</p>
                        <p>Oiginal language: {movie.original_language}</p>
                        <p>Votes: {movie.vote_count}</p>
                        <p>Production companies: {movie.production_companies.map(value => <p
                            key={value.id}>{value.name}</p>)}</p>
                    </div>
                    <div>
                        <StarRating rating={movie.vote_average}/>
                        <GenreBadge/>
                    </div>
                </div>
            </div>


            <div className={css.text}>
                <p>{movie.overview}</p>
            </div>


        </div>
    );
};

export {MovieInfo};