import css from './App.css';
import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/moviesPage/MoviesPage";
import {MovieInfoPage} from "./pages/movieInfoPage/MovieInfoPage";
import {MainLayout} from "./layout/MainLayout";
import {SearchMovie} from "./components/searchMovie/SearchMovie";
import {useSelector} from "react-redux";



function App() {
    const {background, color} = useSelector(state => state.themeReducer)
    return (
        <div className={css.App}>
            <div style={{color: color, background: background }}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<MoviesPage/>}/>
                        <Route path={'/movieInfo'} element={<MovieInfoPage/>}/>
                        <Route path={'/searchMovie'} element={<SearchMovie/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
