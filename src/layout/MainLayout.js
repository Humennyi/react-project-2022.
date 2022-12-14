
import css from './MainLayout.module.css'
import {Header} from "../components";
import {Outlet} from "react-router-dom";


const MainLayout = () => {

    return (
        <div className={css.main}>
            <div>
                <Header/>
                <Outlet/>
            </div>


        </div>
    );
};

export {MainLayout};