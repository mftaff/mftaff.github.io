import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import styles from './index.module.css'
import Background from "../components/Common/Background";
import {withPrefix} from "gatsby-link";

export default ({children}) => (
    <Background>
        <Helmet
            title="Meyer Taffel - Web Developer & Consultant"
            meta={[
                {
                    name: 'description',
                    content: 'Working with you to turn your vision' +
                    ' into your reality. I will help you focus your' +
                    ' site\'s message to point to one thing - smiling users'
                },
                {name: 'keywords', content: 'meyer, taffel, meyer taffel, web developing, web consulting, freelence developer'},
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