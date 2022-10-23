import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService={
    getAll:(page)=>axiosService.get(`${urls.movies}?page=${page}`),
    searchMovie: (movieName) => axiosService.get(`${urls.searchMovie}?query=${movieName}`),
    getById: (id) => axiosService(`/movie/${id}`),
    getMovieWithGenre:(genre)=>axiosService.get(`${urls.movies}?with_genres=${genre}`)

}

export {movieService}