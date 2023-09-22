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
                <CardPage title={"My Story:"
                    }>
                    <div className={styles.info}>
                        <CardInfo text={"Hey! I'm Meyer. Add: Current studies/research and hobbies a bit of trivia."}
                            choice1={"Add 2020-2024 here. GSU/move to umd/current."}
                            choice2={"Add 2016-2020 here. Wekka/Freelancing/move to Atlanta/tree fall+covid/climbing"}
                            choice3={"Add 2019-2019 here. Uganda and getting involved in ACTS"}
                            choice4={"Add highschool-2016 here: After graduating highschool in 2012, I spent a year abroad that turned into 6, etc"}
                        />
                        <ConnectInfo title={"That's all for now, stay tuned."}
                            email={"(And the adventure has only just begun.)"}
                            social1={"Upwork"}
                            socialUrl1={"https://www.upwork.com/fl/meyertaffel"}
                            social2={<FaLinkedin />}
                            socialUrl2={"https://www.linkedin.com/in/mftaff/"}/>
                    </div>
                </CardPage>
            </div>
        )
    }
}

AboutPage.propTypes = {};

export default AboutPage;