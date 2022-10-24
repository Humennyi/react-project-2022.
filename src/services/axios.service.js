import axios from "axios";
import {baseURL} from "../config";

const axiosService=axios.create({baseURL})

const token=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZkMjVlMjM3ZDExYzQyM2EyOTA0NmQ4NjViZGUwYSIsInN1YiI6IjYzNGFmODcxMjBlNmE1MDA3ZDViZDFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8nNLFWukl0_kezOGUa4N3wRH8KGF-facyHYMkkyW46k`

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`

    return config

})

export {
    axiosService
}