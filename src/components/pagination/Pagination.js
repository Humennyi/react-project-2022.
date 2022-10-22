import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";

const Pagination = () => {
    const {page} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()


    return (
        <div>

            <button onClick={async () => {dispatch(movieActions.prevPage(1))}} disabled={page <= 1}>Prev</button>
            <button  onClick={async () => {dispatch(movieActions.nextPage(1))}} disabled={page >= 500}>Next</button>

        </div>
    );
};

export {Pagination};