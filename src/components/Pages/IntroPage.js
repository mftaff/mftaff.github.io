import React from "react";
import style from './IntroPage.module.css';
import BorderedButton from '../Common/BorderedButton';
import SVGText from '../Common/SVGText'
import MainLogo from "../Common/MainLogo";

const IntroPage = () => (
    <div className={style.layout}>

        <MainLogo size={200}/>

        <SVGText text="Meyer Taffel"/>

        <h2 className={style.tagline}>
            <span>Startup Founder</span>
            <span className={style.spacer}> - </span>
            <span>African Educator</span>
            <span className={style.spacer}> - </span>
            <span>Awesome Tutor</span>
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