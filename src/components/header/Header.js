import React, {useState} from 'react';
import {SearchMovie} from "../searchMovie/SearchMovie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {themeAction} from "../../redux/slices/theme.sclice";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [theme, setTheme] = useState(false)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Header</h1>
            <SearchMovie/>
            {!theme ? (<FontAwesomeIcon
                    icon={faToggleOff}
                    className="header__theme"
                    onClick={() => {
                        setTheme(true)
                        dispatch(themeAction.setLightTheme())
                    }
                    }/>)
                : (<FontAwesomeIcon
                    icon={faToggleOn} className="header__theme"
                    onClick={() => {
                        setTheme(false)
                        dispatch(themeAction.setDarkTheme())
                    }}
                />)}





        </div>
    );
};

export  {Header};