import React from "react";
import * as styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import ConnectInfo from "../../Common/ConnectInfo";

import {FaLinkedin} from "react-icons/fa";

class ContactPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"Let's Connect"
                    }>
                    <div className={styles.info}>
                        <ConnectInfo title={"Looking forward to hearing from you!"}
                            email={"mtaffel@umd.edu"}
                            // phone={"404-946-3390"}
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

ContactPage.propTypes = {};

export default ContactPage;