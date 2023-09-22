import React from "react";
import * as styles from './ConnectPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ConnectInfo from "../../Common/ConnectInfo";

import {FaLinkedin} from "react-icons/fa";

class ConnectPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"5+ years coding experience and a 100% satisfaction rate with my clients."
                    }>
                    <div className={styles.info}>
                        <CardInfo text={"3 reasons to consider working together on your project:"}
                            choice1={"1) I led R&D at an Israeli startup shortly after graduating" +
                            " from an online coding school. The design schools of Tel Aviv inspired" +
                            " my design aesthetic, and I have real-world experience getting projects" +
                            " up and running with minimal investment costs."}
                            choice2={"2) I'm top-rated on Upwork, with a 100% job success rate. You can" +
                            " browse through my clients' feedback; They've got great things to say ;)"}
                            choice3={"3) I pride myself on my client relationships. Working with me, you" +
                            " will find that I am communicative, collaborative, and creative, with the ability" +
                            " to design websites whose effortless aesthetic masks complex functionality."}/>
                        <ConnectInfo title={"Looking forward to hearing from you! Reach out:"}
                            email={"meyertaffelwebsolutions (gmail)"}
                            phone={"404-946-3390"}
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

ConnectPage.propTypes = {};

export default ConnectPage;