import React from "react";
import styles from './ConnectPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ConnectInfo from "../../Common/ConnectInfo";

import LinkedinIcon from "react-icons/lib/fa/linkedin-square";

class ConnectPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"2+ years coding experience plus demonstrated success in a mentor role."
                    }>
                    <div className={styles.info}>
                        <CardInfo text={"3 reasons I'm the right choice for you:"}
                            choice1={"1) I led R&D at an Israeli startup shortly after" + 
                            " graduating an online coding school. More than simply demonstrating coding" +
                            "  knowhow, my experience will inspire online learners to see what is possible."}
                            choice2={"2) I responded to the Covid-19 shutdown by creating" +
                            " and leading an online classroom for 25+ students. My efforts resulted in" +
                            " course grades of 84 and higher for participating students."}
                            choice3={"3) I run a mentor-based education project in Bududa Uganda. Seeing" +
                            " the smiling faces of african kids thriving is forever heartwarming. My" +
                            " passion for bringing out the best in others is what fuels me everyday."}/>
                        <ConnectInfo title={"I'd love to share more! Reach out:"}
                            email={"meyertaffel (gmail)"}
                            phone={"404-946-3390"}
                            social1={"Upwork"}
                            socialUrl1={"https://www.upwork.com/fl/meyertaffel"}
                            social2={<LinkedinIcon />}
                            socialUrl2={"https://www.linkedin.com/in/mftaff/"}/>
                    </div>
                </CardPage>
            </div>
        )
    }
}

ConnectPage.propTypes = {};

export default ConnectPage;