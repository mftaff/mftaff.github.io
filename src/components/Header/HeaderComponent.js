import React from 'react'
import * as style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';
import {Link, withPrefix} from 'gatsby';
import MainLogo from "../Common/MainLogo";

const Header = () => {

    let isHomePage = typeof window !== 'undefined'
        && window.location.pathname === withPrefix("/");

    return (

        <div className={style.header}>

            {!isHomePage ? (
                <Link to="/">
                    <MainLogo size={70}/>
                </Link>
            ) : (
                <div className={style.emptyDiv}/>
            )}

            <div className={style.links}>

                <FlatButton to="/connect/" name="Connect"/>
                <FlatButton to="/career/" name="Career"/>
                <FlatButton to="/education/" name="Education"/>
                <FlatButton to="/contact/" name="Contact"/>

            </div>
        </div>
    );
};

export default Header
