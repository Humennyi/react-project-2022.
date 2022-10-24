import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Movie} from "../movie/Movie";
import {movieActions} from "../../redux/slices";
import {Pagination} from "../pagination/Pagination";
import css from './Movies.module.css'




const Movies = () => {
    const {movies,page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const {genre}=useSelector(state => state.genresReducer)

    useEffect(() => {
        if(genre){
            dispatch(movieActions.getMovieWithGenre({genre:genre.id}))
            console.log(genre);
        }else {
            dispatch(movieActions.getAll(page))
        }
    }, [page,dispatch,genre ]);


    return (
        <div >
            <div className={css.main}>
                {
                    movies.results?.map(movie=><Movie key={movie.id} movie={movie}/>)
                }
            </div>

            <Pagination className={css.pag} />
        </div>
    );
};

export {Movies};