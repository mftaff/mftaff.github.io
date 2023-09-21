import React from 'react'
// import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import * as styles from './index.module.css'
import Background from "../components/Common/Background";

const layout = ({children}) => (
    <Background>
        {/* <Helmet
            title="Meyer Taffel - Freelance Web Developer | Physics Major"
            meta={[
                {
                    name: 'description',
                    content: 'Add description here'
                },
                {
                    name: 'keywords',
                    content: 'meyer, taffel, meyer taffel, physics, uas, uxo, drone, geophysics, coding'
                },
            ]}
            link={[
                {
                    "rel": "icon",
                    "type": "image/png",
                     "href": require("../images/favicon.png")
                }
            ]}
        /> */}
        <Header/>

        <div className={styles.pages}>
            {console.log("sourced from: https://github.com/jangerhard/PersonalGatsbyWebsite")}
            {children}
        </div>
    </Background>
);
export default layout;

export const Head = () => (
    <>
      <title>Meyer Taffel - Developer | B.S Physics</title>
      <meta name="description" content="Hello World" />
      <link rel="icon" type="image/png" href="../images/favicon.png" />
    </>
  )