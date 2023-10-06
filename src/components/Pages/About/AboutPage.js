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
                                "My name’s Meyer, I am a non-traditional undergraduate physics major in my final year at University of Maryland. I’ve returned to study physics to use applied physics R&D to contribute to transitioning to a sustainable world.",
                                "Beginning Summer 2021, I’ve been an undergraduate researcher in applied physics / geophysics with Lathrop Labs. I conduct independent research and collaborate with my fellow lab members.",
                                "My research role is primarily connected with the NSF grant - “Aerial Vehicle using AI for Landmine Detection” (AVAILD). I designed and fabricated the landing gear for our altaX drone (wingspan over 7ft!) as well as the payload integration for our sensor suite. This required extensive knowledge of Fusion360/autoCAD, machining, 3D-printing, and CFRP FDM.",
                                "Now that we are up and flying (I’m an FAA-certified sUAS Pilot), I am working on data collection and analysis for near-surface anomaly/utility detection.",
                                "In addition to my current research role, I also have a strong background (6+ yrs) in software development; including co-founding a tech startup and freelancing as a full-stack developer prior to my time here at UMD. I’m extremely experienced in Python, Matlab, JS, React and Rails.",
                                "Apart from pursuing applied physics, I’m also the coordinator for ACTS Int'l, U.S. Chapter (a Ugandan non-profit). We aim to provide a brighter future for young Ugandans by connecting them with educational sponsors.",
                                "When I’m not in the lab, you’ll typically find me out in the mountains rock climbing or exploring our wonderful world!",
                                "I’m interested in opportunities in R&D towards sustainability or drone-based physics/geophysics."
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