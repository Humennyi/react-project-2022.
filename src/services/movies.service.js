import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService={
    getAll:(page)=>axiosService.get(`${urls.movies}?page=${page}`),
    searchMovie: (movieName) => axiosService.get(`${urls.searchMovie}?query=${movieName}`),
    getById: (id) => axiosService(`/movie/${id}`),

}

export {movieService}