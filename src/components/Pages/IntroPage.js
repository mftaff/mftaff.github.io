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
            <span>Freelance Web Developer</span>
            <span className={style.spacer}> - </span>
            <span>Physics Student</span>
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