import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresActions} from "../../redux/slices";
import css from "./Genres.module.css";


const Genres = () => {
    const {genres} = useSelector(state => state.genresReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, [dispatch]);

    return (
        <div>
            {genres.map(zhanr =>
                < button key={zhanr.id}
                         className={css.main}
                         onClick={() => dispatch(genresActions.setGenre(zhanr))}>
                    {zhanr.name}
                </button>)}
        </div>
    );
};

export {Genres};