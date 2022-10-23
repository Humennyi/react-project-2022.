import {movieActions} from "../../redux/slices";

import {useDispatch} from "react-redux";

import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import css from"./SearchMovie.module.css"

const SearchMovie = () => {
    let navigate = useNavigate();

    const {reset, handleSubmit, register} = useForm()

    const dispatch = useDispatch();


    const submit = async (data) => {
        navigate('/');

        await dispatch(movieActions.searchMovie({movieName: data.movieName}));

        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>

            <input
                type="text"
                placeholder={'Enter movie name'}
                {...register('movieName')}
                className={css.input}
            />
            <button className={`${css.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    )
}
export {SearchMovie};