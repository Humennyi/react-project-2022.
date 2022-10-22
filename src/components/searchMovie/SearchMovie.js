import {movieActions} from "../../redux/slices";

import {useDispatch} from "react-redux";

import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const SearchMovie = () => {
    let navigate = useNavigate();

    const {reset, handleSubmit, register} = useForm()

    const dispatch = useDispatch();


    const submit = async (data) => {
        navigate('/');
        console.log(data)
        await dispatch(movieActions.searchMovie({movieName: data.movieName}));

        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'Enter movie name'} {...register('movieName')}/>
            <button>Search</button>
        </form>
    )
}
export {SearchMovie};