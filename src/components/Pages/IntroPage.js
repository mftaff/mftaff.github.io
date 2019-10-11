import React from "react";
import style from './IntroPage.module.css';
import BorderedButton from '../Common/BorderedButton';
import SVGText from '../Common/SVGText'
import MainLogo from "../Common/MainLogo";

const IntroPage = () => (
    <div className={style.layout}>

        <MainLogo size={200}/>

        <SVGText text="Meyer Taffel"/>

        <h2>Freelance Web Developer &#38; Consultant </h2>
        
        <div className={style.buttons}>
            <BorderedButton
                href="https://www.upwork.com/o/profiles/users/_~012490bacb843285d0/"
                target="_blank"
                name="UpWork"
            />
            <BorderedButton
                href="https://www.linkedin.com/in/mftaff/"
                target="_blank"
                name="LinkedIn"
            />
        </div>
    </div>
);

export default IntroPage;