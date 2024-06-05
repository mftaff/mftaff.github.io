import React from "react";
import * as styles from './AboutPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ConnectInfo from "../../Common/ConnectInfo";

import {FaLinkedin} from "react-icons/fa";

class AboutPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"About Me:"
                    }>
                    <div className={styles.info}>
                        <CardInfo text={"Hello!"}
                            paragraphs={[
                                "My name’s Meyer. I am a recently graduated physics major with a B.SC from University of Maryland (UMD). I’m interested in opportunities in R&D, manufacturing, and remote sensing geophysics.",
                                "Since summer 2021, I’ve been a research assistant in applied physics / geophysics with Lathrop Labs. I conduct independent research and collaborate with my fellow lab members.",
                                "My research is funded by the NSF grant - “Aerial Vehicle using AI for Landmine Detection” (AVAILD) and UMD's Grand Challenges Grant. I designed and fabricated the landing gear for our altaX drone (TOW of 25 kg), as well as the payload integration for our sensor suite (magnetic gradiometer, lidar, thermal imager). This required extensive knowledge of Fusion360/autoCAD, machining, 3D-printing, and CFRP FDM.",
                                "I’m also our team’s part-107 pilot and have flown missions at several locations across the U.S.",
                                "On the data side, I am working on data acquisition and analysis of anomalies in the near-surface. This includes detection and categorization of land mines through AVAILD and utility mapping through my independent research. Methodologies include magnetic gradiometry and trans-dimensional inversion modeling.",
                                "In addition to my current research role, I have 7+ years coding experience across various languages, including Python, Matlab, Javascript, React, and Rails. I also have a strong background in project and software development. This includes co-founding a tech startup and freelancing as a full-stack developer prior to my time at UMD.",
                                "Apart from working in applied physics, I’m the U.S. coordinator for a Ugandan non-profit. We build schoolhouses in Bulambuli and aim to provide a brighter future for young Ugandans by connecting them with educational sponsors.",
                                "When I’m not in the lab, you’ll typically find me out in the mountains rock climbing or exploring our wonderful world!",
                                "Looking forward to hearing about related opportunities."
                            ]}
                        />
                        {/* <CardInfo text={"Hey! I'm Meyer. Add: Current studies/research and hobbies a bit of trivia."}
                            choice1={"Add 2020-2024 here. GSU/move to umd/current."}
                            choice2={"Add 2016-2020 here. Wekka/Freelancing/move to Atlanta/tree fall+covid/climbing"}
                            choice3={"Add 2019-2019 here. Uganda and getting involved in ACTS"}
                            choice4={"Add highschool-2016 here: After graduating highschool in 2012, I spent a year abroad that turned into 6, etc"}
                        /> */}
                        <ConnectInfo
                            title={"Let's Connect!"}
                            email={"mtaffel@umd.edu"}
                            social1={"Upwork"}
                            socialUrl1={"https://www.upwork.com/fl/meyertaffel"}
                            social2={<FaLinkedin />}
                            socialUrl2={"https://www.linkedin.com/in/mftaff/"}
                        />
                    </div>
                </CardPage>
            </div>
        )
    }
}

AboutPage.propTypes = {};

export default AboutPage;