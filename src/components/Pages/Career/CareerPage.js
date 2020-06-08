import React from 'react';
import styles from './CareerPage.module.css';
import CareerShowcase from './CareerShowcase';
import wekkaSite from "../../../images/wekka_site.png";
import bearfaceSite from "../../../images/bearface_site.png";

class CareerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wekkaHovering: false,
            bearfaceHovering: false,
        }
    }

    hoverWekkaHandler = () => {
        this.setState({wekkaHovering: !this.state.wekkaHovering})
    }
    
    hoverBearfaceHandler = () => {
        this.setState({bearfaceHovering: !this.state.bearfaceHovering})
    }

    render() {
        return (
            <div className={styles.career}>
                <div className={styles.grid}>
                    <CareerShowcase
                        title={
                        <div>
                            <span>Co Founder</span>
                            <span>Director of R&amp;D</span>
                        </div>
                        }
                        company={"Wekka.co"}
                        dates={"Dec 2017 - Mar 2019"}
                        image={wekkaSite}
                        shortDesc={
                            "Wekka was a digital marketer recruiting platform." +
                            " Using smart matching and video resumes, Wekka" +
                            " provided digital marketers the online presence" +
                            " they wanted during their job search."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Founder Responsibilities:</p>
                                <ul>
                                    <li>Developed business strategy and kept Wekka on target.</li>
                                    <li>Developed marketing roadmap targeting early adopters.</li>
                                    <li>Developed sales strategy and led implementation.</li>
                                </ul>
                                <p>Technical Responsibilities:</p>
                                <ul>
                                    <li>Created application specific matching algorithm.</li>
                                    <li>Built and managed backend using Rails/PostgreSQL.</li>
                                    <li>Built and managed frontend using Bootstrap/Jquery.</li>
                                </ul>
                            </div>
                        }
                        url={"https://wekka-staging.herokuapp.com"}
                        target={"_blank"}
                        hovering={this.state.wekkaHovering}
                        hoverOn={this.hoverWekkaHandler}
                        hoverOff={this.hoverWekkaHandler}
                    />
                    <CareerShowcase
                        title={
                            <div>
                                <span>Full Stack Web</span>
                                <span>Developer</span>
                            </div>
                        }
                        company={"BearFace Media"}
                        dates={"Nov 2017 - Mar 2018"}
                        image={bearfaceSite}
                        shortDesc={
                            "Bearface Media is a tech firm that utilizes modern" + 
                            " intuitive design and cloud based infrastructure to" +
                            " build custom-fit web applications."}
                        roleDesc={
                            <div className={styles.roleDesc}>
                                <p>Responsibilities:</p>
                                <ul>
                                    <li>Worked with clients to customize their UI for specific needs.</li>
                                    <li>Developed the online scheduling component of BearFace’s app suite.</li>
                                    <li>Developed the quote generating component of BearFace’s app suite.</li>
                                    <li>Updated old source code to bring it inline with modern best-practices.</li>
                                </ul>
                            </div>
                        }
                        url={"https://www.bearface.io/"}
                        target={"_blank"}
                        hovering={this.state.bearfaceHovering}
                        hoverOn={this.hoverBearfaceHandler}
                        hoverOff={this.hoverBearfaceHandler}
                    />
                </div>
            </div>
        )
    }
}

CareerPage.propTypes = {};

export default CareerPage;