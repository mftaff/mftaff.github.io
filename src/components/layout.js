import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import styles from './index.module.css'
import Background from "../components/Common/Background";
import {withPrefix} from "gatsby-link";

export default ({children}) => (
    <Background>
        <Helmet
            title="Meyer Taffel - Physics Major | African Educator | Awesome Tutor"
            meta={[
                {
                    name: 'description',
                    content: 'It only takes 10,000 small steps to climb' +
                    ' a mountain. Make each step a memory and build it' +
                    ' on the steps that came before.'
                },
                {name: 'keywords', content: 'meyer, taffel, meyer taffel, coding, mentor, tutor, coding mentor, education, equality, opportunity'},
            ]}
            link={[
                {
                    "rel": "icon",
                    "type": "image/png",
                     "href": require("../images/favicon.png")
                }
            ]}
        />
        <Header/>

        <div className={styles.pages}>
            {children}
        </div>
    </Background>
);