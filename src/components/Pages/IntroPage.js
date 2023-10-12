import React from "react";
import * as style from './IntroPage.module.css';
import BorderedButton from '../Common/BorderedButton';
import SVGText from '../Common/SVGText'
import MainLogo from "../Common/MainLogo";

const IntroPage = () => (
    <div className={style.layout}>

        <MainLogo size={250}/>

        <SVGText text="Meyer Taffel"/>

        <h2 className={style.tagline}>
            <span>Applied Physics</span>
            <span className={style.spacer}> | </span>
            <span>R&D</span>
        </h2>
        
        <div className={style.buttons}>
            <BorderedButton
                to="/pursuits/"
                name="Current Pursuits"
            />
        </div>
    </div>
);

export default IntroPage;