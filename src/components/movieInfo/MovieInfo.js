import React from 'react';
import css from './MovieInfo.module.css'
import {StarRating} from "../starRatihg/StarRating";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {starUrl} from "../../config";

const MovieInfo = ({movie}) => {



    return (
        <div className={css.card}>
            <div>

                <h3> {movie.title}</h3>
                <img className={css.img} src={`${starUrl}${movie.poster_path}`} alt={'poster'}/>

            </div>
            <div>
                <StarRating rating={movie.vote_average}/>
                <GenreBadge />
            </div>
            <div>
                <h1>{movie.original_title}</h1>
                <p>release date: ({movie.release_date})</p>
                <p>Oiginal language: {movie.original_language}</p>
                <p>Votes: {movie.vote_count}</p>
                <div>Production companies: {movie.production_companies.map(value => <p
                    key={value.id}>{value.name}</p>)}</div>
                <div>
                    <p>{movie.overview}</p>
                </div>

            </div>



        </div>
    );
};

export {MovieInfo};