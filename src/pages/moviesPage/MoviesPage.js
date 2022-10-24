import {Genres, Movies} from "../../components";
import css from "./moviesPage.module.css"



function MoviesPage() {

    return (
        <div className={css.blok}>

            <Genres className={css.genres}/>
            <Movies className={css.movies}/>
        </div>
    );
}

export {MoviesPage};