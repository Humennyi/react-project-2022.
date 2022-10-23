
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";
import css from "./Pagination.module.css"

const Pagination = ({queryPage}) => {
    const {page} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()


    return (
        <div className={css.bloс}>

            <button onClick={async () => {dispatch(movieActions.prevPage(1))}} disabled={queryPage <= 1} className={css.button}>Prev</button>
            <button  onClick={async () => {dispatch(movieActions.nextPage(1))}} disabled={page >= 500} className={css.button}>Next</button>

        </div>
    );
};

export {Pagination};