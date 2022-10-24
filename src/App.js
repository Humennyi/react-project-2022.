
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {MainLayout} from "./layout";
import {MovieInfoPage, MoviesPage} from "./pages";
import {SearchMovie} from "./components";





function App() {
    const {background, color} = useSelector(state => state.themeReducer)
    return (
        <div >
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
