import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {SearchMovie} from "../searchMovie/SearchMovie";
import {themeAction} from "../../redux/slices";

import css from './Header.module.css'
import {UserInfo} from "../userInfo/UserInfo";

const Header = () => {
    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className={css.main}>
            <UserInfo/>

            <SearchMovie/>
            {!theme ? (<FontAwesomeIcon
                    icon={faToggleOff}
                    className={css.button}
                    onClick={() => {
                        setTheme(true)
                        dispatch(themeAction.setLightTheme())
                    }
                    }/>)

                : (<FontAwesomeIcon
                    icon={faToggleOn}
                    className={css.button}
                    onClick={() => {
                        setTheme(false)
                        dispatch(themeAction.setDarkTheme())
                    }}
                />)}
        </div>
    );
};

export {Header};